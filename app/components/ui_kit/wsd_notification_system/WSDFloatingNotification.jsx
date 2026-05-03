import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { CheckCircle, XCircle, AlertTriangle, Lightbulb, X } from "lucide-react";

const TYPE_CONFIG = {
  success: {
    icon: CheckCircle,
    label: "Success",
    text: "text-green-700",
    bg: "bg-green-50",
    bar: "bg-green-500",
  },
  error: {
    icon: XCircle,
    label: "Error",
    text: "text-red-700",
    bg: "bg-red-50",
    bar: "bg-red-500",
  },
  warning: {
    icon: AlertTriangle,
    label: "Warning",
    text: "text-yellow-700",
    bg: "bg-yellow-50",
    bar: "bg-yellow-500",
  },
};

const WSDFloatingNotification = ({ show, type = "success", title, message, duration = 3000, onClose }) => {

  useEffect(() => {
    if (!show) return;

    setTimeout(() => {
      onClose?.();
    }, duration);
  }, []);

  if (!show) return null;

  const { icon: Icon, label, text, bg, bar } = TYPE_CONFIG[type] || TYPE_CONFIG.success;

  return (
    <div className={clsx("w-[420px] max-w-[92vw]", "shadow-2xl overflow-hidden", "animate-slide-in-right", bg)}>
      {/* Progress bar (TOP) */}
      <div className="h-1 w-full bg-black/10">
        <div
          className={clsx("h-full", bar)}
          style={{
            animation: `notification-progress ${duration}ms linear forwards`,
          }}
        />
      </div>

      <div className="flex">
        {/* LEFT status indicator */}
        <div className="w-20 flex flex-col items-center justify-center gap-1 border-r border-black/10">
          <Icon size={26} className={text} />
          <span className="text-xs font-medium text-gray-600">{label}</span>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 flex flex-col gap-3">
          {title && <div className={clsx("font-semibold text-base", text)}>{title}</div>}

          {message && (
            <div className="flex gap-2 items-start">
              <Lightbulb size={18} className="text-gray-600 mt-0.5 shrink-0" />
              <div className="text-sm text-gray-700 leading-relaxed">{message}</div>
            </div>
          )}
        </div>

        {/* RIGHT close button */}
        <div className="w-14 flex items-center justify-center border-l border-black/10">
          <button onClick={onClose} className="close-btn flex items-center justify-center">
            <X size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WSDFloatingNotification;
