# scripts/data_scholars_part2b.py
# Scholars: bruner, dale, ausubel, vygotsky

QUESTIONS_PART2B = [
  # ----------------------------------------------------
  # 13. 布魯納 (bruner) - 10 new
  # ----------------------------------------------------
  {
    "id": "q-bruner-3",
    "chapterId": 4,
    "scholarId": "bruner",
    "topic": "認知表徵三階段發展順序",
    "questionText": "布魯納（J. S. Bruner）提出人類表徵外在世界的認知發展三階段，其演進順序依序為何？",
    "options": [
      { "key": "A", "text": "動作表徵（Enactive）→ 影像/圖像表徵（Iconic）→ 符號表徵（Symbolic）" },
      { "key": "B", "text": "符號表徵 → 影像表徵 → 動作表徵" },
      { "key": "C", "text": "影像表徵 → 符號表徵 → 動作表徵" },
      { "key": "D", "text": "動作表徵 → 符號表徵 → 影像表徵" }
    ],
    "correctAnswer": "A",
    "explanation": "Bruner 認知表徵三階段口訣「動、像、符」：1.動作表徵（靠身體操作與動作經驗學習）；2.圖像/影像表徵（靠視覺心象與圖片想像）；3.符號表徵（靠抽象語言、文字與數學符號思考）。",
    "examSource": "112年教育部教師資格考試（學習者發展）",
    "handoutRef": "講義第4章 p.33",
    "difficulty": "基礎"
  },
  {
    "id": "q-bruner-4",
    "chapterId": 4,
    "scholarId": "bruner",
    "topic": "螺旋式課程（Spiral Curriculum）之核心理念",
    "questionText": "布魯納在《教育的歷程》中名言：「任何學科的基本原理，都能以某種知性上誠實的方式，教給任何年齡的任何兒童。」依據此觀點所設計的課程組織型態被稱為：",
    "options": [
      { "key": "A", "text": "螺旋式課程（Spiral Curriculum）" },
      { "key": "B", "text": "直線式課程" },
      { "key": "C", "text": "核心課程" },
      { "key": "D", "text": "廣域課程" }
    ],
    "correctAnswer": "A",
    "explanation": "螺旋式課程主張在不同學習階段重複呈現學科核心結構與大概念，但隨學生認知表徵發展（動作→圖像→符號），循序加深、加廣並提升抽象層次。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第4章 p.34",
    "difficulty": "基礎"
  },
  {
    "id": "q-bruner-5",
    "chapterId": 8,
    "scholarId": "bruner",
    "topic": "發現教學法（Discovery Learning）之實施特徵",
    "questionText": "布魯納倡導「發現教學法（Discovery Learning）」，下列有關發現學習實施原則的敘述，何者最為正確？",
    "options": [
      { "key": "A", "text": "教師提供結構化的學習情境與正反實例，引導學生主動探索並歸納概念結構與原則" },
      { "key": "B", "text": "完全不給予任何線索，讓學生在教室任意胡亂猜測" },
      { "key": "C", "text": "教師從頭到尾單向講述所有結論" },
      { "key": "D", "text": "學生只需背誦標準答案不需動手思考" }
    ],
    "correctAnswer": "A",
    "explanation": "發現教學法強調「有引導的發現（Guided discovery）」，教師安排具結構性的情境與問題，激發學生主動探究與假說考驗，親自發現概念架構。",
    "examSource": "110年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第8章 p.70, 第4章 p.34",
    "difficulty": "基礎"
  },
  {
    "id": "q-bruner-6",
    "chapterId": 4,
    "scholarId": "bruner",
    "topic": "學科結構（Structure of the Discipline）之教育價值",
    "questionText": "布魯納特別強調教材內容必須掌握「學科基本結構（Structure of Discipline）」，掌握學科結構的最大教育效益在於：",
    "options": [
      { "key": "A", "text": "使學科知識更易於理解與長久保持，並有利於廣泛的學習遷移（Transfer of Learning）" },
      { "key": "B", "text": "增加教科書印刷厚度" },
      { "key": "C", "text": "方便出題老師出刁鑽的細節題目" },
      { "key": "D", "text": "縮短所有學生的放學時間" }
    ],
    "correctAnswer": "A",
    "explanation": "布魯納指出，若只背細節事實很快便會遺忘；若掌握學科的核心概念與基本架構（結構），就能觸類旁通、促進高層次的正向學習遷移。",
    "examSource": "109年高級中等以下學校教師資格考試",
    "handoutRef": "講義第4章 p.34",
    "difficulty": "中等"
  },
  {
    "id": "q-bruner-7",
    "chapterId": 8,
    "scholarId": "bruner",
    "topic": "概念獲得模式（Concept Attainment Model）之正例與負例分析",
    "questionText": "依據布魯納等人的研究發展出的「概念獲得教學模式（Concept Attainment Model）」，教師在教學一開始呈現「正例（Yes items）」與「負例（No items）」，其主要教學功能為何？",
    "options": [
      { "key": "A", "text": "引導學生透過對比與屬性分析，檢驗並形成該概念的本質屬性（Critical attributes）" },
      { "key": "B", "text": "測試學生的視力與注意力" },
      { "key": "C", "text": "當場給學生打成績等第" },
      { "key": "D", "text": "消耗課堂多餘的時間" }
    ],
    "correctAnswer": "A",
    "explanation": "概念獲得模式透過正例（具備關鍵屬性）與負例（缺乏關鍵屬性）的對照呈現，引導學生主動假設並萃取該概念的核心定義特徵。",
    "examSource": "108年新北市公立國小教甄試題",
    "handoutRef": "講義第8章 p.71",
    "difficulty": "中等"
  },
  {
    "id": "q-bruner-8",
    "chapterId": 4,
    "scholarId": "bruner",
    "topic": "直觀思維（Intuitive Thinking）與分析思維之並重",
    "questionText": "布魯納在討論科學創造力時指出，傳統學校過度獎勵按部就班的「分析思維」，而嚴重忽視了科學家重大突破常依賴的何種思維能力？",
    "options": [
      { "key": "A", "text": "直觀思維（Intuitive Thinking / 敏銳洞察與頓悟假說）" },
      { "key": "B", "text": "機械記憶思維" },
      { "key": "C", "text": "操作制約思維" },
      { "key": "D", "text": "文字抄寫能力" }
    ],
    "correctAnswer": "A",
    "explanation": "布魯納倡導重視直觀思維：在未經嚴密形式證明前，憑藉對問題結構的敏銳直覺大膽提出假說，再由分析思維進行嚴密驗證。",
    "examSource": "112年桃園市國小教甄試題",
    "handoutRef": "講義第4章 p.34",
    "difficulty": "進階"
  },
  {
    "id": "q-bruner-9",
    "chapterId": 4,
    "scholarId": "bruner",
    "topic": "內在動機（Intrinsic Motivation）的誘發與滿足",
    "questionText": "布魯納認為發現學習最寶貴的動機價值在於：當學生透過自身努力獨立發現問題解答時，會體驗到強烈的「勝任感（Competence）」與知性喜悅。這種動機屬於：",
    "options": [
      { "key": "A", "text": "內在動機（Intrinsic Motivation）" },
      { "key": "B", "text": "外在代幣增強" },
      { "key": "C", "text": "負增強逃避動機" },
      { "key": "D", "text": "社會比較動機" }
    ],
    "correctAnswer": "A",
    "explanation": "發現學習讓解決問題本身的成就感成為最大的獎賞，使學習者擺脫對外在分數獎勵的依賴，轉向追求知識本質的內在動機。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第4章 p.34",
    "difficulty": "基礎"
  },
  {
    "id": "q-bruner-10",
    "chapterId": 5,
    "scholarId": "bruner",
    "topic": "鷹架作用（Scaffolding）概念之提出者淵源",
    "questionText": "教育心理學中廣為人知的「鷹架作用（Scaffolding）」一詞，雖然在思想上承襲了維高斯基的近側發展區，但歷史上最早是由哪位學者與同事（Wood, Bruner, & Ross, 1976）具體提出並加以命名的？",
    "options": [
      { "key": "A", "text": "布魯納（J. Bruner）" },
      { "key": "B", "text": "皮亞傑（J. Piaget）" },
      { "key": "C", "text": "史金納（B. F. Skinner）" },
      { "key": "D", "text": "莫禮生（H. Morrison）" }
    ],
    "correctAnswer": "A",
    "explanation": "鷹架（Scaffolding）譬喻最早是由 Wood、Bruner 與 Ross (1976) 在探討母親指導幼兒拼積木任務時正式命名提出，用以具體化成人協助兒童跨越 ZPD 的歷程。",
    "examSource": "110年臺北市立中等學校教甄試題",
    "handoutRef": "講義第5章 p.45",
    "difficulty": "進階"
  },
  {
    "id": "q-bruner-11",
    "chapterId": 4,
    "scholarId": "bruner",
    "topic": "國小數學教學從具體到抽象之表徵運用",
    "questionText": "林老師教導分數概念時，先讓二年級學童親手切披薩模型（動作表徵），接著展示切成四等份的披薩圖片（圖像表徵），最後寫出符號「1/4」（符號表徵）。林老師的做法嚴格落實了誰的認知表徵理論？",
    "options": [
      { "key": "A", "text": "布魯納（Bruner）" },
      { "key": "B", "text": "巴夫洛夫（Pavlov）" },
      { "key": "C", "text": "泰勒（Tyler）" },
      { "key": "D", "text": "華生（Watson）" }
    ],
    "correctAnswer": "A",
    "explanation": "從具體操作（動作）→ 半具體圖片（圖像）→ 抽象符號（符號）的「動-像-符」循序引導，正是布魯納認知表徵理論在國小數學教學的經典實踐。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第4章 p.33",
    "difficulty": "基礎"
  },
  {
    "id": "q-bruner-12",
    "chapterId": 4,
    "scholarId": "bruner",
    "topic": "布魯納對認知發展與皮亞傑觀點之分歧",
    "questionText": "相較於皮亞傑認為「認知發展受限於年齡與生物成熟階段，教學必須被動等待發展（Development leads learning）」，布魯納則抱持何種更積極的教育觀點？",
    "options": [
      { "key": "A", "text": "優質合宜的教學表徵架構能積極引導、促進甚至加速兒童的認知概念掌握" },
      { "key": "B", "text": "教育對認知發展毫無任何影響" },
      { "key": "C", "text": "所有學生都應跳級就讀大學" },
      { "key": "D", "text": "兒童只需依靠遺傳基因自然生長" }
    ],
    "correctAnswer": "A",
    "explanation": "布魯納樂觀看待教學的力量，認為只要善用合宜的表徵方式（動作、圖像），即使年幼兒童也能理解高深學科結構，教學能主動引導心智發展。",
    "examSource": "108年教育部教師資格考試",
    "handoutRef": "講義第4章 p.34",
    "difficulty": "中等"
  },

  # ----------------------------------------------------
  # 14. 戴爾 (dale) - 10 new
  # ----------------------------------------------------
  {
    "id": "q-dale-3",
    "chapterId": 4,
    "scholarId": "dale",
    "topic": "戴爾「經驗金字塔（Cone of Experience）」三大層次分類",
    "questionText": "愛德加·戴爾（Edgar Dale）提出的「經驗金字塔（Cone of Experience）」，由塔底至塔頂將學習經驗歸納為哪三大類？",
    "options": [
      { "key": "A", "text": "做的經驗（實作）→ 觀察的經驗（視聽/參觀）→ 抽象的經驗（符號/語言）" },
      { "key": "B", "text": "抽象的經驗 → 觀察的經驗 → 做的經驗" },
      { "key": "C", "text": "感覺經驗 → 情緒經驗 → 道德經驗" },
      { "key": "D", "text": "家庭經驗 → 學校經驗 → 社會經驗" }
    ],
    "correctAnswer": "A",
    "explanation": "Dale 經驗金字塔由底至頂（具體到抽象）：1.做的經驗（直接有目的、設計的、戲劇化）；2.觀察經驗（示範、野外旅行、展覽、電視電影、錄音廣播幻燈）；3.抽象經驗（視覺符號、語言符號）。",
    "examSource": "112年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第4章 p.35",
    "difficulty": "基礎"
  },
  {
    "id": "q-dale-4",
    "chapterId": 4,
    "scholarId": "dale",
    "topic": "經驗金字塔底層「直接有目的的經驗」意涵",
    "questionText": "在經驗金字塔的最底層是「直接有目的的經驗（Direct, Purposeful Experiences）」，下列哪一項課堂活動最能代表此一經驗層次？",
    "options": [
      { "key": "A", "text": "自然課中學生親自在校園花圃整地、播種番茄、澆水施肥並觀察記錄生長" },
      { "key": "B", "text": "看番茄生長卡通動畫影片" },
      { "key": "C", "text": "聽老師口頭朗讀番茄的生物界門綱目科屬種" },
      { "key": "D", "text": "在考卷上寫出番茄兩個字" }
    ],
    "correctAnswer": "A",
    "explanation": "直接有目的經驗是指學習者運用全部感官親身參與、操作真實客體並對結果承擔責任的具體第一手經驗，是金字塔最穩固的根基。",
    "examSource": "111年新北市公立國小教甄試題",
    "handoutRef": "講義第4章 p.35",
    "difficulty": "基礎"
  },
  {
    "id": "q-dale-5",
    "chapterId": 4,
    "scholarId": "dale",
    "topic": "經驗金字塔之「設計的經驗（Contrived Experiences）」",
    "questionText": "有些學習對象過於龐大（如太陽系運轉）或過於微小（如原子結構分子鏈），無法直接接觸。教師使用按比例縮小或放大的「立體模型」讓學生操作觀察，這屬於戴爾金字塔中的：",
    "options": [
      { "key": "A", "text": "設計的經驗（Contrived Experiences / 模型模擬經驗）" },
      { "key": "B", "text": "語言符號經驗" },
      { "key": "C", "text": "參觀旅行經驗" },
      { "key": "D", "text": "直接經驗" }
    ],
    "correctAnswer": "A",
    "explanation": "設計的經驗是指對真實事物的模型化、簡化或模擬（如地球儀、解剖人體模型、飛機模擬駕駛艙），能去除干擾細節、突顯核心概念。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第4章 p.35",
    "difficulty": "中等"
  },
  {
    "id": "q-dale-6",
    "chapterId": 4,
    "scholarId": "dale",
    "topic": "經驗金字塔之「戲劇化經驗（Dramatized Experiences）」",
    "questionText": "歷史課探討辛亥革命歷史事件，教師安排學生分別扮演孫中山、陸皓東與清廷官員進行歷史短劇演出與對話。此項活動屬於戴爾金字塔中的：",
    "options": [
      { "key": "A", "text": "戲劇化的經驗（Dramatized Experiences）" },
      { "key": "B", "text": "語言抽象經驗" },
      { "key": "C", "text": "野外考察" },
      { "key": "D", "text": "靜態展覽" }
    ],
    "correctAnswer": "A",
    "explanation": "戲劇化經驗透過角色扮演、歷史短劇或偶戲，讓學生重現歷史或生活情境，雖非歷史現場真實發生，但能深刻體驗情感與立場。",
    "examSource": "109年臺北市國小教甄教育科目",
    "handoutRef": "講義第4章 p.35",
    "difficulty": "基礎"
  },
  {
    "id": "q-dale-7",
    "chapterId": 4,
    "scholarId": "dale",
    "topic": "經驗金字塔頂層「語言符號（Verbal Symbols）」之迷思破除",
    "questionText": "經驗金字塔頂端是「語言符號（Verbal symbols）」。戴爾特別提醒教育工作者對於金字塔頂端的正確理解，下列敘述何者最符合戴爾的原意？",
    "options": [
      { "key": "A", "text": "金字塔頂層並非代表最高級或最好，而是抽象程度最高；若缺乏底層具體經驗支撐，頂層符號極易淪為空洞無意義的死背" },
      { "key": "B", "text": "語言符號是唯一具有學術價值的經驗，學校應該完全取消實作" },
      { "key": "C", "text": "小學生一入學就應該只讀無注音純文字教科書" },
      { "key": "D", "text": "底層的直接經驗毫無智力價值" }
    ],
    "correctAnswer": "A",
    "explanation": "戴爾警告「言語主義（Verbalism）」之害：如果學生沒有豐富具體感官經驗作為底蘊，強灌抽象符號只會產生死記名詞而不知其意的假學習。",
    "examSource": "108年教育部教師資格考試",
    "handoutRef": "講義第4章 p.36",
    "difficulty": "中等"
  },
  {
    "id": "q-dale-8",
    "chapterId": 13,
    "scholarId": "dale",
    "topic": "虛擬實境（VR/AR）數位科技在經驗金字塔中之定位",
    "questionText": "當代教育科技運用「虛擬實境（VR）」讓學生戴上頭盔漫步在火星地表或進入人體微血管穿梭。依據戴爾經驗金字塔，VR 科技在教學上最卓越的價值在於：",
    "options": [
      { "key": "A", "text": "將難以親臨的遠距或危險抽象情境，轉化為沉浸感極高的擬真「設計經驗與觀察經驗」，架起具體到抽象的橋樑" },
      { "key": "B", "text": "徹底取代真實自然界的所有物質存在" },
      { "key": "C", "text": "完全消滅紙筆測驗" },
      { "key": "D", "text": "降低學生的腦神經細胞活動" }
    ],
    "correctAnswer": "A",
    "explanation": "VR/AR 創造了強大的擬真中介經驗（接近直接經驗與設計經驗），讓學生在安全受控的情境下獲得感官全方位沉浸，促進深度概念理解。",
    "examSource": "112年高雄市國民小學教師甄選教育專業試題",
    "handoutRef": "講義第13章 p.115, 第4章 p.36",
    "difficulty": "基礎"
  },
  {
    "id": "q-dale-9",
    "chapterId": 4,
    "scholarId": "dale",
    "topic": "經驗金字塔之「視覺符號（Visual Symbols）」",
    "questionText": "地理課使用的等高線地形圖、統計長條圖、交通地圖與資訊圖表（Infographics），在戴爾經驗金字塔中屬於哪一層次？",
    "options": [
      { "key": "A", "text": "視覺符號（Visual Symbols）" },
      { "key": "B", "text": "直接經驗" },
      { "key": "C", "text": "戲劇化經驗" },
      { "key": "D", "text": "野外考察" }
    ],
    "correctAnswer": "A",
    "explanation": "視覺符號指非寫實的地圖、圖形、圖表、示意圖、漫畫等，高度抽象且高度精煉，僅次於語言符號。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第4章 p.35",
    "difficulty": "中等"
  },
  {
    "id": "q-dale-10",
    "chapterId": 4,
    "scholarId": "dale",
    "topic": "參觀旅行（Field Trips）之教育價值",
    "questionText": "自然科教師帶領全班學生參觀自然科學博物館與地質公園，讓學生親眼目睹恐龍化石與海蝕斷崖。這在戴爾金字塔中屬於何種層次？",
    "options": [
      { "key": "A", "text": "野外考察 / 參觀旅行（Field Trips）" },
      { "key": "B", "text": "語言符號" },
      { "key": "C", "text": "虛擬幻想" },
      { "key": "D", "text": "純粹直接經驗" }
    ],
    "correctAnswer": "A",
    "explanation": "野外考察/參觀旅行讓學生走出封閉課堂，在自然或社會真實脈絡中進行實地觀察與紀錄，兼具具體性與視野拓展性。",
    "examSource": "110年新北市國小教甄試題",
    "handoutRef": "講義第4章 p.35",
    "difficulty": "基礎"
  },
  {
    "id": "q-dale-11",
    "chapterId": 4,
    "scholarId": "dale",
    "topic": "多媒體輔助教學之整合設計原則",
    "questionText": "戴爾強調，教學設計者不應將經驗金字塔視為嚴格僵化的梯子，而應視為連續的經驗光譜。教師在單元教學中最理想的媒體運用策略為何？",
    "options": [
      { "key": "A", "text": "視教學目標與學生認知起點，彈性交織具體實作、視聽觀察與概念符號，促成經驗相互印證與轉化" },
      { "key": "B", "text": "每堂課只播放 40 分鐘爆笑短影音" },
      { "key": "C", "text": "整學期只用粉筆抄板書絕不使用任何教具" },
      { "key": "D", "text": "要求學生整天都在操場挖泥土" }
    ],
    "correctAnswer": "A",
    "explanation": "優質教學強調具體經驗與抽象符號的動態整合，以實作打底、以視聽豐富、以語言符號提煉概念，方能達成全人深度學習。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第4章 p.36",
    "difficulty": "基礎"
  },
  {
    "id": "q-dale-12",
    "chapterId": 4,
    "scholarId": "dale",
    "topic": "戴爾經驗金字塔對布魯納表徵理論之具體化貢獻",
    "questionText": "在教學科技史上，戴爾的「經驗金字塔」與布魯納的「表徵三階段」具有密切的理論呼應關係。金字塔中「做的經驗」最對應布魯納的何種表徵？",
    "options": [
      { "key": "A", "text": "動作表徵（Enactive representation）" },
      { "key": "B", "text": "符號表徵" },
      { "key": "C", "text": "影像表徵" },
      { "key": "D", "text": "超覺表徵" }
    ],
    "correctAnswer": "A",
    "explanation": "做的經驗（直接經驗、設計經驗、戲劇化經驗）對應動作表徵；觀察的經驗（影片、模型、展覽）對應影像表徵；抽象符號對應符號表徵。",
    "examSource": "108年臺中市公立學校教甄試題",
    "handoutRef": "講義第4章 p.36",
    "difficulty": "中等"
  },

  # ----------------------------------------------------
  # 15. 奧斯貝 (ausubel) - 9 new
  # ----------------------------------------------------
  {
    "id": "q-ausubel-4",
    "chapterId": 4,
    "scholarId": "ausubel",
    "topic": "奧斯貝之「有意義學習（Meaningful Learning）」核心條件",
    "questionText": "奧斯貝（D. P. Ausubel）認為，要使學習成為「有意義的學習（Meaningful Learning）」而非死記硬背的「機械學習（Rote Learning）」，必須滿足的最關鍵條件為何？",
    "options": [
      { "key": "A", "text": "學習者必須將具有潛在意義的新知識，與其既有認知結構中的適當先備概念建立非隨機且實質性的聯結（Substantive and non-arbitrary connection）" },
      { "key": "B", "text": "必須在下課前把課文背誦十遍" },
      { "key": "C", "text": "每次答對都必須給予金錢增強" },
      { "key": "D", "text": "學習材料必須全為彩色圖片" }
    ],
    "correctAnswer": "A",
    "explanation": "有意義學習核心定義：新知識與既有認知結構產生「非隨機性（Non-arbitrary）」與「實質性（Substantive，非逐字死記）」的深層結合。",
    "examSource": "112年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第4章 p.37",
    "difficulty": "基礎"
  },
  {
    "id": "q-ausubel-5",
    "chapterId": 4,
    "scholarId": "ausubel",
    "topic": "說明性前導組織（Expository Organizer）之應用時機",
    "questionText": "在奧斯貝的前導組織架構中，當學習者即將學習的內容是「完全全新、學生毫無相關先備知識」的概念時，教師最應優先提供哪種類型的前導組織？",
    "options": [
      { "key": "A", "text": "說明性前導組織（Expository Organizer）" },
      { "key": "B", "text": "比較性前導組織（Comparative Organizer）" },
      { "key": "C", "text": "回憶性前導組織" },
      { "key": "D", "text": "懲罰性前導組織" }
    ],
    "correctAnswer": "A",
    "explanation": "說明性前導組織在教材完全陌生時使用，提供上位的大概念架構與背景知識；比較性前導組織則在教材與舊經驗相似容易混淆時使用，用以釐清異同。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第4章 p.38",
    "difficulty": "中等"
  },
  {
    "id": "q-ausubel-6",
    "chapterId": 4,
    "scholarId": "ausubel",
    "topic": "比較性前導組織（Comparative Organizer）之功能",
    "questionText": "歷史老師在講述「美國獨立革命」之前，先引導學生對比已學過的「英國光榮革命」之背景、訴求與異同，以防止新舊概念相互混淆。這種教學鷹架屬於奧斯貝的：",
    "options": [
      { "key": "A", "text": "比較性前導組織（Comparative Organizer）" },
      { "key": "B", "text": "說明性前導組織" },
      { "key": "C", "text": "古典制約聯結" },
      { "key": "D", "text": "行為塑造" }
    ],
    "correctAnswer": "A",
    "explanation": "比較性前導組織專門用於對照新舊知識之間的相似點與相異點，增進辨別度，整合認知結構，避免概念混淆。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第4章 p.38",
    "difficulty": "基礎"
  },
  {
    "id": "q-ausubel-7",
    "chapterId": 4,
    "scholarId": "ausubel",
    "topic": "漸進分化（Progressive Differentiation）教學原則",
    "questionText": "奧斯貝主張教學教材的呈現應遵循「漸進分化（Progressive Differentiation）」原則，其具體教學實施邏輯為何？",
    "options": [
      { "key": "A", "text": "先呈現最一般性、最包攝性的大概念核心架構，再逐步向下展開詳細具體的細部次概念" },
      { "key": "B", "text": "先呈現微小細節，完全不告訴學生全貌" },
      { "key": "C", "text": "按照抽籤隨機排列順序" },
      { "key": "D", "text": "只教考試不考的冷門知識" }
    ],
    "correctAnswer": "A",
    "explanation": "漸進分化是由博返約、由大到小：先建立最高層次的概念錨樁（Anchors），再依序分化出子概念與細節，使認知結構層次井然。",
    "examSource": "109年高級中等以下學校教師資格考試",
    "handoutRef": "講義第4章 p.38",
    "difficulty": "中等"
  },
  {
    "id": "q-ausubel-8",
    "chapterId": 4,
    "scholarId": "ausubel",
    "topic": "統整協調（Integrative Reconciliation）概念調適",
    "questionText": "當學生學習新概念時，發現新概念與原有概念有矛盾或產生橫向交叉關聯時，教師引導學生重新檢視、比較並調和兩者之異同，消除混淆。這項原則被奧斯貝稱為：",
    "options": [
      { "key": "A", "text": "統整協調（Integrative Reconciliation）" },
      { "key": "B", "text": "消弱反應" },
      { "key": "C", "text": "機械記憶" },
      { "key": "D", "text": "盲目試誤" }
    ],
    "correctAnswer": "A",
    "explanation": "統整協調指在教學過程中不斷促進概念之間的交叉連結與對比統整，打破概念孤島，重塑清晰融通的認知網絡。",
    "examSource": "108年新北市公立國小教甄試題",
    "handoutRef": "講義第4章 p.38",
    "difficulty": "進階"
  },
  {
    "id": "q-ausubel-9",
    "chapterId": 4,
    "scholarId": "ausubel",
    "topic": "下位學習、上位學習與並列結合學習之型態區辨",
    "questionText": "學生原先已知「正方形、長方形、梯形」之特徵，數學老師隨後引導歸納出「四邊形」的總括概念與內角和定理。這種由具體下位概念同化至更高層次包攝概念的學習歷程稱為：",
    "options": [
      { "key": "A", "text": "上位學習（Superordinate Learning）" },
      { "key": "B", "text": "下位學習（Subsumptive Learning）" },
      { "key": "C", "text": "並列結合學習（Combinatorial Learning）" },
      { "key": "D", "text": "機械學習" }
    ],
    "correctAnswer": "A",
    "explanation": "上位學習指由多個已知具體下位觀念歸納並習得一個更具包攝性、更高階的新概念；反之，先學四邊形再學梯形則為下位學習。",
    "examSource": "112年高雄市國民小學教師甄選教育專業試題",
    "handoutRef": "講義第4章 p.37",
    "difficulty": "中等"
  },
  {
    "id": "q-ausubel-10",
    "chapterId": 4,
    "scholarId": "ausubel",
    "topic": "衍生下位學習（Derivative Subsumption）與相關下位學習",
    "questionText": "若學生已知「鳥類具有羽毛與翅膀且會生蛋」，新學到「麻雀是一種鳥類」，只是將麻雀當作已知鳥類概念的具體例證，原鳥類概念本質並未改變。這屬於奧斯貝的何種同化型態？",
    "options": [
      { "key": "A", "text": "衍生下位學習（Derivative Subsumption）" },
      { "key": "B", "text": "相關下位學習（Correlative Subsumption）" },
      { "key": "C", "text": "上位學習" },
      { "key": "D", "text": "並列學習" }
    ],
    "correctAnswer": "A",
    "explanation": "衍生下位學習：新學習材料僅為既有概念之直接實例，不改變既有概念本質；相關下位學習：新材料會修訂、擴充或深化既有概念（如學到企鵝是不會飛的鳥）。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第4章 p.37",
    "difficulty": "進階"
  },
  {
    "id": "q-ausubel-11",
    "chapterId": 4,
    "scholarId": "ausubel",
    "topic": "解釋教學法（Expository Teaching）之辯護",
    "questionText": "奧斯貝反對當時教育界盲目崇拜「發現學習」而貶抑「講述教學」的風潮。他有力地論證：只要教師善用結構與前導組織，講述教學法也能成為高效率的：",
    "options": [
      { "key": "A", "text": "有意義的接受學習（Meaningful Reception Learning）" },
      { "key": "B", "text": "被動填鴨學習" },
      { "key": "C", "text": "古典制約反射" },
      { "key": "D", "text": "無意識潛在學習" }
    ],
    "correctAnswer": "A",
    "explanation": "Ausubel 劃分兩大向度（接受 vs 發現；機械 vs 有意義），破除「講述必定是死背、發現必定是有意義」之迷思，證成有結構的接受學習能高度有意義且節省寶貴時間。",
    "examSource": "110年臺北市中等學校教甄教育科目",
    "handoutRef": "講義第4章 p.37",
    "difficulty": "中等"
  },
  {
    "id": "q-ausubel-12",
    "chapterId": 4,
    "scholarId": "ausubel",
    "topic": "奧斯貝名言對先備知識（Prior Knowledge）之極致強調",
    "questionText": "奧斯貝曾言：「假若我必須將所有教育心理學簡化為一條原理，我會說：影響學習的最重要單一因素是學習者已經知道了什麼。確認這一點，並據此施教。」這段話最強調教師在教學前必須進行：",
    "options": [
      { "key": "A", "text": "起點行為與先備知識（Prior Knowledge）的精確評估與連結" },
      { "key": "B", "text": "嚴格的體能測驗" },
      { "key": "C", "text": "調查學生家庭背景財富" },
      { "key": "D", "text": "星座性格配對" }
    ],
    "correctAnswer": "A",
    "explanation": "先備知識是新概念同化的唯一定錨點（Cognitive Anchors）。教學唯有精準扣合學童既有知識基礎，新知識才能生根茁壯。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第4章 p.37",
    "difficulty": "基礎"
  },

  # ----------------------------------------------------
  # 16. 維高斯基 (vygotsky) - 8 new
  # ----------------------------------------------------
  {
    "id": "q-vygotsky-6",
    "chapterId": 5,
    "scholarId": "vygotsky",
    "topic": "近側發展區（ZPD）之精確定義跨度",
    "questionText": "維高斯基（L. S. Vygotsky）提出的「近側發展區（Zone of Proximal Development, ZPD）」，是指下列哪兩個水準之間的差距跨度？",
    "options": [
      { "key": "A", "text": "「個人獨立解決問題時展現的實際發展水準」與「在成人指導或能力較佳同儕協同下所能達到的潛在發展水準」" },
      { "key": "B", "text": "全班最高分與全班最低分" },
      { "key": "C", "text": "學生的年齡與智商分數" },
      { "key": "D", "text": "第一學期成績與第二學期成績" }
    ],
    "correctAnswer": "A",
    "explanation": "ZPD 是實際能力水準（獨立完成）與潛在發展水準（協助下完成）之間的動態差距，這正是教學最具成效的黃金發展區域。",
    "examSource": "112年教育部教師資格考試（學習者發展）",
    "handoutRef": "講義第5章 p.44",
    "difficulty": "基礎"
  },
  {
    "id": "q-vygotsky-7",
    "chapterId": 5,
    "scholarId": "vygotsky",
    "topic": "鷹架理論（Scaffolding）之動態撤除原則",
    "questionText": "在課堂教學中落實鷹架作用（Scaffolding），下列哪一項是教師提供鷹架時必須遵守的核心原則？",
    "options": [
      { "key": "A", "text": "隨著學生能力的逐步增強與掌握，教師必須適時「漸進撤除（Fading）」鷹架支持，使學生最終能夠獨立自主完成任務" },
      { "key": "B", "text": "鷹架搭建後必須永久保留，絕不撤除" },
      { "key": "C", "text": "直接幫學生寫出整張考卷答案" },
      { "key": "D", "text": "完全不給任何提示讓學生碰壁" }
    ],
    "correctAnswer": "A",
    "explanation": "鷹架的精髓在於暫時性（Temporary）與漸退性（Fading）：初期給予結構化支持，隨能力提升逐步撤離，移轉學習主責權給學生。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第5章 p.45",
    "difficulty": "基礎"
  },
  {
    "id": "q-vygotsky-8",
    "chapterId": 14,
    "scholarId": "vygotsky",
    "topic": "動態評量（Dynamic Assessment）之實施典範",
    "questionText": "相較於傳統靜態測驗（Static Assessment）只測量過去已學會的知識，維高斯基理論衍生出的「動態評量（Dynamic Assessment）」其核心實施流程為何？",
    "options": [
      { "key": "A", "text": "前測（Pre-test）→ 教學/介入中介（Mediation）→ 後測（Post-test），評量學習潛能與對提示的反應敏感度" },
      { "key": "B", "text": "只在期末考 100 題選擇題" },
      { "key": "C", "text": "評量學生的跑步速度" },
      { "key": "D", "text": "讓學生隨意互打分數" }
    ],
    "correctAnswer": "A",
    "explanation": "動態評量採取「測驗-介入中介-再測」典範，評估學生在獲得鷹架提示後的學習潛能（Learning potential）與可塑性（Modifiability）。",
    "examSource": "110年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第14章 p.122",
    "difficulty": "中等"
  },
  {
    "id": "q-vygotsky-9",
    "chapterId": 5,
    "scholarId": "vygotsky",
    "topic": "私語（Private Speech / 自言自語）之認知調節功能",
    "questionText": "幼兒在拼圖遇到困難時，嘴巴小聲嘟囔：「角角要放在旁邊，這片是藍色的要配這裡...」。皮亞傑視此為不成熟的自我中心語言；而維高斯基則賦予其何種重大的認知功能？",
    "options": [
      { "key": "A", "text": "私語（Private Speech）是兒童用來引導、計畫與自我監控思維的重要「自我調控心理工具」" },
      { "key": "B", "text": "這是語言發展遲緩的病態現象" },
      { "key": "C", "text": "這是無意義的條件反射回音" },
      { "key": "D", "text": "純粹是為了吸引大人注意" }
    ],
    "correctAnswer": "A",
    "explanation": "Vygotsky 指出私語是外在社會語言轉化為內在思維（Inner speech）的中介樞紐，兒童透過出聲自語指導自己行動，展現了自我調節能力。",
    "examSource": "109年新北市幼兒園教師甄選教育學科",
    "handoutRef": "講義第5章 p.44",
    "difficulty": "中等"
  },
  {
    "id": "q-vygotsky-10",
    "chapterId": 5,
    "scholarId": "vygotsky",
    "topic": "心理工具（Psychological Tools）與符號中介（Mediation）",
    "questionText": "維高斯基指出，人類心智之所以能由低層次的動物感知躍升為高階心智功能，關鍵在於人類學會運用文化所創造的何種工具？",
    "options": [
      { "key": "A", "text": "符號與心理工具（Psychological tools / 主要是語言、文字與數字符號系統）" },
      { "key": "B", "text": "石器與弓箭" },
      { "key": "C", "text": "基因突變" },
      { "key": "D", "text": "肌肉發達度" }
    ],
    "correctAnswer": "A",
    "explanation": "符號（語言、數學、圖形符號）作為中介工具（Mediation tools），重塑了人類大腦的思維歷程，使人類能進行超越當下情境的抽象思考與記憶。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第5章 p.43",
    "difficulty": "進階"
  },
  {
    "id": "q-vygotsky-11",
    "chapterId": 11,
    "scholarId": "vygotsky",
    "topic": "更有能力的他人（MKO）與合作學習同儕異質分組",
    "questionText": "在課堂合作學習中，教師刻意採取「異質性分組」，讓理解較快的同學指導暫時卡關的組員。此設計在維高斯基理論中主要是落實何種概念？",
    "options": [
      { "key": "A", "text": "由「更有能力的他人（MKO, More Knowledgeable Other）」在近側發展區中提供同儕鷹架，促進共同認知建構" },
      { "key": "B", "text": "強迫高成就學生充當免錢助教" },
      { "key": "C", "text": "製造同儕間的不平衡競爭" },
      { "key": "D", "text": "分散教師的法律責任" }
    ],
    "correctAnswer": "A",
    "explanation": "MKO 不限於教師，能力較佳的同儕往往能用更貼近兒童視角的語言提供鷹架支持，使雙方都在合作中深化理解。",
    "examSource": "112年高雄市教育專業科目試題",
    "handoutRef": "講義第11章 p.87, 第5章 p.45",
    "difficulty": "基礎"
  },
  {
    "id": "q-vygotsky-12",
    "chapterId": 5,
    "scholarId": "vygotsky",
    "topic": "「教學應走在發展的前面（Teaching leads development）」",
    "questionText": "皮亞傑主張「發展先於教學（教學需等待發展成熟）」；與之針鋒相對，維高斯基提出了劃時代的教育命題，他主張：",
    "options": [
      { "key": "A", "text": "「教學走在發展的前面（Learning leads development）」——優質的教學能引導並走在心智發展前方，催生潛在能力" },
      { "key": "B", "text": "教學完全跟在發展屁股後面" },
      { "key": "C", "text": "學校不需要開設任何進階課程" },
      { "key": "D", "text": "發展與教學互不相干" }
    ],
    "correctAnswer": "A",
    "explanation": "Vygotsky 名言：只有走在發展前面的教學才是好教學。教學針對 ZPD 潛在水準施加引導，能拉動實際發展水準前進，創造新的發展契機。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第5章 p.44",
    "difficulty": "中等"
  },
  {
    "id": "q-vygotsky-13",
    "chapterId": 5,
    "scholarId": "vygotsky",
    "topic": "自發概念（Spontaneous）與科學概念（Scientific Concepts）之交會",
    "questionText": "維高斯基區分「自發/日常概念（從生活日常經驗自下而上累積）」與「科學概念（在學校結構化教學中自上而下習得）」。教學的最佳境界是促成兩者：",
    "options": [
      { "key": "A", "text": "在思維中相互交會融通：使生活日常概念系統化與邏輯化，同時賦予抽象科學概念以生活實感" },
      { "key": "B", "text": "完全消滅學生的生活經驗" },
      { "key": "C", "text": "嚴禁學校傳授任何科學理論" },
      { "key": "D", "text": "維持兩者徹底割裂互不往來" }
    ],
    "correctAnswer": "A",
    "explanation": "日常生活自發概念具豐富感性但欠系統，學校科學概念具邏輯性但易成教條。教學使兩者在 ZPD 中相遇，促成真正的概念理解。",
    "examSource": "110年新北市公立國小教甄試題",
    "handoutRef": "講義第5章 p.43",
    "difficulty": "進階"
  }
]
