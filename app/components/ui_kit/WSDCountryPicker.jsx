import React, { useState, useRef, useEffect, useMemo } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { countries } from "countries-list";
import * as Flags from "country-flag-icons/react/3x2";
import WSDInputField from "./WSDInputField.jsx";

const WSDCountryPicker = ({
  label,
  value,
  onChange,
  placeholder = "Select a country",
  wrapperClassName,
  className,
  disabled = false,
  showOnly,
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);

  // Prepare country options once
  const countryOptions = useMemo(() => {
    let list = Object.entries(countries).map(([code, details]) => ({
      value: code,
      label: details.name,
      phone: details.phone[0],
      currency: details.currency,
    }));

    // If showOnly is provided, filter the list
    if (Array.isArray(showOnly) && showOnly.length > 0) {
      list = list.filter(opt => showOnly.includes(opt.value));
    }

    return list;
  }, [showOnly]);

  const selectedOption = countryOptions.find((o) => o.value === value);

  // Filter options based on search input
  const filteredOptions = useMemo(() => {
    if (!search) return countryOptions;
    return countryOptions.filter((opt) => opt.label.toLowerCase().includes(search.toLowerCase()));
  }, [search, countryOptions]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const field = (
    <div ref={ref} className={clsx("relative", disabled && "pointer-events-none opacity-50")}>
      {/* Button trigger */}
      <button
        type="button"
        onClick={() => !disabled && setOpen((p) => !p)}
        className={clsx(
          "flex h-9 w-full items-center justify-between rounded-md px-3",
          "border border-gray-300 bg-white text-sm text-black",
          "hover:border-green-500 focus:border-green-600 focus:ring-2 focus:ring-green-500/30",
          "transition-colors duration-150",
          className
        )}
      >
        <span className={clsx(!selectedOption && "text-gray-400")}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={clsx("w-4 h-4 transition-transform", open && "rotate-180")} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-1.5 w-full rounded-md border border-gray-300 bg-white shadow-lg">
          {/* Search input */}
          <div className="p-2 border-b rounded-t-md border-gray-300 bg-white">
            <WSDInputField
              label={'Choose Country'}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country..."
              className="rounded-none"
            />
          </div>

          {/* Scrollable list */}
          <ul className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => {
                const Flag = Flags[opt.value];
                return (
                  <li
                    key={opt.value}
                    onClick={() => {
                      onChange?.(opt.value);
                      setOpen(false);
                      setSearch("");
                    }}
                    className={clsx(
                      "cursor-pointer px-3 py-2 text-sm flex items-center gap-2 transition-colors",
                      value === opt.value ? "bg-green-50 text-green-700" : "hover:bg-gray-100"
                    )}
                  >
                    {Flag && <Flag title={opt.label} className="w-5 h-3" />}
                    <span>{opt.label}</span>
                    <span className="ml-auto text-xs text-gray-400">
                      +{opt.phone} ({opt.value})
                    </span>
                  </li>
                );
              })
            ) : (
              <li className="px-3 py-2 text-sm text-gray-400">No countries found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );

  if (label) {
    return (
      <div className={clsx("flex flex-col gap-1", wrapperClassName)}>
        <label className="select-none text-sm font-medium">{label}</label>
        {field}
      </div>
    );
  }

  return field;
};

export default WSDCountryPicker;
