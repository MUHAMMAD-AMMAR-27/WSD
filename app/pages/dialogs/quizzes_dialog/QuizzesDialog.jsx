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
import { selectAnswersKey, selectRightAnswers, selectWrongAnswers } from "./quizzesDialogSlice.js";



const QuizzesDialog = ({ onSubmit, onClose, ...props }) => {
  const dispatch = useAppDispatch();

  const RightAnswer=useAppSelector(selectRightAnswers);
  const WrongAnswer =useAppSelector(selectWrongAnswers);
  const AnswersKey=useAppSelector(selectAnswersKey);


  const handleDialogSubmit = (e) => {
    if (!WrongAnswer || WrongAnswer.length ===0 ) {
      dispatch(
        queueNotification(
          new ErrorNotification()
            .withTitle("Empty Field")
            .withMessage("Enter the Data first.")
            .setDuration(5000)
            .build()
        )
      );
      // return;
    }

    // const provideData = () => {
    //
    //
    //
    // };

    // onSubmit?.(provideData());
  };

  return (
    <WSDDialogModal {...props}>
      <WSDDialogModalHeader dialogTitle={"Quizzes"} onClose={onClose} />

      <WSDDialogModalScrollableContent>
        <div className="grid grid-cols-1 gap-4">hi</div>
      </WSDDialogModalScrollableContent>

      <WSDDialogModalFooter className={"p-3"}>
        <WSDSecondaryButton onClick={onClose}>Close</WSDSecondaryButton>

        <div className="flex gap-3 ml-auto">
          <WSDSecondaryButton>Reset</WSDSecondaryButton>

          <WSDPrimaryButton onClick={handleDialogSubmit}>Quizzes</WSDPrimaryButton>
        </div>
      </WSDDialogModalFooter>
    </WSDDialogModal>
  );
};

export default QuizzesDialog;
