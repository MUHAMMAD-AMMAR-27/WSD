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

    addSubDepartment: create.reducer((state) => {
      state.SubDepartment.push("");
    }),

    updateSubDepartment: create.reducer((state, action) => {
      const { index, value } = action.payload;
      state.SubDepartment[index] = value;
    }),

    removeSubDepartment: create.reducer((state, action) => {
      state.SubDepartment.splice(action.payload, 1);
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

export const {
  setDepartment,
  addSubDepartment,
  updateSubDepartment,
  removeSubDepartment,
  resetAddDepartmentDialogSliceState,
} = addDepartmentDialogSlice.actions;

export const { selectDepartment, selectSubDepartment, selectAddDepartmentDialogState } =
  addDepartmentDialogSlice.selectors;
