  import React, { useEffect, useState } from "react";
  import { Link, useLocation, useNavigate, matchPath, useParams } from "react-router-dom";
  import {
    LayoutDashboardIcon,
    BookOpenText,
    FileText,
    Clipboard,
    ShieldCheck,
    GraduationCap,
    BookOpenCheck,
    BookText,
    NotebookText,
    PanelLeftDashed,
    FlipHorizontal,
    User,
    Box,
    BadgeAlert,
    Bolt,
    Aperture,
    ChartColumn,
    ChartBar,
    FileSymlink,
    SettingsIcon,
    LogOut,
    FileStack,
    Activity,
    Radio,
    Zap,
    ClipboardList,
    Wallet,
  } from "lucide-react";
  import clsx from "clsx";
  import { ChevronDown } from "lucide-react";

  // Single dashboard item
  const DrawerMenuItem = ({
    icon: Icon,
    label,
    to,
    isSubItem = false,
    activePredicate = undefined,
  }) => {
    const location = useLocation();
    const isActive = (
      activePredicate ||
      ((location) => {
        if (to.includes("?")) {
          return to.split("?")[0] === location.pathname;
        }

        return location.pathname === to;
      })
    )?.(location);

    return (
      <Link
        className={clsx(
          "px-3 py-2.5 flex gap-4 items-center rounded-lg",
          isActive
            ? clsx("text-white ", isSubItem && "bg-green-800", !isSubItem && "bg-blue-800")
            : "text-white hover:bg-blue-800"
        )}
        to={to}
      >
        {Icon && <Icon />}
        {typeof label === "string" && <span className="text-lg">{label}</span>}
        {typeof label !== "string" && label}
      </Link>
    );
  };

  // Group of dashboard items (collapsible)
  const DrawerMenuItemsGroup = ({ icon: Icon, label, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const location = useLocation();

    // Check if any child is active
    const hasActiveChild = React.Children.toArray(children).some((child) => {
      if (child.props.activePredicate) {
        return child.props.activePredicate(location);
      }

      if (child.props.to.includes("?")) {
        return child.props.to.split("?")[0] === location.pathname;
      }

      return child.props.to === location.pathname;
    });

    useEffect(() => {
      if (hasActiveChild) {
        setIsOpen(true);
      }
    }, []);

    return (
      <div className="flex flex-col">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            `px-3 py-2 flex items-center justify-between gap-4 rounded-md cursor-pointer`,
            !isOpen && hasActiveChild && "bg-green-600 text-white",
            isOpen && hasActiveChild && "bg-green-600 text-white",
            !isOpen && !hasActiveChild && "text-gray-700 hover:bg-gray-100",
            isOpen && !hasActiveChild && "bg-green-400 text-white"
          )}
        >
          <div className="flex items-center gap-4">
            {Icon && <Icon />}
            {typeof label === "string" && <span className="text-sm">{label}</span>}
            {typeof label !== "string" && label}
          </div>
          <span
            className={`text-sm transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            <ChevronDown className="w-4 h-4" />
          </span>
        </div>
        {isOpen && <div className="ml-5 mt-2 flex flex-col gap-1">{children}</div>}
      </div>
    );
  };

// const ROLE = {
//   ADMIN: "ADMIN",
//   EMPLOYEE: "EMPLOYEE",
//   APPLICANT: "APPLICANT",
//   APPLICANT_REF: "APPLICANT_REF",
//   DEMAND_REF: "DEMAND_REF",
// };

// Drawer Component
const WSDDashboardDrawer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { applicant_ref_uid, demand_ref_uid } = useParams();


  return (
    <aside className="w-72 bg-blue-950 shadow-md shadow-gray-200 p-4 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 select-none">
      <nav className="space-y-2">
        {/*{ifUserRoleIs(ROLE.ADMIN) && (*/}
        <DrawerMenuItem icon={LayoutDashboardIcon} label="Dashboard" to="/AdminDashboard" />
        <DrawerMenuItem icon={BookOpenText} label="Exam " to="/Exam" />
        <DrawerMenuItem icon={FileText} label="Exam Prepration" to="/ExamPrepration" />
        <DrawerMenuItem icon={Clipboard} label="MCQs" to="/Mcqs" />
        <DrawerMenuItem icon={ShieldCheck} label="Quizes" to="/Quizes" />
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.APPLICANT_REF) && (*/}
        {/*  <DrawerMenuItem*/}
        {/*    icon={LayoutDashboardIcon}*/}
        {/*    label="Dashboard"*/}
        {/*    to={`/dashboard/applicant_ref/${applicant_ref_uid}`}*/}
        {/*  />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.DEMAND_REF) && (*/}
        {/*  <DrawerMenuItem*/}
        {/*    icon={LayoutDashboardIcon}*/}
        {/*    label="Dashboard"*/}
        {/*    to={`/dashboard/demand_ref/${demand_ref_uid}`}*/}
        {/*  />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.ADMIN) && (*/}
        {/*  <DrawerMenuItem icon={User} label="Applicant Manager" to="/applicant_manager" />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.APPLICANT_REF) && (*/}
        {/*  <DrawerMenuItem*/}
        {/*    icon={User}*/}
        {/*    label="Applicant Manager"*/}
        {/*    to={`/dashboard/applicant_ref/${applicant_ref_uid}/applicant_manager`}*/}
        {/*  />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.ADMIN) && (*/}
        {/*  <DrawerMenuItem*/}
        {/*    icon={Box}*/}
        {/*    label="Demand Manager"*/}
        {/*    to="/demand_manager"*/}
        {/*    activePredicate={(location) => {*/}
        {/*      return [*/}
        {/*        matchPath("/demand_manager", location.pathname),*/}
        {/*        matchPath("/demand_view/:demand_uid", location.pathname),*/}
        {/*        matchPath("/demand_applicant_case_view/:demand_uid", location.pathname),*/}
        {/*        matchPath(*/}
        {/*          "/demand_applicant_case_view/:demand_uid/:applicant_uid",*/}
        {/*          location.pathname*/}
        {/*        ),*/}
        {/*      ].some(Boolean);*/}
        {/*    }}*/}
        {/*  />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.APPLICANT_REF) && (*/}
        {/*  <DrawerMenuItem*/}
        {/*    icon={Box}*/}
        {/*    label="Demand Manager"*/}
        {/*    to={`/dashboard/applicant_ref/${applicant_ref_uid}/demand_manager`}*/}
        {/*    // activePredicate={(location) => {*/}
        {/*    //   return [*/}
        {/*    //     matchPath("/demand_manager", location.pathname),*/}
        {/*    //     matchPath("/demand_view/:demand_uid", location.pathname),*/}
        {/*    //     matchPath("/demand_applicant_case_view/:demand_uid", location.pathname),*/}
        {/*    //   ].some(Boolean);*/}
        {/*    // }}*/}
        {/*  />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.DEMAND_REF) && (*/}
        {/*  <DrawerMenuItem*/}
        {/*    icon={Box}*/}
        {/*    label="Demand Manager"*/}
        {/*    to={`/dashboard/demand_ref/${demand_ref_uid}/demand_manager`}*/}
        {/*    // activePredicate={(location) => {*/}
        {/*    //   return [*/}
        {/*    //     matchPath("/dashboard/demand_ref/:applicant_ref_uid/applicants_status_bar", location.pathname),*/}
        {/*    //     matchPath("/dashboard/demand_ref/view_details/:demand_uid/:applicant_uid", location.pathname),*/}
        {/*    //     // matchPath("/demand_manager", location.pathname),*/}
        {/*    //     // matchPath("/demand_view/:demand_uid", location.pathname),*/}
        {/*    //     // matchPath("/demand_applicant_case_view/:demand_uid", location.pathname),*/}
        {/*    //   ].some(Boolean);*/}
        {/*    // }}*/}
        {/*  />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.ADMIN) && (*/}
        {/*  <DrawerMenuItem icon={BadgeAlert} label="Active Demands" to="/active_demands" />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.APPLICANT_REF) && (*/}
        {/*  <DrawerMenuItem*/}
        {/*    icon={ChartBar}*/}
        {/*    label="Applicants Status Bar"*/}
        {/*    to={`/dashboard/applicant_ref/${applicant_ref_uid}/applicants_status_bar`}*/}
        {/*    activePredicate={(location) => {*/}
        {/*      return [*/}
        {/*        matchPath(*/}
        {/*          "/dashboard/applicant_ref/:applicant_ref_uid/applicants_status_bar",*/}
        {/*          location.pathname*/}
        {/*        ),*/}
        {/*        matchPath(*/}
        {/*          "/dashboard/applicant_ref/view_details/:demand_uid/:applicant_uid",*/}
        {/*          location.pathname*/}
        {/*        ),*/}
        {/*        /*matchPath("/demand_view/:demand_uid", location.pathname),*/}
        {/*      ].some(Boolean);*/}
        {/*    }}*/}
        {/*  />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.APPLICANT_REF) && (*/}
        {/*  <DrawerMenuItem*/}
        {/*    icon={ChartColumn}*/}
        {/*    label="Applicants Process Bar"*/}
        {/*    to={`/dashboard/applicant_ref/${applicant_ref_uid}/applicants_process_bar`}*/}
        {/*  />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.APPLICANT_REF) && (*/}
        {/*  <DrawerMenuItem*/}
        {/*    icon={Zap}*/}
        {/*    label="Active Demands"*/}
        {/*    to={`/dashboard/applicant_ref/${applicant_ref_uid}/active_demands`}*/}
        {/*  />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.DEMAND_REF) && (*/}
        {/*  <DrawerMenuItem*/}
        {/*    icon={Zap}*/}
        {/*    label="Active Demands"*/}
        {/*    to={`/dashboard/demand_ref/${demand_ref_uid}/active_demands`}*/}
        {/*  />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.DEMAND_REF) && (*/}
        {/*  <DrawerMenuItem*/}
        {/*    icon={ChartBar}*/}
        {/*    label="Demand Status Bar"*/}
        {/*    to={`/dashboard/demand_ref/${demand_ref_uid}/demand_status_bar`}*/}
        {/*    activePredicate={(location) => {*/}
        {/*      return [*/}
        {/*        matchPath(*/}
        {/*          "/dashboard/demand_ref/:applicant_ref_uid/demand_status_bar",*/}
        {/*          location.pathname*/}
        {/*        ),*/}
        {/*        matchPath(*/}
        {/*          "/dashboard/demand_ref/view_details/:demand_uid/:applicant_uid",*/}
        {/*          location.pathname*/}
        {/*        ),*/}
        {/*      ].some(Boolean);*/}
        {/*    }}*/}
        {/*  />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.DEMAND_REF) && (*/}
        {/*  <DrawerMenuItem*/}
        {/*    icon={ChartColumn}*/}
        {/*    label="Demand Process Bar"*/}
        {/*    to={`/dashboard/demand_ref/${demand_ref_uid}/demand_process_bar`}*/}
        {/*  />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.ADMIN) && (*/}
        {/*  <DrawerMenuItemsGroup icon={Bolt} label="Required Demands">*/}
        {/*    <DrawerMenuItem*/}
        {/*      label="New Demand By App Ref"*/}
        {/*      to="/required_demands/new_demand_by_app_ref"*/}
        {/*      isSubItem={true}*/}
        {/*    />*/}

        {/*    <DrawerMenuItem*/}
        {/*      label="Sent To Demand Ref"*/}
        {/*      to="/required_demands/sent_to_demand_ref"*/}
        {/*      isSubItem={true}*/}
        {/*    />*/}
        {/*    <DrawerMenuItem*/}
        {/*      label="Your Replied Demands"*/}
        {/*      to="/required_demands/your_replied_demands_required_demands"*/}
        {/*      isSubItem={true}*/}
        {/*    />*/}
        {/*    <DrawerMenuItem*/}
        {/*      label="Reply From Demand Ref"*/}
        {/*      to="/required_demands/reply_from_demand_ref"*/}
        {/*      isSubItem={true}*/}
        {/*    />*/}
        {/*  </DrawerMenuItemsGroup>*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.APPLICANT_REF) && (*/}
        {/*  <DrawerMenuItem*/}
        {/*    icon={BadgeAlert}*/}
        {/*    label="Required Demands"*/}
        {/*    to={`/dashboard/applicant_ref/${applicant_ref_uid}/required_demands`}*/}
        {/*  />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.DEMAND_REF) && (*/}
        {/*  <DrawerMenuItem*/}
        {/*    icon={BadgeAlert}*/}
        {/*    label="Required Demands"*/}
        {/*    to={`/dashboard/demand_ref/${demand_ref_uid}/required_demands`}*/}
        {/*  />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.ADMIN) && (*/}
        {/*  <DrawerMenuItemsGroup icon={Aperture} label="Masters">*/}

        {/*        <DrawerMenuItem*/}
        {/*            label="Add New Employee"*/}
        {/*            to="/masters/add_new_employee?show=all"*/}
        {/*            isSubItem={true}*/}
        {/*        />*/}
        {/*    <DrawerMenuItem label="Add Trade" to="/masters/add_trade" isSubItem={true} />*/}
        {/*    <DrawerMenuItem label="Add Country" to="/masters/add_country" isSubItem={true} />*/}
        {/*    <DrawerMenuItem label="Add Company" to="/masters/add_company" isSubItem={true} />*/}
        {/*    <DrawerMenuItem*/}
        {/*      label="Add Demand Reference"*/}
        {/*      to="/masters/add_demand_reference"*/}
        {/*      isSubItem={true}*/}
        {/*    />*/}
        {/*    <DrawerMenuItem*/}
        {/*      label="Add Applicant Reference"*/}
        {/*      to="/masters/add_applicant_reference"*/}
        {/*      isSubItem={true}*/}
        {/*    />*/}
        {/*    <DrawerMenuItem*/}
        {/*      label="Add Country Status"*/}
        {/*      to="/masters/add_country_status"*/}
        {/*      isSubItem={true}*/}
        {/*    />*/}
        {/*    <DrawerMenuItem label="Phone Book" to="/masters/phone_book" isSubItem={true} />*/}
        {/*  </DrawerMenuItemsGroup>*/}
        {/*)}*/}

        {/*<DrawerMenuItemsGroup icon={ChartColumn} label="Reports">*/}

        {/*    <DrawerMenuItem*/}
        {/*      label="Applicants Status"*/}
        {/*      to="/reports/applicants_status"*/}
        {/*      isSubItem={true}*/}
        {/*    />*/}

        {/*    <DrawerMenuItem*/}
        {/*      label="Demand Status Bar"*/}
        {/*      to="/reports/demand_status_bar"*/}
        {/*      isSubItem={true}*/}
        {/*    />*/}

        {/*    <DrawerMenuItem*/}
        {/*      label="Demand Process Bar"*/}
        {/*      to="/reports/demand_process_bar"*/}
        {/*      isSubItem={true}*/}
        {/*    />*/}

        {/*    <DrawerMenuItem*/}
        {/*      label="Applicant Ref Status Bar"*/}
        {/*      to="/reports/applicant_ref_status_bar"*/}
        {/*      isSubItem={true}*/}
        {/*    />*/}

        {/*    <DrawerMenuItem*/}
        {/*      label="Applicant Ref Process Bar"*/}
        {/*      to="/reports/applicant_ref_process_bar"*/}
        {/*      isSubItem={true}*/}
        {/*    />*/}

        {/*    <DrawerMenuItem*/}
        {/*      label="Demand Ref Status Bar"*/}
        {/*      to="/reports/demand_ref_status_bar"*/}
        {/*      isSubItem={true}*/}
        {/*    />*/}

        {/*    <DrawerMenuItem*/}
        {/*      label="Demand Ref Process Bar"*/}
        {/*      to="/reports/demand_ref_process_bar"*/}
        {/*      isSubItem={true}*/}
        {/*    />*/}

        {/*    <DrawerMenuItem*/}
        {/*      label="Country & Company Status"*/}
        {/*      to="/reports/country_and_company_status"*/}
        {/*      isSubItem={true}*/}
        {/*    />*/}

        {/*    <DrawerMenuItem label="Trade Report" to="/reports/trade_report" isSubItem={true} />*/}

        {/*    <DrawerMenuItem*/}
        {/*      label="Passport Expiry Report"*/}
        {/*      to="/reports/passport_expiry_report"*/}
        {/*      isSubItem={true}*/}
        {/*    />*/}
        {/*</DrawerMenuItemsGroup>*/}

        {/*{ifUserRoleIs(ROLE.ADMIN) && (*/}
        {/*  <DrawerMenuItemsGroup icon={Wallet} label="Accounts">*/}
        {/*    <DrawerMenuItem*/}
        {/*      label="Applicants Payments"*/}
        {/*      to="/accounts/applicants_payments"*/}
        {/*      isSubItem={true}*/}
        {/*      activePredicate={(location) => {*/}
        {/*        return [*/}
        {/*          matchPath("/accounts/applicants_payments", location.pathname),*/}
        {/*          matchPath("/accounts/applicants_payments/:applicant_uid", location.pathname),*/}
        {/*        ].some(Boolean);*/}
        {/*      }}*/}
        {/*    />*/}
        {/*    <DrawerMenuItem*/}
        {/*      label="Applicant Refs Payments"*/}
        {/*      to="/accounts/applicant_refs_payments"*/}
        {/*      isSubItem={true}*/}
        {/*      activePredicate={(location) => {*/}
        {/*        return [*/}
        {/*          matchPath("/accounts/applicant_refs_payments", location.pathname),*/}
        {/*          matchPath(*/}
        {/*            "/accounts/applicant_refs_payments/:applicant_ref_uid",*/}
        {/*            location.pathname*/}
        {/*          ),*/}
        {/*        ].some(Boolean);*/}
        {/*      }}*/}
        {/*    />*/}
        {/*    <DrawerMenuItem*/}
        {/*      label="Demand Refs Payments"*/}
        {/*      to="/accounts/demand_refs_payments"*/}
        {/*      isSubItem={true}*/}
        {/*      activePredicate={(location) => {*/}
        {/*        return [*/}
        {/*          matchPath("/accounts/demand_refs_payments", location.pathname),*/}
        {/*          matchPath("/accounts/demand_refs_payments/:demand_ref_uid", location.pathname),*/}
        {/*        ].some(Boolean);*/}
        {/*      }}*/}
        {/*    />*/}
        {/*  </DrawerMenuItemsGroup>*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.ADMIN) && (*/}
        {/*  <DrawerMenuItemsGroup icon={ChartBar} label="Progress Report">*/}
        {/*    <DrawerMenuItem label="Admin" to="/progress_report/admin" isSubItem={true} />*/}
        {/*    <DrawerMenuItem label="Employee" to="/progress_report/employee" isSubItem={true} />*/}
        {/*    <DrawerMenuItem*/}
        {/*      label="Applicant Reference"*/}
        {/*      to="/progress_report/applicant_reference"*/}
        {/*      isSubItem={true}*/}
        {/*    />*/}
        {/*  </DrawerMenuItemsGroup>*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.ADMIN) && (*/}
        {/*  <DrawerMenuItem icon={FileSymlink} label="Applicants CV" to="/applicants_cv" />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.DEMAND_REF) && (*/}
        {/*  <DrawerMenuItem*/}
        {/*    icon={FileSymlink}*/}
        {/*    label="Applicants CV"*/}
        {/*    to={`/dashboard/demand_ref/${demand_ref_uid}/applicants_cv`}*/}
        {/*  />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.ADMIN) && (*/}
        {/*  <DrawerMenuItem icon={SettingsIcon} label="Settings" to="/settings" />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.DEMAND_REF) && (*/}
        {/*  <DrawerMenuItem*/}
        {/*    icon={SettingsIcon}*/}
        {/*    label="Settings"*/}
        {/*    to={`/dashboard/demand_ref/${demand_ref_uid}/settings`}*/}
        {/*  />*/}
        {/*)}*/}

        {/*{ifUserRoleIs(ROLE.APPLICANT_REF) && (*/}
        {/*  <DrawerMenuItem*/}
        {/*    icon={SettingsIcon}*/}
        {/*    label="Settings"*/}
        {/*    to={`/dashboard/applicant_ref/${applicant_ref_uid}/settings`}*/}
        {/*  />*/}
        {/*)}*/}
      </nav>
    </aside>
  );
};

export default WSDDashboardDrawer;
