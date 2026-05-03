import { createAppSlice } from "../../../app/createAppSlice.ts";

export const REGISTER_APPLICANT_API_CALL_STATE = {
  IDLE: "IDLE",
  REGISTERING: "REGISTERING",
  RE_REGISTERING: "RE-REGISTERING",
  REGISTERED: "REGISTERED",
  FAILED: "FAILED",
};

const initialState = {
  api_props: {
    success_api_calls: 0,
    api_state: REGISTER_APPLICANT_API_CALL_STATE.IDLE,
  },
};

export const registerApplicantApiSlice = createAppSlice({
  name: "register_applicant",
  initialState,
  reducers: (create) => ({
    updateRegisterApplicantApiCallState: create.reducer((state, action) => {
      if (
        action.payload === REGISTER_APPLICANT_API_CALL_STATE.REGISTERING &&
        state.api_props.success_api_calls >= 1
      ) {
        state.api_props.api_state = REGISTER_APPLICANT_API_CALL_STATE.RE_REGISTERING;
        return;
      }

      if (action.payload === REGISTER_APPLICANT_API_CALL_STATE.REGISTERED) {
        state.api_props.success_api_calls += 1;
      }

      state.api_props.api_state = action.payload;
    }),
    resetRegisterApplicantApiCallSlice: create.reducer((state) => {
      Object.assign(state, initialState);
    }),
  }),
  selectors: {
    selectRegisterApplicantApiState: (state) => state.api_props.api_state,
    selectRegisterApplicantApiSuccessCallsCount: (state) => state.api_props.success_api_calls,
  },
});

export const { updateRegisterApplicantApiCallState, resetRegisterApplicantApiCallSlice } =
  registerApplicantApiSlice.actions;

export const { selectRegisterApplicantApiState, selectRegisterApplicantApiSuccessCallsCount } =
  registerApplicantApiSlice.selectors;