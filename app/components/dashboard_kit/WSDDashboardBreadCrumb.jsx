import React from "react";

const WSDDashboardBreadCrumb = ({ mainStep = "Dashboard", subSteps = [], description}) => {
  const breadcrumb = (
    <div className="text-sm text-gray-500">
      <span className="font-medium text-gray-700">{mainStep}</span>
      {subSteps.map((stepName) => {
        return (
          <React.Fragment key={crypto.randomUUID()}>
            <span>&nbsp;/&nbsp;</span>
            <span>{stepName}</span>
          </React.Fragment>
        );
      })}
    </div>
  );

  if (description) {
    return <div className={'flex flex-col gap-1'}>
      {breadcrumb}
      <p className={'text-xs text-gray-500'}>{description}</p>
    </div>
  }

  return breadcrumb;
};

export default WSDDashboardBreadCrumb;
