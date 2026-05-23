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
import {
  MoreHorizontal,
  Pencil,
  Trash2,
  ClipboardCheck,
  ClipboardList,
  Compass,
  ArrowRight,
  Landmark,
  Shield,
  Ellipsis,
  Settings,
  Stethoscope, Search,
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
import { navigate } from "jsdom/lib/jsdom/living/window/navigation.js";
import WSDOptionList from "../../components/ui_kit/WSDOptionList.jsx";
import Trophy from "../../assets/Trophy.png"
function SubDepartmentExam() {
  const navigation = useNavigate();
  const { departmentId } = useParams();

  const Subdepartments = [
    {
      id: 0,
      Icon: Landmark,
      color: "#3a45d9",
      heading: "Government Jobs",
      paragraph: "Central & State Government exams and recruitments.",
    },
    {
      id: 1,
      Icon: Shield,
      color: "#2de639",
      heading: "Defence",
      paragraph: "Join Army, Navy, Air Force & other defence services.",
    },
    {
      id: 2,
      Icon: Shield,
      color: "#2de639",
      heading: "Defence",
      paragraph: "Join Army, Navy, Air Force & other defence services.",
    },
    {
      id: 3,
      Icon: Shield,
      color: "#2de639",
      heading: "Defence",
      paragraph: "Join Army, Navy, Air Force & other defence services.",
    },
    {
      id: 4,
      Icon: Shield,
      color: "#2de639",
      heading: "Defence",
      paragraph: "Join Army, Navy, Air Force & other defence services.",
    },
    {
      id: 5,
      Icon: Shield,
      color: "#2de639",
      heading: "Defence",
      paragraph: "Join Army, Navy, Air Force & other defence services.",
    },
    {
      id: 6,
      Icon: Shield,
      color: "#2de639",
      heading: "Defence7",
      paragraph: "Join Army, Navy, Air Force & other defence services.",
    },
    {
      id: 7,
      Icon: Shield,
      color: "#2de639",
      heading: "Defence8",
      paragraph: "Join Army, Navy, Air Force & other defence services.",
    },
    {
      id: 10,
      Icon: Shield,
      color: "#2de639",
      heading: "Defence",
      paragraph: "Join Army, Navy, Air Force & other defence services.",
    },
    {
      id: 11,
      Icon: Shield,
      color: "#2de639",
      heading: "Defence",
      paragraph: "Join Army, Navy, Air Force & other defence services.",
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
            <div className="h-[13%]  flex flex-col gap-2 ">
              <h1 className="font-bold text-4xl   ">Exams</h1>
              <p className="text-lg">Choose your desired exam to start your preparation</p>
            </div>
            <div className="flex gap-3 h-6 rounded-md">
              <div className="w-[80%] relative">
                <Search className="absolute right-3 top-4.5 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
                <WSDInputField
                  placeholder="Search for exams.."
                  className="rounded-md  border-gray-200 border-2 "

                />
              </div>
              <div className="w-[20%] ">
                <WSDOptionList
                  placeholder="All Categories"
                  className=" gap-3  w-[20%]"
                  options={[
                    { value: "ACTIVE", label: "Active" },
                    { value: "Blocked", label: "block" },
                    { value: "DORMANT", label: "Dormant" },
                  ]}
                />
              </div>
            </div>

            <div className="flex justify-between mt-2 ">

                <h2 className="font-semibold text-xl ">Browse by Department / Sector</h2>



            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {Subdepartments.slice(0, 7).map((Subdepartment) => {
                return (
                  <div
                    key={Subdepartment.id}
                    className="bg-white rounded-lg border-2 border-gray-200
        h-[280px] flex flex-col p-4
        hover:shadow-md transition-all duration-200 "
                    // onClick={() => navigation(`/exam/${Subdepartment.id}`)}
                  >
                    {/* Upper Section */}
                    <div className="h-[60%] flex gap-4 border-b-2 border-gray-200 pb-4">
                      {/* Icon */}
                      <div
                        className="min-h-20 min-w-20 h-20 w-20 flex justify-center items-center rounded-lg mt-6"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${Subdepartment.color} 10%, transparent)`,
                        }}
                      >
                        <Subdepartment.Icon size={45} style={{ color: Subdepartment.color }} />
                      </div>

                      {/* Text */}
                      <div className="flex flex-col justify-center gap-2 overflow-hidden">
                        <h1 className="font-semibold text-lg">{Subdepartment.heading}</h1>

                        <p className="text-sm text-gray-600 line-clamp-3">
                          {Subdepartment.paragraph}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="h-[40%] flex flex-col justify-center gap-3 pt-4">
                      {/* Label */}
                      <p
                        className="font-medium"
                        style={{
                          color: Subdepartment.color,
                        }}
                      >
                        Exam
                      </p>

                      {/* Button */}
                      <WSDPrimaryButton
                        className="flex items-center rounded-md h-10 w-full justify-center font-semibold transition-all duration-200"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${Subdepartment.color} 10%, transparent)`,
                          color: Subdepartment.color,
                          border: `2px solid color-mix(in srgb, ${Subdepartment.color} 20%, transparent)`,
                        }}
                        disableFocusStyle={true}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = `color-mix(in srgb, ${Subdepartment.color} 20%, transparent)`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = `color-mix(in srgb, ${Subdepartment.color} 10%, transparent)`;
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigation(`/exam/${Subdepartment.id}`);
                        }}
                      >
                        Exams
                        <ArrowRight className="ml-2" strokeWidth={1.5} size={20} />
                      </WSDPrimaryButton>
                    </div>
                  </div>
                );
              })}

              <div
                className="bg-white rounded-lg border-2 border-gray-200
        h-[280px] flex flex-col p-4
        hover:shadow-md transition-all duration-200 "
                // onClick={() => navigation(`/exam/${department.id}`)}
              >
                {/* Upper Section */}
                <div className="h-[60%] flex gap-4 border-b-2 border-gray-200 pb-4">
                  {/* Icon */}
                  <div
                    className="min-h-20 min-w-20 h-20 w-20 flex justify-center items-center rounded-lg mt-6"
                    style={{
                      backgroundColor: `color-mix(in srgb, #527dff 10%, transparent)`,
                    }}
                  >
                    <Ellipsis color="#527dff" size={45} />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-center gap-2 overflow-hidden">
                    <h1 className="font-semibold text-lg">Other Exams</h1>

                    <p className="text-sm text-gray-600 line-clamp-3">
                      Railways, Insurance, PSUs and other competitive exams.
                    </p>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="h-[40%] flex flex-col justify-center gap-3 pt-4">
                  {/* Label */}
                  <p
                    className="font-medium"
                    style={{
                      color: "#527dff",
                    }}
                  >
                    Exam
                  </p>

                  {/* Button */}
                  <WSDPrimaryButton
                    className="flex items-center rounded-md h-10 w-full justify-center font-semibold "
                    style={{
                      backgroundColor: `color-mix(in srgb, #527dff 10%, transparent)`,
                      color: "#527dff",
                      border: `2px solid color-mix(in srgb, #527dff 20%, transparent)`,
                    }}
                    disableFocusStyle={true}
                    onClick={(e) => {
                      e.stopPropagation();
                      // navigation(`/exam/${department.id}`);
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `color-mix(in srgb,#527dff  20%, transparent)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `color-mix(in srgb, #527dff 10%, transparent)`;
                    }}
                  >
                    Exams
                    <ArrowRight className="ml-2" strokeWidth={1.5} size={20} />
                  </WSDPrimaryButton>
                </div>
              </div>
            </div>

            <div className="h-[10%] bg-blue-100 flex items-center  rounded-xl border-2 border-gray-300 mt-2">
              <img src={Trophy} alt="trophy" className={"h-11 mx-3"}/>
              {/*<Compass color="#191d85" size={40} className="w-[6%]" />*/}
              <div className="w-[80%] ">
                <h2 className="font-semibold text-lg">Can't find your exam?</h2>
                <p className="text-sm">We are constantly adding new exams. Suggest an exam you want us to add.</p>
              </div>
              <WSDPrimaryButton className={"flex items-center "}>
                Suggest an Exam
              </WSDPrimaryButton>
            </div>
          </div>
        </WSDDashboardMainBodyContainer>
      </WSDDashboardBase>
    </WSDDashboardLayout>
  );
}

export default SubDepartmentExam;
