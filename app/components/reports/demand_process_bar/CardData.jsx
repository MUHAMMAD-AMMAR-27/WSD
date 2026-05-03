import React from 'react';

const CardData = () => {
  return (
    <div style={{ minWidth: "100%", display: "table" }}>
      <table className="w-full">
        <thead className="bg-gray-50 text-sm whitespace-nowrap">
        <tr>
          <th className="border border-gray-200 p-2 text-left">S/No</th>
          <th className="border border-gray-200 p-2 text-left">Name</th>
          <th className="border border-gray-200 p-2 text-left">Trade</th>
          <th className="border border-gray-200 p-2 text-left">SubTrade</th>
          <th className="border border-gray-200 p-2 text-left">Status</th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
        <tr className="text-sm whitespace-nowrap">
          <td className="border border-gray-200 p-2">
            01-
            <button
              data-state="closed"
              data-slot="tooltip-trigger"
            >
              05
            </button>
          </td>
          <td className="border border-gray-200 p-2 font-semibold">
            Anees Amanat
          </td>
          <td className="border border-gray-200 p-2">
            <button
              data-state="closed"
              data-slot="tooltip-trigger"
            >
              AAzad
            </button>
          </td>
          <td className="border border-gray-200 p-2">
            <button
              data-state="closed"
              data-slot="tooltip-trigger"
            >
              Warehouse
            </button>
          </td>
          <td className="border border-gray-200 p-2 capitalize">
            inprocess
          </td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};

export default CardData;
