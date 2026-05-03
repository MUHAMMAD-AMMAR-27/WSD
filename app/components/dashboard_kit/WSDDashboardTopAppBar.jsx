import React, { useState } from "react";
import { LogOut, Search, Settings } from "lucide-react";
import { useAppSelector } from "../../src/app/hooks.js";
import {
  selectAlternativeUser,
  selectAuthenticatedUser,
} from "../../src/features/authenticated_user/authenticatedUserSlice.js";
import { navigate } from "jsdom/lib/jsdom/living/window/navigation.js";
import { matchPath, useLocation, useNavigate, useParams } from "react-router-dom";
import WSDInputField from "../ui_kit/WSDInputField.jsx";
import clsx from "clsx";
import { extractNameInitials } from "../../src/utils/format_utils.js";
import WSDPrimaryButton from "../ui_kit/WSDPrimaryButton.jsx";
import WSDDangerButton from "../ui_kit/WSDDangerButton.jsx";
import WSDOptionList from "../ui_kit/WSDOptionList.jsx";

const ROLE = {
  ADMIN: "ADMIN",
  EMPLOYEE: "EMPLOYEE",
  APPLICANT: "APPLICANT",
  APPLICANT_REF: "APPLICANT_REF",
  DEMAND_REF: "DEMAND_REF",
};

const WSDDashboardTopAppBar = ({ searchBarProps }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [status, setStatus] = useState("");

  const { applicant_ref_uid, demand_ref_uid } = useParams();

  const ifUserRoleIs = (role) => {
    const path = location.pathname;

    const isApplicantRef = matchPath("/dashboard/applicant_ref/:applicant_ref_uid/*", path);

    const isDemandRef = matchPath("/dashboard/demand_ref/:demand_ref_uid/*", path);

    const isApplicant = matchPath("/dashboard/applicant/:applicant_uid/*", path);

    if (role === ROLE.ADMIN || role === ROLE.EMPLOYEE) {
      if (!isApplicantRef && !isDemandRef && !isApplicant) {
        return true;
      }
    }

    if (role === ROLE.APPLICANT_REF && isApplicantRef) {
      return true;
    }

    if (role === ROLE.DEMAND_REF && isDemandRef) {
      return true;
    }

    // noinspection RedundantIfStatementJS
    if (role === ROLE.APPLICANT && isApplicant) {
      return true;
    }

    return false;
  };

  return (
    <header className="h-16 bg-blue-800 shadow-md shadow-gray-200 px-6 flex items-center justify-between z-50">
      <div className="flex justify-start items-center text-white gap-4 text-sm && alternativeUser?.full_name &&text-green-600 font-bold cursor-pointer">
        <img className="w-9 h-auto object-contain" src="/assets/Logo.png" alt="Pak Qurtuba Logo" />
        <h2 className="font-bold text-2xl">Exam Prep Hub</h2>
        {/* {(ifUserRoleIs(ROLE.ADMIN) || ifUserRoleIs(ROLE.EMPLOYEE)) &&
          authenticatedUser?.full_name && (
            <h2 className="mt-0 text-lg">
              (
              {authenticatedUser.full_name
                .toLowerCase()
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
              )
            </h2>
          )}

        {ifUserRoleIs(ROLE.APPLICANT_REF)  && (
          <h2 className="mt-0 text-lg">

            sdfgdfgsdfb
          </h2>
        )}

        {ifUserRoleIs(ROLE.DEMAND_REF)  && (
          <h2 className="mt-0 text-lg">
           shfhggggggggggggggggg
          </h2>
        )}

        {ifUserRoleIs(ROLE.APPLICANT)  (
          <h2 className="mt-0 text-lg">
            (
            {alternativeUser.full_name
              .toLowerCase()
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
            )
          </h2>
        )}*/}
      </div>

      {/* User info and settings */}
      <div className="flex items-center gap-4">
        {searchBarProps && (
          <div className={"w-[25vw] flex relative"}>
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            <WSDInputField
              {...searchBarProps}
              className={clsx("rounded-none pl-8", searchBarProps.className)}
            />
          </div>
        )}
        <div className="flex items-center gap-4">
        <WSDOptionList
          value={status}
          placeholder={"Learn"}
          onChange={(val) => {
            setStatus(val);
          }}
          options={[
            { value: "ACTIVE", label: "Active" },
            { value: "Blocked", label: "block" },
            { value: "DORMANT", label: "Dormant" },
          ]}
        />
        <WSDOptionList
          value={status}
          placeholder={"Practice"}
          onChange={(val) => {
            setStatus(val);
          }}
          options={[
            { value: "ACTIVE", label: "Active" },
            { value: "Blocked", label: "block" },
            { value: "DORMANT", label: "Dormant" },
          ]}
        /><WSDOptionList
          value={status}
          placeholder={"Assess"}
          onChange={(val) => {
            setStatus(val);
          }}
          options={[
            { value: "ACTIVE", label: "Active" },
            { value: "Blocked", label: "block" },
            { value: "DORMANT", label: "Dormant" },
          ]}
        />
          </div>
        {/*{!ifUserRoleIs(ROLE.APPLICANT) && (*/}
        {/*  <Settings*/}
        {/*    size={24}*/}
        {/*    className="cursor-pointer"*/}
        {/*    onClick={(e) => {*/}
        {/*      navigate(*/}
        {/*        (() => {*/}
        {/*          if (ifUserRoleIs(ROLE.DEMAND_REF)) {*/}
        {/*            return `/dashboard/demand_ref/${demand_ref_uid}/settings`;*/}
        {/*          }*/}

        {/*          if (ifUserRoleIs(ROLE.APPLICANT_REF)) {*/}
        {/*            return `/dashboard/applicant_ref/${applicant_ref_uid}/settings`;*/}
        {/*          }*/}

        {/*          return "/settings";*/}
        {/*        })()*/}
        {/*      );*/}
        {/*    }}*/}
        {/*  />*/}
        {/*)}*/}
        {/*{}*/}

        {ifUserRoleIs(ROLE.APPLICANT) && (
          <WSDDangerButton
            className={"flex items-center text-sm gap-2"}
            onClick={() => {
              window.localStorage.removeItem("user");
              navigate("/login", { replace: true });
            }}
          >
            <LogOut size={16} />
            Logout
          </WSDDangerButton>
        )}
      </div>
    </header>
  );
};

export default WSDDashboardTopAppBar;
