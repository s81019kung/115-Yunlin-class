import { Question } from '../types';
import { SCHOLAR_EXTENSION_QUESTIONS } from './scholarQuestionsExtension';
import { SCHOLAR_COMPREHENSIVE_QUESTIONS } from './scholarComprehensiveBank';
import { CHAPTER_EXTRA_QUESTIONS } from './chapterExtraQuestions';

const BASE_QUESTIONS: Question[] = [
  // ==========================================
  // 第 1 章：「教」「學」的定義與意義 (Socrates, 孔子, 學記, Eisner)
  // ==========================================
  {
    id: 'q-ch1-1',
    chapterId: 1,
    scholarId: 'socrates',
    topic: '產婆法與詰問精神',
    questionText: '教師在課堂上透過連續且有系統的提問，引導學生自行發現自己原先想法中的盲點與矛盾，進而導出正確的觀念。此種教學策略最符合下列哪一位教育學者的教學法？',
    options: [
      { key: 'A', text: '蘇格拉底（Socrates）的「產婆法」' },
      { key: 'B', text: '史金納（B. F. Skinner）的「編序教學法」' },
      { key: 'C', text: '奧斯貝（D. Ausubel）的「解釋教學法」' },
      { key: 'D', text: '凱勒（F. S. Keller）的「個人化系統教學法」' }
    ],
    correctAnswer: 'A',
    explanation: '蘇格拉底的「產婆法（Maieutic Method）」主張人天賦具有觀念與智慧，教師角色猶如助產士，透過反詰與詰問法激發學生主動思考，從「不自覺的無知」過渡到「自覺的無知」，進而自主推求真理。',
    examSource: '112年高級中等以下學校及幼兒園教師資格考試',
    handoutRef: '講義第1章 p.8, p.15-16',
    difficulty: '基礎'
  },
  {
    id: 'q-ch1-2',
    chapterId: 1,
    scholarId: 'eisner',
    topic: '懸缺課程 (Null Curriculum)',
    questionText: '某學校在規劃學校本位課程時，因為升學考試考量而完全未安排任何藝術陶冶與哲學思辨的相關課程。艾斯納（E. W. Eisner）將這種學校應教卻被忽視、未教的課程內涵稱為下列何者？',
    options: [
      { key: 'A', text: '潛在課程（Hidden Curriculum）' },
      { key: 'B', text: '懸缺課程 / 空無課程（Null Curriculum）' },
      { key: 'C', text: '非正式課程（Informal Curriculum）' },
      { key: 'D', text: '空白課程（Vacant Curriculum）' }
    ],
    correctAnswer: 'B',
    explanation: '艾斯納（E. W. Eisner）在1979年提出課程三元概念：實有課程（外顯課程）、潛在課程與「空無/懸缺課程（Null Curriculum）」。懸缺課程指學校課程中所缺乏、該教而未教、應有而未有的內涵。',
    examSource: '111年高級中等以下學校及幼兒園教師資格考試',
    handoutRef: '講義第1章 p.9, p.11-12',
    difficulty: '基礎'
  },
  {
    id: 'q-ch1-3',
    chapterId: 1,
    scholarId: 'confucius',
    topic: '古代教育思想與學記',
    questionText: '《禮記·學記》提及：「學然後知不足，教然後知困。知不足，然後能自反也；知困，然後能自強也。」這段話闡述了現代教學理論中的何種重要原則？',
    options: [
      { key: 'A', text: '長善救失' },
      { key: 'B', text: '相觀而善' },
      { key: 'C', text: '教學相長' },
      { key: 'D', text: '藏息相輔' }
    ],
    correctAnswer: 'C',
    explanation: '此句出於《學記》，說明在教與學的互動過程中，教師與學生皆能發現自身之不足並促使持續精進，即「教學相長」之核心精神。',
    examSource: '110年教育部國民小學教師甄選聯合試題',
    handoutRef: '講義第1章 p.7',
    difficulty: '基礎'
  },
  {
    id: 'q-ch1-4',
    chapterId: 1,
    scholarId: 'eisner',
    topic: '課程架構與空白課程',
    questionText: '學校每週五下午特別空出兩節課，不排定固定的學科授課進度與考試，由學生自主規劃閱讀、專題討論或進行社團活動。此種課程類型在課程理論中通常稱為何者？',
    options: [
      { key: 'A', text: '空白課程（Flexible / Vacant Curriculum）' },
      { key: 'B', text: '部定正式課程（Formal Curriculum）' },
      { key: 'C', text: '懸缺課程（Null Curriculum）' },
      { key: 'D', text: '內隱潛在課程（Implicit Curriculum）' }
    ],
    correctAnswer: 'A',
    explanation: '空白課程指學校在課表中空出一部分時間，不安排任何既定之學科內容，旨在讓學生休息、反省、自主規劃學習或發展個別興趣，屬於自主彈性學習時間。',
    examSource: '109年高級中等以下學校教師資格考試',
    handoutRef: '講義第1章 p.9, p.12',
    difficulty: '中等'
  },
  {
    id: 'q-ch1-5',
    chapterId: 1,
    scholarId: 'confucius',
    topic: '學記教學原則與相觀而善',
    questionText: '《禮記·學記》提及「相觀而善之謂摩」，其在現代教學與同儕學習情境中的最主要涵義為何？',
    options: [
      { key: 'A', text: '教師應嚴密監督學生背誦進度' },
      { key: 'B', text: '同儕之間互相觀摩學習彼此的優點與長處' },
      { key: 'C', text: '學校應定期實施常模排名以刺激學生競爭' },
      { key: 'D', text: '教學應不分年級混齡全部採取個別自學' }
    ],
    correctAnswer: 'B',
    explanation: '「相觀而善之謂摩」意指同學之間互相觀察切磋、取長補短，藉由互相觀摩來培養善行與優良知能，為合作學習與同儕鷹架之古代典範。',
    examSource: '111年臺北市國小教師甄選教育專業科目',
    handoutRef: '講義第1章 p.7',
    difficulty: '中等'
  },
  {
    id: 'q-ch1-6',
    chapterId: 1,
    scholarId: 'socrates',
    topic: '蘇格拉底之回憶說',
    questionText: '蘇格拉底認為「教育不是將外在知識灌輸到空白的心靈中，而是引導靈魂回憶起原已存在的真理」，此種哲學觀點在認識論上屬於下列何者？',
    options: [
      { key: 'A', text: '經驗主義（Empiricism）' },
      { key: 'B', text: '觀念論 / 理性主義天賦觀念說（Innate Ideas）' },
      { key: 'C', text: '行為主義（Behaviorism）' },
      { key: 'D', text: '實用主義（Pragmatism）' }
    ],
    correctAnswer: 'B',
    explanation: '蘇格拉底持理性主義天賦觀念說（Anamnesis / 回憶說），認為靈魂在出生前已認識理念真理，教育的工作是透過問答「引導（Educe）」出來，而非由外向內之單純注入。',
    examSource: '110年教育部中等學校教師資格考試',
    handoutRef: '講義第1章 p.8, p.15',
    difficulty: '進階'
  },
  {
    id: 'q-ch1-7',
    chapterId: 1,
    scholarId: 'socrates',
    topic: '產婆法之諷刺與助產階段',
    questionText: '蘇格拉底的詰問法（產婆術）在運作歷程中分為兩大階段：第一步通常先以自居無知的態度向對方請教，並透過一連串反問使對方發現自相矛盾，此一消極階段稱為何者？',
    options: [
      { key: 'A', text: '諷刺法（Irony）' },
      { key: 'B', text: '演繹法（Deduction）' },
      { key: 'C', text: '聯想法（Association）' },
      { key: 'D', text: '同化法（Assimilation）' }
    ],
    correctAnswer: 'A',
    explanation: '蘇格拉底產婆法包含消極與積極兩面：消極面為「諷刺（Irony）」，藉由層層詰問揭穿對方的假知，體認自我的無知；積極面為「接生術（Maieutic）」，引導對方產出真實概念。',
    examSource: '111年高雄市國小教師甄選教育專業試題',
    handoutRef: '講義第1章 p.15',
    difficulty: '中等'
  },
  {
    id: 'q-ch1-8',
    chapterId: 1,
    scholarId: 'confucius',
    topic: '孔子啟發教學時機',
    questionText: '孔子說：「不憤不啟，不悱不發。舉一隅不以三隅反，則不復也。」其中「憤」與「悱」指的是學生在何種心理狀態下，教師才給予啟發點撥最適宜？',
    options: [
      { key: 'A', text: '憤是心裡想通卻不想說；悱是全然不想思考' },
      { key: 'B', text: '憤是心裡苦思冥想而未通；悱是心中有所領會卻難以言表' },
      { key: 'C', text: '憤是感到生氣憤怒；悱是悲傷難過' },
      { key: 'D', text: '憤是作業做不完；悱是考試不及格' }
    ],
    correctAnswer: 'B',
    explanation: '「憤者，心求通而未得之意；悱者，口欲言而未能之貌。」孔子強調在學生思考積極投入、遇到瓶頸處於「心求通而未得、口欲言而未能」的關鍵起點時，給予及時啟發。',
    examSource: '112年教育部教師資格考試',
    handoutRef: '講義第1章 p.7, p.14',
    difficulty: '基礎'
  },
  {
    id: 'q-ch1-9',
    scholarId: 'eisner',
    chapterId: 1,
    topic: '艾斯納教育鑑賞與教育批評',
    questionText: '艾斯納（E. W. Eisner）將美學鑑賞概念引進教育評鑑領域，主張教師若要透徹理解複雜的課堂教室生態，必須具備察覺幽微教學品質的專業直覺。此能力被他稱之為：',
    options: [
      { key: 'A', text: '行為目標檢核' },
      { key: 'B', text: '教育鑑賞（Educational Connoisseurship）' },
      { key: 'C', text: '客觀統計常模' },
      { key: 'D', text: '工作歷程分析' }
    ],
    correctAnswer: 'B',
    explanation: '艾斯納提出「教育鑑賞與教育批評（Educational Connoisseurship and Criticism）」，教育鑑賞是鑑賞者欣賞察覺教室中質性幽微變化的內在眼光，教育批評則是將鑑賞結果轉化為公開語言向大眾闡釋。',
    examSource: '110年教育部教師資格考試（課程與教學）',
    handoutRef: '講義第1章 p.11',
    difficulty: '進階'
  },

  // ==========================================
  // 第 2 章：行為學習論 (Pavlov, Thorndike, Skinner, Carroll, Morrison)
  // ==========================================
  {
    id: 'q-ch2-1',
    chapterId: 2,
    scholarId: 'thorndike',
    topic: '桑代克三大學習律',
    questionText: '小華在數學課上回答問題正確後，獲得全班熱烈掌聲與老師讚許，讓他感到十分開心，之後在課堂上主動舉手發言的頻率明顯提高。此現象最能用桑代克（E. L. Thorndike）的哪一個學習律來解釋？',
    options: [
      { key: 'A', text: '準備律（Law of Readiness）' },
      { key: 'B', text: '練習律（Law of Exercise）' },
      { key: 'C', text: '效果律（Law of Effect）' },
      { key: 'D', text: '近因律（Law of Recency）' }
    ],
    correctAnswer: 'C',
    explanation: '桑代克的效果律指出：刺激與反應之間的聯結，如果隨後帶來令人滿意的後果（滿足感），則聯結強度會增加；反之若帶來困擾或痛苦，聯結則會減弱。',
    examSource: '112年教育部教師資格考試（教育理念與實踐）',
    handoutRef: '講義第2章 p.18',
    difficulty: '基礎'
  },
  {
    id: 'q-ch2-2',
    chapterId: 2,
    scholarId: 'skinner',
    topic: '正負增強與懲罰辨析',
    questionText: '林老師規定：「只要這週課堂小組討論全部按時完成並表現良好，週五的例行課後繁瑣打掃工作就可以免除一次。」林老師所採用的行為改變策略屬於下列何者？',
    options: [
      { key: 'A', text: '正增強（Positive Reinforcement）' },
      { key: 'B', text: '負增強（Negative Reinforcement）' },
      { key: 'C', text: '第一類型懲罰（Presentation Punishment）' },
      { key: 'D', text: '消弱（Extinction）' }
    ],
    correctAnswer: 'B',
    explanation: '「負增強」是透過【移除或免除嫌惡刺激】（免除繁瑣打掃），以達到【增加良好目標行為出現率】（認真討論完成作業）的行為改變策略。',
    examSource: '111年臺北市國小教育專業科目教師甄選',
    handoutRef: '講義第2章 p.18-19',
    difficulty: '中等'
  },
  {
    id: 'q-ch2-3',
    chapterId: 2,
    scholarId: 'skinner',
    topic: '間歇增強時制比較',
    questionText: '在史金納（B. F. Skinner）的操作制約實驗與行為改變技術中，下列哪一種間歇增強時制（Intermittent Reinforcement Schedule）所產生的行為反應速率最高，且在停止增強後的「抗消弱性」最強？',
    options: [
      { key: 'A', text: '固定比率時制（Fixed Ratio, FR）' },
      { key: 'B', text: '固定時距時制（Fixed Interval, FI）' },
      { key: 'C', text: '變動時距時制（Variable Interval, VI）' },
      { key: 'D', text: '變動比率時制（Variable Ratio, VR）' }
    ],
    correctAnswer: 'D',
    explanation: '變動比率時制（VR，例如吃角子老虎機、抽盲盒、隨機中獎）受試者無法預測究竟幾次反應才會獲得增強，因此行為反應極為密集且持久，抗消弱效果在四種時制中最強。',
    examSource: '110年高級中等以下學校教師資格考試',
    handoutRef: '講義第2章 p.18',
    difficulty: '進階'
  },
  {
    id: 'q-ch2-4',
    chapterId: 2,
    scholarId: 'carroll',
    topic: '卡羅學校學習模式',
    questionText: '卡羅（J. B. Carroll）提出學校學習模式（Model for School Learning），指出「學習程度（Degree of Learning）」取決於兩大時間因素的比值。下列何者正確？',
    options: [
      { key: 'A', text: '實際學習時間 ÷ 學習所需時間' },
      { key: 'B', text: '教師授課時間 ÷ 學生自學時間' },
      { key: 'C', text: '學習所需時間 ÷ 考試複習時間' },
      { key: 'D', text: '平時評量時間 ÷ 學期總上課時間' }
    ],
    correctAnswer: 'A',
    explanation: '卡羅公式為：學習程度 = f(實際用於學習的時間 / 學習所需要的時間)。卡羅更指出「性向（Aptitude）是學習速率的指標，而非學習成就極限」，只要給予足夠時間便能達成精熟。',
    examSource: '109年新北市國小教師甄選教育專業科目',
    handoutRef: '講義第2章 p.20-21',
    difficulty: '中等'
  },
  {
    id: 'q-ch2-5',
    chapterId: 2,
    scholarId: 'pavlov',
    topic: '巴夫洛夫古典制約之刺激類化',
    questionText: '小華小時候曾被鄰居家的一隻黑色大狼狗猛烈吠叫撲咬而受到極度驚嚇，從此之後，小華只要看到任何黑色毛茸茸的動物（甚至包括黑色絨毛玩具狗或黑色小貓）都會感到心跳加速、冷汗直流。在古典制約中，此種現象稱之為：',
    options: [
      { key: 'A', text: '刺激辨別（Stimulus Discrimination）' },
      { key: 'B', text: '刺激類化（Stimulus Generalization）' },
      { key: 'C', text: '自發性恢復（Spontaneous Recovery）' },
      { key: 'D', text: '次級增強（Secondary Reinforcement）' }
    ],
    correctAnswer: 'B',
    explanation: '在古典制約中，當個體對某一特定制約刺激（黑狼狗）形成反應後，遇到其他在物理或特徵上相似的刺激（黑貓、黑玩偶），亦會引發類似的制約恐懼反應，稱為「刺激類化」。',
    examSource: '112年臺中市公立國小教師甄選教育專業試題',
    handoutRef: '講義第2章 p.17, p.23-24',
    difficulty: '基礎'
  },
  {
    id: 'q-ch2-6',
    chapterId: 2,
    scholarId: 'skinner',
    topic: '行為塑造 (Shaping)',
    questionText: '特教老師想要訓練自閉症學童學會自己扣好襯衫鈕扣，一開始只要學童手指碰到鈕扣就給予讚許與點心，接著要求用手捏住鈕扣才給獎勵，之後進一步要求將鈕扣對準扣眼才給獎勵，最後必須完全穿過扣眼並扣好才獲得增強。這種透過逐步增強連續接近目標的歷程稱為什麼？',
    options: [
      { key: 'A', text: '普墨克原則（Premack Principle）' },
      { key: 'B', text: '行為塑造 / 逐步逼近法（Shaping / Successive Approximations）' },
      { key: 'C', text: '消弱（Extinction）' },
      { key: 'D', text: '古典制約反射' }
    ],
    correctAnswer: 'B',
    explanation: '行為塑造（Shaping）是史金納操作制約的重要應用，透過對「連續接近目標行為的小步驟（Successive Approximations）」予以差別增強，直到最後建立全新的複雜行為。',
    examSource: '111年教育部教師資格考試（學習者發展與適性輔導）',
    handoutRef: '講義第2章 p.18-19',
    difficulty: '中等'
  },
  {
    id: 'q-ch2-7',
    chapterId: 2,
    scholarId: 'skinner',
    topic: '普墨克原則 (Premack Principle)',
    questionText: '媽媽對正在看電視的小明說：「只要你先把這回數學作業算完並檢查好，你就可以出去打一小時籃球。」媽媽所運用的增強策略是下列哪一項原理？',
    options: [
      { key: 'A', text: '普墨克原則（Premack Principle / 祖母法則）' },
      { key: 'B', text: '消弱突增（Extinction Burst）' },
      { key: 'C', text: '過度矯正（Overcorrection）' },
      { key: 'D', text: '嫌惡制約（Aversive Conditioning）' }
    ],
    correctAnswer: 'A',
    explanation: '普墨克原則（Premack Principle，又稱祖母法則）指出：以個體高頻率出現的喜好行為（打籃球），作為誘因來增強個體較低頻率出現的不喜好目標行為（寫數學作業）。',
    examSource: '112年臺北市國小教師甄選教育專業試題',
    handoutRef: '講義第2章 p.19',
    difficulty: '基礎'
  },
  {
    id: 'q-ch2-8',
    chapterId: 2,
    scholarId: 'thorndike',
    topic: '桑代克之練習律與使用律',
    questionText: '桑代克（Thorndike）在練習律中指出，刺激與反應的聯結會因反覆練習應用而加強（使用律），但若長久不練習，此聯結強度就會隨時間逐漸淡化減弱。此後者現象稱為：',
    options: [
      { key: 'A', text: '失用律（Law of Disuse）' },
      { key: 'B', text: '準備律（Law of Readiness）' },
      { key: 'C', text: '效果律（Law of Effect）' },
      { key: 'D', text: '自發律（Law of Spontaneity）' }
    ],
    correctAnswer: 'A',
    explanation: '桑代克的練習律包含使用律（Law of use，練習越多聯結越強）與失用律（Law of disuse，久不練習聯結強度減弱）。',
    examSource: '110年教育部教師資格考試',
    handoutRef: '講義第2章 p.18',
    difficulty: '基礎'
  },

  // ==========================================
  // 第 3 章：社會學習論 (Bandura, Zimmerman, Flavell)
  // ==========================================
  {
    id: 'q-ch3-1',
    chapterId: 3,
    scholarId: 'bandura',
    topic: '班杜拉觀察學習四階段',
    questionText: '在班杜拉（A. Bandura）的觀察學習理論中，學習者「將楷模所表現的行為特徵，以符號或心像的型態保存在長期記憶中以便日後提取」是屬於下列哪一個歷程？',
    options: [
      { key: 'A', text: '注意歷程（Attentional Processes）' },
      { key: 'B', text: '保持歷程（Retention Processes）' },
      { key: 'C', text: '動作再生歷程（Motor Reproduction Processes）' },
      { key: 'D', text: '動機歷程（Motivational Processes）' }
    ],
    correctAnswer: 'B',
    explanation: '班杜拉觀察學習四歷程順序為：注意歷程（看見並選擇性知覺楷模特徵）→ 保持歷程（以意象或語言符號編碼記憶）→ 動作再生歷程（轉化為身體動作操作再現）→ 動機歷程（受到增強驅使願意自發表現）。',
    examSource: '112年教育部教師資格考試（學習者發展與適性輔導）',
    handoutRef: '講義第3章 p.28-29',
    difficulty: '基礎'
  },
  {
    id: 'q-ch3-2',
    chapterId: 3,
    scholarId: 'bandura',
    topic: '三元交互決定論與自我效能',
    questionText: '小明看見平時和自己數學能力差不多的同班同學阿達，經過兩週每天苦練解出艱深的幾何難題並獲得滿分，小明心想：「既然阿達做得到，那我一定也可以！」因而信心大增開始用功。依班杜拉的觀點，小明自我效能感的提升主要是來自何種來源？',
    options: [
      { key: 'A', text: '直接的成敗經驗（Mastery Experience）' },
      { key: 'B', text: '替代性經驗（Vicarious Experience）' },
      { key: 'C', text: '言語勸說（Verbal Persuasion）' },
      { key: 'D', text: '生理與情緒狀態（Physiological States）' }
    ],
    correctAnswer: 'B',
    explanation: '觀察與自己背景或能力相近的同儕楷模獲得成功，從而產生「別人能，我也能」的信念，屬於班杜拉自我效能四大來源中的「替代性經驗（Vicarious Experience）」。',
    examSource: '111年高級中等以下學校及幼兒園教師資格考試',
    handoutRef: '講義第3章 p.29-30',
    difficulty: '中等'
  },
  {
    id: 'q-ch3-3',
    chapterId: 3,
    scholarId: 'zimmerman',
    topic: '齊瑪曼自律學習循環',
    questionText: '依據齊瑪曼（B. J. Zimmerman）提出的自律學習（Self-Regulated Learning, SRL）三階段循環模式，學生在學習歷程中的正確發展順序為何？',
    options: [
      { key: 'A', text: '計畫階段（Forethought）→ 執行階段（Performance）→ 自我反省階段（Self-Reflection）' },
      { key: 'B', text: '執行階段 → 計畫階段 → 評價階段' },
      { key: 'C', text: '反省階段 → 執行階段 → 監控階段' },
      { key: 'D', text: '診斷階段 → 修正階段 → 精熟階段' }
    ],
    correctAnswer: 'A',
    explanation: 'Zimmerman 的自律學習循環模式包含三大階段：1. 計畫階段（目標設定、策略規劃）→ 2. 執行階段（策略執行與自我監控）→ 3. 自我反省階段（自我評價、因果歸因與反應適應）。',
    examSource: '110年教育部教師資格考試',
    handoutRef: '講義第3章 p.31, p.107',
    difficulty: '中等'
  },
  {
    id: 'q-ch3-4',
    chapterId: 3,
    scholarId: 'flavell',
    topic: '後設認知概念',
    questionText: '小華在閱讀長篇文章時，發現自己讀到第五段時思緒飄走且無法理解文意，於是停下來重新倒回第四段放慢速度重讀，並拿筆畫出核心架構圖。小華此種行為展現了心理學上的何種能力？',
    options: [
      { key: 'A', text: '後設認知（Meta-Cognition）的監控與調整' },
      { key: 'B', text: '巴夫洛夫的古典刺激辨別' },
      { key: 'C', text: '桑代克的準備律衝動' },
      { key: 'D', text: '史金納的行為串連' }
    ],
    correctAnswer: 'A',
    explanation: '後設認知（Flavell / Brown 提出）是指個人對自己認知歷程（記憶、理解、思考）的覺察、監控、評鑑與隨機調整策略之能力。小華察覺不懂並主動倒讀畫圖，即典型的後設認知監控。',
    examSource: '109年桃園市國小教育專業科目試題',
    handoutRef: '講義第3章 p.31-32',
    difficulty: '基礎'
  },
  {
    id: 'q-ch3-5',
    chapterId: 3,
    scholarId: 'bandura',
    topic: '班杜拉替代增強與波波玩偶實驗',
    questionText: '小強看到隔壁桌的同學小華上課擅自離開座位被老師當眾厲聲斥責並罰站，小強立刻坐直身體不再亂動。小強此種行為的改變在班杜拉社會學習理論中屬於下列何者？',
    options: [
      { key: 'A', text: '直接增強' },
      { key: 'B', text: '替代性懲罰（Vicarious Punishment）' },
      { key: 'C', text: '自我增強' },
      { key: 'D', text: '負增強' }
    ],
    correctAnswer: 'B',
    explanation: '個體並未親身受罰，而是藉由觀察他人表現某行為後所遭受的不良後果（受責罰），從而抑制自己表現該不良行為的傾向，稱為「替代性懲罰」。',
    examSource: '111年教育部教師資格考試（學習者發展與適性輔導）',
    handoutRef: '講義第3章 p.27-28',
    difficulty: '基礎'
  },
  {
    id: 'q-ch3-6',
    chapterId: 3,
    scholarId: 'bandura',
    topic: '班杜拉三元交互決定論',
    questionText: '班杜拉（Bandura）反對行為學派極端的環境決定論，主張人類行為是三種因素動態交互作用的產物。這三項因素為：',
    options: [
      { key: 'A', text: '個人（認知）、行為、環境' },
      { key: 'B', text: '遺傳、生理、家庭' },
      { key: 'C', text: '本我、自我、超我' },
      { key: 'D', text: '刺激、反應、增強' }
    ],
    correctAnswer: 'A',
    explanation: '三元交互決定論（Triadic Reciprocal Determinism）認為：個人的內在認知信念（P）、外顯行為表現（B）以及外在物理/社會環境（E）三者相互影響、互為因果。',
    examSource: '112年高級中等以下學校教師資格考試',
    handoutRef: '講義第3章 p.28',
    difficulty: '基礎'
  },
  {
    id: 'q-ch3-7',
    chapterId: 3,
    scholarId: 'flavell',
    topic: '後設認知知識三維度',
    questionText: 'Flavell 指出後設認知知識主要包含三大成分：「人（認識自己與他人認知特質）」、「作業（了解任務難易與性質）」以及下列何者？',
    options: [
      { key: 'A', text: '策略（知曉採用何種有效方法解決問題）' },
      { key: 'B', text: '獎賞（知道考多少分可以領零用錢）' },
      { key: 'C', text: '處罰（知道做錯會受到何種懲處）' },
      { key: 'D', text: '遺傳（知道自己的生理智商數值）' }
    ],
    correctAnswer: 'A',
    explanation: 'Flavell 將後設認知知識劃分為：(1) 個人變項（Person）、(2) 作業/任務變項（Task）、(3) 策略變項（Strategy：知道何時及如何使用特定策略）。',
    examSource: '110年臺中市公立國小教師甄選教育專業試題',
    handoutRef: '講義第3章 p.31-32',
    difficulty: '中等'
  },

  // ==========================================
  // 第 4 章：認知學習論 (Piaget, Bruner, Dale, Ausubel)
  // ==========================================
  {
    id: 'q-ch4-1',
    chapterId: 4,
    scholarId: 'piaget',
    topic: '皮亞傑認知發展四階段與守恆',
    questionText: '老師將兩個完全相同的細長玻璃杯裝滿等量的水，當著國小一年級學生小明的面，將其中一杯水倒入寬矮的胖胖玻璃杯中，小明一口咬定寬杯子裡的水「變少了」，因為看起來比較矮。依皮亞傑（J. Piaget）的理論，小明目前處於哪一個發展階段？',
    options: [
      { key: 'A', text: '感覺動作期（Sensorimotor Stage）' },
      { key: 'B', text: '前運思期（Preoperational Stage）' },
      { key: 'C', text: '具體運思期（Concrete Operational Stage）' },
      { key: 'D', text: '形式運思期（Formal Operational Stage）' }
    ],
    correctAnswer: 'B',
    explanation: '前運思期（約2-7歲）兒童思考具有「知覺集中傾向（Centration）」且「缺乏可逆性（Irreversibility）」，尚未發展出「守恆概念（Conservation）」，往往只注意單一維度（高度）而忽略寬度的補償。',
    examSource: '112年教育部教師資格考試',
    handoutRef: '講義第4章 p.35-36',
    difficulty: '基礎'
  },
  {
    id: 'q-ch4-2',
    chapterId: 4,
    scholarId: 'bruner',
    topic: '布魯納表徵三期與螺旋課程',
    questionText: '布魯納（J. S. Bruner）認為任何學科的基本概念都可以用某種認知誠實的方式教給任何年齡的兒童，因此主張教材應隨年齡成長，由淺入深、反覆加深加廣呈現。此種課程組織結構稱為何者？',
    options: [
      { key: 'A', text: '核心課程（Core Curriculum）' },
      { key: 'B', text: '螺旋式課程（Spiral Curriculum）' },
      { key: 'C', text: '同心圓課程（Concentric Curriculum）' },
      { key: 'D', text: '活動課程（Activity Curriculum）' }
    ],
    correctAnswer: 'B',
    explanation: '布魯納主張「螺旋式課程（Spiral Curriculum）」，配合兒童認知表徵發展（動作→影像→符號），將學科的核心基本結構由簡至繁、循環反覆地加深加廣進行教學設計。',
    examSource: '111年新北市國小教師甄選教育專業試題',
    handoutRef: '講義第4章 p.36-37',
    difficulty: '中等'
  },
  {
    id: 'q-ch4-3',
    chapterId: 4,
    scholarId: 'ausubel',
    topic: '奧斯貝前導組織 (Advance Organizer)',
    questionText: '歷史老師在講授「清末自強運動」前，先發給學生一張比較表，概括回顧並對比明朝晚期的洋務引進與日本明治維新的變法核心概念，幫助學生在學習清末自強運動前建立起上位的觀念鷹架。奧斯貝（D. Ausubel）將此教學策略稱為什麼？',
    options: [
      { key: 'A', text: '前導組織（Advance Organizer）' },
      { key: 'B', text: '行為塑造（Behavior Shaping）' },
      { key: 'C', text: '工作分析（Task Analysis）' },
      { key: 'D', text: '同儕示範（Peer Modeling）' }
    ],
    correctAnswer: 'A',
    explanation: '奧斯貝倡導有意義學習，主張在呈現主要教材之前，先提供包容性較廣、抽象層次較高的引導性材料，稱為「前導組織（Advance Organizer）」，用以在新舊知識之間架起橋樑。本題包含兩者概念異同之引導，屬於「比較性前導組織」。',
    examSource: '110年教育部教師資格考試（課程教學與評量）',
    handoutRef: '講義第4章 p.38-39',
    difficulty: '中等'
  },
  {
    id: 'q-ch4-4',
    chapterId: 4,
    scholarId: 'dale',
    topic: '戴爾經驗金字塔',
    questionText: '戴爾（E. Dale）提出經驗金字塔（Cone of Experience），根據經驗的抽象程度由底至頂分為三大層次。下列哪一個順序排列完全正確？',
    options: [
      { key: 'A', text: '抽象概念（文字符號）→ 做的經驗（實作操作）→ 觀察的經驗（參觀影片）' },
      { key: 'B', text: '做的經驗（具體操作）→ 觀察的經驗（圖像影片模型）→ 抽象的經驗（語言文字符號）' },
      { key: 'C', text: '觀察的經驗 → 抽象的經驗 → 做的經驗' },
      { key: 'D', text: '文字符號經驗 → 實物模型經驗 → 戲劇表演經驗' }
    ],
    correctAnswer: 'B',
    explanation: '戴爾經驗金字塔最底層是「做的經驗」（直接有目的的經驗、動手操作實作），中層是「觀察的經驗」（示範、參觀、電視影片、靜畫、立體模型），頂層則是「抽象的經驗」（視覺符號、口述語言文字）。',
    examSource: '109年高雄市國小教育學科教甄',
    handoutRef: '講義第4章 p.37',
    difficulty: '基礎'
  },
  {
    id: 'q-ch4-5',
    chapterId: 4,
    scholarId: 'piaget',
    topic: '同化與調適 (Assimilation vs Accommodation)',
    questionText: '兩歲半的小明原本只看過自家的寵物狗，將所有四條腿毛茸茸的動物都叫作「狗狗」。今天去動物園看到綿羊時，小明先是大喊「狗狗！」，但聽見媽媽說「這不是狗，牠會咩咩叫而且身上的毛捲捲的，這是羊」，小明調整了自己的動物認知分類。小明調整認知結構並接納新概念的歷程稱為：',
    options: [
      { key: 'A', text: '同化（Assimilation）' },
      { key: 'B', text: '調適（Accommodation）' },
      { key: 'C', text: '消弱（Extinction）' },
      { key: 'D', text: '客體恆存（Object Permanence）' }
    ],
    correctAnswer: 'B',
    explanation: '皮亞傑指出：遇到新刺激時，個體若能將其納入既有基模稱為「同化（量變）」；若既有基模無法合理解釋，個體修改或創立新基模以適應環境，稱為「調適（質變）」。小明修正原本基模認識綿羊，屬於調適歷程。',
    examSource: '112年新北市公立國小教師甄選教育專業試題',
    handoutRef: '講義第4章 p.35',
    difficulty: '基礎'
  },
  {
    id: 'q-ch4-6',
    chapterId: 4,
    scholarId: 'piaget',
    topic: '皮亞傑三山實驗與自我中心',
    questionText: '皮亞傑（Piaget）著名的「三山實驗（Three Mountain Problem）」主要是用來驗證幼兒在認知思考上的何種特徵？',
    options: [
      { key: 'A', text: '物體恆存性' },
      { key: 'B', text: '自我中心主義（Egocentrism）' },
      { key: 'C', text: '演繹推理能力' },
      { key: 'D', text: '符號表徵能力' }
    ],
    correctAnswer: 'B',
    explanation: '三山實驗中，前運思期兒童無法設想坐在桌子對面的人所看見的山景視角，總是認為對面的人看到的景象跟自己看到的一模一樣，證實了前運思期的「自我中心主義（無法轉換他人視角）」。',
    examSource: '111年教育部教師資格考試（學習者發展）',
    handoutRef: '講義第4章 p.35',
    difficulty: '中等'
  },
  {
    id: 'q-ch4-7',
    chapterId: 4,
    scholarId: 'ausubel',
    topic: '奧斯貝之漸進分化與統整協調',
    questionText: '奧斯貝（Ausubel）主張在編排教材順序時，應先呈現最廣泛、包容性最高的核心一般概念，然後再依序逐步分化出次級的具體細部概念。這項原則稱之為：',
    options: [
      { key: 'A', text: '漸進分化（Progressive Differentiation）' },
      { key: 'B', text: '統整協調（Integrative Reconciliation）' },
      { key: 'C', text: '發現探究' },
      { key: 'D', text: '行為塑造' }
    ],
    correctAnswer: 'A',
    explanation: '奧斯貝有意義學習兩大教材原則：(1)「漸進分化」由上而下、由大概念到細部概念逐層展開；(2)「統整協調」橫向連結比較新舊概念之間的關聯與異同。',
    examSource: '111年高雄市國小教師甄選教育專業科目',
    handoutRef: '講義第4章 p.38-39',
    difficulty: '中等'
  },

  // ==========================================
  // 第 5 章：建構主義教學理論與應用 (Vygotsky, Bloom, 翻轉教室)
  // ==========================================
  {
    id: 'q-ch5-1',
    chapterId: 5,
    scholarId: 'vygotsky',
    topic: '近側發展區 (ZPD) 與鷹架理論',
    questionText: '維高斯基（L. S. Vygotsky）認為學生有兩種發展水準，兩者之間的差距稱之為「近側發展區（Zone of Proximal Development, ZPD）」。這兩種水準分別是指：',
    options: [
      { key: 'A', text: '遺傳生理水準 與 心理年齡水準' },
      { key: 'B', text: '實際獨立解決問題的發展水準 與 在成人指導或有能力同儕協助下的潛在發展水準' },
      { key: 'C', text: '語言表現水準 與 邏輯思考水準' },
      { key: 'D', text: '前運思期水準 與 形式運思期水準' }
    ],
    correctAnswer: 'B',
    explanation: '近側發展區（ZPD）指兒童在獨自解決問題時所表現的「實際發展水準」，與在成人引導或能力較強同伴合作下所能達到之「潛在發展水準」之間的動態差距。',
    examSource: '112年高級中等以下學校教師資格考試',
    handoutRef: '講義第5章 p.42-45',
    difficulty: '基礎'
  },
  {
    id: 'q-ch5-2',
    chapterId: 5,
    scholarId: 'vygotsky',
    topic: '維高斯基私語與內化歷程',
    questionText: '幼兒園大班的小萱在自己拼拼圖時，一邊拼一邊小聲自言自語說：「這塊是藍色的天空，應該要放在最上面角落……不對，這個邊角是圓的，應該放這裡。」維高斯基將幼童此種自言自語稱為何者？並視為具備何種心理功能？',
    options: [
      { key: 'A', text: '自我中心語言，是認知不成熟的缺陷' },
      { key: 'B', text: '私語（Private Speech），是引導思維與自我調節的認知工具' },
      { key: 'C', text: '條件反射語言，是古典制約的無意識反應' },
      { key: 'D', text: '刺激類化語言，用以尋求成人的物質獎賞' }
    ],
    correctAnswer: 'B',
    explanation: '維高斯基認為幼童的自言自語為「私語（Private Speech）」，是社會語言轉化為內在思維的中介橋樑，具備自我引導、計劃、監控思考與調節行為之重要認知功能；與皮亞傑視為自我中心無成熟度截然不同。',
    examSource: '111年教育部教師資格考試',
    handoutRef: '講義第5章 p.43-44',
    difficulty: '中等'
  },
  {
    id: 'q-ch5-3',
    chapterId: 5,
    scholarId: 'bloom',
    topic: 'Bloom新版認知歷程向度',
    questionText: '在 Anderson & Krathwohl（2001）修訂的布魯姆（Bloom）認知歷程向度分類學中，認知能力由低階至高階的正確六個層次為何？',
    options: [
      { key: 'A', text: '記憶 → 理解 → 應用 → 分析 → 評鑑 → 創造' },
      { key: 'B', text: '知識 → 理解 → 應用 → 分析 → 綜合 → 評鑑' },
      { key: 'C', text: '注意 → 保持 → 再生 → 動機 → 評估 → 創新' },
      { key: 'D', text: '同化 → 調適 → 平衡 → 解釋 → 應用 → 批判' }
    ],
    correctAnswer: 'A',
    explanation: '2001年新修訂版將名詞改為動詞，最高層次由原先的「評鑑（Evaluation）」調整為「創造（Creating）」：記憶（Remembering）→ 理解（Understanding）→ 應用（Applying）→ 分析（Analyzing）→ 評鑑（Evaluating）→ 創造（Creating）。',
    examSource: '110年教育部教師資格考試（課程與教學）',
    handoutRef: '講義第5章 p.41, 第7章 p.60',
    difficulty: '中等'
  },
  {
    id: 'q-ch5-4',
    chapterId: 5,
    scholarId: 'vygotsky',
    topic: '動態評量 (Dynamic Assessment)',
    questionText: '根據維高斯基近側發展區（ZPD）的概念，評量不應只測量學生既有的靜態知識，而應採取「前測 → 教學介入與提示 → 後測」以測量學生學習潛能。此種評量模式稱為何者？',
    options: [
      { key: 'A', text: '常模參照評量' },
      { key: 'B', text: '動態評量（Dynamic Assessment）' },
      { key: 'C', text: '安置性評量' },
      { key: 'D', text: '標準化智力測驗' }
    ],
    correctAnswer: 'B',
    explanation: '動態評量源自維高斯基的社會建構理論與 Feuerstein 的中介學習經驗，強調在評量過程中給予教學中介與提示，以評估學生的可塑性與潛在學習能力。',
    examSource: '111年臺北市國小教育專業科目試題',
    handoutRef: '講義第5章 p.44-45',
    difficulty: '中等'
  },
  {
    id: 'q-ch5-5',
    chapterId: 5,
    scholarId: 'vygotsky',
    topic: '鷹架之漸進褪除 (Fading)',
    questionText: '在建構主義鷹架理論（Scaffolding）中，教師在學生能力尚不成熟時提供充分支持，但隨著學生掌握技能程度提高，教師應逐步減少介入與協助，讓學生獨立完成任務。此歷程稱之為：',
    options: [
      { key: 'A', text: '消弱（Extinction）' },
      { key: 'B', text: '褪除（Fading / Dismantling）' },
      { key: 'C', text: '類化（Generalization）' },
      { key: 'D', text: '分化（Differentiation）' }
    ],
    correctAnswer: 'B',
    explanation: '鷹架作用如同建築工地施工，當建築物本體逐漸完工具備支撐力時，外圍鷹架必須逐步拆除褪去（Fading），使學生達成自主負責之目標。',
    examSource: '110年新北市國小教師甄選試題',
    handoutRef: '講義第5章 p.42, p.45',
    difficulty: '基礎'
  },
  {
    id: 'q-ch5-6',
    chapterId: 5,
    scholarId: 'bloom',
    topic: 'Bloom認知層次之「分析」與「評鑑」辨析',
    questionText: '自然科李老師要求學生：「根據實驗數據繪製折線圖，找出溫度上升與氣體溶解度之間的因果因應關係，並區分自變項與控制變項之關聯。」依修訂版 Bloom 認知歷程向度，此目標屬於下列哪一個層次？',
    options: [
      { key: 'A', text: '記憶（Remembering）' },
      { key: 'B', text: '應用（Applying）' },
      { key: 'C', text: '分析（Analyzing）' },
      { key: 'D', text: '創造（Creating）' }
    ],
    correctAnswer: 'C',
    explanation: '「分析」層次涉及將材料分解為各組成要素，並確定要素之間以及要素與整體結構之間的相互關聯與因果結構（如區辨、組織、歸因）。',
    examSource: '112年臺北市國小教師甄選教育專業試題',
    handoutRef: '講義第5章 p.41, 第7章 p.60',
    difficulty: '中等'
  },

  // ==========================================
  // 第 6 章：人本學派教學理論與應用 (Maslow, Rogers)
  // ==========================================
  {
    id: 'q-ch6-1',
    chapterId: 6,
    scholarId: 'maslow',
    topic: '馬斯洛需求層次理論與匱乏需求',
    questionText: '學校教師發現班上小明上午常無精打采、注意力渙散甚至趴睡，經家庭訪視得知小明家境清寒，早晨常沒吃早餐且夜晚因家中爭吵常處於恐懼之中。依馬斯洛（A. Maslow）的需求層次理論，下列哪一項分析最為適切？',
    options: [
      { key: 'A', text: '小明的求知需求太旺盛導致身體疲勞' },
      { key: 'B', text: '小明低層次的生理與安全等匱乏需求未獲滿足，難以產生高層次的求知與自我實現動機' },
      { key: 'C', text: '小明欠缺的是史金納的外在代幣刺激' },
      { key: 'D', text: '小明已達到自我超越的高峰經驗' }
    ],
    correctAnswer: 'B',
    explanation: '馬斯洛需求層次論中，生理、安全、愛與隸屬、自尊屬於「匱乏需求（Deficiency Needs）」。低層次匱乏需求若未獲得合理滿足，個體身心將處於緊繃或匱乏狀態，高層次的求知、審美與自我實現等成長需求便無法正常萌發。',
    examSource: '112年高級中等以下學校教師資格考試',
    handoutRef: '講義第6章 p.49-51',
    difficulty: '基礎'
  },
  {
    id: 'q-ch6-2',
    chapterId: 6,
    scholarId: 'rogers',
    topic: '羅吉斯人本教學與促進者條件',
    questionText: '羅吉斯（Carl Rogers）提出人本主義「自由學習（Freedom to Learn）」，認為教師不應扮演權威講授者，而應成為學習的「促進者（Facilitator）」。羅吉斯指出促進者必須具備哪三種基本態度？',
    options: [
      { key: 'A', text: '準備律、練習律、效果律' },
      { key: 'B', text: '真誠一致（Congruence）、無條件積極關懷（Unconditional Positive Regard）、同理心理解（Empathy）' },
      { key: 'C', text: '確定目的、擬定計畫、實施評量' },
      { key: 'D', text: '前導組織、漸進分化、統整協調' }
    ],
    correctAnswer: 'B',
    explanation: '羅吉斯人本諮商與教學的核心三要素為：(1) 真誠一致（教師展現真實的自我，表裡如一）、(2) 無條件積極關懷（無條件接納尊重學生的獨特性）、(3) 同理心傾聽與理解（站在學生的立場感同身受）。',
    examSource: '111年臺北市公立國小教師甄選教育專業試題',
    handoutRef: '講義第6章 p.47-48, p.52',
    difficulty: '中等'
  },
  {
    id: 'q-ch6-3',
    chapterId: 6,
    scholarId: 'maslow',
    topic: '馬斯洛八階層與自我超越',
    questionText: '馬斯洛晚年（1970年左右）在其著作《The Farther Reaches of Human Nature》中修訂其需求模型，將需求的最高頂點擴展為下列何者？',
    options: [
      { key: 'A', text: '自我實現需求（Self-Actualization）' },
      { key: 'B', text: '自我超越需求（Self-Transcendence）' },
      { key: 'C', text: '美感需求（Aesthetic Needs）' },
      { key: 'D', text: '權力求勝需求（Power Needs）' }
    ],
    correctAnswer: 'B',
    explanation: '馬斯洛晚年提出八階層模型，在自我實現之上加入「自我超越（Self-Transcendence）」，指個體超越自我界限，為利他、社會福祉、大自然或宇宙精神奉獻的最高心靈層次。',
    examSource: '110年教育部教師資格考試（學習者發展）',
    handoutRef: '講義第6章 p.50-51',
    difficulty: '進階'
  },
  {
    id: 'q-ch6-4',
    chapterId: 6,
    scholarId: 'rogers',
    topic: '以學生為中心之教育哲學',
    questionText: '羅吉斯指出：「在教學過程中，凡是能直接教給別人的東西，往往是無關宏旨的，對於個人的行為沒有多大影響。」他主張有意義的學習必須建立在何種基礎之上？',
    options: [
      { key: 'A', text: '學生由自我發現且與自我全人生活息息相關的經驗' },
      { key: 'B', text: '反覆精確的行為塑造與外在增強' },
      { key: 'C', text: '權威嚴格的法治紀律約束' },
      { key: 'D', text: '標準化紙筆測驗的高分激勵' }
    ],
    correctAnswer: 'A',
    explanation: '羅吉斯人本主義的核心觀點認為，唯有融入學習者自我知覺結構、由個人主動探索發現且具有主觀情感意義的知識，才能促成個體真正的改變與成長。',
    examSource: '109年高級中等學校教師資格考試',
    handoutRef: '講義第6章 p.48, p.52',
    difficulty: '中等'
  },
  {
    id: 'q-ch6-5',
    chapterId: 6,
    scholarId: 'maslow',
    topic: '馬斯洛高峰經驗 (Peak Experience)',
    questionText: '在人本心理學中，馬斯洛描述自我實現者有時會在藝術創作、深刻領悟或深刻愛意中，體驗到超越時空限制、極度狂喜與寧靜合一的神聖心靈感受。此種體驗被稱為：',
    options: [
      { key: 'A', text: '高峰經驗（Peak Experience）' },
      { key: 'B', text: '感官剝奪經驗' },
      { key: 'C', text: '刺激類化經驗' },
      { key: 'D', text: '替代制約經驗' }
    ],
    correctAnswer: 'A',
    explanation: '高峰經驗（Peak Experience）是馬斯洛人本心理學的重要概念，指個體在心靈深處體驗到無比和諧、狂喜、洞察與生命圓滿的短暫狀態，常見於自我實現者的成長歷程中。',
    examSource: '111年新北市教育專業科目試題',
    handoutRef: '講義第6章 p.49',
    difficulty: '中等'
  },

  // ==========================================
  // 第 7 章：教學設計模式與教學計畫撰寫 (ASSURE, UbD, Wiggins & McTighe)
  // ==========================================
  {
    id: 'q-ch7-1',
    chapterId: 7,
    topic: 'ASSURE教學媒體設計模式',
    scholarId: 'wiggins_mctighe',
    questionText: '在 Heinich 等人提出的 ASSURE 教學設計模式中，字母「U」所代表的核心教學設計步驟為何？',
    options: [
      { key: 'A', text: '瞭解學生特質（Understand Learners）' },
      { key: 'B', text: '運用媒體與教材（Utilize Media and Materials）' },
      { key: 'C', text: '統一教學目標（Unify Objectives）' },
      { key: 'D', text: '進行單元測驗（Unit Assessment）' }
    ],
    correctAnswer: 'B',
    explanation: 'ASSURE 模式由六步驟組成：A（Analyze learners 分析學習者）→ S（State objectives 陳述目標）→ S（Select methods/media/materials 選擇方法、媒體與教材）→ U（Utilize media and materials 運用媒體與教材）→ R（Require learner participation 要求學習者參與）→ E（Evaluate and revise 評量與修訂）。',
    examSource: '112年教育部教師資格考試（課程與教學）',
    handoutRef: '講義第7章 p.57',
    difficulty: '基礎'
  },
  {
    id: 'q-ch7-2',
    chapterId: 7,
    scholarId: 'wiggins_mctighe',
    topic: 'UbD 重理解的課程設計與逆向設計',
    questionText: '威金斯與麥克泰（Wiggins & McTighe）倡導「UbD 重理解的課程設計（Understanding by Design）」，強調逆向設計（Backward Design）理念。其教學規劃的三大階段順序為何？',
    options: [
      { key: 'A', text: '階段一：設計教學活動 → 階段二：選定教科書 → 階段三：實施期末紙筆測驗' },
      { key: 'B', text: '階段一：確認預期的學習結果 → 階段二：決定可接受的評量證據 → 階段三：規劃學習經驗與教學活動' },
      { key: 'C', text: '階段一：進行前測診斷 → 階段二：實施直接教學 → 階段三：進行補救教學' },
      { key: 'D', text: '階段一：分析媒體設備 → 階段二：編寫學生學習單 → 階段三：家長簽署聯絡簿' }
    ],
    correctAnswer: 'B',
    explanation: 'UbD 逆向設計主張「以終為始」，打破傳統活動導向或課本進度導向：階段一先確認期待的學習結果（大概念與核心問題）→ 階段二先思考需要何種表現評量證據能證明學生真正理解 → 階段三最後才規劃達成該評量之教學活動。',
    examSource: '111年教育部高級中等以下學校教師資格考試',
    handoutRef: '講義第7章 p.58, p.69-71',
    difficulty: '中等'
  },
  {
    id: 'q-ch7-3',
    chapterId: 7,
    scholarId: 'wiggins_mctighe',
    topic: 'UbD 六大理解面向之觀點面向',
    questionText: '在 UbD 六大理解面向中，學生能夠「跳脫單一立場，從多種不同的角度、歷史背景或批判視野審視同一件事件，看出大局與背後潛在假設」。這屬於下列哪一個理解面向？',
    options: [
      { key: 'A', text: '觀點（Perspective）' },
      { key: 'B', text: '解釋（Explanation）' },
      { key: 'C', text: '自知（Self-Knowledge）' },
      { key: 'D', text: '應用（Application）' }
    ],
    correctAnswer: 'A',
    explanation: '「觀點（Perspective）」是指能夠進行批判性審視，看見全局、體察不同立場與視角，並辨識出潛在偏見與假設之深層理解能力。',
    examSource: '110年臺北市國中教師甄選教育專業試題',
    handoutRef: '講義第7章 p.71',
    difficulty: '中等'
  },
  {
    id: 'q-ch7-4',
    chapterId: 7,
    topic: '108課綱素養導向教學四大原則',
    questionText: '教育部推動 12 年國教課綱，提出素養導向教學四大原則。下列哪一項「不屬於」這四大原則之一？',
    options: [
      { key: 'A', text: '整合知識、技能與態度' },
      { key: 'B', text: '情境化與脈絡化的學習' },
      { key: 'C', text: '兼重學習歷程、方法及策略' },
      { key: 'D', text: '以大量反覆抄寫練習作為主要評量依據' }
    ],
    correctAnswer: 'D',
    explanation: '素養導向教學四大原則為：1. 整合知識、技能與態度；2. 情境化、脈絡化的學習；3. 重視學習歷程、方法及策略；4. 強調實踐力行的表現。D 選項死背抄寫違背素養導向精神。',
    examSource: '112年高級中等以下學校教師資格考試',
    handoutRef: '講義第7章 p.59',
    difficulty: '基礎'
  },
  {
    id: 'q-ch7-5',
    chapterId: 7,
    scholarId: 'wiggins_mctighe',
    topic: 'UbD 核心問題 (Essential Questions)',
    questionText: 'Wiggins & McTighe 在 UbD 逆向設計階段一中，強調教師應設計「核心問題（Essential Questions）」。下列關於核心問題特徵的敘述，何者最為正確？',
    options: [
      { key: 'A', text: '它通常只有一個唯一的標準答案，可以在課本末頁查到' },
      { key: 'B', text: '它是開放性的、具有思維挑戰性，能引導學生持續探究學科大概念' },
      { key: 'C', text: '它是非選題考試時的防作弊題目' },
      { key: 'D', text: '它只適合在學期期末總結性考試中出現' }
    ],
    correctAnswer: 'B',
    explanation: '核心問題（Essential Questions）的特徵是：開放性（沒有單一終結答案）、引發高層次思維、指向學科大概念（Big Ideas）、能激發反覆探究與辯論。',
    examSource: '112年新北市公立國小教育專業科目試題',
    handoutRef: '講義第7章 p.69',
    difficulty: '中等'
  },

  // ==========================================
  // 第 8 章：思考啟發取向教學法 (Dewey, Suchman, Ennis)
  // ==========================================
  {
    id: 'q-ch8-1',
    chapterId: 8,
    scholarId: 'dewey',
    topic: '杜威思維五步驟',
    questionText: '杜威（J. Dewey）在《思維術》（How We Think）中探討完整的反省思維（Reflective Thinking）歷程，指出探究的起點始於何者？',
    options: [
      { key: 'A', text: '直接背誦客觀知識定律' },
      { key: 'B', text: '在生活中遭遇疑難困惑的情境（Perplexity / Problematic Situation）' },
      { key: 'C', text: '教師指定評量測驗卷' },
      { key: 'D', text: '觀察同學的模範行為' }
    ],
    correctAnswer: 'B',
    explanation: '杜威的完全思維五步（遇疑、定問、假說、推論、驗證）中，思維活動必須源自個體在真實情境中遇到了真正的困惑、疑難或阻礙（Discrepancy/Problematic situation），從而激發探索欲。',
    examSource: '112年教育部高級中等以下學校教師資格考試',
    handoutRef: '講義第8章 p.73-74',
    difficulty: '基礎'
  },
  {
    id: 'q-ch8-2',
    chapterId: 8,
    scholarId: 'suchman',
    topic: '蘇克曼探究訓練模式',
    questionText: '理化科王老師在課堂開始時，拿出一顆煮熟剝殼的雞蛋放在瓶口比蛋小的玻璃瓶上，並在瓶內點燃紙條後迅速放上雞蛋，全班驚訝地看見雞蛋自動被「吸」入瓶中。王老師隨後引導學生只能問「是」或「不是」的問題來逐步蒐集證據。王老師採用的是何種教學模式？',
    options: [
      { key: 'A', text: '蘇克曼（R. Suchman）的探究教學模式（Inquiry Training Model）' },
      { key: 'B', text: '史金納的編序教學法' },
      { key: 'C', text: '凱勒的個人化教學法' },
      { key: 'D', text: '直接講述教學法' }
    ],
    correctAnswer: 'A',
    explanation: '蘇克曼探究訓練法特色為：以衝突情境（Discrepant event，讓人跌破眼鏡的現象）引起學生認知失衡，學生透過提問（教師僅能回答是/否/不相干）蒐集資料、建立並驗證因果假設，培養科學探究能力。',
    examSource: '110年新北市國小教師甄選試題',
    handoutRef: '講義第8章 p.74',
    difficulty: '中等'
  },
  {
    id: 'q-ch8-3',
    chapterId: 8,
    scholarId: 'ennis',
    topic: '哈佛零點計畫與可見的思考',
    questionText: '哈佛大學教育學院「零點計畫（Project Zero）」發展出的「可見的思考（Visible Thinking）」，旨在課堂中藉由具體的思維常規讓學生的心智歷程顯現。其中最著名且基礎的引導常規「See-Think-Wonder」是指：',
    options: [
      { key: 'A', text: '看見什麼、想到什麼、好奇想探究什麼' },
      { key: 'B', text: '搜尋資料、分類資料、整理筆記' },
      { key: 'C', text: '刺激聯結、反應操作、獲得獎賞' },
      { key: 'D', text: '教師講述、學生安靜、舉手回答' }
    ],
    correctAnswer: 'A',
    explanation: 'See-Think-Wonder 是哈佛零點計畫廣泛運用的核心思維常規：先仔細觀察「我看見了什麼（See）」→ 進行深入詮釋與推論「我想到了什麼（Think）」→ 提出進一步的疑問與假設「我感到好奇並想探究什麼（Wonder）」。',
    examSource: '111年臺北市國小教師甄選教育專業科目',
    handoutRef: '講義第8章 p.79-80',
    difficulty: '中等'
  },
  {
    id: 'q-ch8-4',
    chapterId: 8,
    scholarId: 'dewey',
    topic: '創造思考教學策略',
    questionText: '在威廉斯（Williams）創造思考教學模式中，教師常運用「奔馳法（SCAMPER）」引導學生創意思考。其中字母「C（Combine）」代表下列何種發想策略？',
    options: [
      { key: 'A', text: '結合或合併兩種以上不相關的概念與物件' },
      { key: 'B', text: '完全消除某項功能' },
      { key: 'C', text: '複製前人的標準答案' },
      { key: 'D', text: '計算製造成本' }
    ],
    correctAnswer: 'A',
    explanation: 'SCAMPER 奔馳法包含：S（Substitute 替代）、C（Combine 合併結合）、A（Adapt 調適修改）、M（Modify 調整）、P（Put to another use 轉為其他用途）、E（Eliminate 消除）、R（Reverse 重組顛倒）。',
    examSource: '111年桃園市公立國小教師甄選試題',
    handoutRef: '講義第8章 p.75',
    difficulty: '基礎'
  },
  {
    id: 'q-ch8-5',
    chapterId: 8,
    scholarId: 'suchman',
    topic: '蘇克曼探究提問規則之目的',
    questionText: '在蘇克曼（Suchman）探究訓練模式中，規定學生向教師提問時，問題形式必須是能讓教師僅回答「是」或「否」的封閉性問題。此規定的主要教學目的為何？',
    options: [
      { key: 'A', text: '強迫學生在提問前必須先形成自己具體的因果假設與變因聚焦' },
      { key: 'B', text: '減少教師在課堂上開口說話的疲勞' },
      { key: 'C', text: '避免學生發現教師學科知識不足' },
      { key: 'D', text: '讓課堂快速進行以便準時下課' }
    ],
    correctAnswer: 'A',
    explanation: '要求學生提問只能讓教師回答「是」或「否」，能防止學生直接向教師索求答案（例如「為什麼會這樣？」），強迫學生必須自己先思考假設變因，轉換成驗證性問題（例如「如果瓶子是熱的，蛋還會掉進去嗎？」）。',
    examSource: '111年教育部高級中等以下學校教師資格考試',
    handoutRef: '講義第8章 p.74',
    difficulty: '進階'
  },
  {
    id: 'q-ch8-6',
    chapterId: 8,
    scholarId: 'ennis',
    topic: '恩尼斯批判思考之核心內涵',
    questionText: '恩尼斯（Robert Ennis）定義「批判性思考」為一種具有反省性與合理性的思維，其目的在於幫助個人達成下列哪一項目標？',
    options: [
      { key: 'A', text: '決定何者該相信或何者該做' },
      { key: 'B', text: '找出他人的說話邏輯漏洞並加以反駁抨擊' },
      { key: 'C', text: '提升智力測驗的快速解題能力' },
      { key: 'D', text: '強化機械性記憶力' }
    ],
    correctAnswer: 'A',
    explanation: 'Ennis 的權威定義指出：批判性思考是「合理的（Reasonable）、反省性的（Reflective）思維，聚焦於決定何者該相信（What to believe）或何者該做（What to do）」。',
    examSource: '110年教育部教師資格考試（教育原理與制度）',
    handoutRef: '講義第8章 p.76',
    difficulty: '中等'
  },

  // ==========================================
  // 第 9 章：情意取向教學法 (Raths, Kohlberg, Shaftel, CASEL)
  // ==========================================
  {
    id: 'q-ch9-1',
    chapterId: 9,
    scholarId: 'raths',
    topic: '價值澄清法三階段七步驟',
    questionText: '瑞斯與哈敏（Raths, Harmin & Simon）提出的「價值澄清法（Values Clarification）」，認為個人價值觀的形成經歷「選擇、珍視、行動」三個主要階段。下列何者屬於「珍視（Prizing）」階段的指標？',
    options: [
      { key: 'A', text: '自由自主地從多個選項中進行挑選' },
      { key: 'B', text: '充分深思熟慮考慮各選項可能產生的後果' },
      { key: 'C', text: '對自己所做的選擇感到自豪與喜愛，並願意公開向他人表態支持' },
      { key: 'D', text: '將選擇具體實踐並反覆成為生活中的習慣與行為方式' }
    ],
    correctAnswer: 'C',
    explanation: '價值澄清法三大階段七步驟：1. 選擇（自由選擇、從可能中選擇、考慮後果選擇）；2. 珍視（重視並喜愛自己的選擇、願意公開向人承認或維護）；3. 行動（採取行動實踐、反覆實踐成為生活形態）。',
    examSource: '112年高級中等以下學校教師資格考試',
    handoutRef: '講義第9章 p.81',
    difficulty: '中等'
  },
  {
    id: 'q-ch9-2',
    chapterId: 9,
    scholarId: 'kohlberg',
    topic: '柯爾保道德認知發展階段',
    questionText: '六年級學生阿強在討論「海因茨偷藥」的故事時說：「海因茨絕對不應該去偷藥！因為法律明文規定偷竊就是違法犯罪，如果大家隨便找藉口偷東西，整個社會不就秩序大亂、沒有規矩了嗎？」依柯爾保（L. Kohlberg）的理論，阿強的道德推理處於哪一個階段？',
    options: [
      { key: 'A', text: '第一階段：避罰服從取向' },
      { key: 'B', text: '第二階段：相對功利取向' },
      { key: 'C', text: '第三階段：尋求認可取向（好男孩/巧女孩）' },
      { key: 'D', text: '第四階段：維持社會秩序與法律取向（法治取向）' }
    ],
    correctAnswer: 'D',
    explanation: '柯爾保第四階段「維持社會秩序與法規取向（Law and Order Orientation）」，強調尊重法規權威與維護整體社會體制的秩序，認為人人皆應遵守既定法律，否則社會將陷入混亂。',
    examSource: '111年教育部教師資格考試（學習者發展與適性輔導）',
    handoutRef: '講義第9章 p.82',
    difficulty: '基礎'
  },
  {
    id: 'q-ch9-3',
    chapterId: 9,
    topic: '社會情緒學習 (SEL) 與 SAFE 指標',
    questionText: 'CASEL 組織提出社會情緒學習（SEL）的課程設計「SAFE 指標」，其中「S（Sequenced）」是指下列何種教學原則？',
    options: [
      { key: 'A', text: '按部就班、循序漸進地安排活動以建立技能' },
      { key: 'B', text: '提供學生安靜自習的安全環境' },
      { key: 'C', text: '每堂課後指派大量書面作業' },
      { key: 'D', text: '由全班推選模範生代表' }
    ],
    correctAnswer: 'A',
    explanation: 'SAFE 指標由四個字首組成：S（Sequenced 循序漸進）、A（Active 積極主動參與）、F（Focused 專注投入足夠時間）、E（Explicit 直接明確教導情緒能力）。',
    examSource: '112年新北市公立國小教師甄選教育專業科目',
    handoutRef: '講義第9章 p.86',
    difficulty: '中等'
  },
  {
    id: 'q-ch9-4',
    chapterId: 9,
    scholarId: 'kohlberg',
    topic: '道德討論法與 +1 原則',
    questionText: '布拉特（Blatt）與柯爾保（Kohlberg）提倡「道德討論法」，透過分組討論道德兩難情境以提升學生的道德思考層次。他們建議引導學生思考與發言的最佳策略是採用下列何者？',
    options: [
      { key: 'A', text: '直接告訴學生最高階段普遍倫理的標準答案' },
      { key: 'B', text: '+1 階段原則（引導學生接觸比其現有階段高一個層次的道德推理理由）' },
      { key: 'C', text: '處罰道德判斷層次較低的學生' },
      { key: 'D', text: '讓學生背誦公民道德生活守則' }
    ],
    correctAnswer: 'B',
    explanation: 'Blatt 實驗確立「+1 原則（Blatt Effect）」：當學生面對比其目前道德推理水準高一階段（+1 stage）的同儕論述時，最容易引發適度的認知失衡，進而促進道德結構向上轉化重組。',
    examSource: '110年教育部高級中等以下學校教師資格考試',
    handoutRef: '講義第9章 p.82',
    difficulty: '進階'
  },
  {
    id: 'q-ch9-5',
    chapterId: 9,
    scholarId: 'shaftel',
    topic: '薛夫特爾角色扮演法實施歷程',
    questionText: '薛夫特爾夫婦（F. & G. Shaftel）提出的角色扮演教學模式（Role Playing），在挑選學生參與演出前，教師最重要的第一步驟工作為何？',
    options: [
      { key: 'A', text: '暖身活動（Warm-up，引發動機並界定問題情境）' },
      { key: 'B', text: '立刻給予評鑑與打分數' },
      { key: 'C', text: '懲罰表現不良的角色' },
      { key: 'D', text: '要求全班背誦劇本台詞' }
    ],
    correctAnswer: 'A',
    explanation: '角色扮演教學第一步驟為「暖身（Warming up the group）」，教師提出一個引發共鳴的生活爭議故事，引導全班投入情境並界定核心問題，為後續扮演營造安全的心理氛圍。',
    examSource: '111年臺南市國小教師甄選試題',
    handoutRef: '講義第9章 p.83',
    difficulty: '中等'
  },
  {
    id: 'q-ch9-6',
    chapterId: 9,
    scholarId: 'raths',
    topic: '價值澄清法行動階段之檢驗',
    questionText: '在價值澄清法中，「行動（Acting）」被視為價值形成的終極考驗。下列哪一位學生的表現最符合行動階段的「反覆實施（Pattern）」特質？',
    options: [
      { key: 'A', text: '小華聽了環保演講後，在當天隨手撿起一片垃圾' },
      { key: 'B', text: '小美多年來持續自行隨身自備環保餐具與水壺，並主動參與淨灘' },
      { key: 'C', text: '阿豪口頭表示支持環保，但每次買飲料都索取塑膠袋' },
      { key: 'D', text: '小凱為了拿到老師蓋章而暫時答應垃圾分類' }
    ],
    correctAnswer: 'B',
    explanation: '價值澄清法行動階段包含：(1) 付諸行動實踐、(2) 反覆實施並融入日常生活模式（Pattern of life）。小美持續多年身體力行，完全符合真實內化之價值行動。',
    examSource: '110年新北市國小教育專業試題',
    handoutRef: '講義第9章 p.81',
    difficulty: '基礎'
  },

  // ==========================================
  // 第 10 章：實作取向教學法 (Kilpatrick, 服務學習, DFC)
  // ==========================================
  {
    id: 'q-ch10-1',
    chapterId: 10,
    scholarId: 'kilpatrick',
    topic: '克伯屈設計教學法四步驟',
    questionText: '克伯屈（W. H. Kilpatrick）提倡「設計教學法（Project Method）」，強調在社會情境中進行全心全意的有目的活動。其完整實施步驟依序為何？',
    options: [
      { key: 'A', text: '決定目的 → 擬訂計畫 → 實際進行（執行） → 評量結果' },
      { key: 'B', text: '引起動機 → 教師示範 → 學生模仿 → 評量結果' },
      { key: 'C', text: '呈現故事 → 提出問題 → 分組辯論 → 總結歸納' },
      { key: 'D', text: '前測診斷 → 小組競賽 → 個人計分 → 頒發獎勵' }
    ],
    correctAnswer: 'A',
    explanation: '克伯屈設計教學法四步驟：1. 決定目的（Purposing）→ 2. 擬訂計畫（Planning）→ 3. 實際進行/實行（Executing）→ 4. 評量結果（Judging / Evaluating）。',
    examSource: '112年高級中等以下學校教師資格考試',
    handoutRef: '講義第10章 p.88-89',
    difficulty: '基礎'
  },
  {
    id: 'q-ch10-2',
    chapterId: 10,
    topic: '童心創意行動 DFC 四步驟',
    questionText: '由印度河濱學校發起、全球廣泛推動的 DFC（Design For Change）童心創意行動學習法，其引導孩童解決周遭生活問題的四個核心步驟依序為：',
    options: [
      { key: 'A', text: '感受（Feel）→ 想像（Imagine）→ 實踐（Do）→ 分享（Share）' },
      { key: 'B', text: '分析（Analyze）→ 設計（Design）→ 發展（Develop）→ 評估（Evaluate）' },
      { key: 'C', text: '準備（Prepare）→ 練習（Practice）→ 回饋（Feedback）→ 熟練（Master）' },
      { key: 'D', text: '同理（Empathize）→ 定義（Define）→ 發想（Ideate）→ 原型（Prototype）' }
    ],
    correctAnswer: 'A',
    explanation: 'DFC（Design For Change）童心創意行動學習四步驟為：感受（Feel，敏銳察查身遭問題）→ 想像（Imagine，創意思考解決方案）→ 實踐（Do，付諸行動落地改變）→ 分享（Share，分享成果激勵他人）。',
    examSource: '110年教育部國小教師甄選教育專業試題',
    handoutRef: '講義第10章 p.92',
    difficulty: '基礎'
  },
  {
    id: 'q-ch10-3',
    chapterId: 10,
    scholarId: 'kilpatrick',
    topic: '服務學習五步驟',
    questionText: '近年教育部大力提倡的「服務學習（Service Learning）」，強調結合學術學習目標與實質社區服務。其完整的課程實施五步驟依序為何？',
    options: [
      { key: 'A', text: '準備（Preparing）→ 執行（Implementing）→ 反省（Reflecting）→ 慶祝（Celebrating）→ 評量（Evaluating）' },
      { key: 'B', text: '講授 → 抽查 → 處罰 → 測驗 → 結案' },
      { key: 'C', text: '宣誓 → 勞動 → 拍照 → 打卡 → 領證' },
      { key: 'D', text: '調查 → 募款 → 施工 → 驗收 → 歸檔' }
    ],
    correctAnswer: 'A',
    explanation: '服務學習包含五個標準步驟：1. 準備（確立學習目標與聯繫合作機構）→ 2. 執行（實地投入服務與學習活動）→ 3. 反省（自我省思與團隊深度對話）→ 4. 慶祝（肯定貢獻與成果分享）→ 5. 評量（整體學習歷程效益評量）。',
    examSource: '111年高級中等以下學校教師資格考試',
    handoutRef: '講義第10章 p.91',
    difficulty: '中等'
  },
  {
    id: 'q-ch10-4',
    chapterId: 10,
    topic: '練習教學法實施原則',
    questionText: '在實作取向的「練習教學法」中，心理學研究指出關於練習時段的安排，下列何種方式所達到的學習保留與熟練效果「最佳」？',
    options: [
      { key: 'A', text: '分散練習（Distributed Practice，每次時間適中、間隔多次）優於集中過度練習' },
      { key: 'B', text: '集中連續練習5小時完全不休息' },
      { key: 'C', text: '只練習最難的部分，基礎動作一律略過' },
      { key: 'D', text: '完全不給予回饋，由學生自由摸索' }
    ],
    correctAnswer: 'A',
    explanation: '練習原則指出：分散練習優於集中練習，能避免大腦疲勞並促進記憶固化；且練習初期應嚴謹指導每個步驟、及時給予訂正性回饋，待熟練後再逐步減少練習次數。',
    examSource: '109年臺中市公立國小教師甄選試題',
    handoutRef: '講義第10章 p.87-88',
    difficulty: '基礎'
  },
  {
    id: 'q-ch10-5',
    chapterId: 10,
    scholarId: 'kilpatrick',
    topic: '克伯屈設計教學法四大類型',
    questionText: '某班學生在教師指導下，共同合作企劃並搭建了一座校園有機蔬菜農園水耕溫室模型，親自完成設計圖繪製與材料組裝。依克伯屈（Kilpatrick）的分類，這屬於哪種類型的設計？',
    options: [
      { key: 'A', text: '生產 / 創造設計（Producer\'s Project）' },
      { key: 'B', text: '欣賞 / 消費設計（Consumer\'s Project）' },
      { key: 'C', text: '問題設計（Problem Project）' },
      { key: 'D', text: '訓練 / 練習設計（Drill Project）' }
    ],
    correctAnswer: 'A',
    explanation: '克伯屈設計教學四類型：(1) 生產/創造設計（製造具體成品或實體成果）、(2) 欣賞/消費設計（體驗美感與欣賞藝術）、(3) 問題設計（解開智力疑惑）、(4) 練習/訓練設計（純熟特定技能）。',
    examSource: '111年教育部教師資格考試（課程與教學）',
    handoutRef: '講義第10章 p.89',
    difficulty: '中等'
  },

  // ==========================================
  // 第 11 章：合作取向教學法 (Slavin, Aronson, 佐藤學)
  // ==========================================
  {
    id: 'q-ch11-1',
    chapterId: 11,
    scholarId: 'slavin',
    topic: 'STAD 學生小組成就區分法',
    questionText: '史拉芬（R. Slavin）設計的「學生小組成就區分法（STAD）」在計算小組總得分時，最具代表性的核心評分機制為何？',
    options: [
      { key: 'A', text: '直接採計每組最高分學生的原始分數' },
      { key: 'B', text: '計算每位學生的「個人進步分數（Improvement Points）」並加總' },
      { key: 'C', text: '以全班常模百分等級 PR 值作為得分依據' },
      { key: 'D', text: '小組成員抽籤指派一人代表全組考試' }
    ],
    correctAnswer: 'B',
    explanation: 'STAD 的核心是計算「個人進步分數（將學生個別測驗成績與先前的基本分數相比）」。不論原本學業起點高低，只要自己有進步就能為小組貢獻分數，確保人人都有成功機會並激勵團隊互助。',
    examSource: '112年高級中等以下學校及幼兒園教師資格考試',
    handoutRef: '講義第11章 p.93',
    difficulty: '中等'
  },
  {
    id: 'q-ch11-2',
    chapterId: 11,
    scholarId: 'aronson',
    topic: '拼圖法 (Jigsaw) 專家小組運作',
    questionText: '在拼圖法（Jigsaw Cooperative Learning）的實施程序中，各異質組被指派負責研讀相同特定子題的成員，會先集合在一起研討精熟，之後再返回各自原組教導其他組員。這個先集合共同研討的小組稱為何者？',
    options: [
      { key: 'A', text: '同質分組' },
      { key: 'B', text: '專家小組（Expert Group）' },
      { key: 'C', text: '錦標小組（Tournament Table）' },
      { key: 'D', text: '評審小組（Evaluation Panel）' }
    ],
    correctAnswer: 'B',
    explanation: '拼圖法第一步驟為原屬小組（Home Group）分工，各組負責相同單元材料的學生集合成「專家小組（Expert Group）」深入研討與彼此釋疑，精通後再回原屬小組教導同伴。',
    examSource: '111年新北市公立國小教師甄選教育專業科目',
    handoutRef: '講義第11章 p.94',
    difficulty: '基礎'
  },
  {
    id: 'q-ch11-3',
    chapterId: 11,
    scholarId: 'sato_manabu',
    topic: '佐藤學學習共同體與伸展跳躍',
    questionText: '佐藤學（Sato Manabu）提倡的「學習共同體（Learning Community）」理念，在教室座位排列與學習課題設計上有其獨到主張。下列敘述何者最符合其理論？',
    options: [
      { key: 'A', text: '教室桌椅應排列成馬蹄形或 U 字型，課堂設計需包含超越教科書水準的「伸展跳躍（Jump）」挑戰性課題' },
      { key: 'B', text: '各組必須嚴格指派小組長進行嚴密紀律管理' },
      { key: 'C', text: '男生與女生應嚴格分開成同質小組以避免干擾' },
      { key: 'D', text: '課堂必須維持競爭激烈的搶答競賽以提升效能' }
    ],
    correctAnswer: 'A',
    explanation: '佐藤學學習共同體主張：(1) 桌椅擺成男女混坐的 U 字型促進相互注視與聆聽；(2) 不設組長、建立平等的互惠學伴關係；(3) 在基礎共學課題之外，設計高品質且挑戰學生思維極限的「伸展跳躍（Jump）課題」；(4) 教師扮演「聆聽者」與「串聯者」。',
    examSource: '110年教育部高級中等以下學校教師資格考試',
    handoutRef: '講義第11章 p.98',
    difficulty: '中等'
  },
  {
    id: 'q-ch11-4',
    chapterId: 11,
    topic: '合作學習五大基本要素',
    questionText: 'Johnson & Johnson 提出合作學習若要成功實施，必須具備五項核心要素。其中「學生體認到同組成員榮辱與共，一榮俱榮、一損俱損，自己的成功繫於全組成功」是屬於下列哪一項要素？',
    options: [
      { key: 'A', text: '積極互賴（Positive Interdependence）' },
      { key: 'B', text: '個人績效責任（Individual Accountability）' },
      { key: 'C', text: '人際與小組技巧（Social Skills）' },
      { key: 'D', text: '團體歷程（Group Processing）' }
    ],
    correctAnswer: 'A',
    explanation: '積極互賴（Positive Interdependence）是合作學習的靈魂核心，指成員間建立起緊密連結，深信彼此「沈浮與共（Sink or swim together）」，必須互助合作方能共同達成目標。',
    examSource: '109年新北市國小教育專業科目試題',
    handoutRef: '講義第11章 p.95',
    difficulty: '基礎'
  },
  {
    id: 'q-ch11-5',
    chapterId: 11,
    scholarId: 'slavin',
    topic: 'TGT 小組遊戲競賽法',
    questionText: '戴佛里斯與愛德華（Devries & Edwards）研發的「小組遊戲競賽法（Team-Games-Tournament, TGT）」，與 STAD 最大的差異在於下列何者？',
    options: [
      { key: 'A', text: '以各組同能力水準之「同質桌次競賽（Tournament Tables）」代替傳統紙筆測驗' },
      { key: 'B', text: '完全取消所有分組活動' },
      { key: 'C', text: '不允許低成就學生參與競賽' },
      { key: 'D', text: '只由各組第一名代表出賽' }
    ],
    correctAnswer: 'A',
    explanation: 'TGT 運作程序類似 STAD，但將單獨個別測驗改為「每週桌次競賽」，各異質組內能力相近之學生分配至同一桌競賽，每桌均能爭取相同錦標點數，維持公平刺激。',
    examSource: '111年臺南市國小教師甄選教育專業試題',
    handoutRef: '講義第11章 p.94',
    difficulty: '中等'
  },
  {
    id: 'q-ch11-6',
    chapterId: 11,
    scholarId: 'aronson',
    topic: 'Jigsaw I 與 Jigsaw II 之演進差異',
    questionText: '由 Slavin 改良的「拼圖法第二代（Jigsaw II）」，與 Aronson 最初創設的第一代拼圖法相比，最顯著的突破變革為何？',
    options: [
      { key: 'A', text: '在專家小組討論後，引入全班共同測驗、個人進步分數與小組表揚獎勵' },
      { key: 'B', text: '取消所有個別測驗改為全班口試' },
      { key: 'C', text: '每個學生只研讀自己的一小段，不需閱讀全文' },
      { key: 'D', text: '由電腦完全取代教師' }
    ],
    correctAnswer: 'A',
    explanation: 'Jigsaw I 各人只讀片段且無小組獎勵；Slavin 的 Jigsaw II 結合了 STAD 特點，全體學生先閱讀整篇文章，隨後分工進專家小組，最後進行個別測驗，計算「個人進步分數」並頒發小組獎勵。',
    examSource: '110年教育部教師資格考試（課程與教學）',
    handoutRef: '講義第11章 p.94',
    difficulty: '進階'
  },
  {
    id: 'q-ch11-7',
    chapterId: 11,
    scholarId: 'sato_manabu',
    topic: '佐藤學學習共同體教師核心行動',
    questionText: '在佐藤學「學習共同體」課堂中，教師角色從講台上的主要演講者轉化為課堂的串聯者。他強調教師在學生小組協同學習時，最關鍵的行動是：',
    options: [
      { key: 'A', text: '細緻的「傾聽（Listening）」、觀點的「串聯（Connecting）」與學問的「回歸（Returning）」' },
      { key: 'B', text: '拿碼表倒數計時並大聲催促作答' },
      { key: 'C', text: '頻繁在黑板上扣分處罰講話學生' },
      { key: 'D', text: '直接告訴落後小組正確答案' }
    ],
    correctAnswer: 'A',
    explanation: '佐藤學指出：在學習共同體中，教師必須蹲下身「傾聽」每位孩童細微困惑的聲音，將不同學生的發言想法「串聯」起來，並引導「回歸」到學科本質與核心概念。',
    examSource: '112年新北市公立國小教育專業科目試題',
    handoutRef: '講義第11章 p.98',
    difficulty: '中等'
  },

  // ==========================================
  // 第 12 章：個別化取向教學法 (Keller, Morrison, Tomlinson)
  // ==========================================
  {
    id: 'q-ch12-1',
    chapterId: 12,
    scholarId: 'keller',
    topic: '凱勒個人化系統教學法 (PSI)',
    questionText: '凱勒（F. S. Keller）在1968年發表著名的〈Goodbye, Teacher〉演說，倡導個人化系統教學法（Personalized System of Instruction, PSI）。下列關於 PSI 的特徵敘述，何者「錯誤」？',
    options: [
      { key: 'A', text: '學生可依自己的學習速度自訂步調（Self-pacing）' },
      { key: 'B', text: '各單元測驗必須達到極高精熟標準（通常為 80%~90% 以上）才得晉級至下一單元' },
      { key: 'C', text: '主要依靠教師每天密集的口頭講授傳遞知識，書面教材僅為次要輔助' },
      { key: 'D', text: '大量運用同儕或高年級助理教導員（Proctors）提供即時測驗評改與個別輔導' }
    ],
    correctAnswer: 'C',
    explanation: 'PSI 建立於行為學派原理，其教學主要依賴精心編寫的「書面文字教材」，教師的課堂演講（Lectures）僅具備「激發學習動機」功能，次數極少且不強迫出席，學生主要是自學書面教材並由助理批改。故 C 選項錯誤。',
    examSource: '112年高級中等以下學校及幼兒園教師資格考試',
    handoutRef: '講義第12章 p.101-102',
    difficulty: '進階'
  },
  {
    id: 'q-ch12-2',
    chapterId: 12,
    scholarId: 'tomlinson',
    topic: '差異化教學四大向度',
    questionText: '湯姆林森（C. A. Tomlinson）倡導的「差異化教學（Differentiated Instruction）」，主張教師應配合學生的準備度、興趣與學習風格，在教學設計中彈性調整哪四大面向？',
    options: [
      { key: 'A', text: '內容（Content）、歷程（Process）、成果（Product）、學習環境（Learning Environment）' },
      { key: 'B', text: '智力、體力、耐力、記憶力' },
      { key: 'C', text: '編班、考績、薪資、聘任' },
      { key: 'D', text: '講授、默寫、抄寫、罰寫' }
    ],
    correctAnswer: 'A',
    explanation: 'Tomlinson 差異化教學核心為在同一班級內兼顧多元能力學生，彈性調整四大要素：1. 內容（Content：教材難易與深度）、2. 歷程（Process：不同鷹架活動與思維路徑）、3. 成果（Product：多元評量展現方式）、4. 學習環境（Environment：座位動線與教室心理氛圍）。',
    examSource: '111年臺北市國小教師甄選教育專業科目',
    handoutRef: '講義第12章 p.104',
    difficulty: '中等'
  },
  {
    id: 'q-ch12-3',
    chapterId: 12,
    scholarId: 'morrison',
    topic: '莫禮生單元精熟教學五大步驟',
    questionText: '莫禮生（H. C. Morrison）提出單元教學法（Unit Teaching），並開創精熟教學模式。其單元教學五大步驟之正確順序為何？',
    options: [
      { key: 'A', text: '探究（Exploration）→ 提示（Presentation）→ 自學（Assimilation）→ 組織（Organization）→ 複述（Recitation）' },
      { key: 'B', text: '準備 → 練習 → 考試 → 評分 → 歸檔' },
      { key: 'C', text: '引起動機 → 全班授課 → 小組討論 → 測驗 → 獎勵' },
      { key: 'D', text: '前測 → 講述 → 複習 → 補救 → 再測' }
    ],
    correctAnswer: 'A',
    explanation: '莫禮生五大步驟依序為：1. 探究（Exploration，前測瞭解學生起點行為）→ 2. 提示（Presentation，教師講解單元主要架構）→ 3. 自學（Assimilation，同化自學教材）→ 4. 組織（Organization，學生綜整單元大綱）→ 5. 複述（Recitation，口頭發表與精熟評量）。',
    examSource: '110年教育部教師資格考試',
    handoutRef: '講義第12章 p.101',
    difficulty: '進階'
  },
  {
    id: 'q-ch12-4',
    chapterId: 12,
    scholarId: 'keller',
    topic: 'IGE 個別指導教學法',
    questionText: '美國威斯康辛大學研發的「IGE 個別化教學法（Individually Guided Education）」，其核心理念與實施架構強調下列何者？',
    options: [
      { key: 'A', text: '依據學生的起點行為與個別進度，提供多途徑（多教材、多元活動）之彈性學習選擇' },
      { key: 'B', text: '全班必須使用完全一模一樣的進度與試卷' },
      { key: 'C', text: '完全取消所有評量以減輕學生壓力' },
      { key: 'D', text: '僅適合單一特定資優學生' }
    ],
    correctAnswer: 'A',
    explanation: 'IGE 模式強調以學生為中心，診斷學生的起點行為後，配合學生特性編選多元分級教材（如資優學生用 C、普通學生用 P、程度較差用 T），並提供差別進度與彈性學習路徑。',
    examSource: '111年高雄市國小教師甄選教育專業科目',
    handoutRef: '講義第12章 p.102-103',
    difficulty: '中等'
  },
  {
    id: 'q-ch12-5',
    chapterId: 12,
    scholarId: 'tomlinson',
    topic: '差異化教學之錨式活動',
    questionText: '在常態編班班級實施差異化教學時，教師常設計「錨式活動（Anchor Activities）」。錨式活動的主要功能為何？',
    options: [
      { key: 'A', text: '當提早完成作業的學生或在轉換活動空檔時，能自主進行的有意義延伸學習' },
      { key: 'B', text: '讓全班學生罰站冷靜' },
      { key: 'C', text: '用來代替期末考試' },
      { key: 'D', text: '由班長上台管秩序' }
    ],
    correctAnswer: 'A',
    explanation: 'Tomlinson 提出錨式活動（Anchor Activities），是預先規劃好的常設自主學習任務（如閱讀角、主題專題卡），使提早完成課堂任務的學生能無縫繼續深究，不致於無所事事或干擾他人。',
    examSource: '111年臺北市教育專業科目試題',
    handoutRef: '講義第12章 p.104',
    difficulty: '中等'
  },

  // ==========================================
  // 第 13 章：教學技術：教學媒體、班級經營、引起動機與發問技巧 (Weiner, ARCS, 候答時間)
  // ==========================================
  {
    id: 'q-ch13-1',
    chapterId: 13,
    scholarId: 'weiner',
    topic: '韋納成敗歸因論三向度分析',
    questionText: '小英期末數學考了不及格，她垂頭喪氣地說：「我本來就沒有算數學的腦袋，再怎麼努力也是白費力氣！」依韋納（B. Weiner）的成敗歸因理論，小英將失敗歸因於「能力」，在三向度分類上屬於何種屬性？',
    options: [
      { key: 'A', text: '內在、不穩定、可控制' },
      { key: 'B', text: '內在、穩定、不可控制' },
      { key: 'C', text: '外在、穩定、不可控制' },
      { key: 'D', text: '外在、不穩定、可控制' }
    ],
    correctAnswer: 'B',
    explanation: '韋納歸因論中，「能力」屬於：【內在（源於個人本身）、穩定（不會隨時間輕易變動）、不可控制（個人意志無法立即改變）】。若學生將失敗歸咎於不可控且穩定的能力，最容易產生「習得無助感」。',
    examSource: '112年高級中等以下學校及幼兒園教師資格考試',
    handoutRef: '講義第13章 p.113',
    difficulty: '基礎'
  },
  {
    id: 'q-ch13-2',
    chapterId: 13,
    scholarId: 'john_keller',
    topic: 'John Keller ARCS 動機模式',
    questionText: '凱勒（John M. Keller）提出著名的 ARCS 動機設計模式，主張教學設計應系統化整合四個要素以激發與維持學習動機。這四個字母分別代表什麼意涵？',
    options: [
      { key: 'A', text: 'Attention（注意）、Relevance（相關）、Confidence（信心）、Satisfaction（滿足）' },
      { key: 'B', text: 'Action（行動）、Review（複習）、Creativity（創造）、Success（成功）' },
      { key: 'C', text: 'Ability（能力）、Readiness（準備）、Cooperation（合作）、Score（得分）' },
      { key: 'D', text: 'Analysis（分析）、Reinforcement（增強）、Control（控制）、Standard（標準）' }
    ],
    correctAnswer: 'A',
    explanation: 'ARCS 模式四要素：A（Attention 引起注意，以驚奇、探究提問吸引專注）→ R（Relevance 切身相關，連結學生個人目標與生活經驗）→ C（Confidence 建立信心，提供成功機會與掌握感）→ S（Satisfaction 獲得滿足，給予正向回饋與成就肯定）。',
    examSource: '111年教育部高級中等以下學校教師資格考試',
    handoutRef: '講義第13章 p.114-115',
    difficulty: '基礎'
  },
  {
    id: 'q-ch13-3',
    chapterId: 13,
    topic: '課堂提問與候答時間 (Wait-Time)',
    questionText: 'Rowe 等學者研究指出，教師在課堂上對全班提出具有思考性的高層次問題後，維持適當的「候答時間（Wait-time）」能顯著提升學生的回答品質與思維深度。研究建議合理的候答時間通常以多久為佳？',
    options: [
      { key: 'A', text: '不需等待，立即點名請特定學生回答' },
      { key: 'B', text: '至少停留等待 3 至 5 秒鐘（中高年級可達 5~7 秒）' },
      { key: 'C', text: '必須等待 30 秒以上直至全班安靜' },
      { key: 'D', text: '等待至下課後再作答' }
    ],
    correctAnswer: 'B',
    explanation: '實徵研究顯示，教師提問後若能將候答時間由不到1秒延長至 3~5 秒（中高年級約5-7秒），學生回答問題的句子長度增加、推論層次提高、猜測回答減少，更多學生願意主動發言。',
    examSource: '110年臺中市國小教育學科教師甄選',
    handoutRef: '講義第13章 p.111',
    difficulty: '中等'
  },
  {
    id: 'q-ch13-4',
    chapterId: 13,
    topic: 'PIRLS 四層次閱讀提問',
    questionText: '國際閱讀素養進展研究（PIRLS）將閱讀理解歷程劃分為四個層次。當教師提問：「請比較文中兩位主角在面對洪水時的不同做法，並評估誰的處置更妥當且提出你的理由」，此提問屬於 PIRLS 的哪一個層次？',
    options: [
      { key: 'A', text: '直接提取訊息' },
      { key: 'B', text: '直接推論' },
      { key: 'C', text: '詮釋並整合觀點與訊息' },
      { key: 'D', text: '檢驗並評估內容、語言形式及各項元素' }
    ],
    correctAnswer: 'D',
    explanation: 'PIRLS 最高層次為「檢驗與評估內容、語言與元件（Examine and evaluate content, language, and elements）」，要求讀者跳出文章進行批判性比較、評價作者意圖或角色行為之妥適性並申述論據。',
    examSource: '111年高級中等以下學校教師資格考試',
    handoutRef: '講義第13章 p.115-116',
    difficulty: '中等'
  },
  {
    id: 'q-ch13-5',
    chapterId: 13,
    scholarId: 'weiner',
    topic: '韋納歸因論之努力因素特性',
    questionText: '依據韋納（B. Weiner）的成敗歸因理論，下列哪一個歸因因素是六個因素中「唯一具有可控制性（Controllable）」的關鍵因素？',
    options: [
      { key: 'A', text: '能力（Ability）' },
      { key: 'B', text: '努力（Effort）' },
      { key: 'C', text: '工作難度（Task Difficulty）' },
      { key: 'D', text: '運氣（Luck）' }
    ],
    correctAnswer: 'B',
    explanation: '韋納三向度歸因論中，能力（內在/穩定/不可控）、工作難度（外在/穩定/不可控）、運氣（外在/不穩定/不可控）、身心（內在/不穩定/不可控），唯有「努力（內在/不穩定/可控）」是個人意志能夠主動調控的因素，導向努力歸因最能促進後續積極學習。',
    examSource: '110年教育部教師資格考試（學習者發展與適性輔導）',
    handoutRef: '講義第13章 p.113',
    difficulty: '基礎'
  },
  {
    id: 'q-ch13-6',
    chapterId: 13,
    scholarId: 'john_keller',
    topic: 'ARCS 相關性 (Relevance) 策略',
    questionText: '數學老師在講授「比例與縮放」單元時，特地以學生最喜愛的熱門線上遊戲《傳說對決》小地圖比例尺以及手搖飲店折價券折扣公式作為生活實例引起學習。依 John Keller 的 ARCS 模式，這項教學設計最直接符合下列哪一個要素？',
    options: [
      { key: 'A', text: '切身相關（Relevance）' },
      { key: 'B', text: '注意（Attention）' },
      { key: 'C', text: '信心（Confidence）' },
      { key: 'D', text: '滿足（Satisfaction）' }
    ],
    correctAnswer: 'A',
    explanation: 'ARCS 中的「切身相關性（Relevance）」旨在將抽象教材與學生既有的生活經驗、切身利益、興趣及未來目標建立實質連結，讓學生感到「這項知識對我很有用且與我密切相關」。',
    examSource: '111年新北市公立國小教育專業試題',
    handoutRef: '講義第13章 p.114',
    difficulty: '基礎'
  },

  // ==========================================
  // 第 14 章：學習評量與教學評量 (評量分類, Rosenthal 比馬龍效應)
  // ==========================================
  {
    id: 'q-ch14-1',
    chapterId: 14,
    topic: '評量時機與功能分類',
    questionText: '王老師在一學期教學過程中，透過定期的平時小考、課堂提問與隨堂作業，旨在隨時監控學生的學習進度、診斷理解迷思，並做為自己隨時調整教學進度與方法的依據。王老師所實施的評量屬於下列何者？',
    options: [
      { key: 'A', text: '安置性評量（Placement Assessment）' },
      { key: 'B', text: '診斷性評量（Diagnostic Assessment）' },
      { key: 'C', text: '形成性評量（Formative Assessment）' },
      { key: 'D', text: '總結性評量（Summative Assessment）' }
    ],
    correctAnswer: 'C',
    explanation: '形成性評量（Formative Assessment）在「教學進行過程中」實施，目的在隨時掌握教與學的進度，提供及時回饋以調整教學策略並補救學生盲點。',
    examSource: '112年教育部教師資格考試（教育理念與實踐）',
    handoutRef: '講義第14章 p.119',
    difficulty: '基礎'
  },
  {
    id: 'q-ch14-2',
    chapterId: 14,
    topic: '常模參照 vs 標準參照評量',
    questionText: '教育部舉辦的國中教育會考將各科成績劃分為「精熟（A）」、「基礎（B）」、「待加強（C）」三個等級標準，旨在確認學生是否達到九年一貫或十二年國教所訂定之基本學力門檻。此種評量屬於下列何者？',
    options: [
      { key: 'A', text: '常模參照評量（Norm-Referenced Assessment）' },
      { key: 'B', text: '標準參照評量（Criterion-Referenced Assessment）' },
      { key: 'C', text: '動態評量（Dynamic Assessment）' },
      { key: 'D', text: '智力測驗評量（IQ Assessment）' }
    ],
    correctAnswer: 'B',
    explanation: '標準參照評量（Criterion-Referenced Assessment）是將學生的表現與事先確立的絕對教學目標或能力效標做比較，以判定是否精熟或達標（例如及格/不及格、會考精熟/基礎/待加強），而不以勝過群體中他人比例為依據。',
    examSource: '111年高級中等以下學校及幼兒園教師資格考試',
    handoutRef: '講義第14章 p.119',
    difficulty: '基礎'
  },
  {
    id: 'q-ch14-3',
    chapterId: 14,
    scholarId: 'rosenthal',
    topic: '羅森索比馬龍效應 (自我應驗預言)',
    questionText: '心理學家羅森索與賈克森（Rosenthal & Jacobson, 1968）在橡樹學校進行實驗，隨機抽取普通學生名單並欺瞞教師稱這群學生是「智力爆發潛力股」。一年後追蹤發現，該名單上的學生智力與學業成績果然呈現顯著成長。此心理學現象稱為：',
    options: [
      { key: 'A', text: '霍桑效應（Hawthorne Effect）' },
      { key: 'B', text: '比馬龍效應 / 自我應驗預言（Pygmalion Effect / Self-Fulfilling Prophecy）' },
      { key: 'C', text: '強斯頓效應（John Henry Effect）' },
      { key: 'D', text: '月暈效應（Halo Effect）' }
    ],
    correctAnswer: 'B',
    explanation: '比馬龍效應（Pygmalion Effect），又稱自我應驗預言（Self-Fulfilling Prophecy），指教師對學生的正面高期待會透過溫暖的言語、更豐富的學習刺激與正向回饋不自覺地傳遞給學生，進而激發學生的學習潛能，最終促使期待成真。',
    examSource: '110年教育部教師資格考試（學習者發展與適性輔導）',
    handoutRef: '講義第14章 p.120',
    difficulty: '基礎'
  },
  {
    id: 'q-ch14-4',
    chapterId: 14,
    topic: '檔案評量 (Portfolio Assessment) 特色',
    questionText: '國小自然與生活科技張老師指導學生建立「生態探索個人學習檔案」，要求學生蒐集一學期以來的觀察札記、實作照片、實驗記錄、自我反思省思單以及同儕互評回饋。下列關於檔案評量（Portfolio Assessment）的敘述何者「不正確」？',
    options: [
      { key: 'A', text: '兼重學生的學習歷程與最終學習結果' },
      { key: 'B', text: '重視學生自我反思、批判思考與評鑑能力的培養' },
      { key: 'C', text: '是一種單純的資料夾蒐集，不需訂定具體的評量規準（Rubrics）' },
      { key: 'D', text: '評鑑者不僅有教師，還可包含同儕與學生自己' }
    ],
    correctAnswer: 'C',
    explanation: '檔案評量絕非隨意剪貼的資料夾，必須具備明確的教學目標、系統性的選輯方針以及明確客觀的評量規準（Rubrics / 評分規準），以便客觀衡量學生是否達成特定學習成果。故 C 選項敘述錯誤。',
    examSource: '109年高級中等以下學校及幼兒園教師資格考試',
    handoutRef: '講義第14章 p.120-121',
    difficulty: '中等'
  },
  {
    id: 'q-ch14-5',
    chapterId: 14,
    topic: '安置性評量 vs 診斷性評量',
    questionText: '某國小在新學年開學第一週，對全體一年級新生進行「注音符號與基礎數棒操作」的測驗，旨在了解新生的起點行為與能力程度，作為日後分組學習與教學進度規劃之依據。此種評量屬於：',
    options: [
      { key: 'A', text: '安置性評量（Placement Assessment）' },
      { key: 'B', text: '形成性評量（Formative Assessment）' },
      { key: 'C', text: '總結性評量（Summative Assessment）' },
      { key: 'D', text: '常模檔案評量' }
    ],
    correctAnswer: 'A',
    explanation: '「安置性評量（Placement Assessment）」是在教學活動開始之前實施，主要目的在確定學生的起點行為（Entry behaviors）、先備知能與學習特質，以便因材施教或進行適切教學分組。',
    examSource: '111年臺北市國小教師甄選教育專業試題',
    handoutRef: '講義第14章 p.119',
    difficulty: '基礎'
  },
  {
    id: 'q-ch14-6',
    chapterId: 14,
    scholarId: 'rosenthal',
    topic: '比馬龍效應之教師回饋行為表現',
    questionText: '研究指出，受到比馬龍效應（Rosenthal Effect）影響的教師，在日常課堂互動中對其抱持高期待的學生，最容易展現出下列哪一種行為傾向？',
    options: [
      { key: 'A', text: '給予更多的候答時間、更豐富的眼神接觸與更具挑戰性的高層次提問' },
      { key: 'B', text: '一律放任不予理會' },
      { key: 'C', text: '刻意給予最低的分數以磨練其意志' },
      { key: 'D', text: '要求其不要參與任何班級討論' }
    ],
    correctAnswer: 'A',
    explanation: 'Rosenthal 與 Brophy 等人的課堂觀察研究發現，教師對高期待學生會展現出四大行為傾向：營造更溫暖的情感氣候、投入更多有價值的教學教材與輸入、給予更多回答與互動機會（包括更長候答時間）、以及給予更具體深入的學習回饋。',
    examSource: '112年高雄市教育專業科目教師甄選試題',
    handoutRef: '講義第14章 p.120',
    difficulty: '中等'
  }
];

function mergeAndDeduplicateQuestions(
  base: Question[],
  ext: Question[],
  comp: Question[],
  extra: Question[]
): Question[] {
  const map = new Map<string, Question>();
  base.forEach((q) => map.set(q.id, q));
  ext.forEach((q) => map.set(q.id, q));
  comp.forEach((q) => map.set(q.id, q));
  extra.forEach((q) => map.set(q.id, q));
  return Array.from(map.values());
}

export const QUESTIONS_DATA: Question[] = mergeAndDeduplicateQuestions(
  BASE_QUESTIONS,
  SCHOLAR_EXTENSION_QUESTIONS,
  SCHOLAR_COMPREHENSIVE_QUESTIONS,
  CHAPTER_EXTRA_QUESTIONS
);
