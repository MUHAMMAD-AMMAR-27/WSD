import React, { useEffect, useState } from "react";
import { Loader, Pencil, Plus, PlusIcon, X, Trash2, AlignJustify, Flag } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../src/app/hooks.js";
import clsx from "clsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import WSDDashboardLayout from "../../components/dashboard_kit/WSDDashboardLayout.jsx";
import WSDDashboardTopAppBar from "../../components/dashboard_kit/WSDDashboardTopAppBar.jsx";
import WSDDashboardBase from "../../components/dashboard_kit/WSDDashboardBase.jsx";
import WSDDashboardDrawer from "../../components/dashboard_kit/WSDDashboardDrawer.jsx";
import WSDDashboardMainBodyContainer from "../../components/dashboard_kit/WSDDashboardMainBodyContainer.jsx";
import WSDDashboardBreadCrumb from "../../components/dashboard_kit/WSDDashboardBreadCrumb.jsx";
import WSDEmptyStatePlaceholder from "../../components/ui_kit/WSDEmptyStatePlaceholder.jsx";
import WSDTable from "../../components/ui_kit/wsd_table/WSDTable.jsx";
import WSDTableHead from "../../components/ui_kit/wsd_table/WSDTableHead.jsx";
import WSDOverlayWrapper from "../../components/ui_kit/WSDOverlayWrapper.jsx";
import { queueNotification } from "../../components/ui_kit/wsd_notification_system/wsdNotificationsSlice.js";
import { operationFailedNotification } from "../../src/utils/NotificationSamples.js";
import { tokenValidationMiddleware } from "../../src/utils/token_validation_middleware.js";
import { formatDate } from "../../src/utils/format_utils.js";
import { parseCarbonOrISOToDate } from "../../src/utils/date_utils.js";
import WSDTableToolbar, {
  WSDTableToolbarTab,
  WSDTableToolbarTabsLayout,
} from "../../components/ui_kit/wsd_table/WSDTableToolbar.jsx";
import {
  MoreHorizontal,
  ClipboardCheck,
  Search,
  Check,
  ArrowRight,
  ArrowLeft,
  Clock,
} from "lucide-react";
import WSDTableRow from "../../components/ui_kit/wsd_table/WSDTableRow.jsx";
import WSDTableHeadColumn from "../../components/ui_kit/wsd_table/WSDTableHeadColumn.jsx";
import WSDTableBody from "../../components/ui_kit/wsd_table/WSDTableBody.jsx";
import WSDTableColumn from "../../components/ui_kit/wsd_table/WSDTableColumn.jsx";
import WSDCheckBox from "../../components/ui_kit/WSDCheckBox.jsx";
import WSDTableActionsColumn from "../../components/ui_kit/wsd_table/WSDTableActionsColumn.jsx";
import WSDPrimaryButton from "../../components/ui_kit/WSDPrimaryButton.jsx";
import { setWSDAlertDialogPayload } from "../../components/ui_kit/wsd_alert_dialog/wsdAlertDialogSlice.js";
import { hasFlag } from "country-flag-icons";
import QuizzesDialog from "../dialogs/quizzes_dialog/QuizzesDialog.jsx";
import {
  selectAnswersKey,
  selectRightAnswers,
  selectWrongAnswers,
} from "../dialogs/quizzes_dialog/quizzesDialogSlice.js";

const DIALOGS = {
  QUIZZES: "QUIZZES",
};

// function AddQuizzesDialog(props) {
//   return null;
// }

