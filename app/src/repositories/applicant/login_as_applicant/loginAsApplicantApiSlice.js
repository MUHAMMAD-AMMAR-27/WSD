import { createAppSlice } from "../../../app/createAppSlice.ts";

export const LOGIN_AS_APPLICANT_API_CALL_STATE = {
  IDLE: "IDLE",
  LOGGING_IN: "LOGGING_IN",
  RE_LOGGING_IN: "RE-LOGGING_IN",
  LOGGED_IN: "LOGGED_IN",
  FAILED: "FAILED",
};

const initialState = {
  api_props: {
    success_api_calls: 0,
    api_state: LOGIN_AS_APPLICANT_API_CALL_STATE.IDLE,
  },
};

export const loginAsApplicantApiSlice = createAppSlice({
  name: "login_as_applicant",
  initialState,
  reducers: (create) => ({
    updateLoginAsApplicantApiCallState: create.reducer((state, action) => {
      if (
        action.payload === LOGIN_AS_APPLICANT_API_CALL_STATE.LOGGING_IN &&
        state.api_props.success_api_calls >= 1
      ) {
        state.api_props.api_state = LOGIN_AS_APPLICANT_API_CALL_STATE.RE_LOGGING_IN;
        return;
      }

      if (action.payload === LOGIN_AS_APPLICANT_API_CALL_STATE.LOGGED_IN) {
        state.api_props.success_api_calls += 1;
      }

      state.api_props.api_state = action.payload;
    }),
    resetLoginAsApplicantApiCallSlice: create.reducer((state) => {
      Object.assign(state, initialState);
    }),
  }),
  selectors: {
    selectLoginAsApplicantApiState: (state) => state.api_props.api_state,
    selectLoginAsApplicantApiSuccessCallsCount: (state) => state.api_props.success_api_calls,
  },
});

export const { updateLoginAsApplicantApiCallState, resetLoginAsApplicantApiCallSlice } =
  loginAsApplicantApiSlice.actions;

export const { selectLoginAsApplicantApiState, selectLoginAsApplicantApiSuccessCallsCount } =
  loginAsApplicantApiSlice.selectors;
