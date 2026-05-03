import { createAppSlice } from "../../src/app/createAppSlice.ts";

const initialState = {

};

export const dashboardPageSlice = createAppSlice({
  name: "dashboard_page",
  initialState,
  reducers: (create) => ({

    resetDashboardPageSliceState: create.reducer((state) => {
      Object.assign(state, initialState);
    }),
  }),
  selectors: {

    selectDashboardPageState: (state) => state,
  },
});

export const {

  resetDashboardPageSliceState,
} = dashboardPageSlice.actions;

export const {

  selectDashboardPageState,
} = dashboardPageSlice.selectors;