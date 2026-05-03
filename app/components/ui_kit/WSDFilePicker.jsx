import React, { useRef, useState } from "react";
import clsx from "clsx";
import { Upload, X } from "lucide-react";
import WSDChipsContainer from "./WSDChipsContainer.jsx";

const WSDFilePicker = ({
  label,
  wrapperClassName,
  className,
  filesOrUrls,
  placeholder = "Choose a file",
  accept,
  multiple = false,
  onChange,
}) => {
  const inputRef = useRef(null);

  const handlePick = (e) => {
    const selected = Array.from(e.target.files || []);
    if (!selected.length) return;

    onChange?.(multiple ? selected : [selected[0]]);

    // allow re-selecting same file
    e.target.value = "";
  };

  const handleRemove = (index) => {
    onChange?.(filesOrUrls.filter((_, i) => i !== index));
  };

  const trigger = (
    <div
      onClick={() => inputRef.current?.click()}
      className={clsx(
        "flex h-9 w-full items-center justify-between rounded-md cursor-pointer",

        // base appearance
        "border border-gray-300 text-sm text-black bg-white",
        "px-3",

        // hover & focus
        "hover:border-green-500",
        "focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-500/30",

        // transition
        "transition-colors duration-150",

        className
      )}
    >
      <span className={clsx("truncate", filesOrUrls.length ? "text-black" : "text-gray-400")}>
        {filesOrUrls.length
          ? multiple
            ? `${filesOrUrls.length} file(s) selected`
            : (typeof filesOrUrls[0] === 'string') ? new URL(filesOrUrls[0]).pathname.split("/").pop() : filesOrUrls[0].name
          : placeholder}
      </span>

      <Upload className="w-4 h-4 text-gray-500" />
    </div>
  );

  return (
    <div className={clsx("flex flex-col gap-1", wrapperClassName)}>
      {label && <label className="select-none text-sm font-medium">{label}</label>}

      {trigger}

      {/* File list */}
      {filesOrUrls.length > 0 && (
        <WSDChipsContainer
          chips={filesOrUrls.map((fileOrUrl, index) => ({
            id: crypto.randomUUID(),
            label: typeof fileOrUrl === 'string' ? new URL(fileOrUrl).pathname.split("/").pop() : fileOrUrl.name,
            payload: fileOrUrl,
            index
          }))}
          onRemove={chip => {
            handleRemove(chip.index);
          }}
          />
      )}

      {/* Hidden native input */}
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept={accept}
        multiple={multiple}
        onChange={handlePick}
      />
    </div>
  );
};

export default WSDFilePicker;
