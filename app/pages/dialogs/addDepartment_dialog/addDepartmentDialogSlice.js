import { createAppSlice } from "../../../src/app/createAppSlice.ts";

const initialState = {
  Department: "",
  SubDepartments: [],
};

export const addDepartmentDialogSlice = createAppSlice({
  name: "add_department_dialog",
  initialState,

  reducers: (create) => ({
    setDepartment: create.reducer((state, action) => {
      state.Department = action.payload;

    }),

    addSubDepartments: create.reducer((state,action) => {
      state.SubDepartments.push(action.payload);
    }),

    updateSubDepartment: create.reducer((state, action) => {
      const { index, value } = action.payload;
      state.SubDepartments[index] = value;
    }),

    removeSubDepartment: create.reducer((state, action) => {
      state.SubDepartments.splice(action.payload, 1);
    }),

    resetAddDepartmentDialogSliceState: create.reducer((state) => {
      Object.assign(state, initialState);
    }),
  }),

  selectors: {
    selectDepartment: (state) => state.Department,
    selectSubDepartments: (state) => state.SubDepartments,
    selectAddDepartmentDialogState: (state) => state,
  },
});

export const {
  setDepartment,
  addSubDepartments,
  updateSubDepartment,
  removeSubDepartment,
  resetAddDepartmentDialogSliceState,
} = addDepartmentDialogSlice.actions;

export const { selectDepartment, selectSubDepartments, selectAddDepartmentDialogState } =
  addDepartmentDialogSlice.selectors;
