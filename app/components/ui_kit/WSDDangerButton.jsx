import React from "react";
import clsx from "clsx";

const WSDDangerButton = ({ children, className = "", disabled = false, type = "button", ...props }) => {
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
        "bg-red-600",
        "hover:bg-red-700",
        "active:bg-red-800",

        "select-none",
        // focus (accessible, minimal)
        "focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",

        // disabled
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

export default WSDDangerButton;
