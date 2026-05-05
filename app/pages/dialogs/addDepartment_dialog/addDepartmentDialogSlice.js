import { createAppSlice } from "../../../src/app/createAppSlice.ts";

const initialState = {
  Department: "",
  SubDepartment: [],
};

export const addDepartmentDialogSlice = createAppSlice({
  name: "add_department_dialog",
  initialState,
  reducers: (create) => ({
    setDepartment: create.reducer((state, action) => {
      state.Department = action.payload;
    }),
    setSubDepartment: create.reducer((state, action) => {
      state.SubDepartment = action.payload;
    }),
    resetAddDepartmentDialogSliceState: create.reducer((state) => {
      Object.assign(state, initialState);
    }),
  }),
  selectors: {
    selectDepartment: (state) => state.Department,
    selectSubDepartment: (state) => state.SubDepartment,
    selectAddDepartmentDialogState: (state) => state,
  },
});

export const { setDepartment, setSubDepartment, resetAddDepartmentDialogSliceState } =
  addDepartmentDialogSlice.actions;

export const { selectDepartment, selectSubDepartment, selectAddDepartmentDialogState } =
  addDepartmentDialogSlice.selectors;
