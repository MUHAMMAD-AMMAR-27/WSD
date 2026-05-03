import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

// Custom input to make DatePicker w-full and styled
const CustomDateInput = forwardRef(({ value, onClick, placeholder, className }, ref) => (
  <div className="relative w-full">
    <input
      type="text"
      onClick={onClick}
      ref={ref}
      value={value}
      placeholder={placeholder} // <-- added placeholder
      readOnly
      className={clsx(
        "flex h-9 w-full rounded-md border border-gray-300 text-sm text-black outline-none",
        "hover:border-green-500 focus:border-green-600 focus:ring-2 focus:ring-green-500/30",
        "disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150",
        className
      )}
    />
    <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
  </div>
));

const WSDDatePicker = ({
  wrapperClassName,
  label,
  selected,
  onChange,
  placeholder = "Select date",
  className,
}) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const inputTag = (
    <DatePicker
      dateFormat={'dd MMM yyyy'}
      selected={selected}
      onChange={onChange}
      placeholderText={placeholder} // <-- pass to react-datepicker
      renderCustomHeader={({
        date,
        changeYear,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="flex items-center justify-between w-full px-2 bg-gray-100 rounded">
          {/* Left arrow - moves month */}
          <ChevronLeft onClick={decreaseMonth} size={20} disabled={prevMonthButtonDisabled} />

          {/* Middle div: Year + Month */}
          <div className="flex gap-2 items-center relative">
            {/* Month */}
            <div className="text-xs uppercase tracking-wider font-bold mt-1 select-none">{months[date.getMonth()]}</div>

            <select
              className={clsx(
                "border px-5 py-0 rounded-full bg-gray-100 bg-none select-none z-50 text-center border-gray-400",
                "hover:border-green-500",
                "focus:border-green-600 focus:ring-2 focus:ring-green-500/30"
              )}
              value={date.getFullYear()}
              onChange={(e) => {
                changeYear(Number(e.target.value));
              }}
            >
              {Array.from({ length: 200 }, (_, i) => 1900 + i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

          </div>

          {/* Right arrow - moves month */}
          <ChevronRight onClick={increaseMonth} size={20} disabled={nextMonthButtonDisabled} />
        </div>
      )}
      customInput={<CustomDateInput className={className} />}
      wrapperClassName="w-full"
      popperClassName="shadow-lg rounded-md border border-gray-200"
    />
  );

  if (label) {
    return (
      <div className={clsx("flex flex-col", wrapperClassName || "gap-1")}>
        <label className="select-none text-sm font-medium">{label}</label>
        {inputTag}
      </div>
    );
  }

  return inputTag;
};

export default WSDDatePicker;
