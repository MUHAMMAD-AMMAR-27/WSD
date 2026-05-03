import React from "react";
import clsx from "clsx";

const WSDTable = ({ children, className, tableClassName, tableProps, tableToolbar, ...props }) => {
  return (
    <div className={clsx("w-full overflow-x-auto rounded-md border border-gray-200 bg-white", className)} {...props}>
      {tableToolbar && tableToolbar}
      <table className={clsx("w-full text-sm text-gray-700", tableClassName)} {...tableProps}>
        {children}
      </table>
    </div>
  );
};

export default WSDTable;
