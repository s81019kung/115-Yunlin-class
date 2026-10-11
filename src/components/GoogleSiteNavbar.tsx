import React from 'react';
import { BookOpen, GraduationCap, Users, FileText, CheckCircle2, Bookmark, Code, Search } from 'lucide-react';
import { LearningProgressBadge } from './LearningProgressBadge';

interface NavbarProps {
  currentTab: 'chapters' | 'scholars' | 'mock-exam' | 'wrong-questions' | 'gas-code';
  setCurrentTab: (tab: 'chapters' | 'scholars' | 'mock-exam' | 'wrong-questions' | 'gas-code') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  wrongCount: number;
  completedChapterIds: number[];
  totalChapters: number;
  totalWrongEncountered: number;
}

export const GoogleSiteNavbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  searchQuery,
  setSearchQuery,
  wrongCount,
  completedChapterIds,
  totalChapters,
  totalWrongEncountered
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Google Sites Upper Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3 sm:gap-4">
          {/* Brand & Course Identity */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-xs shrink-0">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] sm:text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                  靜宜大學 115雲林班
                </span>
                <span className="text-xs text-slate-500 hidden md:inline">
                  授課教師：胡憶蓓副教授
                </span>
              </div>
              <h1 className="text-sm sm:text-lg font-bold text-slate-900 tracking-tight leading-tight line-clamp-1">
                教學原理 · 歷屆考古題與 Google 表單測驗站
              </h1>
            </div>
          </div>

          {/* Quick Search */}
          <div className="hidden lg:flex items-center flex-1 max-w-xs relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="搜尋學者、理論、章節或考題..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-100 border border-transparent rounded-lg focus:bg-white focus:border-indigo-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Top Right Action & Learning Progress Circular Badge */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Circular Progress Badge */}
            <LearningProgressBadge
              completedChapterIds={completedChapterIds}
              totalChapters={totalChapters}
              totalWrongEncountered={totalWrongEncountered}
              remainingWrongCount={wrongCount}
              onGoToWrongQuestions={() => setCurrentTab('wrong-questions')}
              onGoToChapters={() => setCurrentTab('chapters')}
            />

            <button
              onClick={() => setCurrentTab('gas-code')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors whitespace-nowrap"
            >
              <Code className="w-3.5 h-3.5" />
              <span>匯出 Google 表單代碼</span>
            </button>
          </div>
        </div>

        {/* Google Sites Tab Navigation Bar */}
        <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1 border-t border-slate-100 text-xs font-medium">
          <button
            onClick={() => setCurrentTab('chapters')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md whitespace-nowrap transition-colors ${
              currentTab === 'chapters'
                ? 'bg-indigo-50 text-indigo-700 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>14 章節表單目錄</span>
          </button>

          <button
            onClick={() => setCurrentTab('scholars')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md whitespace-nowrap transition-colors ${
              currentTab === 'scholars'
                ? 'bg-indigo-50 text-indigo-700 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>教育學者理論索引</span>
          </button>

          <button
            onClick={() => setCurrentTab('mock-exam')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md whitespace-nowrap transition-colors ${
              currentTab === 'mock-exam'
                ? 'bg-indigo-50 text-indigo-700 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>全真模擬檢定考</span>
          </button>

          <button
            onClick={() => setCurrentTab('wrong-questions')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md whitespace-nowrap transition-colors relative ${
              currentTab === 'wrong-questions'
                ? 'bg-indigo-50 text-indigo-700 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>個人錯題複習本</span>
            {wrongCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 bg-rose-500 text-white text-[10px] rounded-full font-bold">
                {wrongCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setCurrentTab('gas-code')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md whitespace-nowrap transition-colors ${
              currentTab === 'gas-code'
                ? 'bg-indigo-50 text-indigo-700 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Google Apps Script 產生器</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
