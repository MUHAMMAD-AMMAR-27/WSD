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
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import WSDInputField from "../../components/ui_kit/WSDInputField.jsx";
import { Role } from "../../src/models/Role.js";

function DashboardPage() {
  return (
    <WSDDashboardLayout>
      <WSDDashboardTopAppBar
        searchBarProps={{
          placeholder: "Search exams, departments,topics...",
          IsTopBar: "true",
        }}
      />
      <WSDDashboardBase>
        <WSDDashboardDrawer />
        <WSDDashboardMainBodyContainer containsOverlay={false}>
          <div className="flex flex-col gap-4 min-h-full w-full">

            {/*<WSDDashboardBreadCrumb subSteps={["Overview"]} />*/}
            <div>
              <div
                data-slot="card"
                className="bg-white text-card-foreground w-1/3 border-gray-200 flex flex-col gap-6 py-6 shadow-sm border border-gray-200 mb-3 rounded-2xl"
              >
                {/*<div data-slot="card-content" className="p-4 pt-0 space-y-6">*/}
                <StatHeading Heading={"Exam Preparation"} />



                <StatHeading Heading={"Total Demands"}  />



              </div>


              <div className="mt-4">
                <div
                  data-slot="card"
                  className="bg-white border-gray-200 text-card-foreground flex flex-col gap-6 py-6 shadow-sm border border-gray-200 mb-3 rounded-2xl"
                >
                  <div data-slot="card-content" className="p-4 space-y-6">
                    <div className=" text-blue-600">
                      <h3 className="font-bold text-xl">01 | Qatar | 01</h3>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <h2 className="text-lg font-semibold text-blue-600 pl-1">Process Bar</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <span className="text-xs font-medium capitalize">
                          <StatsCard title={"Inprocess"} value={10} />
                        </span>
                        <span className="text-xs font-medium capitalize">
                          <StatsCard title={"Basic"} value={1} />
                        </span>
                        <span className="text-xs font-medium capitalize">
                          <StatsCard title={"Ready"} value={1} />
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <h2 className="text-lg font-semibold text-blue-600 pl-1">Status Bar</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <span className="text-xs font-medium capitalize">
                          <StatsCard title={"Online (Visa)"} value={10} />
                        </span>
                        <span className="text-xs font-medium capitalize">
                          <StatsCard title={"ready to print (visa)"} value={1} />
                        </span>
                        <span className="text-xs font-medium capitalize">
                          <StatsCard title={"qvc (med apointment)"} value={1} />
                        </span>
                        <span className="text-xs font-medium capitalize">
                          <StatsCard title={"submit (under process)"} value={1} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="bg-white text-card-foreground flex flex-col gap-6 py-6 shadow-sm border border-gray-200 mb-3 rounded-2xl"
                >
                  <div data-slot="card-content" className="p-4 space-y-6">
                    <div className=" text-blue-600">
                      <h3 className="font-bold text-xl">04 | Qatar | 02</h3>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <h2 className="text-lg font-semibold text-blue-600 pl-1">Process Bar</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="min-w-[100px] px-3 py-2 bg-gray-100 rounded-lg shadow text-center">
                          <span className="text-xs font-medium capitalize">inprocess</span>
                          <span className="text-lg font-bold block">7</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <h2 className="text-lg font-semibold text-blue-600 pl-1">Status Bar</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="px-3 min-w-[100px] py-2 bg-gray-100 rounded-lg shadow text-center">
                          <span className="text-xs font-medium capitalize">
                            qvc (med apointment)
                          </span>
                          <span className="text-lg font-bold block">4</span>
                        </div>
                        <div className="px-3 min-w-[100px] py-2 bg-gray-100 rounded-lg shadow text-center">
                          <span className="text-xs font-medium capitalize">online (visa)</span>
                          <span className="text-lg font-bold block">2</span>
                        </div>
                        <div className="px-3 min-w-[100px] py-2 bg-gray-100 rounded-lg shadow text-center">
                          <span className="text-xs font-medium capitalize">
                            submit (under process)
                          </span>
                          <span className="text-lg font-bold block">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="bg-white text-card-foreground flex flex-col gap-6 py-6 shadow-sm border border-gray-200 mb-3 rounded-2xl"
                >
                  <div data-slot="card-content" className="p-4 space-y-6">
                    <div className=" text-green-600">
                      <h3 className="font-bold text-xl">07 | Saudi Arabia | 05</h3>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <h2 className="text-lg font-semibold text-green-600 pl-1">Process Bar</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="min-w-[100px] px-3 py-2 bg-gray-100 rounded-lg shadow text-center">
                          <span className="text-xs font-medium capitalize">inprocess</span>
                          <span className="text-lg font-bold block">1</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <h2 className="text-lg font-semibold text-green-600 pl-1">Status Bar</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="px-3 min-w-[100px] py-2 bg-gray-100 rounded-lg shadow text-center">
                          <span className="text-xs font-medium capitalize">nevtec clear</span>
                          <span className="text-lg font-bold block">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="bg-white text-card-foreground flex flex-col gap-6 py-6 shadow-sm border border-gray-200 mb-3 rounded-2xl"
                >
                  <div data-slot="card-content" className="p-4 space-y-6">
                    <div className=" text-green-600">
                      <h3 className="font-bold text-xl">08 | Saudi Arabia | 07</h3>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <h2 className="text-lg font-semibold text-green-600 pl-1">Process Bar</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="min-w-[100px] px-3 py-2 bg-gray-100 rounded-lg shadow text-center">
                          <span className="text-xs font-medium capitalize">travelled</span>
                          <span className="text-lg font-bold block">1</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <h2 className="text-lg font-semibold text-green-600 pl-1">Status Bar</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="px-3 min-w-[100px] py-2 bg-gray-100 rounded-lg shadow text-center">
                          <span className="text-xs font-medium capitalize">fly date</span>
                          <span className="text-lg font-bold block">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="bg-white text-card-foreground flex flex-col gap-6 py-6 shadow-sm border border-gray-200 mb-3 rounded-2xl"
                >
                  <div data-slot="card-content" className="p-4 space-y-6">
                    <div className=" text-blue-600">
                      <h3 className="font-bold text-xl">09 | Tajikistan | 01</h3>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <h2 className="text-lg font-semibold text-blue-600 pl-1">Process Bar</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="min-w-[100px] px-3 py-2 bg-gray-100 rounded-lg shadow text-center">
                          <span className="text-xs font-medium capitalize">inprocess</span>
                          <span className="text-lg font-bold block">1</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <h2 className="text-lg font-semibold text-blue-600 pl-1">Status Bar</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="px-3 min-w-[100px] py-2 bg-gray-100 rounded-lg shadow text-center">
                          <span className="text-xs font-medium capitalize">
                            submit (under prasess)
                          </span>
                          <span className="text-lg font-bold block">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="bg-white text-card-foreground flex flex-col gap-6 py-6 shadow-sm border border-gray-200 mb-3 rounded-2xl"
                >
                  <div data-slot="card-content" className="p-4 space-y-6">
                    <div className=" text-blue-600">
                      <h3 className="font-bold text-xl">02 | Qatar | 01</h3>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <h2 className="text-lg font-semibold text-blue-600 pl-1">Process Bar</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="min-w-[100px] px-3 py-2 bg-gray-100 rounded-lg shadow text-center">
                          <span className="text-xs font-medium capitalize">inprocess</span>
                          <span className="text-lg font-bold block">1</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <h2 className="text-lg font-semibold text-blue-600 pl-1">Status Bar</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="px-3 min-w-[100px] py-2 bg-gray-100 rounded-lg shadow text-center">
                          <span className="text-xs font-medium capitalize">
                            submit (under process)
                          </span>
                          <span className="text-lg font-bold block">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="bg-white text-card-foreground flex flex-col gap-6 py-6 shadow-sm border border-gray-200 mb-3 rounded-2xl"
                >
                  <div data-slot="card-content" className="p-4 space-y-6">
                    <div className=" text-green-600">
                      <h3 className="font-bold text-xl">05 | Saudi Arabia | 03</h3>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <h2 className="text-lg font-semibold text-green-600 pl-1">Process Bar</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="min-w-[100px] px-3 py-2 bg-gray-100 rounded-lg shadow text-center">
                          <span className="text-xs font-medium capitalize">inprocess</span>
                          <span className="text-lg font-bold block">1</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <h2 className="text-lg font-semibold text-green-600 pl-1">Status Bar</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="px-3 min-w-[100px] py-2 bg-gray-100 rounded-lg shadow text-center">
                          <span className="text-xs font-medium capitalize">medical (fit)</span>
                          <span className="text-lg font-bold block">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="bg-white text-card-foreground flex flex-col gap-6 py-6 shadow-sm border border-gray-200 mb-3 rounded-2xl"
                >
                  <div data-slot="card-content" className="p-4 space-y-6">
                    <div className=" text-blue-600">
                      <h3 className="font-bold text-xl">03 | Saudi Arabia | 01</h3>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <h2 className="text-lg font-semibold text-blue-600 pl-1">Process Bar</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="min-w-[100px] px-3 py-2 bg-gray-100 rounded-lg shadow text-center">
                          <span className="text-xs font-medium capitalize">ready</span>
                          <span className="text-lg font-bold block">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div
                  data-slot="card"
                  className="bg-white text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 py-6 shadow-sm"
                >
                  <div
                    data-slot="card-header"
                    className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
                  >
                    <div data-slot="card-title" className="font-semibold text-lg">
                      Monthly Statistics
                    </div>
                  </div>


                </div>
              </div>
              <div className="w-full overflow-x-auto bg-white mt-2 rounded-md p-3">
                <h1 className="text-lg font-bold text-custom-black ">
                  Newly Registered Applicants
                </h1>
                <div className="w-full space-y-4 bg-white p-4 rounded-md oveflow-x-auto">`</div>
              </div>
            </div>
          </div>
        </WSDDashboardMainBodyContainer>
      </WSDDashboardBase>
    </WSDDashboardLayout>
  );
}

export default DashboardPage;
