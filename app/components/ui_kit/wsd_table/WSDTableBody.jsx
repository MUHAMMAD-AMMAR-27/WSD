import React from "react";
import clsx from "clsx";

const WSDTableBody = ({ children, className, ...props }) => {
  return (
    <tbody className={clsx(className)} {...props}>
      {children}
    </tbody>
  );
};

export default WSDTableBody;
