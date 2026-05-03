import React from "react";
import clsx from "clsx";

const WSDTableRow = ({ children, className, applyDefaultHoverStyle = false, ...props }) => {
  return (
    <tr className={clsx("border-b border-gray-200", applyDefaultHoverStyle && "hover:bg-gray-50", className)} {...props}>
      {children}
    </tr>
  );
};

export default WSDTableRow;
