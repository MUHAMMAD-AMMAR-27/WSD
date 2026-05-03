import React, { useEffect } from "react";
import {ShieldAlert} from 'lucide-react';
import { matchPath, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../src/app/hooks.js";

const ROLE = {
  ADMIN: "ADMIN",
  EMPLOYEE: "EMPLOYEE",
  APPLICANT: "APPLICANT",
  APPLICANT_REF: "APPLICANT_REF",
  DEMAND_REF: "DEMAND_REF",
};

function UnauthorizedPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login", {replace: true});
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-50">

      {/* Icon */}
      <div className="mb-6">
        <ShieldAlert className="w-16 h-16 text-red-500" />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        Unauthorized Access
      </h1>

      {/* Redirect text */}
      <p className="text-sm text-gray-500 animate-pulse">
        Redirecting to login...
      </p>
    </div>
  );
}

const WSDDashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { applicant_ref_uid, demand_ref_uid, applicant_uid} = useParams();


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

  useEffect(() => {
    const user = window.localStorage.getItem("user");

    const alternativeRole = [ROLE.DEMAND_REF, ROLE.APPLICANT_REF, ROLE.APPLICANT]
      .filter(role => ifUserRoleIs(role))
      .pop()

  }, [navigate]);

  return <div className="bg-[#F5F7FA] h-screen w-screen flex flex-col">
    {children}
    {/*<WSDNotificationsList />*/}
  </div>;
};

export default WSDDashboardLayout;
