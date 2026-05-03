import React from "react"
import DemandReferenceProcessStatusBar from "../../components/demand_reference_process_bar/DemandReferenceProcessStatusBar.jsx"
const DemandReferenceData = () => {
  return (
    <div className="w-full flex flex-col gap-7 mt-6 overflow-x-auto">
      <div className="space-y-3">
        <div className="text-lg leading-tight pl-5 font-semibold text-blue-600">
          <p>01 | Kashif SGD</p>
          <p className="mt-2">Blue</p>
          <p>
            Qatar |
            <button data-state="closed" data-slot="tooltip-trigger">
              01
            </button>
            <span className="pl-3">(12)</span>
          </p>
        </div>
        <div className="border border-gray-200 rounded p-3">
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2 text-blue-600">
              Basic Cases<span className="pl-3">(1)</span>
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
                    className="[&amp;_tr]:border-b"
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
                  <DemandReferenceProcessStatusBar />
                </table>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2 text-blue-600">
              Ready Cases<span className="pl-3">(1)</span>
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
                    className="[&amp;_tr]:border-b"
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
                  <DemandReferenceProcessStatusBar />
                </table>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2 text-blue-600">
              Inprocess Cases<span className="pl-3">(10)</span>
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
                    className="[&amp;_tr]:border-b"
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
                  <DemandReferenceProcessStatusBar />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemandReferenceData
