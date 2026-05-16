import React from "react";
import clsx from "clsx";
import { Pencil, X } from "lucide-react";

export const WSDChip = ({
  chip,
  onSelect,
  onRemove,
  onEdit,
  className,
  readonly = false,
  ...props
}) => {


  return (
    <div
      onClick={() => onSelect?.(chip)}
      className={clsx(
        "flex items-center gap-1 px-3 py-1 rounded-full text-sm",
        "border border-gray-300 bg-gray-50 text-gray-800",
        "transition-colors select-none",
        onSelect && "cursor-pointer hover:bg-green-50 hover:border-green-500",
        readonly && "cursor-default",
        chip?.selected && "ring-1 ring-green-500",
        className
      )}
      {...props}
    >
      <span className="whitespace-nowrap">{chip?.label || "Chip Default Label"}</span>

      <div className={"p-0.5 flex gap-1"}>
        {!readonly && onEdit && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onEdit?.(chip);
            }}
            className={"cursor-pointer rounded hover:scale-110 transition duration-150"}
          >
            <Pencil className="w-3 h-3" />
          </button>
        )}

        {!readonly && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.(chip);
            }}
            className="rounded-full hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  );
};

const WSDChipsContainer = ({
  chips = [],
  readonly = false,
  onRemove,
  onEdit,
  onSelect,
  className,
}) => {
  if (!chips.length) return null;

  return (
    <div className={clsx("flex flex-wrap gap-2", className)}>
      {chips.map((chip) => (
        <WSDChip
          key={chip.id}
          chip={chip}
          onSelect={onSelect}
          onRemove={onRemove}
          onEdit={onEdit}
          readonly={readonly}
        />
      ))}
    </div>
  );
};

export default WSDChipsContainer;
