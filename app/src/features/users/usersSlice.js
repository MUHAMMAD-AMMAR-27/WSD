import { createAppSlice } from "../../app/createAppSlice.ts";

export const FETCH_USERS_API_CALL_STATE = {
  IDLE: "IDLE",
  FETCHING: "FETCHING",
  RE_FETCHING: "RE_FETCHING",
  FETCHED: "FETCHED",
  FAILED: "FAILED",
};

const initialState = {
  fetch_users_api_state: {
    success_api_calls: 0,
    api_state: FETCH_USERS_API_CALL_STATE.IDLE,
  },
  users: [],
};

export const usersSlice = createAppSlice({
  name: "users",
  initialState,
  reducers: (create) => ({
    setUsers: create.reducer((state, action) => {
      state.users = action.payload;
    }),
    updateFetchUsersApiCallState: create.reducer((state, action) => {
      if (
        action.payload === FETCH_USERS_API_CALL_STATE.FETCHING &&
        state.fetch_users_api_state.success_api_calls >= 1
      ) {
        state.fetch_users_api_state.api_state = FETCH_USERS_API_CALL_STATE.RE_FETCHING;
        return;
      }

      if (action.payload === FETCH_USERS_API_CALL_STATE.FETCHED) {
        state.fetch_users_api_state.success_api_calls += 1;
      }

      state.fetch_users_api_state.api_state = action.payload;
    }),
  }),
  selectors: {
    selectUsers: (state) => state.users,
    selectFetchUsersApiState: (state) => state.fetch_users_api_state.api_state,
    selectFetchUsersApiSuccessCallsCount: (state) => state.fetch_users_api_state.success_api_calls,
  },
});

export const { setUsers, updateFetchUsersApiCallState } = usersSlice.actions;

export const { selectUsers, selectFetchUsersApiState, selectFetchUsersApiSuccessCallsCount } =
  usersSlice.selectors;
