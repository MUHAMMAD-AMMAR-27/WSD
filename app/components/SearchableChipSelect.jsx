import { useState } from "react";

export default function SearchableChipSelect({ options = [], tradeId, onChange }) {
  const [selected, setSelected] = useState([]);

  const handleSelect = (e) => {
    const value = e.target.value;
    if (!value) return;


    // Only add if not already selected
    if (!selected.includes(value)) {
      const updated = [...selected, value];
      setSelected(updated);
      onChange?.(updated);
    }

    // Reset select to placeholder
    e.target.value = "";
  };

  const removeChip = (item) => {
    const updated = selected.filter((x) => x !== item);
    setSelected(updated);
    onChange?.(updated);
  };

  return (
    <div className="rounded-md py-3 px-1 space-y-2">
      {/* Select */}
      <select
        onChange={handleSelect}
        className="w-full border rounded-md px-3 py-2 text-sm"
        defaultValue=""
      >
        <option value="" disabled>
          Select…
        </option>
        {options
          .filter((option) => !selected.includes(option))
          .map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
      </select>

      {/* Chips */}
      <div className="flex flex-wrap gap-2 mt-2">
        {selected.map((item) => (
          <div
            key={item}
            className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm"
          >
            {item}
            <button type="button" onClick={() => removeChip(item)}>
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Hidden select for form submit */}
      <select
        name={`sub_trades[${tradeId}][]`}
        multiple
        className="hidden"
      >
        {selected.map((item) => (
          <option key={item} value={item} selected>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
