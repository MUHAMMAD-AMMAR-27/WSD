import { PackageSearch } from "lucide-react";
import WSDOverlayWrapper from "./WSDOverlayWrapper.jsx";

const WSDEmptyStatePlaceholder = ({
  title = "No Records Available",
  description = "We couldn’t find any items to show right now.",
  hint = "This section will update automatically when data is available.",
}) => {
  return (
    <WSDOverlayWrapper className={'bg-transparent flex flex-col pointer-events-none'}>
      {/* Icon */}
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
        <PackageSearch className="h-7 w-7 text-gray-500" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

      {/* Description */}
      <p className="mt-1 text-sm text-gray-600 max-w-md">{description}</p>

      {/* Hint / Helper text */}
      <p className="mt-2 text-xs text-gray-400 max-w-md">{hint}</p>
    </WSDOverlayWrapper>
  );
};

export default WSDEmptyStatePlaceholder;
