import React from "react";
import clsx from "clsx";
import { X } from "lucide-react";

export const WSDDialogModalScrollableContent = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        "flex-1 min-h-0 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const WSDDialogModalHeader = ({
  children,
  dialogTitle,
  onClose = null,
  ...props
}) => {
  if (dialogTitle) {
    return (
      <div
        className="flex items-center justify-center text-lg p-4 border-b border-b-gray-200 shrink-0 relative"
        {...props}
      >
        <h2 className="font-semibold">{dialogTitle || "Dialog"}</h2>
        <X
          onClick={onClose}
          className={clsx(
            "absolute right-4 top-4 w-5 h-5 cursor-pointer",
            "transition-transform duration-200 ease-out",
            "hover:translate-y-[2px]"
          )}
        />
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-between p-4 border-b border-b-gray-200 shrink-0 relative"
      {...props}
    >
      {children}
      <X
        onClick={onClose}
        className={clsx(
          "absolute right-4 top-4 w-5 h-5 cursor-pointer",
          "transition-transform duration-200 ease-out",
          "hover:translate-y-[2px]"
        )}
      />
    </div>
  );
};

export const WSDDialogModalFooter = ({
  children,
  className,
  dialogTitle,
  onClose = null,
  ...props
}) => {
  return (
    <div
      className={clsx("flex border-t border-t-gray-200 shrink-0 relative", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const WSDDialogModal = ({ children, onClick, onClose, className, ...props }) => {
  return (
    <div
      className={clsx(
        "bg-white w-[40%] h-[calc(100%-200px)] rounded-lg shadow-xl flex flex-col overflow-hidden",
        className
      )}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default WSDDialogModal;
