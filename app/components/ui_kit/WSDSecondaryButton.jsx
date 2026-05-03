import React from "react";
import clsx from "clsx";

const WSDSecondaryButton = ({ children, className = "", disabled = false, type = "button", backgroundColor = "bg-white", borders=true, ...props }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        // layout
        "h-9 px-6 rounded-md",

        // typography
        "text-sm text-gray-700",

        // colors
        backgroundColor,
        borders && "border border-gray-200",
        "hover:border-gray-300",
        "active:bg-gray-300",

        "select-none",
        // focus (accessible, minimal)
        //"focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",

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

export default WSDSecondaryButton;
