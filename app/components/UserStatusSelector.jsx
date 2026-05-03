import React from 'react';

const UserStatusSelector = ({status, setStatus}) => {
  const buttons = ["active", "dormant", "block"];
  return (
    <div className="flex justify-between md:justify-center gap-3 font-semibold md:text-xl px-2 mt-5 md:px-0"  >
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() =>setStatus(btn)}
          data-slot="button"
          className= {`inline-flex  items-center  justify-center whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&;_svg]:pointer-events-none [&;_svg:not([className*='size-'])]:size-4 shrink-0 [&;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-8 rounded-md gap-1.5 px-3 has-[>;svg]:px-2.5 cursor-pointer text-xs capitalize  hover:bg-green-500 text-white ${
            status === btn ? 'bg-green-500' : 'bg-gray-400'
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );

};

export default UserStatusSelector;