import React, { useState } from 'react';
import { Chapter, Question } from '../types';
import { SCHOLARS_DATA } from '../data/scholarsData';
import { BookOpen, Play, Code, ChevronDown, ChevronUp, FileQuestion, Sparkles, CheckCircle2 } from 'lucide-react';
import { LearningDashboard } from './LearningDashboard';

interface ChapterListViewProps {
  chapters: Chapter[];
  questions: Question[];
  onStartQuiz: (chapter: Chapter) => void;
  onOpenGasModal: (chapter: Chapter) => void;
  searchQuery: string;
  completedChapterIds: number[];
  totalWrongEncountered: number;
  remainingWrongCount: number;
  onGoToWrongQuestions?: () => void;
}

export const ChapterListView: React.FC<ChapterListViewProps> = ({
  chapters,
  questions,
  onStartQuiz,
  onOpenGasModal,
  searchQuery,
  completedChapterIds,
  totalWrongEncountered,
  remainingWrongCount,
  onGoToWrongQuestions
}) => {
  const [expandedChapterId, setExpandedChapterId] = useState<number | null>(null);

  const getChapterQuestionsCount = (chapterId: number) => {
    return questions.filter((q) => q.chapterId === chapterId).length;
  };

  const getScholarName = (scholarId: string) => {
    const s = SCHOLARS_DATA.find((item) => item.id === scholarId);
    return s ? s.name : scholarId;
  };

  const filteredChapters = chapters.filter((c) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    const titleMatch = c.title.toLowerCase().includes(q) || c.subtitle.toLowerCase().includes(q);
    const keywordMatch = c.coreKeywords.some((k) => k.toLowerCase().includes(q));
    const scholarMatch = c.scholars.some((s) => {
      const scholar = SCHOLARS_DATA.find((sc) => sc.id === s);
      return (
        scholar &&
        (scholar.name.toLowerCase().includes(q) ||
          scholar.enName.toLowerCase().includes(q))
      );
    });
    return titleMatch || keywordMatch || scholarMatch;
  });

  return (
    <div className="space-y-6">
      {/* Course Banner Card */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-xs rounded-full text-xs font-semibold text-indigo-200">
            <span>靜宜大學 115學年度偏遠地區學校學士後教育學分班</span>
            <span>·</span>
            <span>115雲林班</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            教學原理 歷屆考古題與 Google 表單分類測驗站
          </h2>

          <p className="text-sm text-indigo-100/90 leading-relaxed">
            依據胡憶蓓副教授編印之《教學原理》課程講義全部 14 個章節進度，精確彙整中外教育學者理論（蘇格拉底、桑代克、史金納、皮亞傑、布魯納、奧斯貝、維高斯基、馬斯洛、羅吉斯、杜威、柯爾保、凱勒等），每章節均提供一對一 Google 表單模擬測驗、即時作答回饋、學者理論詳解及一鍵產生 Google Forms 程式碼。
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-indigo-200 font-medium border-t border-white/10">
            <div>全書章節：共 14 章全收錄</div>
            <div>·</div>
            <div>考古試題：收錄教育部教檢與縣市教甄真題</div>
            <div>·</div>
            <div>支援功能：Google 表單填答 + 答案詳解 + Apps Script 匯出</div>
          </div>
        </div>
      </div>

      {/* Visual Learning Dashboard with Recharts */}
      <LearningDashboard
        completedChapterIds={completedChapterIds}
        totalChapters={chapters.length}
        totalWrongEncountered={totalWrongEncountered}
        remainingWrongCount={remainingWrongCount}
        chapters={chapters}
        questions={questions}
        onStartQuiz={onStartQuiz}
        onGoToWrongQuestions={onGoToWrongQuestions}
      />

      {/* Chapters Ordered List Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            全部章節 Google 表單測驗列表（共 14 章）
          </h3>
          <p className="text-xs text-slate-500">
            依講義目錄順序完整排序，點選即可開啟該章節 Google 表單互動測驗
          </p>
        </div>
        <div className="text-xs font-medium text-slate-500">
          顯示 {filteredChapters.length} / 14 個章節
        </div>
      </div>

      {/* Chapter Cards Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredChapters.map((chapter) => {
          const qCount = getChapterQuestionsCount(chapter.id);
          const isExpanded = expandedChapterId === chapter.id;
          const isCompleted = completedChapterIds.includes(chapter.id);

          return (
            <div
              key={chapter.id}
              className={`bg-white rounded-xl border transition-all overflow-hidden ${
                isCompleted
                  ? 'border-emerald-200/90 shadow-xs ring-1 ring-emerald-500/10'
                  : 'border-slate-200 shadow-2xs hover:shadow-xs'
              }`}
            >
              <div className="p-5 sm:p-6 space-y-3">
                {/* Chapter Metadata & Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                        isCompleted
                          ? 'bg-emerald-600 text-white'
                          : 'bg-indigo-50 text-indigo-700'
                      }`}
                    >
                      {chapter.id}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {chapter.pageRange}
                    </span>
                    {isCompleted ? (
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        本月已測驗
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                        待測驗
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <FileQuestion className="w-3 h-3" />
                      {qCount} 題考古真題
                    </span>
                  </div>
                </div>

                {/* Chapter Title & Description */}
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer"
                    onClick={() => onStartQuiz(chapter)}
                  >
                    {chapter.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 line-clamp-2">
                    {chapter.description}
                  </p>
                </div>

                {/* Scholars & Keywords */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="text-slate-400 font-medium">重點學者：</span>
                  {chapter.scholars.map((sId) => (
                    <span
                      key={sId}
                      className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[11px] font-medium"
                    >
                      {getScholarName(sId)}
                    </span>
                  ))}
                  <span className="text-slate-400 ml-1">·</span>
                  <span className="text-slate-400 font-medium">核心概念：</span>
                  {chapter.coreKeywords.slice(0, 4).map((kw, idx) => (
                    <span
                      key={idx}
                      className="text-slate-500 text-[11px]"
                    >
                      {kw}{idx < 3 ? '、' : ''}
                    </span>
                  ))}
                </div>

                {/* Collapsible Lecture Highlights */}
                {isExpanded && (
                  <div className="mt-3 p-4 bg-slate-50 rounded-lg border border-slate-100 space-y-2 animate-fadeIn text-xs text-slate-700">
                    <div className="font-semibold text-indigo-800 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      講義重點摘要與上課筆記精華：
                    </div>
                    <ul className="space-y-1.5 list-disc list-inside text-slate-600 leading-relaxed">
                      {chapter.lectureHighlights.map((hl, idx) => (
                        <li key={idx}>{hl}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() =>
                      setExpandedChapterId(isExpanded ? null : chapter.id)
                    }
                    className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    <span>{isExpanded ? '收合重點筆記' : '展開講義筆記'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenGasModal(chapter)}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors"
                      title="產生可用於 Google Drive 快速自動建立表單的 Apps Script"
                    >
                      <Code className="w-3.5 h-3.5" />
                      <span>產生 Google 表單代碼</span>
                    </button>

                    <button
                      onClick={() => onStartQuiz(chapter)}
                      className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-2xs transition-colors"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>以 Google 表單測驗</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
