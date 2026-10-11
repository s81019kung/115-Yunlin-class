import React, { useState, useRef, useEffect } from 'react';
import { Award, CheckCircle2, AlertCircle, ChevronDown, BookOpen, ArrowRight } from 'lucide-react';

interface LearningProgressProps {
  completedChapterIds: number[];
  totalChapters: number;
  totalWrongEncountered: number;
  remainingWrongCount: number;
  onGoToWrongQuestions: () => void;
  onGoToChapters: () => void;
}

export const LearningProgressBadge: React.FC<LearningProgressProps> = ({
  completedChapterIds,
  totalChapters,
  totalWrongEncountered,
  remainingWrongCount,
  onGoToWrongQuestions,
  onGoToChapters
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const completedCount = completedChapterIds.length;
  const quizPercent = Math.min(100, Math.round((completedCount / (totalChapters || 1)) * 100));

  // Mastery rate: (Resolved wrong / Total wrong encountered)
  const resolvedWrongCount = Math.max(0, totalWrongEncountered - remainingWrongCount);
  const masteryPercent =
    totalWrongEncountered > 0
      ? Math.min(100, Math.round((resolvedWrongCount / totalWrongEncountered) * 100))
      : 100;

  // SVG circular calculations
  const size = 40;
  const strokeWidth = 3.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (quizPercent / 100) * circumference;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Badge Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 p-1.5 sm:px-3 sm:py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-xl transition-all cursor-pointer group text-left shadow-2xs"
        title="點擊查看本月學習進度與錯題攻堅詳情"
      >
        {/* SVG Circular Progress Ring */}
        <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
          <svg className="w-9 h-9 -rotate-90 transform" viewBox={`0 0 ${size} ${size}`}>
            {/* Background Track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              className="text-slate-200"
              fill="transparent"
            />
            {/* Active Quiz Completion Ring */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="text-indigo-600 transition-all duration-500 ease-out"
              fill="transparent"
            />
          </svg>
          <span className="absolute text-[10px] font-bold text-indigo-700 tabular-nums">
            {quizPercent}%
          </span>
        </div>

        {/* Labels on Desktop */}
        <div className="hidden sm:flex flex-col text-left leading-tight pr-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold text-slate-800">
              本月測驗：{completedCount}/{totalChapters}
            </span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-slate-500">
            <span>錯題攻堅：</span>
            <span
              className={`font-semibold ${
                remainingWrongCount === 0 ? 'text-emerald-600' : 'text-amber-600'
              }`}
            >
              {remainingWrongCount === 0 ? '全部清空' : `${masteryPercent}%`}
            </span>
          </div>
        </div>

        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Popover */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 z-50 animate-fadeIn space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-indigo-600" />
              <h4 className="text-xs font-bold text-slate-900">
                本月學習進度總覽（115雲林班）
              </h4>
            </div>
            <span className="text-[10px] text-slate-400 font-medium">即時統計</span>
          </div>

          {/* Metric 1: Monthly Quiz Completion */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">已完成章節測驗</span>
              <span className="font-bold text-indigo-700 tabular-nums">
                {completedCount} / {totalChapters} 章 ({quizPercent}%)
              </span>
            </div>
            {/* Linear Progress Bar */}
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${quizPercent}%` }}
              />
            </div>
            {/* Mini Chapter Dot Map */}
            <div className="flex items-center justify-between gap-1 pt-1">
              {Array.from({ length: totalChapters }, (_, i) => i + 1).map((chNum) => {
                const isDone = completedChapterIds.includes(chNum);
                return (
                  <span
                    key={chNum}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      isDone ? 'bg-indigo-600' : 'bg-slate-200'
                    }`}
                    title={`第 ${chNum} 章：${isDone ? '已完成' : '待測驗'}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Metric 2: Wrong Questions Mastery Progress */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">錯題攻堅與掌握率</span>
              <span className="font-bold text-emerald-700 tabular-nums">
                {masteryPercent}%
              </span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${masteryPercent}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
              <span>累計錯題：{totalWrongEncountered} 題</span>
              <span className={remainingWrongCount > 0 ? 'text-amber-600 font-medium' : 'text-emerald-600'}>
                待攻堅：{remainingWrongCount} 題
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            {remainingWrongCount > 0 ? (
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onGoToWrongQuestions();
                }}
                className="w-full py-1.5 px-3 bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-medium rounded-lg transition-colors flex items-center justify-between"
              >
                <span>立即攻堅剩餘 {remainingWrongCount} 道錯題</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-800 text-[11px] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>所有錯題均已攻堅掌握，保持精熟狀態！</span>
              </div>
            )}

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onGoToChapters();
              }}
              className="w-full py-1.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors flex items-center justify-between"
            >
              <span>瀏覽 14 章節進度表單</span>
              <BookOpen className="w-3.5 h-3.5 text-slate-500" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
