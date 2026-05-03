import React from "react"
import { Settings2 } from "lucide-react"
import UnassignedApplicantsData from "./UnassignedApplicantsData.jsx"

const UnassignedApplicants = () => {
  return (
    <div className="flex flex-col gap-4 border border-gray-200 rounded">
      <div className="flex flex-col md:flex-row p-4 md:justify-between items-center gap-3 md:gap-4">
        <h1 className="font-bold text-xl">
          Unassigned Applicants <span className="pl-2">(11)</span>
        </h1>
        <button
          data-slot="button"
          className="inline-flex items-center border-gray-200 justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 cursor-pointer w-full md:w-fit"
        >
          <Settings2 />
          Manage Columns
        </button>
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
            <thead data-slot="table-header" className="[&amp;_tr]:border-b">
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
            <UnassignedApplicantsData />
          </table>
        </div>
      </div>
    </div>
  )
}

export default UnassignedApplicants
