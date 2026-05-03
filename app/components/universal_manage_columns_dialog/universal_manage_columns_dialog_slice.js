import { createAppSlice } from "../../src/app/createAppSlice.js";

const initialState = {
  id: null,
  columns: [],
};

export const universalManageColumnsDialogSlice = createAppSlice({
  name: "universal_manage_columns_dialog",
  initialState,
  reducers: (create) => ({
    setUniversalManageColumnDialogData: create.reducer((state, action) => {
      state.id = action.payload.id;
      state.columns = action.payload.columns;
    }),
    updateUniversalManageColumnDialogCheckboxState: create.reducer((state, action) => {
      const { checked, index, field } = action.payload;

      state.columns[index][field] = checked;
    }),
    updateAllUniversalManageColumnDialogCheckboxesState: create.reducer((state, action) => {
      const { checked, field } = action.payload;

      state.columns = state.columns.map((col) => {
        if (!(field in col)) {
          return col;
        }

        const transformedColumn = { ...col };
        transformedColumn[field] = checked;

        return transformedColumn;
      });
    }),
    resetUniversalManageColumnsDialogSlice: create.reducer((state) => {
      Object.assign(state, initialState);
    }),
  }),
  selectors: {
    selectUniversalManageColumnsState: (state) => state,
  },
});

export const {
  setUniversalManageColumnDialogData,
  resetUniversalManageColumnsDialogSlice,
  updateUniversalManageColumnDialogCheckboxState,
  updateAllUniversalManageColumnDialogCheckboxesState,
} = universalManageColumnsDialogSlice.actions;

export const { selectUniversalManageColumnsState } = universalManageColumnsDialogSlice.selectors;
