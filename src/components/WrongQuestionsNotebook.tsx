import React, { useState } from 'react';
import { Question } from '../types';
import { CHAPTERS_DATA } from '../data/chaptersData';
import { Bookmark, CheckCircle2, RotateCcw, Trash2, BookOpen, AlertCircle } from 'lucide-react';

interface WrongQuestionsNotebookProps {
  wrongQuestions: Question[];
  onRemoveQuestion: (questionId: string) => void;
  onClearAll: () => void;
  onStartPractice: (questions: Question[]) => void;
}

export const WrongQuestionsNotebook: React.FC<WrongQuestionsNotebookProps> = ({
  wrongQuestions,
  onRemoveQuestion,
  onClearAll,
  onStartPractice
}) => {
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  const toggleReveal = (qId: string) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const getChapterTitle = (chapterId: number) => {
    const ch = CHAPTERS_DATA.find((c) => c.id === chapterId);
    return ch ? ch.title : `第 ${chapterId} 章`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
            <Bookmark className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              個人錯題本與盲點複習
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              自動蒐集在各章節 Google 表單測驗中答錯的題目，進行重點重溫與理論釐清
            </p>
          </div>
        </div>

        {wrongQuestions.length > 0 && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => onStartPractice(wrongQuestions)}
              className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-2xs transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>以錯題重組 Google 表單測驗 ({wrongQuestions.length} 題)</span>
            </button>
            <button
              onClick={onClearAll}
              className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors text-xs"
              title="清空錯題本"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Empty State */}
      {wrongQuestions.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-xl border border-slate-200 space-y-3">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-800 text-base">目前沒有記錄任何錯題</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            太棒了！只要在各章節的 Google 表單中作答，系統就會自動將尚未精熟的題目收錄至此處，方便您在考前集中衝刺。
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {wrongQuestions.map((q, idx) => {
            const isRevealed = revealedAnswers[q.id];

            return (
              <div
                key={q.id}
                className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-3 relative"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-bold text-rose-600">
                        錯題 #{idx + 1}
                      </span>
                      <span className="text-slate-400">·</span>
                      <span className="text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-medium">
                        {getChapterTitle(q.chapterId)}
                      </span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-600 font-medium">
                        {q.topic}
                      </span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-400">{q.examSource}</span>
                    </div>

                    <h4 className="text-base font-medium text-slate-900 pt-1 leading-snug">
                      {q.questionText}
                    </h4>
                  </div>

                  <button
                    onClick={() => onRemoveQuestion(q.id)}
                    className="text-slate-300 hover:text-rose-500 transition-colors p-1"
                    title="已掌握，從錯題本移除"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  {q.options.map((opt) => (
                    <div
                      key={opt.key}
                      className={`p-2.5 rounded-lg border ${
                        isRevealed && opt.key === q.correctAnswer
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="font-semibold mr-1.5">({opt.key})</span>
                      {opt.text}
                      {isRevealed && opt.key === q.correctAnswer && (
                        <span className="ml-1 text-emerald-600 font-bold">
                          ✓ 正確答案
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Toggle Answer & Explanation */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => toggleReveal(q.id)}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    {isRevealed ? '隱藏答案與解析' : '查看正確答案與講義解析'}
                  </button>

                  <span className="text-xs text-slate-400">
                    出處：{q.handoutRef}
                  </span>
                </div>

                {isRevealed && (
                  <div className="p-3.5 bg-slate-50 rounded-lg text-xs text-slate-700 border border-slate-200 space-y-1 animate-fadeIn">
                    <div className="font-semibold text-indigo-800 flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      【詳解與理論依據】
                    </div>
                    <p className="leading-relaxed">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
