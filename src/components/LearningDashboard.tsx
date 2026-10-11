import React, { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  TrendingUp,
  BarChart3,
  PieChart as PieIcon,
  Award,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  ArrowRight,
  Sparkles,
  Target,
  BrainCircuit,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Chapter, Question } from '../types';

interface LearningDashboardProps {
  completedChapterIds: number[];
  totalChapters?: number;
  totalWrongEncountered: number;
  remainingWrongCount: number;
  chapters: Chapter[];
  questions: Question[];
  onStartQuiz: (chapter: Chapter) => void;
  onGoToWrongQuestions?: () => void;
}

export const LearningDashboard: React.FC<LearningDashboardProps> = ({
  completedChapterIds,
  totalChapters = 14,
  totalWrongEncountered,
  remainingWrongCount,
  chapters,
  questions,
  onStartQuiz,
  onGoToWrongQuestions
}) => {
  const [activeTab, setActiveTab] = useState<'trend' | 'chapters' | 'domains'>('trend');
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  // Key KPI Calculations
  const completedCount = completedChapterIds.length;
  const completionRate = Math.min(100, Math.round((completedCount / totalChapters) * 100));

  // Error mastery calculations
  const resolvedWrongCount = Math.max(0, totalWrongEncountered - remainingWrongCount);
  const masteryRate =
    totalWrongEncountered > 0
      ? Math.min(100, Math.round((resolvedWrongCount / totalWrongEncountered) * 100))
      : 100;

  // Exam Readiness Index (0 - 100)
  // Weighted: 60% Chapter Completion + 40% Error Mastery
  const readinessIndex = Math.min(
    100,
    Math.round(completionRate * 0.65 + masteryRate * 0.35)
  );

  // Covered questions in completed chapters
  const coveredQuestionsCount = useMemo(() => {
    return questions.filter((q) => completedChapterIds.includes(q.chapterId)).length;
  }, [questions, completedChapterIds]);

  const totalQuestionsCount = questions.length;

  // Next recommended chapter to study
  const nextChapter = useMemo(() => {
    return chapters.find((c) => !completedChapterIds.includes(c.id)) || chapters[0];
  }, [chapters, completedChapterIds]);

  // Readiness status badge text & styling
  const readinessBadge = useMemo(() => {
    if (readinessIndex >= 85) {
      return { text: '精熟通達 (衝刺榜首)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' };
    }
    if (readinessIndex >= 60) {
      return { text: '漸入佳境 (穩定備戰)', color: 'bg-indigo-100 text-indigo-800 border-indigo-300' };
    }
    if (readinessIndex >= 35) {
      return { text: '打底積累 (持續推進)', color: 'bg-amber-100 text-amber-800 border-amber-300' };
    }
    return { text: '新手起跑 (循序漸進)', color: 'bg-slate-100 text-slate-800 border-slate-300' };
  }, [readinessIndex]);

  // 1. Trend Data Generation based on completedChapterIds and totalWrongEncountered
  const trendData = useMemo(() => {
    // Generate milestone progression points mapping from baseline to current and projected target
    const currentCompleted = completedCount;
    const currentWrong = totalWrongEncountered;
    const currentResolved = resolvedWrongCount;

    return [
      {
        stage: '第1階段 (暖身啟航)',
        completedChapters: Math.min(currentCompleted, 1),
        cumulativeWrong: Math.max(1, Math.round(currentWrong * 0.2)),
        resolvedWrong: 0,
        masteryRate: 20,
        readiness: 15
      },
      {
        stage: '第2階段 (基礎深耕)',
        completedChapters: Math.min(currentCompleted, Math.max(1, Math.round(currentCompleted * 0.45))),
        cumulativeWrong: Math.max(2, Math.round(currentWrong * 0.55)),
        resolvedWrong: Math.round(currentResolved * 0.3),
        masteryRate: 42,
        readiness: 38
      },
      {
        stage: '第3階段 (理論整合)',
        completedChapters: Math.min(currentCompleted, Math.max(2, Math.round(currentCompleted * 0.75))),
        cumulativeWrong: Math.max(3, Math.round(currentWrong * 0.85)),
        resolvedWrong: Math.round(currentResolved * 0.65),
        masteryRate: 64,
        readiness: 58
      },
      {
        stage: '當前進度 (真實狀態)',
        completedChapters: currentCompleted,
        cumulativeWrong: currentWrong,
        resolvedWrong: currentResolved,
        masteryRate: masteryRate,
        readiness: readinessIndex
      },
      {
        stage: '應試目標 (全真衝刺)',
        completedChapters: totalChapters,
        cumulativeWrong: currentWrong,
        resolvedWrong: currentWrong,
        masteryRate: 100,
        readiness: 100
      }
    ];
  }, [completedCount, totalWrongEncountered, resolvedWrongCount, masteryRate, readinessIndex, totalChapters]);

  // 2. Chapter Breakdown Data for BarChart
  const chapterChartData = useMemo(() => {
    return chapters.map((ch) => {
      const qTotal = questions.filter((q) => q.chapterId === ch.id).length;
      const isDone = completedChapterIds.includes(ch.id);
      return {
        id: ch.id,
        shortName: `第${ch.id}章`,
        fullName: ch.title,
        isCompleted: isDone,
        status: isDone ? '已完成測驗' : '未測驗',
        totalQuestions: qTotal,
        masteredQuestions: isDone ? qTotal : 0,
        remainingQuestions: isDone ? 0 : qTotal
      };
    });
  }, [chapters, questions, completedChapterIds]);

  // 3. Domain Distribution Data for PieChart
  const domainData = useMemo(() => {
    const domains = [
      { name: '教學導論與哲學基礎 (1-3章)', chapterIds: [1, 2, 3], color: '#6366F1' },
      { name: '學習理論與認知發展 (4-6章)', chapterIds: [4, 5, 6], color: '#3B82F6' },
      { name: '教學模式與教學策略 (7-9章)', chapterIds: [7, 8, 9], color: '#10B981' },
      { name: '情意動機與個別化 (10-12章)', chapterIds: [10, 11, 12], color: '#F59E0B' },
      { name: '評量反思與多元教學 (13-14章)', chapterIds: [13, 14], color: '#EC4899' }
    ];

    return domains.map((domain) => {
      const totalInDomain = domain.chapterIds.length;
      const doneInDomain = domain.chapterIds.filter((id) => completedChapterIds.includes(id)).length;
      const qCount = questions.filter((q) => domain.chapterIds.includes(q.chapterId)).length;
      return {
        name: domain.name,
        completed: doneInDomain,
        total: totalInDomain,
        percent: Math.round((doneInDomain / totalInDomain) * 100),
        color: domain.color,
        questionsCount: qCount
      };
    });
  }, [completedChapterIds, questions]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-5 sm:p-6 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-indigo-500/20 text-indigo-300 rounded-lg border border-indigo-400/30">
              <TrendingUp className="w-4 h-4" />
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-indigo-300">
              Visual Learning Analytics · Recharts Dashboard
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
            學習進度與錯題攻堅視覺化儀表板
          </h3>
          <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
            即時動態追蹤 14 個講義章節完成歷程、累計遭遇錯題攻克比率，提供應試就緒指數與直觀趨勢分析。
          </p>
        </div>

        {/* Header Right Action & Toggle */}
        <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
          {nextChapter && (
            <button
              onClick={() => onStartQuiz(nextChapter)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-2xs transition-colors"
            >
              <span>測驗第 {nextChapter.id} 章</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            title={isCollapsed ? '展開儀表板' : '收合儀表板'}
          >
            <span>{isCollapsed ? '展開' : '收合'}</span>
            {isCollapsed ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {!isCollapsed && (
        <div className="p-5 sm:p-6 space-y-6">
          {/* Top KPI Cards Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* KPI 1: 章節測驗完成度 */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-medium">章節完成率</span>
                <BookOpen className="w-4 h-4 text-indigo-600" />
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                    {completedCount}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ {totalChapters} 章節</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div
                    className="bg-indigo-600 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${completionRate}%` }}
                  />
                </div>
              </div>
              <span className="text-[11px] text-slate-500 mt-2 font-medium">
                進度：{completionRate}% · 尚餘 {totalChapters - completedCount} 章待測
              </span>
            </div>

            {/* KPI 2: 累計錯題攻堅 */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-medium">錯題攻堅掌握度</span>
                <AlertCircle className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                    {masteryRate}%
                  </span>
                  <span className="text-xs text-slate-500 font-medium">掌握率</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div
                    className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${masteryRate}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2 font-medium">
                <span>累計錯題：{totalWrongEncountered} 題</span>
                {onGoToWrongQuestions && (
                  <button
                    onClick={onGoToWrongQuestions}
                    className="text-indigo-600 hover:text-indigo-800 underline font-semibold cursor-pointer"
                  >
                    未攻克：{remainingWrongCount}
                  </button>
                )}
              </div>
            </div>

            {/* KPI 3: 題庫題目覆蓋數 */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-medium">已覆蓋重點考題</span>
                <Target className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                    {coveredQuestionsCount}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ {totalQuestionsCount} 題</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div
                    className="bg-emerald-600 h-1.5 rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.round((coveredQuestionsCount / (totalQuestionsCount || 1)) * 100)}%`
                    }}
                  />
                </div>
              </div>
              <span className="text-[11px] text-slate-500 mt-2 font-medium">
                覆蓋率：{Math.round((coveredQuestionsCount / (totalQuestionsCount || 1)) * 100)}% 全真真題
              </span>
            </div>

            {/* KPI 4: 應試就緒指數 */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-medium">教檢/教甄應試就緒</span>
                <Award className="w-4 h-4 text-indigo-600" />
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-indigo-700 tabular-nums">
                    {readinessIndex}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ 100 分</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-indigo-700 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${readinessIndex}%` }}
                  />
                </div>
              </div>
              <div className="mt-2">
                <span
                  className={`inline-block px-2 py-0.5 text-[10px] font-semibold rounded-md border ${readinessBadge.color}`}
                >
                  {readinessBadge.text}
                </span>
              </div>
            </div>
          </div>

          {/* Chart Controls Tab */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setActiveTab('trend')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeTab === 'trend'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>學習進度與錯題趨勢圖</span>
              </button>

              <button
                onClick={() => setActiveTab('chapters')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeTab === 'chapters'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>14 章節掌握分佈長條圖</span>
              </button>

              <button
                onClick={() => setActiveTab('domains')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeTab === 'domains'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <PieIcon className="w-3.5 h-3.5" />
                <span>5 大講義領域架構圖</span>
              </button>
            </div>

            <div className="text-[11px] text-slate-400 hidden sm:block">
              資料即時連動 localStorage
            </div>
          </div>

          {/* Chart Area */}
          <div className="w-full">
            {/* View 1: Trend Area Chart */}
            {activeTab === 'trend' && (
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
                  <p>
                    <span className="font-semibold text-slate-800">趨勢觀察：</span>
                    根據目前完成的 <span className="text-indigo-600 font-bold">{completedCount}</span> 個章節與累計遭遇的{' '}
                    <span className="text-amber-600 font-bold">{totalWrongEncountered}</span> 道錯題，動態繪製進度成長曲線與錯題消除軌跡。
                  </p>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-xs bg-indigo-500 inline-block" />
                      已測驗章節 (左軸 0-14)
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-xs bg-amber-500 inline-block" />
                      累計錯題 (左軸)
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-0.5 bg-emerald-600 inline-block" />
                      就緒度 % (右軸 0-100)
                    </span>
                  </div>
                </div>

                <div className="h-72 w-full pt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      data={trendData}
                      margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorChapters" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366F1" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#6366F1" stopOpacity={0.0} />
                        </linearGradient>
                        <linearGradient id="colorWrong" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                      <XAxis
                        dataKey="stage"
                        stroke="#94A3B8"
                        fontSize={11}
                        tickLine={false}
                      />
                      {/* Left Y Axis for Counts */}
                      <YAxis
                        yAxisId="left"
                        stroke="#94A3B8"
                        fontSize={11}
                        tickLine={false}
                        domain={[0, Math.max(14, totalWrongEncountered + 2)]}
                      />
                      {/* Right Y Axis for Percentages */}
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#94A3B8"
                        fontSize={11}
                        tickLine={false}
                        domain={[0, 100]}
                        unit="%"
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1E293B',
                          borderRadius: '8px',
                          border: 'none',
                          color: '#fff',
                          fontSize: '12px'
                        }}
                        formatter={(value: any, name: any) => {
                          if (name === 'completedChapters') return [`${value} 章`, '完成章節數'];
                          if (name === 'cumulativeWrong') return [`${value} 題`, '累計遭遇錯題'];
                          if (name === 'resolvedWrong') return [`${value} 題`, '已攻克錯題'];
                          if (name === 'readiness') return [`${value}%`, '應試就緒指數'];
                          return [value, name];
                        }}
                      />
                      <Area
                        yAxisId="left"
                        type="monotone"
                        dataKey="completedChapters"
                        stroke="#4F46E5"
                        strokeWidth={2.5}
                        fillOpacity={1}
                        fill="url(#colorChapters)"
                        name="completedChapters"
                      />
                      <Area
                        yAxisId="left"
                        type="monotone"
                        dataKey="cumulativeWrong"
                        stroke="#D97706"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorWrong)"
                        name="cumulativeWrong"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="readiness"
                        stroke="#10B981"
                        strokeWidth={3}
                        dot={{ r: 4, fill: '#10B981' }}
                        name="readiness"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* View 2: Chapters Breakdown BarChart */}
            {activeTab === 'chapters' && (
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
                  <p>
                    <span className="font-semibold text-slate-800">14 章節逐章檢視：</span>
                    深藍色長條表示已完成測驗章節題數，淺灰色為尚未完成測驗之章節。
                  </p>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-xs bg-indigo-600 inline-block" />
                      已測驗章節
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-xs bg-slate-300 inline-block" />
                      尚未測驗章節
                    </span>
                  </div>
                </div>

                <div className="h-72 w-full pt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chapterChartData}
                      margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                      <XAxis
                        dataKey="shortName"
                        stroke="#94A3B8"
                        fontSize={11}
                        tickLine={false}
                      />
                      <YAxis
                        stroke="#94A3B8"
                        fontSize={11}
                        tickLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1E293B',
                          borderRadius: '8px',
                          border: 'none',
                          color: '#fff',
                          fontSize: '12px'
                        }}
                        formatter={(value: any, name: any, item: any) => {
                          const payload = item.payload;
                          return [
                            `${payload.totalQuestions} 題 (${payload.status})`,
                            payload.fullName
                          ];
                        }}
                      />
                      <Bar dataKey="totalQuestions" radius={[4, 4, 0, 0]}>
                        {chapterChartData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.isCompleted ? '#4F46E5' : '#CBD5E1'}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* View 3: Domain Distribution PieChart */}
            {activeTab === 'domains' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={domainData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={95}
                        paddingAngle={4}
                        dataKey="completed"
                        nameKey="name"
                      >
                        {domainData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1E293B',
                          borderRadius: '8px',
                          border: 'none',
                          color: '#fff',
                          fontSize: '12px'
                        }}
                        formatter={(value: any, name: any, item: any) => {
                          const p = item.payload;
                          return [`已完成 ${p.completed}/${p.total} 章 (${p.percent}%)`, p.name];
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Domain list detail */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    五大教學原理核心領域完成狀態
                  </h4>
                  <div className="space-y-2">
                    {domainData.map((domain, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg border border-slate-100 bg-slate-50/70 text-xs flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="w-3 h-3 rounded-full shrink-0"
                            style={{ backgroundColor: domain.color }}
                          />
                          <span className="font-semibold text-slate-800">{domain.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500 font-medium">
                            {domain.completed}/{domain.total} 章
                          </span>
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-white border border-slate-200 text-slate-700">
                            {domain.percent}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Motivational Coach Card */}
          <div className="p-3.5 bg-gradient-to-r from-indigo-50 via-slate-50 to-emerald-50 rounded-xl border border-indigo-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-indigo-900">
              <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>
                <strong>複習策略建議：</strong>
                {completedCount === 0 && '建議從第 1 章「教學的本質」開始奠定基礎概念！'}
                {completedCount > 0 && completedCount < 7 && `已完成 ${completedCount} 章，建議繼續挑戰下一章第 ${nextChapter?.id} 章或重溫學者理論！`}
                {completedCount >= 7 && completedCount < 14 && `進度已過半！累計遭遇錯題 ${totalWrongEncountered} 題，建議搭配「錯題筆記本」攻堅弱點！`}
                {completedCount === 14 && '太棒了！14 個章節已全部測驗完成，建議前往「綜合全真模擬考」進行跨章節實戰模考！'}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {nextChapter && (
                <button
                  onClick={() => onStartQuiz(nextChapter)}
                  className="px-3 py-1 bg-white hover:bg-indigo-50 border border-indigo-200 text-indigo-700 font-semibold rounded-lg transition-colors text-xs flex items-center gap-1 shadow-2xs"
                >
                  <span>立即測驗第 {nextChapter.id} 章</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
