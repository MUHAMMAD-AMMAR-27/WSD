import { createAppSlice } from "../../../app/createAppSlice.ts";

export const SWITCH_APPLICANT_STATE_API_CALL_STATE = {
  IDLE: "IDLE",
  SWITCHING: "SWITCHING",
  RE_SWITCHING: "RE-SWITCHING",
  SWITCHED: "SWITCHED",
  FAILED: "FAILED",
};

const initialState = {
  api_props: {
    success_api_calls: 0,
    api_state: SWITCH_APPLICANT_STATE_API_CALL_STATE.IDLE,
  },
};

export const switchApplicantStateApiSlice = createAppSlice({
  name: "switch_applicant_state",
  initialState,
  reducers: (create) => ({
    updateSwitchApplicantStateApiCallState: create.reducer((state, action) => {
      if (
        action.payload === SWITCH_APPLICANT_STATE_API_CALL_STATE.SWITCHING &&
        state.api_props.success_api_calls >= 1
      ) {
        state.api_props.api_state = SWITCH_APPLICANT_STATE_API_CALL_STATE.RE_SWITCHING;
        return;
      }

      if (action.payload === SWITCH_APPLICANT_STATE_API_CALL_STATE.SWITCHED) {
        state.api_props.success_api_calls += 1;
      }

      state.api_props.api_state = action.payload;
    }),
    resetSwitchApplicantStateApiCallSlice: create.reducer((state) => {
      Object.assign(state, initialState);
    }),
  }),
  selectors: {
    selectSwitchApplicantStateApiState: (state) => state.api_props.api_state,
    selectSwitchApplicantStateApiSuccessCallsCount: (state) => state.api_props.success_api_calls,
  },
});

export const { updateSwitchApplicantStateApiCallState, resetSwitchApplicantStateApiCallSlice } =
  switchApplicantStateApiSlice.actions;

export const { selectSwitchApplicantStateApiState, selectSwitchApplicantStateApiSuccessCallsCount } =
  switchApplicantStateApiSlice.selectors;
