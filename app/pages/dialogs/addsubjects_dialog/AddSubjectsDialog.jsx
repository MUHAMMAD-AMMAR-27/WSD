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
  selectSubject,
  selectSubjects,
  setSubject,
  setSubjects,
} from "./addSubjectsDialogSlice.js";
import WSDInputField from "../../../components/ui_kit/WSDInputField.jsx";
import WSDChipsContainer from "../../../components/ui_kit/WSDChipsContainer.jsx";
import { removeSubDepartment } from "../adddepartment_dialog/addDepartmentDialogSlice.js";

const AddSubjectsDialog = ({ onSubmit, onClose, ...props }) => {
  const dispatch = useAppDispatch();

  const Subject = useAppSelector(selectSubject);
  const Subjects = useAppSelector(selectSubjects)

  const handleDialogSubmit = (e) => {
    if (!Subject || Subject.trim() === "") {
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

    // const provideData = () => {
    //   const data = {
    //     country_id: countryId,
    //   };
    //
    //   return data;
    // };
    //
    onSubmit?.({
      Subject,
      Subjects,
    });
  };

  return (
    <WSDDialogModal {...props}>
      <WSDDialogModalHeader dialogTitle={"AddSubjects"} onClose={onClose} />

      <WSDDialogModalScrollableContent>
        <div className="grid grid-cols-1 gap-4">
          <label className={"text-lg"}>Add Subjects</label>
          <WSDInputField
          placeholder={"Enter Subject Name"}
          value={Subject}
          onChange={(e)=>{
            dispatch(setSubject(e.target.value))
          }}
          onKeyDown={(e)=>{
            if(e.key === "Enter" || e.key === "Tab"){
              e.preventDefault();
              if (!Subject || Subject.trim() === "") {
                dispatch(
                  queueNotification(
                    new ErrorNotification()
                      .withTitle("Empty Field")
                      .withMessage("Enter the Data first.")
                      .setDuration(5000)
                      .build()
                  )
                );

              }
              else{
               const exist = Subjects.some((c)=>{
                 return c.toLowerCase().trim() === Subject.toLowerCase().trim();
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
                }
                else{
                  dispatch(setSubjects())
                  dispatch(setSubject(""))
                }


            }
          }}}
          />




        </div>






      </WSDDialogModalScrollableContent>

      <WSDDialogModalFooter className={"p-3"}>
        <WSDSecondaryButton onClick={onClose}>Close</WSDSecondaryButton>

        <div className="flex gap-3 ml-auto">
          <WSDSecondaryButton>Reset</WSDSecondaryButton>

          <WSDPrimaryButton onClick={handleDialogSubmit}>AddSubjects</WSDPrimaryButton>
        </div>
      </WSDDialogModalFooter>
    </WSDDialogModal>
  );
};

export default AddSubjectsDialog;
