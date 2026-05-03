import React from 'react';

const UnAssignedApplicant = () => {
  return (
    <tr
      data-slot="table-row"
      className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors"
    >
      <td
        data-slot="table-cell"
        className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
      >
                            <span
                              className="flex gap-0.5 cursor-default items-center"
                            >01-<button
                              data-state="closed"
                              data-slot="tooltip-trigger"
                              className="text-sm text-gray-600"
                            >
                                13
                              </button></span
                            >
      </td>
      <td
        data-slot="table-cell"
        className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
      >
        <button
          data-state="closed"
          data-slot="tooltip-trigger"
        >
          Toqeer Abbas
        </button>
      </td>
      <td
        data-slot="table-cell"
        className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
      >
        <span>Azeez Khan</span>
      </td>
      <td
        data-slot="table-cell"
        className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
      >
        <button
          data-state="closed"
          data-slot="tooltip-trigger"
        >
          Driver
        </button>
      </td>
      <td
        data-slot="table-cell"
        className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
      >
        <button
          data-state="closed"
          data-slot="tooltip-trigger"
          className="text-sm text-gray-600"
        >
          LTV
        </button>
      </td>
      <td
        data-slot="table-cell"
        className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
      >
        <span>+923017376722</span>
      </td>
      <td
        data-slot="table-cell"
        className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
      >
        <span>N/A</span>
      </td>
      <td
        data-slot="table-cell"
        className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
      >
        <span>8990</span>
      </td>
      <td
        data-slot="table-cell"
        className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
      >
        <button
          data-state="closed"
          data-slot="tooltip-trigger"
          className="text-sm text-gray-600"
        >
          02
        </button>
      </td>
      <td
        data-slot="table-cell"
        className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
      >
        <span className="capitalize">basic</span>
      </td>
    </tr>
  );
};

export default UnAssignedApplicant;
