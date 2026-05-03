import { LogOut, Save, Search, Settings } from "lucide-react";
import WSDInputField from "../ui_kit/WSDInputField.jsx";
import clsx from "clsx";
import WSDDangerButton from "../ui_kit/WSDDangerButton.jsx";
import { extractNameInitials } from "../../src/utils/format_utils.js";
import React from "react";
import WSDPrimaryButton from "../ui_kit/WSDPrimaryButton.jsx";
import { useNavigate } from "react-router-dom";

const WSDManageCVTopAppBar = ({onSavedButtonClicked}) => {
  const navigate = useNavigate();
  return (
    <header className="h-16 bg-white border border-b border-gray-100 px-6 flex items-center justify-between z-50">
      <div className="flex justify-start items-center gap-4 text-sm text-green-600 font-bold cursor-pointer">
        <img className="w-9 h-auto object-contain" src="/assets/Logo.png" alt="Pak Qurtuba Logo" />
        <h2>World Student Destination</h2>
        <h2>(Manage CV)</h2>
      </div>

      <div className="flex items-center gap-4">
        <WSDPrimaryButton
          className={"flex items-center gap-2"}
          onClick={() => navigate("/applicant_manager")}
        >
          <LogOut size={20} className={"rotate-180"} /> Exit
        </WSDPrimaryButton>
        <WSDPrimaryButton
            className={"flex items-center gap-2"}
            onClick={onSavedButtonClicked}
        >
          <Save size={20} /> Save
        </WSDPrimaryButton>
      </div>
    </header>
  );
};

export default WSDManageCVTopAppBar;