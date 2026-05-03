import React from "react";
import clsx from "clsx";

const WSDTableFoot = ({ children, className, ...props }) => {
  return (
    <tfoot className={clsx('bg-gray-50', className)} {...props}>
      {children}
    </tfoot>
  );
};

export default WSDTableFoot;
