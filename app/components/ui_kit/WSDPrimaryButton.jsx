import React from "react";
import clsx from "clsx";

const WSDPrimaryButton = ({ children, className = "", disabled = false, type = "button", ...props }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        // layout
        "h-9 px-6 rounded-md",

        // typography
        "text-sm text-white",

        // colors
        "bg-blue-600",
        "hover:bg-blue-800",
        "active:bg-blue-800",
        "select-none",

        // focus (accessible, minimal)
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",

        // disabled (no invented behavior)
        "disabled:opacity-50",

        // transition
        "transition-colors duration-200",
        "cursor-pointer",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default WSDPrimaryButton;
