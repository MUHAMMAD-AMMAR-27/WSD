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
import {
  MoreHorizontal,
  Pencil,
  Trash2,
  ClipboardCheck,
  ClipboardList,
  Compass,
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
function DashboardPage() {
  return (
    <WSDDashboardLayout>
      <WSDDashboardTopAppBar />
      <WSDDashboardBase>
        <WSDDashboardDrawer />
        <WSDDashboardMainBodyContainer containsOverlay={false}>
          <div className="flex flex-col gap-3 h-[100%] w-full">
            {/*<WSDDashboardBreadCrumb subSteps={["Overview"]} />*/}
            <div className="h-[13%]  flex justify-between border-b-2 border-gray-300">
              <div className="left-side w-1/2 flex flex-col justify-center gap-4">
                <h1 className="font-bold text-4xl   ">Exams</h1>
                <p className="text-lg">Choose a department to begin your exam preparation</p>
              </div>
              <div className="right-side h-[70%] w-[40%] bg-blue-100 flex items-center gap-3 justify-center  rounded-xl border-2 border-gray-300">
                <ClipboardList size={55} color="#0f21e6" strokeWidth={1.75} className="w-[15%]" />
                <div className="w-[85%] ">
                  <h2 className="font-semibold text-lg">Prepare Smart. Achieve More.</h2>
                  <p className="text-sm">Select your target exam and start your journey today</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div>
                <h2 className="font-semibold text-xl ">Explore Departments</h2>
                <p>
                  Select a department to view available exams, syllabus study materials, MCQs and
                  quizzes.
                </p>
              </div>
              <div className=" flex  items-end ">
                <p className="bg-blue-100 border-2 border-gray-300 rounded-xl px-3 py-1">
                  Department Available
                </p>
              </div>
            </div>

            <div className="h-[70%] bg-pink-500">kafnsjhao</div>

            <div className="h-[10%] bg-blue-100 flex items-center  rounded-xl border-2 border-gray-300 mt-2">
              <Compass color="#191d85" size={40} className="w-[6%]" />
              <div className="w-[80%] ">
                <h2 className="font-semibold text-lg">Prepare Smart. Achieve More.</h2>
                <p className="text-sm">Select your target exam and start your journey today</p>
              </div>
              <WSDPrimaryButton className={"flex items-center"}>
                View All Exams <ArrowRight strokeWidth={1.5} size={20} />
              </WSDPrimaryButton>
            </div>

            {/*<div className={"flex justify-center gap-4 "}>*/}
            {/*  {services.map((service) => {*/}
            {/*    return (*/}
            {/*      <div*/}
            {/*        key={service.id}*/}
            {/*        data-slot="card"*/}
            {/*        className="bg-white text-card-foreground w-1/3  flex  shadow-lg border border-gray-200 mb-3 rounded-lg overflow-hidden"*/}
            {/*      >*/}
            {/*        <div className={" h-full "}>*/}
            {/*          <img src={service.src} alt={service.alt} />*/}
            {/*        </div>*/}
            {/*        /!*<div data-slot="card-content" className="p-4 pt-0 space-y-6">*!/*/}
            {/*        <div*/}
            {/*          className={*/}
            {/*            "flex flex-col items-start w-full justify-center leading-8 gap-4  "*/}
            {/*          }*/}
            {/*        >*/}
            {/*          <h2 className={"font-bold text-2xl "}>{service.type}</h2>*/}
            {/*          <p className={"text-xl"}>{service.data}</p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    );*/}
            {/*  })}*/}
            {/*</div>*/}
            {/*<hr className=" text-gray-400 opacity-15 border-t-3 " />*/}

            {/*<div className={"main border-t-3  border-b-3 border-gray-200 flex h-80 gap-4"}>*/}
            {/*  <div className="left-side h-full  w-[60%] flex flex-col ">*/}
            {/*    <h1 className="font-medium text-2xl h-[15%] mt-2">Popular Courses</h1>*/}
            {/*    <div className="h-[55%] w-full bg-gray-200 flex justify-center items-center">*/}
            {/*      <div className="bg-white h-[90%] w-[98%] border-gray-200 shadow-sm border ">*/}
            {/*        adsad*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <span className="center h-[90%] bg-gray-200 w-1 mt-4 "></span>*/}
            {/*  <div className="right-side h-full  w-[45%]">*/}
            {/*    <h1 className="font-medium text-2xl h-[15%] mt-2">Upcoming Quizzes</h1>*/}
            {/*    <div className="h-[60%] w-full bg-gray-200 flex justify-center items-center">*/}
            {/*      <div className="bg-white h-[90%] w-[98%] border-gray-200 shadow-sm border ">*/}
            {/*        adsad*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/*<div className={"flex justify-center gap-4 "}>*/}
            {/*  {infos.map((info) => {*/}
            {/*    return (*/}
            {/*      <div*/}
            {/*        key={info.id}*/}
            {/*        data-slot="card"*/}
            {/*        className="bg-white text-card-foreground w-1/2  flex  shadow-lg border border-gray-200 mb-3 rounded-lg overflow-hidden"*/}
            {/*      >*/}
            {/*        <div className={" h-full "}>*/}
            {/*          <img src={info.src} alt={info.alt} />*/}
            {/*        </div>*/}
            {/*        /!*<div data-slot="card-content" className="p-4 pt-0 space-y-6">*!/*/}
            {/*        <div*/}
            {/*          className={*/}
            {/*            "flex flex-col items-start w-full justify-center leading-8 gap-4  "*/}
            {/*          }*/}
            {/*        >*/}
            {/*          <h2 className={"font-bold text-2xl "}>{info.type}</h2>*/}
            {/*          <p className={"text-xl"}>{info.data}</p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    );*/}
            {/*  })}*/}
            {/*</div>*/}
          </div>
        </WSDDashboardMainBodyContainer>
      </WSDDashboardBase>
    </WSDDashboardLayout>
  );
}

export default DashboardPage;
