import { createAppSlice } from "../../../../app/createAppSlice.ts";

export const CREATE_DEMAND_REFERENCE_PAYMENTS_TRANSACTION_API_CALL_STATE = {
  IDLE: "IDLE",
  CREATING: "CREATING",
  RE_CREATING: "RE-CREATING",
  CREATED: "CREATED",
  FAILED: "FAILED",
};

const initialState = {
  api_props: {
    success_api_calls: 0,
    api_state: CREATE_DEMAND_REFERENCE_PAYMENTS_TRANSACTION_API_CALL_STATE.IDLE,
  },
};

export const createDemandReferencePaymentsTransactionApiSlice = createAppSlice({
  name: "create_demand_reference_payments_transaction",
  initialState,
  reducers: (create) => ({
    updateCreateDemandReferencePaymentsTransactionApiCallState: create.reducer((state, action) => {
      if (
        action.payload === CREATE_DEMAND_REFERENCE_PAYMENTS_TRANSACTION_API_CALL_STATE.CREATING &&
        state.api_props.success_api_calls >= 1
      ) {
        state.api_props.api_state =
          CREATE_DEMAND_REFERENCE_PAYMENTS_TRANSACTION_API_CALL_STATE.RE_CREATING;
        return;
      }

      if (action.payload === CREATE_DEMAND_REFERENCE_PAYMENTS_TRANSACTION_API_CALL_STATE.CREATED) {
        state.api_props.success_api_calls += 1;
      }

      state.api_props.api_state = action.payload;
    }),
    resetCreateDemandReferencePaymentsTransactionApiCallSlice: create.reducer((state) => {
      Object.assign(state, initialState);
    }),
  }),
  selectors: {
    selectCreateDemandReferencePaymentsTransactionApiState: (state) => state.api_props.api_state,
    selectCreateDemandReferencePaymentsTransactionApiSuccessCallsCount: (state) =>
      state.api_props.success_api_calls,
  },
});

export const {
  updateCreateDemandReferencePaymentsTransactionApiCallState,
  resetCreateDemandReferencePaymentsTransactionApiCallSlice,
} = createDemandReferencePaymentsTransactionApiSlice.actions;

export const {
  selectCreateDemandReferencePaymentsTransactionApiState,
  selectCreateDemandReferencePaymentsTransactionApiSuccessCallsCount,
} = createDemandReferencePaymentsTransactionApiSlice.selectors;
