import React, { useState, useEffect, useRef } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import StatsCard from "../../components/dashboard/body/StatsCard.jsx";
import StatHeading from "../../components/dashboard/body/StatHeading.jsx";
import { useNavigate, Link, useParams } from "react-router-dom";
import WSDDashboardLayout from "../../components/dashboard_kit/WSDDashboardLayout.jsx";
import WSDDashboardTopAppBar from "../../components/dashboard_kit/WSDDashboardTopAppBar.jsx";
import WSDDashboardBase from "../../components/dashboard_kit/WSDDashboardBase.jsx";
import WSDDashboardDrawer from "../../components/dashboard_kit/WSDDashboardDrawer.jsx";
import WSDDashboardMainBodyContainer from "../../components/dashboard_kit/WSDDashboardMainBodyContainer.jsx";
import WSDDashboardBreadCrumb from "../../components/dashboard_kit/WSDDashboardBreadCrumb.jsx";
import WSDPrimaryButton from "../../components/ui_kit/WSDPrimaryButton.jsx";
import { MoreHorizontal, Pencil, Trash2, ClipboardCheck, ClipboardList,Compass,ArrowRight,Landmark ,Shield,Settings,Stethoscope,Ellipsis} from "lucide-react";
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
import { navigate } from "jsdom/lib/jsdom/living/window/navigation.js";
function DepartmentExam() {
  const navigation =useNavigate();
  const {departmentId} =useParams();



  const departments = [
    {
      id: 1,
      Icon: Settings,
      color: "#e10ff0",
      name: "Engineering",
      detail: "Government & public Sector Engineering Exams",
    },
    {
      id: 2,
      Icon: Stethoscope,
      color: "#d41616",
      name: "Medical",
      detail: "Medical Entrance & Recruitment Exams",
    },
    {
      id: 2,
      Icon: Stethoscope,
      color: "#d41616",
      name: "Medical",
      detail: "Medical Entrance & Recruitment Exams",
    },
    {
      id: 2,
      Icon: Stethoscope,
      color: "#d41616",
      name: "Medical",
      detail: "Medical Entrance & Recruitment Exams",
    },
    {
      id: 2,
      Icon: Stethoscope,
      color: "#d41616",
      name: "Medical",
      detail: "Medical Entrance & Recruitment Exams",
    },
    {
      id: 2,
      Icon: Stethoscope,
      color: "#d41616",
      name: "Medical",
      detail: "Medical Entrance & Recruitment Exams",
    },
    {
      id: 2,
      Icon: Stethoscope,
      color: "#d41616",
      name: "Medical",
      detail: "Medical Entrance & Recruitment Exams",
    },
    {
      id: 2,
      Icon: Stethoscope,
      color: "#d41616",
      name: "Medical",
      detail: "Medical Entrance & Recruitment Exams",
    },
    {
      id: 2,
      Icon: Stethoscope,
      color: "#d41616",
      name: "Medical",
      detail: "Medical Entrance & Recruitment Exams",
    },


  ];



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

            <div className="flex justify-between mt-2 ">
              <div className="flex flex-col gap-2">
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

            <div className="h-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3">
              {/* Departments */}
              {departments.map((department) => {
                return (
                  <div
                    key={department.id}
                    className="bg-white rounded-lg border-2 border-gray-200
        h-[260px] flex flex-col justify-between p-4
        hover:shadow-md transition-all duration-200"
                  >
                    {/* Top Section */}
                    <div className="flex flex-col items-center gap-4">
                      {/* Icon */}
                      <div
                        className="h-18 w-18 flex justify-center items-center rounded-full"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${department.color} 10%, transparent)`,
                        }}
                      >
                        <department.Icon size={40} style={{ color: department.color }} />
                      </div>

                      {/* Text */}
                      <div className="flex flex-col items-center text-center min-h-[70px]">
                        <h1 className="font-semibold text-lg">{department.name}</h1>

                        <p className="text-sm text-gray-600 line-clamp-2 overflow-hidden">
                          {department.detail}
                        </p>
                      </div>
                    </div>

                    {/* Button */}
                    <div>
                      <WSDPrimaryButton
                        className="flex items-center justify-center rounded-xl h-9 w-30 m-auto"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${department.color} 10%, transparent)`,
                          color: department.color,
                          border: `2px solid color-mix(in srgb, ${department.color} 20%, transparent)`,
                        }}
                        disableFocusStyle={true}
                        onClick={() => navigation(`/exam/${department.id}`)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = `color-mix(in srgb, ${department.color} 20%, transparent)`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = `color-mix(in srgb, ${department.color} 10%, transparent)`;
                        }}
                      >
                        Exams
                        <ArrowRight className="ml-2" strokeWidth={1.5} size={20} />
                      </WSDPrimaryButton>
                    </div>
                  </div>
                );
              })}

              {/* Other Exams Card */}
              <div
                className="bg-white rounded-lg border-2 border-gray-200
    h-[260px] flex flex-col justify-between p-4
    hover:shadow-md transition-all duration-200"
              >
                {/* Top Section */}
                <div className="flex flex-col items-center gap-4">
                  {/* Icon */}
                  <div
                    className="h-18 w-18 flex justify-center items-center rounded-full"
                    style={{
                      backgroundColor: `color-mix(in srgb, #4f5569 10%, transparent)`,
                    }}
                  >
                    <Ellipsis size={40} color="#4f5569" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col items-center text-center min-h-[70px]">
                    <h1 className="font-semibold text-lg">Other</h1>

                    <p className="text-sm text-gray-600 line-clamp-2 overflow-hidden">
                      Other Competitive Exams
                    </p>
                  </div>
                </div>

                {/* Button */}
                <div>
                  <WSDPrimaryButton
                    className="flex items-center justify-center rounded-xl h-9 w-30 m-auto"
                    style={{
                      backgroundColor: `color-mix(in srgb, #4f5569 10%, transparent)`,
                      color: "#4f5569",
                      border: `2px solid color-mix(in srgb, #4f5569 20%, transparent)`,
                    }}
                    disableFocusStyle={true}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `color-mix(in srgb, #4f5569 20%, transparent)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `color-mix(in srgb, #4f5569 10%, transparent)`;
                    }}
                  >
                    Exams
                    <ArrowRight className="ml-2" strokeWidth={1.5} size={20} />
                  </WSDPrimaryButton>
                </div>
              </div>
            </div>
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
          </div>
        </WSDDashboardMainBodyContainer>
      </WSDDashboardBase>
    </WSDDashboardLayout>
  );
}

export default DepartmentExam;
