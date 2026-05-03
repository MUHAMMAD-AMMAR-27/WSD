import { createAppSlice } from "../../../../app/createAppSlice.ts";

export const FETCH_ALL_APPLICANT_PAYMENTS_TRANSACTION_API_CALL_STATE = {
  IDLE: "IDLE",
  FETCHING: "FETCHING",
  RE_FETCHING: "RE-FETCHING",
  FETCHED: "FETCHED",
  FAILED: "FAILED",
};

const initialState = {
  api_props: {
    success_api_calls: 0,
    api_state: FETCH_ALL_APPLICANT_PAYMENTS_TRANSACTION_API_CALL_STATE.IDLE,
  },
};

export const fetchAllApplicantPaymentsTransactionApiSlice = createAppSlice({
  name: "fetch_all_applicant_payments_transaction",
  initialState,
  reducers: (create) => ({
    updateFetchAllApplicantPaymentsTransactionApiCallState: create.reducer((state, action) => {
      if (
        action.payload === FETCH_ALL_APPLICANT_PAYMENTS_TRANSACTION_API_CALL_STATE.FETCHING &&
        state.api_props.success_api_calls >= 1
      ) {
        state.api_props.api_state =
          FETCH_ALL_APPLICANT_PAYMENTS_TRANSACTION_API_CALL_STATE.RE_FETCHING;
        return;
      }

      if (action.payload === FETCH_ALL_APPLICANT_PAYMENTS_TRANSACTION_API_CALL_STATE.FETCHED) {
        state.api_props.success_api_calls += 1;
      }

      state.api_props.api_state = action.payload;
    }),
    resetFetchAllApplicantPaymentsTransactionApiCallSlice: create.reducer((state) => {
      Object.assign(state, initialState);
    }),
  }),
  selectors: {
    selectFetchAllApplicantPaymentsTransactionApiState: (state) => state.api_props.api_state,
    selectFetchAllApplicantPaymentsTransactionApiSuccessCallsCount: (state) =>
      state.api_props.success_api_calls,
  },
});

export const {
  updateFetchAllApplicantPaymentsTransactionApiCallState,
  resetFetchAllApplicantPaymentsTransactionApiCallSlice,
} = fetchAllApplicantPaymentsTransactionApiSlice.actions;

export const {
  selectFetchAllApplicantPaymentsTransactionApiState,
  selectFetchAllApplicantPaymentsTransactionApiSuccessCallsCount,
} = fetchAllApplicantPaymentsTransactionApiSlice.selectors;
