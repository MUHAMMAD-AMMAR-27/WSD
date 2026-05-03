import React from "react";
import clsx from "clsx";

const OVERLAY_DEFAULT_CLASSES = "bg-black/40 z-50 flex items-center justify-center";

const WSDOverlayWrapper = ({
  children,
  className,
  includeDefaultClasses = true,
  background,
  onClick,
  overrideDefaultOnClick= false,
  ...props
}) => {
  return (
    <div className={clsx("absolute inset-0", includeDefaultClasses && OVERLAY_DEFAULT_CLASSES, className)} onClick={e => {
      if (!overrideDefaultOnClick) {
        e.stopPropagation();
      }

      onClick?.(e);
    }} {...props}>
      {children}
    </div>
  );
};

export default WSDOverlayWrapper;
