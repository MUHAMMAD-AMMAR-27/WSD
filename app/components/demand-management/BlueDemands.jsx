import React from 'react';

const BlueDemands = ({sn ,demandRefCode, country, countryCode, trade, visa, applicantClients }) => {
  return (
    <tbody
      data-slot="table-body"
      className="[&amp;_tr:last-child]:border-0"
    >
    <tr data-slot="table-row" className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
      <td
        data-slot="table-cell"
        className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] false"
      >
        <button
          type="button"
          role="checkbox"
          aria-checked="false"
          data-state="unchecked"
          value="on"
          data-slot="checkbox"
          className="peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Select row"
        ></button>
      </td>
      <td
        data-slot="table-cell"
        className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] false"
      >
        <span className="text-blue-600">{sn}</span>
      </td>
      <td
        data-slot="table-cell"
        className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] false"
      >
        <div
          className="flex gap-0.5 text-blue-600 items-center"
        >
          <button
            data-state="closed"
            data-slot="tooltip-trigger"
            className="text-sm"
          >
            {demandRefCode}</button
          >-<button
          data-state="delayed-open"
          data-slot="tooltip-trigger"
          className="text-sm"
          aria-describedby="radix-«r11a»"
        >
          {country}
        </button>
          -
        <button data-state="closed" data-slot="tooltip-trigger" className="text-sm">
          {countryCode}
        </button>
        </div>
      </td>
      <td
        data-slot="table-cell"
        className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] false"
      >
        <button data-state="closed" data-slot="tooltip-trigger">
          <span className="text-blue-600">{trade}</span>
        </button>
      </td>
      <td
        data-slot="table-cell"
        className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] false"
      >
                                <span className="truncate text-blue-600"
                                >{visa}</span
                                >
      </td>
      <td
        data-slot="table-cell"
        className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] false"
      >
        <span className="truncate text-blue-600">{applicantClients}</span>
      </td>
      <td
        data-slot="table-cell"
        className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] false"
      >
        <button
          data-slot="dropdown-menu-trigger"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 has-[&gt;svg]:px-3 text-blue-600 h-8 w-8 p-0"
          type="button"
          id="radix-«r11d»"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-ellipsis w-4 h-4"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
          </svg>
        </button>
      </td>
    </tr>
    </tbody>
  );
};

export default BlueDemands;
