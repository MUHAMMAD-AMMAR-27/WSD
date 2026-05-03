import React from "react";
import clsx from "clsx";

const WSDDashboardMainBodyContainer = ({children, className, containsOverlay=false, ...props}) => {
  return (
    <main className={clsx(
      "flex-1 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100",
      containsOverlay && 'relative',
      className
    )} {...props}>
      {children}
    </main>
  );
};

export default WSDDashboardMainBodyContainer;