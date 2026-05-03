import React, { useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { X, Edit, Upload } from "lucide-react";

const WSDImagePicker = ({
  label = "Upload Image",
  imageOrUrl,
  onChange,
  className,
  shape = "circle", // "circle" or "square"
  size = 80, // px
  placeholderColor = "bg-gray-200",
}) => {
  const imageRef = useRef(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    onChange && onChange(file);

    // Reset the input value so the same file can be selected again
    e.target.value = null;
  };

  const handleRemove = () => {
    onChange && onChange(null);

    // Reset the input value
    if (imageRef.current) {
      imageRef.current.value = null;
    }
  };

  const borderRadius = shape === "circle" ? "rounded-full" : "rounded-md";

  const imagePreviewUrl = useMemo(() => {
    if (!imageOrUrl) return null;
    if (typeof imageOrUrl === 'string') return imageOrUrl;
    return URL.createObjectURL(imageOrUrl);
  }, [imageOrUrl]);

  return (
    <div className={clsx("flex flex-col items-center gap-2", className)}>
      {/* Label */}
      <label className="select-none text-sm font-medium text-gray-700">{label}</label>

      {/* Wrapper container */}
      <div className={clsx("relative", borderRadius)} style={{ width: size, height: size }}>
        {/* Image container */}
        <div className={clsx("w-full h-full border-2 border-gray-300 cursor-pointer overflow-hidden transition-all hover:border-green-500", borderRadius)} onClick={() => imageRef.current.click()}>
          {imageOrUrl ? (
            <img src={imagePreviewUrl} alt="Preview" className={clsx("w-full h-full object-cover", borderRadius)} />
          ) : (
            <div className={clsx("w-full h-full flex items-center justify-center", placeholderColor)}>
              <Upload className="w-6 h-6 text-gray-500" />
            </div>
          )}

          {/* Hover overlay for edit icon */}
          {imageOrUrl && (
            <div className="absolute inset-0 flex items-center justify-center rounded-full opacity-0 hover:opacity-100 transition-opacity bg-black/25">
              <Edit className="w-5 h-5 text-white" />
            </div>
          )}
        </div>

        {/* Remove button */}
        {imageOrUrl && (
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 z-30 bg-gray-50 border border-gray-100 rounded-full p-1 shadow-xl hover:bg-red-500 hover:border-red-500 cursor-pointer hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Hidden input */}
      <input type="file" accept=".png,.jpg,.jpeg,.webp" ref={imageRef} className="hidden" onChange={handleChange} />
    </div>
  );
};

export default WSDImagePicker;
