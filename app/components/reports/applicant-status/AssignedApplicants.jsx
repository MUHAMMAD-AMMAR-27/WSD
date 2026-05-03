import React from "react"

const AssignedApplicants = () => {
  return (
    <tbody data-slot="table-body" className="[&amp;_tr:last-child]:border-0">
      <tr
        data-slot="table-row"
          className="hover:bg-muted/50 text-green-600 data-[state=selected]:bg-muted border-b transition-colors"
      >
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <span className="flex gap-0.5 cursor-default  items-center">
            01-
            <button
              data-state="closed"
              data-slot="tooltip-trigger"
              className="text-sm"
            >
              03
            </button>
          </span>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <span className="">Muhammad Sohail</span>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <div className="flex gap-0.5 items-center">
            <button
              data-state="closed"
              data-slot="tooltip-trigger"
              className="text-sm "
            >
              08
            </button>
            -
            <button
              data-state="closed"
              data-slot="tooltip-trigger"
              className="text-sm "
            >
              01
            </button>
            -
            <button
              data-state="closed"
              data-slot="tooltip-trigger"
              className="text-sm "
            >
              07
            </button>
          </div>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <button
            data-state="closed"
            data-slot="tooltip-trigger"
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
          >
            Fly Date <small>(2025-06-30)</small>
          </button>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <span className="capitalize ">travelled</span>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] py-3"
        >
          <div className="relative">
            <button className="text-xs p-2 text-gray-800 hover:bg-gray-100 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-ellipsis "
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  )
}

export default AssignedApplicants
