import { createAppSlice } from "../../../src/app/createAppSlice.ts";

const initialState = {
  RightAnswers: 0,
  WrongAnswers: [],
  AnswersKey: [],
};

export const quizzesDialogSlice = createAppSlice({
  name: "quizzes_dialog",
  initialState,
  reducers: (create) => ({
    setRightAnswers: create.reducer((state, action) => {
      state.RightAnswers = action.payload;
    }),
    setWrongAnswers: create.reducer((state, action) => {
      state.WrongAnswers = action.payload;
    }),
    setAnswersKey: create.reducer((state, action) => {
      state.AnswersKey = action.payload;
    }),
    resetQuizzesDialogSliceState: create.reducer((state) => {
      Object.assign(state, initialState);
    }),
  }),
  selectors: {
    selectRightAnswers: (state) => state.RightAnswers,
    selectWrongAnswers: (state) => state.WrongAnswers,
    selectAnswersKey: (state) => state.AnswersKey,
    selectQuizzesDialogState: (state) => state,
  },
});

export const { setRightAnswers, setWrongAnswers, setAnswersKey, resetQuizzesDialogSliceState } =
  quizzesDialogSlice.actions;

export const { selectRightAnswers, selectWrongAnswers, selectAnswersKey, selectQuizzesDialogState } =
  quizzesDialogSlice.selectors;
