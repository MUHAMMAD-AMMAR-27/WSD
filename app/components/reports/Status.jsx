import React from 'react';

const Status = () => {
  return (
    <div
      data-radix-scroll-area-viewport=""
      data-slot="scroll-area-viewport"
      className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      style={{overflow: 'scroll'}}
    >
      <div style={{minWidth: '100%', display: 'table'}}>
        <div className="flex space-x-3 p-2">
          <div
            className="min-w-[100px] px-3 py-2 bg-gray-100 rounded-lg shadow text-center flex flex-col"
          >
                      <span className="text-xs font-medium truncate">Basic</span
                      ><span className="text-lg font-bold">1</span>
          </div>
          <div
            className="min-w-[100px] px-3 py-2 bg-gray-100 rounded-lg shadow text-center flex flex-col"
          >
                      <span className="text-xs font-medium truncate">Ready</span
                      ><span className="text-lg font-bold">2</span>
          </div>
          <div
            className="min-w-[100px] px-3 py-2 bg-gray-100 rounded-lg shadow text-center flex flex-col"
          >
                      <span className="text-xs font-medium truncate">Inprocess</span
                      ><span className="text-lg font-bold">21</span>
          </div>
          <div
            className="min-w-[100px] px-3 py-2 bg-gray-100 rounded-lg shadow text-center flex flex-col"
          >
                      <span className="text-xs font-medium truncate">Travelled</span
                      ><span className="text-lg font-bold">1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
