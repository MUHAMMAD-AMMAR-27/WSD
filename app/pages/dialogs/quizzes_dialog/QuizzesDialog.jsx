import React from "react";
import { Check } from "lucide-react";

// Keeping all your required components
import WSDDialogModal, {
  WSDDialogModalHeader,
  WSDDialogModalScrollableContent,
  WSDDialogModalFooter,
} from "../../../components/ui_kit/WSDDialogModal.jsx";
import WSDSecondaryButton from "../../../components/ui_kit/WSDSecondaryButton.jsx";
import WSDPrimaryButton from "../../../components/ui_kit/WSDPrimaryButton.jsx";
import WSDInputField from "../../../components/ui_kit/WSDInputField.jsx"; // Kept if you need it later
import { queueNotification } from "../../../components/ui_kit/wsd_notification_system/wsdNotificationsSlice.js";
import { ErrorNotification } from "../../../src/utils/NotificationBuilder.js";
import { useAppDispatch, useAppSelector } from "../../../src/app/hooks.js";
import { selectAnswersKey, selectRightAnswers, selectWrongAnswers } from "./quizzesDialogSlice.js";

const QuizzesDialog = ({ onSubmit, onClose, ...props }) => {
  const dispatch = useAppDispatch();

  // --- Read Dynamic Data from Redux ---
  const rightAnswersCount = useAppSelector(selectRightAnswers) || 0;
  const wrongAnswers = useAppSelector(selectWrongAnswers) || [];
  const answersKey = useAppSelector(selectAnswersKey) || [];

  // Calculate totals and percentages dynamically
  const totalQuestions = answersKey.length || 10; // Fallback to 10
  const percentage = Math.round((rightAnswersCount / totalQuestions) * 100) || 0;

  // --- Submission Logic ---
  const handleDialogSubmit = (e) => {
    if (!answersKey || answersKey.length === 0) {
      dispatch(
        queueNotification(
          new ErrorNotification()
            .withTitle("Empty Data")
            .withMessage("No quiz data found to review.")
            .setDuration(5000)
            .build()
        )
      );
      return;
    }

    // Pass data up
    if (onSubmit) {
      onSubmit({
        rightAnswersCount,
        wrongAnswers,
        answersKey,
      });
    }

    // Explicitly close the modal so the user can see the checked quiz
    if (onClose) {
      onClose();
    }
  };

  return (
    <WSDDialogModal
      {...props}
      // OVERRIDING SIZE: Makes the modal 90% of the viewport width, up to 1400px.
      className="!p-0 !w-[90vw] !max-w-[1400px] !bg-transparent !border-none !shadow-none"
    >
      {/* Hidden header to keep your components intact but respect the image's layout */}
      <WSDDialogModalHeader dialogTitle={"Quiz Results"} onClose={onClose} className="hidden" />

      <WSDDialogModalScrollableContent className="!p-4 !overflow-hidden">
        {/* INNER CARD: Setting height to 85% of the viewport height so it fills the screen */}
        <div className="w-full h-[85vh] min-h-[600px] bg-white rounded-lg shadow-2xl border border-gray-200 flex overflow-hidden">
          {/* --- LEFT COLUMN: Score Bar --- */}
          <div className="w-1/4 py-12 px-6 flex flex-col items-center border-r border-gray-100">
            <h3 className="text-gray-800 font-semibold text-[17px] mb-10">Score</h3>

            {/* Bar Chart Container - Height set to stretch dynamically */}
            <div className="relative w-[110px] h-[75%] min-h-[350px] bg-[#f3f4f6] rounded-md overflow-hidden flex flex-col justify-end">
              {/* Percentage Text positioned inside the gray space */}
              <div className="absolute top-[20%] w-full flex items-center justify-center z-10">
                <span className="font-bold text-5xl text-[#2563eb]">{percentage}%</span>
              </div>
              {/* Filled Blue Bar */}
              <div
                className="w-full bg-[#2563eb] transition-all duration-700 ease-in-out"
                style={{ height: `${percentage}%` }}
              />
            </div>
          </div>

          {/* --- CENTER COLUMN: Success Message & Stats --- */}
          <div className="w-2/4 px-12 py-10 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-[#22c55e] rounded-full flex items-center justify-center mb-8 shadow-sm">
              <Check className="text-white w-12 h-12" strokeWidth={4} />
            </div>

            <h2 className="text-4xl font-bold text-[#1e293b] leading-tight mb-2">
              Your Quiz has been completed
            </h2>
            <h2 className="text-4xl font-bold text-[#22c55e] mb-12">Successfully!</h2>

            <div className="w-4/5 h-px bg-gray-200 mb-10" />

            <p className="text-[#475569] text-[18px] mb-10">
              You scored{" "}
              <span className="font-bold text-[#2563eb] text-xl">{rightAnswersCount}</span> out of{" "}
              <span className="font-bold text-[#2563eb] text-xl">{totalQuestions}</span> questions
              correctly.
            </p>

            <div className="mb-14">
              <p className="text-[#64748b] text-[16px] mb-3">Incorrect Questions</p>
              <p className="text-[#ef4444] font-bold text-[22px] tracking-wide">
                {wrongAnswers.length > 0 ? wrongAnswers.join(", ") : "None!"}
              </p>
            </div>

            {/* Using WSDPrimaryButton right here in the center column as requested */}
            <WSDPrimaryButton
              onClick={handleDialogSubmit}
              className="px-10 py-6 bg-[#2563eb] hover:bg-blue-700 text-white  flex justify-end items-center font-bold rounded text-[15px] uppercase tracking-wider"
            >
              SEE CHECKED QUIZ
            </WSDPrimaryButton>
          </div>

          {/* --- RIGHT COLUMN: Answer Key Table --- */}
          <div className="w-1/4 flex flex-col border-l border-gray-100 bg-white">
            <div className="py-8 text-center font-semibold text-gray-800 text-[17px] border-b border-gray-100">
              Answer Key
            </div>

            {/* Removed the max-h constraint so it fills the massive vertical space naturally */}
            <div className="overflow-y-auto flex-1 custom-scrollbar pr-1">
              <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 8px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 4px; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 4px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #64748b; }
              `}</style>

              {answersKey.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center px-10 py-[22px] border-b border-gray-100 last:border-0"
                >
                  <span className="text-gray-500 text-[16px] w-10 text-left">{item.id}</span>
                  <span className="text-[#1e293b] text-[16px] font-medium ml-auto">{item.ans}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WSDDialogModalScrollableContent>

      {/* Hidden footer to keep your components intact but respect the image's layout */}
      <WSDDialogModalFooter className="hidden">
        <WSDSecondaryButton onClick={onClose}>Close</WSDSecondaryButton>
      </WSDDialogModalFooter>
    </WSDDialogModal>
  );
};

export default QuizzesDialog;
