import { createAppSlice } from "../../../src/app/createAppSlice.ts";

const initialState = {
  Subjects: [],
  Subject: "",
};

export const addSubjectsDialogSlice = createAppSlice({
  name: "add_subjects_dialog",
  initialState,
  reducers: (create) => ({
    setSubjects: create.reducer((state, action) => {
      state.Subjects.push(state.Subject);
    }),
    setSubject: create.reducer((state, action) => {
      state.Subject = action.payload;
    }),
    resetAddSubjectsDialogSliceState: create.reducer((state) => {
      Object.assign(state, initialState);
    }),
  }),
  selectors: {
    selectSubjects: (state) => state.Subjects,
    selectSubject: (state) => state.Subject,
    selectAddSubjectsDialogState: (state) => state,
  },
});

export const { setSubjects, setSubject, resetAddSubjectsDialogSliceState } =
  addSubjectsDialogSlice.actions;

export const { selectSubjects, selectSubject, selectAddSubjectsDialogState } =
  addSubjectsDialogSlice.selectors;
