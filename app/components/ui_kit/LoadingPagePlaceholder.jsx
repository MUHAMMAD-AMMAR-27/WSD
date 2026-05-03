import React from "react";
import { Loader } from "lucide-react";

const LoadingPagePlaceholder = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <Loader className="animate-spin text-gray-700" size={40} />
    </div>
  );
};

export default LoadingPagePlaceholder;
