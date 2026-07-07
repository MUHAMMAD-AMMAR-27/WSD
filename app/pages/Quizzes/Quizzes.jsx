import React, { useEffect, useState } from "react";
import { ArrowLeft, Clock, RotateCcw, CheckCircle2, ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

// --- Redux Imports ---
import { useAppDispatch } from "../../src/app/hooks.js";
import {
  setRightAnswers,
  setWrongAnswers,
  setAnswersKey,
} from "../dialogs/quizzes_dialog/quizzesDialogSlice.js";

// --- Layout Components ---
import WSDDashboardLayout from "../../components/dashboard_kit/WSDDashboardLayout.jsx";
import WSDDashboardTopAppBar from "../../components/dashboard_kit/WSDDashboardTopAppBar.jsx";
import WSDDashboardBase from "../../components/dashboard_kit/WSDDashboardBase.jsx";
import WSDDashboardDrawer from "../../components/dashboard_kit/WSDDashboardDrawer.jsx";
import WSDDashboardMainBodyContainer from "../../components/dashboard_kit/WSDDashboardMainBodyContainer.jsx";
import WSDOverlayWrapper from "../../components/ui_kit/WSDOverlayWrapper.jsx";

// Dialog Component
import QuizzesDialog from "../dialogs/quizzes_dialog/QuizzesDialog.jsx";

const DIALOGS = {
  QUIZZES: "QUIZZES",
};

// Generate Mock Questions
const generateQuestions = () => {
  const qs = [];
  for (let i = 1; i <= 20; i++) {
    qs.push({
      id: i,
      statement: `Mock Question ${i}`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      rightAnswer: "Option B",
    });
  }
  // Hardcode the 3rd question to match the provided image
  qs[2] = {
    id: 3,
    statement: "What is the capital of Japan?",
    options: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
    rightAnswer: "Seoul",
  };
  qs[3] = {
    id: 4,
    statement: `Mock Question 4`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    rightAnswer: "Option C",
  };
  return qs;
};

function Quizzes() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [activeDialog, setActiveDialog] = useState(null);

  // --- Local State ---
  const [questions] = useState(generateQuestions());
  const [currentIndex, setCurrentIndex] = useState(2); // Start at index 2 (Question 3)
  const [answers, setAnswers] = useState({ 0: "Option A", 1: "Option C", 2: "Tokyo" });
  const [submitted, setSubmitted] = useState({ 0: true, 1: true });
  const [timeLeft, setTimeLeft] = useState(29 * 60 + 35);

  // --- Derived Variables ---
  const currentQuestion = questions[currentIndex];
  const currentSelection = answers[currentIndex] || null;
  const isCurrentSubmitted = submitted[currentIndex] || false;
  const answeredCount = Object.keys(submitted).length;

  // --- Timer Effect ---
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formattedTime = `${Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0")}:${(timeLeft % 60).toString().padStart(2, "0")}`;

  // --- Action Handlers ---
  const handleSelectOption = (option) => {
    if (isCurrentSubmitted) return;
    setAnswers((prev) => ({ ...prev, [currentIndex]: option }));
  };

  const handleClearSelection = () => {
    if (isCurrentSubmitted) return;
    setAnswers((prev) => {
      const nextAnswers = { ...prev };
      delete nextAnswers[currentIndex];
      return nextAnswers;
    });
  };

  const handleSubmitAnswer = () => {
    if (!currentSelection || isCurrentSubmitted) return;
    setSubmitted((prev) => ({ ...prev, [currentIndex]: true }));
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleGoToQuestion = (index) => {
    setCurrentIndex(index);
  };

  // --- EVALUATE QUIZ & DISPATCH TO REDUX ---
  const handleFinalSubmit = () => {
    let correctCount = 0;
    let incorrectIds = [];
    let generatedAnswerKey = [];

    // Loop through all questions to evaluate the user's answers
    questions.forEach((q, index) => {
      const userAns = answers[index];
      const isCorrect = userAns === q.rightAnswer;

      if (isCorrect) {
        correctCount++;
      } else {
        // If wrong or unselected, push the 1-based question number
        incorrectIds.push(index + 1);
      }

      // Figure out if the correct answer was A, B, C, or D to build the Answer Key
      const correctOptionIndex = q.options.indexOf(q.rightAnswer);
      const correctLetter = String.fromCharCode(65 + correctOptionIndex);

      generatedAnswerKey.push({
        id: index + 1,
        ans: correctLetter,
      });
    });

    // Dispatch the evaluated data to the Redux Slice
    dispatch(setRightAnswers(correctCount));
    dispatch(setWrongAnswers(incorrectIds));
    dispatch(setAnswersKey(generatedAnswerKey));

    // Open the dialog
    setActiveDialog(DIALOGS.QUIZZES);
  };

  return (
    <WSDDashboardLayout>
      <WSDDashboardTopAppBar />
      <WSDDashboardBase>
        <WSDDashboardDrawer />

        <WSDDashboardMainBodyContainer containsOverlay={activeDialog !== null}>
          <div className="flex flex-col w-full min-h-full bg-gray-50/50">
            {/* Top Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
              <div className="flex items-center gap-4">
                <button
                  className="p-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-blue-600"
                  onClick={() => navigate(-1)}
                >
                  <ArrowLeft size={20} />
                </button>
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold text-[#1e293b]">General Knowledge Quiz</h1>
                  <div className="flex items-center text-sm text-gray-500 gap-1.5 mt-0.5">
                    <span className="hover:text-blue-600 cursor-pointer">Quizzes</span>
                    <span>/</span>
                    <span className="hover:text-blue-600 cursor-pointer">General Knowledge</span>
                    <span>/</span>
                    <span className="text-gray-400">Quiz - 01</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2 bg-white border border-gray-200 rounded-md shadow-sm min-w-[140px]">
                <Clock className="text-gray-400 shrink-0" size={20} />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-medium">Time Left</span>
                  <span className="text-lg font-bold text-[#1e293b] leading-tight">
                    {formattedTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
              {/* Left Column: Questions */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <div className="bg-white h-155 rounded-xl border border-gray-200 shadow-sm p-8">
                  <div className="mb-6">
                    <span className="text-sm font-semibold text-blue-700">
                      Question {currentIndex + 1} of {questions.length}
                    </span>
                    <h2 className="text-2xl font-bold text-[#1e293b] mt-3">
                      {currentQuestion.statement}
                    </h2>
                  </div>

                  <div className="flex flex-col gap-3 w-full mb-8">
                    {currentQuestion.options.map((option, mcqIndex) => {
                      const isSelected = currentSelection === option;
                      return (
                        <div
                          key={mcqIndex}
                          onClick={() => handleSelectOption(option)}
                          className={clsx(
                            "flex items-center px-4 py-5 border rounded-md transition-colors",
                            isCurrentSubmitted
                              ? "cursor-default"
                              : "cursor-pointer hover:bg-gray-50",
                            isSelected ? "border-blue-200 bg-[#eff6ff]" : "border-gray-200 bg-white"
                          )}
                        >
                          <div className="flex items-center gap-4 w-full">
                            <div
                              className={clsx(
                                "w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ",
                                isSelected ? "border-blue-600 bg-blue-600" : "border-gray-300",
                                isCurrentSubmitted && !isSelected && "opacity-50"
                              )}
                            >
                              {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                            </div>

                            <div className="flex items-center gap-3">
                              <span className="text-sm text-gray-500 font-medium w-4 text-center">
                                {String.fromCharCode(65 + mcqIndex)}
                              </span>
                              <span
                                className={clsx(
                                  "text-[15px]",
                                  isSelected ? "text-blue-900 font-medium" : "text-gray-700",
                                  isCurrentSubmitted && !isSelected && "text-gray-400"
                                )}
                              >
                                {option}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {!isCurrentSubmitted && (
                    <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                      <button
                        onClick={handleClearSelection}
                        disabled={!currentSelection}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded text-blue-700 text-sm font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <RotateCcw size={16} />
                        Clear Selection
                      </button>
                      <button
                        onClick={handleSubmitAnswer}
                        disabled={!currentSelection}
                        className="px-5 py-2 bg-blue-600 rounded text-white text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Submit Answer
                      </button>
                    </div>
                  )}

                  {isCurrentSubmitted && (
                    <div className="mt-6 flex flex-col gap-4">
                      <div className="flex items-start gap-3 bg-[#f0fdf4] border border-[#bbf7d0] p-4 rounded-md">
                        <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={20} />
                        <div>
                          <p className="text-green-800 font-medium text-sm">
                            Answer submitted successfully!
                          </p>
                          <p className="text-green-700 text-sm mt-1">
                            {currentIndex === questions.length - 1
                              ? "Click 'Submit Quiz' to finish and see your results."
                              : "Click 'Next' to move to the next question."}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-end pt-4 border-t border-gray-100">
                        {currentIndex === questions.length - 1 ? (
                          <button
                            onClick={handleFinalSubmit}
                            className="flex items-center gap-2 px-6 py-2.5 bg-green-600 rounded text-white font-medium hover:bg-green-700 transition-colors shadow-sm"
                          >
                            Submit Quiz <Check size={18} strokeWidth={3} />
                          </button>
                        ) : (
                          <button
                            onClick={handleNextQuestion}
                            className="flex items-center gap-2 px-6 py-2.5 bg-blue-700 rounded text-white font-medium hover:bg-blue-800 transition-colors"
                          >
                            Next <ArrowRight size={18} />
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Palette & Stats */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                {/* Palette */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                  <h3 className="text-[#1e293b] font-bold mb-4">Question Palette</h3>
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-600 shrink-0" />
                      <span className="text-sm text-gray-600">Answered</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full border border-gray-300 shrink-0" />
                      <span className="text-sm text-gray-600">Not Answered</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-600 shrink-0" />
                      <span className="text-sm text-gray-600">Current</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {questions.map((_, i) => {
                      const num = i + 1;
                      const isAnswered = submitted[i];
                      const isCurrent = i === currentIndex;
                      let btnStateClass = "bg-white text-gray-600 border-gray-200 hover:bg-gray-50";

                      if (isCurrent) {
                        btnStateClass = "bg-green-600 text-white border-green-600";
                      } else if (isAnswered) {
                        btnStateClass = "bg-blue-600 text-white border-blue-600";
                      }

                      return (
                        <button
                          key={num}
                          onClick={() => handleGoToQuestion(i)}
                          className={clsx(
                            "h-10 w-full flex items-center justify-center rounded border text-sm font-medium transition-colors",
                            btnStateClass
                          )}
                        >
                          {num}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Overview */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                  <h3 className="text-[#1e293b] font-bold mb-4">Quiz Overview</h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Total Questions</span>
                      <span className="font-semibold text-gray-900">{questions.length}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Answered</span>
                      <span className="font-semibold text-gray-900">{answeredCount}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Not Answered</span>
                      <span className="font-semibold text-gray-900">
                        {questions.length - answeredCount}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Time Left</span>
                      <span className="font-semibold text-gray-900">{formattedTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WSDDashboardMainBodyContainer>
      </WSDDashboardBase>

      {/* DIALOGS */}
      {activeDialog === DIALOGS.QUIZZES && (
        <WSDOverlayWrapper className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <QuizzesDialog onClose={() => setActiveDialog(null)} />
        </WSDOverlayWrapper>
      )}
    </WSDDashboardLayout>
  );
}

export default Quizzes;
