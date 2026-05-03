import React from "react"
import { Ellipsis } from "lucide-react"

const AssignedClientsData = () => {
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
          <span className="flex gap-0.5 cursor-default text-green-600 items-center">
            01
          </span>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <span className="text-green-600">Muhammad Sohail</span>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <button
            data-state="closed"
            data-slot="tooltip-trigger"
            className="text-green-600"
          >
            Labour
          </button>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <button
            data-state="closed"
            data-slot="tooltip-trigger"
            className="text-green-600"
          >
            Loading Unloading
          </button>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <button
            data-state="closed"
            data-slot="tooltip-trigger"
            className="text-green-600"
          >
            Fly Date <small>(2025-06-30)</small>
          </button>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <span className="capitalize text-green-600">travelled</span>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <div className="relative">
            <button className="text-xs p-2 text-gray-800 hover:bg-gray-100 rounded-md">
              <Ellipsis className={"text-green-600"} />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  )
}

export default AssignedClientsData
