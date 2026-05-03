import React from "react"
import { Ellipsis } from "lucide-react"

const DemandReferenceProcessStatusBar = () => {
  return (
    <tbody data-slot="table-body" className="[&amp;_tr:last-child]:border-0">
      <tr
        data-slot="table-row"
        className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors"
      >
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <span className="flex gap-0.5 cursor-default text-blue-600 items-center">
            01
          </span>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <span className="text-blue-600">Hammad Khalid</span>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <button
            data-state="closed"
            data-slot="tooltip-trigger"
            className="text-blue-600"
          >
            Store
          </button>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <button
            data-state="closed"
            data-slot="tooltip-trigger"
            className="text-blue-600"
          >
            Cashier
          </button>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <button
            data-state="closed"
            data-slot="tooltip-trigger"
            className="text-blue-600"
          >
            Online (Visa) <small>(2025-09-16)</small>
          </button>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <span className="capitalize text-blue-600">basic</span>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <div className="relative">
            <button className="text-xs p-2 text-gray-800 hover:bg-gray-100 rounded-md">
              <Ellipsis />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  )
}

export default DemandReferenceProcessStatusBar
