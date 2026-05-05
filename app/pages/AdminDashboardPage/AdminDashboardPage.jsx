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
import AddDepartmentDialog from "../dialogs/addDepartment_dialog/AddDepartmentDialog.jsx";

function AdminDashboardPage() {
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
              {/*<div*/}
              {/*  data-slot="card"*/}
              {/*  className="bg-white text-card-foreground border-gray-200 flex flex-col gap-6 py-6 shadow-sm border border-gray-200 mb-2 rounded-sm"*/}
              {/*>*/}
                {/*<StatHeading Heading={"Add Department"}/>*/}
                <AddDepartmentDialog/>

                {/*<form>*/}
                {/*  <input type={"text"}/>*/}
                {/*</form>*/}
              {/*</div>*/}
              <div className="mt-4">
                <div
                  data-slot="card"
                  className="bg-white border-gray-200 text-card-foreground flex flex-col gap-6 py-6 shadow-sm border border-gray-200 mb-3 rounded-2xl"
                ></div>
                <div
                  data-slot="card"
                  className="bg-white text-card-foreground flex flex-col gap-6 py-6 shadow-sm border border-gray-200 mb-3 rounded-2xl"
                ></div>
              </div>
            </div>
          </div>
        </WSDDashboardMainBodyContainer>
      </WSDDashboardBase>
    </WSDDashboardLayout>
  );
}

export default AdminDashboardPage;
