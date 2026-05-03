import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../src/app/hooks.ts";
import WSDDialogModal, {
  WSDDialogModalFooter,
  WSDDialogModalHeader,
  WSDDialogModalScrollableContent,
} from "../WSDDialogModal.jsx";
import clsx from "clsx";
import WSDSecondaryButton from "../WSDSecondaryButton.jsx";
import WSDPrimaryButton from "../WSDPrimaryButton.jsx";
import WSDDangerButton from "../WSDDangerButton.jsx";
import { selectWSDAlertDialogPayload } from "./wsdAlertDialogSlice.js";

export const positiveBtn = (config = [], onClick = (payload) => {}) => ({
  text: config[0] || 'OK',
  onClick,
  type: config[1] || 'primary',
});
export const negativeBtn = (config = [], onClick = (payload) => {}) => ({
  text: config[0] || 'Cancel',
  onClick,
  type: config[1] || 'secondary',
});

const WSDAlertDialog = ({
  className,
  title = "Alert",
  message = "",
  positiveButton = positiveBtn(),
  negativeButton,
  onClose,
  ...props
}) => {
  const payload = useAppSelector(selectWSDAlertDialogPayload);

  return (
    <WSDDialogModal className={clsx("!h-[250px] !w-[500px]", className)} {...props}>
      <WSDDialogModalHeader dialogTitle={title} onClose={onClose} />

      <WSDDialogModalScrollableContent>
        <p>{message}</p>
      </WSDDialogModalScrollableContent>

      <WSDDialogModalFooter className={"p-3"}>
        <div className="flex gap-3 ml-auto">
          {positiveButton?.type === "primary" && (
            <WSDPrimaryButton onClick={e => positiveButton.onClick(payload)}>
              {positiveButton.text}
            </WSDPrimaryButton>
          )}

          {positiveButton?.type === "secondary" && (
            <WSDSecondaryButton onClick={e => positiveButton.onClick(payload)}>
              {positiveButton.text}
            </WSDSecondaryButton>
          )}

          {positiveButton?.type === "danger" && (
            <WSDDangerButton onClick={e => positiveButton.onClick(payload)}>
              {positiveButton.text}
            </WSDDangerButton>
          )}

          {negativeButton?.type === "primary" && (
            <WSDPrimaryButton onClick={e => negativeButton.onClick(payload)}>
              {negativeButton.text}
            </WSDPrimaryButton>
          )}

          {negativeButton?.type === "secondary" && (
            <WSDSecondaryButton onClick={e => negativeButton.onClick(payload)}>
              {negativeButton.text}
            </WSDSecondaryButton>
          )}

          {negativeButton?.type === "danger" && (
            <WSDDangerButton onClick={e => negativeButton.onClick(payload)}>
              {negativeButton.text}
            </WSDDangerButton>
          )}
        </div>
      </WSDDialogModalFooter>
    </WSDDialogModal>
  );
};

export default WSDAlertDialog;
