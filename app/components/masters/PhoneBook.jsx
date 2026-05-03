import React, { useState } from "react"
import { Check, Copy, Phone, User } from "lucide-react"

const PhoneBook = ( props ) => {
  const [copied, setCopied] = useState(null);
  const phoneNumber = "+923000469004";

  return props?.props?.map((prop) => {
    return (
      <div key={prop.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200 group gap-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="hidden border-gray-200 sm:flex p-2 md:p-3 bg-white rounded-lg border shadow-sm">
            <Phone />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base md:text-lg font-semibold text-gray-900 truncate">
                {prop.phone || prop?.phone_numbers?.map((number) => { console.log("number", number);
                    return (
                      <div className={"flex flex-col gap-2"}>
                        <div>{number}</div>
                      </div>
                    );
                  })}
              </span>
              <span
                data-slot="badge"
                className="items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-secondary/90 bg-blue-100 text-blue-700 text-xs hidden xs:inline-flex"
              >
                Client
              </span>
            </div>
            <span className="text-gray-600 flex items-center gap-2 text-sm md:text-base truncate">
              <User size={15} />
              <span className="truncate">{prop.full_name || prop.reference_name}</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {copied !== (prop.id) ? (
            <button
              data-slot="button"
              onClick={() => {
                navigator.clipboard.writeText(prop.phone || prop.phone_numbers[0]);
                setCopied(prop.id);
                setTimeout(() => setCopied(null), 1500);
              }}
              className="cursor-pointer inline-flex items-center border-gray-200 justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-gray-300 focus-visible:ring-gray-300/50 focus-visible:ring-[3px] border bg-background shadow-xs h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 transition-all shrink-0 w-full sm:w-auto hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600"
            >
              <Copy />
              <span className="text-xs md:text-sm">Copy</span>
            </button>
          ) : (
            <button
              data-slot="button"
              className="inline-flex items-center  border-gray-200 justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-gray-300 focus-visible:ring-gray-300/50 focus-visible:ring-[3px] border bg-background shadow-xs h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 transition-all shrink-0 w-full sm:w-auto hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600"
            >
              <Check />
              <span className="text-xs md:text-sm">Copied</span>
            </button>
          )}
        </div>
      </div>
    );
  })
};

export default PhoneBook;
