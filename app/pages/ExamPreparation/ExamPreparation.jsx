import React, { useState, useEffect, useRef } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import StatsCard from "../../components/dashboard/body/StatsCard.jsx";
import StatHeading from "../../components/dashboard/body/StatHeading.jsx";
import { useNavigate, Link } from "react-router-dom";
import WSDDashboardLayout from "../../components/dashboard_kit/WSDDashboardLayout.jsx";
import WSDDashboardTopAppBar from "../../components/dashboard_kit/WSDDashboardTopAppBar.jsx";
import WSDDashboardBase from "../../components/dashboard_kit/WSDDashboardBase.jsx";
import WSDDashboardDrawer from "../../components/dashboard_kit/WSDDashboardDrawer.jsx";
import WSDDashboardMainBodyContainer from "../../components/dashboard_kit/WSDDashboardMainBodyContainer.jsx";
import WSDDashboardBreadCrumb from "../../components/dashboard_kit/WSDDashboardBreadCrumb.jsx";
import clsx from "clsx";
import WSDPrimaryButton from "../../components/ui_kit/WSDPrimaryButton.jsx";
import {
  MoreHorizontal,
  Pencil,
  Trash2,
  ClipboardCheck,
  Search,
  Check,
  ArrowRight,
} from "lucide-react";
import WSDInputField from "../../components/ui_kit/WSDInputField.jsx";
import { Role } from "../../src/models/Role.js";
import clipboard from "../../assets/clipboard.jpeg";
import questionMark from "../../assets/questionMark.jpeg";
import clipboardCheck from "../../assets/clipboardCheck.jpeg";
import books from "../../assets/books.png";
import clipboardAllCheck from "../../assets/clipbboardAllcheck.png";
import bookGraducationCap from "../../assets/bookGraducationCap.png";
import StudyTips from "../../assets/StudyTips.png";
import performance from "../../assets/performance.png";
function ExamPreparation() {
  const [SelectedOption,setSelectedOption]=useState(null)
  const options =["Rome","Paris","Berlin","Madrid"]
  const rightAnswer="Paris";




  return (
    <WSDDashboardLayout>
      <WSDDashboardTopAppBar />
      <WSDDashboardBase>
        <WSDDashboardDrawer />
        <WSDDashboardMainBodyContainer containsOverlay={false}>
          <div className="flex flex-col gap-3 min-h-full w-full">
            <div className="border-b-2 h-28 border-gray-200  flex flex-col justify-center gap-2">
              <h1 className="font-bold text-4xl   ">Exams Preparation</h1>
              <WSDDashboardBreadCrumb subSteps={["Overview "]} />
            </div>
            <div className="flex  h-20">
              <div className="left-side w-[80%] flex flex-col gap-3">
                <h1 className="font-bold text-3xl   ">Solved MCQs</h1>
                <p className="text-md">Review the solved MCQs for your exam</p>
              </div>
              <div className=" right-side w-[20%] ">
                <h1>sdf</h1>
              </div>
            </div>

            <div className="h-100   bg-white flex flex-col justify-center items-center border-2 border-gray-200 rounded-md shadow-sm ">
              <div className="h-20 w-full  flex items-center relative  ml-3">
                <Search
                  className="absolute left-2 top-1/2 -translate-y-1/2   font-bold "
                  size={25}
                />
                <h1 className=" ml-11 font-semibold text-2xl  ">What is the capital of France?</h1>
              </div>

              <div className="w-[95%] flex flex-col gap-2">
                {options.map((option, index) => {
                  return (
                    <div
                      key={index}
                      className={clsx(
                        "min-h-15 w-full flex items-center gap-4 rounded-2xl  px-4 py-3 transition-all duration-300 ml-3",

                        // correct answer
                        rightAnswer === option ? "bg-green-100 " : "bg-white border-gray-200"
                      )}
                    >
                      {/* Circle */}
                      <div
                        className={clsx(
                          "h-10 w-10 rounded-full border-2 flex items-center justify-center shrink-0 font-semibold text-base ",

                          rightAnswer === option
                            ? "bg-green-700 border-green-700 text-white"
                            : "border-gray-400 text-gray-700"
                        )}
                      >
                        {rightAnswer === option ? (
                          <Check className="h-8 w-8" />
                        ) : (
                          String.fromCharCode(65 + index)
                        )}
                      </div>

                      {/* Text */}
                      <div className="flex flex-col">
                        <strong
                          className={clsx(
                            "text-lg font-semibold",

                            rightAnswer === option ? "text-green-700" : "text-gray-800"
                          )}
                        >
                          {option}
                        </strong>

                        {rightAnswer === option && (
                          <p className="flex items-center gap-2 text-sm text-green-700 mt-1">
                            <span className="h-4 w-4  bg-green-700 flex items-center justify-center">
                              <Check className="h-4 w-4 font-bold text-white" />
                            </span>
                            Correct Answer
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="h-20  w-full   border-b-2 border-gray-200 flex justify-between items-center">
              <p>1-10 of 120 Questions</p>
              <div>

              </div>

                <button className="bg-white text-blue-800  border-gray-200 h-10 w-30 flex justify-around items-center font-bold border-2  rounded text-lg">
                  Next <ArrowRight className="ml-2" strokeWidth={3} size={20} />
                </button>

            </div>
          </div>
        </WSDDashboardMainBodyContainer>
      </WSDDashboardBase>
    </WSDDashboardLayout>
  );
}

export default ExamPreparation;
