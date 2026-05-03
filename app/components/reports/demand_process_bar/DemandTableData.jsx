import React from 'react';
import CardData from "./CardData.jsx"

const DemandTableData = () => {
  return (
    <div className="w-full flex flex-col gap-6 overflow-x-auto mt-6 print:mt-0 print:mb-4">

      <div className="border border-gray-200  p-3 rounded">
        <h2 className="text-lg font-semibold text-blue-600 flex items-center gap-2">
          <button data-state="closed" data-slot="tooltip-trigger">
            04
          </button>
          | Qatar |
          <button data-state="closed" data-slot="tooltip-trigger">
            02
          </button>
        </h2>
        <div className="mt-2">
          <h3 className="text-md font-semibold text-blue-600">Blue</h3>
          <div className="mt-3 border-t border-t-gray-200 pt-2 mb-9">
            <h4 className="font-medium text-sm text-blue-600 capitalize">
              inprocess
            </h4>
            <div
              dir="ltr"
              data-slot="scroll-area"
              className="relative my-2 md:mx-auto md:w-3/4 p-2"
              style={{
                position: "relative",
                "--radix-scroll-area-corner-width": "0px",
                "--radix-scroll-area-corner-height": "0px",
              }}
            >
              <style>{`
          [data-radix-scroll-area-viewport] {
            scrollbar-width: none;
            -ms-overflow-style: none;
            -webkit-overflow-scrolling: touch;
          }

            [data-radix-scroll-area-viewport]::-webkit-scrollbar {
              display: none
            }`}</style>
              <div
                data-radix-scroll-area-viewport=""
                data-slot="scroll-area-viewport"
                className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
                style={{ overflow: "scroll" }}
              >
               <CardData />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default DemandTableData;
