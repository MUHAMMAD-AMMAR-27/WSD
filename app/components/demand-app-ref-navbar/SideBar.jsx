import React from 'react';
import { useLocation } from "react-router-dom"

const SideBar = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div data-radix-scroll-area-viewport="" data-slot="scroll-area-viewport" className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1" style={{ overflow: "hidden scroll" }}>
      <div style={{ minWidth: "100%", display: "table" }}>
        <div className="flex-grow">
          <a
            className="px-3 py-2 flex gap-4 my-2 cursor-pointer items-center
                    hover:bg-gray-100 rounded-md"
            href="/dashboard"
            data-discover="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-round-plus"
              aria-hidden="true"
            >
              <path d="M2 21a8 8 0 0 1 13.292-6"></path>
              <circle cx="10" cy="8" r="5"></circle>
              <path d="M19 16v6"></path>
              <path d="M22 19h-6"></path>
            </svg>
            <p className="text-custom-gray text-sm">
              Back to Admin-Side
            </p>
          </a>
          <a
            className={`px-3 py-2 flex gap-4 my-2 cursor-pointer items-center
                      ${path.startsWith('dashboard_demand_users/dashboard_user_id') ? "bg-gray-600 text-white": ""} `}
            href="/dashboard_demand_users/dashboard_user_id"
            data-discover="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-layout-dashboard"
              aria-hidden="true"
            >
              <rect width="7" height="9" x="3" y="3" rx="1"></rect>
              <rect width="7" height="5" x="14" y="3" rx="1"></rect>
              <rect width="7" height="9" x="14" y="12" rx="1"></rect>
              <rect width="7" height="5" x="3" y="16" rx="1"></rect>
            </svg>
            <p className="text-custom-gray text-sm">Dashboard</p>
          </a>
          <a
            className="px-3 py-2 flex gap-4 my-2 cursor-pointer items-center
                    hover:bg-gray-100 rounded-md"
            href="/dashboard_demand_users/homePage"
            data-discover="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-house"
              aria-hidden="true"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
            <p className="text-custom-gray text-sm">HomePage</p>
          </a>
          <a
            className="px-3 py-2 flex gap-4 my-2 cursor-pointer items-center
                    hover:bg-gray-100 rounded-md"
            href="/dashboard_demand_users/active_demands"
            data-discover="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-box"
              aria-hidden="true"
            >
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
              <path d="m3.3 7 8.7 5 8.7-5"></path>
              <path d="M12 22V12"></path>
            </svg>
            <p className="text-custom-gray text-sm">Active Demands</p>
          </a>
          <a
            className="px-3 py-2 flex gap-4 my-2 cursor-pointer items-center
                    hover:bg-gray-100 rounded-md"
            href="/dashboard_demand_users/demand_status_bar"
            data-discover="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-tally4 lucide-tally-4"
              aria-hidden="true"
            >
              <path d="M4 4v16"></path>
              <path d="M9 4v16"></path>
              <path d="M14 4v16"></path>
              <path d="M19 4v16"></path>
            </svg>
            <p className="text-custom-gray text-sm">
              Demand Status Bar
            </p>
          </a>
          <a
            className="px-3 py-2 flex gap-4 my-2 cursor-pointer items-center
                    hover:bg-gray-100 rounded-md"
            href="/dashboard_demand_users/demand_process_bar"
            data-discover="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chart-column"
              aria-hidden="true"
            >
              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
              <path d="M18 17V9"></path>
              <path d="M13 17V5"></path>
              <path d="M8 17v-3"></path>
            </svg>
            <p className="text-custom-gray text-sm">
              Demand Process Bar
            </p>
          </a>
          <div>
            <div
              className="px-3 py-2 flex gap-4 cursor-pointer items-center justify-between
                        hover:bg-gray-100 rounded-md"
            >
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bolt"
                  aria-hidden="true"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
                <p className="text-custom-gray text-sm">
                  Required Demands
                </p>
              </div>
              <span className="text-sm">▼</span>
            </div>
            <div className="ml-5 mt-2 flex flex-col gap-1">
              <a
                className="px-2 py-1 text-sm rounded-md
                                hover:bg-gray-100 text-gray-600"
                href="/dashboard_demand_users/required-demands/new_required_demands"
                data-discover="true"
              >
                New Req Demands
              </a>
              <a
                className="px-2 py-1 text-sm rounded-md
                                hover:bg-gray-100 text-gray-600"
                href="/dashboard_demand_users/required-demands/your_replied_demands"
                data-discover="true"
              >
                Your Replied Demands
              </a>
            </div>
          </div>
          <a
            className="px-3 py-2 flex gap-4 my-2 cursor-pointer items-center
                    hover:bg-gray-100 rounded-md"
            href="/dashboard_demand_users/applicant_cvs"
            data-discover="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file-symlink"
              aria-hidden="true"
            >
              <path d="m10 18 3-3-3-3"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"></path>
            </svg>
            <p className="text-custom-gray text-sm">Applicants CV</p>
          </a>
          <a
            className="px-3 py-2 flex gap-4 my-2 cursor-pointer items-center
                    hover:bg-gray-100 rounded-md"
            href="/dashboard_demand_users/setting"
            data-discover="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-settings"
              aria-hidden="true"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <p className="text-custom-gray text-sm">Settings</p>
          </a>
        </div>
        <div className="mt-auto pl-0.5 w-full">
          <div className="flex gap-4 px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-md items-center text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-log-out"
              aria-hidden="true"
            >
              <path d="m16 17 5-5-5-5"></path>
              <path d="M21 12H9"></path>
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            </svg>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SideBar;
