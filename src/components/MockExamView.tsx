import React, { useState } from 'react';
import { Question, Chapter } from '../types';
import { CHAPTERS_DATA } from '../data/chaptersData';
import { CheckCircle2, Clock, Play, Award, RotateCcw, AlertTriangle, BookOpen } from 'lucide-react';

interface MockExamViewProps {
  allQuestions: Question[];
  onStartExam: (questions: Question[]) => void;
}

export const MockExamView: React.FC<MockExamViewProps> = ({
  allQuestions,
  onStartExam
}) => {
  const [selectedCount, setSelectedCount] = useState<number>(20);
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');

  const handleLaunch = () => {
    let pool = [...allQuestions];
    if (filterDifficulty !== 'all') {
      pool = pool.filter((q) => q.difficulty === filterDifficulty);
    }
    // Shuffle
    const shuffled = pool.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(selectedCount, pool.length));
    onStartExam(selected);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              教學原理 全真綜合模擬測驗（教檢 / 教甄考題）
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              跨 14 章節隨機抽題，全方位檢測教育學者理論概念的統整與綜合應用能力
            </p>
          </div>
        </div>

        {/* Configuration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <label className="block text-xs font-bold text-slate-700">
              選擇抽題題數
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[15, 25, 50, allQuestions.length].map((cnt) => (
                <button
                  key={cnt}
                  type="button"
                  onClick={() => setSelectedCount(cnt)}
                  className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                    selectedCount === cnt
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cnt === allQuestions.length ? `全題庫 (${cnt})` : `${cnt} 題`}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-500">
              題庫現有教育部檢定與各縣市教師甄選真題共 {allQuestions.length} 題
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <label className="block text-xs font-bold text-slate-700">
              試題難易度過濾
            </label>
            <select
              value={filterDifficulty}
              onChange={(e) => setFilterDifficulty(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium text-slate-800"
            >
              <option value="all">全難度混合抽題（真實大考配比）</option>
              <option value="基礎">基礎觀念題（必拿分考點）</option>
              <option value="中等">中等鑑別題（情境應用與理論辨析）</option>
              <option value="進階">進階高難題（學者專屬歷程與爭議題）</option>
            </select>
            <p className="text-[11px] text-slate-500">
              每題皆附有完整選項解析與講義章節頁碼對照
            </p>
          </div>
        </div>

        {/* Start button */}
        <div className="pt-2 text-center">
          <button
            onClick={handleLaunch}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-xs hover:shadow-sm transition-all inline-flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            <span>開始 Google 表單全真模考 ({selectedCount} 題)</span>
          </button>
        </div>
      </div>

      {/* Chapter Breakdown Summary */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs">
        <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-indigo-600" />
          <span>模考題庫 14 章節分佈概況</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-xs">
          {CHAPTERS_DATA.map((ch) => {
            const count = allQuestions.filter((q) => q.chapterId === ch.id).length;
            return (
              <div
                key={ch.id}
                className="p-2.5 rounded-lg border border-slate-100 bg-slate-50 flex items-center justify-between"
              >
                <div className="truncate pr-1">
                  <span className="font-bold text-slate-700 mr-1">
                    第{ch.id}章
                  </span>
                  <span className="text-slate-500 text-[11px]">
                    {ch.title.split('：')[1]}
                  </span>
                </div>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-indigo-100 text-indigo-700 rounded-full shrink-0">
                  {count}題
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
