import React from "react";
import clsx from "clsx";

const WSDTableToolbar = ({ children, className }) => {
  return <div className={clsx("flex items-stretch bg-white border-b border-gray-300", className)}>{children}</div>;
};

export const WSDTableToolbarTabsLayout = ({ children, className }) => {
  return <div className={clsx("flex", className)}>{children}</div>;
};

export const WSDTableToolbarTab = ({ children, active = false, onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-6 py-3 text-sm border-r border-gray-300",
        "cursor-pointer",
        "transition-colors select-none",

        active
          ? ["font-semibold bg-white text-gray-900", "border-t-4 border-t-green-600", "shadow-[0_2px_6px_rgba(0,0,0,0.08)]", "relative z-10"]
          : ["font-medium text-gray-600", "hover:bg-gray-200 hover:text-gray-900"],

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const WSDTableToolbarBulkActions = ({ children, className }) => {
  return <div className={clsx("ml-auto flex items-center gap-1 px-2", className)}>{children}</div>;
};

export const WSDTableToolbarBulkAction = ({ icon: Icon, children, danger = false, onClick, disabled = false, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "flex items-center gap-2 px-3 py-2 text-sm rounded-sm",
        "cursor-pointer",
        "transition-colors",

        danger ? "text-red-600 border border-red-200 hover:bg-red-500 hover:text-white" : "text-gray-700 hover:bg-gray-200",

        disabled && "opacity-50 pointer-events-none",
        className
      )}
    >
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
};

export default WSDTableToolbar;
