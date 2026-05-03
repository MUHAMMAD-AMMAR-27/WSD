import React, { useState } from "react"
import { Printer } from "lucide-react"

const HideShowFieldsPrintButton = () => {
  const [fields, setFields] = useState(true)
  
  return (
    <div className="flex flex-col md:flex-row md:justify-end gap-2 md:gap-3 mt-2 md:mt-0 items-center">
      {fields ? (
        <button
          onClick={() => setFields(false)}
          data-slot="button"
          className="inline-flex items-center border-gray-200 justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 w-full md:w-fit cursor-pointer"
        >
          Hide Fields
        </button>
      ) : (
        <button
          onClick={() => setFields(true)}
          data-slot="button"
          className="inline-flex items-center justify-center border-gray-200 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 w-full md:w-fit cursor-pointer"
        >
          Show Fields
        </button>
      )}
      <button
        data-slot="button"
        className="inline-flex text-white items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 bg-green-600 hover:bg-green-700 w-full md:w-fit cursor-pointer"
      >
        <Printer />
        Print
      </button>
    </div>
  );
};

export default HideShowFieldsPrintButton;
