import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import WSDTableColumn from "./WSDTableColumn.jsx";
import clsx from "clsx";
import { MoreHorizontal } from "lucide-react";

const WSDTableActionsColumnItem = ({ children, onItemClick }) => {
  return (
    <button
      onClick={onItemClick}
      className="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
    >
      {children}
    </button>
  );
};

const WSDTableActionsColumn = ({ menuItems = [], className, ...props }) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleOpen = () => setOpen((v) => !v);

  useEffect(() => {
    let ticking = false;

    const updatePosition = () => {
      if (!buttonRef.current || !dropdownRef.current) return;

      const buttonRect = buttonRef.current.getBoundingClientRect();
      const dropdownRect = dropdownRef.current.getBoundingClientRect();

      const margin = 8;

      let top = buttonRect.bottom;
      let left = buttonRect.right - dropdownRect.width;

      // --- Horizontal overflow ---
      const overflowRight = left + dropdownRect.width - window.innerWidth + margin;
      const overflowLeft = margin - left;

      if (overflowRight > 0) left -= overflowRight;
      if (overflowLeft > 0) left += overflowLeft;

      // --- Vertical overflow ---
      const overflowBottom = top + dropdownRect.height - window.innerHeight + margin;
      const overflowTop = margin - top;

      // Flip above if bottom overflow is large
      if (overflowBottom > 0) {
        const flippedTop = buttonRect.top - dropdownRect.height;

        // Check if flipping is better
        if (flippedTop >= margin) {
          top = flippedTop;
        } else {
          top -= overflowBottom;
        }
      }

      if (overflowTop > 0) top += overflowTop;

      setPosition({
        top: top + window.scrollY,
        left: left + window.scrollX,
      });
    };

    const handleUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updatePosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    if (open) {
      updatePosition();
      window.addEventListener("scroll", handleUpdate);
      window.addEventListener("resize", handleUpdate);
    }

    return () => {
      window.removeEventListener("scroll", handleUpdate);
      window.removeEventListener("resize", handleUpdate);
    };
  }, [open]);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <WSDTableColumn className={clsx(className)} {...props}>
      <div ref={buttonRef} className="relative inline-block">
        <button onClick={toggleOpen} className="rounded-md p-2 text-gray-600 hover:bg-gray-100">
          <MoreHorizontal size={16} />
        </button>

        {open &&
          ReactDOM.createPortal(
            <div
              ref={dropdownRef}
              style={{
                top: position.top,
                left: position.left,
                minWidth: 150,
              }}
              className="fixed z-50 rounded-md border border-gray-200 bg-white shadow-lg"
            >
              {menuItems.map((menuItem, index) => (
                <WSDTableActionsColumnItem
                  key={index}
                  onItemClick={(e) => {
                    setOpen(false);
                    menuItem.onItemClick?.(e, menuItem, index);
                  }}
                >
                  {menuItem.content}
                </WSDTableActionsColumnItem>
              ))}
            </div>,
            document.body
          )}
      </div>
    </WSDTableColumn>
  );
};

export default WSDTableActionsColumn;
