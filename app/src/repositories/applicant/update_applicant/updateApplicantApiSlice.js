import { createAppSlice } from "../../../app/createAppSlice.ts";

export const UPDATE_APPLICANT_API_CALL_STATE = {
  IDLE: "IDLE",
  UPDATING: "UPDATING",
  RE_UPDATING: "RE-UPDATING",
  UPDATED: "UPDATED",
  FAILED: "FAILED",
};

const initialState = {
  api_props: {
    success_api_calls: 0,
    api_state: UPDATE_APPLICANT_API_CALL_STATE.IDLE,
  },
};

export const updateApplicantApiSlice = createAppSlice({
  name: "update_applicant",
  initialState,
  reducers: (create) => ({
    updateUpdateApplicantApiCallState: create.reducer((state, action) => {
      if (
        action.payload === UPDATE_APPLICANT_API_CALL_STATE.UPDATING &&
        state.api_props.success_api_calls >= 1
      ) {
        state.api_props.api_state = UPDATE_APPLICANT_API_CALL_STATE.RE_UPDATING;
        return;
      }

      if (action.payload === UPDATE_APPLICANT_API_CALL_STATE.UPDATED) {
        state.api_props.success_api_calls += 1;
      }

      state.api_props.api_state = action.payload;
    }),
    resetUpdateApplicantApiCallSlice: create.reducer((state) => {
      Object.assign(state, initialState);
    }),
  }),
  selectors: {
    selectUpdateApplicantApiState: (state) => state.api_props.api_state,
    selectUpdateApplicantApiSuccessCallsCount: (state) => state.api_props.success_api_calls,
  },
});

export const { updateUpdateApplicantApiCallState, resetUpdateApplicantApiCallSlice } =
  updateApplicantApiSlice.actions;

export const { selectUpdateApplicantApiState, selectUpdateApplicantApiSuccessCallsCount } =
  updateApplicantApiSlice.selectors;
