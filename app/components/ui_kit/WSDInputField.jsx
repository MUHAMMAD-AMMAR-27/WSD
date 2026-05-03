import React from "react";
import clsx from "clsx";

const WSDInputField = ({ wrapperClassName, className = "", type = "text", label, ...props }) => {
  const inputTag = (
    <input
      type={type}
      className={clsx(
        // layout
        "flex h-9 w-full rounded-xl",

        // base appearance
        "border border-blue-700 text-sm text-black ",
        "outline-none",

        // hover & focus (green instead of blue)
        // "hover:border-green-500",
        // "focus:border-green-600 focus:ring-2 focus:ring-green-500/30",

        // disabled
        "disabled:opacity-50 disabled:cursor-not-allowed",

        // transition
        "transition-colors duration-150",

        className
      )}
      {...props}
    />
  );
  if(props.placeholder){
    // return

  }


  if (label) {
    return <div className={clsx("flex flex-col", wrapperClassName || 'gap-1')}>
      <label className="select-none text-sm font-medium ">{label}</label>
      {inputTag}
    </div>
  }

  return inputTag;
};

export default WSDInputField;
