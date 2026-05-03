import { createAppSlice } from "../../../../app/createAppSlice.ts";

export const CREATE_APPLICANT_PAYMENT_TRANSACTION_API_CALL_STATE = {
  IDLE: "IDLE",
  CREATING: "CREATING",
  RE_CREATING: "RE-CREATING",
  CREATED: "CREATED",
  FAILED: "FAILED",
};

const initialState = {
  api_props: {
    success_api_calls: 0,
    api_state: CREATE_APPLICANT_PAYMENT_TRANSACTION_API_CALL_STATE.IDLE,
  },
};

export const createApplicantPaymentTransactionApiSlice = createAppSlice({
  name: "create_applicant_payment_transaction",
  initialState,
  reducers: (create) => ({
    updateCreateApplicantPaymentTransactionApiCallState: create.reducer((state, action) => {
      if (
        action.payload === CREATE_APPLICANT_PAYMENT_TRANSACTION_API_CALL_STATE.CREATING &&
        state.api_props.success_api_calls >= 1
      ) {
        state.api_props.api_state = CREATE_APPLICANT_PAYMENT_TRANSACTION_API_CALL_STATE.RE_CREATING;
        return;
      }

      if (action.payload === CREATE_APPLICANT_PAYMENT_TRANSACTION_API_CALL_STATE.CREATED) {
        state.api_props.success_api_calls += 1;
      }

      state.api_props.api_state = action.payload;
    }),
    resetCreateApplicantPaymentTransactionApiCallSlice: create.reducer((state) => {
      Object.assign(state, initialState);
    }),
  }),
  selectors: {
    selectCreateApplicantPaymentTransactionApiState: (state) => state.api_props.api_state,
    selectCreateApplicantPaymentTransactionApiSuccessCallsCount: (state) =>
      state.api_props.success_api_calls,
  },
});

export const {
  updateCreateApplicantPaymentTransactionApiCallState,
  resetCreateApplicantPaymentTransactionApiCallSlice,
} = createApplicantPaymentTransactionApiSlice.actions;

export const {
  selectCreateApplicantPaymentTransactionApiState,
  selectCreateApplicantPaymentTransactionApiSuccessCallsCount,
} = createApplicantPaymentTransactionApiSlice.selectors;
