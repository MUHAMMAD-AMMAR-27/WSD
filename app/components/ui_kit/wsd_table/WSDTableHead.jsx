import React from "react";
import clsx from "clsx";

const WSDTableHead = ({ children, className, ...props }) => {
  return (
    <thead className={clsx("bg-gray-50", className)} {...props}>
      {children}
    </thead>
  );
};

export default WSDTableHead;
