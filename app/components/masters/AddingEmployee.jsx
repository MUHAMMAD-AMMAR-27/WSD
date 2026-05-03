import React, { useState } from "react"
import { Ellipsis, X } from "lucide-react"
import PhoneInput from "react-phone-input-2"
import { useAppDispatch, useAppSelector } from "../../src/app/hooks.ts"
import {
  selectEmployeeEditDialogState,
  selectEmployeePermissions,
  setEditEmployeeDialogNameState,
  setEditEmployeeDialogPhoneNumberState,
  setEmployeeEditDialogState,
  setEmployeePermissions,
} from "../../pages/masters/add_new_employee/addNewEmployeeSlice.js"
import { createApiRoute, createDataForEevee } from "../../src/utils/api_client.js"

const AddingEmployee = ({ user }) => {
  const [employeeDialog, setEmployeeDialog] = useState(false);
  const [editButtonDropDown, setEditButtonDropDown] = useState(false);

  const dispatch = useAppDispatch();
  const dialogState = useAppSelector(selectEmployeeEditDialogState);

  const [messageType, setMessageType] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  console.log("Dialog State", dialogState);

  const updateUser = () => {
    setIsLoading(true)

    const data = createDataForEevee({
      id: dialogState.id,
      full_name: dialogState.name,
      phone_number: dialogState.phoneNumber,
      permissions: JSON.stringify(dialogState.permissions)
    })

    const formBody = new URLSearchParams(data).toString()

    console.log(formBody)
    fetch(createApiRoute("update_user.php"), {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    })
      .then(res => res.json())
      .then(res => {
        if (res.state === "FAILURE") {
          setMessageType("failure")
        } else {
          console.log("Update User", res)
          setMessageType("success")
          setShowSuccess(true)
          setEmployeeDialog(false)
          setTimeout(() => setShowSuccess(false), 4000)
        }
        setIsLoading(false)
      })
      .catch(err => {
        console.error(err)
        setIsLoading(false)
        alert("Something went wrong. Please try again.")
      })
  }


  return (
    <tbody  data-slot="table-body" className="[&amp;_tr:last-child]:border-0">
      <tr
        data-slot="table-row"
        className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors"
      >
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
        >
          <button
            type="button"
            role="checkbox"
            aria-checked="false"
            data-state="unchecked"
            value="on"
            data-slot="checkbox"
            className="peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Select row"
          ></button>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
        >
          <span>01</span>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
        >
          <span>{user.full_name}</span>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
        >
          <span>{user.father_name}</span>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
        >
          {user.email}
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
        >
          <span>{user.phone_number}</span>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle  whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
        >
          <span>{user.user_role}</span>
        </td>
        <td
          data-slot="table-cell"
          className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>*[role=checkbox]]:translate-y-[2px]"
        >
          {employeeDialog && (
            <div
            role="dialog"
            id="radix-«ru»"
            aria-describedby="radix-«r10»"
            aria-labelledby="radix-«rv»"
            data-state="open"
            data-slot="dialog-content"
            className="bg-white border-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-[700px] max-h-[95vh] overflow-hidden"
            tabIndex="-1"
            style={{ pointerEvents: "auto" }}
        >
          <div>
            <div
              data-slot="dialog-header"
              className="flex flex-col gap-2 text-center sm:text-left"
            >
              <h2
                id="radix-«rv»"
                data-slot="dialog-title"
                className="text-lg leading-none font-semibold"
              >
                Edit Employee
              </h2>
              <p
                id="radix-«r10»"
                data-slot="dialog-description"
                className="text-muted-foreground text-sm"
              >
                Please enter the following details to update the employee.
              </p>
            </div>
            <div
              dir="ltr"
              data-slot="scroll-area"
              className="relative pt-8 h-[calc(95vh-280px)] md:h-[calc(95vh-200px)]"
              style={{
                position: "relative",
                "--radix-scroll-area-corner-width": "0px",
                "--radix-scroll-area-corner-height": "0px",
              }}
            >
              <style>
                {`
          [data-radix-scroll-area-viewport] {
            scrollbar-width: none;
            -ms-overflow-style: none;
            -webkit-overflow-scrolling: touch;
          }
          [data-radix-scroll-area-viewport]::-webkit-scrollbar {
            display: none;
          }
        `}
              </style>
              <div
                data-radix-scroll-area-viewport=""
                data-slot="scroll-area-viewport"
                className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
                style={{overflow: "hidden scroll"}}
              >
                <div style={{minWidth: "100%", display: "table"}}>
                  <div className="grid grid-cols-1 gap-4 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                      <div className="flex flex-col gap-2">
                        <label
                          data-slot="label"
                          className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                        >
                          Name
                        </label>
                        <input
                          data-slot="input"
                          className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                          placeholder="Enter full name"
                          name=""
                          value={dialogState.name}
                          onChange={e => {
                            dispatch(setEditEmployeeDialogNameState(e.target.value))
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          data-slot="label"
                          className="flex items-center gap-2 text-sm leading-none font-medium select-none"
                        >
                          Phone Number
                        </label>
                        <div className="relative" style={{width: "100%"}}>
                          <div className="react-tel-input">
                            <PhoneInput
                              country={"pk"}
                              value={dialogState.phoneNumber}
                              onChange={value => {
                                dispatch(setEditEmployeeDialogPhoneNumberState(value));
                              }}
                              enableSearch={true}
                              inputStyle={{ width: "100%" }}
                            />
                          </div>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="absolute right-3 top-3 text-xs text-gray-500"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 md:pr-4">
                      <label
                        data-slot="label"
                        className="flex items-center gap-2 font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-base"
                      >
                        Assign Permissions
                      </label>
                      <div className="flex flex-col gap-2 w-full mt-2">
                        <div className="grid grid-cols-1 gap-3">
                          <div className="flex flex-col gap-0">
                            <span className="font-semibold">Cursor</span>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
                              <label className="flex items-center gap-2">
                                <input onChange={(e) => {
                                  dispatch(setEmployeePermissions({
                                    group: "cursor",
                                    field: "show_country",
                                    value: e.target.checked
                                  }))
                                }}
                                       checked={dialogState.permissions.cursor.show_country}
                                  type="checkbox" name="showCountry" />
                                Show Country
                              </label>
                              <label className="flex items-center gap-2">
                                <input onChange={(e) => {
                                  dispatch(setEmployeePermissions({
                                    group: "cursor",
                                    field: "show_company",
                                    value: e.target.checked
                                  }))
                                }}
                                       checked={dialogState.permissions.cursor.show_company}
                                  type="checkbox" name="showCompany" />
                                Show Company
                              </label>
                              <label className="flex items-center gap-2">
                                <input onChange={(e) => {
                                  dispatch(setEmployeePermissions({
                                    group: "cursor",
                                    field: "show_applicant_reference",
                                    value: e.target.checked
                                  }))
                                }}
                                       checked={dialogState.permissions.cursor.show_applicant_reference}
                                  type="checkbox" name="showClientReference" />
                                Show Applicant Reference
                              </label>
                              <label className="flex items-center gap-2">
                                <input onChange={(e) => {
                                  dispatch(setEmployeePermissions({
                                    group: "cursor",
                                    field: "show_demand_reference",
                                    value: e.target.checked
                                  }))
                                }}
                                       checked={dialogState.permissions.cursor.show_demand_reference}
                                       type="checkbox" name="showDemandReference" />
                                Show Demand Reference
                              </label>
                            </div>
                          </div>
                          <div className="flex flex-col gap-0">
                            <span className="font-semibold">Dashboard</span>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "dashboard",
                                      field: "applicant_reference_dashboard",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.dashboard.applicant_reference_dashboard}
                                  type="checkbox"
                                  name="applicantRefDashboardPermission"
                                />
                                Applicant Reference Dashboard
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "dashboard",
                                      field: "demand_reference_dashboard",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.dashboard.demand_reference_dashboard}
                                  type="checkbox"
                                  name="demandRefDashboardPermission"
                                />
                                Demand Reference Dashboard
                              </label>
                            </div>
                          </div>
                          <div className="flex flex-col gap-0">
                            <span className="font-semibold">Applicant: </span>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "applicant",
                                      field: "create",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.applicant.create}
                                  type="checkbox"
                                  name="clientPermissions.create"
                                />
                                Create
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "applicant",
                                      field: "edit",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.applicant.edit}
                                  type="checkbox" name="clientPermissions.edit" />
                                Edit
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "applicant",
                                      field: "delete",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.applicant.delete}
                                  type="checkbox"
                                  name="clientPermissions.delete"
                                />
                                Delete
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "applicant",
                                      field: "status",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.applicant.status}
                                  type="checkbox"
                                  name="clientPermissions.status"
                                />
                                Status
                              </label>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold">Demand: </span>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "demand",
                                      field: "create",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.demand.create}
                                  type="checkbox"
                                  name="demandPermissions.create"
                                />
                                Create
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "demand",
                                      field: "edit",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.demand.edit}
                                  type="checkbox" name="demandPermissions.edit" />
                                Edit
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "demand",
                                      field: "delete",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.demand.delete}
                                  type="checkbox"
                                  name="demandPermissions.delete"
                                />
                                Delete
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "demand",
                                      field: "status",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.demand.status}
                                  type="checkbox"
                                  name="demandPermissions.status"
                                />
                                Status
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "demand",
                                      field: "revoke",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.demand.revoke}
                                  type="checkbox"
                                  name="demandPermissions.revoke"
                                />
                                Revoke
                              </label>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold">Applicant Reference: </span>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "applicant_reference",
                                      field: "create",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.applicant_reference.create}
                                  type="checkbox"
                                  name="clientReferencePermissions.create"
                                />
                                Create
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "applicant_reference",
                                      field: "edit",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.applicant_reference.edit}
                                  type="checkbox"
                                  name="clientReferencePermissions.edit"
                                />
                                Edit
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "applicant_reference",
                                      field: "delete",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.applicant_reference.delete}
                                  type="checkbox"
                                  name="clientReferencePermissions.delete"
                                />
                                Delete
                              </label>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold">Demand Reference: </span>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "demand_reference",
                                      field: "create",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.demand_reference.create}
                                  type="checkbox"
                                  name="demandReferencePermissions.create"
                                />
                                Create
                              </label>
                              <label className="flex items-center gap-x-6 gap-y-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "demand_reference",
                                      field: "edit",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.demand_reference.edit}
                                  type="checkbox"
                                  name="demandReferencePermissions.edit"
                                />
                                Edit
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "demand_reference",
                                      field: "delete",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.demand_reference.delete}
                                  type="checkbox"
                                  name="demandReferencePermissions.delete"
                                />
                                Delete
                              </label>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold">Company: </span>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "company",
                                      field: "create",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.company.create}
                                  type="checkbox"
                                  name="companyPermissions.create"
                                />
                                Create
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "company",
                                      field: "edit",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.company.edit}

                                  type="checkbox" name="companyPermissions.edit" />
                                Edit
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "company",
                                      field: "delete",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.company.delete}
                                  type="checkbox"
                                  name="companyPermissions.delete"
                                />
                                Delete
                              </label>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold">Reports: </span>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 w-full items-center">
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "reports",
                                      field: "applicants_status",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.reports.applicants_status}
                                  type="checkbox"
                                  name="reportPermissions.applicantStatusReport"
                                />
                                Applicants Status
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "reports",
                                      field: "demands_status_bar",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.reports.demands_status_bar}
                                  type="checkbox"
                                  name="reportPermissions.demandStatusBarReport"
                                />
                                Demands Status Bar
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "reports",
                                      field: "demand_process_bar",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.reports.demand_process_bar}
                                  type="checkbox"
                                  name="reportPermissions.demandProcessBarReport"
                                />
                                Demand Process Bar
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "reports",
                                      field: "applicant_ref_status_bar",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.reports.applicant_ref_status_bar}
                                  type="checkbox"
                                  name="reportPermissions.applicantRefStatusBarReport"
                                />
                                Applicant Ref Status Bar
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "reports",
                                      field: "applicant_ref_process_bar",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.reports.applicant_ref_process_bar}
                                  type="checkbox"
                                  name="reportPermissions.applicantRefProcessBarReport"
                                />
                                Applicant Ref Process Bar
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "reports",
                                      field: "demand_ref_status_bar",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.reports.demand_ref_status_bar}
                                  type="checkbox"
                                  name="reportPermissions.demandRefStatusBarReport"
                                />
                                Demand Ref Status Bar
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "reports",
                                      field: "demand_ref_process_bar",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.reports.demand_ref_process_bar}
                                  type="checkbox"
                                  name="reportPermissions.demandRefProcessBarReport"
                                />
                                Demand Ref Process Bar
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "reports",
                                      field: "country_and_company_report",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.reports.country_and_company_report}
                                  type="checkbox"
                                  name="reportPermissions.countryAndCompanyReport"
                                />
                                Country &amp; Company Report
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "reports",
                                      field: "trade_and_subTrade_report",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.reports.trade_and_sub_trade_report}
                                  type="checkbox"
                                  name="reportPermissions.categoryAndSubcategoryReport"
                                />
                                Trade &amp; SubTrade Report
                              </label>
                              <br />
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "reports",
                                      field: "expired_report",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.reports.expired_report}
                                  type="checkbox"
                                  name="reportPermissions.expiredReport"
                                />
                                Expired Report
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  onChange={(e) => {
                                    dispatch(setEmployeePermissions({
                                      group: "reports",
                                      field: "progress_report",
                                      value: e.target.checked
                                    }))
                                  }}
                                  checked={dialogState.permissions.reports.progress_report}
                                  type="checkbox" name="progressReport" />
                                Progress Report
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 gap-3">
              <button
                onClick={() => setEmployeeDialog(false)}
                data-slot="button"
                className="items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 border hidden md:flex cursor-pointer w-28 border-green-600 text-green-600 bg-transparent hover:bg-transparent"
                type="button"
              >
                Close
              </button>
              <div className="flex flex-1 text-white justify-end gap-4">
                <button
                  onClick={() => updateUser()}
                  data-slot="button"
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 cursor-pointer bg-green-600 w-28 mt-3 hover:bg-green-900"
                >
                  Update User
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => setEmployeeDialog(false)}
            type="button"
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4"
          >
            <X size={15}/>
            <span className="sr-only">Close</span>
          </button>
        </div>

          )}

          <div className="relative">
            <div className="relative inline-block text-left">
              <button
                onClick={() => setEditButtonDropDown(!editButtonDropDown)}
                className="text-xs p-2 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                <Ellipsis />
              </button>

              {editButtonDropDown && (
                <div className="absolute mt-2 bottom-4 right-8 w-24 bg-white shadow-lg rounded-md z-50">
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      dispatch(setEmployeeEditDialogState({
                        user
                      }));
                      setEmployeeDialog(true)}
                  }
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>

          </div>
        </td>
      </tr>
    </tbody>
  )
}

export default AddingEmployee
