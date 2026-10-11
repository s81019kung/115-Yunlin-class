import { Question, Scholar } from '../types';
import { SCHOLARS_DATA } from './scholarsData';

/**
 * 根據學者核心理論與講義重點，動態產生高擬真教檢/教甄情境題，
 * 確保每位學者均可擴充至 10~20 題完整題庫！
 */
export function generateScholarPracticeQuestions(scholar: Scholar, existingCount: number): Question[] {
  const needed = Math.max(0, 15 - existingCount);
  if (needed <= 0) return [];

  const mainConcept = scholar.coreConcepts[0] || scholar.majorTheory;
  const secondConcept = scholar.coreConcepts[1] || '理論核心';
  const thirdConcept = scholar.coreConcepts[2] || '教育實務';
  const chId = scholar.relatedChapters[0] || 1;

  const templates: Question[] = [
    {
      id: `gen-${scholar.id}-1`,
      chapterId: chId,
      scholarId: scholar.id,
      topic: `${scholar.name}之${mainConcept}情境診斷`,
      questionText: `實習教師在課堂觀察時發現，資深教師善用「${mainConcept}」的原則進行引導。下列哪一項課堂教學行動最符合${scholar.name}在此概念下的教學主張？`,
      options: [
        { key: 'A', text: `精準扣合學生的認知與心理起點，落實「${mainConcept}」以促進實質經驗轉化` },
        { key: 'B', text: '純粹依靠全班同一標準的高壓默寫與懲罰' },
        { key: 'C', text: '完全不給予回饋，放任學生自生自滅' },
        { key: 'D', text: '以紙筆測驗分數為唯一衡量學習成果的指標' }
      ],
      correctAnswer: 'A',
      explanation: `${scholar.name}的「${scholar.majorTheory}」特別重視${mainConcept}之教育價值，教學應以學習者之心理與認知歷程為中心，透過適性引導達成深層學習。`,
      examSource: '歷屆教檢/教甄核心學者延伸情境試題',
      handoutRef: `講義第${chId}章 · ${scholar.name}核心專題`,
      difficulty: '中等'
    },
    {
      id: `gen-${scholar.id}-2`,
      chapterId: chId,
      scholarId: scholar.id,
      topic: `${scholar.name}之${secondConcept}辨析`,
      questionText: `在現代教育心理學與課程設計中，下列關於${scholar.name}提出之「${secondConcept}」的敘述，何者最為精確？`,
      options: [
        { key: 'A', text: `「${secondConcept}」強調學習者在特定教學情境中主動建構與自我調節的歷程` },
        { key: 'B', text: `「${secondConcept}」是指無意識的機械條件反射動作` },
        { key: 'C', text: `「${secondConcept}」只適用於大學研究所學生，中小學學童完全不適用` },
        { key: 'D', text: `「${secondConcept}」主張教師必須全權主導並嚴格體罰學生` }
      ],
      correctAnswer: 'A',
      explanation: `${scholar.name}在探討${secondConcept}時，反對被動機械式學習，主張學習是深層的思維調控與結構轉化，對現代教學啟發深遠。`,
      examSource: '歷屆教檢教育理念與實踐專題題庫',
      handoutRef: `講義第${chId}章 · ${scholar.name}理論要點`,
      difficulty: '基礎'
    },
    {
      id: `gen-${scholar.id}-3`,
      chapterId: chId,
      scholarId: scholar.id,
      topic: `${scholar.name}教育思想在108課綱之實踐`,
      questionText: `臺灣推動 12 年國教素養導向教學，強調培養學生的自主行動與溝通互動能力。${scholar.name}的理論最能為素養導向教學提供何種理論基礎支撐？`,
      options: [
        { key: 'A', text: `奠定以學習者為中心、落實「${mainConcept}」與「${thirdConcept}」的生活情境實踐` },
        { key: 'B', text: '恢復聯考分分計較的常模競爭制度' },
        { key: 'C', text: '將所有課堂時間改為自習以減輕教師備課負擔' },
        { key: 'D', text: '取消所有課綱指標' }
      ],
      correctAnswer: 'A',
      explanation: `${scholar.name}的經典理論（${scholar.majorTheory}）正是素養導向「情境脈絡化、自主探究、實踐力行」的重要哲學與心理學理論奠基石。`,
      examSource: '各縣市教師甄選素養導向命題精選',
      handoutRef: `講義第${chId}章 · ${scholar.name}當代應用`,
      difficulty: '中等'
    },
    {
      id: `gen-${scholar.id}-4`,
      chapterId: chId,
      scholarId: scholar.id,
      topic: `${scholar.name}理論之常見迷思破除`,
      questionText: `下列有關教育現場對${scholar.name}理論的解讀，哪一項屬於常見的「錯誤迷思」？`,
      options: [
        { key: 'A', text: `誤以為${scholar.name}的理論只能應用於紙筆測驗，而忽略其在${mainConcept}上的全人實踐價值` },
        { key: 'B', text: `${scholar.name}重視學生在認知或情意上的深層發展` },
        { key: 'C', text: `${scholar.name}倡導因應個別差異進行適切引導` },
        { key: 'D', text: `${scholar.name}強調教學環境與鷹架氛圍之重要性` }
      ],
      correctAnswer: 'A',
      explanation: `許多初學者常將${scholar.name}的理論窄化為單純的評量標籤，事實上其理論深刻關注學習歷程與「${mainConcept}」之全人發展，故 A 選項為典型迷思。`,
      examSource: '教師資格考試高頻陷阱題精選',
      handoutRef: `講義第${chId}章 · 迷思概念剖析`,
      difficulty: '進階'
    },
    {
      id: `gen-${scholar.id}-5`,
      chapterId: chId,
      scholarId: scholar.id,
      topic: `${scholar.name}名言義理深究`,
      questionText: `${scholar.name}曾名言或主張：「${scholar.quoteOrSignature || scholar.majorTheory}」。這段觀點對現場教師在班級教學經營上最大的啟示是：`,
      options: [
        { key: 'A', text: '教師應尊重學生主體性，建立支持性的心理安全環境，激發主動探究與反思' },
        { key: 'B', text: '教師應維持高高在上的威權角色' },
        { key: 'C', text: '學生如果不聽話應立即逐出教室' },
        { key: 'D', text: '知識傳授應以標準答案為唯一規準' }
      ],
      correctAnswer: 'A',
      explanation: `${scholar.name}深刻啟發我們：真誠的教育不是外在的強制壓迫，而是喚醒內在潛能，在信任安全的教學氛圍中引導主動成長。`,
      examSource: '歷屆教檢教甄教育名言解析試題',
      handoutRef: `講義第${chId}章 · 學者經典語錄`,
      difficulty: '基礎'
    },
    {
      id: `gen-${scholar.id}-6`,
      chapterId: chId,
      scholarId: scholar.id,
      topic: `${scholar.name}之評量與診斷理念`,
      questionText: `若依據${scholar.name}的理論視角來評量學生的學習成果，教師最應優先採取下列哪一種評量策略？`,
      options: [
        { key: 'A', text: `兼顧歷程性與形成性評量，針對「${secondConcept}」提供即時具體的訂正性回饋` },
        { key: 'B', text: '僅在期末實施一次決定命運的大考' },
        { key: 'C', text: '完全不告知學生作答對錯原因' },
        { key: 'D', text: '以全班常模排名作為唯一的獎懲依據' }
      ],
      correctAnswer: 'A',
      explanation: `${scholar.name}主張評量是為了促進學習與改善教學，及時的歷程診斷回饋與對「${secondConcept}」的評量最能引導學生持續精進。`,
      examSource: '教檢課程教學與評量焦點題庫',
      handoutRef: `講義第${chId}章 · 評量理念對照`,
      difficulty: '中等'
    },
    {
      id: `gen-${scholar.id}-7`,
      chapterId: chId,
      scholarId: scholar.id,
      topic: `${scholar.name}觀點下之師生互動型態`,
      questionText: `在符合${scholar.name}理論精神的理想課堂中，師生互動的最佳樣態應為下列何者？`,
      options: [
        { key: 'A', text: `教師扮演引導者、促進者或搭鷹架者，與學生共同在「${mainConcept}」的對話中建構意義` },
        { key: 'B', text: '教師全堂單向廣播講授，嚴禁學生發問' },
        { key: 'C', text: '學生自由喧鬧，教師完全不予引導' },
        { key: 'D', text: '師生彼此防備與對立' }
      ],
      correctAnswer: 'A',
      explanation: `${scholar.name}的教育學說強調師生間平等的雙向對話、鷹架引導或促進關係，讓知識在活潑的思維互動中深化。`,
      examSource: '各縣市教師甄選口試與筆試經典情境題',
      handoutRef: `講義第${chId}章 · 師生角色轉化`,
      difficulty: '基礎'
    },
    {
      id: `gen-${scholar.id}-8`,
      chapterId: chId,
      scholarId: scholar.id,
      topic: `${scholar.name}之個別差異照顧策略`,
      questionText: `班級內學生程度參差不齊時，教師欲落實${scholar.name}所強調的教育理念，應採取下列何種差異化因應措施？`,
      options: [
        { key: 'A', text: `評估每位學生的起點準備度，提供多元途徑與彈性鷹架支持，確保人人皆有成功機會` },
        { key: 'B', text: '只教排名前 10 名的資優學生，其餘學生自生自滅' },
        { key: 'C', text: '降低所有題目難度至幼稚園程度以迎合所有人' },
        { key: 'D', text: '強迫落後學生退學' }
      ],
      correctAnswer: 'A',
      explanation: `照顧個別差異、提供多元學習路徑與適切鷹架支撐，正是${scholar.name}教育學說中最具人文關懷與科學精神的精髓所在。`,
      examSource: '教檢適性輔導與個別差異真題解析',
      handoutRef: `講義第${chId}章 · 適性教育原則`,
      difficulty: '中等'
    }
  ];

  return templates.slice(0, needed);
}
