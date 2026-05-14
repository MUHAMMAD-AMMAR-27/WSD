import React, { useState } from "react";

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
  selectSubDepartments,
  setDepartment,
  addSubDepartments, resetAddDepartmentDialogSliceState,
  // updateSubDepartment,
  // removeSubDepartment,
  // resetAddDepartmentDialogSliceState,
} from "./addDepartmentDialogSlice.js";
import WSDInputField from "../../../components/ui_kit/WSDInputField.jsx";
import WSDChipsContainer from "../../../components/ui_kit/WSDChipsContainer.jsx";

const AddDepartmentDialog = ({ onSubmit, onClose, ...props }) => {
  const dispatch = useAppDispatch();

  const Department = useAppSelector(selectDepartment);
  const SubDepartments = useAppSelector(selectSubDepartments);

  const [SubDepartment,SetSubDepartment]=useState("")

  const handleDialogSubmit = () => {
    if (!Department || Department.trim() === "") {
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

    onSubmit?.({
      Department: Department,
      SubDepartment: SubDepartments,


    });


    dispatch(resetAddDepartmentDialogSliceState());
  };

  const handleReset = () => {
    dispatch(resetAddDepartmentDialogSliceState());
    SetSubDepartment("");
  };

  return (
    <WSDDialogModal {...props}>
      <WSDDialogModalHeader dialogTitle={"Add Department"} onClose={onClose} />

      <WSDDialogModalScrollableContent>
        <div className="flex flex-col gap-4 ">

            <label className={"text-lg"}>Add Department</label>
            <WSDInputField
              placeholder={"Enter Department Name"}
              value={Department}
              disabled={SubDepartments.length !==0}
              onChange={(e) => {
                dispatch(setDepartment(e.target.value.trim()));
              }}
            />
          <label>Add SubDepartment</label>
          <WSDInputField
            placeholder={"Enter SubDepartment"}
            value={SubDepartment}
            onChange={(e)=>SetSubDepartment(e.target.value)}
            onKeyDown={(e)=>{

              if(e.key==="Enter" || e.key==="Tab"){
                e.preventDefault();

                 if(SubDepartment.trim()===""){
                   dispatch(
                     queueNotification(
                       new ErrorNotification()
                         .withTitle("Empty Field")
                         .withMessage("Enter SubDepartment first.")
                         .setDuration(5000)
                         .build()
                     )
                   );
                 }
                 else{
                   const exist= SubDepartments.some((c)=>{
                     return  c.toLowerCase().trim() === SubDepartment.toLowerCase().trim();
                   })

                   if(exist){
                     dispatch(
                       queueNotification(
                         new ErrorNotification()
                           .withTitle("SubDepartment Already exit")
                           .withMessage("Enter another SubDepartment.")
                           .setDuration(5000)
                           .build()
                       )
                     );
                   }
                   else{
                     dispatch(addSubDepartments(SubDepartment))
                   }

            }
              }

            }}
              />
          <WSDPrimaryButton
            children={"Add Fields"}
            disabled={Department.trim()===""  }
            onClick={(e)=>{
              if(SubDepartment.trim()!==""){
                const exist = SubDepartments.some((c) => {
                  return c.toLowerCase().trim() === SubDepartment.toLowerCase().trim();
                });
                if (exist) {
                  dispatch(
                    queueNotification(
                      new ErrorNotification()
                        .withTitle("SubDepartment Already exit")
                        .withMessage("Enter another SubDepartment.")
                        .setDuration(5000)
                        .build()
                    )
                  );
                } else {
                  dispatch(addSubDepartments(SubDepartment));

                  // onSubmit()


                }




              }}}

          />
          <WSDChipsContainer chips={SubDepartments.map((Subdepartment)=>{
            return{
              id:crypto.randomUUID(),
              label:Subdepartment,
            };
            })}
          />
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
