import { createAppSlice } from "../../../app/createAppSlice.ts";

export const FETCH_ALL_APPLICANTS_API_CALL_STATE = {
  IDLE: "IDLE",
  FETCHING: "FETCHING",
  RE_FETCHING: "RE-FETCHING",
  FETCHED: "FETCHED",
  FAILED: "FAILED",
};

const initialState = {
  api_props: {
    success_api_calls: 0,
    api_state: FETCH_ALL_APPLICANTS_API_CALL_STATE.IDLE,
  },
};

export const fetchAllApplicantsApiSlice = createAppSlice({
  name: "fetch_all_applicants",
  initialState,
  reducers: (create) => ({
    updateFetchAllApplicantsApiCallState: create.reducer((state, action) => {
      if (
        action.payload === FETCH_ALL_APPLICANTS_API_CALL_STATE.FETCHING &&
        state.api_props.success_api_calls >= 1
      ) {
        state.api_props.api_state = FETCH_ALL_APPLICANTS_API_CALL_STATE.RE_FETCHING;
        return;
      }

      if (action.payload === FETCH_ALL_APPLICANTS_API_CALL_STATE.FETCHED) {
        state.api_props.success_api_calls += 1;
      }

      state.api_props.api_state = action.payload;
    }),
    resetFetchAllApplicantsApiCallSlice: create.reducer((state) => {
      Object.assign(state, initialState);
    }),
  }),
  selectors: {
    selectFetchAllApplicantsApiState: (state) => state.api_props.api_state,
    selectFetchAllApplicantsApiSuccessCallsCount: (state) => state.api_props.success_api_calls,
  },
});

export const { updateFetchAllApplicantsApiCallState, resetFetchAllApplicantsApiCallSlice } =
  fetchAllApplicantsApiSlice.actions;

export const { selectFetchAllApplicantsApiState, selectFetchAllApplicantsApiSuccessCallsCount } =
  fetchAllApplicantsApiSlice.selectors;