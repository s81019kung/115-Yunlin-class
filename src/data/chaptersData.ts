import { Chapter } from '../types';

export const CHAPTERS_DATA: Chapter[] = [
  {
    id: 1,
    title: '第 1 章：「教」「學」的定義與意義',
    subtitle: '古今教學概念、教育字源、課程類型與產婆法',
    pageRange: '講義 p.7 ~ p.16',
    description: '探討中西方「教」與「學」之字源詮釋（孔子、學記、說文解字）、蘇格拉底產婆法詰問精神，以及艾斯納（Eisner）之顯見/外顯、潛在、懸缺（空無）課程與空白課程分類。',
    scholars: ['socrates', 'confucius', 'eisner'],
    coreKeywords: ['產婆法', '回憶說', '因材施教', '長善救失', '外顯課程', '潛在課程', '懸缺課程(空無課程)', '空白課程'],
    lectureHighlights: [
      '說文解字：「教，上所施下所效也；育，養子使作善也」。',
      '禮記學記篇：教學相長、長善救失、相觀而善、預時孫摩、藏息相輔。',
      '蘇格拉底（Socrates）產婆法：認為人出生即有先天觀念，教學如同助產士引導嬰兒，透過詰問與反詰喚醒理性自覺。',
      '艾斯納（E. W. Eisner）課程分類：實有課程（外顯/正式/非正式）、潛在課程（環境情境薰陶）、空無/懸缺課程（Null Curriculum，應有而未有的內涵）。',
      '空白課程（Vacant / Flexible curriculum）：學校空出一部分時間，不安排正式教學，供學生自主學習或休閒。'
    ],
    googleFormColor: '#673AB7'
  },
  {
    id: 2,
    title: '第 2 章：行為學習論',
    subtitle: '古典制約、操作制約、聯結論與編序教學',
    pageRange: '講義 p.17 ~ p.25',
    description: '從外顯行為改變切入，探討古典制約（Pavlov）、桑代克連結論三大學習律（Thorndike）、史金納操作制約與增強時制（Skinner）、莫禮生精熟理念（Morrison）及卡羅學校學習模式（Carroll）。',
    scholars: ['pavlov', 'thorndike', 'skinner', 'morrison', 'carroll'],
    coreKeywords: ['古典制約', '操作制約', '準備律/練習律/效果律', '正增強/負增強', '消弱', '增強時制(FR/VR/FI/VI)', '行為塑造(Shaping)', '編序教學', '卡羅學習率'],
    lectureHighlights: [
      '巴夫洛夫（Pavlov）古典制約：CS（鈴聲）與 UCS（食物）配對，產生 CR（流涎），含刺激類化與辨別。',
      '桑代克（Thorndike）三大學習律：準備律（身心準備狀態）、練習律（次數增多聯結加強）、效果律（反應獲得滿足效果則聯結增強）。',
      '史金納（Skinner）操作制約：個體主動操作環境。正增強（給喜歡的）、負增強（移除嫌惡的）、懲罰（給嫌惡的或剝奪喜歡的）、消弱（置之不理停止增強）。',
      '間歇增強時制：固定比率（FR）、不定比率（VR，如拉霸賭博，反應率最高抗消弱強）、固定時距（FI）、不定時距（VI）。',
      '莫禮生（Morrison）精熟模式：單元熱練，預先測驗→教學→測驗→修正程序→再教學→再測驗。',
      '卡羅（Carroll）學校學習模式：學習程度 = 實際學習時間 ÷ 學習所需時間；性向是學習速率之指標而非成就極限。'
    ],
    googleFormColor: '#3F51B5'
  },
  {
    id: 3,
    title: '第 3 章：社會學習論 教學理論與應用',
    subtitle: '觀察學習、三元交互決定論、自我效能與自律學習',
    pageRange: '講義 p.27 ~ p.33',
    description: '班杜拉（Bandura）社會學習論核心，突破行為派限制，探討三元交互決定論、波波玩偶實驗、觀察學習四階段、模仿歷程、自我效能來源與調節，以及 Zimmerman 自律學習循環。',
    scholars: ['bandura', 'zimmerman', 'flavell'],
    coreKeywords: ['三元交互決定論', '觀察學習四階段', '替代增強', '自我效能(Self-efficacy)', '模仿四歷程', '自律學習循環', '後設認知'],
    lectureHighlights: [
      '班杜拉（Bandura）三元交互決定論：個人（認知）、行為、環境三者交互影響。',
      '觀察學習四歷程：注意歷程（觀察楷模）→ 保持歷程（符號記憶編碼）→ 動作再生歷程（練習表現）→ 動機歷程（直接/替代/自我增強）。',
      '模仿類型：直接模仿、綜合模仿、象徵模仿、抽象模仿。',
      '自我效能四大來源：親身成敗經驗（最重要）、替代性經驗、言語勸說、生理與情緒狀態。',
      '齊瑪曼（Zimmerman）自律學習三階段循環：計畫階段 → 執行階段 → 自我反省與監控階段。',
      '後設認知（Meta-cognition）：對自己認知歷程的監控、掌握、支配與調整能力。'
    ],
    googleFormColor: '#009688'
  },
  {
    id: 4,
    title: '第 4 章：認知學習論',
    subtitle: '皮亞傑認知發展、布魯納發現教學、戴爾金字塔與奧斯貝有意義學習',
    pageRange: '講義 p.35 ~ p.40',
    description: '探討個體內在認知結構改變：皮亞傑（Piaget）認知四階段與基模平衡；布魯納（Bruner）表徵三期與螺旋課程；戴爾（Dale）經驗金字塔；奧斯貝（Ausubel）前導組織與解釋教學法。',
    scholars: ['piaget', 'bruner', 'dale', 'ausubel'],
    coreKeywords: ['基模/同化/調適/平衡', '皮亞傑四階段', '布魯納表徵三階段', '螺旋式課程', '發現教學法', '經驗金字塔', '前導組織(Advance Organizer)', '有意義學習', '解釋教學法'],
    lectureHighlights: [
      '皮亞傑（Piaget）概念：基模、同化（量變）、調適（質變改基模）、平衡化。',
      '皮亞傑認知四階段：感覺動作期（0-2歲，物體恆存）、前運思期（2-7歲，自我中心、知覺集中、缺乏可逆性）、具體運思期（7-11歲，具保留概念、去集中、類包含）、形式運思期（11歲以上，假設演繹推理、抽象思考）。',
      '布魯納（Bruner）表徵三期：動作表徵（0-2歲）→ 影像表徵（3-5歲）→ 符號表徵（6歲以上）。主張「螺旋式課程」，任何概念皆能以誠實方式教給任何發展階段的孩子。',
      '戴爾（Dale）經驗金字塔：底部由做的經驗（具體直接），中部觀察的經驗（圖像模型電視），頂部抽象概念（文字語文）。',
      '奧斯貝（Ausubel）有意義學習理論：反對機械式學習，提倡「前導組織」（Advance Organizer，新舊知識橋樑，分說明性與比較性），主張「解釋教學法」及「漸進分化與統整協調」。'
    ],
    googleFormColor: '#1E88E5'
  },
  {
    id: 5,
    title: '第 5 章：建構主義教學理論與應用',
    subtitle: '維高斯基社會建構、ZPD近側發展區、鷹架作用與翻轉教室',
    pageRange: '講義 p.41 ~ p.45',
    description: '聚焦維高斯基（Vygotsky）社會文化歷史學派，探討實際發展與潛在發展水平之間的「近側發展區（ZPD）」、鷹架作用（Scaffolding）、私語內化，以及翻轉課堂與 Bloom 認知歷程目標。',
    scholars: ['vygotsky', 'bloom'],
    coreKeywords: ['近側發展區(ZPD)', '鷹架作用(Scaffolding)', '社會建構主義', '私語/自我中心語言', '動態評量', '翻轉教室', 'Bloom新版六大認知目標'],
    lectureHighlights: [
      '維高斯基（Vygotsky）社會文化建構：認知發展源於社會互動，工具與語言是心智發展關鍵。',
      '近側發展區（ZPD）：學生獨自解決問題之「實際發展水準」，與在成人指導或能力較強同儕合作下所能達到「潛在發展水準」之間的差距。',
      '鷹架作用（Scaffolding）：提供暫時性支撐與引導，隨學生能力增強而逐漸褪除（Fading）。',
      '語言發展：外在社會語言 → 私語/自我中心語言（自我調節思考工具）→ 內在思維語言。',
      '翻轉教室（Flipped Classroom）：顛覆傳統講授與作業，課前在家觀看影片自主學習基礎，課堂進行探究合作與高階思考應用（分析、評鑑、創造）。',
      '布魯姆（Bloom）認知目標新版（Anderson）：記憶 → 理解 → 應用 → 分析 → 評鑑 → 創造。'
    ],
    googleFormColor: '#43A047'
  },
  {
    id: 6,
    title: '第 6 章：人本學派教學理論與應用',
    subtitle: '馬斯洛需求層次論、羅吉斯自由學習與三大心理學派比較',
    pageRange: '講義 p.47 ~ p.55',
    description: '從人本心理學立場出發，以全人發展為核心。探討馬斯洛（Maslow）五/七/八階層需求層次論（匱乏需求 vs 成長需求）、羅吉斯（Rogers）學生中心與非指導性教學，並統整行為、認知、人本三大學派差異。',
    scholars: ['maslow', 'rogers'],
    coreKeywords: ['需求層次理論(5/7/8階)', '匱乏需求 vs 成長需求', '自我實現', '真誠一致', '無條件積極關懷', '同理心', '非指導性教學', '以學生為中心', '全人教育'],
    lectureHighlights: [
      '馬斯洛（Maslow）需求層次論：原始五階層（生理、安全、愛與歸屬、自尊、自我實現）；擴展八階層（加入認知需求、美感需求、自我超越）。',
      '匱乏需求（生理、安全、愛、自尊）若未滿足將阻礙學習；成長需求（知、美、自我實現、超越）永不滿足且驅動向上。',
      '羅吉斯（Carl Rogers）非指導性諮商與教學：人人生來具有自我實現的潛能；良好學習氛圍需具備「真誠一致（Congruence）」、「同理心理解（Empathy）」與「無條件積極關懷（Unconditional Positive Regard）」。',
      '自由學習（Freedom to Learn）：教師是「促進者（Facilitator）」而非權威灌輸者。',
      '三大心理學派對比：行為派（外在增強制約、客觀可測、教師中心）、認知派（內在基模建構、學生主動思考）、人本派（主觀情感意義、全人實現、自我評價）。'
    ],
    googleFormColor: '#FB8C00'
  },
  {
    id: 7,
    title: '第 7 章：教學設計模式與教學計畫撰寫',
    subtitle: 'ASSURE、Dick & Carey、UbD逆向設計與108課綱核心素養',
    pageRange: '講義 p.57 ~ p.71',
    description: '從系統化教學規劃出發，深入解析 ASSURE 模式、Dick & Carey 系統模式、UbD 重理解的課程設計（逆向設計三階段與六大理解面向）、台灣 108 課綱核心素養與教案結構。',
    scholars: ['wiggins_mctighe', 'dick_carey'],
    coreKeywords: ['ASSURE模式', 'Dick & Carey系統模式', 'UbD重理解的課程設計', '逆向設計(Backward Design)', '六大理解面向', '核心素養三面九項', '素養導向教學四大原則', '行為目標ABCD'],
    lectureHighlights: [
      'ASSURE 模式六大步驟：A分析學習者 → S陳述目標 → S選擇方法/媒體/教材 → U運用媒體教材 → R要求學習者參與表現 → E評量與修正。',
      'UbD（Understanding by Design）逆向設計三階段：階段一（確定預期學習成果/大概念/核心問題）→ 階段二（決定可接受的評量證據/表現任務）→ 階段三（設計學習經驗與教學活動）。避免活動導向與內容導向。',
      '理解的六個層面（Six Facets of Understanding）：解釋、詮釋、應用、觀點、同理、自知。',
      '108課綱核心素養四大原則：整合知能態度、情境脈絡學習、學習歷程與策略、實踐力行的表現。',
      '教學目標三領域：認知（Cognitive）、情意（Affective）、動作技能（Psychomotor）。'
    ],
    googleFormColor: '#00ACC1'
  },
  {
    id: 8,
    title: '第 8 章：思考啟發取向教學法',
    subtitle: '杜威問題解決、蘇克曼探究、創造思考與哈佛零點計畫',
    pageRange: '講義 p.73 ~ p.80',
    description: '培養高階思維能力教學法：杜威（Dewey）反省思維與五步思維術；蘇克曼（Suchman）探究訓練模式；創造思考教學策略；Ennis 批判思考；哈佛零點計畫之 Visible Thinking（思考可見）與思考調色盤。',
    scholars: ['dewey', 'suchman', 'ennis'],
    coreKeywords: ['杜威思維五步驟', '做中學', '蘇克曼探究教學', '創造思考教學原則', '批判思考(Ennis)', '案例教學法', '哈佛零點計畫(Project Zero)', '可見的思考(Visible Thinking)', 'See-Think-Wonder'],
    lectureHighlights: [
      '杜威（John Dewey）完全思維活動五步驟：遭遇疑難情境 → 界定問題 → 提出假設 → 推演假設結果 → 驗證與修訂。',
      '蘇克曼（Suchman）探究教學法：以令人困惑的科學謎題（Discrepant Event）引導學生主動蒐集資料、提出假設並驗證。',
      '創造思考教學實施原則：「隨、變、問、聽、說、不、美、觀」；激發流暢性、變通性、獨創性與精密性。',
      '批判性思考（Ennis）：以合理的反省思維，決定何者該相信或何者該做；強調釐清、推論、評斷。',
      '哈佛零點計畫（Project Zero / Visible Thinking）：讓思考歷程具體顯現，運用思維常規（如 See-Think-Wonder、Connect-Extend-Challenge、Circle of Viewpoints）。'
    ],
    googleFormColor: '#E53935'
  },
  {
    id: 9,
    title: '第 9 章：情意取向教學法',
    subtitle: '價值澄清法、柯爾保道德兩難、角色扮演與社會情緒學習',
    pageRange: '講義 p.81 ~ p.86',
    description: '陶冶情意、道德與健全人格：瑞斯（Raths）價值澄清法三階段七步驟；柯爾保（Kohlberg）道德發展三層次六階段與道德討論法；薛夫特爾（Shaftel）角色扮演法；CASEL 社會情緒學習（SEL）與 SAFE 指標。',
    scholars: ['raths', 'kohlberg', 'shaftel', 'esquith'],
    coreKeywords: ['價值澄清法(選擇-珍視-行動)', '道德認知發展三期六段', '海因茨偷藥問題', '道德兩難討論法', '角色扮演法(Role Playing)', '第56號教室奇蹟六階段', '社會情緒學習(SEL)', 'SAFE指標'],
    lectureHighlights: [
      '價值澄清法（Raths & Harmin）：價值形成三階段七步驟——選擇（自由選擇、從可能項目中選擇、考慮後果選擇）、珍視（感到高興、願意公開表示）、行動（付諸實踐、反覆實施成為生活方式）。',
      '柯爾保（Kohlberg）道德認知發展三層次六階段：前習俗道德期（第1階避罰服從、第2階相對功利/互惠）；習俗道德期（第3階好男孩巧女孩/尋求認可、第4階法治秩序維持）；後習俗道德期（第5階社會契約、第6階普遍倫理原則）。',
      '角色扮演法（Shaftel）：藉由即興演繹情境，設身處地體會他人感受與價值衝突，培養同理心與社會解決問題能力。',
      '雷夫·艾斯奎斯（Rafe Esquith）第56號教室六階段：我不想惹麻煩 → 我想要獎賞 → 我想取悅某人 → 我要遵守規則 → 我能體貼別人 → 我有自己的行為準則。',
      '社會情緒學習（SEL）CASEL 五大核心：自我覺察、自我管理、社會覺察、人際技巧、負責任決策；SAFE指標（順序性S、積極參與A、專注投入F、直接明確E）。'
    ],
    googleFormColor: '#8E24AA'
  },
  {
    id: 10,
    title: '第 10 章：實作取向教學法',
    subtitle: '發表教學法、練習教學法、克伯屈設計教學法、服務學習與DFC',
    pageRange: '講義 p.87 ~ p.92',
    description: '從做中學與實踐出發：發表教學法、練習教學法步驟與原則、克伯屈（Kilpatrick）設計教學法（Project Method）四大類型與四步驟、服務學習（Service Learning）及 DFC 創意行動。',
    scholars: ['kilpatrick', 'dewey'],
    coreKeywords: ['發表教學法', '練習教學法', '設計教學法(Project Method)', '克伯屈四步驟', '服務學習(Service Learning)', 'DFC童心創意(感受/想像/實踐/分享)'],
    lectureHighlights: [
      '練習教學法實施程序：引起動機 → 解說重點 → 教師示範 → 學生模仿 → 反覆練習 → 評量結果。原則：間隔分散優於集中過度、注重個別化。',
      '克伯屈（Kilpatrick）設計教學法（Project Method）：承襲杜威學說，學生在有目的生活情境中主動實踐。四大步驟：決定目的 → 擬訂計畫 → 實際進行（執行） → 評量結果。',
      '設計教學種類：生產/建造設計、思考/消費欣賞設計、問題設計、訓練/練習設計。',
      '服務學習（Service Learning）：結合學術課程與社區服務，核心歷程包含準備（Preparing）→ 執行（Implementing）→ 反省（Reflecting）→ 慶祝（Celebrating）→ 評量（Evaluating）。',
      'DFC（Design For Change）童心創意行動四步驟：感受（Feel）→ 想像（Imagine）→ 實踐（Do）→ 分享（Share）。'
    ],
    googleFormColor: '#D81B60'
  },
  {
    id: 11,
    title: '第 11 章：合作取向教學法',
    subtitle: 'STAD、TGT、Jigsaw拼圖法、團體探究GI與佐藤學學習共同體',
    pageRange: '講義 p.93 ~ p.100',
    description: '小組互助與社會建構實踐：Slavin 之 STAD 小組成就區分法；TGT 遊戲競賽；Aronson 與 Slavin 之 Jigsaw 拼圖法（I至IV代）；Sharan 團體探究（GI）；協同教學法與佐藤學之學習共同體及數位自主四學。',
    scholars: ['slavin', 'aronson', 'sharan', 'sato_manabu'],
    coreKeywords: ['合作學習五大要素', 'STAD小組成就區分法', 'TGT小組遊戲競賽法', 'Jigsaw拼圖法(I-IV代)', '專家小組', 'GI團體探究法', '協同教學法', '佐藤學學習共同體', '伸展跳躍(Jump)', '自主四學'],
    lectureHighlights: [
      '合作學習五大特徵（Johnson & Johnson）：正向互賴、個人績效責任、助長式面對面互動、合作技巧指導、團體歷程反省。',
      'STAD（學生小組成就區分法，Slavin）：異質分組、全班授課、小組學習、個別測驗、計算「個人進步分數」（避免低成就生放棄）、小組表揚。',
      'TGT（小組遊戲競賽法）：將測驗改為「同能力桌次錦標賽」，維持各組公平競爭。',
      'Jigsaw（拼圖法）：第一代（Aronson，專家小組研讀，回原組分享，無小組獎勵）；第二代（Slavin，加入STAD之全班授課、個別測驗、進步分數與小組獎勵）；第三代（考前小組複習）；第四代（教師回饋引導）。',
      '佐藤學「學習共同體」：三大哲學（公共性、民主性、卓越性）；協同學習本質在於對話與聆聽；男女混坐 U 型桌；設計「伸展跳躍（Jump）」挑戰性課題；不指派組長。',
      '自主四學：學生自學 → 組內共學 → 組間互學 → 教師導學。'
    ],
    googleFormColor: '#5E35B1'
  },
  {
    id: 12,
    title: '第 12 章：個別化取向教學法',
    subtitle: '莫禮生單元精熟、凱勒PSI個人化系統、IGE與差異化教學',
    pageRange: '講義 p.101 ~ p.107',
    description: '在大班環境下照顧個別差異：莫禮生（Morrison）精熟教學；凱勒（Fred Keller）個人化系統教學法（PSI / Keller Plan）；IGE 個別指導教學模式；自學輔導法；適性教育與差異化教學策略。',
    scholars: ['keller', 'morrison', 'tomlinson'],
    coreKeywords: ['莫禮生精熟公式', '凱勒個人化系統教學法(PSI)', '自我步調學習', '精熟標準(80-90%)', '助理教導員(Proctor)', 'IGE個別化教學', '差異化教學', '適性揚才'],
    lectureHighlights: [
      '莫禮生（Morrison）精熟理念：預先測驗 → 教學 → 測驗教學結果 → 修正教學程序 → 再教學 → 再測驗 → 熟練。',
      '凱勒（Fred S. Keller）個人化系統教學法（PSI / "Good-Bye, Teacher"）：以行為學派為基礎。(1) 自訂學習步調 (2) 精熟標準（達80%~90%才得進入下一單元） (3) 採用書面教材 (4) 助理教導員（Proctor）即時批改回饋 (5) 講述與演講僅用於激勵動機而非主要知識傳授。',
      'IGE（Individually Guided Education）個別指導教學：評估起點行為、多途徑進度與差異化教材選擇。',
      '差異化教學（Differentiated Instruction，Tomlinson）：針對不同準備度、興趣與學習風格之學生，彈性調整「內容（Content）」、「歷程（Process）」、「成果（Product）」及「學習環境（Environment）」。'
    ],
    googleFormColor: '#00897B'
  },
  {
    id: 13,
    title: '第 13 章：教學技術：教學媒體、班級經營、引起動機與發問技巧',
    subtitle: 'Weiner歸因論、Keller ARCS動機模式、提問候答技巧與PIRLS層次',
    pageRange: '講義 p.109 ~ p.117',
    description: '課堂實務與教學技術精進：教學媒體選用；Weiner 成敗歸因論三向度六因素；John Keller 之 ARCS 動機模式；發問技巧與候答時間（Wait-time）；PIRLS 閱讀理解四層次提問；Ron Clark 超基本55條生活常規。',
    scholars: ['weiner', 'john_keller', 'ron_clark'],
    coreKeywords: ['Weiner成敗歸因論', '內外向度/穩定性/可控性', '習得無助感', 'ARCS動機模式(注意/相關/信心/滿足)', '候答時間(Wait-time)', '提問四層次', 'PIRLS閱讀理解層次', '優秀是教出來的55條'],
    lectureHighlights: [
      '韋納（Weiner）成敗歸因理論（三向度六因素）：能力（內在/穩定/不可控）、努力（內在/不穩定/可控，唯一可控）、工作難度（外在/穩定/不可控）、運氣（外在/不穩定/不可控）、身心狀況（內在/不穩定/不可控）、別人反應（外在/不穩定/不可控）。歸因於「努力」最能維持後續動機。',
      '凱勒（John Keller）ARCS 動機模式四大要素：Attention（引起注意，求新多樣）→ Relevance（切身相關，連結舊經驗與生活）→ Confidence（建立信心，清楚標準提供成功機會）→ Satisfaction（獲得滿足，內在成就感與回饋）。',
      '發問技巧與候答時間：提問後應給予全班思考時間（一般需等待 3~5 秒或 5~7 秒），不急於打斷或直接指定學生，善用探究與延伸問題，延遲批判。',
      'PIRLS 閱讀理解四層次：直接提取訊息 → 直接推論 → 詮釋與整合觀點 → 檢驗與評估內容和語言形式。'
    ],
    googleFormColor: '#7CB342'
  },
  {
    id: 14,
    title: '第 14 章：學習評量與教學評量',
    subtitle: '評量分類、標準與常模參照、檔案真實評量、比馬龍效應與TIMSS',
    pageRange: '講義 p.119 ~ p.123',
    description: '評鑑與評量之科學與人文：評量時機與功能分類（安置性、診斷性、形成性、總結性）；結果解釋方式（標準參照 vs 常模參照）；認知與建構學派之真實評量與檔案評量（Portfolio）；Rosenthal 自我應驗預言（比馬龍效應）；國際 TIMSS 評比新趨勢。',
    scholars: ['rosenthal'],
    coreKeywords: ['安置性評量', '診斷性評量', '形成性評量', '總結性評量', '標準參照評量(CRT)', '常模參照評量(NRT)', '檔案評量(Portfolio)', '真實評量(Authentic)', '比馬龍效應(自我應驗預言)', 'TIMSS評比'],
    lectureHighlights: [
      '評量功能分類：安置性評量（開學前確定起點行為）、診斷性評量（學習困難原因探究）、形成性評量（教學進行中回饋修正與掌握進度）、總結性評量（期末確定學習成就並評定等第）。',
      '參照標準分類：常模參照評量（Norm-referenced，跟他人比相對位置，如百分等級PR、常態分配排名）；標準參照評量（Criterion-referenced，跟預設標準比是否熟練，如門檻及格、會考精熟基礎待加強）。',
      '真實評量（Authentic Assessment）與檔案評量（Portfolio Assessment）：在真實生活情境中評量學生的高層次思考與實作表現；檔案評量為有目的之持續蒐集學生作品、自我反思與成長歷程。',
      '羅森索（Rosenthal）比馬龍效應（Pygmalion Effect / 自我應驗預言）：教師對學生的期待與信念，會不自覺地透過非語言行為、更多關注與挑戰機會傳遞給學生，最終促使學生表現符合教師預期。'
    ],
    googleFormColor: '#D32F2F'
  }
];
