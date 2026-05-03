import React from "react"
import TradeJobData from "./TradeJobData.jsx"

const TradeData = () => {
  return (
    <div className="w-full overflow-x-auto mt-7">
      <div className="flex flex-col gap-9">
        <div className="border border-gray-200 p-4 rounded">
          <h2 className="mb-0 text-xl leading-tight text-green-600 font-semibold">
            Trade: Driver
          </h2>
          <div className="mb-6">
            <div className="text-sm leading-tight mt-1 mb-4 text-green-600 font-medium">
              SubTrade: LTV
            </div>
            <div className="w-full space-y-4 bg-white p-4 rounded-md oveflow-x-auto">
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
                        Father Name
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
                        Phone
                      </th>
                      <th
                        data-slot="table-head"
                        className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
                      >
                        CNIC
                      </th>
                      <th
                        data-slot="table-head"
                        className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
                      >
                        Passport
                      </th>
                      <th
                        data-slot="table-head"
                        className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
                      >
                        Country
                      </th>
                      <th
                        data-slot="table-head"
                        className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <TradeJobData />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradeData
