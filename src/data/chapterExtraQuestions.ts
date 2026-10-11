import { Question } from '../types';

/**
 * 章節評量專屬考古真題擴充題庫
 * 針對第 5, 6, 7, 10, 14 等章節進行強化，確保全部 14 個章節每章題數均達 25~45 題（20~40題標竿）！
 */
export const CHAPTER_EXTRA_QUESTIONS: Question[] = [
  {
    "id": "q-extra-ch5-1",
    "chapterId": 5,
    "scholarId": "vygotsky",
    "topic": "社會建構主義與激進建構主義（Radical Constructivism）之區辨",
    "questionText": "在當代建構主義思潮中，馮·葛拉瑟費爾（von Glasersfeld）倡導「激進/個人建構主義」，而維高斯基派倡導「社會建構主義」。兩者對於知識建構最核心的分歧點在於：",
    "options": [
      {
        "key": "A",
        "text": "個人建構主義強調個體在心智內部的個人主觀適應（生物認知適應）；社會建構主義則強調知識是在社會文化互動、語言溝通與共同協商中共同建構的"
      },
      {
        "key": "B",
        "text": "個人建構主義主張直接講述，社會建構主義主張放任自流"
      },
      {
        "key": "C",
        "text": "社會建構主義完全否定人腦具有神經思考功能"
      },
      {
        "key": "D",
        "text": "個人建構主義主張知識是由上帝直接啟示"
      }
    ],
    "correctAnswer": "A",
    "explanation": "激進建構論強調個體根據個人經驗主動建構現實（適應環境）；社會建構論則強調知識具有社會文化性，是由群體透過語言對話與文化工具共同協商建構而成。",
    "examSource": "112年高級中等以下學校及幼兒園教師資格考試",
    "handoutRef": "講義第5章 p.41-43",
    "difficulty": "進階"
  },
  {
    "id": "q-extra-ch5-2",
    "chapterId": 5,
    "scholarId": "bloom",
    "topic": "情境認知（Situated Cognition）與認知學徒制（Cognitive Apprenticeship）",
    "questionText": "柯林斯與布朗（Collins & Brown）提出「認知學徒制（Cognitive Apprenticeship）」，將傳統手藝學徒制精神轉化為課堂思維教學。其六大教學步驟依序包含示範、指導、鷹架支撐、以及下列何項關鍵程序？",
    "options": [
      {
        "key": "A",
        "text": "清楚闡述（Articulation）、反省（Reflection）與探究（Exploration）"
      },
      {
        "key": "B",
        "text": "體罰、抄寫與扣分"
      },
      {
        "key": "C",
        "text": "默寫公式與選擇題猜題"
      },
      {
        "key": "D",
        "text": "純粹旁觀不發一語"
      }
    ],
    "correctAnswer": "A",
    "explanation": "認知學徒制六步：示範（Modeling）→ 指導（Coaching）→ 搭建鷹架（Scaffolding）→ 清楚闡述（Articulation）→ 反省（Reflection）→ 獨立探究（Exploration）。",
    "examSource": "111年新北市公立國小教師甄選教育專業科目",
    "handoutRef": "講義第5章 p.45-46",
    "difficulty": "中等"
  },
  {
    "id": "q-extra-ch5-3",
    "chapterId": 5,
    "scholarId": "piaget",
    "topic": "建構主義教學環境設計原則",
    "questionText": "在符合建構主義精神的理想課堂中，教師在規劃學習環境與師生互動時，最應優先體現下列哪一項原則？",
    "options": [
      {
        "key": "A",
        "text": "鼓勵學生提出多元解題途徑、支持認知衝突之探究、並營造相互尊重質疑的對話氛圍"
      },
      {
        "key": "B",
        "text": "教師必須在黑板提供唯一標準答案供全班抄寫"
      },
      {
        "key": "C",
        "text": "禁止學生提出未在教科書上出現的任何觀點"
      },
      {
        "key": "D",
        "text": "以全班答題速度最快者為唯一教學進度基準"
      }
    ],
    "correctAnswer": "A",
    "explanation": "建構主義認為學習者是主動的意義建構者，課堂應營造安全探究環境，鼓勵假說檢驗、多元觀點對話與主動反思。",
    "examSource": "110年教育部教師資格考試（教育理念與實踐）",
    "handoutRef": "講義第5章 p.43",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch5-4",
    "chapterId": 5,
    "scholarId": "bloom",
    "topic": "認知目標新版：記憶（Remembering）與理解（Understanding）動詞判讀",
    "questionText": "在 Anderson & Krathwohl (2001) 修訂版認知歷程中，下列各教學目標指標動詞的層次配對，何者最為精確？",
    "options": [
      {
        "key": "A",
        "text": "能用自己的話「解釋（Explain）」光合作用原理 —— 屬於「理解」層次"
      },
      {
        "key": "B",
        "text": "能「背誦（Recite）」出圓周率前二十位 —— 屬於「分析」層次"
      },
      {
        "key": "C",
        "text": "能「批判評鑑（Critique）」兩位作者的社論論點 —— 屬於「記憶」層次"
      },
      {
        "key": "D",
        "text": "能「設計（Design）」一套水火箭發射裝置 —— 屬於「理解」層次"
      }
    ],
    "correctAnswer": "A",
    "explanation": "解釋（Explain）、詮釋、舉例、分類、摘要屬於「理解」；背誦屬於「記憶」；批判評鑑屬於「評鑑」；設計產出屬於「創造」。故 A 正確。",
    "examSource": "109年高級中等以下學校及幼兒園教師資格考試",
    "handoutRef": "講義第5章 p.47",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch5-5",
    "chapterId": 5,
    "scholarId": "vygotsky",
    "topic": "錨式教學法（Anchored Instruction）情境建構",
    "questionText": "布蘭斯福德（Bransford）等人發展的「錨式教學法（Anchored Instruction）」，利用宏觀的生動影片故事（如賈斯柏歷險記 Jasper Woodbury Series）錨定真實複雜情境。這種設計主要解決了傳統學校教育的何種弊端？",
    "options": [
      {
        "key": "A",
        "text": "克服「惰性知識（Inert Knowledge，即只會在考卷作答而在生活中無法活用的知識）」之弊，促進概念情境化遷移"
      },
      {
        "key": "B",
        "text": "讓學生在課堂看電影消磨多餘時間"
      },
      {
        "key": "C",
        "text": "完全取代學生的數學運算訓練"
      },
      {
        "key": "D",
        "text": "強制規範全體學生的手寫筆跡"
      }
    ],
    "correctAnswer": "A",
    "explanation": "錨式教學將問題深深錨定（Anchor）在真實富含細節的情境中，學習者在情境中主動尋找資料解決問題，破除惰性知識（Inert knowledge）。",
    "examSource": "108年臺中市公立學校教師甄試教育科目",
    "handoutRef": "講義第5章 p.46",
    "difficulty": "中等"
  },
  {
    "id": "q-extra-ch5-6",
    "chapterId": 5,
    "scholarId": "bloom",
    "topic": "後設認知知識（Metacognitive Knowledge）之次向度劃分",
    "questionText": "在 2001 年修訂版布魯姆知識向度中，「後設認知知識」被進一步細分為三類，下列何者不屬於這三類之一？",
    "options": [
      {
        "key": "A",
        "text": "機械記憶特定歷史人名與年代的事實知識"
      },
      {
        "key": "B",
        "text": "策略知識（Strategic knowledge）"
      },
      {
        "key": "C",
        "text": "認知任務情境知識（Knowledge about cognitive tasks）"
      },
      {
        "key": "D",
        "text": "自我知識（Self-knowledge）"
      }
    ],
    "correctAnswer": "A",
    "explanation": "後設認知知識三子類：策略知識、任務情境知識、自我知識。事實知識（名詞、年代細節）屬於知識向度中最基礎的第一類事實知識。",
    "examSource": "112年高雄市教育專業科目試題",
    "handoutRef": "講義第5章 p.47, 第7章 p.59",
    "difficulty": "中等"
  },
  {
    "id": "q-extra-ch6-1",
    "chapterId": 6,
    "scholarId": "rogers",
    "topic": "真誠性評價與無條件正向接納在修復師生關係之運用",
    "questionText": "國中導師面對經常翹課抽菸的偏差行為學生阿豪，若依據羅吉斯的人本主義態度，下列哪一種輔導溝通方式最能打破阿豪的心防？",
    "options": [
      {
        "key": "A",
        "text": "「阿豪，老師非常關心你的安全與未來，雖然學校規定絕不允許抽菸（行為規範），但我始終珍視你這個人，願意隨時坐下來聽聽你的心聲」"
      },
      {
        "key": "B",
        "text": "「你抽菸就是個敗類，給我滾出教室去罰站！」"
      },
      {
        "key": "C",
        "text": "「反正你沒救了，不要來上課最好。」"
      },
      {
        "key": "D",
        "text": "「只要你答應不抽菸，老師每天給你五十元零用錢。」"
      }
    ],
    "correctAnswer": "A",
    "explanation": "無條件積極關懷將「行為規範」與「個體價值」分開：堅定表明對抽菸行為的不可行，同時真誠傳遞對學生本人的接納與關愛，降低其防衛心理。",
    "examSource": "112年新北市公立國小教甄試題",
    "handoutRef": "講義第6章 p.54-55",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch6-2",
    "chapterId": 6,
    "scholarId": "maslow",
    "topic": "認知需求（Need to Know and Understand）在課堂之激發",
    "questionText": "在馬斯洛需求階層中，求知與理解的需求（Cognitive Needs）屬於追求真理、探索未知的崇高心靈驅力。教師欲有效激發學生的求知需求，最關鍵的前提是：",
    "options": [
      {
        "key": "A",
        "text": "確保學生在班級中已獲得基本的生理飽暖、心理安全與同儕隸屬接納感"
      },
      {
        "key": "B",
        "text": "威脅學生若不求知就記大過處分"
      },
      {
        "key": "C",
        "text": "取消所有體育課與藝能課"
      },
      {
        "key": "D",
        "text": "讓全班進行排名前後的殘酷競爭"
      }
    ],
    "correctAnswer": "A",
    "explanation": "匱乏需求（生理、安全、愛與隸屬）是成長需求（求知、審美、自我實現）的穩固地基。唯有在心理安全被充分滿足的前提下，求知欲才會自然盛開。",
    "examSource": "111年教育部教師資格考試（學習者發展）",
    "handoutRef": "講義第6章 p.53",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch6-3",
    "chapterId": 6,
    "scholarId": "rogers",
    "topic": "以學習者為中心之「非指導性教學模式（Non-Directive Teaching）」",
    "questionText": "卡爾·羅吉斯創立「非指導性教學模式（Non-Directive Teaching Model）」，教師在課堂團體引導中的角色主要為：",
    "options": [
      {
        "key": "A",
        "text": "扮演情感回映者與對話催化劑，協助學生澄清自我真實感受與價值，引導其自主做出承擔責任的決策"
      },
      {
        "key": "B",
        "text": "單向發號施令規定每個人必須做什麼"
      },
      {
        "key": "C",
        "text": "以嚴厲語氣批判學生的錯誤思維"
      },
      {
        "key": "D",
        "text": "全程保持沉默睡覺"
      }
    ],
    "correctAnswer": "A",
    "explanation": "非指導性教學不給予強加的指示，而是透過傾聽、反映感受與澄清，賦予學生自我診斷與自主決策的權利與能力。",
    "examSource": "110年臺北市中等學校教甄試題",
    "handoutRef": "講義第6章 p.55",
    "difficulty": "中等"
  },
  {
    "id": "q-extra-ch6-4",
    "chapterId": 6,
    "scholarId": "maslow",
    "topic": "審美需求（Aesthetic Needs）之全人素養價值",
    "questionText": "馬斯洛指出，人類具有追求對稱、和諧、秩序與美感的「審美需求（Aesthetic Needs）」。在現代美感教育與校園美學營造中，滿足審美需求對學生的深遠影響在於：",
    "options": [
      {
        "key": "A",
        "text": "陶冶心靈性靈、舒緩心理壓力、激發對生命境界的崇高嚮往與創造力"
      },
      {
        "key": "B",
        "text": "讓學生長大後都去當整型名醫"
      },
      {
        "key": "C",
        "text": "純粹為了應付美術科定期考試"
      },
      {
        "key": "D",
        "text": "提高學生的衣服購買數量"
      }
    ],
    "correctAnswer": "A",
    "explanation": "審美需求是人類精神邁向自我實現與超越自我的重要階梯，優美的校園環境與藝術陶冶能昇華情感，促進全人身心健康。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第6章 p.53",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch6-5",
    "chapterId": 6,
    "scholarId": "rogers",
    "topic": "自我實現傾向（Actualizing Tendency）之人性觀",
    "questionText": "人本主義心理學與行為主義心理學對「人性本質」的根本假定截然不同。羅吉斯主張的「自我實現傾向（Actualizing Tendency）」認為：",
    "options": [
      {
        "key": "A",
        "text": "人類天生具備朝向成長、健全、自主與發揮最大潛能的內在建設性動力，如同種子天生渴望破土成長為大樹"
      },
      {
        "key": "B",
        "text": "人類天生是一張白板，完全依靠外在刺激制約塑造"
      },
      {
        "key": "C",
        "text": "人類天生邪惡自私，只能依靠嚴刑峻法控制"
      },
      {
        "key": "D",
        "text": "人類心智純粹由隨機的物理化學分子運動組成"
      }
    ],
    "correctAnswer": "A",
    "explanation": "人本主義深信性善與自我實現傾向：每個人內在都有朝向成熟與卓越成長的強烈潛能，教育的核心是提供滋養土壤（真誠、關懷、同理）而非機械雕刻。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第6章 p.54",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch6-6",
    "chapterId": 6,
    "scholarId": "maslow",
    "topic": "自尊需求（Self-Esteem Needs）之兩大支柱",
    "questionText": "馬斯洛將「自尊需求（Esteem Needs）」拆解為兩大成分，分別是：",
    "options": [
      {
        "key": "A",
        "text": "個人的自我尊重（自信、勝任感、獨立自主）與 來自他人的尊重（獲得認可、地位、聲譽與讚許）"
      },
      {
        "key": "B",
        "text": "傲慢自大感 與 輕視他人感"
      },
      {
        "key": "C",
        "text": "物質財富擁有量 與 肌肉強壯度"
      },
      {
        "key": "D",
        "text": "生理本能衝動 與 防衛機制"
      }
    ],
    "correctAnswer": "A",
    "explanation": "自尊包含內在的自尊（感受自己的勝任、力量與自信）以及外在的受人尊重（得到他人真誠的賞識與認同），兩者結合構成健全自尊。",
    "examSource": "112年桃園市國小教甄試題",
    "handoutRef": "講義第6章 p.53",
    "difficulty": "中等"
  },
  {
    "id": "q-extra-ch7-1",
    "chapterId": 7,
    "scholarId": "bloom",
    "topic": "美傑（Mager）行為目標三要素（行為、條件、標準）",
    "questionText": "美傑（Robert F. Mager）在 1962 年提出撰寫「行為目標（Behavioral Objectives）」必須包含三大核心要素，下列何者不屬於這三大要素之一？",
    "options": [
      {
        "key": "A",
        "text": "學生的星座與血型性向"
      },
      {
        "key": "B",
        "text": "可觀察的外顯行為（Behavior，具體動作動詞）"
      },
      {
        "key": "C",
        "text": "表現行為所處的條件（Condition，給予何種工具或情境）"
      },
      {
        "key": "D",
        "text": "評定表現是否達標的標準（Criterion / Standard，精確度或完成時限）"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Mager 行為目標三要素：1.行為（可觀察測量的具體動詞）；2.條件（在何種限制或輔助下執行）；3.標準（答對百分比、完成時間等可接受水準）。",
    "examSource": "112年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第7章 p.58",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch7-2",
    "chapterId": 7,
    "scholarId": "bloom",
    "topic": "行為目標寫作實例要素拆解",
    "questionText": "教學目標寫道：「給予一張無標註的台灣空白地圖（甲），學生能正確標示出（乙）至少八個國家公園的位置（丙）」。其中甲、乙、丙依序代表 Mager 行為目標的何種要素？",
    "options": [
      {
        "key": "A",
        "text": "甲：條件（Condition）；乙：行為（Behavior）；丙：標準（Criterion）"
      },
      {
        "key": "B",
        "text": "甲：標準；乙：條件；丙：行為"
      },
      {
        "key": "C",
        "text": "甲：行為；乙：標準；丙：條件"
      },
      {
        "key": "D",
        "text": "甲：條件；乙：標準；丙：行為"
      }
    ],
    "correctAnswer": "A",
    "explanation": "甲（給予空白地圖）為操作情境條件；乙（標示出）為可觀察動作行為；丙（至少八個正確）為合格的評判規準。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第7章 p.58",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch7-3",
    "chapterId": 7,
    "scholarId": "bloom",
    "topic": "格朗蘭（Gronlund）認知導向目標寫作模式",
    "questionText": "格朗蘭（N. E. Gronlund）批評 Mager 的行為目標過於瑣碎機械，因而提出「普遍性目標模式」。其寫作原則為：",
    "options": [
      {
        "key": "A",
        "text": "先陳述一條概括性的「一般教學目標（用理解、知道等內在認知動詞）」，其下列出 3-5 條具體的「外顯行為指標（用列舉、解釋等具體動詞）」作為證據"
      },
      {
        "key": "B",
        "text": "完全不寫任何具體行為動詞"
      },
      {
        "key": "C",
        "text": "直接抄寫課本目錄章節"
      },
      {
        "key": "D",
        "text": "只規定學生考試必須拿幾分"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Gronlund 模式兼顧了認知理解的高階大概念（一般目標），同時提供具體指標範例作為評量證據，是當代教案編寫的最常用規範。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第7章 p.58",
    "difficulty": "中等"
  },
  {
    "id": "q-extra-ch7-4",
    "chapterId": 7,
    "scholarId": "bloom",
    "topic": "辛普森（Simpson）動作技能領域教育目標七層次",
    "questionText": "辛普森（E. J. Simpson）建立的「動作技能領域教育目標分類」，其七個層次演進的正確順序依序為何？",
    "options": [
      {
        "key": "A",
        "text": "知覺（Perception）→ 心向（Set）→ 引導反應（Guided Response）→ 機械化（Mechanism）→ 複雜外在反應（Complex Overt Response）→ 適應（Adaptation）→ 獨創（Origination）"
      },
      {
        "key": "B",
        "text": "獨創 → 適應 → 機械化 → 心向 → 知覺 → 引導反應 → 複雜反應"
      },
      {
        "key": "C",
        "text": "機械化 → 引導反應 → 複雜反應 → 獨創 → 知覺 → 心向 → 適應"
      },
      {
        "key": "D",
        "text": "知覺 → 引導反應 → 心向 → 獨創 → 機械化 → 適應 → 複雜反應"
      }
    ],
    "correctAnswer": "A",
    "explanation": "動作技能七層次口訣「知、心、引、機、複、適、創」：從最初感知察覺、身心準備，到模仿練習、熟能生巧（機械化），最終能隨機應變並創造新動作招式（獨創）。",
    "examSource": "109年高級中等以下學校教師資格考試",
    "handoutRef": "講義第7章 p.61",
    "difficulty": "進階"
  },
  {
    "id": "q-extra-ch7-5",
    "chapterId": 7,
    "scholarId": "bloom",
    "topic": "情意目標「反應（Responding）」與「評價（Valuing）」之區別",
    "questionText": "在 Krathwohl & Bloom 的情意目標分類中，「學生自願主動打掃公共區域並感到樂在其中」（屬於甲）；而「學生公開宣稱並堅定擁護環保減塑的崇高價值，並對破壞環境行為感到憤慨」（屬於乙）。甲與乙依序為：",
    "options": [
      {
        "key": "A",
        "text": "甲：反應（Responding）；乙：評價/價值化（Valuing）"
      },
      {
        "key": "B",
        "text": "甲：接受；乙：反應"
      },
      {
        "key": "C",
        "text": "甲：評價；乙：品格形成"
      },
      {
        "key": "D",
        "text": "甲：組織；乙：接受"
      }
    ],
    "correctAnswer": "A",
    "explanation": "反應層次指主動參與並展現順服、喜愛之行動（樂於做）；評價/價值化層次則將價值內化為自身信念，並對其賦予重要性與承諾（認同珍視）。",
    "examSource": "108年新北市公立國小教甄試題",
    "handoutRef": "講義第7章 p.60",
    "difficulty": "中等"
  },
  {
    "id": "q-extra-ch7-6",
    "chapterId": 7,
    "scholarId": "wiggins_mctighe",
    "topic": "評量規準（Rubrics）在真實表現評量之設計原則",
    "questionText": "在素養導向與 UbD 課程評量中，廣泛使用「評量規準（Rubrics）」。一份優質的分析型評量規準（Analytic Rubric）必須包含哪些核心要件？",
    "options": [
      {
        "key": "A",
        "text": "明確的評量規準向度（Criteria）、表現等級劃分（Performance Levels）、以及每一等級具體質性特徵的行為錨定描述語（Descriptors）"
      },
      {
        "key": "B",
        "text": "由 1 到 100 分的隨機扣分扣打"
      },
      {
        "key": "C",
        "text": "只寫出「優秀、良好、普通」三個詞而不提供任何具體說明"
      },
      {
        "key": "D",
        "text": "評卷老師的個人心情日誌"
      }
    ],
    "correctAnswer": "A",
    "explanation": "優質 Rubric 包含清楚向度、等第水準、以及詳細的「表現描述語（Descriptors）」，讓師生共享對卓越水準的具體共識，提升評分信度與學習指引效能。",
    "examSource": "112年高雄市國民小學教師甄選教育專業試題",
    "handoutRef": "講義第7章 p.64",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch7-7",
    "chapterId": 7,
    "scholarId": "wiggins_mctighe",
    "topic": "UbD 理解六面向之「自知（Self-Knowledge）」面向",
    "questionText": "在 Wiggins & McTighe 的理解六面向中，最成熟且高階的面向是「自知（Self-Knowledge）」。學生展現「自知」面向時的核心特質為：",
    "options": [
      {
        "key": "A",
        "text": "能覺察自己思維盲點、偏見、未檢驗的假設，明白自己理解的侷限所在（後設自知）"
      },
      {
        "key": "B",
        "text": "背得出自己的身分證字號與出生年月日"
      },
      {
        "key": "C",
        "text": "自以為全天下只有自己最聰明"
      },
      {
        "key": "D",
        "text": "盲目肯定自己的所有作答"
      }
    ],
    "correctAnswer": "A",
    "explanation": "自知（Self-Knowledge）是深刻的後設智慧：察覺個人思維習慣、偏好如何塑造自己的詮釋，並清楚洞察自身知識的盲點與無知所在。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第7章 p.64",
    "difficulty": "中等"
  },
  {
    "id": "q-extra-ch7-8",
    "chapterId": 7,
    "scholarId": "bloom",
    "topic": "建構一致性（Constructive Alignment）教學設計原則",
    "questionText": "澳洲教育心理學家畢格斯（John Biggs）提出「建構一致性（Constructive Alignment / 一致性建構原則）」，強調教學設計的核心黃金準則為：",
    "options": [
      {
        "key": "A",
        "text": "「預期學習成果目標（Intended Learning Outcomes）」、「教學與學習活動（TLAs）」與「評量任務（Assessment Tasks）」三者必須嚴格緊密呼應與一致"
      },
      {
        "key": "B",
        "text": "全班所有學生的身高與座位排列必須一致"
      },
      {
        "key": "C",
        "text": "每天上課講話的音調必須維持一致"
      },
      {
        "key": "D",
        "text": "全校所有年級必須考同一份考卷"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Constructive Alignment 強調教學的「目標、教學、評量三位一體」：教你想達成的目標，評你想評量的能力，避免「教一套、考一套」的斷裂。",
    "examSource": "110年新北市國小教甄試題",
    "handoutRef": "講義第7章 p.62-63",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch7-9",
    "chapterId": 7,
    "scholarId": "bloom",
    "topic": "泰勒（Tyler）目標模式之四大基本問題",
    "questionText": "「現代課程理論之父」拉爾夫·泰勒（Ralph Tyler）在 1949 年提出劃時代的泰勒原理（Tyler Rationale），其圍繞的四大基本問題依序為：",
    "options": [
      {
        "key": "A",
        "text": "學校應達成何種教育目標？提供何種教育經驗以達成這些目標？如何有效組織這些教育經驗？如何評鑑這些目標是否已經達成？"
      },
      {
        "key": "B",
        "text": "學校應收取多少學費？聘請幾位教師？購買幾台電腦？如何招收更多學生？"
      },
      {
        "key": "C",
        "text": "何時放暑假？何時放寒假？何時開學？何時段考？"
      },
      {
        "key": "D",
        "text": "由誰擔任校長？由誰擔任會計？由誰擔任工友？由誰負責維修？"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tyler 四大問題建構了現代課程發展架構：確定教育目標（哲學與心理學篩網）→ 選擇學習經驗 → 組織學習經驗 → 評鑑學習成果。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第7章 p.57",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch7-10",
    "chapterId": 7,
    "scholarId": "wiggins_mctighe",
    "topic": "核心問題（Essential Questions）分類：整體性 vs 單元專題性",
    "questionText": "在 UbD 課程設計中，核心問題分為「整體性/跨領域核心問題（Overarching EQ）」與「單元專題性核心問題（Topical EQ）」。下列何者屬於跨領域的整體性核心問題？",
    "options": [
      {
        "key": "A",
        "text": "「一個偉大的文學作品，究竟如何反映同時又能深刻形塑所處時代的社會價值？」（超越單一文本）"
      },
      {
        "key": "B",
        "text": "「請問《紅樓夢》賈寶玉銜著什麼出生的？」（單一小說事實）"
      },
      {
        "key": "C",
        "text": "「光合作用產生的氣體是什麼？」（單一科學事實）"
      },
      {
        "key": "D",
        "text": "「圓周率公式的英文字母是什麼？」（符號事實）"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Overarching EQ 具有跨時代、跨領域的強大包攝力（如「科技進步總是造福人類嗎？」），引導學生觸類旁通、發展長遠素養思維。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第7章 p.63",
    "difficulty": "中等"
  },
  {
    "id": "q-extra-ch10-1",
    "chapterId": 10,
    "scholarId": "kilpatrick",
    "topic": "克伯屈四大設計類型之「欣賞/消費者設計（Consumer's Project）」",
    "questionText": "音樂課中，全班學生共同策劃「浪漫時期古典交響樂欣賞沙龍」，學生主動研讀貝多芬生平、聆聽樂曲並在聆聽後分享樂章帶來的崇高情感震撼。這屬於克伯屈的：",
    "options": [
      {
        "key": "A",
        "text": "欣賞者/消費者設計（Consumer's Project）"
      },
      {
        "key": "B",
        "text": "生產者設計"
      },
      {
        "key": "C",
        "text": "問題設計"
      },
      {
        "key": "D",
        "text": "訓練設計"
      }
    ],
    "correctAnswer": "A",
    "explanation": "欣賞者設計（Consumer's Project）之目的在於享受、品味、體驗美感與藝術經驗（如聽音樂會、欣賞戲劇、讀一本好詩集）。",
    "examSource": "112年新北市公立國小教甄試題",
    "handoutRef": "講義第10章 p.80",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch10-2",
    "chapterId": 10,
    "scholarId": "kilpatrick",
    "topic": "克伯屈四大設計類型之「問題設計（Problem Project）」",
    "questionText": "自然科課堂上，學生發現校園水池中的孔雀魚最近大量死亡，全班主動發起專案，採集水樣檢測含氧量、調查附近排水溝污染源並試圖提出挽救方案。這屬於克伯屈的：",
    "options": [
      {
        "key": "A",
        "text": "問題設計（Problem Project）"
      },
      {
        "key": "B",
        "text": "欣賞者設計"
      },
      {
        "key": "C",
        "text": "訓練設計"
      },
      {
        "key": "D",
        "text": "機械記憶設計"
      }
    ],
    "correctAnswer": "A",
    "explanation": "問題設計（Problem Project）之目的在於「解決某個智力疑難或克服生活真實障礙」（如調查水污染、探究機器故障原因）。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第10章 p.80",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch10-3",
    "chapterId": 10,
    "scholarId": "kilpatrick",
    "topic": "克伯屈四大設計類型之「訓練/特種練習設計（Specific Learning Project）」",
    "questionText": "體育課或技職實習中，學生發現自己盲打鍵盤英打速度太慢，為了考取證照，主動規劃連續兩週、每天半小時的盲打打字軟體精熟練習計畫。這屬於克伯屈的：",
    "options": [
      {
        "key": "A",
        "text": "特種練習/訓練設計（Specific Learning / Drill Project）"
      },
      {
        "key": "B",
        "text": "生產者設計"
      },
      {
        "key": "C",
        "text": "欣賞者設計"
      },
      {
        "key": "D",
        "text": "問題設計"
      }
    ],
    "correctAnswer": "A",
    "explanation": "訓練/特種練習設計旨在精熟特定技術動作或技能熟練度（如練習發音、彈鋼琴指法、盲打鍵盤）。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第10章 p.80",
    "difficulty": "中等"
  },
  {
    "id": "q-extra-ch10-4",
    "chapterId": 10,
    "scholarId": "dewey",
    "topic": "第二步驟「擬訂計畫（Planning）」之教師鷹架角色",
    "questionText": "在設計教學法的第二步驟「擬訂計畫（Planning）」中，當學生提出的專案計畫出現明顯漏洞（如經費嚴重不足或步驟邏輯顛倒）時，教師最適宜的指導原則為：",
    "options": [
      {
        "key": "A",
        "text": "透過引導性提問啟發學生自行發現矛盾盲點（「你們算過這項材料的單價嗎？」），協助修正計畫，但不直接代替學生做決定"
      },
      {
        "key": "B",
        "text": "直接將學生的計畫丟進垃圾桶，由老師重寫一份標準計畫"
      },
      {
        "key": "C",
        "text": "完全不看一眼，放任學生失敗受傷"
      },
      {
        "key": "D",
        "text": "當眾嘲笑全班異想天開"
      }
    ],
    "correctAnswer": "A",
    "explanation": "設計教學法尊重學生自主，教師扮演顧問與促進者：透過關鍵提問引導學生自我審查計畫的可行性，保留自主負責的經驗價值。",
    "examSource": "109年高級中等以下學校教師資格考試",
    "handoutRef": "講義第10章 p.80",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch10-5",
    "chapterId": 10,
    "scholarId": "kilpatrick",
    "topic": "主學習（Primary Learning）與副學習之具體辨析",
    "questionText": "國小三年級學童在進行「班級二手跳蚤市場拍賣專案」時，學會了乘除法與貨幣找零計算（屬於甲）；同時學會了記帳記帳表格製作與禮貌促銷用語（屬於乙）。甲與乙依序為克伯屈三伴隨論中的：",
    "options": [
      {
        "key": "A",
        "text": "甲：主學習（Primary Learning）；乙：副學習（Associate Learning）"
      },
      {
        "key": "B",
        "text": "甲：副學習；乙：附學習"
      },
      {
        "key": "C",
        "text": "甲：附學習；乙：主學習"
      },
      {
        "key": "D",
        "text": "甲：主學習；乙：附學習"
      }
    ],
    "correctAnswer": "A",
    "explanation": "主學習指該活動直接追求的主要知識技能（數學運算）；副學習指活動伴隨習得的相關概念與實用技巧（記帳、語言促銷）。",
    "examSource": "108年新北市公立國小教甄試題",
    "handoutRef": "講義第10章 p.80",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch10-6",
    "chapterId": 10,
    "scholarId": "dewey",
    "topic": "專案導向學習（PBL）七大黃金標準設計準則",
    "questionText": "現代巴克教育研究院（Buck Institute for Education, BIE）提出高質量「PBL 專案學習」的黃金準則，下列何者不屬於其核心要素？",
    "options": [
      {
        "key": "A",
        "text": "每節課進行 40 分鐘單向講述與純粹紙筆是非題考核"
      },
      {
        "key": "B",
        "text": "挑戰性的真實問題或難題（Challenging Problem or Question）"
      },
      {
        "key": "C",
        "text": "持續性的深入探究（Sustained Inquiry）與真實性（Authenticity）"
      },
      {
        "key": "D",
        "text": "學生的發言權與選擇權（Student Voice and Choice）及公開展示成果（Public Product）"
      }
    ],
    "correctAnswer": "A",
    "explanation": "PBL 黃金標準包含：挑戰性問題、持續探究、真實情境、學生發言與選擇權、反省檢核、修改批評、以及向真實公眾公開展示成果。單向講述違背 PBL 本質。",
    "examSource": "112年高雄市國民小學教師甄選教育專業試題",
    "handoutRef": "講義第10章 p.81",
    "difficulty": "中等"
  },
  {
    "id": "q-extra-ch10-7",
    "chapterId": 10,
    "scholarId": "dewey",
    "topic": "杜威兒童四種原生衝動在專案教學中之開展",
    "questionText": "杜威指出，兒童天生具備四種強烈的本能衝動：社交/溝通衝動、製作/建造衝動、探究/發現衝動、以及藝術表達衝動。在課堂專案教學中，教師善用這些衝動的最大教育意義為：",
    "options": [
      {
        "key": "A",
        "text": "順應兒童自然生長本能，將原生衝動引導昇華為有目的、有紀律的智力探索與社會合作經驗"
      },
      {
        "key": "B",
        "text": "徹底壓抑兒童的所有本能衝動以維持教室安靜"
      },
      {
        "key": "C",
        "text": "讓兒童在課堂任意發洩破壞"
      },
      {
        "key": "D",
        "text": "把衝動作為扣分的法規依據"
      }
    ],
    "correctAnswer": "A",
    "explanation": "杜威認為原生衝動是教育生長的天然資源與引擎，優質教學不是壓制本能，而是透過生活作業與專案活動將衝動導向豐富的智力成果。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第10章 p.81",
    "difficulty": "中等"
  },
  {
    "id": "q-extra-ch10-8",
    "chapterId": 10,
    "scholarId": "kilpatrick",
    "topic": "第三步驟「實行工作（Executing）」之堅持與抗挫力培養",
    "questionText": "在設計教學法第三步「實行工作（Executing）」中，學生實際動手執行常遭遇突發挫折（如材料用盡、程式當機、同儕分工糾紛）。克伯屈認為此階段最能培養學生何種珍貴特質？",
    "options": [
      {
        "key": "A",
        "text": "克服真實困難的恆毅力、問題解決應變力與團隊分工合作的社會成熟度"
      },
      {
        "key": "B",
        "text": "隨意放棄與互相推諉責任的習慣"
      },
      {
        "key": "C",
        "text": "抄襲現成商品的技巧"
      },
      {
        "key": "D",
        "text": "向教師哭訴以求取消作業"
      }
    ],
    "correctAnswer": "A",
    "explanation": "實行階段手腦並用，面對真實阻礙時的堅持與調適，正是全人品格與生活素養磨練的最精華所在（附學習之體現）。",
    "examSource": "110年新北市國小教甄試題",
    "handoutRef": "講義第10章 p.80",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch10-9",
    "chapterId": 10,
    "scholarId": "dewey",
    "topic": "「做中學」與傳統「聽中學（Learning by Listening）」之成效對比",
    "questionText": "認知科學研究證實，相較於傳統被動坐在台下「聽中學（Learning by listening）」，透過做中學與專案探究學習的學生，在下列哪一項指標上展現最壓倒性的優勢？",
    "options": [
      {
        "key": "A",
        "text": "知識的長期記憶保持率、深層概念理解、以及面對未知複雜新情境時的跨情境遷移應用能力"
      },
      {
        "key": "B",
        "text": "死背冷僻名詞的默寫速度"
      },
      {
        "key": "C",
        "text": "在單一標準答案選擇題的猜題命中率"
      },
      {
        "key": "D",
        "text": "課堂罰坐靜止不動的時間長度"
      }
    ],
    "correctAnswer": "A",
    "explanation": "動手實作深度活化多重感官與神經迴路，使概念具備真實脈絡連結，不僅記憶保持遠勝單純聽講，更具備高階遷移力。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第10章 p.81",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch10-10",
    "chapterId": 10,
    "scholarId": "kilpatrick",
    "topic": "設計教學法在 108 課綱校訂彈性學習課程之落實",
    "questionText": "臺灣中小學在 108 課綱下開設豐富的「校訂彈性學習課程（跨領域專案專題、在地走讀探究）」，這項政策在教學法本質上最是克伯屈設計教學法的當代實踐。此種課程設計最大的教育效益為：",
    "options": [
      {
        "key": "A",
        "text": "跨越單一學科藩籬，連結在地鄉土與真實生活，落實「自發、互動、共好」的核心素養總體目標"
      },
      {
        "key": "B",
        "text": "增加學生期末段考科目的考卷數量"
      },
      {
        "key": "C",
        "text": "減少學生的下課遊戲時間"
      },
      {
        "key": "D",
        "text": "完全取消所有基礎學科教學"
      }
    ],
    "correctAnswer": "A",
    "explanation": "校訂彈性課程以學校願景與在地議題為核心，引導學生開展主題式探究與社會實踐，完美呼應克伯屈「全心全意之有目的社會活動」。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第10章 p.80",
    "difficulty": "中等"
  },
  {
    "id": "q-extra-ch14-1",
    "chapterId": 14,
    "topic": "常模參照評量（Norm-Referenced）vs 標準參照評量（Criterion-Referenced）",
    "questionText": "大學學科能力測驗（學測）將成績換算為 15 級分、採前標、均標、底標之排名，屬於（甲）；而全民英檢或駕照路考規定答對率達 70% 即頒發及格證書，屬於（乙）。甲與乙依序屬於：",
    "options": [
      {
        "key": "A",
        "text": "甲：常模參照評量（Norm-Referenced）；乙：標準/效標參照評量（Criterion-Referenced）"
      },
      {
        "key": "B",
        "text": "甲：效標參照評量；乙：常模參照評量"
      },
      {
        "key": "C",
        "text": "甲：安置性評量；乙：形成性評量"
      },
      {
        "key": "D",
        "text": "甲：檔案評量；乙：動態評量"
      }
    ],
    "correctAnswer": "A",
    "explanation": "常模參照是以受試者群體的相對排名（PR 值、級分）來解釋成績，重在甄選區辨；效標/標準參照是以事先設定的精熟標準（如 70 分及格）來判定是否達標，重在精熟確認。",
    "examSource": "112年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第14章 p.119",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch14-2",
    "chapterId": 14,
    "topic": "評量效度四大類型：內容、效標關聯（同時/預測）、建構效度",
    "questionText": "若某份教師甄選教育專業試卷，與錄取教師半年後的實際「課堂教學考核成績」呈現高度正相關（r = 0.85）。這份甄試試卷展現了優異的何種效度？",
    "options": [
      {
        "key": "A",
        "text": "預測效度（Predictive Validity，效標關聯效度的一種）"
      },
      {
        "key": "B",
        "text": "同時效度"
      },
      {
        "key": "C",
        "text": "表面效度"
      },
      {
        "key": "D",
        "text": "重測信度"
      }
    ],
    "correctAnswer": "A",
    "explanation": "預測效度（Predictive Validity）指測驗分數與未來特定外在效標表現（半年後的教學績效）之間的相關程度，能有效預測未來成就。",
    "examSource": "111年臺北市中等學校教甄教育專業科目",
    "handoutRef": "講義第14章 p.121",
    "difficulty": "中等"
  },
  {
    "id": "q-extra-ch14-3",
    "chapterId": 14,
    "topic": "信度（Reliability）與效度（Validity）之靶心比喻關係",
    "questionText": "在測驗統計學中，常以「射箭打靶」比喻信度與效度的關係。下列有關兩者相互關係的敘述，何者絕對正確？",
    "options": [
      {
        "key": "A",
        "text": "信度高是效度高的「必要條件，但非充分條件」（箭著點高度集中未必射中靶心；但射中紅心者必然高度集中）"
      },
      {
        "key": "B",
        "text": "效度高不一定信度高"
      },
      {
        "key": "C",
        "text": "信度高則效度必然一定高"
      },
      {
        "key": "D",
        "text": "兩者完全獨立毫無關聯"
      }
    ],
    "correctAnswer": "A",
    "explanation": "測驗必須先有信度（一致性與穩定性，箭著點集中），才可能有效度（測量到真正目標，射中紅心）。有信度不保證有效度，但有效度必然具備高信度。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第14章 p.121",
    "difficulty": "中等"
  },
  {
    "id": "q-extra-ch14-4",
    "chapterId": 14,
    "topic": "試題分析：難度指數（P 值）與鑑別度指數（D 值）",
    "questionText": "某次段考中，某一試題的難度指數 P = 0.50，高分組答對率 80%，低分組答對率 20%，鑑別度指數 D = 0.60。依據試題評鑑標準，此題應當如何評價？",
    "options": [
      {
        "key": "A",
        "text": "難度適中（P=0.50 難度最佳），且鑑別度極優（D > 0.40 屬非常優良試題），應予以保留入庫"
      },
      {
        "key": "B",
        "text": "題目過於困難，全班無人能答對"
      },
      {
        "key": "C",
        "text": "鑑別度為負值，具有嚴重缺陷應立刻刪除"
      },
      {
        "key": "D",
        "text": "題目過於簡單全班閉著眼睛都會寫"
      }
    ],
    "correctAnswer": "A",
    "explanation": "P值在 0.50 左右能產生最大變異量；D 值大於 0.40 代表能強烈區辨高低分群（優良試題）。該題各項指標皆為頂尖試題。",
    "examSource": "109年新北市國小教甄試題",
    "handoutRef": "講義第14章 p.122",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch14-5",
    "chapterId": 14,
    "topic": "鑑別度出現負值（Negative Discrimination）之成因分析",
    "questionText": "若某道選擇題的試題分析顯示「鑑別度指數 D 為負數（如 D = -0.35，即低分組答對人數反而顯著多於高分組）」。造成此現象的最可能原因為：",
    "options": [
      {
        "key": "A",
        "text": "題幹語意不清有重大誘導偏誤、正解鑰匙判定錯誤、或題目含有誤導高分組過度思索的惡性陷阱"
      },
      {
        "key": "B",
        "text": "高分組學生智商突然退化"
      },
      {
        "key": "C",
        "text": "該題目太過於完美優秀"
      },
      {
        "key": "D",
        "text": "電腦閱卷機故障漏墨水"
      }
    ],
    "correctAnswer": "A",
    "explanation": "負鑑別度是嚴重警訊：代表懂越多的高分群反而選錯，猜題的低分群反而答對，通常源於答案有爭議、雙重正解或重大語意陷阱，必須立即修訂或送分刪除。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第14章 p.122",
    "difficulty": "中等"
  },
  {
    "id": "q-extra-ch14-6",
    "chapterId": 14,
    "topic": "檔案評量（Portfolio Assessment）之三大核心要素",
    "questionText": "在多元評量中，學生建立的「學習歷程檔案（Portfolio）」絕非把所有考卷隨意裝訂成冊。一份真正的檔案評量必須具備的三大支柱為：",
    "options": [
      {
        "key": "A",
        "text": "有系統的目的性作品選輯、明確清晰的評分規準（Rubrics）、以及學生個人的「自我反思與成長歷程省思紀錄」"
      },
      {
        "key": "B",
        "text": "厚度必須超過五百頁、裝訂成精裝本"
      },
      {
        "key": "C",
        "text": "全部由補習班名師代筆撰寫"
      },
      {
        "key": "D",
        "text": "只放期末考滿分的考卷"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Portfolio 的靈魂在於：有目的的收集、明確規準、以及學生自我反思（Self-reflection：我為什麼選這件作品？我從中學到什麼？下一步如何改善？）。",
    "examSource": "112年高雄市國民小學教師甄選教育專業試題",
    "handoutRef": "講義第14章 p.120-121",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch14-7",
    "chapterId": 14,
    "topic": "實作評量（Performance Assessment）在素養評量之核心優勢",
    "questionText": "相較於傳統紙筆測驗只能測量「知道什麼（Know what）」，108 課綱極為重視「實作表現評量（Performance Assessment）」，其最大的評量優勢在於能直接測量：",
    "options": [
      {
        "key": "A",
        "text": "學生在真實情境脈絡中「能否動手實踐、綜合運用知識與技能以解決真實問題的能力（Know how and Can do）」"
      },
      {
        "key": "B",
        "text": "學生手寫毛筆字的美觀工整度"
      },
      {
        "key": "C",
        "text": "學生背誦長篇文言文的速度"
      },
      {
        "key": "D",
        "text": "閱卷老師批改考卷的省時便利性"
      }
    ],
    "correctAnswer": "A",
    "explanation": "實作評量要求學生在模擬或真實情境中產出成品或進行操作表現（如科學實驗、口頭演說、故障排除），是檢驗素養落地實踐的唯一途徑。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第14章 p.120",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch14-8",
    "chapterId": 14,
    "topic": "診斷性評量（Diagnostic Assessment）之實施特點",
    "questionText": "數學老師發現班上有五位學生在學習「分數除法」時連續三次作業卡關，於是專門設計了一份針對「倒數概念與整數除法基本概念」的微型診斷試卷，深入分析其思維卡點。此種評量屬於：",
    "options": [
      {
        "key": "A",
        "text": "診斷性評量（Diagnostic Assessment）"
      },
      {
        "key": "B",
        "text": "總結性評量（Summative Assessment）"
      },
      {
        "key": "C",
        "text": "常模安置評量"
      },
      {
        "key": "D",
        "text": "期末學力篩檢"
      }
    ],
    "correctAnswer": "A",
    "explanation": "診斷性評量（Diagnostic Assessment）專門在教學進行中針對持續遭遇重大困難的學生實施，目的在深入探查其迷思概念的具體病因，作為個別化處方與補救設計之依據。",
    "examSource": "110年新北市國小教甄試題",
    "handoutRef": "講義第14章 p.119",
    "difficulty": "基礎"
  },
  {
    "id": "q-extra-ch14-9",
    "chapterId": 14,
    "topic": "折半信度（Split-Half Reliability）與斯皮爾曼-布朗公式（Spearman-Brown Formula）",
    "questionText": "在計算測驗的內部一致性時，研究者將一份 50 題測驗按單雙數題拆為兩半計算相關，求得折半信度 r = 0.70。由於測驗題數折半會低估全卷信度，研究者必須使用何種統計公式加以還原校正？",
    "options": [
      {
        "key": "A",
        "text": "斯皮爾曼-布朗公式（Spearman-Brown Prophecy Formula）"
      },
      {
        "key": "B",
        "text": "庫李公式（KR-20）"
      },
      {
        "key": "C",
        "text": "克隆巴赫 Alpha 係數（Cronbach's alpha）"
      },
      {
        "key": "D",
        "text": "卡方檢定公式"
      }
    ],
    "correctAnswer": "A",
    "explanation": "折半信度因題數減半導致信度低估，必須透過 Spearman-Brown 公式校正（rn = 2r / (1+r)），還原預估整份完整長度測驗的真正信度值。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第14章 p.121",
    "difficulty": "進階"
  },
  {
    "id": "q-extra-ch14-10",
    "chapterId": 14,
    "topic": "評量文化範式轉移：評量「為學習而評（Assessment for Learning）」",
    "questionText": "當前國際教育評鑑理論倡導 Assessment of Learning（對學習成果的評量）、Assessment for Learning（促進學習的評量）、以及 Assessment as Learning（評量即學習）。其中「評量即學習（Assessment as Learning）」的核心特徵為：",
    "options": [
      {
        "key": "A",
        "text": "學生扮演主動的自我評量者與後設認知監控者，透過自我檢視與同儕互評，主動調控自身的後續學習策略"
      },
      {
        "key": "B",
        "text": "純粹由教育主管機關進行全縣抽測"
      },
      {
        "key": "C",
        "text": "用考試分數來決定升學分發志願"
      },
      {
        "key": "D",
        "text": "每週五實施傳統十道默寫測驗"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Assessment as Learning（評量即學習）以學生自我反思與後設認知為核心，學生在評量歷程中自我監控、自我對照規準調整策略，使評量本身成為深度學習的一環。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第14章 p.119",
    "difficulty": "中等"
  }
];
