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
import WSDPrimaryButton from "../../components/ui_kit/WSDPrimaryButton.jsx";
import { MoreHorizontal, Pencil, Trash2, ClipboardCheck } from "lucide-react";
import WSDInputField from "../../components/ui_kit/WSDInputField.jsx";
import { Role } from "../../src/models/Role.js";
import  clipboard  from "../../assets/clipboard.jpeg" ;
import  questionMark from "../../assets/questionMark.jpeg"
import clipboardCheck from "../../assets/clipboardCheck.jpeg"
import books from "../../assets/books.png"
import clipboardAllCheck from "../../assets/clipbboardAllcheck.png"
import bookGraducationCap from "../../assets/bookGraducationCap.png"
import StudyTips from "../../assets/StudyTips.png"
import  performance  from "../../assets/performance.png";
function DashboardPage() {

  const services = [
    {
      id: 1,
      src: clipboard,
      alt:"clipBoard",
      type: "Exam Preparation",
      data: "view Syllabus & Study Material",
    },
    {
      id: 2,
      src: questionMark,
      alt:"QuestionMark",
      type: "Practice MCQs",
      data: "Practice Multiple Choice Question",
    },
    { id: 3,
      src: clipboardCheck,
      alt:"quiz",
      type: "Take a Quiz",
      data: "Test Your Knowledge"
    },
  ];

  const infos = [
    {
      id: 1,
      src: StudyTips,
      alt: "clipBoard",
      type: "Study Tips & Guides",
      data: "Helpful tips and resources for exam success",
    },
    {
      id: 2,
      src: performance,
      alt: "QuestionMark",
      type: "Performance Stats",
      data: "Track Your Progress and Results",
    },

  ];
  return (
    <WSDDashboardLayout>
      <WSDDashboardTopAppBar/>
      <WSDDashboardBase>
        <WSDDashboardDrawer />
        <WSDDashboardMainBodyContainer containsOverlay={false}>
          <div className="flex flex-col p-6 gap-3 min-h-full w-full">
            {/*<WSDDashboardBreadCrumb subSteps={["Overview"]} />*/}
            <div
              data-slot="card"
              className="bg-blue-200 border-gray-200 text-card-foreground flex flex-col    shadow-sm border   rounded-lg "
            >
              <div className="flex ">
                <div className="w-[70%] h-32 pb-3 flex flex-col justify-center pl-6 ">
                  <h1 className="font-bold text-3xl text-blue-900 tracking-wide mb-2">
                    Welcome to Exam Prep Hub!
                  </h1>
                  <p className="tracking-wide text-lg">Get Ready to Ace Your Exams</p>
                </div>
                <div className={" relative w-[30%] h-[100%]]  justify-between pt-3 items-end "}>
                  <img
                    className="h-[100%] absolute bottom-[-30%] left-3 "
                    src={books}
                    alt={"books"}
                  />
                  <img
                    className="h-[120%] absolute bottom-[-30%] left-19"
                    src={clipboardAllCheck}
                    alt="clipboardCheck"
                  />
                  <img
                    className="h-[140%] absolute bottom-[-50%] left-41 "
                    src={bookGraducationCap}
                    alt="bookGraducationCap"
                  />
                </div>
              </div>
              <div className="bg-blue-300 h-10 rounded-b-lg"></div>
            </div>

            <div className={"flex justify-center gap-4 "}>
              {services.map((service) => {
                return (
                  <div
                    key={service.id}
                    data-slot="card"
                    className="bg-white text-card-foreground  w-1/3  flex  shadow-lg border border-gray-200  rounded-lg overflow-hidden"
                  >
                    <div className={" h-full "}>
                      <img src={service.src} alt={service.alt} />
                    </div>
                    {/*<div data-slot="card-content" className="p-4 pt-0 space-y-6">*/}
                    <div
                      className={
                        "flex flex-col items-start w-full justify-center tracking-tighter gap-4  "
                      }
                    >
                      <h2 className={"font-bold text-2xl "}>{service.type}</h2>
                      <p className={"text-xl"}>{service.data}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/*<hr className=" text-gray-400 opacity-15 border-t-3 " />*/}

            <div className={"main border-t-3  border-b-3 border-gray-200 flex h-75 gap-4"}>
              <div className="left-side h-full  w-[60%] flex flex-col ">
                <h1 className="font-medium text-2xl h-[15%] mt-2">Popular Courses</h1>
                <div className="h-[55%] w-full bg-gray-200 flex justify-center items-center">
                  <div className="bg-white h-[90%] w-[98%] border-gray-200 shadow-sm border ">
                    adsad
                  </div>
                </div>
              </div>
              <span className="center h-[90%] bg-gray-200 w-0.5 mt-4 "></span>
              <div className="right-side h-full  w-[45%]">
                <h1 className="font-medium text-2xl h-[15%] mt-2">Upcoming Quizzes</h1>
                <div className="h-[60%] w-full bg-gray-200 flex justify-center items-center">
                  <div className="bg-white h-[90%] w-[98%] border-gray-200 shadow-sm border ">
                    adsad
                  </div>
                </div>
              </div>
            </div>

            <div className={"flex justify-center gap-4 "}>
              {infos.map((info) => {
                return (
                  <div
                    key={info.id}
                    data-slot="card"
                    className="bg-white text-card-foreground  w-1/2  flex  shadow-lg border border-gray-200 mb-3 rounded-lg overflow-hidden"
                  >
                    <div className={" h-full "}>
                      <img src={info.src} alt={info.alt} />
                    </div>
                    {/*<div data-slot="card-content" className="p-4 pt-0 space-y-6">*/}
                    <div
                      className={
                        "flex flex-col items-start w-full justify-center leading-8 gap-4  "
                      }
                    >
                      <h2 className={"font-bold text-2xl "}>{info.type}</h2>
                      <p className={"text-xl"}>{info.data}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </WSDDashboardMainBodyContainer>
      </WSDDashboardBase>
    </WSDDashboardLayout>
  );
}

export default DashboardPage;
