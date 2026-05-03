import React, { useState } from 'react';
import { ChevronDown, ChevronRight, PencilIcon, Trash2 } from "lucide-react"
const ExistingTrades = ({tradeName, subTrade, deleteTradeSubTrade, tradeId, onTradeEdit}) => {
  const [dialog, setDialog] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
  <>
    <div className="bg-gray-50 p-4 flex justify-between items-center">
      {dialog && (
        <div className="absolute inset-0 bg-black/6">
        <div
          role="alertdialog"
          id="radix-r3"
          aria-describedby="radix-r5"
          aria-labelledby="radix-r4"
          data-state="open"
          data-slot="alert-dialog-content"
          className=" data-[state=open]:animate-in data-[state=closed]:animate-out
      data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
      data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
      fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)]
      translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6
      shadow-lg duration-200 sm:max-w-lg border-none bg-white"
          tabIndex={-1}
          style={{ pointerEvents: "auto" }}
        >
          {/* Header */}
          <div
            data-slot="alert-dialog-header"
            className="flex flex-col gap-2 text-center sm:text-left"
          >
            <h2
              id="radix-r4"
              data-slot="alert-dialog-title"
              className="text-lg font-semibold text-gray-600"
            >
              Are you absolutely sure you want to delete?
            </h2>
            <p
              id="radix-r5"
              data-slot="alert-dialog-description"
              className="text-muted-foreground text-sm -mt-3"
            >
              This action cannot be undone.
            </p>
          </div>

          <div
            data-slot="alert-dialog-footer"
            className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"
          >
            <button
              onClick={() => setDialog(false)}
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap
          rounded-md text-sm font-medium transition-all disabled:pointer-events-none
          disabled:opacity-50 [&_svg]:pointer-events-none
          [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none
          focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
          aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40
          aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent
          hover:text-accent-foreground dark:bg-input/30 dark:border-input
          dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 cursor-pointer border-gray-200"
            >
              Cancel
            </button>

            <button
              onClick={() => deleteTradeSubTrade(tradeId)}
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap
          rounded-md text-sm font-medium transition-all disabled:pointer-events-none
          disabled:opacity-50 [&_svg]:pointer-events-none
          [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none
          focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
          aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40
          aria-invalid:border-destructive text-primary-foreground shadow-xs h-9 px-4 py-2
          has-[>svg]:px-3 bg-red-600 hover:bg-red-800 cursor-pointer md:w-28 text-white"
            >
              Continue
            </button>
          </div>
        </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 text-left">
        {isOpen ? <ChevronDown />: <ChevronRight />}
        <span className="font-medium text-gray-800">
                        {tradeName}
                      </span>
      </button>
      <div className="flex gap-2">
        <button onClick={e => {
          onTradeEdit({
            tradeName,
            subTrade: [...subTrade],
            tradeId
          })
        }}
          className="text-blue-500 cursor-pointer hover:text-blue-600 p-1 rounded-full hover:bg-blue-50">
          <PencilIcon />
        </button>
        <button
          className="text-red-500 hover:text-red-600 p-1 cursor-pointer  rounded-full hover:bg-red-50"
          aria-label="Delete Construction trade"
          onClick={() => setDialog(true)}
        >
          <Trash2 />
        </button>
      </div>
    </div>
    {isOpen && (
      <div className="px-4 py-2 pb-4">
        <h4 className="text-sm font-medium text-gray-600 mb-2">
          SubTrades:
        </h4>
        <div className="flex flex-wrap gap-2">
          {subTrade.length > 0
            ? subTrade.map((st, index) => (
              <span
                key={index}
                className="bg-green-300 text-green-700 px-4 py-1 rounded-full text-sm"
              >
                {st.name}
              </span>
            ))
            : <span className="text-gray-400 text-sm">No sub-trades</span>
          }
        </div>
      </div>
    )}
  </>
  );
};

export default ExistingTrades;
