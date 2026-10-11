# scripts/data_scholars_part2.py
# Scholars: bandura, zimmerman, flavell, piaget, bruner, dale, ausubel, vygotsky

QUESTIONS_PART2 = [
  # ----------------------------------------------------
  # 9. 班杜拉 (bandura) - 6 new
  # ----------------------------------------------------
  {
    "id": "q-bandura-7",
    "chapterId": 3,
    "scholarId": "bandura",
    "topic": "觀察學習之四個心理歷程階段順序",
    "questionText": "班杜拉（A. Bandura）社會學習論中，個體透過楷模示範習得新行為的四個歷程階段，正確順序為何？",
    "options": [
      { "key": "A", "text": "注意（Attention）→ 保持（Retention）→ 動作再生（Reproduction）→ 動機（Motivation）" },
      { "key": "B", "text": "保持 → 注意 → 動機 → 動作再生" },
      { "key": "C", "text": "動機 → 動作再生 → 保持 → 注意" },
      { "key": "D", "text": "注意 → 動機 → 動作再生 → 保持" }
    ],
    "correctAnswer": "A",
    "explanation": "觀察學習四階段口訣「注、保、動、動」：注意（專注觀察楷模）、保持（以表象或符號記憶編碼）、動作再生（肢體演練轉化）、動機（獲得增強誘因而實際表現）。",
    "examSource": "112年教育部教師資格考試（學習者發展）",
    "handoutRef": "講義第3章 p.27",
    "difficulty": "基礎"
  },
  {
    "id": "q-bandura-8",
    "chapterId": 3,
    "scholarId": "bandura",
    "topic": "三元交互決定論（Triadic Reciprocal Determinism）",
    "questionText": "班杜拉提出「三元交互決定論（Triadic Reciprocal Determinism）」，強調人類行為是由哪三者之間動態、雙向互相影響所決定的？",
    "options": [
      { "key": "A", "text": "個人內在認知/特質（P）、外在環境（E）、個人行為表現（B）" },
      { "key": "B", "text": "遺傳基因、血型、生肖星座" },
      { "key": "C", "text": "家庭收入、學校排名、學測成績" },
      { "key": "D", "text": "本我、自我、超我" }
    ],
    "correctAnswer": "A",
    "explanation": "三元交互論破除行為學派單向環境決定論與心理動力學派單向本能論，指出人（P）、環境（E）與行為（B）彼此相互作用影響。",
    "examSource": "111年臺北市中等學校教師甄選教育專業科目",
    "handoutRef": "講義第3章 p.27",
    "difficulty": "中等"
  },
  {
    "id": "q-bandura-9",
    "chapterId": 13,
    "scholarId": "bandura",
    "topic": "自我效能（Self-Efficacy）四大來源之首要來源",
    "questionText": "班杜拉指出「自我效能（Self-Efficacy）」是個人對自己能否成功完成某項任務的信念判斷。在影響自我效能的四大資訊來源中，哪一項力量最為強大且持久？",
    "options": [
      { "key": "A", "text": "親身掌握的成功經驗（Mastery Experiences / 過去成敗經驗）" },
      { "key": "B", "text": "言語勸告（Verbal Persuasion，口頭讚美）" },
      { "key": "C", "text": "替代經驗（Vicarious Experiences，看別人成功）" },
      { "key": "D", "text": "生理與情緒激起狀態（Physiological States）" }
    ],
    "correctAnswer": "A",
    "explanation": "親身成功經驗（Mastery experience）最直接提供能力證據，克服困難後的成功最能建立深厚抗挫的自我效能；而他人言語勸告雖然有助益但較為脆弱。",
    "examSource": "110年教育部教師資格考試（教育理念與實踐）",
    "handoutRef": "講義第13章 p.112",
    "difficulty": "中等"
  },
  {
    "id": "q-bandura-10",
    "chapterId": 3,
    "scholarId": "bandura",
    "topic": "替代增強（Vicarious Reinforcement）與替代懲罰",
    "questionText": "小華看到坐在旁邊的同儕阿強主動舉手幫老師擦黑板而獲得老師當眾熱烈讚美與加分，小華隔天也開始主動幫忙擦黑板。小華的行為改變主要是受到何種增強作用？",
    "options": [
      { "key": "A", "text": "替代增強（Vicarious Reinforcement）" },
      { "key": "B", "text": "直接正增強" },
      { "key": "C", "text": "自我增強" },
      { "key": "D", "text": "負增強" }
    ],
    "correctAnswer": "A",
    "explanation": "學習者未直接獲得獎賞，僅透過觀察他人（楷模）行為獲得正向結果，進而提升自己表現該行為的動機，稱為替代增強。",
    "examSource": "109年高級中等以下學校教師資格考試",
    "handoutRef": "講義第3章 p.27",
    "difficulty": "基礎"
  },
  {
    "id": "q-bandura-11",
    "chapterId": 3,
    "scholarId": "bandura",
    "topic": "波波玩偶實驗（Bobo Doll Experiment）對去抑制效應之驗證",
    "questionText": "在班杜拉著名的「波波玩偶實驗」中，兒童看見成人拳打腳踢充氣玩偶且未受懲罰，隨後進入房間也大量模仿出現攻擊行為。該實驗證明了攻擊行為可以純粹透過下列何者習得？",
    "options": [
      { "key": "A", "text": "觀察示範（Observation of Modeling）與去抑制作用（Disinhibition）" },
      { "key": "B", "text": "生理遺傳變異" },
      { "key": "C", "text": "嚴格的操作古典制約" },
      { "key": "D", "text": "感覺統合失調" }
    ],
    "correctAnswer": "A",
    "explanation": "實驗證實兒童不需親身試誤或受增強，僅憑觀察楷模即可習得全新行為；看見楷模未受罰甚至會產生「去抑制效應」，使原本被壓抑的衝動釋放。",
    "examSource": "108年新北市公立國小教甄試題",
    "handoutRef": "講義第3章 p.27",
    "difficulty": "中等"
  },
  {
    "id": "q-bandura-12",
    "chapterId": 13,
    "scholarId": "bandura",
    "topic": "自我效能低落與學習習得無助之破解",
    "questionText": "國中數學常考不及格的學生常陷入「我不論怎麼算都不可能及格」的自我效能低落。依據班杜拉理論，教師欲重燃其學習信心，下列哪一策略最有效？",
    "options": [
      { "key": "A", "text": "將大任務拆解成小步幅目標，設計其能力所及的階梯任務，創造連續微小的成功體驗（親身掌握）" },
      { "key": "B", "text": "直接送給他滿分考卷安慰他" },
      { "key": "C", "text": "叫全班同學大聲嘲笑他以激發羞恥心" },
      { "key": "D", "text": "免除他所有數學作業與考試" }
    ],
    "correctAnswer": "A",
    "explanation": "親身成功是建立效能感的最穩固來源。透過近側目標（Proximal goals）與循序漸進的挑戰，讓學生親身累積「我真的做得到」的成功證據。",
    "examSource": "112年高雄市國民小學教師甄選教育專業試題",
    "handoutRef": "講義第13章 p.112",
    "difficulty": "基礎"
  },

  # ----------------------------------------------------
  # 10. 齊瑪曼 (zimmerman) - 10 new
  # ----------------------------------------------------
  {
    "id": "q-zimmerman-3",
    "chapterId": 3,
    "scholarId": "zimmerman",
    "topic": "自律學習（SRL）三階段循環模式順序",
    "questionText": "齊瑪曼（B. J. Zimmerman）提出的「自律學習循環模式（Self-Regulated Learning, SRL）」，其三大階段的運作順序依序為何？",
    "options": [
      { "key": "A", "text": "計畫/預見階段（Forethought）→ 表現/意志監控階段（Performance）→ 自我反思階段（Self-Reflection）" },
      { "key": "B", "text": "自我反思 → 計畫預見 → 表現監控" },
      { "key": "C", "text": "表現監控 → 計畫預見 → 自我反思" },
      { "key": "D", "text": "計畫預見 → 自我反思 → 表現監控" }
    ],
    "correctAnswer": "A",
    "explanation": "Zimmerman SRL 模式三階段循環：1.計畫/預見（目標設定與策略規劃）；2.表現/意志監控（自我監控與自我引導）；3.自我反思（自我評價與歸因調整）。",
    "examSource": "112年教育部教師資格考試（學習者發展）",
    "handoutRef": "講義第3章 p.28, 第12章 p.101",
    "difficulty": "基礎"
  },
  {
    "id": "q-zimmerman-4",
    "chapterId": 3,
    "scholarId": "zimmerman",
    "topic": "計畫階段（Forethought Phase）之關鍵次成分",
    "questionText": "在自律學習的第一階段「計畫/預見階段（Forethought Phase）」，學生主要進行哪兩大類核心認知與動機運作？",
    "options": [
      { "key": "A", "text": "作業分析（設定目標與策略規劃）與自我激勵信念（自我效能與內在價值）" },
      { "key": "B", "text": "偷看鄰座考卷與擦黑板" },
      { "key": "C", "text": "等待老師發下標準解答" },
      { "key": "D", "text": "進行課後打掃工作" }
    ],
    "correctAnswer": "A",
    "explanation": "預見階段包含兩大支柱：作業分析（Task Analysis：設定具體目標與擬訂解題步驟）以及自我激勵信念（Self-motivation beliefs：效能感、結果預期、內在興趣）。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第3章 p.28",
    "difficulty": "中等"
  },
  {
    "id": "q-zimmerman-5",
    "chapterId": 3,
    "scholarId": "zimmerman",
    "topic": "表現階段（Performance Phase）之自我監控（Self-Monitoring）",
    "questionText": "學生在閱讀長篇文章時，邊讀邊在心裡自問：「我剛才這一段真的有看懂嗎？如果沒懂我是不是該放慢語速重讀？」這種在學習進行中主動監測自身理解狀態的歷程屬於：",
    "options": [
      { "key": "A", "text": "自律學習的「自我監控（Self-Monitoring / Metacognitive Monitoring）」" },
      { "key": "B", "text": "消極被動學習" },
      { "key": "C", "text": "操作制約消弱" },
      { "key": "D", "text": "外在獎懲反應" }
    ],
    "correctAnswer": "A",
    "explanation": "表現階段的自我監控是指學習者對自己的思維歷程與學習表現進行持續性的即時追蹤與檢驗，以便及時修正學習策略。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第3章 p.28",
    "difficulty": "基礎"
  },
  {
    "id": "q-zimmerman-6",
    "chapterId": 3,
    "scholarId": "zimmerman",
    "topic": "自我反省階段（Self-Reflection Phase）之適應性反應",
    "questionText": "模擬考成績公佈後，自律能力優秀的學生主動檢討錯題，並將失分歸因於「自己的解題策略不夠靈活」，進而調整複習時間表。這種積極因應策略在齊瑪曼模式中被稱為：",
    "options": [
      { "key": "A", "text": "適應性反應（Adaptive reactions）與建設性歸因" },
      { "key": "B", "text": "防衛性反應（Defensive reactions）" },
      { "key": "C", "text": "習得無助感" },
      { "key": "D", "text": "外在逃避行為" }
    ],
    "correctAnswer": "A",
    "explanation": "自律反省階段有兩種反應：適應性反應（調整策略繼續挑戰）與防衛性反應（自暴自棄、逃避放棄）。優秀自律者具備高度適應性反應。",
    "examSource": "109年新北市國小教甄試題",
    "handoutRef": "講義第3章 p.28",
    "difficulty": "中等"
  },
  {
    "id": "q-zimmerman-7",
    "chapterId": 12,
    "scholarId": "zimmerman",
    "topic": "自律學習發展四層次（觀察、模仿、自我控制、自律）",
    "questionText": "齊瑪曼與 Schunk 指出，學生的自律學習能力發展是由外而內漸進內化的社會認知歷程，其四個發展水準依序為：",
    "options": [
      { "key": "A", "text": "觀察水準（Observation）→ 模仿水準（Emulation）→ 自我控制水準（Self-Control）→ 自律水準（Self-Regulation）" },
      { "key": "B", "text": "自律 → 自我控制 → 模仿 → 觀察" },
      { "key": "C", "text": "模仿 → 觀察 → 自律 → 自我控制" },
      { "key": "D", "text": "自我控制 → 自律 → 觀察 → 模仿" }
    ],
    "correctAnswer": "A",
    "explanation": "SRL 發展四水準：1.觀察楷模策略；2.模仿演練並獲回饋；3.在結構化情境自我控制運用；4.能因應多變脈絡彈性自律調整。",
    "examSource": "108年教育部教師資格考試",
    "handoutRef": "講義第12章 p.101",
    "difficulty": "進階"
  },
  {
    "id": "q-zimmerman-8",
    "chapterId": 3,
    "scholarId": "zimmerman",
    "topic": "自律學習中的求助行為（Help-Seeking）特質",
    "questionText": "在齊瑪曼的理論中，高自律學習者遇到難以解決的課業難題時，通常會展現出何種「適應性求助行為（Adaptive Help-Seeking）」？",
    "options": [
      { "key": "A", "text": "主動尋求教師或同儕的「解題策略指導或概念提示」，而非直接要答案，以便自己能獨立解決問題" },
      { "key": "B", "text": "直接抄襲別人的作業答案了事" },
      { "key": "C", "text": "因為愛面子死不承認自己不懂，堅決不問任何人" },
      { "key": "D", "text": "立刻放棄考試直接睡覺" }
    ],
    "correctAnswer": "A",
    "explanation": "適應性求助並非依賴，而是高自律策略：學習者知道何時、向誰、以及如何提出關鍵問題（求提示而非求答案），以維持自我掌控感。",
    "examSource": "112年桃園市國小教甄試題",
    "handoutRef": "講義第3章 p.28",
    "difficulty": "中等"
  },
  {
    "id": "q-zimmerman-9",
    "chapterId": 12,
    "scholarId": "zimmerman",
    "topic": "學習環境調控（Environmental Structuring）",
    "questionText": "國中生小美為了專心準備會考，主動將書桌上的手機關機收進客廳抽屜、戴上抗噪耳塞、並在桌前貼上今日讀書計畫表。小美的行為屬於自律學習中的：",
    "options": [
      { "key": "A", "text": "環境結構化調控（Environmental Structuring）" },
      { "key": "B", "text": "被動受制約" },
      { "key": "C", "text": "古典制約消弱" },
      { "key": "D", "text": "普氏原則懲罰" }
    ],
    "correctAnswer": "A",
    "explanation": "環境結構化調控是指自律學習者主動選擇或改造物理與心理環境，排除干擾、創造有利於專注學習的情境。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第12章 p.101",
    "difficulty": "基礎"
  },
  {
    "id": "q-zimmerman-10",
    "chapterId": 3,
    "scholarId": "zimmerman",
    "topic": "自律學習者與非自律學習者之核心差異",
    "questionText": "依據齊瑪曼的研究，自律學習者（Self-regulated learners）與非自律學習者在面對課業挫折時，最本質的差異在於自律學習者：",
    "options": [
      { "key": "A", "text": "將失敗視為學習策略需調整的訊號，並保持樂觀的自我效能與主動控制信念" },
      { "key": "B", "text": "天生智商高出 30 分以上" },
      { "key": "C", "text": "從來不曾遇到任何挫折" },
      { "key": "D", "text": "完全不需要任何人的教學支持" }
    ],
    "correctAnswer": "A",
    "explanation": "自律學習者具備高自我效能與後設認知彈性，視挫折為策略調整之契機，不會陷入無助；非自律者則常歸咎於能力差而輕易放棄。",
    "examSource": "110年高雄市國小教甄教育科目",
    "handoutRef": "講義第3章 p.28",
    "difficulty": "基礎"
  },
  {
    "id": "q-zimmerman-11",
    "chapterId": 12,
    "scholarId": "zimmerman",
    "topic": "學習日誌與自我檢核表在 SRL 教學之應用",
    "questionText": "在課堂教學中，教師引導學生使用「學習反思日誌（Learning Log）」與「自律學習檢核清單」，讓學生每天記錄目標完成度與策略心得。這種教學設計的主要目的為：",
    "options": [
      { "key": "A", "text": "搭建自律學習鷹架，引導學生外顯化自我監控與反思歷程，提升自主學習素養" },
      { "key": "B", "text": "作為期末扣分的懲戒工具" },
      { "key": "C", "text": "替教師省下備課講課的時間" },
      { "key": "D", "text": "檢查學生的國字筆劃工整度" }
    ],
    "correctAnswer": "A",
    "explanation": "學習日誌與檢核表能將原本隱蔽的後設認知與自律歷程外顯化，幫助學生養成計畫、監控、反思的終身自律習慣。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第12章 p.101",
    "difficulty": "中等"
  },
  {
    "id": "q-zimmerman-12",
    "chapterId": 3,
    "scholarId": "zimmerman",
    "topic": "齊瑪曼理論對當代 108 課綱自主學習之政策意涵",
    "questionText": "108 課綱在高中規劃每週「自主學習」時間，強調學生自我規劃探究計畫。齊瑪曼的自律學習模式給予現場教師最大的指導原則是：",
    "options": [
      { "key": "A", "text": "自主學習並非完全放任自流，教師初期必須提供目標設定、進度監控與反思策略的鷹架示範，逐步移轉學習責任" },
      { "key": "B", "text": "把自主學習時間完全拿來考數學小考" },
      { "key": "C", "text": "教師完全不准踏入自主學習教室" },
      { "key": "D", "text": "規定全體學生必須寫一模一樣的專題" }
    ],
    "correctAnswer": "A",
    "explanation": "自律能力需要經過社會認知鷹架引導與逐步放手。教師應指導學生學會「計畫、執行、反思」循環，而非放牛吃草。",
    "examSource": "112年新北市公立中等學校教甄試題",
    "handoutRef": "講義第3章 p.28",
    "difficulty": "中等"
  },

  # ----------------------------------------------------
  # 11. 弗萊威爾 (flavell) - 10 new
  # ----------------------------------------------------
  {
    "id": "q-flavell-3",
    "chapterId": 3,
    "scholarId": "flavell",
    "topic": "弗萊威爾後設認知（Metacognition）之三大知識向度",
    "questionText": "弗萊威爾（J. H. Flavell）於 1970 年代開創「後設認知（Metacognition）」研究，他將「後設認知知識」歸納為哪三大面向？",
    "options": [
      { "key": "A", "text": "人的知識（Person）、事的知識（Task）、策略的知識（Strategy）" },
      { "key": "B", "text": "過去的知識、現在的知識、未來的知識" },
      { "key": "C", "text": "感官知識、情緒知識、直覺知識" },
      { "key": "D", "text": "語文知識、數理知識、藝術知識" }
    ],
    "correctAnswer": "A",
    "explanation": "Flavell 後設認知知識三大向度：人（了解自己與他人的認知長處與弱點）、工作/事（了解任務難度與要求）、策略（了解各種策略何時及如何有效使用）。",
    "examSource": "112年教育部教師資格考試（學習者發展）",
    "handoutRef": "講義第3章 p.29",
    "difficulty": "基礎"
  },
  {
    "id": "q-flavell-4",
    "chapterId": 3,
    "scholarId": "flavell",
    "topic": "後設認知中「人的知識（Person Knowledge）」情境判讀",
    "questionText": "高中生小明清楚知道：「我自己在早晨頭腦最清醒，適合背誦英文單字；但我只要精神疲憊時，讀數學題目就特別容易粗心算錯。」小明的這種自我理解屬於弗萊威爾後設認知知識中的：",
    "options": [
      { "key": "A", "text": "人的變項/知識（Person knowledge）" },
      { "key": "B", "text": "工作變項/知識（Task knowledge）" },
      { "key": "C", "text": "策略變項/知識（Strategy knowledge）" },
      { "key": "D", "text": "環境刺激變項" }
    ],
    "correctAnswer": "A",
    "explanation": "人的知識（Person knowledge）指個體對人類心智運作特質的認識，特別是對「自己作為認知處理者」的優勢、劣勢、記憶容量與習慣的自我覺察。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第3章 p.29",
    "difficulty": "基礎"
  },
  {
    "id": "q-flavell-5",
    "chapterId": 3,
    "scholarId": "flavell",
    "topic": "後設認知中「工作的知識（Task Knowledge）」情境判讀",
    "questionText": "學生在考前研讀時判斷：「這份社會科講義充滿了大量抽象歷史概念與因果推理，難度遠高於普通的單字默寫，因此我必須花費兩倍時間並畫出心智圖才能掌握。」這屬於後設認知知識中的：",
    "options": [
      { "key": "A", "text": "工作的知識（Task knowledge）" },
      { "key": "B", "text": "人的知識（Person knowledge）" },
      { "key": "C", "text": "社會情意知識" },
      { "key": "D", "text": "潛意識直覺" }
    ],
    "correctAnswer": "A",
    "explanation": "工作的知識（Task knowledge）指個體對認知任務性質、難易度、教材組織結構及所需心智努力程度的評估與理解。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第3章 p.29",
    "difficulty": "中等"
  },
  {
    "id": "q-flavell-6",
    "chapterId": 3,
    "scholarId": "flavell",
    "topic": "後設認知中「策略的知識（Strategy Knowledge）」情境判讀",
    "questionText": "學生面對長文閱讀時心想：「如果我只想掌握大意，可以使用略讀（Skimming）；但若是要應付細節考題，我必須用精讀（Scanning）並在關鍵字下劃底線。」這屬於：",
    "options": [
      { "key": "A", "text": "策略的知識（Strategy knowledge）" },
      { "key": "B", "text": "行為增強知識" },
      { "key": "C", "text": "人的知識" },
      { "key": "D", "text": "機械記憶" }
    ],
    "correctAnswer": "A",
    "explanation": "策略的知識（Strategy knowledge）指了解各種認知與學習策略的特點，以及「在何種情境、為何、如何」使用特定策略才能達成目標的條件性知識。",
    "examSource": "109年新北市國小教甄試題",
    "handoutRef": "講義第3章 p.29",
    "difficulty": "基礎"
  },
  {
    "id": "q-flavell-7",
    "chapterId": 3,
    "scholarId": "flavell",
    "topic": "後設認知體驗（Metacognitive Experiences）之意涵",
    "questionText": "弗萊威爾指出，在認知活動進行期間，伴隨而生的有意識自覺感受或直覺體會（例如突然感到「這道題目很熟悉我一定算得出來」或「我剛剛讀過去好像完全沒進腦袋」），稱作：",
    "options": [
      { "key": "A", "text": "後設認知體驗（Metacognitive Experiences）" },
      { "key": "B", "text": "心流超覺狀態" },
      { "key": "C", "text": "知覺常模" },
      { "key": "D", "text": "感覺動作基模" }
    ],
    "correctAnswer": "A",
    "explanation": "後設認知體驗是認知歷程中發生的主觀知覺感受（如知曉感、困惑感、頓悟感），能即時觸發認知策略的修正或啟動。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第3章 p.29",
    "difficulty": "進階"
  },
  {
    "id": "q-flavell-8",
    "chapterId": 3,
    "scholarId": "flavell",
    "topic": "認知（Cognition）與後設認知（Metacognition）之本質界分",
    "questionText": "在教育心理學上，學者常用「認知是登山，後設認知是從高空俯瞰登山路線並調控腳步」來比喻。下列哪一項行為屬於「後設認知」而非單純的「認知」？",
    "options": [
      { "key": "A", "text": "學生在心裡檢驗自己剛剛背書的記憶方法是否有效，並決定改用聯想法重新背誦" },
      { "key": "B", "text": "用眼睛看課本上的英文字母" },
      { "key": "C", "text": "用嘴巴朗讀課文第一段" },
      { "key": "D", "text": "用鉛筆在考卷上寫下答案數字 10" }
    ],
    "correctAnswer": "A",
    "explanation": "認知是執行心智任務（讀、寫、算）；後設認知是「對認知的認知（思維的思維）」，負責監督、評價與調控認知任務的有效性。",
    "examSource": "112年高雄市教育專業科目試題",
    "handoutRef": "講義第3章 p.29",
    "difficulty": "中等"
  },
  {
    "id": "q-flavell-9",
    "chapterId": 3,
    "scholarId": "flavell",
    "topic": "放聲思考法（Think-Aloud）在後設認知教學之應用",
    "questionText": "教師在教導數學複雜應用題時，刻意將自己解題時大腦中的內部對話與決策思路（「我現在先看關鍵字，發現條件不足，那我該先求出X...」）逐一開口說出來示範。這種教學策略稱為：",
    "options": [
      { "key": "A", "text": "放聲思考教學法（Think-Aloud Protocol）" },
      { "key": "B", "text": "機械講述法" },
      { "key": "C", "text": "被動暗示法" },
      { "key": "D", "text": "精熟默寫法" }
    ],
    "correctAnswer": "A",
    "explanation": "放聲思考法能將教師看不見的後設認知監控與策略決策歷程具體示範給學生看，是培養學生後設認知知能的權威教學工具。",
    "examSource": "111年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第3章 p.29",
    "difficulty": "基礎"
  },
  {
    "id": "q-flavell-10",
    "chapterId": 3,
    "scholarId": "flavell",
    "topic": "心智理論（Theory of Mind, ToM）之研究先驅",
    "questionText": "弗萊威爾在發展心理學上另一大卓著貢獻是探討幼兒的「心智理論（Theory of Mind）」。心智理論的核心發展指標是指幼兒能夠：",
    "options": [
      { "key": "A", "text": "理解他人擁有與自己不同的信念、願望、意圖與感受（包含理解錯誤信念 False Belief）" },
      { "key": "B", "text": "背誦九九乘法表" },
      { "key": "C", "text": "精確分辨紅黃藍三原色" },
      { "key": "D", "text": "雙手能夠靈活抓握湯匙" }
    ],
    "correctAnswer": "A",
    "explanation": "心智理論指幼兒在約 4 歲時發展出能推論他人心理狀態的能力，明白別人的想法可能與客觀事實不符（錯誤信念），打破自我中心主義。",
    "examSource": "110年臺北市立中等學校教甄試題",
    "handoutRef": "講義第3章 p.29",
    "difficulty": "進階"
  },
  {
    "id": "q-flavell-11",
    "chapterId": 3,
    "scholarId": "flavell",
    "topic": "後設記憶（Metamemory）在學童學習之發展軌跡",
    "questionText": "弗萊威爾研究發現，幼兒園學童在記憶測試時常高估自己的記憶能力（例如自信滿滿認為自己能一口氣記住 20 張圖卡，實際只能記 3 張）；而小學三年級學童則能準確預測。這顯示了學童何種能力的成熟？",
    "options": [
      { "key": "A", "text": "後設記憶能力（Metamemory）" },
      { "key": "B", "text": "感官知覺敏銳度" },
      { "key": "C", "text": "肌肉協調耐力" },
      { "key": "D", "text": "古典制約反應率" }
    ],
    "correctAnswer": "A",
    "explanation": "後設記憶是後設認知的核心領域，指個人對自身記憶系統容量、遺忘速率及記憶策略成效的自我覺察與準確估計能力。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第3章 p.29",
    "difficulty": "中等"
  },
  {
    "id": "q-flavell-12",
    "chapterId": 3,
    "scholarId": "flavell",
    "topic": "閱讀理解監控策略（Comprehension Monitoring）",
    "questionText": "在閱讀教學中，後設認知良好的優秀讀者在閱讀遇到生難字詞或邏輯卡關時，最常採取的調節策略為何？",
    "options": [
      { "key": "A", "text": "放慢閱讀速度、回讀前文（Rereading）、參照上下文脈絡推敲意涵，或主動查閱字典" },
      { "key": "B", "text": "假裝沒看見直接把該頁撕掉" },
      { "key": "C", "text": "直接停止閱讀並把書扔掉" },
      { "key": "D", "text": "加速用一秒鐘掃過十頁" }
    ],
    "correctAnswer": "A",
    "explanation": "理解監控（Comprehension monitoring）指讀者隨時檢測理解狀態，發現盲點時立即採取修補策略（如回讀、減速、標記），是閱讀素養的關鍵能力。",
    "examSource": "108年新北市公立國小教甄試題",
    "handoutRef": "講義第3章 p.29",
    "difficulty": "基礎"
  },

  # ----------------------------------------------------
  # 12. 皮亞傑 (piaget) - 8 new
  # ----------------------------------------------------
  {
    "id": "q-piaget-6",
    "chapterId": 4,
    "scholarId": "piaget",
    "topic": "同化（Assimilation）與調適（Accommodation）之核心辨析",
    "questionText": "幼兒原本的基模認為「有四隻腳且會汪汪叫的動物叫作狗」。當他第一次在公園看到貓咪時也喊「大狗」，這屬於（甲）；隨後媽媽告訴他「這是貓咪，它會喵喵叫而且會爬樹」，幼兒調整修改了自己的基模建立「貓」的新概念，這屬於（乙）。甲與乙依序為：",
    "options": [
      { "key": "A", "text": "甲：同化（Assimilation）；乙：調適（Accommodation）" },
      { "key": "B", "text": "甲：調適；乙：同化" },
      { "key": "C", "text": "甲：平衡；乙：失衡" },
      { "key": "D", "text": "甲：反射；乙：制約" }
    ],
    "correctAnswer": "A",
    "explanation": "同化是以既有基模吸納新經驗（把貓叫狗）；調適是當既有基模無法合理解釋新經驗時，修改既有基模或建立新基模（修改觀念認識貓）。",
    "examSource": "112年教育部教師資格考試（學習者發展）",
    "handoutRef": "講義第4章 p.31-32",
    "difficulty": "基礎"
  },
  {
    "id": "q-piaget-7",
    "chapterId": 4,
    "scholarId": "piaget",
    "topic": "感覺動作期之物體恆存性（Object Permanence）",
    "questionText": "皮亞傑指出，在感覺動作期（0-2歲）後期，嬰兒發展出劃時代的認知里程碑，即即使玩具被布巾遮蓋看不見，嬰兒依然知道玩具依然存在並會動手掀開布巾尋找。這項能力稱為：",
    "options": [
      { "key": "A", "text": "物體恆存概念（Object Permanence）" },
      { "key": "B", "text": "守恆概念（Conservation）" },
      { "key": "C", "text": "去集中化（Decentration）" },
      { "key": "D", "text": "自我中心性（Egocentrism）" }
    ],
    "correctAnswer": "A",
    "explanation": "物體恆存是指了解實體即使脫離眼前的知覺範圍，依然在客觀世界持續存在，標誌著內部心智表徵能力的開端。",
    "examSource": "111年臺北市幼兒園教師甄試教育科目",
    "handoutRef": "講義第4章 p.32",
    "difficulty": "基礎"
  },
  {
    "id": "q-piaget-8",
    "chapterId": 4,
    "scholarId": "piaget",
    "topic": "前運思期之三山實驗與自我中心主義（Egocentrism）",
    "questionText": "在皮亞傑著名的「三山實驗（Three Mountains Task）」中，4 歲幼兒看著三座山模型，當被要求挑選坐在對面娃娃所看到的山景視角照片時，幼兒總是挑選出「自己當前視角所看到的照片」。此實驗證實前運思期兒童具有何種認知特質？",
    "options": [
      { "key": "A", "text": "自我中心主義（Egocentrism / 無法從他人視角思考）" },
      { "key": "B", "text": "泛靈論（Animism）" },
      { "key": "C", "text": "可逆性思維（Reversibility）" },
      { "key": "D", "text": "符號表徵失調" }
    ],
    "correctAnswer": "A",
    "explanation": "前運思期的自我中心主義並非道德上的自私，而是認知上的限制：幼兒以為所有人看到的、想到的都跟自己當下一模一樣，欠缺觀點取替能力。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第4章 p.32",
    "difficulty": "中等"
  },
  {
    "id": "q-piaget-9",
    "chapterId": 4,
    "scholarId": "piaget",
    "topic": "前運思期之泛靈論（Animism）與人工物觀點",
    "questionText": "幼兒跌倒撞到桌腳大哭，阿嬤拍打桌子說「桌子壞壞，我打它」，幼兒立刻破涕為笑；幼兒常說「太陽公公下山去睡覺了」。這種將無生命物體賦予意識與情感的認知現象稱為：",
    "options": [
      { "key": "A", "text": "泛靈論（Animism）" },
      { "key": "B", "text": "守恆概念" },
      { "key": "C", "text": "抽象推論" },
      { "key": "D", "text": "平衡化" }
    ],
    "correctAnswer": "A",
    "explanation": "泛靈論（Animism）是前運思期兒童典型思維特徵，認為天地萬物、玩具家具皆具有生命、知覺、感覺與意圖。",
    "examSource": "109年新北市幼兒園教師甄試教育學科",
    "handoutRef": "講義第4章 p.32",
    "difficulty": "基礎"
  },
  {
    "id": "q-piaget-10",
    "chapterId": 5,
    "scholarId": "piaget",
    "topic": "具體運思期守恆概念（Conservation）之三大認知理由",
    "questionText": "在水容量守恆實驗中，將矮胖杯的水倒入細長杯，8 歲具體運思期學童能斷言兩杯水一樣多。依據皮亞傑理論，學童此時能展現守恆判斷的三大邏輯運思理由包括：",
    "options": [
      { "key": "A", "text": "可逆性（倒回去一樣多）、互補/補償性（杯子變高但變瘦）、同一性（沒有加水也沒有倒掉水）" },
      { "key": "B", "text": "直覺性、主觀性、偶然性" },
      { "key": "C", "text": "感覺動作性、模仿性、泛靈性" },
      { "key": "D", "text": "假設性、演繹性、抽象性" }
    ],
    "correctAnswer": "A",
    "explanation": "守恆邏輯三大基石：同一性（Identity：物質沒增沒減）、可逆性（Reversibility：倒回原樣高度相同）、補償性/互補性（Compensation：高度增加被寬度變窄抵銷）。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第5章 p.41-42",
    "difficulty": "中等"
  },
  {
    "id": "q-piaget-11",
    "chapterId": 5,
    "scholarId": "piaget",
    "topic": "具體運思期之類包含（Class Inclusion）能力",
    "questionText": "桌上擺放 8 朵紅花與 2 朵白花。教師問：「桌上的紅花比較多，還是花比較多？」6 歲前運思期兒童回答「紅花比較多」；而 9 歲具體運思期兒童則能正確回答「花比較多」。這顯示後者具備了：",
    "options": [
      { "key": "A", "text": "類包含能力（Class Inclusion / 掌握整體與部分關係）" },
      { "key": "B", "text": "假設演繹思維" },
      { "key": "C", "text": "自我中心語言" },
      { "key": "D", "text": "鐘擺實驗驗證力" }
    ],
    "correctAnswer": "A",
    "explanation": "類包含指能同時思考子類（紅花）與母類（花整體）之包含關係。前運思期因集中注意（Centration）無法同時比較整體與部分，具體運思期則能去集中化而順利解答。",
    "examSource": "112年桃園市國小教師甄選教育專業試題",
    "handoutRef": "講義第5章 p.42",
    "difficulty": "中等"
  },
  {
    "id": "q-piaget-12",
    "chapterId": 5,
    "scholarId": "piaget",
    "topic": "形式運思期（Formal Operational）之假設演繹推理",
    "questionText": "在皮亞傑著名的「鐘擺實驗（Pendulum Problem）」中，受試者需探索何種因素（繩長、擺重、高度、推力）決定鐘擺擺動週期。13 歲形式運思期的學生通常會採取何種科學解題策略？",
    "options": [
      { "key": "A", "text": "提出系統性假設，並採取「控制變因法（一次只改變單一變因，固定其餘變因）」進行邏輯驗證" },
      { "key": "B", "text": "隨意亂拉亂放繩子碰運氣" },
      { "key": "C", "text": "堅稱鐘擺是活的會自己決定跑多快" },
      { "key": "D", "text": "拒絕進行任何操作" }
    ],
    "correctAnswer": "A",
    "explanation": "形式運思期（11歲以上）具備「假設演繹推理（Hypothetical-deductive reasoning）」與命題思維能力，能有系統地控制變因，如同科學家般抽象推論。",
    "examSource": "111年教育部教師資格考試（學習者發展）",
    "handoutRef": "講義第5章 p.42",
    "difficulty": "中等"
  },
  {
    "id": "q-piaget-13",
    "chapterId": 4,
    "scholarId": "piaget",
    "topic": "平衡化（Equilibration）與認知衝突之教學啟發",
    "questionText": "皮亞傑認為心智成長的核心動力是「平衡化（Equilibration）」。在課堂教學中，教師欲引導學生深化思考、走出原先的迷思觀念，最有效的教學策略為：",
    "options": [
      { "key": "A", "text": "提供反例或衝突事件引發學生的「認知衝突（Cognitive Conflict / 失衡）」，迫使其啟動調適歷程以重構更高層次的平衡" },
      { "key": "B", "text": "直接要求學生背誦教師給的唯一標準答案" },
      { "key": "C", "text": "避免讓學生遭遇任何不會的問題以維持愉快" },
      { "key": "D", "text": "考試全部出送分題" }
    ],
    "correctAnswer": "A",
    "explanation": "由平衡 → 認知失衡（遭遇矛盾）→ 透過同化與調適重組基模 → 達到新平衡，是心智發展的動力樞紐。教學應善用認知衝突促進思維躍升。",
    "examSource": "110年高雄市國小教甄試題",
    "handoutRef": "講義第4章 p.31",
    "difficulty": "基礎"
  }
]
