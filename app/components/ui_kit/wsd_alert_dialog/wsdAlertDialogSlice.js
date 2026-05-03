import { createAppSlice } from "../../../src/app/createAppSlice.js";

const initialState = {
  payload: undefined,
};

export const wsdAlertDialogSlice = createAppSlice({
  name: "wsd_alert_dialog",
  initialState,
  reducers: (create) => ({
    setWSDAlertDialogPayload: create.reducer((state, action) => {
      state.payload = action.payload;
    }),
    resetWSDAlertDialogSlice: create.reducer((state) => {
      Object.assign(state, initialState);
    }),
  }),
  selectors: {
    selectWSDAlertDialogPayload: (state) => state.payload,
  },
});

export const { setWSDAlertDialogPayload, resetWSDAlertDialogSlice } =
  wsdAlertDialogSlice.actions;

export const { selectWSDAlertDialogPayload } = wsdAlertDialogSlice.selectors;
