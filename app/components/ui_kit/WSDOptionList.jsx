import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

const WSDOptionList = ({ label, options = [], value, onChange, placeholder = "Select an option", wrapperClassName, className, disabled = false }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selectedOption = options.find((o) => o.value === value);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const field = (
    <div ref={ref} className={clsx("relative", disabled && "pointer-events-none opacity-50")}>
      {/* Input-like trigger */}

      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={clsx(
          // layout
          "flex h-9 w-full items-center justify-between rounded-md px-3",

          // appearance (same as input)
          "border border-none bg-blue-800 textarea-lg text-white",
          "outline-none",

          // hover & focus
          "hover:border-blue-500",
          "focus:border-blue-500 focus:ring-2 focus:ring-white",

          // transition
          "transition-colors duration-150",

          className
        )}
      >
        <span className={clsx(!selectedOption && "text-white")}>{selectedOption ? selectedOption.label : placeholder}</span>

        <ChevronDown className={clsx("w-4 h-4 transition-transform", open && "rotate-180")} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg text-black">
          <ul className="max-h-56 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {options.map((opt) => (
              <li
                key={opt.value}
                onClick={() => {
                  onChange?.(opt.value);
                  setOpen(false);
                }}
                className={clsx("cursor-pointer px-3 py-2 text-sm transition-colors", value === opt.value ? "bg-blue-50 text-blue-600" : "hover:bg-blue-100")}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  if (label) {
    return (
      <div className={clsx("flex flex-col gap-1", wrapperClassName)}>
        <label className="select-none text-sm font-medium">{label}</label>
        {field}
      </div>
    );
  }

  return field;
};

export default WSDOptionList;