function Quizzes() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [activeDialog, setActiveDialog] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
    const [index, setIndex] = useState(0);
    const RightAnswers=useAppSelector(selectRightAnswers);
    const WrongAnswers=useAppSelector(selectWrongAnswers);
    const AnswersKey=useAppSelector(selectAnswersKey)

    useEffect(() => {
      setSelectedOption(null);
    }, [index]);

    const data = [
      {
        statement: "what is the capital of France?",
        options: ["Rome", "Paris", "Berlin", "Madrid"],
        rightAnswer: "Paris",
      },
      {
        statement: "what is the capital of Pakistan?",
        options: ["Islamabad", "Karachi", "Lahore", "Sargodha"],
        rightAnswer: "Islamabad",
      },
    ];
    const { statement, options, rightAnswer } = data[index];

  const handleQuizzesDialogSubmit = (payload) => {
    /* TODO: */
  };

  return (
    <WSDDashboardLayout>
      <WSDDashboardTopAppBar />

      <WSDDashboardBase>
        <WSDDashboardDrawer />

        <WSDDashboardMainBodyContainer containsOverlay={[].some(Boolean)}>
          <div className="flex h-min-full items-center justify-between   gap-3 p-6 w-full bg-gray-50 shadow-sm">
            <div className="flex gap-4">
              <div className="p-4 bg-white border-2 border-gray-200 rounded-md ">
                <ArrowLeft color="#21288c" />
              </div>

              <div className="  border-gray-200  flex flex-col justify-center gap-2 ">
                <h1 className="font-bold text-2xl  ">General knowledge Quiz</h1>
                <WSDDashboardBreadCrumb subSteps={[""]} />
              </div>
            </div>

            <div className="p-3 w-35 bg-white border-2 border-gray-200 rounded-md flex gap-2  items-center">
              <Clock />
              <div className="flex flex-col">
                <p className="text-gray-800 text-sm">TimeLeft</p>
                <p>actualTime</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-6 gap-3  w-full">
            <div className="h-150 w-[70%]  bg-white flex flex-col  items-center  rounded-md shadow-lg border-2 border-gray-200 ">
              <div className="h-20 w-full  flex items-center relative  ml-3">
                <Search
                  className="absolute left-2 top-1/2 -translate-y-1/2   font-bold "
                  size={25}
                />
                <h1 className=" ml-11  font-semibold text-2xl  capitalize">{statement}</h1>
              </div>

              <div className=" w-[95%] flex flex-col gap-2">
                {options.map((option, mcqIndex) => {
                  return (
                    <div
                      key={mcqIndex}
                      onClick={() => {
                        setSelectedOption(option);
                      }}
                      className={clsx(
                        "min-h-15 w-full flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300 ml-3 border-2 border-gray-200"
                      )}
                    >
                      <div
                        className={clsx(
                          "h-10 w-10 rounded-full border-2 flex items-center justify-center shrink-0 font-semibold text-base"
                        )}
                      >
                        {String.fromCharCode(65 + mcqIndex)}
                      </div>

                      <div className="flex flex-col ">
                        <strong className={clsx("text-lg font-semibold")}>{option}</strong>
                        {/*      <Check className="h-4 w-4 text-white" />*/}

                        {/*<Check className="h-4 w-4 text-white" />*/}

                        {/*{shouldRevealCorrectAnswer && (*/}
                        {/*  <p className="flex items-center gap-2 text-sm text-green-700 mt-1">*/}
                        {/*    <span className="h-4 w-4 bg-green-700 flex items-center justify-center">*/}
                        {/*      <Check className="h-4 w-4 text-white" />*/}
                        {/*    </span>*/}
                        {/*    Correct Answer*/}
                        {/*  </p>*/}
                        {/*)}*/}
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                className="bg-white text-blue-800  border-gray-200 h-10 w-30 flex justify-around items-center font-bold border-2  rounded text-lg hover:cursor-pointer"
                onClick={() => {
                  if (index < data.length - 1) setIndex((prev) => prev + 1);
                }}
              >
                Next <ArrowRight className="ml-2" strokeWidth={3} size={20} />
              </button>
            </div>
          </div>

          <div className={"flex gap-2"}>
            <WSDPrimaryButton
              className={"flex items-center gap-2"}
              onClick={(e) => {
                // This Resets the dialog state first.
                setActiveDialog(DIALOGS.QUIZZES);
              }}
            >
              <Plus size={20} />
            </WSDPrimaryButton>
          </div>

          {/*{[].some(Boolean) && (*/}
          {/*  <WSDOverlayWrapper className={clsx("flex flex-col", [].some(Boolean) && "bg-gray-200")}>*/}
          {/*    <Loader className="animate-spin text-gray-700" size={40} />*/}
          {/*    {[].some(Boolean) && <h3>Loading...</h3>}*/}
          {/*  </WSDOverlayWrapper>*/}
          {/*)}*/}
        </WSDDashboardMainBodyContainer>
      </WSDDashboardBase>

      {/** ALL DIALOGS WILL BE PLACED BELOW ----------------------- */}

      {activeDialog === DIALOGS.QUIZZES && (
        <WSDOverlayWrapper>
          <QuizzesDialog
            onClose={(e) => setActiveDialog(null)}
            onSubmit={handleQuizzesDialogSubmit}
          />
          {/*<QuizzesDialog
            onClose={(e) => setActiveDialog(null)}
            onSubmit={handleQuizzesDialogSubmit}
          />*/}
          {/*<WSDAlertDialog
            title={"Are You Sure?"}
            message={
              "This action will permanently delete this item. It cannot be undone."
            }
            positiveButton={positiveBtn(["Yes", "danger"], handleQuizesDialogSubmit)}
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

export default Quizzes;
