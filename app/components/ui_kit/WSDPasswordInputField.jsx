import React, { useState } from "react";
import clsx from "clsx";
import { Eye, EyeOff, Circle } from "lucide-react";

export const MASK_CHAR = "●"; // visually matches Lucide Circle

const WSDPasswordInputField = ({ wrapperClassName, className = "", value = "", onChange, label, placeholder = "", ...props }) => {
  const [show, setShow] = useState(false);

  const displayValue = show ? value : MASK_CHAR.repeat(value.length);

  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length < value.length) {
      // Backspace
      onChange?.(value.slice(0, inputValue.length));
    } else {
      // New character typed
      const newChar = inputValue[inputValue.length - 1];
      onChange?.(value + newChar);
    }
  };

  const inputTag = (
    <div className="relative w-full">
      <input
        type="text"
        value={displayValue}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete="off"
        spellCheck={false}
        className={clsx(
          "flex h-9 w-full rounded-md px-3 py-1 pr-10",
          "border border-gray-300 text-sm text-black",
          "outline-none",
          "hover:border-green-500",
          "focus:border-green-600 focus:ring-2 focus:ring-green-500/30",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "transition-colors duration-150",
          className
        )}
        {...props}
      />

      {/* Toggle visibility */}
      <button type="button" tabIndex={-1} onClick={() => setShow((v) => !v)} className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700">
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );

  if (label) {
    return <div className={clsx("flex flex-col", wrapperClassName || 'gap-1')}>
      <label className="select-none text-sm font-medium">{label}</label>
      {inputTag}
    </div>
  }

  return inputTag;
};

export default WSDPasswordInputField;
