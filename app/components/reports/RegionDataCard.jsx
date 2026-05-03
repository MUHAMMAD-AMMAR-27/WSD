import React from 'react';
import TableData from "./TableData.jsx"


const RegionDataCard = () => {
  return (
    <div className="w-full flex flex-col  gap-6 overflow-x-auto mt-6 print:mt-0 print:mb-4">
      <div className="border  p-3 border-gray-200 rounded">
        <h2
          className="text-lg font-semibold text-blue-600 flex items-center gap-2"
        >
          <button data-state="closed" data-slot="tooltip-trigger">
            01
          </button>
          | Qatar |
          <button data-state="closed" data-slot="tooltip-trigger">
            01
          </button>
        </h2>
        <div className="mt-2">
          <h3 className="text-md font-semibold text-blue-600">Blue</h3>
          <TableData />
        </div>
      </div>

    </div>

  );
};

export default RegionDataCard;

