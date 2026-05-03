import React from "react";
import clsx from "clsx";

const WSDCheckBox = ({ checked, defaultChecked, onChange, disabled = false, className, ...props }) => {
  return (
    <div className="flex items-center justify-center">
      <input
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        className={clsx(
          // size & shape
          "h-4 w-4 rounded",

          // base
          "border border-gray-300 bg-white",
          "cursor-pointer",

          // checked
          "checked:bg-green-600 checked:border-green-600",

          // focus
          "focus:outline-none focus:ring-2 focus:ring-green-500/30",

          // hover
          "hover:border-green-500",

          // disabled
          "disabled:cursor-not-allowed disabled:opacity-50",

          // transition
          "transition-all duration-150",

          className
        )}
        {...props}
      />
    </div>
  );
};

export default WSDCheckBox;
