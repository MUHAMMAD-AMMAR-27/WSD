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

import {
  selectDepartment,
  selectSubDepartment,
  setDepartment,
  addSubDepartment,
  updateSubDepartment,
  removeSubDepartment,
  resetAddDepartmentDialogSliceState,
} from "./addDepartmentDialogSlice.js";

const AddDepartmentDialog = ({ onSubmit, onClose, ...props }) => {
  const dispatch = useAppDispatch();

  const department = useAppSelector(selectDepartment);
  const subDepartments = useAppSelector(selectSubDepartment);

  const handleDialogSubmit = () => {
    if (!department || department.trim() === "") {
      dispatch(
        queueNotification(
          new ErrorNotification()
            .withTitle("Empty Field")
            .withMessage("Enter Department first.")
            .setDuration(5000)
            .build()
        )
      );
      return;
    }

    if (subDepartments.length === 0) {
      dispatch(
        queueNotification(
          new ErrorNotification()
            .withTitle("Missing SubDepartment")
            .withMessage("Add at least one SubDepartment.")
            .setDuration(5000)
            .build()
        )
      );
      return;
    }

    onSubmit({
      Department: department,
      SubDepartment: subDepartments,

    });
    // console.log(department)

    dispatch(resetAddDepartmentDialogSliceState());
  };

  const handleReset = () => {
    dispatch(resetAddDepartmentDialogSliceState());
  };

  return (
    <WSDDialogModal {...props}>
      <WSDDialogModalHeader dialogTitle={"Add Department"} onClose={onClose} />

      <WSDDialogModalScrollableContent>
        <div className="flex flex-col gap-4">
          {/* Department Input */}
          {/*<div className="flex flex-col gap-1">*/}
          {/*  <label className="text-sm font-medium">Department</label>*/}

          {/*  <input*/}
          {/*    type="text"*/}
          {/*    value={department}*/}
          {/*    onChange={(e) => dispatch(setDepartment(e.target.value))}*/}
          {/*    className="border rounded-md px-3 py-2"*/}
          {/*    placeholder="Enter Department Name"*/}
          {/*  />*/}
          {/*</div>*/}

          {/*/!* SubDepartment Section *!/*/}
          {/*<div className="flex flex-col gap-2">*/}
          {/*  <div className="flex items-center justify-between">*/}
          {/*    <label className="text-sm font-medium">SubDepartments</label>*/}

          {/*    <button*/}
          {/*      onClick={() => dispatch(addSubDepartment())}*/}
          {/*      className="text-sm text-blue-600"*/}
          {/*    >*/}
          {/*      + Add*/}
          {/*    </button>*/}
          {/*  </div>*/}

          {/*  {subDepartments.map((subDepartment, index) => (*/}
          {/*    <div key={index} className="flex gap-2">*/}
          {/*      <input*/}
          {/*        type="text"*/}
          {/*        value={subDepartment}*/}
          {/*        onChange={(e) =>*/}
          {/*          dispatch(*/}
          {/*            updateSubDepartment({*/}
          {/*              index,*/}
          {/*              value: e.target.value,*/}
          {/*            })*/}
          {/*          )*/}
          {/*        }*/}
          {/*        className="border rounded-md px-3 py-2 flex-1"*/}
          {/*        placeholder="Enter SubDepartment"*/}
          {/*      />*/}

          {/*      <button*/}
          {/*        onClick={() => dispatch(removeSubDepartment(index))}*/}
          {/*        className="text-red-500"*/}
          {/*      >*/}
          {/*        Remove*/}
          {/*      </button>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</div>*/}
        </div>
      </WSDDialogModalScrollableContent>

      <WSDDialogModalFooter className={"p-3"}>
        <WSDSecondaryButton onClick={onClose}>Close</WSDSecondaryButton>

        <div className="flex gap-3 ml-auto">
          <WSDSecondaryButton onClick={handleReset}>Reset</WSDSecondaryButton>

          {/*<WSDPrimaryButton onClick={()=> setOpen(true)}>Add Department</WSDPrimaryButton>*/}
        </div>
      </WSDDialogModalFooter>
    </WSDDialogModal>
  );
};

export default AddDepartmentDialog;
