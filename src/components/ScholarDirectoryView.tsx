import React, { useState } from 'react';
import { Scholar, Question, Chapter } from '../types';
import { SCHOLARS_DATA } from '../data/scholarsData';
import { CHAPTERS_DATA } from '../data/chaptersData';
import { Users, BookOpen, Quote, ChevronRight, Play } from 'lucide-react';

interface ScholarDirectoryViewProps {
  questions: Question[];
  onStartCustomQuiz: (title: string, subtitle: string, questions: Question[]) => void;
  searchQuery: string;
}

export const ScholarDirectoryView: React.FC<ScholarDirectoryViewProps> = ({
  questions,
  onStartCustomQuiz,
  searchQuery
}) => {
  const [selectedScholarId, setSelectedScholarId] = useState<string>('piaget');

  const filteredScholars = SCHOLARS_DATA.filter((s) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.enName.toLowerCase().includes(q) ||
      s.majorTheory.toLowerCase().includes(q) ||
      s.coreConcepts.some((c) => c.toLowerCase().includes(q))
    );
  });

  const activeScholar = SCHOLARS_DATA.find((s) => s.id === selectedScholarId) || SCHOLARS_DATA[0];

  const scholarQuestions = questions.filter((q) => q.scholarId === activeScholar.id);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              歷代教育學者理論全覽與專題考古題庫
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              根據胡憶蓓老師講義彙整，精選教檢教甄高頻考點學者，點選學者即可研讀核心理論並進行專屬題目測驗
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Scholar Selector List */}
        <div className="lg:col-span-4 space-y-2 max-h-[750px] overflow-y-auto pr-1">
          {filteredScholars.map((scholar) => {
            const count = questions.filter((q) => q.scholarId === scholar.id).length;
            const isSelected = scholar.id === activeScholar.id;

            return (
              <button
                key={scholar.id}
                onClick={() => setSelectedScholarId(scholar.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-indigo-50/70 border-indigo-400 text-indigo-900 shadow-2xs'
                    : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="min-w-0 pr-2">
                  <div className="font-bold text-sm truncate flex items-center gap-1.5">
                    <span>{scholar.name}</span>
                    <span className="text-xs font-normal text-slate-400">
                      {scholar.enName}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 truncate mt-0.5">
                    {scholar.majorTheory}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-[10px] font-semibold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full">
                    {count} 題
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 ${
                      isSelected ? 'text-indigo-600' : 'text-slate-300'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Active Scholar Deep Dive & Questions */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs space-y-4">
            {/* Header info */}
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {activeScholar.name}
                  </h3>
                  <span className="text-sm font-medium text-slate-400">
                    {activeScholar.enName}
                  </span>
                </div>
                <div className="text-xs text-indigo-700 font-semibold mt-1">
                  {activeScholar.majorTheory}
                </div>
                {activeScholar.period && (
                  <div className="text-xs text-slate-400 mt-0.5">
                    {activeScholar.period}
                  </div>
                )}
              </div>

              {scholarQuestions.length > 0 && (
                <button
                  onClick={() =>
                    onStartCustomQuiz(
                      `${activeScholar.name} 理論專題評量`,
                      `${activeScholar.majorTheory} · 歷屆教檢教甄真題測驗`,
                      scholarQuestions
                    )
                  }
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-2xs transition-colors"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>測驗此學者真題 ({scholarQuestions.length}題)</span>
                </button>
              )}
            </div>

            {/* Quote */}
            {activeScholar.quoteOrSignature && (
              <div className="p-3 bg-amber-50/50 rounded-lg border border-amber-200/50 flex items-start gap-2.5 text-xs text-amber-900">
                <Quote className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p className="italic font-medium">{activeScholar.quoteOrSignature}</p>
              </div>
            )}

            {/* Description */}
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeScholar.description}
            </div>

            {/* Core Concepts */}
            <div>
              <div className="text-xs font-bold text-slate-700 mb-1.5">
                關鍵學術概念與考點標籤：
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeScholar.coreConcepts.map((concept, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Chapters */}
            <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
              <span>對應講義章節：</span>
              {activeScholar.relatedChapters.map((chId) => {
                const ch = CHAPTERS_DATA.find((c) => c.id === chId);
                return (
                  <span
                    key={chId}
                    className="font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded text-[11px]"
                  >
                    第 {chId} 章 ({ch?.pageRange})
                  </span>
                );
              })}
            </div>
          </div>

          {/* Scholar Questions Preview List */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-800 flex items-center justify-between">
              <span>{activeScholar.name} 歷年考題精選 ({scholarQuestions.length} 題)</span>
              <span className="text-xs text-slate-400 font-normal">
                含答案與詳解分析
              </span>
            </h4>

            {scholarQuestions.length === 0 ? (
              <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-xs text-slate-400">
                目前此學者之題目包含在綜合章節考題中，請至章節表單進行全單元測驗。
              </div>
            ) : (
              scholarQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  className="bg-white rounded-xl border border-slate-200 p-5 space-y-3"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-indigo-600">
                      題目 #{idx + 1} · {q.topic}
                    </span>
                    <span className="text-slate-400">{q.examSource}</span>
                  </div>

                  <p className="text-sm font-medium text-slate-900 leading-snug">
                    {q.questionText}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt) => (
                      <div
                        key={opt.key}
                        className={`p-2 rounded border text-slate-700 ${
                          opt.key === q.correctAnswer
                            ? 'bg-emerald-50 border-emerald-300 font-medium text-emerald-900'
                            : 'border-slate-100 bg-slate-50/50'
                        }`}
                      >
                        <span className="font-semibold mr-1">({opt.key})</span>
                        {opt.text}
                        {opt.key === q.correctAnswer && (
                          <span className="text-[10px] text-emerald-600 ml-1 font-bold">
                            (正解)
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 border border-slate-100">
                    <span className="font-semibold text-slate-700 mr-1">
                      【解析】：
                    </span>
                    {q.explanation}
                    <div className="text-[11px] text-slate-400 mt-1">
                      出處：{q.handoutRef}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
