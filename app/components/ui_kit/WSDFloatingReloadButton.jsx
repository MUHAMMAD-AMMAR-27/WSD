/**
 * Usage example:
 *
 * function App() {
 *   const containerRef = useRef(null);
 *
 *   return (
 *     <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
 *       <div style={{ flex: 1 }}>Left panel</div>
 *       <div ref={containerRef} style={{ flex: 1, position: "relative", overflow: "hidden" }}>
 *         Right panel content…
 *         <WSDFloatingReloadButton
 *           onClick={() => console.log("reload!")}
 *           parentRef={containerRef}
 *         />
 *       </div>
 *     </div>
 *   );
 * }
 *
 * IMPORTANT: parent div must have position: "relative"
 */

import { useState, useRef, useEffect, useCallback } from "react";
import { RotateCw } from "lucide-react";

const STORAGE_KEY = "frb_position_v1"; // separate key — doesn't collide with resize toggle
const BTN_SIZE = 52;
const PADDING = 10;

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function loadSavedPosition() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (typeof parsed.x === "number" && typeof parsed.y === "number") return parsed;
    }
  } catch (_) {}
  return null;
}

function savePosition(pos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pos));
  } catch (_) {}
}

function clearSavedPosition() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (_) {}
}

export default function WSDFloatingReloadButton({ onClick, parentRef }) {
  const [pos, setPos] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const btnRef = useRef(null);
  const dragOrigin = useRef(null);
  const moved = useRef(false);

  const getContainerRect = useCallback(() => {
    if (parentRef?.current) return parentRef.current.getBoundingClientRect();
    return { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
  }, [parentRef]);

  const clampToContainer = useCallback(
    (x, y, rect) => {
      const r = rect ?? getContainerRect();
      return {
        x: clamp(x, PADDING, r.width  - BTN_SIZE - PADDING),
        y: clamp(y, PADDING, r.height - BTN_SIZE - PADDING),
      };
    },
    [getContainerRect]
  );

  const defaultPosition = useCallback(() => ({
    x: PADDING * 2,
    y: (BTN_SIZE * 2) + PADDING * 4,
  }), []);

  // Resolve initial position after flex layout has painted.
  useEffect(() => {
    function resolve() {
      const rect = getContainerRect();
      if (rect.width === 0 || rect.height === 0) {
        requestAnimationFrame(resolve);
        return;
      }
      const saved = loadSavedPosition();
      if (saved) {
        const isValid =
          saved.x >= PADDING &&
          saved.x <= rect.width  - BTN_SIZE - PADDING &&
          saved.y >= PADDING &&
          saved.y <= rect.height - BTN_SIZE - PADDING;
        if (isValid) {
          setPos({ x: saved.x, y: saved.y });
        } else {
          clearSavedPosition();
          setPos(defaultPosition());
        }
      } else {
        setPos(defaultPosition());
      }
    }
    requestAnimationFrame(resolve);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Re-clamp on resize.
  useEffect(() => {
    function handleResize() {
      setPos((prev) => (prev ? clampToContainer(prev.x, prev.y) : prev));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [clampToContainer]);

  // ─── Pointer events ───────────────────────────────────────────────────────

  const handlePointerDown = useCallback(
    (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      e.preventDefault();
      moved.current = false;

      const rect = getContainerRect();
      const mouseInContainer = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      dragOrigin.current = {
        offsetX: mouseInContainer.x - (pos?.x ?? PADDING),
        offsetY: mouseInContainer.y - (pos?.y ?? PADDING),
      };

      btnRef.current?.setPointerCapture(e.pointerId);
      setIsDragging(true);
    },
    [getContainerRect, pos]
  );

  const handlePointerMove = useCallback(
    (e) => {
      if (!dragOrigin.current) return;

      const rect = getContainerRect();
      const mouseInContainer = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      const newX = mouseInContainer.x - dragOrigin.current.offsetX;
      const newY = mouseInContainer.y - dragOrigin.current.offsetY;

      if (Math.abs(newX - (pos?.x ?? 0)) > 3 || Math.abs(newY - (pos?.y ?? 0)) > 3) {
        moved.current = true;
      }
      if (!moved.current) return;

      setPos(clampToContainer(newX, newY, rect));
    },
    [getContainerRect, clampToContainer, pos]
  );

  const handlePointerUp = useCallback(
    (e) => {
      if (!dragOrigin.current) return;
      dragOrigin.current = null;
      setIsDragging(false);
      btnRef.current?.releasePointerCapture(e.pointerId);

      if (moved.current) {
        setPos((prev) => {
          if (prev) savePosition(prev);
          return prev;
        });
      } else {
        // Tap/click — spin the icon then fire onClick.
        setIsSpinning(true);
        setTimeout(() => setIsSpinning(false), 600);
        onClick?.();
      }
    },
    [onClick]
  );

  const handlePointerCancel = useCallback(() => {
    dragOrigin.current = null;
    setIsDragging(false);
  }, []);

  if (!pos) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: pos.x,
        top: pos.y,
        width: BTN_SIZE,
        height: BTN_SIZE,
        zIndex: 9999,
        willChange: "left, top",
      }}
    >
      <style>{`
        @keyframes frb-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
      <button
        ref={btnRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        aria-label="Reload"
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          width: BTN_SIZE,
          height: BTN_SIZE,
          borderRadius: "50%",
          border: "2px solid #fff",
          background: "#000",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          outline: "none",
          padding: 0,
          userSelect: "none",
          touchAction: "none",
          transition: isDragging
            ? "none"
            : "box-shadow 150ms ease",
          boxShadow: isDragging
            ? "0 8px 24px rgba(0,0,0,0.2)"
            : "0 0 0 0 transparent",
          transform: isDragging ? "scale(1.1)" : "scale(1)",
        }}
        onMouseEnter={(e) => {
          if (!isDragging) e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,0,0,0.25)";
        }}
        onMouseLeave={(e) => {
          if (!isDragging) e.currentTarget.style.boxShadow = "0 0 0 0 transparent";
        }}
      >
        <RotateCw
          size={20}
          style={{
            animation: isSpinning ? "frb-spin 0.6s ease-out forwards" : "none",
          }}
        />
      </button>
    </div>
  );
}
