import { createAppSlice } from "../../../../app/createAppSlice.ts";

export const CREATE_APPLICANT_REFERENCE_PAYMENT_TRANSACTION_API_CALL_STATE = {
  IDLE: "IDLE",
  CREATING: "CREATING",
  RE_CREATING: "RE-CREATING",
  CREATED: "CREATED",
  FAILED: "FAILED",
};

const initialState = {
  api_props: {
    success_api_calls: 0,
    api_state: CREATE_APPLICANT_REFERENCE_PAYMENT_TRANSACTION_API_CALL_STATE.IDLE,
  },
};

export const createApplicantReferencePaymentTransactionApiSlice = createAppSlice({
  name: "create_applicant_reference_payment_transaction",
  initialState,
  reducers: (create) => ({
    updateCreateApplicantReferencePaymentTransactionApiCallState: create.reducer(
      (state, action) => {
        if (
          action.payload ===
            CREATE_APPLICANT_REFERENCE_PAYMENT_TRANSACTION_API_CALL_STATE.CREATING &&
          state.api_props.success_api_calls >= 1
        ) {
          state.api_props.api_state =
            CREATE_APPLICANT_REFERENCE_PAYMENT_TRANSACTION_API_CALL_STATE.RE_CREATING;
          return;
        }

        if (
          action.payload === CREATE_APPLICANT_REFERENCE_PAYMENT_TRANSACTION_API_CALL_STATE.CREATED
        ) {
          state.api_props.success_api_calls += 1;
        }

        state.api_props.api_state = action.payload;
      }
    ),
    resetCreateApplicantReferencePaymentTransactionApiCallSlice: create.reducer((state) => {
      Object.assign(state, initialState);
    }),
  }),
  selectors: {
    selectCreateApplicantReferencePaymentTransactionApiState: (state) => state.api_props.api_state,
    selectCreateApplicantReferencePaymentTransactionApiSuccessCallsCount: (state) =>
      state.api_props.success_api_calls,
  },
});

export const {
  updateCreateApplicantReferencePaymentTransactionApiCallState,
  resetCreateApplicantReferencePaymentTransactionApiCallSlice,
} = createApplicantReferencePaymentTransactionApiSlice.actions;

export const {
  selectCreateApplicantReferencePaymentTransactionApiState,
  selectCreateApplicantReferencePaymentTransactionApiSuccessCallsCount,
} = createApplicantReferencePaymentTransactionApiSlice.selectors;