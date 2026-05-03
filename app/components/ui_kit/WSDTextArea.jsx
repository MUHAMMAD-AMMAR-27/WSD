import React, { useEffect, useRef } from "react";
import clsx from "clsx";

const WSDTextArea = ({ wrapperClassName, className = "", label, autoResize = false, rows = 3, ...props }) => {
  const ref = useRef(null);

  // Optional auto-resize behavior
  useEffect(() => {
    if (!autoResize || !ref.current) return;

    const el = ref.current;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [props.value, autoResize]);

  const textAreaTag = (
    <textarea
      ref={ref}
      rows={rows}
      className={clsx(
        // layout
        "w-full rounded-md resize-none",

        // base appearance
        "border border-gray-300 text-sm text-black",
        "outline-none p-2",

        // hover & focus (green instead of blue)
        "hover:border-green-500",
        "focus:border-green-600 focus:ring-2 focus:ring-green-500/30",

        // disabled
        "disabled:opacity-50 disabled:cursor-not-allowed",

        // scrollbar
        "scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100",

        // transition
        "transition-colors duration-150",

        className
      )}
      {...props}
    />
  );

  if (label) {
    return (
      <div className={clsx("flex flex-col gap-1", wrapperClassName)}>
        <label className="select-none text-sm font-medium">{label}</label>
        {textAreaTag}
      </div>
    );
  }

  return textAreaTag;
};

export default WSDTextArea;
