import React from 'react';
import { useNavigate } from "react-router-dom"

const TableData = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-1 border-t border-t-gray-200 mb-9 mt-3 pt-2">
      <h4 className="font-medium text-sm text-blue-600">
        Qvc <span className="pl-1 text-xs">(Med Appointment)</span>
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
          style={{overflow: 'scroll'}}
        >
          <div style={{minWidth: '100%', display: 'table'}}>
            <table className="w-full">
              <thead className="bg-gray-50 text-sm whitespace-nowrap">
              <tr>
                <th
                  className="border border-gray-200 p-2 text-left whitespace-nowrap"
                >
                  S/No
                </th>
                <th
                  className="border border-gray-200 p-2 text-left whitespace-nowrap"
                >
                  Name
                </th>
                <th
                  className="border border-gray-200 p-2 text-left whitespace-nowrap"
                >
                  Trade
                </th>
                <th
                  className="border border-gray-200 p-2 text-left whitespace-nowrap"
                >
                  SubTrade
                </th>
                <th
                  className="border border-gray-200 p-2 text-left whitespace-nowrap"
                >
                  Status
                </th>
                <th
                  className="border border-gray-200 p-2 text-left whitespace-nowrap"
                >
                  Status History
                </th>
              </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
              <tr className="text-sm whitespace-nowrap">
                <td className="border  border-gray-200 p-2">
                  01-<button
                  data-state="closed"
                  data-slot="tooltip-trigger"
                >
                  03
                </button>
                </td>
                <td className="border  border-gray-200 p-2 font-semibold">
                  Muhammad Awais Ali
                </td>
                <td className="border border-gray-200 p-2">
                  <button
                    data-state="closed"
                    data-slot="tooltip-trigger"
                  >
                    Factory
                  </button>
                </td>
                <td className="border border-gray-200 p-2">
                  <button
                    data-state="closed"
                    data-slot="tooltip-trigger"
                  >
                    Worker
                  </button>
                </td>
                <td className="border border-gray-200 p-2">
                  <button
                    data-state="closed"
                    data-slot="tooltip-trigger"
                  >
                    Qvc (Med Appointment) -
                    <small>(2025-10-30)</small>
                  </button>
                </td>
                <td
                  onClick={() => navigate("/details/status_bar_report")}
                  className="p-2 border cursor-pointer border-gray-200 hover:underline text-sm text-red-600"
                >
                  View Details
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TableData;
