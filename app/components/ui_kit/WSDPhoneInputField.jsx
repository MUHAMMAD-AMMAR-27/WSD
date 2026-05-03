import React from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import clsx from "clsx"; // required

const WSDPhoneInputField = ({ wrapperClassName, label, className = "", ...props }) => {
  const inputTag = <PhoneInput country="pk" containerClass={clsx(`pq-phone-container`, className)} {...props} />;

  if (label) {
    return <div className={clsx("flex flex-col", wrapperClassName || 'gap-1')}>
      <label className="select-none text-sm font-medium">{label}</label>
      {inputTag}
    </div>
  }

  return inputTag;
};

export default WSDPhoneInputField;
