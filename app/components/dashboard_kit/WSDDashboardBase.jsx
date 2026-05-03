import React from "react";

const WSDDashboardBase = ({children}) => {
  return (
    <div className="flex flex-1 overflow-hidden">
      {children}
    </div>
  );
};

export default WSDDashboardBase;