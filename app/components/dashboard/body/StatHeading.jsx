
import React from 'react';

const StatHeading = ({Heading, value}) => {
  return (
    <div className="w-fit px-3 ml-3 py-2  mt-1    text-center flex flex-col">
      <span className="text-xl font-medium truncate">
        {Heading}
      </span>
      <span className="text-lg font-bold">{value}</span>
    </div>
  )
}

export default StatHeading
