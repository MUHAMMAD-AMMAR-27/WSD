import React from "react";
import clsx from "clsx";

const WSDTableHeadColumn = ({ children, className, ...props }) => {
  return (
    <th className={clsx("px-3 py-2 text-left font-semibold text-gray-800 whitespace-nowrap", className)} {...props}>
      {children}
    </th>
  );
};

export default WSDTableHeadColumn;
