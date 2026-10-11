# scripts/data_scholars_part3.py
# Scholars: bloom, maslow, rogers, wiggins_mctighe, dewey, suchman, ennis, raths, kohlberg

QUESTIONS_PART3 = [
  # ----------------------------------------------------
  # 17. 布魯姆 (bloom) - 9 new
  # ----------------------------------------------------
  {
    "id": "q-bloom-4",
    "chapterId": 5,
    "scholarId": "bloom",
    "topic": "修訂版認知領域教育目標層次順序（2001 Anderson & Krathwohl）",
    "questionText": "Anderson 與 Krathwohl（2001）修訂布魯姆（Bloom）認知歷程向度，由低層次至高層次的六大層次順序依序為何？",
    "options": [
      { "key": "A", "text": "記憶（Remember）→ 理解（Understand）→ 應用（Apply）→ 分析（Analyze）→ 評鑑（Evaluate）→ 創造（Create）" },
      { "key": "B", "text": "知識 → 理解 → 應用 → 綜合 → 分析 → 評鑑" },
      { "key": "C", "text": "記憶 → 應用 → 理解 → 評鑑 → 分析 → 創造" },
      { "key": "D", "text": "創造 → 評鑑 → 分析 → 應用 → 理解 → 記憶" }
    ],
    "correctAnswer": "A",
    "explanation": "2001新版認知歷程改為動詞形態，六層次口訣「記、理、應、分、評、創」：以「評鑑」取代原評鑑，最高層次為「創造（原綜合提升為最高）」。",
    "examSource": "112年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第5章 p.47, 第7章 p.59",
    "difficulty": "基礎"
  },
  {
    "id": "q-bloom-5",
    "chapterId": 7,
    "scholarId": "bloom",
    "topic": "知識向度四大類（事實、概念、程序、後設認知知識）",
    "questionText": "在修訂版布魯姆教育目標分類的「知識向度（Knowledge Dimension）」中，學生知道「如何使用顯微鏡製作洋蔥表皮細胞玻片」屬於何種類型的知識？",
    "options": [
      { "key": "A", "text": "程序知識（Procedural Knowledge）" },
      { "key": "B", "text": "事實知識（Factual Knowledge）" },
      { "key": "C", "text": "概念知識（Conceptual Knowledge）" },
      { "key": "D", "text": "後設認知知識（Metacognitive Knowledge）" }
    ],
    "correctAnswer": "A",
    "explanation": "知識向度四大類：事實知識（特定專有名詞、細節）、概念知識（原理、通則、結構）、程序知識（方法、技巧、步驟知能）、後設認知知識（自我認知策略）。操作顯微鏡方法屬於程序知識。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第7章 p.59",
    "difficulty": "中等"
  },
  {
    "id": "q-bloom-6",
    "chapterId": 5,
    "scholarId": "bloom",
    "topic": "認知歷程「分析（Analyze）」層次之指標動詞",
    "questionText": "在課堂評量中，若教師要求學生「比較唐朝與宋代賦稅制度之異同，並辨別其政策轉變背後的深層社會經濟因果關聯」。這屬於新版認知領域的哪一層次？",
    "options": [
      { "key": "A", "text": "分析（Analyze）" },
      { "key": "B", "text": "記憶（Remember）" },
      { "key": "C", "text": "應用（Apply）" },
      { "key": "D", "text": "理解（Understand）" }
    ],
    "correctAnswer": "A",
    "explanation": "分析（Analyze）層次涉及將材料分解為組成成分，並確定成分之間及整體架構的關聯性（包含區分、組織、歸因能力）。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第5章 p.47",
    "difficulty": "中等"
  },
  {
    "id": "q-bloom-7",
    "chapterId": 5,
    "scholarId": "bloom",
    "topic": "認知歷程最高層「創造（Create）」之實作表現",
    "questionText": "下列哪一項教學評量任務，最能具體落實布魯姆修訂版認知歷程中最高層次的「創造（Create）」？",
    "options": [
      { "key": "A", "text": "綜合所學的綠色能源與力學原理，親自設計並製作出一部全新的太陽能節能模型車原型" },
      { "key": "B", "text": "默寫牛頓運動三大定律之公式與內文" },
      { "key": "C", "text": "用白話文解釋浮力原理之意義" },
      { "key": "D", "text": "套用加速度公式計算物體落地速度" }
    ],
    "correctAnswer": "A",
    "explanation": "創造（Create）層次要求將各種要素重新組裝成一個連貫或具有功能性的新整體（包含產生新假說、設計規劃、產出新成品）。",
    "examSource": "109年新北市國小教甄試題",
    "handoutRef": "講義第5章 p.47",
    "difficulty": "基礎"
  },
  {
    "id": "q-bloom-8",
    "chapterId": 7,
    "scholarId": "bloom",
    "topic": "情意領域教育目標（Krathwohl & Bloom）層次劃分",
    "questionText": "克拉斯霍爾（Krathwohl）與布魯姆等人在 1964 年建立「情意領域教育目標分類」，由低至高五大層次的順序依序為：",
    "options": [
      { "key": "A", "text": "接受（Receiving）→ 反應（Responding）→ 評價/價值化（Valuing）→ 組織（Organization）→ 品格形成/價值性格化（Characterization）" },
      { "key": "B", "text": "品格形成 → 組織 → 評價 → 反應 → 接受" },
      { "key": "C", "text": "反應 → 接受 → 組織 → 評價 → 品格形成" },
      { "key": "D", "text": "接受 → 評價 → 反應 → 組織 → 品格形成" }
    ],
    "correctAnswer": "A",
    "explanation": "情意領域五層次口訣「接、反、價、組、品」：接受（覺知注意）、反應（主動參與）、評價（認同珍視）、組織（統整價值觀）、品格形成（內化為人生品格）。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第7章 p.60",
    "difficulty": "中等"
  },
  {
    "id": "q-bloom-9",
    "chapterId": 7,
    "scholarId": "bloom",
    "topic": "精熟教學法（Mastery Learning）之形成性評量回饋",
    "questionText": "布魯姆在倡導「精熟學習法」時，強調在教學單元進行中實施短小頻繁的「形成性診斷測驗（Formative Diagnostic Tests）」，其最根本目的在於：",
    "options": [
      { "key": "A", "text": "即時診斷學生的學習困難與盲點，針對未精熟者提供精準的個別化補救回饋修正" },
      { "key": "B", "text": "給全班學生打期末段考分數並在聯絡簿排名" },
      { "key": "C", "text": "懲罰考得差的學生" },
      { "key": "D", "text": "挑選出資優生進入實驗班" }
    ],
    "correctAnswer": "A",
    "explanation": "布魯姆認為形成性測驗不是用來打等第（評定），而是「教學檢驗與回饋修正的指南針」，確保每位學生在小步幅補救下都能精熟。",
    "examSource": "112年高雄市教育專業科目試題",
    "handoutRef": "講義第7章 p.62",
    "difficulty": "基礎"
  },
  {
    "id": "q-bloom-10",
    "chapterId": 7,
    "scholarId": "bloom",
    "topic": "雙向細目表（Two-Way Specification Table）設計核心原理",
    "questionText": "國中段考教師在編製定期評量試卷時，必須先擬定「雙向細目表（Two-Way Table of Specifications）」。雙向細目表橫軸與縱軸交會的兩大向度為：",
    "options": [
      { "key": "A", "text": "「教學教材內容主題」與「教育目標認知歷程層次」" },
      { "key": "B", "text": "「學生姓名」與「座號」" },
      { "key": "C", "text": "「考試日期」與「監考老師姓名」" },
      { "key": "D", "text": "「字體大小」與「紙張磅數」" }
    ],
    "correctAnswer": "A",
    "explanation": "雙向細目表由「教學內容」與「教學目標（認知歷程）」兩大向度交叉組成，主要目的在於確保測驗具備良好的「內容效度（Content Validity）」。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第7章 p.62",
    "difficulty": "基礎"
  },
  {
    "id": "q-bloom-11",
    "chapterId": 5,
    "scholarId": "bloom",
    "topic": "高階思維能力（HOTS）在課堂提問之落實",
    "questionText": "為擺脫死記硬背的淺層教學，教師在課堂上提問應增加「高層次思維（Higher-Order Thinking Skills, HOTS）」的提問比例。依據布魯姆分類，下列哪一題屬於 HOTS 提問？",
    "options": [
      { "key": "A", "text": "「如果你是當時的決策者，你會依據何種倫理與科學規準評斷這項核能發電政策的得失？為什麼？」（評鑑）" },
      { "key": "B", "text": "「請問第二次世界大戰於哪一年結束？」（記憶）" },
      { "key": "C", "text": "「台灣最高的山峰名稱是什麼？」（記憶）" },
      { "key": "D", "text": "「三角形內角和等於幾度？」（記憶）" }
    ],
    "correctAnswer": "A",
    "explanation": "分析、評鑑與創造屬於高階思維（HOTS）；記憶與簡單理解屬於低階思維（LOTS）。A 選項要求建立規準進行批判性評判，為典型的評鑑層次。",
    "examSource": "110年新北市國小教甄試題",
    "handoutRef": "講義第5章 p.47",
    "difficulty": "基礎"
  },
  {
    "id": "q-bloom-12",
    "chapterId": 7,
    "scholarId": "bloom",
    "topic": "布魯姆精熟學習對常模參照評量之哲學反思",
    "questionText": "布魯姆曾嚴厲批評傳統「常模參照評量（Norm-Referenced Assessment）」在學校教學中的濫用。其批判的主要核心在於：",
    "options": [
      { "key": "A", "text": "常模參照評量人為地製造失敗者與劣等生標籤，將學生互相比較競爭置於「人人精熟特定目標」之上" },
      { "key": "B", "text": "常模評量計算標準差過於簡單" },
      { "key": "C", "text": "常模評量無法在紙筆上作答" },
      { "key": "D", "text": "常模評量會減少學生的體育運動時間" }
    ],
    "correctAnswer": "A",
    "explanation": "布魯姆主張應採「標準參照評量（Criterion-Referenced）」，教育目標是幫助人人達成卓越標準，而非為了製造鐘型曲線常態分配而犧牲三分之一學生的自尊。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第7章 p.62",
    "difficulty": "中等"
  },

  # ----------------------------------------------------
  # 18. 馬斯洛 (maslow) - 8 new
  # ----------------------------------------------------
  {
    "id": "q-maslow-5",
    "chapterId": 6,
    "scholarId": "maslow",
    "topic": "需求層次理論（Hierarchy of Needs）七/八階層模型擴充",
    "questionText": "馬斯洛晚年將原先的五階層需求模型擴充為更完整的體系，在「自尊需求」之上、「自我實現需求」之下，加入了哪兩種高階心智需求？",
    "options": [
      { "key": "A", "text": "知的需求（求知/認知需求）與 美的需求（審美需求）" },
      { "key": "B", "text": "生理需求與安全需求" },
      { "key": "C", "text": "物質金錢需求與權力需求" },
      { "key": "D", "text": "排泄需求與睡眠需求" }
    ],
    "correctAnswer": "A",
    "explanation": "馬斯洛擴充模型：生理 → 安全 → 愛與隸屬 → 自尊 → 知與理解（認知需求）→ 美的感受（審美需求）→ 自我實現 → 超越自我。",
    "examSource": "112年教育部教師資格考試（學習者發展）",
    "handoutRef": "講義第6章 p.53, 第13章 p.110",
    "difficulty": "中等"
  },
  {
    "id": "q-maslow-6",
    "chapterId": 6,
    "scholarId": "maslow",
    "topic": "匱乏需求（Deficiency Needs）與成長需求（Growth Needs）之本質差異",
    "questionText": "馬斯洛將需求劃分為「匱乏需求（D-needs）」與「成長需求（B-needs）」。下列有關兩者特質比較的敘述，何者最為正確？",
    "options": [
      { "key": "A", "text": "匱乏需求在獲得滿足後張力會降低或消失；而成長需求（如求知、審美、自我實現）在獲得滿足後反而會越發渴望追求" },
      { "key": "B", "text": "成長需求滿足後會完全消失不再出現" },
      { "key": "C", "text": "飢餓是成長需求，求知是匱乏需求" },
      { "key": "D", "text": "兩者沒有任何運作差異" }
    ],
    "correctAnswer": "A",
    "explanation": "匱乏需求源於欠缺（滿足後動機減弱，如吃飽就不想吃）；成長需求（Being-needs）源於自我潛能開展，越學越想學，具有自給自足的永續性。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第6章 p.53",
    "difficulty": "中等"
  },
  {
    "id": "q-maslow-7",
    "chapterId": 6,
    "scholarId": "maslow",
    "topic": "班級經營中「安全與隸屬需求」為求知之先決條件",
    "questionText": "清寒學童阿強每天上學常常沒吃早餐、在家中面臨父母家暴威脅，在課堂上經常眼神呆滯難以專注於數學運算。依據馬斯洛需求層次理論，教師最應優先介入的措施為何？",
    "options": [
      { "key": "A", "text": "協同社工提供早餐營養補充，建立班級溫暖包容的安全感，滿足其低層次的生理與安全基本需求" },
      { "key": "B", "text": "強制罰寫數學作業一百次" },
      { "key": "C", "text": "當眾斥責其學習態度不端正" },
      { "key": "D", "text": "直接將其列入資優班加強培訓" }
    ],
    "correctAnswer": "A",
    "explanation": "需求層次具備階層性，當生理與安全需求匱乏受阻時，個體的所有心智精力全被生存危機佔據，絕不可能自發產生高階的求知動機。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第6章 p.53",
    "difficulty": "基礎"
  },
  {
    "id": "q-maslow-8",
    "chapterId": 13,
    "scholarId": "maslow",
    "topic": "高峰經驗（Peak Experience）之教育意義",
    "questionText": "馬斯洛在其研究中發現，自我實現者經常會體驗到一種「忘我、專注沉浸、狂喜、與宇宙融為一體並感到深刻意義」的恍惚時刻。馬斯洛將此心靈狀態稱作：",
    "options": [
      { "key": "A", "text": "高峰經驗（Peak Experience）" },
      { "key": "B", "text": "習得無助感" },
      { "key": "C", "text": "刺激類化狀態" },
      { "key": "D", "text": "感官剝奪效應" }
    ],
    "correctAnswer": "A",
    "explanation": "高峰經驗（Peak Experience）是自我實現與創造力爆發時極致的幸福喜悅與神聖超越感，與正向心理學的心流（Flow）高度契合。",
    "examSource": "109年高級中等以下學校教師資格考試",
    "handoutRef": "講義第13章 p.110",
    "difficulty": "基礎"
  },
  {
    "id": "q-maslow-9",
    "chapterId": 6,
    "scholarId": "maslow",
    "topic": "自我實現者（Self-Actualizing Person）之人格特質",
    "questionText": "馬斯洛訪談愛因斯坦等卓越歷史人物後，歸納出「自我實現者」具備多項健康心理特質，下列何者不屬於自我實現者的典型特徵？",
    "options": [
      { "key": "A", "text": "盲目遵從世俗偏見與物質虛榮" },
      { "key": "B", "text": "能客觀準確地洞察現實" },
      { "key": "C", "text": "接納自己、他人與自然" },
      { "key": "D", "text": "富含自發性與以問題為中心的思維導向" }
    ],
    "correctAnswer": "A",
    "explanation": "自我實現者具有高度自主性與超然獨立性，不盲從世俗虛榮與偏見，具備幽默感、問題導向、富創造力與深刻的同理關懷。",
    "examSource": "108年新北市公立國小教甄試題",
    "handoutRef": "講義第6章 p.53",
    "difficulty": "中等"
  },
  {
    "id": "q-maslow-10",
    "chapterId": 6,
    "scholarId": "maslow",
    "topic": "愛與隸屬需求（Belongingness and Love Needs）之課堂營造",
    "questionText": "轉學生小萱剛轉入新班級時常感到孤立無援、不敢在課堂發言。林老師藉由分組破冰活動讓組員熱情接納她，並指定學伴協助導覽校園。林老師主要滿足了小萱的何種需求？",
    "options": [
      { "key": "A", "text": "愛與隸屬需求（Belongingness and Love Needs）" },
      { "key": "B", "text": "生理需求" },
      { "key": "C", "text": "審美需求" },
      { "key": "D", "text": "超越自我需求" }
    ],
    "correctAnswer": "A",
    "explanation": "愛與隸屬需求是指被同儕群體接納、擁有歸屬感、友誼與心理連結的渴望，這是學生在班級中建立學習信心的核心基石。",
    "examSource": "112年桃園市國小教甄試題",
    "handoutRef": "講義第6章 p.53",
    "difficulty": "基礎"
  },
  {
    "id": "q-maslow-11",
    "chapterId": 13,
    "scholarId": "maslow",
    "topic": "內在學習（Intrinsic Learning）與人本教育哲學",
    "questionText": "馬斯洛指出：「教育的最終目的，是幫助人成為充分發揮其天賦潛能的完人（To help a person become fully human）。」這段人本教育名言最反對何種教學型態？",
    "options": [
      { "key": "A", "text": "將學生視為流水線產品、強迫灌輸外在標準答案與工具化分數考核的機械教育" },
      { "key": "B", "text": "關照學生身心發展的個別化教學" },
      { "key": "C", "text": "啟發潛能的探究課程" },
      { "key": "D", "text": "營造友善溫暖的班級氛圍" }
    ],
    "correctAnswer": "A",
    "explanation": "馬斯洛人本教育哲學批判將學生異化為考試工具的工廠模式，主張教育應尊重內在生命潛能的自發開展（自我實現）。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第13章 p.110",
    "difficulty": "基礎"
  },
  {
    "id": "q-maslow-12",
    "chapterId": 6,
    "scholarId": "maslow",
    "topic": "約拿情結（Jonah Complex）在學生生涯輔導之啟示",
    "questionText": "馬斯洛提出「約拿情結（Jonah Complex）」心理概念，指個體害怕發揮自身最高潛能、抗拒卓越與偉大、逃避承擔重大責任的深層恐懼。在輔導資優或具天賦的學生時，教師應如何協助其克服？",
    "options": [
      { "key": "A", "text": "引導學生勇敢面對自我內在懷疑，建立心理安全感，鼓勵其接納自身才華並勇於承擔卓越責任" },
      { "key": "B", "text": "警告學生出頭鳥會被打死，要盡量裝傻" },
      { "key": "C", "text": "完全取消所有挑戰性任務" },
      { "key": "D", "text": "對其冷嘲熱諷以鍛鍊心智" }
    ],
    "correctAnswer": "A",
    "explanation": "約拿情結代表面對偉大命運時的逃避恐懼。教師應提供心理支持，幫助學生破除對失敗或被孤立的恐懼，邁向自我實現。",
    "examSource": "110年高雄市國小教甄試題",
    "handoutRef": "講義第6章 p.53",
    "difficulty": "進階"
  },

  # ----------------------------------------------------
  # 19. 羅吉斯 (rogers) - 9 new
  # ----------------------------------------------------
  {
    "id": "q-rogers-4",
    "chapterId": 6,
    "scholarId": "rogers",
    "topic": "羅吉斯促進學習之三大核心態度",
    "questionText": "人本主義教育心理學大師卡爾·羅吉斯（Carl Rogers）提出，教師作為「學習促進者（Facilitator）」，必須具備哪三種最核心的特質態度？",
    "options": [
      { "key": "A", "text": "真誠一致（Congruence / Genuineness）、無條件積極關懷（Unconditional Positive Regard）、同理心傾聽理解（Empathy）" },
      { "key": "B", "text": "權威嚴肅、賞罰分明、滔滔不絕" },
      { "key": "C", "text": "放任不管、冷漠以對、隨意打分" },
      { "key": "D", "text": "博學多聞、板書工整、音量宏亮" }
    ],
    "correctAnswer": "A",
    "explanation": "Rogers 促進學習三核心態度口訣「真、關、同」：真誠一致（坦誠無偽）、無條件積極接納關懷（重視學生尊嚴價值）、同理心傾聽（設身處地感受學生心境）。",
    "examSource": "112年教育部教師資格考試（教育理念與實踐）",
    "handoutRef": "講義第6章 p.54",
    "difficulty": "基礎"
  },
  {
    "id": "q-rogers-5",
    "chapterId": 6,
    "scholarId": "rogers",
    "topic": "真誠一致（Congruence / Genuineness）之課堂體現",
    "questionText": "在課堂師生互動中，下列哪位教師的言行最符合羅吉斯所倡導的「真誠一致（Congruence）」？",
    "options": [
      { "key": "A", "text": "張老師在課堂上不戴權威面具，當自己不知道某題答案時能坦白承認並邀請學生一起查證，真誠表達內在感受" },
      { "key": "B", "text": "李老師明明不懂卻硬掰假答案以維持尊嚴" },
      { "key": "C", "text": "王老師私下憤怒但臉上掛著僵硬的假笑" },
      { "key": "D", "text": "陳老師對學生永遠保持冷漠撲克臉" }
    ],
    "correctAnswer": "A",
    "explanation": "真誠一致是指教師做真實的自己，不偽裝、不戴假面具，內在體驗、意識與外在言語行為完全吻合，營造彼此信賴的真實關係。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第6章 p.54",
    "difficulty": "基礎"
  },
  {
    "id": "q-rogers-6",
    "chapterId": 6,
    "scholarId": "rogers",
    "topic": "無條件積極關懷（Unconditional Positive Regard）",
    "questionText": "羅吉斯主張「無條件積極關懷（Unconditional Positive Regard）」，在班級輔導管教實務上，這項原則的核心真諦為何？",
    "options": [
      { "key": "A", "text": "接納並尊重學生作為「人」的本質價值與尊嚴，不因其當前成績高低或犯錯而否定其生存價值，將「人」與「行為」分開看待" },
      { "key": "B", "text": "放任學生所有破壞公物行為不管" },
      { "key": "C", "text": "只有考第一名的學生才值得被愛" },
      { "key": "D", "text": "不管學生做什麼都給予金錢獎賞" }
    ],
    "correctAnswer": "A",
    "explanation": "無條件積極關懷並不等於讚同一切不當行為，而是傳遞「我珍惜接納你這個人，即便你需要修正具體行為」的深層心理安全感。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第6章 p.54",
    "difficulty": "中等"
  },
  {
    "id": "q-rogers-7",
    "chapterId": 6,
    "scholarId": "rogers",
    "topic": "同理心理解（Empathic Understanding）之技巧層次",
    "questionText": "當考試失利痛哭的學生說「我覺得自己是個廢物」時，下列哪一種教師的回應最展現了羅吉斯的「同理心理解（Empathy）」？",
    "options": [
      { "key": "A", "text": "「看到考卷的分數，你感到非常沮喪與挫折，甚至開始懷疑自己的價值，對嗎？」" },
      { "key": "B", "text": "「這有什麼好哭的，男子漢大丈夫哭什麼哭！」" },
      { "key": "C", "text": "「早就叫你不要打電動，活該！」" },
      { "key": "D", "text": "「別難過了，我們去吃冰淇淋就沒事了。」" }
    ],
    "correctAnswer": "A",
    "explanation": "同理心理解是指暫時放下自身評斷，準確感知學生內在的情感架構與主觀世界，並以溫和語言回映給學生，讓學生感到「被深刻聽懂」。",
    "examSource": "109年新北市國小教甄試題",
    "handoutRef": "講義第6章 p.54",
    "difficulty": "基礎"
  },
  {
    "id": "q-rogers-8",
    "chapterId": 6,
    "scholarId": "rogers",
    "topic": "意義學習（Significant Learning）與認知學習之對比",
    "questionText": "羅吉斯在其名著《自由學習（Freedom to Learn）》中區分了「無意義學習（如死背無意義音節）」與「意義學習（Significant Learning）」。他指出真正的意義學習具有何種特徵？",
    "options": [
      { "key": "A", "text": "具有全人投入性（整個人身心靈涉入）、由自我主動發起、能深入滲透並根本改變個體的行為與人格" },
      { "key": "B", "text": "只與大腦左半球記憶區有關" },
      { "key": "C", "text": "必須靠外在電擊增強驅動" },
      { "key": "D", "text": "在考完試三天後必然全數遺忘" }
    ],
    "correctAnswer": "A",
    "explanation": "意義學習是融匯認知與情感的全人學習（Personal involvement），由學習者內在好奇主動驅動，其影響深植於個人生命與自我概念之中。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第6章 p.54",
    "difficulty": "中等"
  },
  {
    "id": "q-rogers-9",
    "chapterId": 6,
    "scholarId": "rogers",
    "topic": "契約學習（Learning Contracts）在學生自主化之運用",
    "questionText": "為了在常規體制中落實自由學習理念，羅吉斯倡導運用「學習契約（Learning Contracts）」。其具體實施方式為何？",
    "options": [
      { "key": "A", "text": "師生共同協商擬定合約，由學生自主設定目標、選擇活動路徑並約定評量規準，教師擔任資源支持者" },
      { "key": "B", "text": "由教師單方擬定賣身契嚴格懲罰" },
      { "key": "C", "text": "要求家長簽字保證學生考進台大" },
      { "key": "D", "text": "完全不訂定任何規範讓學生自生自滅" }
    ],
    "correctAnswer": "A",
    "explanation": "學習契約在自由與責任之間取得平衡，賦予學生自主規劃學習的主導權，同時建立明確的自我當責與自我評量標準。",
    "examSource": "112年高雄市國民小學教師甄選教育專業試題",
    "handoutRef": "講義第6章 p.55",
    "difficulty": "基礎"
  },
  {
    "id": "q-rogers-10",
    "chapterId": 6,
    "scholarId": "rogers",
    "topic": "心理安全（Psychological Safety）降低防衛心理",
    "questionText": "羅吉斯指出，當外在威脅（如嚴厲嘲笑、公開羞辱、分數威嚇）過高時，學習者的自我概念會築起堅固的防衛機制，拒絕接受新經驗。為了促進深層學習，教師最應營造：",
    "options": [
      { "key": "A", "text": "心理安全與心理自由（Psychological Safety and Freedom）的無威脅學習情境" },
      { "key": "B", "text": "高壓恐懼的淘汰篩選戰場" },
      { "key": "C", "text": "死氣沉沉的禁語環境" },
      { "key": "D", "text": "充滿彼此攻訐的零和競爭" }
    ],
    "correctAnswer": "A",
    "explanation": "在無威脅（心理安全）的環境中，個體才敢放下防衛、展露脆弱、承認不知、大膽嘗試新假說，真正實現開放性成長。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第6章 p.55",
    "difficulty": "基礎"
  },
  {
    "id": "q-rogers-11",
    "chapterId": 6,
    "scholarId": "rogers",
    "topic": "「以學生為中心（Student-Centered）」教育觀之真諦",
    "questionText": "羅吉斯倡導「以學習者為中心（Student-Centered Instruction）」，在此模式中，教師角色從傳統的「講台上的聖人（Sage on the stage）」轉變為：",
    "options": [
      { "key": "A", "text": "「身旁的引導促進者（Guide on the side / Facilitator of learning）」" },
      { "key": "B", "text": "威權的法官" },
      { "key": "C", "text": "無關緊要的旁觀者" },
      { "key": "D", "text": "嚴格的監考員" }
    ],
    "correctAnswer": "A",
    "explanation": "教師的角色不再是單向灌輸標準答案的權威，而是激發動機、搭建鷹架、提供資源與陪伴成長的學習促進者（Facilitator）。",
    "examSource": "110年臺北市中等學校教甄試題",
    "handoutRef": "講義第6章 p.54",
    "difficulty": "基礎"
  },
  {
    "id": "q-rogers-12",
    "chapterId": 6,
    "scholarId": "rogers",
    "topic": "羅吉斯名言對灌輸式教學之終極質疑",
    "questionText": "羅吉斯在教育演說中曾提出震撼性的名言：「凡是可以直接傳授給別人的知識，大多是相對無關緊要的，對行為幾乎沒有深遠影響；唯有個人自主發現、消化吸收的知識，才能真正改變行為。」這句話最主要在批判：",
    "options": [
      { "key": "A", "text": "被動填鴨灌輸式的教學模式" },
      { "key": "B", "text": "學生的自主專案研究" },
      { "key": "C", "text": "合作學習與同儕探究" },
      { "key": "D", "text": "學生的課外實習經驗" }
    ],
    "correctAnswer": "A",
    "explanation": "羅吉斯強調真知必然源於個人主動內化與體驗；外在強加的說教與死背無法轉化為健全人格與生活行動力，這是對填鴨教育的深痛針砭。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第6章 p.54",
    "difficulty": "中等"
  },

  # ----------------------------------------------------
  # 20. 威金斯與麥克泰 (wiggins_mctighe) - 7 new
  # ----------------------------------------------------
  {
    "id": "q-wiggins-6",
    "chapterId": 7,
    "scholarId": "wiggins_mctighe",
    "topic": "逆向設計三階段（Backward Design）順序",
    "questionText": "威金斯與麥克泰（Wiggins & McTighe）在 UbD（Understanding by Design）中倡導「逆向設計（Backward Design）」，其三大設計階段順序依序為何？",
    "options": [
      { "key": "A", "text": "階段一：確認期望成果 → 階段二：決定可接受的評量證據 → 階段三：規劃學習經驗與教學" },
      { "key": "B", "text": "階段一：規劃教學活動 → 階段二：設計考試考卷 → 階段三：確認學習成果" },
      { "key": "C", "text": "階段一：翻開教科書第一頁 → 階段二：照本宣科講述 → 階段三：期末段考" },
      { "key": "D", "text": "階段一：設計表現任務 → 階段二：確認核心大概念 → 階段三：出紙筆測驗" }
    ],
    "correctAnswer": "A",
    "explanation": "UbD 逆向設計口訣「以終為始」：先定學習目標大概念（成果）→ 再定如何證明學生真的懂了（評量證據）→ 最後才規劃教學活動，徹底打破教材覆蓋盲點。",
    "examSource": "112年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第7章 p.63",
    "difficulty": "基礎"
  },
  {
    "id": "q-wiggins-7",
    "chapterId": 7,
    "scholarId": "wiggins_mctighe",
    "topic": "傳統教學之「雙重罪（Twin Sins）」迷思剖析",
    "questionText": "UbD 理論強烈抨擊傳統課程設計中普遍存在的「雙重罪（Twin Sins）」，這兩大致命缺失分別是指：",
    "options": [
      { "key": "A", "text": "「活動導向教學（只顧熱鬧好玩卻無目標）」與「教材覆蓋導向（只顧趕進度教完課本卻無深層理解）」" },
      { "key": "B", "text": "體罰學生與作業出太少" },
      { "key": "C", "text": "放學太早與冷氣開太強" },
      { "key": "D", "text": "字寫太小與粉筆灰太重" }
    ],
    "correctAnswer": "A",
    "explanation": "雙重罪：1.活動導向（Activity-oriented：手動腦不動，無明確目標）；2.教材覆蓋導向（Coverage-focused：教科書專制，塞滿進度而學生腦中空空）。",
    "examSource": "111年臺北市中等學校教甄教育專業科目",
    "handoutRef": "講義第7章 p.63",
    "difficulty": "中等"
  },
  {
    "id": "q-wiggins-8",
    "chapterId": 7,
    "scholarId": "wiggins_mctighe",
    "topic": "理解的六個面向（Six Facets of Understanding）",
    "questionText": "在 UbD 重理解的課程設計中，學生達到成熟理解時會展現「理解的六個面向」，下列何者不屬於這六大面向？",
    "options": [
      { "key": "A", "text": "機械背誦（Mechanical Memorization）" },
      { "key": "B", "text": "解釋（Explanation）與詮釋（Interpretation）" },
      { "key": "C", "text": "應用（Application）與觀點（Perspective）" },
      { "key": "D", "text": "同理心（Empathy）與自知（Self-Knowledge）" }
    ],
    "correctAnswer": "A",
    "explanation": "理解六面向：解釋、詮釋、應用、觀點、同理心、自知。機械背誦是死記，並非深層理解。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第7章 p.64",
    "difficulty": "基礎"
  },
  {
    "id": "q-wiggins-9",
    "chapterId": 7,
    "scholarId": "wiggins_mctighe",
    "topic": "表現任務設計之 GRASPS 架構",
    "questionText": "在 UbD 階段二設計真實表現任務時，常運用「GRASPS」模式搭建真實情境架構。其中 G-R-A-S-P-S 分別代表什麼意涵？",
    "options": [
      { "key": "A", "text": "目標（Goal）、角色（Role）、對象（Audience）、情境（Situation）、產品/表現（Product）、標準規準（Standards）" },
      { "key": "B", "text": "成績、跑步、年齡、學校、鉛筆、學生" },
      { "key": "C", "text": "遊戲、規則、行動、速度、力量、獎賞" },
      { "key": "D", "text": "語法、閱讀、問答、拼字、發音、句子" }
    ],
    "correctAnswer": "A",
    "explanation": "GRASPS 架構能為學生設定真實世界的挑戰脈絡：界定真實目標（Goal）、扮演專業角色（Role）、面對真實對象（Audience）、處於真實情境（Situation）、產出具體成果（Product）、依循明確規準（Standards）。",
    "examSource": "109年高級中等以下學校教師資格考試",
    "handoutRef": "講義第7章 p.64",
    "difficulty": "中等"
  },
  {
    "id": "q-wiggins-10",
    "chapterId": 7,
    "scholarId": "wiggins_mctighe",
    "topic": "核心問題（Essential Questions）之設計特徵",
    "questionText": "在 UbD 課程設計中，教師設計的「核心問題（Essential Questions, EQ）」應具備何種特質？",
    "options": [
      { "key": "A", "text": "開放性、發人深省、直指學科核心大概念、沒有單一標準答案且能引發持續探究" },
      { "key": "B", "text": "是非題或一眼就能在課本找到答案的封閉事實問題" },
      { "key": "C", "text": "只需要背誦特定公式就能回答" },
      { "key": "D", "text": "學生完全無法理解的艱澀術語" }
    ],
    "correctAnswer": "A",
    "explanation": "核心問題（Essential Questions）是指向本質的開放提問（如「什麼是真正的正義？」、「藝術如何反映時代？」），能驅動學生探求大概念背後深層意義。",
    "examSource": "108年新北市公立國小教甄試題",
    "handoutRef": "講義第7章 p.63",
    "difficulty": "基礎"
  },
  {
    "id": "q-wiggins-11",
    "chapterId": 7,
    "scholarId": "wiggins_mctighe",
    "topic": "教學活動規劃之 WHERETO 指引",
    "questionText": "在 UbD 階段三規劃學習經驗與教學時，Wiggins & McTighe 提出了「WHERETO」檢核要素，其中第一個字母「W」代表的教學任務為何？",
    "options": [
      { "key": "A", "text": "幫助學生明白單元目標「去向何方（Where）」與「為何而學（Why）」" },
      { "key": "B", "text": "要求學生等待（Wait）老師到齊" },
      { "key": "C", "text": "抄寫生字工作（Writing）" },
      { "key": "D", "text": "測量教室溫度（Weather）" }
    ],
    "correctAnswer": "A",
    "explanation": "WHERETO：W（方向與理由）、H（引起注意 Hook）、E（探索裝備）、R（反思修正）、E（評估成果）、T（個別化裁切）、O（最佳化組織）。",
    "examSource": "112年桃園市國小教甄試題",
    "handoutRef": "講義第7章 p.65",
    "difficulty": "進階"
  },
  {
    "id": "q-wiggins-12",
    "chapterId": 7,
    "scholarId": "wiggins_mctighe",
    "topic": "大概念（Big Ideas）與素養導向教學連結",
    "questionText": "當前臺灣 12 年國教素養導向課綱強調核心素養的轉化，UbD 提倡的「大概念（Big Ideas）」在課程設計中最關鍵的作用為何？",
    "options": [
      { "key": "A", "text": "作為概念的核心定錨點，統整零碎孤立的事實知識，促成高階思維與生活情境實踐的深度遷移" },
      { "key": "B", "text": "用來增加教科書的章節數量" },
      { "key": "C", "text": "取代所有基礎練習題" },
      { "key": "D", "text": "只給大學研究所學生研究用" }
    ],
    "correctAnswer": "A",
    "explanation": "大概念（Big Ideas）具備深層包攝性與超越時間的持久價值，是落實素養導向「跨領域統整、深度探究與生活遷移」的課程靈魂。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第7章 p.63",
    "difficulty": "中等"
  },

  # ----------------------------------------------------
  # 21. 杜威 (dewey) - 9 new
  # ----------------------------------------------------
  {
    "id": "q-dewey-4",
    "chapterId": 8,
    "scholarId": "dewey",
    "topic": "杜威思考術（How We Think）五大思維步驟順序",
    "questionText": "約翰·杜威（John Dewey）在《我們如何思維》中提出科學問題解決思維的五大步驟，其正確順序為何？",
    "options": [
      { "key": "A", "text": "遭遇疑難情境 → 界定問題關鍵 → 提出解決假說 → 推論演繹結果 → 驗證檢驗假說" },
      { "key": "B", "text": "提出假說 → 遭遇疑難 → 界定問題 → 驗證假說 → 推論演繹" },
      { "key": "C", "text": "驗證檢驗 → 遭遇疑難 → 提出假說 → 推論演繹 → 界定問題" },
      { "key": "D", "text": "界定問題 → 遭遇疑難 → 驗證假說 → 提出假說 → 推論演繹" }
    ],
    "correctAnswer": "A",
    "explanation": "杜威反省思維五步口訣「疑、定、假、推、驗」：1.遭遇疑難困惑；2.確定問題核心；3.提出解決假說；4.推演假說之後果；5.行動檢驗與驗證假說。",
    "examSource": "112年教育部教師資格考試（教育理念與實踐）",
    "handoutRef": "講義第8章 p.69",
    "difficulty": "基礎"
  },
  {
    "id": "q-dewey-5",
    "chapterId": 8,
    "scholarId": "dewey",
    "topic": "「做中學（Learning by Doing）」之真實意涵",
    "questionText": "杜威主張「做中學（Learning by doing）」，下列有關「做中學」的教育詮釋，何者最符合杜威實用主義的原意？",
    "options": [
      { "key": "A", "text": "在真實生活的情境脈絡中主動行動、遭遇問題並進行科學探究反省，使經驗不斷重組與改造" },
      { "key": "B", "text": "只讓學生動手做勞作或體力活，不需要任何大腦反省思考" },
      { "key": "C", "text": "在黑板上抄寫一千遍做中學" },
      { "key": "D", "text": "完全取消課本與所有文字閱讀" }
    ],
    "correctAnswer": "A",
    "explanation": "杜威的做中學絕非無腦的肢體勞動，而是「做（Action）與思考反省（Reflection）的合一」——在動手中體驗結果，在探究中改造經驗。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第8章 p.69",
    "difficulty": "基礎"
  },
  {
    "id": "q-dewey-6",
    "chapterId": 10,
    "scholarId": "dewey",
    "topic": "「教育即生活（Education is life itself）」之哲學批判",
    "questionText": "杜威名言「教育即生活（Education is life itself, not a preparation for life）」，這句話主要批判傳統教育的何種偏頗思想？",
    "options": [
      { "key": "A", "text": "將當前兒童的真實生活視為手段，把教育僅僅窄化為「替遙遠成年未來謀職做準備」的冷酷預備說" },
      { "key": "B", "text": "讓學生在學校吃營養午餐" },
      { "key": "C", "text": "學校開設生活與科技課程" },
      { "key": "D", "text": "提倡終身學習" }
    ],
    "correctAnswer": "A",
    "explanation": "杜威主張兒童當下的生活本身就具備豐富價值，教育就是生長（Growth）的歷程本身，不應犧牲當下的童年與探索熱情來充當未來的預備。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第10章 p.81",
    "difficulty": "中等"
  },
  {
    "id": "q-dewey-7",
    "chapterId": 8,
    "scholarId": "dewey",
    "topic": "經驗的兩大規準（Criteria of Experience）：連續性與交互作用",
    "questionText": "杜威在《經驗與教育》中提出判斷一項經驗是否具備良好教育價值的「兩大規準」，分別為何？",
    "options": [
      { "key": "A", "text": "連續性原則（Continuity）與 交互作用原則（Interaction）" },
      { "key": "B", "text": "速度原則與重量原則" },
      { "key": "C", "text": "獎勵原則與懲罰原則" },
      { "key": "D", "text": "文字原則與數字原則" }
    ],
    "correctAnswer": "A",
    "explanation": "經驗兩大規準：連續性（過去經驗影響現在，現在經驗引領未來持續成長開展）與交互作用（個人內在特質與當前外在客觀環境的互動統整）。",
    "examSource": "109年高級中等以下學校教師資格考試",
    "handoutRef": "講義第8章 p.69",
    "difficulty": "中等"
  },
  {
    "id": "q-dewey-8",
    "chapterId": 10,
    "scholarId": "dewey",
    "topic": "「學校即社會（School as Society）」之微型社會實驗室觀點",
    "questionText": "杜威提出「學校即社會（School as Society）」，強調學校環境在制度設計上應扮演何種角色？",
    "options": [
      { "key": "A", "text": "將學校打造為一個簡化、純化且平衡的微型民主合作社會，讓學生在真實共同體生活中學習民主參與" },
      { "key": "B", "text": "將學校完全變成營利賺錢的商業工廠" },
      { "key": "C", "text": "使學校與現實社會完全隔絕成為象牙塔" },
      { "key": "D", "text": "在校園建立監獄式的軍事管制" }
    ],
    "correctAnswer": "A",
    "explanation": "學校應是民主生活的胚胎與縮影，透過簡化（消除複雜弊病）、純化（篩選優質文化）、平衡（打破階級隔閡），培育具有民主素養的公民。",
    "examSource": "108年新北市公立國小教甄試題",
    "handoutRef": "講義第10章 p.81",
    "difficulty": "基礎"
  },
  {
    "id": "q-dewey-9",
    "chapterId": 8,
    "scholarId": "dewey",
    "topic": "「教育即經驗的重組與改造（Reconstruction of Experience）」",
    "questionText": "杜威給予教育的最經典定義是：「教育即經驗的持續重組與改造（Reconstruction of Experience）。」這項定義凸顯了學習歷程的何種特質？",
    "options": [
      { "key": "A", "text": "學習不是被動接收外在現成知識，而是學習者主動將新舊經驗融會貫通，賦予經驗更深意義並增進指揮後續經驗的能力" },
      { "key": "B", "text": "背誦考古題答案以應付聯考" },
      { "key": "C", "text": "將大腦當作空水桶由老師倒水" },
      { "key": "D", "text": "全盤否定人類所有的文化傳統" }
    ],
    "correctAnswer": "A",
    "explanation": "經驗改造說強調主體在問題解決中重塑認知視野，每次反省都使經驗更豐富、更有方向性，促成生生不息的生長。",
    "examSource": "112年高雄市國民小學教師甄選教育專業試題",
    "handoutRef": "講義第8章 p.69",
    "difficulty": "中等"
  },
  {
    "id": "q-dewey-10",
    "chapterId": 8,
    "scholarId": "dewey",
    "topic": "反省思維（Reflective Thinking）作為理性民主之基石",
    "questionText": "杜威在《民主主義與教育》中論證，民主社會的維繫不能只依賴投票形式，最根本的先決條件是全體公民必須透過學校教育具備：",
    "options": [
      { "key": "A", "text": "以證據為基礎、能獨立批判並審慎考量後果的「反省性思維能力（Reflective Thinking）」" },
      { "key": "B", "text": "對權威領袖的絕對盲從順服" },
      { "key": "C", "text": "高度一致的宗教信仰" },
      { "key": "D", "text": "相同規格的體型與服裝" }
    ],
    "correctAnswer": "A",
    "explanation": "杜威指出，民主本質是一種共同溝通與合作生活的模式，唯有具備科學反省思維的自由心靈，才能避免民粹操弄，實現真正民主自治。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第8章 p.69",
    "difficulty": "進階"
  },
  {
    "id": "q-dewey-11",
    "chapterId": 10,
    "scholarId": "dewey",
    "topic": "芝加哥實驗學校（Laboratory School）之創辦精神",
    "questionText": "杜威於 1896 年在芝加哥大學創立「實驗學校（Laboratory School）」，該校在課程組織上打破傳統分科教材，轉而以何者作為兒童探究的軸心？",
    "options": [
      { "key": "A", "text": "以兒童的四種原生衝動（溝通、探究、製作、藝術表達）為核心的「作業（Occupations，如烹飪、木工、編織）與生活探究」" },
      { "key": "B", "text": "嚴格的拉丁文與希臘文文法背誦" },
      { "key": "C", "text": "完全軍事化的步操操練" },
      { "key": "D", "text": "全天候的紙筆模擬試卷測驗" }
    ],
    "correctAnswer": "A",
    "explanation": "實驗學校以生活作業（Occupations）為中心，透過手腦並用的木工、種植、烹飪活動自然穿插物理、生物、歷史與數學探究，落實進步主義理想。",
    "examSource": "110年新北市國小教甄試題",
    "handoutRef": "講義第10章 p.81",
    "difficulty": "進階"
  },
  {
    "id": "q-dewey-12",
    "chapterId": 8,
    "scholarId": "dewey",
    "topic": "杜威實用主義對當代探究實作課程之啟發",
    "questionText": "108 課綱在自然與社會領域廣泛納入「探究與實作」必修學分。杜威在百年前的教育哲學中最能為探究實作提供理論源泉的核心論點為：",
    "options": [
      { "key": "A", "text": "真理不是靜止不變的教條，而是在親身行動探究與經驗檢驗的歷程中動態證成的（實用主義實踐真理觀）" },
      { "key": "B", "text": "教科書上的每一句話都絕不容懷疑" },
      { "key": "C", "text": "探究只是用來打發課堂時間" },
      { "key": "D", "text": "實作課程不需要任何科學邏輯" }
    ],
    "correctAnswer": "A",
    "explanation": "杜威實用主義（Pragmatism / 工具主義）認為概念與假說是引導行動的工具，知識是在動態探究與問題解決中不斷被檢驗與更新的成果。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第8章 p.69",
    "difficulty": "中等"
  },

  # ----------------------------------------------------
  # 22. 蘇克曼 (suchman) - 9 new
  # ----------------------------------------------------
  {
    "id": "q-suchman-4",
    "chapterId": 8,
    "scholarId": "suchman",
    "topic": "探究訓練模式（Inquiry Training Model）發起人",
    "questionText": "李察·蘇克曼（Richard Suchman）為培養學生如同科學家般的獨立探究思考能力，創立了著名的：",
    "options": [
      { "key": "A", "text": "探究訓練模式（Inquiry Training Model）" },
      { "key": "B", "text": "直接教學法" },
      { "key": "C", "text": "暗示感應教學法" },
      { "key": "D", "text": "精熟默寫模式" }
    ],
    "correctAnswer": "A",
    "explanation": "Suchman 探究訓練模式透過展示令人困惑的衝突現象，引導學生透過主動提問與假說考驗親自解開謎底，訓練科學探究知能。",
    "examSource": "112年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第8章 p.70",
    "difficulty": "基礎"
  },
  {
    "id": "q-suchman-5",
    "chapterId": 8,
    "scholarId": "suchman",
    "topic": "驚奇衝突事件（Discrepant Event）之誘發功能",
    "questionText": "在蘇克曼探究訓練的一開始，教師會呈現一個「驚奇/矛盾事件（Discrepant Event，例如將點燃紙條放入玻璃牛奶瓶後，剝殼水煮蛋竟被吸入窄瓶口中）」。呈現此事件的核心目的為何？",
    "options": [
      { "key": "A", "text": "打破既有預期認知，引發強烈的認知失衡、好奇心與探究內在動機" },
      { "key": "B", "text": "炫耀教師的個人魔術雜耍技巧" },
      { "key": "C", "text": "恐嚇學生如果不用功就會被吸入瓶中" },
      { "key": "D", "text": "作為課堂結束前的娛樂消遣" }
    ],
    "correctAnswer": "A",
    "explanation": "Discrepant Event 故意呈現與學生直覺經驗衝突的反常現象，強力誘發認知的困惑（Cognitive dissonance），成為啟動探究提問的引信。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第8章 p.70",
    "difficulty": "基礎"
  },
  {
    "id": "q-suchman-6",
    "chapterId": 8,
    "scholarId": "suchman",
    "topic": "蘇克曼提問規則：「是或否（Yes/No）」提問機制",
    "questionText": "在蘇克曼的探究訓練模式中，有一項非常嚴格且獨特的互動規則：學生只能向教師提出何種形式的問題？",
    "options": [
      { "key": "A", "text": "只能提出能由教師回答「是（Yes）」或「否（No）」的封閉性假設驗證問題" },
      { "key": "B", "text": "直接問「老師，請問為什麼會這樣？」要求老師給出答案" },
      { "key": "C", "text": "學生只能用眼神示意不准開口說話" },
      { "key": "D", "text": "必須用英文寫出長篇論文提問" }
    ],
    "correctAnswer": "A",
    "explanation": "Suchman 規定教師只能回答「是」或「否」（或非必要資訊）。若學生問「為什麼」，教師拒絕回答，藉此逼迫學生必須自己構思假設（如問「紙條燃燒耗盡了氧氣嗎？」）親自驗證。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第8章 p.70",
    "difficulty": "中等"
  },
  {
    "id": "q-suchman-7",
    "chapterId": 8,
    "scholarId": "suchman",
    "topic": "探究訓練模式之五大教學實施步驟順序",
    "questionText": "蘇克曼探究訓練模式的五個教學階段依序為何？",
    "options": [
      { "key": "A", "text": "遭遇問題（呈現衝突事件）→ 蒐集資料驗證屬性 → 蒐集資料實驗操弄 → 形成理論解釋 → 分析探究歷程（後設省思）" },
      { "key": "B", "text": "形成解釋 → 遭遇問題 → 蒐集資料 → 分析歷程 → 實驗操弄" },
      { "key": "C", "text": "分析歷程 → 形成解釋 → 遭遇問題 → 實驗操弄 → 蒐集資料" },
      { "key": "D", "text": "實驗操弄 → 遭遇問題 → 形成解釋 → 蒐集資料 → 分析歷程" }
    ],
    "correctAnswer": "A",
    "explanation": "Suchman 五步驟：1.遭遇疑難（衝突事件）；2.蒐集資料-確認客體性質；3.蒐集資料-實驗隔離變因；4.組織形成因果理論；5.分析檢討探究策略歷程。",
    "examSource": "109年新北市國小教甄試題",
    "handoutRef": "講義第8章 p.70",
    "difficulty": "進階"
  },
  {
    "id": "q-suchman-8",
    "chapterId": 8,
    "scholarId": "suchman",
    "topic": "最後階段「分析探究歷程」之後設認知反思功能",
    "questionText": "在蘇克曼探究訓練的第五階段「分析探究歷程（Analyze the inquiry process）」，全班師生共同檢討剛才探究問答的模式與效率。此階段最主要的認知目標為何？",
    "options": [
      { "key": "A", "text": "培養學生對自身提問與探究策略的「後設認知反思（Metacognitive reflection）」，學會如何問出更具穿透力的科學問題" },
      { "key": "B", "text": "處罰問錯問題的同學" },
      { "key": "C", "text": "將實驗儀器清洗乾淨" },
      { "key": "D", "text": "競賽誰抄筆記字數最多" }
    ],
    "correctAnswer": "A",
    "explanation": "第五階段引導學生跳出單一問題內容，檢討「我們剛才的提問路徑是否系統化？有無遺漏關鍵變因？」，使探究技能本身成為可遷移的心智知能。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第8章 p.70",
    "difficulty": "中等"
  },
  {
    "id": "q-suchman-9",
    "chapterId": 8,
    "scholarId": "suchman",
    "topic": "降低對權威依賴與主動建構科學假說",
    "questionText": "蘇克曼指出，傳統講述教育讓學童養成「被動等待權威教師公佈標準答案」的心智惰性。探究訓練模式最能破除此心智惰性的關鍵設計為：",
    "options": [
      { "key": "A", "text": "教師徹底保持價值中立與提示守門人角色，迫使學生必須親自提出假設、承擔求證責任" },
      { "key": "B", "text": "取消所有評量考試" },
      { "key": "C", "text": "教師戴耳塞不聽學生講話" },
      { "key": "D", "text": "把學生隨機送去野外" }
    ],
    "correctAnswer": "A",
    "explanation": "透過限制教師角色為 Yes/No 反饋者，權威答案被抽離，學生必須轉變為主動思考的科學家，建立智識自主性（Intellectual autonomy）。",
    "examSource": "112年高雄市教育專業科目試題",
    "handoutRef": "講義第8章 p.70",
    "difficulty": "中等"
  },
  {
    "id": "q-suchman-10",
    "chapterId": 8,
    "scholarId": "suchman",
    "topic": "「驗證屬性」與「實驗操弄」之提問差別",
    "questionText": "在探究訓練中，學生提問：「這個被吸入瓶中的物體是煮熟的蛋白嗎？」（屬於甲階段）；隨後問：「如果我們把瓶子泡在冰水裡，蛋還會被吸得更快嗎？」（屬於乙階段）。甲與乙依序為：",
    "options": [
      { "key": "A", "text": "甲：驗證客體性質/屬性（Verification）；乙：實驗操弄條件/因果（Experimentation）" },
      { "key": "B", "text": "甲：實驗操弄；乙：驗證性質" },
      { "key": "C", "text": "甲：總結理論；乙：衝突呈現" },
      { "key": "D", "text": "甲：後設反思；乙：消弱反應" }
    ],
    "correctAnswer": "A",
    "explanation": "第二步先驗證事物本身的物理化學屬性（客體確認）；第三步進一步探討改變特定條件（如溫度、氣壓）會發生何種結果（實驗變因操弄）。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第8章 p.70",
    "difficulty": "進階"
  },
  {
    "id": "q-suchman-11",
    "chapterId": 8,
    "scholarId": "suchman",
    "topic": "探究訓練模式在國小自然科學教學之應用",
    "questionText": "自然科陳老師將一根金屬棒兩端固定加熱，中間浮貼的火柴棒依序脫落，但若將金屬棒改為玻璃棒則火柴棒完全不掉。學生開始提問「是因為玻璃不會導熱嗎？」。陳老師採用的教學法最符合：",
    "options": [
      { "key": "A", "text": "蘇克曼的探究訓練模式（Inquiry Training Model）" },
      { "key": "B", "text": "桑代克的迷籠試誤法" },
      { "key": "C", "text": "巴夫洛夫的古典刺激反射" },
      { "key": "D", "text": "凱勒的個人化自學制" }
    ],
    "correctAnswer": "A",
    "explanation": "藉由熱傳導材料差異引發認知衝突，引導學生透過封閉驗證提問探索導熱係數因果關係，是探究訓練模式在自然科的標準應用。",
    "examSource": "110年新北市國小教甄試題",
    "handoutRef": "講義第8章 p.70",
    "difficulty": "基礎"
  },
  {
    "id": "q-suchman-12",
    "chapterId": 8,
    "scholarId": "suchman",
    "topic": "探究訓練模式之限制與教師鷹架支持",
    "questionText": "教師實施蘇克曼探究訓練模式時，如果學生起點能力較弱、連續提出數個無效問題而陷入挫折卡關時，教師最適宜的引導方式為何？",
    "options": [
      { "key": "A", "text": "適時重整已驗證的事實摘要，或提醒學生轉向檢驗關鍵變因（如「你們已經知道物體本身性質，那外在環境的氣體呢？」）搭建適度引導鷹架" },
      { "key": "B", "text": "大聲斥責全班笨拙並公布答案" },
      { "key": "C", "text": "宣布提早下課" },
      { "key": "D", "text": "罰全班起立抄課文" }
    ],
    "correctAnswer": "A",
    "explanation": "當探究陷入僵局時，教師不直接給解答，而是透過摘要整理或方向性提問搭建思考鷹架，引導學生重新校準探究焦點。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第8章 p.70",
    "difficulty": "中等"
  },

  # ----------------------------------------------------
  # 23. 恩尼斯 (ennis) - 9 new
  # ----------------------------------------------------
  {
    "id": "q-ennis-4",
    "chapterId": 8,
    "scholarId": "ennis",
    "topic": "恩尼斯批判性思考（Critical Thinking）經典定義",
    "questionText": "批判性思考領域權威學者勞伯·恩尼斯（Robert H. Ennis）將「批判性思考（Critical Thinking）」界定為：",
    "options": [
      { "key": "A", "text": "「一種合理的（Reasonable）且反省性的（Reflective）思維，其目的在於決定何者該相信（Believe）或何者該去做（Do）」" },
      { "key": "B", "text": "專門在別人的言論中雞蛋裡挑骨頭並大聲辯論" },
      { "key": "C", "text": "能夠在三十秒內背誦一整面教科書" },
      { "key": "D", "text": "毫無根據地反對所有權威與法律" }
    ],
    "correctAnswer": "A",
    "explanation": "Ennis 經典定義：Critical thinking is reasonable, reflective thinking focused on deciding what to believe or do. 包含合理性（合乎邏輯證據）與反省性（深思熟慮）。",
    "examSource": "112年教育部教師資格考試（教育理念與實踐）",
    "handoutRef": "講義第8章 p.71",
    "difficulty": "基礎"
  },
  {
    "id": "q-ennis-5",
    "chapterId": 8,
    "scholarId": "ennis",
    "topic": "FRISCO 批判思考分析架構各字母代表意涵",
    "questionText": "恩尼斯提出了著名的「FRISCO 批判性思考分析架構」，其中六個字母 F-R-I-S-C-O 分別代表的分析向度為何？",
    "options": [
      { "key": "A", "text": "焦點（Focus）、理由（Reasons）、推論（Inference）、情境（Situation）、澄清/清晰（Clarity）、全觀概覽（Overview）" },
      { "key": "B", "text": "事實、反應、直覺、速度、冷靜、觀察" },
      { "key": "C", "text": "朋友、金錢、利益、安全、班級、秩序" },
      { "key": "D", "text": "自由、權利、獨立、社會、公民、責任" }
    ],
    "correctAnswer": "A",
    "explanation": "FRISCO 模型口訣：Focus（掌握核心焦點）、Reasons（檢驗支撐理由）、Inference（檢查邏輯推論是否合理）、Situation（考量整體脈絡情境）、Clarity（澄清概念語言歧義）、Overview（綜觀全貌檢核）。",
    "examSource": "111年臺北市中等學校教甄教育專業科目",
    "handoutRef": "講義第8章 p.71",
    "difficulty": "中等"
  },
  {
    "id": "q-ennis-6",
    "chapterId": 8,
    "scholarId": "ennis",
    "topic": "FRISCO 中之「澄清（Clarity）」與避免歧義",
    "questionText": "在 FRISCO 架構中，「澄清（Clarity）」維度特別強調在進行理性思辨與辯論之前，最關鍵的工作是：",
    "options": [
      { "key": "A", "text": "精確定義核心語詞與概念，釐清歧義（Ambiguity）與含糊不清的語意，避免雞同鴨講" },
      { "key": "B", "text": "提高說話音量讓對方閉嘴" },
      { "key": "C", "text": "要求對方立下字據發誓" },
      { "key": "D", "text": "將黑板擦得乾乾淨淨" }
    ],
    "correctAnswer": "A",
    "explanation": "Clarity 要求確保討論使用的關鍵術語（如「公平」、「自由」）定義明確一致，防止因語意模糊或概念偷換導致無效推論。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第8章 p.71",
    "difficulty": "基礎"
  },
  {
    "id": "q-ennis-7",
    "chapterId": 8,
    "scholarId": "ennis",
    "topic": "批判思考傾向（Dispositions）vs 批判思考能力（Abilities）",
    "questionText": "恩尼斯指出，一個人就算學會了所有邏輯規則（具備批判思考能力），如果在現實生活中封閉偏執、不願尋求真相，依然不是批判思考者。他因此特別強調必須具備何種「心向特質」？",
    "options": [
      { "key": "A", "text": "批判思考傾向（Critical Thinking Dispositions，如追求真理、心胸開放、尊重證據、考慮他人視角）" },
      { "key": "B", "text": "爭強好勝的侵略傾向" },
      { "key": "C", "text": "討好師長的順從傾向" },
      { "key": "D", "text": "孤僻自傲的優越傾向" }
    ],
    "correctAnswer": "A",
    "explanation": "批判思考包含能力（Abilities/Skills，能做）與傾向（Dispositions，願意去做）。心胸開放（Open-mindedness）、謹慎求證的心向特質是批判思考的靈魂。",
    "examSource": "109年高級中等以下學校教師資格考試",
    "handoutRef": "講義第8章 p.71",
    "difficulty": "中等"
  },
  {
    "id": "q-ennis-8",
    "chapterId": 8,
    "scholarId": "ennis",
    "topic": "評估資訊來源可信度（Credibility of Sources）之規準",
    "questionText": "在當代網路媒體識讀教學中，依據恩尼斯的批判思考規準，學生在評估某個訊息來源是否具備「可信度（Credibility）」時，應檢視下列哪項指標？",
    "options": [
      { "key": "A", "text": "資訊提供者是否具備專業聲譽、是否具利益衝突（利益偏私）、是否有客觀實證支持" },
      { "key": "B", "text": "影片點閱率是否超過一百萬" },
      { "key": "C", "text": "發文者的照片是否長得好看" },
      { "key": "D", "text": "文字標題是否足夠驚悚聳動" }
    ],
    "correctAnswer": "A",
    "explanation": "Ennis 來源可信度規準包括：專業資格、利益衝突檢驗、有無確認證據、信譽記錄與中立性，是抵禦假訊息的核心工具。",
    "examSource": "108年新北市公立國小教甄試題",
    "handoutRef": "講義第8章 p.71",
    "difficulty": "基礎"
  },
  {
    "id": "q-ennis-9",
    "chapterId": 8,
    "scholarId": "ennis",
    "topic": "辨認隱含假設（Assumptions）之高階思維",
    "questionText": "某廣告宣稱：「所有頂尖資優生都在使用這套平板電腦，所以買了這套平板電腦你的孩子就能成為資優生。」批判思考者能敏銳指出該論點隱含了何種邏輯謬誤與未證假設？",
    "options": [
      { "key": "A", "text": "倒果為因，且將「相關關係」錯誤推論為「必然的因果關係」" },
      { "key": "B", "text": "平板電腦螢幕太小" },
      { "key": "C", "text": "資優生智商測驗不準" },
      { "key": "D", "text": "沒有任何邏輯錯誤，非常合理" }
    ],
    "correctAnswer": "A",
    "explanation": "資優生用平板不代表平板創造了資優，錯把相關當因果，並忽略家庭環境等中介變因。識別隱含假設是 Ennis 批判思維的重要技能。",
    "examSource": "112年高雄市國民小學教師甄選教育專業試題",
    "handoutRef": "講義第8章 p.71",
    "difficulty": "中等"
  },
  {
    "id": "q-ennis-10",
    "chapterId": 8,
    "scholarId": "ennis",
    "topic": "批判思考在素養導向評量之命題設計",
    "questionText": "素養導向評量為了測驗學生的批判思考能力，在試卷命題設計上最適宜採取下列何種題型呈現？",
    "options": [
      { "key": "A", "text": "提供立場相互對立的兩份社論或實驗數據文本，要求學生評估雙方論點的證據強度並指出推論漏洞" },
      { "key": "B", "text": "考文言文注釋的單一標準答案默寫" },
      { "key": "C", "text": "考歷史年代的單純是非勾選" },
      { "key": "D", "text": "要求學生背出全班同學的名字" }
    ],
    "correctAnswer": "A",
    "explanation": "真實情境脈絡下的對立觀點文本分析與證據評價，最能真實檢測出學生的分析、評鑑與批判思考能力。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第8章 p.71",
    "difficulty": "基礎"
  },
  {
    "id": "q-ennis-11",
    "chapterId": 8,
    "scholarId": "ennis",
    "topic": "FRISCO 架構之「全觀概覽（Overview）」",
    "questionText": "在恩尼斯 FRISCO 架構中，最後一步「O（Overview，概覽）」要求思考者在做出最終決策之前，必須採取何種後設檢核行動？",
    "options": [
      { "key": "A", "text": "退後一步檢視全局，確認焦點、理由、推論、情境與語意澄清是否連貫完整，有無遺漏重大反面論點" },
      { "key": "B", "text": "立即在社群媒體發文炫耀自己想通了" },
      { "key": "C", "text": "把考卷直接交上去不管對錯" },
      { "key": "D", "text": "把所有理由刪除只保留結論" }
    ],
    "correctAnswer": "A",
    "explanation": "Overview 是全方位的後設檢核：綜觀全局、審視有無盲點或被忽視的強烈反例，確保思維結論的穩健客觀。",
    "examSource": "110年臺北市中等學校教甄試題",
    "handoutRef": "講義第8章 p.71",
    "difficulty": "中等"
  },
  {
    "id": "q-ennis-12",
    "chapterId": 8,
    "scholarId": "ennis",
    "topic": "批判性思考與創造性思考之相輔相成",
    "questionText": "教育哲學探討思維培育時，常對比批判性思考與創造性思考。恩尼斯指出兩者在優質問題解決歷程中並非對立，而是展現何種關係？",
    "options": [
      { "key": "A", "text": "創造性思考負責發散產生大量新穎構想（產生假說）；批判性思考負責聚斂嚴密評鑑構想的可行性與有效性（檢驗假說），兩者相輔相成" },
      { "key": "B", "text": "有創造力的人必然毫無批判思考" },
      { "key": "C", "text": "批判思考會徹底抹殺所有創造力" },
      { "key": "D", "text": "兩者完全是同一件事沒有區別" }
    ],
    "correctAnswer": "A",
    "explanation": "創造性思維產生多元可能性（發散），批判性思維檢驗合理性與邏輯有效性（聚斂），兩者結合方能達成卓越問題解決。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第8章 p.71",
    "difficulty": "中等"
  },

  # ----------------------------------------------------
  # 24. 瑞斯/雷斯 (raths) - 9 new
  # ----------------------------------------------------
  {
    "id": "q-raths-4",
    "chapterId": 9,
    "scholarId": "raths",
    "topic": "價值澄清法（Values Clarification）三大歷程階段",
    "questionText": "路易斯·瑞斯（L. E. Raths）等人在 1966 年開創「價值澄清法（Values Clarification）」，強調個人價值觀的形成必須經過哪三大基本歷程階段？",
    "options": [
      { "key": "A", "text": "選擇（Choosing）→ 珍視（Prizing）→ 行動（Acting）" },
      { "key": "B", "text": "處罰 → 認錯 → 改過" },
      { "key": "C", "text": "背誦 → 默寫 → 考試" },
      { "key": "D", "text": "示範 → 模仿 → 增強" }
    ],
    "correctAnswer": "A",
    "explanation": "價值澄清三大歷程口訣「選、珍、行」：選擇（自由審慎選擇）、珍視（感到自豪並公開宣稱）、行動（身體力行並重複成為習慣）。",
    "examSource": "112年教育部教師資格考試（教育理念與實踐）",
    "handoutRef": "講義第9章 p.74",
    "difficulty": "基礎"
  },
  {
    "id": "q-raths-5",
    "chapterId": 9,
    "scholarId": "raths",
    "topic": "價值澄清法之七個具體步驟",
    "questionText": "在瑞斯的價值澄清理論中，三大歷程進一步細分為七個具體步驟。下列哪一項不屬於這七個步驟之一？",
    "options": [
      { "key": "A", "text": "被迫接受權威長輩的硬性規定" },
      { "key": "B", "text": "完全自由地選擇" },
      { "key": "C", "text": "從各種可行的途徑中選擇，並深思熟慮每種途徑的後果" },
      { "key": "D", "text": "珍愛自豪該選擇、公開向他人承認，並反覆在生活中踐行" }
    ],
    "correctAnswer": "A",
    "explanation": "價值澄清七步驟：1.自由選擇；2.從不同途徑中選；3.深思後果後選；4.珍視自豪；5.公開聲明；6.採取行動；7.反覆實行成習慣。強制灌輸違反其核心宗旨。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第9章 p.74",
    "difficulty": "中等"
  },
  {
    "id": "q-raths-6",
    "chapterId": 9,
    "scholarId": "raths",
    "topic": "價值澄清與反灌輸（Anti-Indoctrination）哲學立場",
    "questionText": "瑞斯倡導價值澄清法，主要是強烈反對傳統品德教育普遍採取的何種教學方式？",
    "options": [
      { "key": "A", "text": "成人以權威高壓「硬性灌輸（Indoctrination）」固定信條，強迫學生背誦道德教條" },
      { "key": "B", "text": "民主討論法" },
      { "key": "C", "text": "角色扮演法" },
      { "key": "D", "text": "生活實作體驗" }
    ],
    "correctAnswer": "A",
    "explanation": "瑞斯認為在多元價值社會中，強行灌輸只會製造偽善；唯有引導學生親自檢視、反思並澄清內心真正珍視的價值，才能形成自主而堅定的道德信念。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第9章 p.74",
    "difficulty": "基礎"
  },
  {
    "id": "q-raths-7",
    "chapterId": 9,
    "scholarId": "raths",
    "topic": "澄清應答技巧（Clarifying Responses）之問話原則",
    "questionText": "在實施價值澄清時，教師常運用「澄清應答法（Clarifying Responses）」。當學生表達某種生活主張時，下列哪一種教師的提問方式最符合價值澄清技巧？",
    "options": [
      { "key": "A", "text": "「這項決定是你自己深思熟慮後自由選擇的嗎？你是否願意在全班面前為這項選擇辯護？」" },
      { "key": "B", "text": "「你怎麼會想出這麼愚蠢的點子，立刻給我改掉！」" },
      { "key": "C", "text": "「你的想法跟我完全不同，你被扣十分了。」" },
      { "key": "D", "text": "「不管你做什麼，老師都無條件支持你犯罪。」" }
    ],
    "correctAnswer": "A",
    "explanation": "澄清應答不帶批判責備，而是溫和提問引導學生省思：這是否自由選擇？是否考慮後果？是否珍視並願意踐行？",
    "examSource": "109年新北市國小教甄試題",
    "handoutRef": "講義第9章 p.74",
    "difficulty": "基礎"
  },
  {
    "id": "q-raths-8",
    "chapterId": 9,
    "scholarId": "raths",
    "topic": "價值連續線（Values Continuum）活動設計",
    "questionText": "輔導活動課中，教師在黑板上畫一條線，一端寫「完全贊成婚前同居」，另一端寫「完全反對婚前同居」，讓全班同學依個人真實想法站到線上不同位置，並發表看法。這種教學策略稱為：",
    "options": [
      { "key": "A", "text": "價值連續線（Values Continuum）" },
      { "key": "B", "text": "道德兩難故事" },
      { "key": "C", "text": "角色扮演九步法" },
      { "key": "D", "text": "制約消弱訓練" }
    ],
    "correctAnswer": "A",
    "explanation": "價值連續線是價值澄清法的經典活動，打破非黑即白的二元對立，呈現多元光譜，引導學生公開表達立場並深思背後理由。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第9章 p.75",
    "difficulty": "中等"
  },
  {
    "id": "q-raths-9",
    "chapterId": 9,
    "scholarId": "raths",
    "topic": "價值表決（Values Voting）之實施目的",
    "questionText": "教師快速唸出一系列生活爭議議題（如「你贊成放寬高中生校服規定嗎？」），請學生以舉大拇指朝上（贊成）、朝下（反對）或雙手抱胸（棄權）進行表決。這種「價值表決」的核心功能為：",
    "options": [
      { "key": "A", "text": "在安全無威脅的氛圍中迅速讓學生對廣泛價值議題表態，促進對自身價值傾向的初步覺察" },
      { "key": "B", "text": "清點人數以便處罰少數派" },
      { "key": "C", "text": "決定當天的午餐菜單" },
      { "key": "D", "text": "挑選班長候選人" }
    ],
    "correctAnswer": "A",
    "explanation": "價值表決能在短時間內激發全員參與，讓學生覺察自己與他人的多元立場，啟動後續深層的價值澄清歷程。",
    "examSource": "112年桃園市國小教甄試題",
    "handoutRef": "講義第9章 p.75",
    "difficulty": "基礎"
  },
  {
    "id": "q-raths-10",
    "chapterId": 9,
    "scholarId": "raths",
    "topic": "珍視階段（Prizing）之「公開確認（Affirming publicly）」",
    "questionText": "在價值澄清歷程的「珍視（Prizing）」階段中，學生不僅內心為自己的決定感到高興自豪，還必須具備何種表現才算真正達到此階段水準？",
    "options": [
      { "key": "A", "text": "公開向他人聲明確認（Affirming publicly / 在公眾面前不畏他人異樣眼光坦誠擁護該價值）" },
      { "key": "B", "text": "把秘密鎖在日記本裡永遠不讓人知道" },
      { "key": "C", "text": "隨波逐流偽裝迎合大家的答案" },
      { "key": "D", "text": "用金錢賄賂其他同學" }
    ],
    "correctAnswer": "A",
    "explanation": "珍視包含兩步驟：4.對選擇感到珍愛自豪；5.公開向人承認。敢於在群體中公開表明立場，是信念堅定的重要標竿。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第9章 p.74",
    "difficulty": "中等"
  },
  {
    "id": "q-raths-11",
    "chapterId": 9,
    "scholarId": "raths",
    "topic": "行動階段（Acting）之反覆實行成習慣",
    "questionText": "某學生在環保主題討論後，宣稱自己支持減塑；接著他自備環保餐具與隨行杯長達三年，即使外宿旅行也從不例外。依據瑞斯理論，該學生的環保價值已達到何種境界？",
    "options": [
      { "key": "A", "text": "行動實踐且反覆成為固定生活習慣（Acting repeatedly into a pattern of life）" },
      { "key": "B", "text": "空頭口號階段" },
      { "key": "C", "text": "被動同化階段" },
      { "key": "D", "text": "短期記憶反應" }
    ],
    "correctAnswer": "A",
    "explanation": "價值澄清的終極檢驗在於行動（第6步付諸實踐；第7步反覆踐行化為人生習慣），真正的價值觀必然具體彰顯於日常生活型態中。",
    "examSource": "110年高雄市國小教甄試題",
    "handoutRef": "講義第9章 p.74",
    "difficulty": "基礎"
  },
  {
    "id": "q-raths-12",
    "chapterId": 9,
    "scholarId": "raths",
    "topic": "價值澄清法受到道德相對主義質疑之反思",
    "questionText": "在教育史上，價值澄清法曾受到保守派學者的批評，質疑其「過度強調尊重個人選擇，可能陷入道德相對主義（Moral Relativism）」。為了補足此限制，現代品格教育倡導將價值澄清與何者結合？",
    "options": [
      { "key": "A", "text": "普世人權倫理原則（普遍道德核心美德）與理性思辨標準相結合" },
      { "key": "B", "text": "回到古代封建體罰制度" },
      { "key": "C", "text": "完全取消所有道德教育課程" },
      { "key": "D", "text": "全面實施軍事化管理" }
    ],
    "correctAnswer": "A",
    "explanation": "現代教育保留價值澄清「重自主探究、反對僵化灌輸」的優點，同時兼顧柯爾保「普遍倫理公正原則」，避免滑入虛無主義。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第9章 p.74",
    "difficulty": "進階"
  },

  # ----------------------------------------------------
  # 25. 柯爾保 (kohlberg) - 9 new
  # ----------------------------------------------------
  {
    "id": "q-kohlberg-4",
    "chapterId": 9,
    "scholarId": "kohlberg",
    "topic": "海因茨偷藥（Heinz Dilemma）之道德判斷核心依據",
    "questionText": "柯爾保（L. Kohlberg）在「海因茨偷藥（Heinz Dilemma）」道德兩難研究中，用以判定受試者道德發展階段的核心依據為何？",
    "options": [
      { "key": "A", "text": "受試者做出選擇背後的「道德推理理由（Reasoning）」，而非最後回答「該偷或不該偷」的答案結論" },
      { "key": "B", "text": "受試者是否有犯罪前科紀錄" },
      { "key": "C", "text": "受試者的回答速度快慢" },
      { "key": "D", "text": "受試者的英文詞彙量" }
    ],
    "correctAnswer": "A",
    "explanation": "柯爾保評定階段完全取決於「為什麼（Reasoning）」（例如贊成偷藥若是因為愛妻子是階段三，若因為生命高於財產則是階段六；反對偷藥若因怕坐牢是階段一，若因維持法律是階段四）。",
    "examSource": "112年教育部教師資格考試（學習者發展）",
    "handoutRef": "講義第9章 p.75",
    "difficulty": "基礎"
  },
  {
    "id": "q-kohlberg-5",
    "chapterId": 9,
    "scholarId": "kohlberg",
    "topic": "第一階段「避罰服從取向（Punishment-Obedience）」情境判讀",
    "questionText": "小班幼童小強告訴老師：「我不敢在走廊奔跑，因為如果被主任抓到會被叫去罰站挨罵。」小強的道德推理屬於柯爾保道德認知發展的哪一階段？",
    "options": [
      { "key": "A", "text": "階段一：避罰服從取向（Punishment and Obedience Orientation）" },
      { "key": "B", "text": "階段二：相對功利取向" },
      { "key": "C", "text": "階段三：好男孩巧女孩取向" },
      { "key": "D", "text": "階段四：維持社會秩序取向" }
    ],
    "correctAnswer": "A",
    "explanation": "前習俗道德期第一階段（避罰服從）：只看外在物理後果與權威體罰，只要會被處罰就是錯的，沒被抓到就沒關係，完全服從權威以避免懲罰。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第9章 p.76",
    "difficulty": "基礎"
  },
  {
    "id": "q-kohlberg-6",
    "chapterId": 9,
    "scholarId": "kohlberg",
    "topic": "第二階段「相對功利取向（Instrumental Hedonism / 交換互惠）」",
    "questionText": "國小三年級阿明對同學說：「你今天借我彩色筆，明天我打掃時就幫你倒垃圾；如果你不借我，以後你有困難我也不理你。」阿明的道德推理屬於柯爾保的：",
    "options": [
      { "key": "A", "text": "階段二：相對功利取向（Instrumental Relativist Orientation）" },
      { "key": "B", "text": "階段一：避罰服從取向" },
      { "key": "C", "text": "階段四：法規秩序取向" },
      { "key": "D", "text": "階段六：普遍倫理取向" }
    ],
    "correctAnswer": "A",
    "explanation": "階段二（相對功利）：以自我利益為中心，互惠關係被視為「你抓我的背，我抓你的背」的現實利益交換交易。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第9章 p.76",
    "difficulty": "基礎"
  },
  {
    "id": "q-kohlberg-7",
    "chapterId": 9,
    "scholarId": "kohlberg",
    "topic": "第三階段「尋求認可取向（好男孩巧女孩 Good Boy/Nice Girl）」",
    "questionText": "小英在班上總是努力爭取榮譽並遵守班規，私下坦言：「我最希望大家覺得我是個乖巧聽話的好學生，得到老師與同學的稱讚與喜愛。」小英處於柯爾保的何種階段？",
    "options": [
      { "key": "A", "text": "階段三：尋求認可取向（好男孩巧女孩取向）" },
      { "key": "B", "text": "階段二：相對功利取向" },
      { "key": "C", "text": "階段五：社會契約取向" },
      { "key": "D", "text": "階段一：避罰服從取向" }
    ],
    "correctAnswer": "A",
    "explanation": "習俗道德期第三階段：追求同儕與長輩的讚許與認同，重視人際和諧與維持「好孩子」形象，順從多數人期待。",
    "examSource": "109年新北市國小教甄試題",
    "handoutRef": "講義第9章 p.76",
    "difficulty": "基礎"
  },
  {
    "id": "q-kohlberg-8",
    "chapterId": 9,
    "scholarId": "kohlberg",
    "topic": "第四階段「遵守法規與秩序取向（Law and Order Orientation）」",
    "questionText": "在討論「海因茨偷藥」時，高中生大偉主張：「海因茨絕對不應該偷藥！因為法律明文規定偷竊是違法的。如果每個人都因為親人重病就去偷藥，整個社會法律秩序將會徹底崩潰。」大偉處於：",
    "options": [
      { "key": "A", "text": "階段四：遵守法規與維持社會秩序取向（Law and Order Orientation）" },
      { "key": "B", "text": "階段一：避罰服從取向" },
      { "key": "C", "text": "階段三：好男孩取向" },
      { "key": "D", "text": "階段六：普遍倫理原則取向" }
    ],
    "correctAnswer": "A",
    "explanation": "階段四（法規秩序）：強調維持社會既定體制與秩序，認為法律神聖不可侵犯，每個人皆有嚴格履行公民職責的義務。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第9章 p.76",
    "difficulty": "中等"
  },
  {
    "id": "q-kohlberg-9",
    "chapterId": 9,
    "scholarId": "kohlberg",
    "topic": "第五階段「社會契約合法取向（Social Contract Orientation）」",
    "questionText": "大學生哲偉認為：「法律是全體公民為了保障大眾福祉與基本人權而簽訂的民主契約。當法律條文本身出現不合時宜或壓迫人權時，社會應當循民主程序修法改善。」這屬於：",
    "options": [
      { "key": "A", "text": "階段五：社會契約合法取向（Social Contract Orientation）" },
      { "key": "B", "text": "階段四：法規秩序取向" },
      { "key": "C", "text": "階段二：相對功利取向" },
      { "key": "D", "text": "階段一：避罰服從取向" }
    ],
    "correctAnswer": "A",
    "explanation": "後習俗道德期第五階段（社會契約）：體認法律是可透過民主程序修改的公約，兼顧多數福祉與人權彈性，不再視法律為僵化不變的絕對命令。",
    "examSource": "112年高雄市國民小學教師甄選教育專業試題",
    "handoutRef": "講義第9章 p.76",
    "difficulty": "中等"
  },
  {
    "id": "q-kohlberg-10",
    "chapterId": 9,
    "scholarId": "kohlberg",
    "topic": "第六階段「普遍倫理原則取向（Universal Ethical Principle）」",
    "questionText": "馬丁路德·金恩、甘地等民權領袖在面對種族隔離惡法時，甘願忍受入獄甚至犧牲生命，訴諸良心至高無上的普遍人類尊嚴、平等與正義原則。這屬於柯爾保的：",
    "options": [
      { "key": "A", "text": "階段六：普遍倫理原則取向（Universal Ethical Principle Orientation）" },
      { "key": "B", "text": "階段三：尋求認可取向" },
      { "key": "C", "text": "階段一：避罰服從取向" },
      { "key": "D", "text": "階段二：相對功利取向" }
    ],
    "correctAnswer": "A",
    "explanation": "階段六是最高境界：超越特定法律規範，依循抽象、普遍且全人類一致的良知原則（如生命尊嚴、絕對正義），達到完全自律。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第9章 p.76",
    "difficulty": "進階"
  },
  {
    "id": "q-kohlberg-11",
    "chapterId": 9,
    "scholarId": "kohlberg",
    "topic": "道德兩難討論法之「+1 原則（Plus-One Principle）」",
    "questionText": "柯爾保倡導在課堂實施「道德兩難討論法（Moral Dilemma Discussion）」。在引導學生討論時，教師引發認知衝突的最佳教學鷹架策略為：",
    "options": [
      { "key": "A", "text": "提供高出學生現有道德發展「一個階段（+1 階段）」的論點與理由引導激盪" },
      { "key": "B", "text": "提供高出三個階段的深奧哲學論文強迫學生閱讀" },
      { "key": "C", "text": "只迎合學生現有階段的答案絕不挑戰" },
      { "key": "D", "text": "由教師直接公布標準道德答案" }
    ],
    "correctAnswer": "A",
    "explanation": "「+1 原則」指出：個人最容易被比自己當前發展水準高一個階段（+1）的道德推理理由所吸引並引發認知同化調適，從而躍升至下一階段。",
    "examSource": "110年新北市國小教甄試題",
    "handoutRef": "講義第9章 p.77",
    "difficulty": "中等"
  },
  {
    "id": "q-kohlberg-12",
    "chapterId": 9,
    "scholarId": "kohlberg",
    "topic": "吉利根（Carol Gilligan）對柯爾保男性中心論之批判",
    "questionText": "柯爾保的女門生卡蘿·吉利根（Carol Gilligan）在《不同的聲音（In a Different Voice）》中強烈批判柯爾保的道德階段論，其核心批判論點為何？",
    "options": [
      { "key": "A", "text": "柯爾保純以男性受試者為樣本，建立獨尊正義權利的「正義倫理（Ethics of Justice）」，貶低了女性普遍展現的「關懷與人際連結倫理（Ethics of Care）」" },
      { "key": "B", "text": "柯爾保完全不懂希臘哲學" },
      { "key": "C", "text": "柯爾保的道德情境缺乏圖片" },
      { "key": "D", "text": "柯爾保研究花費太多研究經費" }
    ],
    "correctAnswer": "A",
    "explanation": "Gilligan 提出關懷倫理學（Ethics of Care），指出女性道德發展往往以人際連結、關愛、同理與維護關係為核心，柯爾保將其歸入低層階段三是男性中心偏見。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第9章 p.77",
    "difficulty": "進階"
  }
]
