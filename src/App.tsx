/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Chapter, Question } from './types';
import { CHAPTERS_DATA } from './data/chaptersData';
import { QUESTIONS_DATA } from './data/questionsData';
import { GoogleSiteNavbar } from './components/GoogleSiteNavbar';
import { ChapterListView } from './components/ChapterListView';
import { ScholarDirectoryView } from './components/ScholarDirectoryView';
import { GoogleFormQuiz } from './components/GoogleFormQuiz';
import { GasExportModal } from './components/GasExportModal';
import { WrongQuestionsNotebook } from './components/WrongQuestionsNotebook';
import { MockExamView } from './components/MockExamView';

export default function App() {
  const [currentTab, setCurrentTab] = useState<
    'chapters' | 'scholars' | 'mock-exam' | 'wrong-questions' | 'gas-code'
  >('chapters');

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [gasModalChapter, setGasModalChapter] = useState<Chapter | null>(null);

  // Active Quiz State
  const [activeQuizData, setActiveQuizData] = useState<{
    chapter: Chapter;
    questions: Question[];
  } | null>(null);

  // Completed Chapter Quizzes this month (1-14)
  const [completedChapterIds, setCompletedChapterIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('edu_principles_completed_chapters');
      return saved ? JSON.parse(saved) : [1, 2]; // Default initial completed chapters for preview
    } catch {
      return [1, 2];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('edu_principles_completed_chapters', JSON.stringify(completedChapterIds));
    } catch (e) {
      console.error(e);
    }
  }, [completedChapterIds]);

  // Wrong Questions state with localStorage persistence
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>(() => {
    try {
      const saved = localStorage.getItem('edu_principles_wrong_questions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Total wrong questions encountered over time
  const [totalWrongEncountered, setTotalWrongEncountered] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('edu_principles_total_wrong_count');
      return saved ? Number(saved) : 5; // Default initial cumulative wrong count for demo
    } catch {
      return 5;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('edu_principles_wrong_questions', JSON.stringify(wrongQuestions));
      localStorage.setItem('edu_principles_total_wrong_count', String(totalWrongEncountered));
    } catch (e) {
      console.error(e);
    }
  }, [wrongQuestions, totalWrongEncountered]);

  const handleRecordWrongQuestion = (q: Question) => {
    setWrongQuestions((prev) => {
      if (prev.some((item) => item.id === q.id)) return prev;
      setTotalWrongEncountered((cnt) => Math.max(cnt + 1, prev.length + 1));
      return [...prev, q];
    });
  };

  const handleRemoveWrongQuestion = (qId: string) => {
    setWrongQuestions((prev) => prev.filter((item) => item.id !== qId));
  };

  const handleClearAllWrong = () => {
    setWrongQuestions([]);
  };

  // Called when a chapter quiz is completed
  const handleQuizCompleted = (chapterId: number) => {
    if (chapterId >= 1 && chapterId <= 14) {
      setCompletedChapterIds((prev) => {
        if (prev.includes(chapterId)) return prev;
        return [...prev, chapterId];
      });
    }
  };

  // Start Chapter Quiz
  const handleStartChapterQuiz = (chapter: Chapter) => {
    const chapterQuestions = QUESTIONS_DATA.filter((q) => q.chapterId === chapter.id);
    setActiveQuizData({
      chapter,
      questions: chapterQuestions
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Start Custom Quiz (e.g. from scholar directory or wrong questions)
  const handleStartCustomQuiz = (title: string, subtitle: string, questions: Question[]) => {
    const customChapter: Chapter = {
      id: 99,
      title,
      subtitle,
      pageRange: '全書綜合講義',
      description: `${title} - 精選 ${questions.length} 題歷屆大考題`,
      scholars: [],
      coreKeywords: [],
      lectureHighlights: [],
      googleFormColor: '#1E88E5'
    };

    setActiveQuizData({
      chapter: customChapter,
      questions
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* If taking a quiz in full Google Form view */}
      {activeQuizData ? (
        <GoogleFormQuiz
          chapter={activeQuizData.chapter}
          questions={activeQuizData.questions}
          onBack={() => setActiveQuizData(null)}
          onOpenGasModal={(ch) => setGasModalChapter(ch)}
          onRecordWrongQuestion={handleRecordWrongQuestion}
          onQuizCompleted={handleQuizCompleted}
        />
      ) : (
        <>
          {/* Google Site Top Navigation */}
          <GoogleSiteNavbar
            currentTab={currentTab}
            setCurrentTab={(tab) => {
              if (tab === 'gas-code') {
                setGasModalChapter(CHAPTERS_DATA[0]);
              } else {
                setCurrentTab(tab);
              }
            }}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            wrongCount={wrongQuestions.length}
            completedChapterIds={completedChapterIds}
            totalChapters={14}
            totalWrongEncountered={totalWrongEncountered}
          />

          {/* Main Google Sites Content Container */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            {currentTab === 'chapters' && (
              <ChapterListView
                chapters={CHAPTERS_DATA}
                questions={QUESTIONS_DATA}
                onStartQuiz={handleStartChapterQuiz}
                onOpenGasModal={(ch) => setGasModalChapter(ch)}
                searchQuery={searchQuery}
                completedChapterIds={completedChapterIds}
                totalWrongEncountered={totalWrongEncountered}
                remainingWrongCount={wrongQuestions.length}
                onGoToWrongQuestions={() => setCurrentTab('wrong-questions')}
              />
            )}

            {currentTab === 'scholars' && (
              <ScholarDirectoryView
                questions={QUESTIONS_DATA}
                onStartCustomQuiz={handleStartCustomQuiz}
                searchQuery={searchQuery}
              />
            )}

            {currentTab === 'mock-exam' && (
              <MockExamView
                allQuestions={QUESTIONS_DATA}
                onStartExam={(shuffledQuestions) => {
                  handleStartCustomQuiz(
                    '教學原理 全真綜合模擬測驗',
                    `跨章節檢定考模考（共 ${shuffledQuestions.length} 題）`,
                    shuffledQuestions
                  );
                }}
              />
            )}

            {currentTab === 'wrong-questions' && (
              <WrongQuestionsNotebook
                wrongQuestions={wrongQuestions}
                onRemoveQuestion={handleRemoveWrongQuestion}
                onClearAll={handleClearAllWrong}
                onStartPractice={(qs) => {
                  handleStartCustomQuiz(
                    '個人錯題攻堅評量',
                    `弱點複習（共 ${qs.length} 題）`,
                    qs
                  );
                }}
              />
            )}
          </main>

          {/* Google Sites Styled Footer */}
          <footer className="mt-auto bg-white border-t border-slate-200 py-6 text-xs text-slate-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div>
                <p className="font-semibold text-slate-700">
                  靜宜大學 115學年度偏遠地區學校學士後教育學分班（115雲林班）
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  教學原理 (Principles and Practices of Instruction) · 授課教師：胡憶蓓副教授 · 學員複習與測驗站
                </p>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-slate-500">
                <span>涵蓋 14 個章節</span>
                <span>·</span>
                <span>Google 表單即時測驗與詳解</span>
                <span>·</span>
                <span>右上角即時進度儀表追蹤</span>
                <span>·</span>
                <span>Google Apps Script 雲端自動建立</span>
              </div>
            </div>
          </footer>
        </>
      )}

      {/* GAS Code Generator Modal */}
      {gasModalChapter && (
        <GasExportModal
          initialChapter={gasModalChapter}
          questions={QUESTIONS_DATA}
          onClose={() => setGasModalChapter(null)}
        />
      )}
    </div>
  );
}
