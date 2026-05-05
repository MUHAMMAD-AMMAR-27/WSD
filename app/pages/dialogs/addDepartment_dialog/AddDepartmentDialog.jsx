import React from "react";

import WSDDialogModal, {
  WSDDialogModalHeader,
  WSDDialogModalScrollableContent,
  WSDDialogModalFooter,
} from "../../../components/ui_kit/WSDDialogModal.jsx";

import WSDSecondaryButton from "../../../components/ui_kit/WSDSecondaryButton.jsx";
import WSDPrimaryButton from "../../../components/ui_kit/WSDPrimaryButton.jsx";
import { queueNotification } from "../../../components/ui_kit/wsd_notification_system/wsdNotificationsSlice.js";
import { ErrorNotification } from "../../../src/utils/NotificationBuilder.js";
import { useAppDispatch, useAppSelector } from "../../../src/app/hooks.js";
import { selectDepartment } from "./addDepartmentDialogSlice.js";

// import { selectSomething, setSomething } from "./addDepartmentDialogSlice.js";

const AddDepartmentDialog = ({ onSubmit, onClose, ...props }) => {
  const dispatch = useAppDispatch();

  const department = useAppSelector(selectDepartment);

  const handleDialogSubmit = (e) => {
    if (!department || department.trim() === "") {
      dispatch(
        queueNotification(
          new ErrorNotification()
            .withTitle("Empty Field")
            .withMessage("Enter the Data first.")
            .setDuration(5000)
            .build()
        )
      );
      return;
    }
  }



  return (
    <WSDDialogModal {...props}>
      <WSDDialogModalHeader dialogTitle={"AddDepartment"} onClose={onClose} />

      <WSDDialogModalScrollableContent>
        <div className="grid grid-cols-1 gap-4"></div>
      </WSDDialogModalScrollableContent>

      <WSDDialogModalFooter className={"p-3"}>
        <WSDSecondaryButton onClick={onClose}>Close</WSDSecondaryButton>

        <div className="flex gap-3 ml-auto">
          <WSDSecondaryButton>Reset</WSDSecondaryButton>

          <WSDPrimaryButton onClick={handleDialogSubmit}>AddDepartment</WSDPrimaryButton>
        </div>
      </WSDDialogModalFooter>
    </WSDDialogModal>
  );
};

export default AddDepartmentDialog;
