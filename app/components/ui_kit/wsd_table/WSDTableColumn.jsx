import React from "react";
import clsx from "clsx";

const WSDTableColumn = ({ children, className, ...props }) => {
  return (
    <td className={clsx("px-3 py-2", className)} {...props}>
      {children}
    </td>
  );
};

export default WSDTableColumn;
