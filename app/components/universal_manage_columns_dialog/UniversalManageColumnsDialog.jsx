import React, { useEffect, useState } from "react";

import WSDDialogModal, {
  WSDDialogModalHeader,
  WSDDialogModalFooter,
  WSDDialogModalScrollableContent,
} from "../ui_kit/WSDDialogModal.jsx";

import WSDSecondaryButton from "../ui_kit/WSDSecondaryButton.jsx";
import WSDPrimaryButton from "../ui_kit/WSDPrimaryButton.jsx";

import { useAppDispatch, useAppSelector } from "../../src/app/hooks.js";
import { queueNotification } from "../ui_kit/wsd_notification_system/wsdNotificationsSlice.js";
import { ErrorNotification, SuccessNotification } from "../../src/utils/NotificationBuilder.js";
import WSDCheckBox from "../ui_kit/WSDCheckBox.jsx";
import {
  selectUniversalManageColumnsState,
  updateAllUniversalManageColumnDialogCheckboxesState,
  updateUniversalManageColumnDialogCheckboxState,
} from "./universal_manage_columns_dialog_slice.js";
import clsx from "clsx";

const UniversalManageColumnsDialog = ({
  onSave,
  onClose,
  isTableColumnVisible = true,
  isExportColumnVisible = true,
  ...props
}) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectUniversalManageColumnsState);

  const toggleColumn = (checked, index, field) => {
    dispatch(
      updateUniversalManageColumnDialogCheckboxState({
        checked,
        index,
        field,
      })
    );
  };

  const handleSave = () => {
    if (state.columns.length === 0) {
      dispatch(
        queueNotification(
          new ErrorNotification()
            .withTitle("No Columns")
            .withMessage("There are no columns to save.")
            .setDuration(4000)
            .build()
        )
      );
      return;
    }

    onSave?.({id: state.id, columns: state.columns});
  };

  console.log(state);

  return (
    <WSDDialogModal {...props}>
      <WSDDialogModalHeader dialogTitle="Manage Columns Visibility" onClose={onClose} />

      <div className="bg-gray-100 border-b border-b-gray-300">
        <div
          className={clsx(
            "grid text-sm font-medium",
            isTableColumnVisible && isExportColumnVisible && "grid-cols-9",
            isTableColumnVisible && !isExportColumnVisible && "grid-cols-7",
            !isTableColumnVisible && isExportColumnVisible && "grid-cols-7"
          )}
        >
          <div className="p-3 col-span-1">#</div>
          <div className="p-3 col-span-4">Column/Field</div>
          {isTableColumnVisible && (
            <div className="p-3 col-span-2 text-center flex gap-2 justify-center items-center">
              <WSDCheckBox
                checked={state.columns.every((col) => col.show_in_table)}
                onChange={(e) => {
                  dispatch(
                    updateAllUniversalManageColumnDialogCheckboxesState({
                      checked: e.target.checked,
                      field: "show_in_table",
                    })
                  );
                }}
              />
              <span className={"text-xs"}>Table View</span>
            </div>
          )}
          {isExportColumnVisible && (
            <div className="p-3 col-span-2 text-center flex gap-2 justify-center items-center">
              <WSDCheckBox
                checked={state.columns.every((col) => col.show_in_export)}
                onChange={(e) => {
                  dispatch(
                    updateAllUniversalManageColumnDialogCheckboxesState({
                      checked: e.target.checked,
                      field: "show_in_export",
                    })
                  );
                }}
              />
              <span className={"text-xs"}>Export View</span>
            </div>
          )}
        </div>
      </div>

      <WSDDialogModalScrollableContent className={"!pt-1"}>
        {state.columns.map((col, index) => (
          <div
            key={index}
            className={clsx(
              "grid items-center border-b border-b-gray-100 last:border-b-0",
              isTableColumnVisible && isExportColumnVisible && "grid-cols-9",
              isTableColumnVisible && !isExportColumnVisible && "grid-cols-7",
              !isTableColumnVisible && isExportColumnVisible && "grid-cols-7"
            )}
          >
            <div className="py-2 text-gray-500 col-span-1">{index + 1}</div>
            <div className="py-2 text-gray-900 col-span-4">{col.name}</div>

            {isTableColumnVisible && (
              <div className="flex justify-center col-span-2">
                <WSDCheckBox
                  checked={col.show_in_table}
                  onChange={(e) => toggleColumn(e.target.checked, index, "show_in_table")}
                />
              </div>
            )}

            {isExportColumnVisible && (
              <div className="flex justify-center col-span-2">
                <WSDCheckBox
                  checked={col.show_in_export}
                  onChange={(e) => toggleColumn(e.target.checked, index, "show_in_export")}
                />
              </div>
            )}
          </div>
        ))}
      </WSDDialogModalScrollableContent>

      {/* ================= Footer (fixed) ================= */}
      <WSDDialogModalFooter className="p-3">
        <WSDSecondaryButton onClick={onClose}>Close</WSDSecondaryButton>

        <div className="ml-auto">
          <WSDPrimaryButton onClick={handleSave}>Save Preferences</WSDPrimaryButton>
        </div>
      </WSDDialogModalFooter>
    </WSDDialogModal>
  );
};

export default UniversalManageColumnsDialog;
