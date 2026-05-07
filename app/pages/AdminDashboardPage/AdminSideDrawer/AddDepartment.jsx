import React, { useEffect, useState } from "react";
import { Loader, Pencil, Plus, PlusIcon, X, Trash2, AlignJustify, Flag } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../../src/app/hooks.js";
import clsx from "clsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import WSDDashboardLayout from "../../../components/dashboard_kit/WSDDashboardLayout.jsx";
import WSDDashboardTopAppBar from "../../../components/dashboard_kit/WSDDashboardTopAppBar.jsx";
import WSDDashboardBase from "../../../components/dashboard_kit/WSDDashboardBase.jsx";
import WSDDashboardDrawer from "../../../components/dashboard_kit/WSDDashboardDrawer.jsx";
import WSDDashboardMainBodyContainer from "../../../components/dashboard_kit/WSDDashboardMainBodyContainer.jsx";
import WSDDashboardBreadCrumb from "../../../components/dashboard_kit/WSDDashboardBreadCrumb.jsx";
import WSDEmptyStatePlaceholder from "../../../components/ui_kit/WSDEmptyStatePlaceholder.jsx";
import WSDTable from "../../../components/ui_kit/wsd_table/WSDTable.jsx";
import WSDTableHead from "../../../components/ui_kit/wsd_table/WSDTableHead.jsx";
import WSDOverlayWrapper from "../../../components/ui_kit/WSDOverlayWrapper.jsx";
import { queueNotification } from "../../../components/ui_kit/wsd_notification_system/wsdNotificationsSlice.js";
import { operationFailedNotification } from "../../../src/utils/NotificationSamples.js";
import { tokenValidationMiddleware } from "../../../src/utils/token_validation_middleware.js";
import { formatDate } from "../../../src/utils/format_utils.js";
import { parseCarbonOrISOToDate } from "../../../src/utils/date_utils.js";
import WSDTableToolbar, {
  WSDTableToolbarTab,
  WSDTableToolbarTabsLayout,
} from "../../../components/ui_kit/wsd_table/WSDTableToolbar.jsx";
import WSDTableRow from "../../../components/ui_kit/wsd_table/WSDTableRow.jsx";
import WSDTableHeadColumn from "../../../components/ui_kit/wsd_table/WSDTableHeadColumn.jsx";
import WSDTableBody from "../../../components/ui_kit/wsd_table/WSDTableBody.jsx";
import WSDTableColumn from "../../../components/ui_kit/wsd_table/WSDTableColumn.jsx";
import WSDCheckBox from "../../../components/ui_kit/WSDCheckBox.jsx";
import WSDTableActionsColumn from "../../../components/ui_kit/wsd_table/WSDTableActionsColumn.jsx";
import WSDPrimaryButton from "../../../components/ui_kit/WSDPrimaryButton.jsx";
import { setWSDAlertDialogPayload } from "../../../components/ui_kit/wsd_alert_dialog/wsdAlertDialogSlice.js";
import { hasFlag } from "country-flag-icons";
import AddDepartmentDialog from "../../dialogs/addDepartment_dialog/AddDepartmentDialog.jsx";

const DIALOGS = {
  ADD_DEPARTMENT: "ADD_DEPARTMENT",
};

function AdminDashboardPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [activeDialog, setActiveDialog] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("show")) {
      searchParams.set("show", "all");
      setSearchParams(searchParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const handleAddDepartmentDialogSubmit = (payload) => {
    /* TODO: */
  };

  return (
    <WSDDashboardLayout>
      <WSDDashboardTopAppBar />

      <WSDDashboardBase>
        <WSDDashboardDrawer />

        <WSDDashboardMainBodyContainer containsOverlay={[].some(Boolean)}>
          <div className="flex justify-between items-center bg-white p-4 border border-gray-200 rounded-lg shadow-sm z-100">
            {/*<WSDDashboardBreadCrumb*/}
            {/*  subSteps={["Masters", "XXXXXXXXXXXXXXXXXX"]}*/}
            {/*  description={"Manage XXXXXXXXXXXXXXXXXXXXXXX"}*/}
            {/*/>*/}

            <div className={"flex gap-2"}>
              <div>
                <h1>add</h1>
              </div>
              <WSDPrimaryButton
                className={"flex items-center gap-2"}
                onClick={(e) => {
                  // dispatch(resetFormOfXXXXXXXXXXXXXXXRefDialog()); // This Resets the dialog state first.
                  setActiveDialog(DIALOGS.ADD_DEPARTMENT);
                }}
              >
                <Plus size={20} /> Add Department
              </WSDPrimaryButton>
            </div>
          </div>

          {[].some(Boolean) && (
            <WSDOverlayWrapper className={clsx("flex flex-col", [].some(Boolean) && "bg-gray-200")}>
              <Loader className="animate-spin text-gray-700" size={40} />
              {[].some(Boolean) && <h3>Loading...</h3>}
            </WSDOverlayWrapper>
          )}
        </WSDDashboardMainBodyContainer>
      </WSDDashboardBase>

      {/** ALL DIALOGS WILL BE PLACED BELOW ----------------------- */}

      {activeDialog === DIALOGS.ADD_DEPARTMENT && (
        <WSDOverlayWrapper>
          <AddDepartmentDialog
            onClose={(e) => setActiveDialog(null)}
            onSubmit={handleAddDepartmentDialogSubmit}
          />
          {/*<WSDAlertDialog
            title={"Are You Sure?"}
            message={
              "This action will permanently delete this item. It cannot be undone."
            }
            positiveButton={positiveBtn(["Yes", "danger"], handleAddDepartmentDialogSubmit)}
            negativeButton={negativeBtn(["No"], (payload) => setActiveDialog(null))}
            onClose={(e) => setActiveDialog(null)}
          />*/}
        </WSDOverlayWrapper>
      )}

      {/**
       * ⚠️ DEVELOPER WARNING:
       * Following loader is intended solely for mutating actions (create/update/delete).
       * Do NOT attach it to fetch/read APIs.
       */}
      {[].some(Boolean) && (
        <WSDOverlayWrapper>
          <Loader className="animate-spin text-gray-700" size={40} />
        </WSDOverlayWrapper>
      )}
    </WSDDashboardLayout>
  );
}

export default AdminDashboardPage;
