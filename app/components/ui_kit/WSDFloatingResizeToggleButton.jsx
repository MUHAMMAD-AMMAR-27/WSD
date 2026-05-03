/**
 * Usage example:
 *
 * function App() {
 *   const containerRef = useRef(null);
 *   const [expanded, setExpanded] = useState(false);
 *
 *   return (
 *     <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
 *       <div style={{ flex: 1 }}>Left panel</div>
 *       <div ref={containerRef} style={{ flex: 1, position: "relative", overflow: "hidden" }}>
 *         Right panel content…
 *         <WSDFloatingResizeToggleButton
 *           isExpanded={expanded}
 *           onToggle={setExpanded}
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
import { Maximize2, Minimize2 } from "lucide-react";

const STORAGE_KEY = "ftb_position_v1";
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

export default function WSDFloatingResizeToggleButton({ isExpanded, onToggle, parentRef }) {
  const [pos, setPos] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const btnRef = useRef(null);
  const dragOrigin = useRef(null); // { offsetX, offsetY } — cursor offset inside button
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

  const defaultPosition = useCallback((rect) => ({
    // x: rect.width  - BTN_SIZE - PADDING,
    // y: rect.height - BTN_SIZE - PADDING,
    x: (PADDING * 2),
    y: BTN_SIZE + (PADDING * 2),
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
          setPos(defaultPosition(rect));
        }
      } else {
        setPos(defaultPosition(rect));
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

  // ─── Pointer event handlers ───────────────────────────────────────────────
  //
  // setPointerCapture() is the key: once called, ALL pointermove / pointerup
  // events are routed to this element even if the cursor has left it entirely.
  // The browser guarantees delivery — no dropped events, no "letting go".
  // This is the same mechanism browsers use internally for native scrollbars
  // and range inputs.

  const handlePointerDown = useCallback(
    (e) => {
      // Only handle left-click / single touch
      if (e.button !== undefined && e.button !== 0) return;

      e.preventDefault();
      moved.current = false;

      const rect = getContainerRect();
      const mouseInContainer = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      // Record how far inside the button the pointer landed.
      dragOrigin.current = {
        offsetX: mouseInContainer.x - (pos?.x ?? PADDING),
        offsetY: mouseInContainer.y - (pos?.y ?? PADDING),
      };

      // 🔑 Capture all future pointer events to this element.
      // The cursor can now move anywhere — events still fire here.
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

      // Threshold to distinguish a click from a drag.
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

      // Release pointer capture.
      btnRef.current?.releasePointerCapture(e.pointerId);

      if (moved.current) {
        // Save the final committed position.
        setPos((prev) => {
          if (prev) savePosition(prev);
          return prev;
        });
      } else {
        // It was a tap/click — toggle.
        onToggle?.(!isExpanded);
      }
    },
    [isExpanded, onToggle]
  );

  // Cancel drag if pointer is lost (e.g. browser interruption).
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
        // No pointer-events:none wrapper needed — the button handles everything.
        willChange: "left, top",
      }}
    >
      <button
        ref={btnRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        aria-label={isExpanded ? "Collapse" : "Expand"}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          width: BTN_SIZE,
          height: BTN_SIZE,
          borderRadius: "50%",
          border: isExpanded ? "2px solid #000" : "2px solid #fff",
          background: isExpanded ? "#fff" : "#000",
          color: isExpanded ? "#000" : "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          outline: "none",
          padding: 0,
          userSelect: "none",
          touchAction: "none", // required — lets pointer events fire unimpeded on touch
          transition: isDragging
            ? "none"
            : "background 150ms ease, color 150ms ease, border-color 150ms ease, box-shadow 150ms ease",
          boxShadow: isDragging
            ? "0 8px 24px rgba(0,0,0,0.2)"
            : "0 0 0 0 transparent",
          transform: isDragging ? "scale(1.1)" : "scale(1)",
        }}
        onMouseEnter={(e) => {
          if (!isDragging)
            e.currentTarget.style.boxShadow = isExpanded
              ? "0 0 0 3px rgba(0,0,0,0.15)"
              : "0 0 0 3px rgba(0,0,0,0.25)";
        }}
        onMouseLeave={(e) => {
          if (!isDragging) e.currentTarget.style.boxShadow = "0 0 0 0 transparent";
        }}
      >
        {isExpanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
      </button>
    </div>
  );
}
