import React from 'react';
import { Settings2 } from "lucide-react"
import AssignedClientsData from "./AssignedClientsData.jsx"

const AssignedApplicants = () => {
  return (
    <div className="w-full flex flex-col gap-7 mt-2 overflow-x-auto border border-gray-200 rounded">
      <div className="flex flex-col md:flex-row md:justify-between p-4 items-center gap-3 md:gap-4">
        <h1 className="font-bold text-xl">
          Assigned Clients <span className="pl-2">(25)</span>
        </h1>
        <button
          data-slot="button"
          className="inline-flex items-center border-gray-200 justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 cursor-pointer w-full md:w-fit"
        >
          <Settings2 />
          Manage Columns
        </button>
      </div>
      <div className="space-y-3">
        <div className="text-lg leading-tight pl-5 font-semibold text-green-600">
          <p>03 | Tariq Qureshi</p>
          <p className="mt-2">Green</p>
          <p>
            08 | Saudi Arabia |
            <button data-state="closed" data-slot="tooltip-trigger">
              07
            </button>
            <span className="pl-3">(1)</span>
          </p>
        </div>
        <div className="border border-gray-200 rounded p-3 m-3">
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2 text-green-600">
              Travelled Cases<span className="pl-3">(1)</span>
            </h2>
            <div className="w-full space-y-4 bg-white p-4 rounded-md">
              <div
                data-slot="table-container"
                className="relative w-full overflow-x-auto"
              >
                <table
                  data-slot="table"
                  className="w-full caption-bottom text-sm min-w-[800px]"
                >
                  <thead
                    data-slot="table-header"
                    className="[&_tr]:border-b"
                  >
                  <tr
                    data-slot="table-row"
                    className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b border-b-gray-200 transition-colors"
                  >
                    <th
                      data-slot="table-head"
                      className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
                    >
                      S/No
                    </th>
                    <th
                      data-slot="table-head"
                      className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
                    >
                      Name
                    </th>
                    <th
                      data-slot="table-head"
                      className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
                    >
                      Trade
                    </th>
                    <th
                      data-slot="table-head"
                      className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
                    >
                      SubTrades
                    </th>
                    <th
                      data-slot="table-head"
                      className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
                    >
                      Visa Status
                    </th>
                    <th
                      data-slot="table-head"
                      className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
                    >
                      Status
                    </th>
                    <th
                      data-slot="table-head"
                      className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
                    >
                      Actions
                    </th>
                  </tr>
                  </thead>
                  <AssignedClientsData />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AssignedApplicants;
