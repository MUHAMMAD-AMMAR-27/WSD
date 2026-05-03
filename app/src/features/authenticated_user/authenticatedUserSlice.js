import { createAppSlice } from "../../app/createAppSlice.ts";

const initialState = {
  user: undefined, // This Primary User who has Signed In Properly.
  alternativeUser: undefined, // The secondary user who hasn't signed in, the admin might be using his account.
};

export const authenticatedUserSlice = createAppSlice({
  name: "authenticated_user",
  initialState,
  reducers: (create) => ({
    setAuthenticatedUser: create.reducer((state, action) => {
      state.user = action.payload;
    }),
    setAlternativeUser: create.reducer((state, action) => {
      state.alternativeUser = action.payload;
    }),
    setAlternativePlusAuthenticatedUser: create.reducer((state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.user = action.payload.user;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.alternativeUser = action.payload.alternativeUser;
    }),
  }),
  selectors: {
    selectAuthenticatedUser: (state) => state.user,
    selectAlternativeUser: (state) => state.alternativeUser,
  },
});

export const { setAuthenticatedUser, setAlternativeUser, setAlternativePlusAuthenticatedUser } =
  authenticatedUserSlice.actions;

export const { selectAuthenticatedUser, selectAlternativeUser } = authenticatedUserSlice.selectors;
