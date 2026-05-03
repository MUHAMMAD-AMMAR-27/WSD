import { createAppSlice } from "../../../app/createAppSlice.ts";

export const DELETE_APPLICANT_API_CALL_STATE = {
  IDLE: "IDLE",
  DELETING: "DELETING",
  RE_DELETING: "RE-DELETING",
  DELETED: "DELETED",
  FAILED: "FAILED",
};

const initialState = {
  api_props: {
    success_api_calls: 0,
    api_state: DELETE_APPLICANT_API_CALL_STATE.IDLE,
  },
};

export const deleteApplicantApiSlice = createAppSlice({
  name: "delete_applicant",
  initialState,
  reducers: (create) => ({
    updateDeleteApplicantApiCallState: create.reducer((state, action) => {
      if (
        action.payload === DELETE_APPLICANT_API_CALL_STATE.DELETING &&
        state.api_props.success_api_calls >= 1
      ) {
        state.api_props.api_state = DELETE_APPLICANT_API_CALL_STATE.RE_DELETING;
        return;
      }

      if (action.payload === DELETE_APPLICANT_API_CALL_STATE.DELETED) {
        state.api_props.success_api_calls += 1;
      }

      state.api_props.api_state = action.payload;
    }),
    resetDeleteApplicantApiCallSlice: create.reducer((state) => {
      Object.assign(state, initialState);
    }),
  }),
  selectors: {
    selectDeleteApplicantApiState: (state) => state.api_props.api_state,
    selectDeleteApplicantApiSuccessCallsCount: (state) => state.api_props.success_api_calls,
  },
});

export const { updateDeleteApplicantApiCallState, resetDeleteApplicantApiCallSlice } =
  deleteApplicantApiSlice.actions;

export const { selectDeleteApplicantApiState, selectDeleteApplicantApiSuccessCallsCount } =
  deleteApplicantApiSlice.selectors;