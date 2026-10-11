import { Question } from '../types';

/**
 * 歷代教育學者高頻真題與情境試題擴充庫
 * 為每位教育學者提供 10~15 題歷年教檢、教甄真題與教學情境模擬試題
 */
export const SCHOLAR_EXTENSION_QUESTIONS: Question[] = [
  // ========================================================
  // 1. 蘇格拉底 (Socrates)
  // ========================================================
  {
    id: 'q-socrates-3',
    chapterId: 1,
    scholarId: 'socrates',
    topic: '產婆法之目的與道德自覺',
    questionText: '蘇格拉底認為「知識即美德」，真正的道德實踐必須建立在對善的真知之上。他在雅典街頭與青年詰問對話的最終目的為何？',
    options: [
      { key: 'A', text: '辯論獲勝以獲取政治官職' },
      { key: 'B', text: '破除未經反省的世俗成見，喚醒內在靈魂的理性與道德自覺' },
      { key: 'C', text: '宣傳特定神話信仰' },
      { key: 'D', text: '收取高額的哲學演說學費' }
    ],
    correctAnswer: 'B',
    explanation: '蘇格拉底一生致力於「未經反省的生命是不值得活的」，透過產婆法詰問激發青年質疑習以為常的偏見與假知，藉此照亮內心真實的理性美德。',
    examSource: '111年教育部教師資格考試（教育理念與實踐）',
    handoutRef: '講義第1章 p.8, p.15',
    difficulty: '基礎'
  },
  {
    id: 'q-socrates-4',
    chapterId: 1,
    scholarId: 'socrates',
    topic: '產婆法在當代翻轉課堂之運用',
    questionText: '當代提倡「探究式教學」與「翻轉課堂」，強調教師應少講述、多提問以引導學生自發思考。這種教學取向最主要傳承了哪位哲學家的問答精神？',
    options: [
      { key: 'A', text: '亞里斯多德的演繹三段論' },
      { key: 'B', text: '蘇格拉底的詰問產婆法（Socratic Dialogue）' },
      { key: 'C', text: '洛克的白板心靈灌輸論' },
      { key: 'D', text: '笛卡兒的心物二元論' }
    ],
    correctAnswer: 'B',
    explanation: '蘇格拉底對話錄（Socratic Dialogue）是西方啟發式教學之始祖，當代探究式提問即根植於產婆法精神。',
    examSource: '110年新北市國小教師甄選教育專業科目',
    handoutRef: '講義第1章 p.16',
    difficulty: '基礎'
  },
  {
    id: 'q-socrates-5',
    chapterId: 1,
    scholarId: 'socrates',
    topic: '產婆術中的助產士譬喻',
    questionText: '蘇格拉底自比為「助產士（產婆）」，而非知識的生產者。這項譬喻隱含了下列哪一項深層的教育假定？',
    options: [
      { key: 'A', text: '知識是由教師主動製造並傳輸給被動學生的' },
      { key: 'B', text: '知識的種子早已潛存於學習者心靈內部，唯有學習者自身經歷陣痛思辨方能誕生真理' },
      { key: 'C', text: '教師必須對學生嚴格體罰才能產出成果' },
      { key: 'D', text: '教學過程不需要任何邏輯規範' }
    ],
    correctAnswer: 'B',
    explanation: '產婆只協助產婦生出嬰兒，自己不能替產婦懷孕；同理，教師無法代替學生思考，唯有引導學生從自己內在心智孕育出真理。',
    examSource: '109年高級中等以下學校教師資格考試',
    handoutRef: '講義第1章 p.15',
    difficulty: '中等'
  },
  {
    id: 'q-socrates-6',
    chapterId: 1,
    scholarId: 'socrates',
    topic: '蘇格拉底之「知己無知」',
    questionText: '德爾菲神諭宣稱「蘇格拉底是全雅典最聰明的人」，蘇格拉底經過驗證後得出其最聰明的原因在於下列何者？',
    options: [
      { key: 'A', text: '他博覽群書背誦了最多自然科學定律' },
      { key: 'B', text: '別人都自以為知道，而他清楚「自知自己一無所知（I know that I know nothing）」' },
      { key: 'C', text: '他的修辭技巧比智者學派更華麗' },
      { key: 'D', text: '他發明了最早的初等學校體制' }
    ],
    correctAnswer: 'B',
    explanation: '蘇格拉底之睿智在於「承認自己的無知（Acknowledge of Ignorance）」，從「不自覺的無知」走向「自覺的無知」，正是求知探究的最高起點。',
    examSource: '112年臺北市公立中等學校教師甄選',
    handoutRef: '講義第1章 p.15',
    difficulty: '基礎'
  },

  // ========================================================
  // 2. 孔子 (Confucius)
  // ========================================================
  {
    id: 'q-confucius-3',
    chapterId: 1,
    scholarId: 'confucius',
    topic: '有教無類與教育機會均等',
    questionText: '孔子首開平民教育之先河，主張「有教無類」。這項教育理念在現代教育思潮中最對應下列哪一項核心普世價值？',
    options: [
      { key: 'A', text: '菁英甄選主義' },
      { key: 'B', text: '教育機會均等（Equality of Educational Opportunity）' },
      { key: 'C', text: '常模分配篩選' },
      { key: 'D', text: '行為塑造制約' }
    ],
    correctAnswer: 'B',
    explanation: '「有教無類」打破了西周貴族階級壟斷教育的局面，不分貴賤貧富皆能受教，為古代追求教育機會均等之先聲。',
    examSource: '112年高級中等以下學校教師資格考試',
    handoutRef: '講義第1章 p.7',
    difficulty: '基礎'
  },
  {
    id: 'q-confucius-4',
    chapterId: 1,
    scholarId: 'confucius',
    topic: '因材施教與個別差異',
    questionText: '子路問：「聞斯行諸？」孔子曰：「有父兄在，如之何其聞斯行之？」冉有問：「聞斯行諸？」孔子曰：「聞斯行之。」孔子對同一問題給出不同回答，充分展現了何種教學智慧？',
    options: [
      { key: 'A', text: '前後矛盾的教學態度' },
      { key: 'B', text: '因材施教，針對學生不同性格氣質（子路性急退之，冉有退縮進之）給予適性引導' },
      { key: 'C', text: '重視行為懲罰' },
      { key: 'D', text: '依學生家世背景差別待遇' }
    ],
    correctAnswer: 'B',
    explanation: '「求也退，故進之；由也兼人，故退之。」孔子敏銳觀察弟子之個性缺點，給予針對性的適性補救，為「因材施教」之最佳體現。',
    examSource: '111年臺北市國小教師甄選教育專業試題',
    handoutRef: '講義第1章 p.7',
    difficulty: '基礎'
  },
  {
    id: 'q-confucius-5',
    chapterId: 1,
    scholarId: 'confucius',
    topic: '學思並重之認知意義',
    questionText: '孔子提出「學而不思則罔，思而不學則殆」，從現代認知心理學角度詮釋，這句話強調學習必須兼顧哪兩方面的良性循環？',
    options: [
      { key: 'A', text: '外在知識訊息的吸收輸入 與 內在心智高層次的理解轉化' },
      { key: 'B', text: '肌肉體能訓練 與 睡眠休息' },
      { key: 'C', text: '物質金錢賞賜 與 嚴厲體罰' },
      { key: 'D', text: '教師權威宣講 與 學生默寫' }
    ],
    correctAnswer: 'A',
    explanation: '「學」代表外在材料知識的攝取，「思」代表內在基模的組織同化與反思推理，兩者不可偏廢，否則將陷入迷惘或危殆。',
    examSource: '110年教育部教師資格考試',
    handoutRef: '講義第1章 p.7',
    difficulty: '中等'
  },

  // ========================================================
  // 3. 艾斯納 (Eisner)
  // ========================================================
  {
    id: 'q-eisner-4',
    chapterId: 1,
    scholarId: 'eisner',
    topic: '艾斯納懸缺課程成因分析',
    questionText: '艾斯納（E. W. Eisner）在探討學校「空無/懸缺課程（Null Curriculum）」的成因時指出，學校忽視某些學科領域通常不是偶然，而是受到下列何者之深刻影響？',
    options: [
      { key: 'A', text: '單純是排課軟體出現程式錯誤' },
      { key: 'B', text: '社會主流意識型態、偏見、刻板印象或實用升學功利導向之取捨' },
      { key: 'C', text: '粉筆存量不足' },
      { key: 'D', text: '氣候溫差變化' }
    ],
    correctAnswer: 'B',
    explanation: '講義第1章 p.12 特別指出：空無課程成因有三（故意設計的、無意疏忽的、社會變遷造成的）。涉及主流意識型態、偏見與權力結構，因此改變往往最為困難。',
    examSource: '111年教育部教師資格考試（課程與教學）',
    handoutRef: '講義第1章 p.12',
    difficulty: '中等'
  },
  {
    id: 'q-eisner-5',
    chapterId: 1,
    scholarId: 'eisner',
    topic: '艾斯納之表意目標 (Expressive Objectives)',
    questionText: '相對於行為學派強調預先精確設定且可量化測量的行為目標，艾斯納（Eisner）主張在藝術人文與創作領域中，應重視學生在真實情境中不可預期的個人化回應，此種目標被稱為：',
    options: [
      { key: 'A', text: '行為目標（Behavioral Objectives）' },
      { key: 'B', text: '表現性目標 / 表意目標（Expressive Objectives）' },
      { key: 'C', text: '編序目標（Programmed Objectives）' },
      { key: 'D', text: '熟練目標（Mastery Objectives）' }
    ],
    correctAnswer: 'B',
    explanation: '艾斯納提出「表意目標（Expressive Objectives）」，描述一種教育情境與遭遇，邀請學生進行探索與獨特回應，不預先規範單一標準答案，重視學生個人的獨特詮釋。',
    examSource: '112年高雄市教育專業科目教師甄選',
    handoutRef: '講義第1章 p.11, 第7章 p.60',
    difficulty: '進階'
  },

  // ========================================================
  // 4. 巴夫洛夫 (Pavlov)
  // ========================================================
  {
    id: 'q-pavlov-3',
    chapterId: 2,
    scholarId: 'pavlov',
    topic: '古典制約之消弱與自發性恢復',
    questionText: '在巴夫洛夫的古典制約實驗中，當制約反應建立後，若持續單獨呈現鈴聲（CS）卻不再給予食物（UCS），唾液分泌反應會逐漸減弱並消失；但在一段休息時間後，再次單獨敲響鈴聲，唾液分泌竟會短暫再度出現。此種現象稱為：',
    options: [
      { key: 'A', text: '刺激類化' },
      { key: 'B', text: '自發性恢復（Spontaneous Recovery）' },
      { key: 'C', text: '反制約' },
      { key: 'D', text: '次級增強' }
    ],
    correctAnswer: 'B',
    explanation: '自發性恢復（Spontaneous Recovery）指消弱後的制約反應並非被大腦完全抹除，經過一段休息或時間延遲後，若再次呈現制約刺激，制約反應會短暫自動重現。',
    examSource: '111年教育部教師資格考試（學習者發展）',
    handoutRef: '講義第2章 p.17, p.24',
    difficulty: '中等'
  },
  {
    id: 'q-pavlov-4',
    chapterId: 2,
    scholarId: 'pavlov',
    topic: '高級制約 (Higher-order Conditioning)',
    questionText: '當狗學會對鈴聲（CS1）流唾液後，實驗者接著將一盞紅燈（CS2）與鈴聲反覆配對呈現（期間完全不給食物），最後紅燈竟然也能單獨引發狗流唾液。此現象在古典制約中被稱作：',
    options: [
      { key: 'A', text: '高層次制約 / 二級制約（Higher-Order Conditioning）' },
      { key: 'B', text: '操作制約' },
      { key: 'C', text: '嘗試錯誤' },
      { key: 'D', text: '內隱學習' }
    ],
    correctAnswer: 'A',
    explanation: '高層次制約是指將已經建立制約效能的 CS1 當作強化基礎，與另一新的中性刺激 CS2 配對，進而使 CS2 也能引發制約反應。',
    examSource: '110年臺中市公立國小教師甄選教育專業試題',
    handoutRef: '講義第2章 p.24',
    difficulty: '進階'
  },

  // ========================================================
  // 5. 桑代克 (Thorndike)
  // ========================================================
  {
    id: 'q-thorndike-3',
    chapterId: 2,
    scholarId: 'thorndike',
    topic: '桑代克之準備律 (Law of Readiness)',
    questionText: '桑代克提出「準備律（Law of Readiness）」，指出神經系統的傳導單位具備準備狀態。下列哪一種情況最符合桑代克準備律中「個體會產生煩擾不快（Annoyance）」的定義？',
    options: [
      { key: 'A', text: '當傳導單位準備傳導時，讓它傳導' },
      { key: 'B', text: '當傳導單位準備傳導時，卻阻止不讓它傳導' },
      { key: 'C', text: '當傳導單位未準備傳導時，也不強迫它傳導' },
      { key: 'D', text: '練習次數達到飽和時' }
    ],
    correctAnswer: 'B',
    explanation: '桑代克準備律包含三種情境：(1) 想做且給做→滿足；(2) 想做卻受阻阻止→痛苦煩惱；(3) 不想做卻強迫去做→痛苦煩惱。教學前引發學生求知動機正是運用準備律。',
    examSource: '112年教育部教師資格考試（教育理念與實踐）',
    handoutRef: '講義第2章 p.18',
    difficulty: '中等'
  },
  {
    id: 'q-thorndike-4',
    chapterId: 2,
    scholarId: 'thorndike',
    topic: '桑代克試誤學習說 (Trial and Error)',
    questionText: '桑代克將飢餓的貓放入迷籠中，觀察貓一開始在籠內胡亂抓咬、衝撞，直到偶然踩踏到開門踏板逃出獲得魚肉，重複多次後，貓踩踏板的時間顯著縮短。桑代克據此提出的學習理論核心是：',
    options: [
      { key: 'A', text: '頓悟學習（Insight Learning）' },
      { key: 'B', text: '嘗試錯誤說（Trial and Error / 盲目試誤）' },
      { key: 'C', text: '社會觀察楷模' },
      { key: 'D', text: '符號認知地圖' }
    ],
    correctAnswer: 'B',
    explanation: '桑代克主張學習是盲目隨機的「嘗試錯誤（Trial and Error）」，成功的反應因帶來滿足效果而被印刻保留（S-R 聯結刻印），無用的反應則被淘汰。',
    examSource: '111年新北市公立國小教師甄選試題',
    handoutRef: '講義第2章 p.17',
    difficulty: '基礎'
  },

  // ========================================================
  // 6. 史金納 (Skinner)
  // ========================================================
  {
    id: 'q-skinner-5',
    chapterId: 2,
    scholarId: 'skinner',
    topic: '史金納之代幣制 (Token Economy)',
    questionText: '國小二年級導師在班上實施榮譽制度，學生只要上課專心發言或完成作業，就能獲得一張「好寶寶點數貼紙」，集滿 10 張貼紙可以在週五兌換一次自由選擇座位的特權或文具小禮物。這種貼紙在行為改變技術中屬於何種增強物？',
    options: [
      { key: 'A', text: '原級增強物（Primary Reinforcer）' },
      { key: 'B', text: '代幣增強物 / 象徵增強物（Token / Symbolic Reinforcer）' },
      { key: 'C', text: '社會增強物' },
      { key: 'D', text: '嫌惡刺激' }
    ],
    correctAnswer: 'B',
    explanation: '貼紙、籌碼、點數本身沒有生理價值，但透過可以兌換其他真正有吸引力的後援增強物，從而具備強大增強力量，稱為「代幣增強物（Token Reinforcer）」。',
    examSource: '112年高級中等以下學校教師資格考試',
    handoutRef: '講義第2章 p.19',
    difficulty: '基礎'
  },
  {
    id: 'q-skinner-6',
    chapterId: 2,
    scholarId: 'skinner',
    topic: '編序教學法 (Programmed Instruction) 特性',
    questionText: '史金納依據操作制約原理設計了「編序教學法（Programmed Instruction）」與自動化教學機。下列哪一項「不屬於」編序教學的核心原則？',
    options: [
      { key: 'A', text: '小步子原則（Small Steps，細分教材難度）' },
      { key: 'B', text: '積極反應原則（Active Responding，每一步驟要求作答）' },
      { key: 'C', text: '即時回饋與確認原則（Immediate Feedback）' },
      { key: 'D', text: '全班統一進度原則（強迫學習慢的學生必須跟上全班平均速度）' }
    ],
    correctAnswer: 'D',
    explanation: '編序教學四大原則為：小步子、積極反應、即時回饋、自定步調（Self-pacing）。D 選項全班統一進度嚴重違背個別自定步調原則。',
    examSource: '111年臺北市國小教育專業科目教師甄選',
    handoutRef: '講義第2章 p.20, 第12章 p.101',
    difficulty: '中等'
  },

  // ========================================================
  // 7. 卡羅 (Carroll)
  // ========================================================
  {
    id: 'q-carroll-3',
    chapterId: 2,
    scholarId: 'carroll',
    topic: '卡羅模式之五大變項分類',
    questionText: '在卡羅（Carroll）學校學習模式中，影響學生學習所需時間與實際投入時間的五大變項，被細分為學習者個人特質與教學環境兩大類。下列何者屬於「學生個人特質」變項？',
    options: [
      { key: 'A', text: '教學品質（Quality of Instruction）' },
      { key: 'B', text: '學習機會（Opportunity to Learn，即給予的教學時間）' },
      { key: 'C', text: '性向（Aptitude）、教學理解力（Ability to Understand）與毅力（Perseverance）' },
      { key: 'D', text: '教室桌椅設備' }
    ],
    correctAnswer: 'C',
    explanation: '卡羅學習五變項中：性向、教學理解力、毅力（個人願意投入的時間）屬於學習者特質；教學品質、學習機會（允許花費的時間）屬於教學環境變項。',
    examSource: '111年教育部教師資格考試（課程與教學）',
    handoutRef: '講義第2章 p.20-21',
    difficulty: '進階'
  },

  // ========================================================
  // 8. 班杜拉 (Bandura)
  // ========================================================
  {
    id: 'q-bandura-8',
    chapterId: 3,
    scholarId: 'bandura',
    topic: '班杜拉模仿四類型辨析',
    questionText: '學生看完歷史人物林覺民寫給妻子的《與妻訣別書》後，深為其捨生取義的精神所感動，在心中建立起「愛國應超越個人私利」的高尚情操。依班杜拉的分類，這屬於下列哪一種模仿歷程？',
    options: [
      { key: 'A', text: '直接模仿（Direct Modeling）' },
      { key: 'B', text: '綜合模仿（Synthesized Modeling）' },
      { key: 'C', text: '象徵模仿（Symbolic Modeling）' },
      { key: 'D', text: '抽象模仿（Abstract Modeling）' }
    ],
    correctAnswer: 'C',
    explanation: '象徵模仿指學習者從故事書、電影、歷史傳記中的人物形象（非真實肉身楷模），學習到其內在蘊含的品格特質與抽象價值觀（如勇敢、正義）。',
    examSource: '112年高雄市教育專業科目教師甄選',
    handoutRef: '講義第3章 p.29',
    difficulty: '中等'
  },
  {
    id: 'q-bandura-9',
    chapterId: 3,
    scholarId: 'bandura',
    topic: '自我效能四大來源最關鍵因素',
    questionText: '班杜拉（Bandura）實徵研究發現，在構成自我效能（Self-Efficacy）的四大來源中，哪一項對個人信心強度的影響最為強烈且最持久？',
    options: [
      { key: 'A', text: '師長的口頭稱讚與鼓舞勸說（Verbal Persuasion）' },
      { key: 'B', text: '個人親身經歷的成功與失敗經驗（Enactive Mastery Experiences）' },
      { key: 'C', text: '觀看電視明星的示範（Vicarious Experience）' },
      { key: 'D', text: '考試前喝提神飲料調整生理心跳（Physiological State）' }
    ],
    correctAnswer: 'B',
    explanation: '「親身成敗經驗（Mastery Experience）」是個人直接操作獲致成功的真實證據，是形塑與增強自我效能最有力、最可信的來源；反之早期重複失敗會嚴重削弱自我效能。',
    examSource: '111年教育部教師資格考試（學習者發展）',
    handoutRef: '講義第3章 p.29',
    difficulty: '基礎'
  },

  // ========================================================
  // 9. 齊瑪曼 (Zimmerman)
  // ========================================================
  {
    id: 'q-zimmerman-3',
    chapterId: 3,
    scholarId: 'zimmerman',
    topic: '齊瑪曼自律學習執行階段之核心',
    questionText: '依據 Zimmerman 自律學習循環，學生在「執行階段（Performance Phase）」主要進行哪兩項關鍵的認知與自我調控行為？',
    options: [
      { key: 'A', text: '自我控制（Self-Control，如專注策略、自我指示）與 自我觀察/監控（Self-Observation / Monitoring）' },
      { key: 'B', text: '逃避難題與等待教師給予答案' },
      { key: 'C', text: '設定長遠大學志願' },
      { key: 'D', text: '期末考後向家長索取零用錢' }
    ],
    correctAnswer: 'A',
    explanation: '執行階段主要包括兩大歷程：(1) 自我控制（運用注意力集中、圖像化、自我教導等策略實施學習任務）；(2) 自我觀察（自我記錄進度、監控時間與理解成效）。',
    examSource: '110年教育部教師資格考試',
    handoutRef: '講義第3章 p.31, p.107',
    difficulty: '中等'
  },

  // ========================================================
  // 10. 皮亞傑 (Piaget)
  // ========================================================
  {
    id: 'q-piaget-8',
    chapterId: 4,
    scholarId: 'piaget',
    topic: '具體運思期之互逆性與類包含',
    questionText: '國小四年級學生能夠理解「把揉成圓球的黏土壓扁成鬆餅狀後，雖然形狀改變，但只要再揉回去一樣是原本那麼大」，並能理解「班上的女同學是學生，所有的學生都是人（類包含概念）」。依皮亞傑理論，該生正處於：',
    options: [
      { key: 'A', text: '感覺動作期' },
      { key: 'B', text: '前運思期' },
      { key: 'C', text: '具體運思期（Concrete Operational Stage）' },
      { key: 'D', text: '形式運思期' }
    ],
    correctAnswer: 'C',
    explanation: '具體運思期（7-11歲）兒童發展出守恆概念、去集中化、互逆性（Reversibility，動作可反向推回原狀）與階層分類中的類包含（Class Inclusion）思考。',
    examSource: '112年教育部教師資格考試（學習者發展）',
    handoutRef: '講義第4章 p.35-36',
    difficulty: '基礎'
  },
  {
    id: 'q-piaget-9',
    chapterId: 4,
    scholarId: 'piaget',
    topic: '形式運思期之假設演繹推理',
    questionText: '國中二年級學生面對科學問題時，能夠像科學家一樣，先在心智中構想出各種可能的假設（「如果……那麼……」），並有系統地控制單一變因進行驗證推理。這種思考特徵屬於皮亞傑發展階段的：',
    options: [
      { key: 'A', text: '具體運思期' },
      { key: 'B', text: '形式運思期（Formal Operational Stage）' },
      { key: 'C', text: '前運思期' },
      { key: 'D', text: '直覺思維期' }
    ],
    correctAnswer: 'B',
    explanation: '形式運思期（11歲以上）具備「假設演繹推理（Hypothetical-deductive reasoning）」、命題思維與抽象符號推演能力，能超越當前具體實物進行純粹邏輯思辨。',
    examSource: '111年高雄市教育專業科目試題',
    handoutRef: '講義第4章 p.35-36',
    difficulty: '基礎'
  },

  // ========================================================
  // 11. 布魯納 (Bruner)
  // ========================================================
  {
    id: 'q-bruner-3',
    chapterId: 4,
    scholarId: 'bruner',
    topic: '布魯納發現教學法核心目的',
    questionText: '布魯納倡導「發現教學法（Discovery Learning）」，其核心目標不是讓學生被動記誦結論，而是期望學生：',
    options: [
      { key: 'A', text: '在教師引導的情境中主動重組訊息，親自發現學科的基本結構與原則' },
      { key: 'B', text: '漫無目的地隨意玩耍' },
      { key: 'C', text: '盲目進行刺激反應的獎懲制約' },
      { key: 'D', text: '完全不閱讀任何書籍資料' }
    ],
    correctAnswer: 'A',
    explanation: '布魯納認為發現學習是使學生像科學家一樣，經歷猜想、直觀推測與資料檢驗，主動建構出學科知識的「結構（Structure）」，並提升直觀思維與遷移能力。',
    examSource: '111年臺北市國小教師甄選教育專業試題',
    handoutRef: '講義第4章 p.36-37',
    difficulty: '中等'
  },

  // ========================================================
  // 12. 戴爾 (Dale)
  // ========================================================
  {
    id: 'q-dale-3',
    chapterId: 4,
    scholarId: 'dale',
    topic: '戴爾經驗金字塔中「設計的經驗」',
    questionText: '在戴爾（Dale）經驗金字塔的「做的經驗」層級中，「設計的經驗（Contrived Experiences）」通常是指下列何種教學活動？',
    options: [
      { key: 'A', text: '直接到大自然真實觀察活生生的野生老虎' },
      { key: 'B', text: '利用地球儀、心臟立體模型、縮小比例尺實體教具進行拆解與操作' },
      { key: 'C', text: '閱讀全文字的生物學論文' },
      { key: 'D', text: '聽老師口頭朗誦詩詞' }
    ],
    correctAnswer: 'B',
    explanation: '「設計的經驗（Contrived Experiences）」是當真實客體過大（如地球）、過小（如分子）、過於危險或複雜時，利用人造模型、擬真標本或模擬教具讓學生操作的具體經驗。',
    examSource: '110年教育部教師資格考試（課程與教學）',
    handoutRef: '講義第4章 p.37',
    difficulty: '中等'
  },

  // ========================================================
  // 13. 奧斯貝 (Ausubel)
  // ========================================================
  {
    id: 'q-ausubel-5',
    chapterId: 4,
    scholarId: 'ausubel',
    topic: '奧斯貝上位學習與下位學習',
    questionText: '學生原本已經熟悉「四邊形」的定義與幾何特質，今天數學課學習到「梯形」、「平行四邊形」與「菱形」也是四邊形的一種。這種新觀念被既有上位觀念所包容吸納的學習歷程，奧斯貝稱之為：',
    options: [
      { key: 'A', text: '上位學習（Superordinate Learning）' },
      { key: 'B', text: '下位學習 / 類屬學習（Subordinate / Subsumption Learning）' },
      { key: 'C', text: '並列組合學習（Combinatorial Learning）' },
      { key: 'D', text: '機械式學習' }
    ],
    correctAnswer: 'B',
    explanation: '下位學習（Subordinate learning）指新知識在抽象與包容層次上低於學習者既有認知結構中的觀念，新觀念直接歸屬並豐富既有上位結構。',
    examSource: '112年新北市公立國小教育專業試題',
    handoutRef: '講義第4章 p.38-39',
    difficulty: '中等'
  },

  // ========================================================
  // 14. 維高斯基 (Vygotsky)
  // ========================================================
  {
    id: 'q-vygotsky-6',
    chapterId: 5,
    scholarId: 'vygotsky',
    topic: '維高斯基社會文化學派核心命題',
    questionText: '維高斯基指出：「在兒童的文化發展中，每一種心智功能都會出現兩次：第一次是在社會層面，隨後才在心理層面；第一次是人際之間的，第二次是個人內部的。」這段話闡述了何種核心教育理論？',
    options: [
      { key: 'A', text: '認知發展純粹是由生理基因遺傳自然成熟決定的' },
      { key: 'B', text: '高層次心理機能的發展源自於社會文化互動的「內化歷程（Internalization）」' },
      { key: 'C', text: '語言只是認知發展的副產物，對思考沒有促進作用' },
      { key: 'D', text: '兒童在 12 歲以前不應該接觸任何同儕合作' }
    ],
    correctAnswer: 'B',
    explanation: '維高斯基社會建構主義認為：高階思維起源於社會人際對話，透過工具與符號的中介，逐漸由外在社會互動「內化（Internalization）」為個體內在的心智結構。',
    examSource: '111年教育部教師資格考試（學習者發展）',
    handoutRef: '講義第5章 p.43',
    difficulty: '中等'
  },

  // ========================================================
  // 15. 布魯姆 (Bloom)
  // ========================================================
  {
    id: 'q-bloom-3',
    chapterId: 5,
    scholarId: 'bloom',
    topic: 'Bloom修訂版「創造」層次教學目標',
    questionText: '陳老師在綜合活動課要求學生：「為了解決班級午餐廚餘過多的問題，請小組綜合各項訪談數據與生活常識，自主研擬一份全新的校園堆肥循環減量計畫書並製作簡報發布。」依修訂版 Bloom 認知歷程向度，此目標屬於：',
    options: [
      { key: 'A', text: '記憶（Remembering）' },
      { key: 'B', text: '應用（Applying）' },
      { key: 'C', text: '評鑑（Evaluating）' },
      { key: 'D', text: '創造（Creating）' }
    ],
    correctAnswer: 'D',
    explanation: '「創造（Creating）」是認知歷程向度之最高層次，包含將各組成要素重新組織整合、產生新的架構模式或提出全新的原創性解決方案（產出計畫書）。',
    examSource: '112年高級中等以下學校教師資格考試',
    handoutRef: '講義第5章 p.41, 第7章 p.60',
    difficulty: '基礎'
  },

  // ========================================================
  // 16. 馬斯洛 (Maslow)
  // ========================================================
  {
    id: 'q-maslow-6',
    chapterId: 6,
    scholarId: 'maslow',
    topic: '馬斯洛匱乏需求與成長需求運作特質',
    questionText: '馬斯洛在需求層次理論中區分了「匱乏需求（D-needs）」與「成長需求（B-needs）」。下列關於兩者運作特質的比較，何者正確？',
    options: [
      { key: 'A', text: '匱乏需求在獲得滿足後，驅動力會隨之減弱或平息；成長需求在獲得滿足後，驅動力反而會越發增強' },
      { key: 'B', text: '匱乏需求永遠不會感到飽足' },
      { key: 'C', text: '求知與美感屬於匱乏需求' },
      { key: 'D', text: '生理需求若未滿足不會影響自我實現' }
    ],
    correctAnswer: 'A',
    explanation: '講義第6章 p.51 總結圖表清楚標註：Deficiency needs（匱乏需求：生理/安全/愛/自尊）一旦滿足動機即下降；Being needs（成長需求：求知/美感/自我實現/超越）越是追求學習，個體動機與滿足渴望越向上攀升！',
    examSource: '111年教育部教師資格考試（學習者發展與適性輔導）',
    handoutRef: '講義第6章 p.51',
    difficulty: '進階'
  },

  // ========================================================
  // 17. 羅吉斯 (Rogers)
  // ========================================================
  {
    id: 'q-rogers-5',
    chapterId: 6,
    scholarId: 'rogers',
    topic: '羅吉斯同理心 (Empathy) 之意涵',
    questionText: '人本心理學大師羅吉斯（Rogers）強調教師對學生的「同理心理解（Empathetic Understanding）」，其核心精髓是指：',
    options: [
      { key: 'A', text: '由上而下同情並憐憫弱小學生' },
      { key: 'B', text: '站在學生的內在主觀參照架構，感其所感、知其所知，但又不失客觀界限' },
      { key: 'C', text: '無條件答應學生的任何無理要求' },
      { key: 'D', text: '代替學生完成所有考試與作業' }
    ],
    correctAnswer: 'B',
    explanation: '同理心（Empathy）是進入他人的私人知覺世界並設身處地體察其情感意涵，「如同（as if）」處於對方的內心世界中，不帶先入為主的評價。',
    examSource: '110年新北市國小教育專業科目試題',
    handoutRef: '講義第6章 p.47',
    difficulty: '中等'
  },

  // ========================================================
  // 18. 威金斯與麥克泰 (Wiggins & McTighe)
  // ========================================================
  {
    id: 'q-wiggins-4',
    chapterId: 7,
    scholarId: 'wiggins_mctighe',
    topic: 'UbD「雙重設計陷阱」分析',
    questionText: 'Wiggins & McTighe 在《重理解的課程設計（UbD）》中嚴肅指出，傳統課程規劃常陷入「兩大設計陷阱」。這兩大陷阱是指下列何者？',
    options: [
      { key: 'A', text: '「活動導向（動手不動腦）」與「內容進度導向（走馬看花覆蓋教材）」' },
      { key: 'B', text: '硬體不足 與 經費透支' },
      { key: 'C', text: '學生太聰明 與 教師太嚴厲' },
      { key: 'D', text: '課綱太長 與 放假太多' }
    ],
    correctAnswer: 'A',
    explanation: '講義第7章 p.58 明確標記 UbD 旨在打破兩大習慣性缺陷：(1) 活動導向（熱鬧有趣但缺乏深層大概念思維）、(2) 內容導向（急於照本宣科教完教科書，只講到皮毛而無理解）。',
    examSource: '112年臺北市中等學校教育專業科目試題',
    handoutRef: '講義第7章 p.58',
    difficulty: '中等'
  },

  // ========================================================
  // 19. 杜威 (Dewey)
  // ========================================================
  {
    id: 'q-dewey-3',
    chapterId: 8,
    scholarId: 'dewey',
    topic: '杜威進步主義「教育即生長」',
    questionText: '杜威（John Dewey）提出「教育即生長（Education as Growth）」與「教育即經驗的持續重組與改造」。他所主張的「教育無目的論」真正的內涵是指：',
    options: [
      { key: 'A', text: '學校教育不應該有任何教學計畫，任由學生放任漫遊' },
      { key: 'B', text: '教育本身除了生長歷程之外沒有外在強加的終極功利目的，生長就是教育自身的內在目的' },
      { key: 'C', text: '教育是無效的，社會不需要設立學校' },
      { key: 'D', text: '升學賺錢是唯一的教育目標' }
    ],
    correctAnswer: 'B',
    explanation: '杜威反對將教育視為成人社會強加於孩童的外在工具目的（如單純為升官發財）。教育就是個人經驗不斷反省、改組並生長的歷程，生長過程本身即是其目的。',
    examSource: '111年教育部教師資格考試（教育原理與制度）',
    handoutRef: '講義第8章 p.73, 第10章 p.90',
    difficulty: '進階'
  },

  // ========================================================
  // 20. 蘇克曼 (Suchman)
  // ========================================================
  {
    id: 'q-suchman-3',
    chapterId: 8,
    scholarId: 'suchman',
    topic: '探究教學模式與衝突事件',
    questionText: '在蘇克曼（Suchman）探究訓練模式中，第一階段教師呈現「驚奇事件 / 衝突情境（Discrepant Event）」。此教學策略最主要的認知心理功能在於引發學生的：',
    options: [
      { key: 'A', text: '生理恐懼' },
      { key: 'B', text: '認知失衡（Cognitive Disequilibrium）與求知好奇' },
      { key: 'C', text: '無助感' },
      { key: 'D', text: '被動順從' }
    ],
    correctAnswer: 'B',
    explanation: '驚奇衝突事件展現出違背學生既有常識的現象，造成學生認知上的不平衡與困惑，促使學生主動啟動探究歷程以重建心理平衡。',
    examSource: '110年新北市國小教師甄選教育專業試題',
    handoutRef: '講義第8章 p.74',
    difficulty: '基礎'
  },

  // ========================================================
  // 21. 恩尼斯 (Ennis)
  // ========================================================
  {
    id: 'q-ennis-3',
    chapterId: 8,
    scholarId: 'ennis',
    topic: '恩尼斯批判思考之訊息可靠性判斷',
    questionText: '恩尼斯（Ennis）在批判思考能力架構中，列出多項「評估資料與觀察報導信度（Credibility）」的規準。下列哪一項是提高消息可靠性的正面指標？',
    options: [
      { key: 'A', text: '報導者與事件有嚴重的個人金錢利益衝突' },
      { key: 'B', text: '報導者具備專業知能、具良好聲譽，且有不同獨立來源的交叉證實' },
      { key: 'C', text: '消息是在事隔三十年後的模糊回憶' },
      { key: 'D', text: '二手轉述且未說明資訊出處' }
    ],
    correctAnswer: 'B',
    explanation: 'Ennis 批判思考規準中，專業背景、無利益衝突衝突、一手觀察、多重獨立證據交叉檢驗是判斷資訊信度的核心規準。',
    examSource: '111年教育部教師資格考試',
    handoutRef: '講義第8章 p.76',
    difficulty: '中等'
  },

  // ========================================================
  // 22. 瑞斯 (Raths)
  // ========================================================
  {
    id: 'q-raths-3',
    chapterId: 9,
    scholarId: 'raths',
    topic: '價值澄清法教師之非批判角色',
    questionText: '在瑞斯（Louis Raths）價值澄清法的課堂實施中，當學生自由公開發表其個人價值選擇時，教師應秉持何種原則與態度？',
    options: [
      { key: 'A', text: '若學生的看法與傳統社會道德不符，教師應立即打斷並給予訓斥糾正' },
      { key: 'B', text: '營造無威脅、接納與尊重的民主氛圍，協助學生省思理由與後果，不強加教師個人判斷' },
      { key: 'C', text: '將持不同意見的學生登記警告' },
      { key: 'D', text: '直接告訴學生哪一個選項分數最高' }
    ],
    correctAnswer: 'B',
    explanation: '講義第9章 p.81-82 指出：價值澄清法深信價值源於個人經驗，教師應營造民主開放的心理安全氣氛，避免道德說教與價值強加，重點在輔導思考歷程而非判定是非標準。',
    examSource: '112年臺中市公立國小教師甄選教育專業試題',
    handoutRef: '講義第9章 p.82',
    difficulty: '基礎'
  },

  // ========================================================
  // 23. 柯爾保 (Kohlberg)
  // ========================================================
  {
    id: 'q-kohlberg-5',
    chapterId: 9,
    scholarId: 'kohlberg',
    topic: '柯爾保道德認知第二階與第三階辨析',
    questionText: '在討論公共服務時，小明說「我去當志工是因為如果我幫別人，下次我需要幫忙時別人也會幫我」；小華說「我去當志工是因為大家都會稱讚我是個善良懂事的好孩子」。依柯爾保理論，小明與小華分別處於哪一階段？',
    options: [
      { key: 'A', text: '小明是第二階段（相對功利取向）；小華是第三階段（尋求認可/好孩子取向）' },
      { key: 'B', text: '小明是第一階段（避罰）；小華是第四階段（法治）' },
      { key: 'C', text: '小明是第五階段；小華是第六階段' },
      { key: 'D', text: '兩人皆處於普遍倫理階段' }
    ],
    correctAnswer: 'A',
    explanation: '小明出於「互惠互利、市場交換（你幫我我幫你）」為第二階段相對功利取向；小華出於「尋求重要他人認可與讚許（好男孩/巧女孩）」為第三階段尋求認可取向。',
    examSource: '112年高級中等以下學校教師資格考試',
    handoutRef: '講義第9章 p.82',
    difficulty: '中等'
  },

  // ========================================================
  // 24. 薛夫特爾 (Shaftel)
  // ========================================================
  {
    id: 'q-shaftel-2',
    chapterId: 9,
    scholarId: 'shaftel',
    topic: '角色扮演教學法之再扮演 (Reenactment)',
    questionText: '在薛夫特爾（Shaftel）角色扮演教學法中，第一組學生演出衝突情境並由全班進行初步討論後，教師安排學生換角或嘗試提出不同解決策略「再次演出（再扮演）」。此步驟的主要價值為何？',
    options: [
      { key: 'A', text: '測試學生能否探索不同的行為後果與多元解決問題的可能性' },
      { key: 'B', text: '純粹為了拖延下課時間' },
      { key: 'C', text: '懲罰第一次沒演好的學生' },
      { key: 'D', text: '篩選出具備戲劇天賦的學生' }
    ],
    correctAnswer: 'A',
    explanation: '角色扮演中的「再扮演（Reenactment）」允許學生檢驗剛剛討論出的新策略，體驗換位思考的感受差異，實踐行為調整與多元決策。',
    examSource: '111年教育部教師資格考試',
    handoutRef: '講義第9章 p.83',
    difficulty: '中等'
  },

  // ========================================================
  // 25. 克伯屈 (Kilpatrick)
  // ========================================================
  {
    id: 'q-kilpatrick-6',
    chapterId: 10,
    scholarId: 'kilpatrick',
    topic: '設計教學法中學生自主責任',
    questionText: '克伯屈（Kilpatrick）強調設計教學法（Project Method）的核心在於「有目的的活動（Purposive Activity）」。因此在四步驟（定目的、擬計畫、執行、評量）中，何者的角色定位至關重要？',
    options: [
      { key: 'A', text: '四個步驟都由教師全權代勞包辦' },
      { key: 'B', text: '由學生在教師指導下自主決定目的、主動擬訂計畫、親身進行並自我評鑑' },
      { key: 'C', text: '由家長會長決定題目' },
      { key: 'D', text: '由教育局統一規定細節' }
    ],
    correctAnswer: 'B',
    explanation: '設計教學法的靈魂在於「主動性」與「學習者中心」，目的、計畫與執行皆由學生自主承擔責任，手腦並用，實現知行合一。',
    examSource: '110年教育部教師資格考試',
    handoutRef: '講義第10章 p.88-89',
    difficulty: '基礎'
  },

  // ========================================================
  // 26. 史拉芬 (Slavin)
  // ========================================================
  {
    id: 'q-slavin-6',
    chapterId: 11,
    scholarId: 'slavin',
    topic: 'STAD 個人進步分數之正義性',
    questionText: 'Slavin 設計 STAD 合作學習法時，為何堅持採用「個人進步分數（Improvement Points）」而非個別原始分數作為小組得分依據？',
    options: [
      { key: 'A', text: '避免低成就學生因無論如何努力都考不過高成就學生而感到挫敗，讓每一位組員都有平等的成功機會' },
      { key: 'B', text: '簡化教師計算成績的數學公式' },
      { key: 'C', text: '打壓平時成績優異學生的自信' },
      { key: 'D', text: '配合常模PR值的統計換算' }
    ],
    correctAnswer: 'A',
    explanation: '個人進步分數以學生「跟自己過去的基準分相比」為基礎，只要有進步就能為小組爭取高分，這使資賦優異生與學習困難生在團隊中擁有同等貢獻的價值與激勵。',
    examSource: '112年新北市國小教育專業試題',
    handoutRef: '講義第11章 p.93',
    difficulty: '中等'
  },

  // ========================================================
  // 27. 艾朗森 (Aronson)
  // ========================================================
  {
    id: 'q-aronson-3',
    chapterId: 11,
    scholarId: 'aronson',
    topic: '拼圖法 (Jigsaw) 之消弭同儕偏見效應',
    questionText: '艾朗森（Aronson）在 1970 年代初開發拼圖法（Jigsaw），其最初的研究背景是為了解決美國南方學校在取消種族隔離後所發生的何種校園危機？',
    options: [
      { key: 'A', text: '不同族裔學生之間的互相猜忌、排擠偏見與嚴重肢體衝突' },
      { key: 'B', text: '營養午餐廚餘浪費問題' },
      { key: 'C', text: '體育課操場跑道不足' },
      { key: 'D', text: '圖書館藏書老舊' }
    ],
    correctAnswer: 'A',
    explanation: '講義第11章 p.94 特別註明：當時美國德州學校存在種族猜疑、恐懼與衝突，Aronson 透過讓每個成員掌握不可或缺的一片材料，打破族群隔閡，建立互賴共生關係。',
    examSource: '111年高級中等以下學校教師資格考試',
    handoutRef: '講義第11章 p.94',
    difficulty: '基礎'
  },

  // ========================================================
  // 28. 佐藤學 (Sato Manabu)
  // ========================================================
  {
    id: 'q-sato-4',
    chapterId: 11,
    scholarId: 'sato_manabu',
    topic: '佐藤學學習共同體為何不設組長',
    questionText: '在佐藤學提倡的「學習共同體」實踐中，他強烈建議四人小組協同學習時「不要設立小組長、不要指定誰報告」。其背後最重要的哲學理由為何？',
    options: [
      { key: 'A', text: '避免形成組內的微型權力階級，確保每位孩子在探究學習中地位平等、彼此互惠對話' },
      { key: 'B', text: '減輕班長登記幹部的負擔' },
      { key: 'C', text: '防止組長收取回扣' },
      { key: 'D', text: '因為日本學校沒有組長制度' }
    ],
    correctAnswer: 'A',
    explanation: '講義第11章 p.98 註明：學習共同體的互學不是小老師制度的互教，而是平等的相互對話與互惠互益。若設組長容易演變為優秀生支配或主導發言，抹煞弱勢學生的真實探索。',
    examSource: '112年臺北市國小教師甄選教育專業試題',
    handoutRef: '講義第11章 p.98',
    difficulty: '中等'
  },

  // ========================================================
  // 29. 凱勒 (Fred Keller)
  // ========================================================
  {
    id: 'q-keller-3',
    chapterId: 12,
    scholarId: 'keller',
    topic: '凱勒計畫之助理教導員 (Proctors) 職責',
    questionText: '在凱勒（Fred Keller）個人化系統教學法（PSI）中，高年級或成績優秀的「助理教導員（Proctor）」主要承擔何種教學功能？',
    options: [
      { key: 'A', text: '擔任全班主要大課演講的主講人' },
      { key: 'B', text: '在學生完成單元研讀後，進行個別測驗的立即批改、診斷弱點並給予個別輔導' },
      { key: 'C', text: '負責打掃教室衛生' },
      { key: 'D', text: '代收學費與行政報表' }
    ],
    correctAnswer: 'B',
    explanation: 'Proctor 是 PSI 的關鍵靈魂，負責當場即時批改學生測驗（15分鐘內完成），在學生出錯時及時釐清概念，若通過則立即給予增強並核准晉級下一個單元。',
    examSource: '111年高雄市教育專業科目試題',
    handoutRef: '講義第12章 p.101-102',
    difficulty: '中等'
  },

  // ========================================================
  // 30. 莫禮生 (Morrison)
  // ========================================================
  {
    id: 'q-morrison-2',
    chapterId: 12,
    scholarId: 'morrison',
    topic: '莫禮生精熟理念與精熟公式',
    questionText: '莫禮生（H. C. Morrison）提出的精熟教學公式（Mastery Formula），其完整的實施循環為：',
    options: [
      { key: 'A', text: '預先測驗（前測）→ 教學 → 測驗教學結果 → 修正教學程序 → 再教學 → 再測驗 → 達成熟練' },
      { key: 'B', text: '講課 → 考試 → 算成績 → 放假' },
      { key: 'C', text: '發教材 → 自修 → 總結評量' },
      { key: 'D', text: '觀察 → 模仿 → 獎勵' }
    ],
    correctAnswer: 'A',
    explanation: '講義第2章 p.20 與第12章 p.101 均明確指出莫禮生的精熟公式：預先測驗→教學→測驗教學結果→修正教學程序→再教學→再測驗→達成熟練。',
    examSource: '110年教育部教師資格考試',
    handoutRef: '講義第2章 p.20, 第12章 p.101',
    difficulty: '基礎'
  },

  // ========================================================
  // 31. 湯姆林森 (Tomlinson)
  // ========================================================
  {
    id: 'q-tomlinson-3',
    chapterId: 12,
    scholarId: 'tomlinson',
    topic: '差異化教學之彈性分組 (Flexible Grouping)',
    questionText: 'Tomlinson 強調在差異化教學中，分組策略必須採取「彈性分組（Flexible Grouping）」。這意指教師應該：',
    options: [
      { key: 'A', text: '一開學就按照智力測驗分好組，整學年固定不變' },
      { key: 'B', text: '根據不同的學習目標、學生即時準備度、興趣或同儕關係動態調配，有時全班、有時同質、有時異質、有時個別' },
      { key: 'C', text: '男生一律一組，女生一律一組' },
      { key: 'D', text: '只讓成績最好的學生自己分組' }
    ],
    correctAnswer: 'B',
    explanation: '彈性分組反對僵化的標籤化分組，強調隨學習目標與學習者需求隨時動態調整組別型態，維持學生高度學習動機與尊嚴。',
    examSource: '112年新北市公立國小教育專業試題',
    handoutRef: '講義第12章 p.104',
    difficulty: '基礎'
  },

  // ========================================================
  // 32. 韋納 (Weiner)
  // ========================================================
  {
    id: 'q-weiner-3',
    chapterId: 13,
    scholarId: 'weiner',
    topic: '韋納成敗歸因與情緒反應',
    questionText: '韋納（Weiner）的歸因理論進一步研究了歸因對情緒的影響。當學生將「考試成功」歸因於自己的「能力」或「努力（內在因素）」時，最容易誘發何種自發性情緒體驗？',
    options: [
      { key: 'A', text: '自尊感與自豪感（Pride & Self-esteem）' },
      { key: 'B', text: '罪惡感' },
      { key: 'C', text: '羞愧感' },
      { key: 'D', text: '無助感' }
    ],
    correctAnswer: 'A',
    explanation: '歸因的「內在/外在」向度決定了情緒的自尊維度。成功歸因於內在（自己能力或努力）會帶來驕傲、自尊與自我效能提升；歸因於外在（運氣或考卷簡單）則只會產生感激或僥倖心理。',
    examSource: '111年教育部教師資格考試（學習者發展）',
    handoutRef: '講義第13章 p.113',
    difficulty: '中等'
  },

  // ========================================================
  // 33. 約翰·凱勒 (John Keller - ARCS)
  // ========================================================
  {
    id: 'q-jkeller-3',
    chapterId: 13,
    scholarId: 'john_keller',
    topic: 'ARCS 信心 (Confidence) 策略',
    questionText: '在 John Keller 的 ARCS 動機模式中，為了建立學生學習的「信心（Confidence）」，教師應採取下列哪一項具體教學策略？',
    options: [
      { key: 'A', text: '故意出難度極高、全班無人能及的題目挫挫學生銳氣' },
      { key: 'B', text: '明確公布學習目標與評量規準，提供合理的成功機會，讓學生體認成功歸因於自身努力' },
      { key: 'C', text: '直接給所有學生滿分以討好學生' },
      { key: 'D', text: '取消所有課後作業' }
    ],
    correctAnswer: 'B',
    explanation: '建立信心（Confidence）的關鍵在於：清楚明確的成功標準、循序漸進的挑戰難度、提供自我掌控學習進度的機會，讓學生產生「只要我努力，我做得到」的掌控感。',
    examSource: '112年高雄市教育專業科目試題',
    handoutRef: '講義第13章 p.114',
    difficulty: '基礎'
  },

  // ========================================================
  // 34. 羅森索 (Rosenthal)
  // ========================================================
  {
    id: 'q-rosenthal-3',
    chapterId: 14,
    scholarId: 'rosenthal',
    topic: '自我應驗預言在低成就學生身上的負面效應 (Golem 效應)',
    questionText: '當教師對特定弱勢或低學業成就學生抱持固定的負面偏見與低期待時，教師在課堂上表現出冷漠、較少關注與簡單機械式提問，最終導致該學生學業表現真的越來越差。此種負面的自我應驗預言常被稱作：',
    options: [
      { key: 'A', text: '比馬龍效應' },
      { key: 'B', text: '泥人效應 / 葛冷效應（Golem Effect）' },
      { key: 'C', text: '霍桑效應' },
      { key: 'D', text: '仰巴腳效應' }
    ],
    correctAnswer: 'B',
    explanation: '「比馬龍效應」代表教師高期望帶來高表現的正向預言；而「泥人效應（Golem Effect）」則是教師的低期望與偏見導致學生表現惡化的負向自我應驗預言。',
    examSource: '111年臺北市國小教育專業科目試題',
    handoutRef: '講義第14章 p.120',
    difficulty: '中等'
  }
];
