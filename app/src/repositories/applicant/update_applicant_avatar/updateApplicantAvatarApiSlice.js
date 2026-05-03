import { createAppSlice } from "../../../app/createAppSlice.ts";

export const UPDATE_APPLICANT_AVATAR_API_CALL_STATE = {
  IDLE: "IDLE",
  UPDATING: "UPDATING",
  RE_UPDATING: "RE-UPDATING",
  UPDATED: "UPDATED",
  FAILED: "FAILED",
};

const initialState = {
  api_props: {
    success_api_calls: 0,
    api_state: UPDATE_APPLICANT_AVATAR_API_CALL_STATE.IDLE,
  },
};

export const updateApplicantAvatarApiSlice = createAppSlice({
  name: "update_applicant_avatar",
  initialState,
  reducers: (create) => ({
    updateUpdateApplicantAvatarApiCallState: create.reducer((state, action) => {
      if (
        action.payload === UPDATE_APPLICANT_AVATAR_API_CALL_STATE.UPDATING &&
        state.api_props.success_api_calls >= 1
      ) {
        state.api_props.api_state = UPDATE_APPLICANT_AVATAR_API_CALL_STATE.RE_UPDATING;
        return;
      }

      if (action.payload === UPDATE_APPLICANT_AVATAR_API_CALL_STATE.UPDATED) {
        state.api_props.success_api_calls += 1;
      }

      state.api_props.api_state = action.payload;
    }),
    resetUpdateApplicantAvatarApiCallSlice: create.reducer((state) => {
      Object.assign(state, initialState);
    }),
  }),
  selectors: {
    selectUpdateApplicantAvatarApiState: (state) => state.api_props.api_state,
    selectUpdateApplicantAvatarApiSuccessCallsCount: (state) => state.api_props.success_api_calls,
  },
});

export const { updateUpdateApplicantAvatarApiCallState, resetUpdateApplicantAvatarApiCallSlice } =
  updateApplicantAvatarApiSlice.actions;

export const { selectUpdateApplicantAvatarApiState, selectUpdateApplicantAvatarApiSuccessCallsCount } =
  updateApplicantAvatarApiSlice.selectors;
