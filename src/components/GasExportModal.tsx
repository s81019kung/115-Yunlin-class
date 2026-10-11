import React, { useState } from 'react';
import { Chapter, Question } from '../types';
import { CHAPTERS_DATA } from '../data/chaptersData';
import { generateGoogleAppsScript } from '../utils/gasGenerator';
import { X, Copy, Check, Download, ExternalLink, FileCode } from 'lucide-react';

interface GasExportModalProps {
  initialChapter: Chapter;
  questions: Question[];
  onClose: () => void;
}

export const GasExportModal: React.FC<GasExportModalProps> = ({
  initialChapter,
  questions,
  onClose
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(initialChapter.id);
  const [copied, setCopied] = useState<boolean>(false);

  const currentChapter = CHAPTERS_DATA.find((c) => c.id === selectedChapterId) || initialChapter;
  const chapterQuestions = questions.filter((q) => q.chapterId === currentChapter.id);

  const gasCode = generateGoogleAppsScript(currentChapter, chapterQuestions);

  const handleCopy = () => {
    navigator.clipboard.writeText(gasCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([gasCode], { type: 'text/javascript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Create_Google_Form_Ch${currentChapter.id}.gs`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-2xs animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
              <FileCode className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Google Apps Script (GAS) 自動建立 Google 表單程式碼
              </h3>
              <p className="text-xs text-slate-500">
                只要複製並於 Google 雲端硬碟執行，即可一鍵生成具備自動評分與詳解的官方 Google 表單
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chapter Picker & Quick Steps */}
        <div className="p-5 border-b border-slate-100 bg-white space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-slate-700">選擇章節：</span>
              <select
                value={selectedChapterId}
                onChange={(e) => setSelectedChapterId(Number(e.target.value))}
                className="px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium text-slate-800"
              >
                {CHAPTERS_DATA.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title} ({c.pageRange})
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  copied
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xs'
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '代碼已複製！' : '一鍵複製 Apps Script 代碼'}</span>
              </button>

              <button
                onClick={handleDownload}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>下載 .gs 檔</span>
              </button>
            </div>
          </div>

          {/* Tutorial steps */}
          <div className="p-3.5 bg-indigo-50/60 rounded-xl border border-indigo-100 text-xs text-indigo-900 space-y-1.5">
            <div className="font-bold flex items-center gap-1.5 text-indigo-950">
              <span>🚀 如何在 1 分鐘內於 Google 雲端硬碟建立真正的 Google 表單？</span>
            </div>
            <ol className="list-decimal list-inside space-y-1 text-slate-700">
              <li>
                點選上方按鈕「<strong>一鍵複製 Apps Script 代碼</strong>」。
              </li>
              <li>
                前往{' '}
                <a
                  href="https://script.google.com/home/start"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline font-semibold inline-flex items-center gap-0.5"
                >
                  Google Apps Script (script.google.com)
                  <ExternalLink className="w-3 h-3 inline" />
                </a>{' '}
                點擊「<strong>新專案</strong>」（或在任何 Google 試算表中點選「擴充功能」&gt;「Apps Script」）。
              </li>
              <li>
                將編輯器中原本的代碼全部刪除，<strong>貼上剛複製的程式碼</strong>，點擊上方的「<strong>執行 (Run)</strong>」。
              </li>
              <li>
                系統將自動在您的 Google 雲端硬碟建立該章節的正式 Google 表單，包含題目、分值、正確答案及胡老師講義詳解！
              </li>
            </ol>
          </div>
        </div>

        {/* Code Content Container */}
        <div className="flex-1 overflow-y-auto p-5 bg-slate-900 text-slate-200 font-mono text-xs">
          <pre className="whitespace-pre-wrap">{gasCode}</pre>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <div>共 {chapterQuestions.length} 道選擇試題已納入代碼中</div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            關閉視窗
          </button>
        </div>
      </div>
    </div>
  );
};
