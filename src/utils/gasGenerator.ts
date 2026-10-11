import { Chapter, Question } from '../types';

export function generateGoogleAppsScript(chapter: Chapter, questions: Question[]): string {
  const sanitizedTitle = chapter.title.replace(/"/g, '\\"');
  const sanitizedSubtitle = `${chapter.subtitle} (靜宜大學115雲林班 教學原理講義 ${chapter.pageRange})`.replace(/"/g, '\\"');

  const questionsCode = questions.map((q, idx) => {
    const qText = `【Q${idx + 1} - ${q.topic}】${q.questionText} (${q.examSource})`.replace(/"/g, '\\"');
    const explanation = `【正解】：(${q.correctAnswer})\n【理論出處】：${q.handoutRef}\n【詳解】：${q.explanation}`.replace(/"/g, '\\"').replace(/\n/g, '\\n');

    const choicesCode = q.options.map(opt => {
      const isCorrect = opt.key === q.correctAnswer;
      const optText = `(${opt.key}) ${opt.text}`.replace(/"/g, '\\"');
      return `    q${idx}.createChoice("${optText}", ${isCorrect})`;
    }).join(',\n');

    return `
  // 題目 ${idx + 1}
  var q${idx} = form.addMultipleChoiceItem();
  q${idx}.setTitle("${qText}")
      .setPoints(10)
      .setRequired(true);
  
  var choices${idx} = [
${choicesCode}
  ];
  q${idx}.setChoices(choices${idx});

  var feedback${idx} = FormApp.createFeedback()
      .setText("${explanation}")
      .build();
  q${idx}.setFeedbackForCorrect(feedback${idx});
  q${idx}.setFeedbackForIncorrect(feedback${idx});
`;
  }).join('\n');

  return `/**
 * Google Apps Script - 自動建立 Google 表單 (Google Forms)
 * 單元：${chapter.title}
 * 課程：靜宜大學 115雲林班 教學原理 (胡憶蓓老師)
 * 說明：在 Google 雲端硬碟建立一個試算表或前往 https://script.google.com/
 * 貼上此程式碼並點擊「執行 (Run)」，即可自動在雲端硬碟生成此份 Google 表單！
 */

function createEducationalQuizForm() {
  // 1. 建立新的 Google 表單
  var form = FormApp.create("${sanitizedTitle}");
  
  // 2. 設定表單說明
  form.setDescription("${sanitizedSubtitle}\\n\\n本表單收錄歷屆教師資格考試（教檢）及各縣市教師甄選（教甄）真題，測驗提交後將立即公布得分與各題學者理論詳解。");
  
  // 3. 開啟測驗模式（自動評分與答案回饋）
  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setShowLinkToRespondAgain(true);

  // 4. 基本資料蒐集題
  var nameItem = form.addTextItem();
  nameItem.setTitle("請輸入您的姓名 / 學員代號").setRequired(true);

  // 5. 新增所有選擇題目與正確答案、解析
${questionsCode}

  // 6. 印出表單網址
  Logger.log("恭喜！Google 表單建立完成！");
  Logger.log("表單編輯網址：" + form.getEditUrl());
  Logger.log("學生作答發布網址：" + form.getPublishedUrl());
}
`;
}
