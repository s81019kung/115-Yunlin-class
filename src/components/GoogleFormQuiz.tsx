import React, { useState } from 'react';
import { Chapter, Question } from '../types';
import { SCHOLARS_DATA } from '../data/scholarsData';
import { CheckCircle2, XCircle, ArrowLeft, RotateCcw, Award, Code, BookOpen, Share2 } from 'lucide-react';

interface GoogleFormQuizProps {
  chapter: Chapter;
  questions: Question[];
  onBack: () => void;
  onOpenGasModal: (chapter: Chapter) => void;
  onRecordWrongQuestion: (question: Question) => void;
  onQuizCompleted?: (chapterId: number, score: number, totalQuestions: number) => void;
}

export const GoogleFormQuiz: React.FC<GoogleFormQuizProps> = ({
  chapter,
  questions,
  onBack,
  onOpenGasModal,
  onRecordWrongQuestion,
  onQuizCompleted
}) => {
  const [studentName, setStudentName] = useState<string>('學員（115雲林班）');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showAnswerKeys, setShowAnswerKeys] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const themeColor = chapter.googleFormColor || '#673AB7';

  // Calculate score
  const totalQuestions = questions.length;
  const pointsPerQuestion = Math.round(100 / (totalQuestions || 1));
  const correctCount = questions.filter(
    (q) => selectedAnswers[q.id] === q.correctAnswer
  ).length;
  const calculatedScore = Math.round((correctCount / totalQuestions) * 100);

  const handleSelectOption = (questionId: string, optionKey: 'A' | 'B' | 'C' | 'D') => {
    if (isSubmitted && showAnswerKeys) return; // Locked when reviewing
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionKey
    }));
    setValidationError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate if any questions unanswered
    const unanswered = questions.filter((q) => !selectedAnswers[q.id]);
    if (unanswered.length > 0) {
      setValidationError(`尚有 ${unanswered.length} 題尚未作答，請完成所有題目後再行提交！`);
      // Scroll to the first unanswered
      const el = document.getElementById(unanswered[0].id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Record wrong questions
    questions.forEach((q) => {
      if (selectedAnswers[q.id] !== q.correctAnswer) {
        onRecordWrongQuestion(q);
      }
    });

    if (chapter.id >= 1 && chapter.id <= 14) {
      onQuizCompleted?.(chapter.id, calculatedScore, totalQuestions);
    }

    setIsSubmitted(true);
    setShowAnswerKeys(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setShowAnswerKeys(false);
    setValidationError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getScholarName = (scholarId?: string) => {
    if (!scholarId) return null;
    const s = SCHOLARS_DATA.find((item) => item.id === scholarId);
    return s ? `${s.name} (${s.enName})` : scholarId;
  };

  return (
    <div className="min-h-screen bg-slate-100 py-6 px-3 sm:px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Navigation Action Bar */}
        <div className="flex items-center justify-between text-xs text-slate-600 bg-white p-3 rounded-xl shadow-xs border border-slate-200">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回章節目錄</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenGasModal(chapter)}
              className="flex items-center gap-1 px-2.5 py-1 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-md font-medium transition-colors"
            >
              <Code className="w-3.5 h-3.5" />
              <span>產生 Google Apps Script</span>
            </button>
          </div>
        </div>

        {/* 1. Google Forms Header Card */}
        <div className="bg-white rounded-xl shadow-xs overflow-hidden border border-slate-200">
          {/* Top Google Forms Color Strip */}
          <div
            className="h-3 w-full"
            style={{ backgroundColor: themeColor }}
          />

          <div className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded">
                靜宜大學 115雲林班 · 教學原理
              </span>
              <span className="text-xs text-slate-500">
                講義進度：{chapter.pageRange}
              </span>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {chapter.title} - 考古題自我評量表單
              </h1>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {chapter.subtitle}。本表單匯聚歷屆教育部教師資格考試（教檢）與各縣市公立國小/中等學校教師甄選（教甄）真題，完成提交後將立即給予成績報告並提供完整的學者理論解析。
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
              <div>授課教師：胡憶蓓副教授</div>
              <div>·</div>
              <div>總分：100 分（共 {totalQuestions} 題）</div>
              <div>·</div>
              <div className="text-rose-600 font-medium">* 為必填問題</div>
            </div>
          </div>
        </div>

        {/* 2. Post-Submit Confirmation View */}
        {isSubmitted && !showAnswerKeys && (
          <div className="bg-white rounded-xl shadow-xs p-8 text-center space-y-6 border border-slate-200 animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900">
                您的作答已成功記錄！
              </h2>
              <p className="text-sm text-slate-600">
                恭喜學員完成 {chapter.title} 測驗。您可以立即查看作答成果、各題得分以及胡老師講義與教育學者理論解析。
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl max-w-sm mx-auto border border-slate-200">
              <div className="text-xs text-slate-500">總體測驗得分</div>
              <div className="text-4xl font-extrabold text-indigo-600 my-1">
                {calculatedScore} <span className="text-lg font-normal text-slate-400">/ 100</span>
              </div>
              <div className="text-xs text-slate-600">
                答對 {correctCount} 題，答錯 {totalQuestions - correctCount} 題
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setShowAnswerKeys(true)}
                className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition-colors shadow-xs"
              >
                查看作答結果與答案解析
              </button>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors"
              >
                再次提交作答
              </button>
            </div>
          </div>
        )}

        {/* 3. Review Mode Score Banner */}
        {isSubmitted && showAnswerKeys && (
          <div className="bg-indigo-900 text-white rounded-xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-indigo-200 text-xs font-medium">測驗結果總評</div>
              <div className="text-2xl font-bold mt-1">
                得分：{calculatedScore} / 100 分
              </div>
              <div className="text-xs text-indigo-200 mt-1">
                正確率：{Math.round((correctCount / totalQuestions) * 100)}% (答對 {correctCount}/{totalQuestions} 題)
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-4 py-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg text-xs font-medium transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>重新作答</span>
              </button>
              <button
                onClick={() => onOpenGasModal(chapter)}
                className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-medium transition-colors"
              >
                <Code className="w-3.5 h-3.5" />
                <span>匯出此表單 GAS 代碼</span>
              </button>
            </div>
          </div>
        )}

        {/* 4. Student Name Input Card */}
        {(!isSubmitted || showAnswerKeys) && (
          <div className="bg-white rounded-xl shadow-xs p-6 border border-slate-200">
            <label className="block text-sm font-semibold text-slate-800">
              姓名 / 學員代號 <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              disabled={isSubmitted && showAnswerKeys}
              placeholder="請輸入您的姓名"
              className="mt-3 w-full max-w-sm px-3 py-2 text-sm border-b-2 border-slate-300 focus:border-indigo-600 focus:outline-none bg-transparent transition-colors disabled:text-slate-500"
            />
          </div>
        )}

        {/* 5. Questions Form List */}
        {(!isSubmitted || showAnswerKeys) && (
          <form onSubmit={handleSubmit} className="space-y-4">
            {questions.map((q, idx) => {
              const selected = selectedAnswers[q.id];
              const isCorrect = selected === q.correctAnswer;
              const scholarName = getScholarName(q.scholarId);

              return (
                <div
                  key={q.id}
                  id={q.id}
                  className={`bg-white rounded-xl shadow-xs p-6 border transition-all ${
                    showAnswerKeys
                      ? isCorrect
                        ? 'border-emerald-300 bg-emerald-50/20'
                        : 'border-rose-300 bg-rose-50/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="font-bold text-slate-700">
                          第 {idx + 1} 題
                        </span>
                        <span className="text-slate-400">·</span>
                        <span className="text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-medium">
                          {q.topic}
                        </span>
                        {scholarName && (
                          <>
                            <span className="text-slate-400">·</span>
                            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                              {scholarName}
                            </span>
                          </>
                        )}
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-500">
                          {q.examSource}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-medium text-slate-900 pt-1 leading-snug">
                        {q.questionText}
                      </h3>
                    </div>

                    {/* Review mode correct/incorrect badge */}
                    {showAnswerKeys && (
                      <div className="shrink-0 pt-1">
                        {isCorrect ? (
                          <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold bg-emerald-100 px-2.5 py-1 rounded-full">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>答對 (+{pointsPerQuestion}分)</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-rose-600 text-xs font-semibold bg-rose-100 px-2.5 py-1 rounded-full">
                            <XCircle className="w-4 h-4" />
                            <span>答錯 (0分)</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Options */}
                  <div className="mt-4 space-y-2.5">
                    {q.options.map((option) => {
                      const isOptionSelected = selected === option.key;
                      const isThisCorrect = q.correctAnswer === option.key;

                      let optionStyle = 'hover:bg-slate-50 border-slate-200';
                      if (showAnswerKeys) {
                        if (isThisCorrect) {
                          optionStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold';
                        } else if (isOptionSelected && !isCorrect) {
                          optionStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                        } else {
                          optionStyle = 'opacity-60 border-slate-200';
                        }
                      } else if (isOptionSelected) {
                        optionStyle = 'bg-indigo-50/60 border-indigo-400 text-indigo-900 font-medium';
                      }

                      return (
                        <label
                          key={option.key}
                          onClick={() => handleSelectOption(q.id, option.key)}
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${optionStyle}`}
                        >
                          <input
                            type="radio"
                            name={`question-${q.id}`}
                            value={option.key}
                            checked={isOptionSelected}
                            disabled={showAnswerKeys}
                            onChange={() => handleSelectOption(q.id, option.key)}
                            className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300"
                          />
                          <div className="flex-1 text-sm text-slate-800">
                            <span className="font-semibold mr-1.5 text-slate-600">
                              ({option.key})
                            </span>
                            {option.text}
                          </div>
                          {showAnswerKeys && isThisCorrect && (
                            <span className="text-xs font-bold text-emerald-600 shrink-0">
                              ✓ 正確解答
                            </span>
                          )}
                          {showAnswerKeys && isOptionSelected && !isCorrect && (
                            <span className="text-xs font-bold text-rose-600 shrink-0">
                              ✗ 你的作答
                            </span>
                          )}
                        </label>
                      );
                    })}
                  </div>

                  {/* Review Mode: Detailed Explanation and Handout Reference */}
                  {showAnswerKeys && (
                    <div className="mt-5 pt-4 border-t border-slate-200 space-y-2 bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-indigo-800 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          【考點精析與詳解】
                        </span>
                        <span className="text-slate-500">
                          {q.handoutRef}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Validation Error Banner */}
            {validationError && (
              <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-sm flex items-center gap-2">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Submit Action Card */}
            {!showAnswerKeys && (
              <div className="bg-white rounded-xl shadow-xs p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  已完成作答：
                  <span className="font-bold text-slate-900 mx-1">
                    {Object.keys(selectedAnswers).length}
                  </span>
                  / {totalQuestions} 題
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    清除表單
                  </button>
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-8 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors"
                  >
                    提交表單
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
