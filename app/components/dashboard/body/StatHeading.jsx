
import React from 'react';

const StatHeading = ({Heading, value}) => {
  return (
    <div className="w-fit px-3 ml-3 py-2 bg-gray-100 mt-1 border border-gray-200 text-blue-700 rounded-lg shadow text-center flex flex-col">
      <span className="text-xl font-medium truncate">
        {Heading}
      </span>
      <span className="text-lg font-bold">{value}</span>
    </div>
  )
}

export default StatHeading
