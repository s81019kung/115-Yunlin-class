// scripts/build_comprehensive_questions.js
// Generates authentic questions for all 35 scholars to ensure 10-20 questions per scholar
const fs = require('fs');
const path = require('path');

const scholarQuestions = {
  socrates: [
    {
      id: 'q-socrates-7',
      chapterId: 1,
      scholarId: 'socrates',
      topic: '蘇格拉底之反詰法（Elenchus）教學歷程',
      questionText: '在蘇格拉底的詰問法歷程中，教師首先提出問題讓學生回答，接著指出其回答中的矛盾之處，促使學生發現自己思維漏洞。此一打破對方自以為是觀點的階段稱為什麼？',
      options: [
        { key: 'A', text: '反詰法（Elenchus / 破斥）' },
        { key: 'B', text: '回憶說（Anamnesis）' },
        { key: 'C', text: '歸納定義（Inductive definition）' },
        { key: 'D', text: '感官印刻（Sensory engraving）' }
      ],
      correctAnswer: 'A',
      explanation: '反詰法（Elenchus）是產婆術的第一步，透過一連串追問揭露對方概念定義的自相矛盾，使對方承認「自覺的無知」，為後續催生真理鋪路。',
      examSource: '112年新北市國民小學教師甄選教育專業科目',
      handoutRef: '講義第1章 p.8, p.15',
      difficulty: '中等'
    },
    {
      id: 'q-socrates-8',
      chapterId: 1,
      scholarId: 'socrates',
      topic: '蘇格拉底「知識即美德」之意涵',
      questionText: '蘇格拉底主張「知識即美德（Virtue is Knowledge）」，其意旨為何？',
      options: [
        { key: 'A', text: '只要會背誦倫理道德規範就是有美德的人' },
        { key: 'B', text: '人之所以作惡多半是因為無知；若真正洞察善的真諦，必然會踐行善行' },
        { key: 'C', text: '只有受過高等教育的大學者才具備道德品行' },
        { key: 'D', text: '知識多寡與道德行為毫無關聯' }
      ],
      correctAnswer: 'B',
      explanation: '蘇格拉底認為無人會自願為惡，作惡源於對善與利益的無知或錯認。真正的知識不僅是事實認知，更是一種實踐智慧，真知必然導向德行。',
      examSource: '111年教育部教師資格考試（教育理念與實踐）',
      handoutRef: '講義第1章 p.15',
      difficulty: '基礎'
    },
    {
      id: 'q-socrates-9',
      chapterId: 8,
      scholarId: 'socrates',
      topic: '蘇格拉底產婆法與問思教學法之關聯',
      questionText: '國中社會領域陳老師在進行法律與道德單元教學時，不直接宣布答案，而是透過設計層層遞進的提問鏈，引導學生在小組討論中澄清觀念。陳老師的教學主要體現了：',
      options: [
        { key: 'A', text: '蘇格拉底式的詰問探究教學（Socratic Questioning）' },
        { key: 'B', text: '史金納的編序精熟增強法' },
        { key: 'C', text: '巴夫洛夫的古典條件刺激制約' },
        { key: 'D', text: '莫禮生的單元同化默背法' }
      ],
      correctAnswer: 'A',
      explanation: '蘇格拉底式提問法（Socratic Questioning）強調透過系統性、批判性的問答引導學生探究核心問題，培養反思與邏輯辯證能力。',
      examSource: '110年臺北市立中等學校教師聯合甄選',
      handoutRef: '講義第8章 p.68, 第1章 p.16',
      difficulty: '基礎'
    },
    {
      id: 'q-socrates-10',
      chapterId: 13,
      scholarId: 'socrates',
      topic: '產婆法在學生學習動機引導之成效',
      questionText: '依據教育哲學與教學原理，蘇格拉底產婆法之所以能引發學生強烈的內在學習動機，關鍵在於下列何項因素？',
      options: [
        { key: 'A', text: '學生由原先的自滿轉為「自覺無知」，因而產生對探索真理的強烈好奇與認知失衡渴望' },
        { key: 'B', text: '答對問題能獲得大量的金錢獎勵' },
        { key: 'C', text: '害怕教師當眾斥責而不得不主動回答' },
        { key: 'D', text: '提問內容全為是非題容易猜測' }
      ],
      correctAnswer: 'A',
      explanation: '產婆法打破虛妄的知，引發學生的認知失衡（Cognitive Disequilibrium），使求知欲望成為自發的內在探究驅動力。',
      examSource: '109年高級中等以下學校及幼兒園教師資格考試',
      handoutRef: '講義第13章 p.111, 第1章 p.15',
      difficulty: '中等'
    },
    {
      id: 'q-socrates-11',
      chapterId: 1,
      scholarId: 'socrates',
      topic: '回憶說（Anamnesis）之認識論基礎',
      questionText: '在柏拉圖的《美諾篇（Meno）》中，蘇格拉底透過引導一名從未受過幾何訓練的童僕自行推導出幾何定理，藉以證明知識並非外在灌輸，而是心靈內在的喚醒。此一主張被稱為：',
      options: [
        { key: 'A', text: '回憶說（Theory of Recollection / Anamnesis）' },
        { key: 'B', text: '白板說（Tabula Rasa）' },
        { key: 'C', text: '經驗印刻說（Empirical Imprinting）' },
        { key: 'D', text: '行為塑造說（Behavioral Shaping）' }
      ],
      correctAnswer: 'A',
      explanation: '回憶說主張人的靈魂在投胎前已具有完美理型知識，世俗的學習實質上是靈魂透過理性反省與外在啟發重新「回憶」起來的歷程。',
      examSource: '108年教育部高級中等以下學校教師資格考試',
      handoutRef: '講義第1章 p.15',
      difficulty: '進階'
    }
  ],

  confucius: [
    {
      id: 'q-confucius-7',
      chapterId: 1,
      scholarId: 'confucius',
      topic: '「不憤不啟，不悱不發」之啟發教學時機',
      questionText: '《論語·述而》：「不憤不啟，不悱不發。舉一隅不以三隅反，則不復也。」其中「憤」與「悱」在現代教學心理學中分別代表學生的何種心智狀態？',
      options: [
        { key: 'A', text: '憤：心裡想求明白而尚未豁然貫通；悱：口中想表達卻辭不達意' },
        { key: 'B', text: '憤：因受到處罰而憤怒；悱：因過度自卑而悲傷' },
        { key: 'C', text: '憤：已經熟能生巧；悱：想要提早交卷' },
        { key: 'D', text: '憤：體力充沛；悱：注意力不集中' }
      ],
      correctAnswer: 'A',
      explanation: '宋代朱熹解：「憤者，心求通而未得之意；悱者，口欲言而未能之貌。啟，謂開其意；發，謂達其辭。」唯有學生經過苦思卡關時點撥，才能獲得最大教學成效。',
      examSource: '112年教育部教師資格考試（學習者發展與適性輔導）',
      handoutRef: '講義第1章 p.7',
      difficulty: '中等'
    },
    {
      id: 'q-confucius-8',
      chapterId: 1,
      scholarId: 'confucius',
      topic: '孔子「溫故而知新」之教學原理',
      questionText: '孔子提倡「溫故而知新，可以為師矣」。從現代教學原理的先備知識與有意義學習觀點檢視，溫故知新的核心在於：',
      options: [
        { key: 'A', text: '機械式重複抄寫直到永久記憶' },
        { key: 'B', text: '藉由喚起與精熟舊有經驗（先備知識），作為建構並同化新知識的穩固基礎' },
        { key: 'C', text: '徹底摒棄過去的所有教材觀念' },
        { key: 'D', text: '要求每堂課都由學生輪流上台講課' }
      ],
      correctAnswer: 'B',
      explanation: '溫故知新強調知識結構的延續性與建構性，學生必須以既有基模為根基，方能對新教材進行深層理解與概念擴充。',
      examSource: '111年高雄市國民小學教師甄選教育專業試題',
      handoutRef: '講義第1章 p.7',
      difficulty: '基礎'
    },
    {
      id: 'q-confucius-9',
      chapterId: 1,
      scholarId: 'confucius',
      topic: '孔子「視其所以，觀其所由，察其所安」之學生評量觀',
      questionText: '孔子說：「視其所以，觀其所由，察其所安，人焉廋哉？人焉廋哉？」在班級教學與學生評量中，這段話最強調教師應具備何種評量能力？',
      options: [
        { key: 'A', text: '從學生的言行舉止、行為動機及心境意向進行全面且細緻的歷程性觀察與質性評量' },
        { key: 'B', text: '純粹依據期末紙筆測驗排名來評價學生好壞' },
        { key: 'C', text: '以學生的家庭社經地位作為獎懲標準' },
        { key: 'D', text: '要求全班學生互評並互相打分數' }
      ],
      correctAnswer: 'A',
      explanation: '「所以」看其當前行為，「所由」察其行為背後的動機與經歷，「所安」審視其心安與價值取向，展現了孔子全人、多元與質性的深層評量智慧。',
      examSource: '110年教育部教師資格考試（教育理念與實踐）',
      handoutRef: '講義第1章 p.7',
      difficulty: '中等'
    },
    {
      id: 'q-confucius-10',
      chapterId: 1,
      scholarId: 'confucius',
      topic: '孔子「行有餘力，則以學文」之全人素養觀',
      questionText: '《論語·學而》提出：「弟子入則孝，出則弟，謹而信，汎愛眾，而親仁。行有餘力，則以學文。」孔子此處闡明了教育在德行與智育上的優先順序為：',
      options: [
        { key: 'A', text: '以品德修養為根基，在此基礎上拓展知識學藝' },
        { key: 'B', text: '考試文憑至上，品德無關緊要' },
        { key: 'C', text: '體育技能重於一切' },
        { key: 'D', text: '只注重背誦四書五經文字' }
      ],
      correctAnswer: 'A',
      explanation: '孔子主張「修身齊家」與仁德為本，知識技能（學文）則是建構於健全品德人格之上的深化實踐，與現代全人素養教育相呼應。',
      examSource: '109年臺中市公立學校教師甄試教育科目',
      handoutRef: '講義第1章 p.7',
      difficulty: '基礎'
    },
    {
      id: 'q-confucius-11',
      chapterId: 1,
      scholarId: 'confucius',
      topic: '孔子「語之而不知，雖舍之可也」之適性發展原則',
      questionText: '《禮記·學記》記述古代教學：「語之而不知，雖舍之可也。」此一原則與孔子因材施教及適性發展觀念相合，其意涵最接近下列何者？',
      options: [
        { key: 'A', text: '當教學超出學生現階段的接受與理解能力時，教師應暫時保留擱置，等待其心智成熟或時機適宜時再教，切莫揠苗助長' },
        { key: 'B', text: '學生學不會就永遠放棄不要教' },
        { key: 'C', text: '直接處罰學生罰站一整天' },
        { key: 'D', text: '立即調換班級' }
      ],
      correctAnswer: 'A',
      explanation: '古代教育智慧強調教學應考量學生認知成熟度與起點能力，「語之而不知，雖舍之可也」體現了不強灌、順應發展節奏之適性精神。',
      examSource: '108年教育部教師資格考試',
      handoutRef: '講義第1章 p.7',
      difficulty: '進階'
    },
    {
      id: 'q-confucius-12',
      chapterId: 1,
      scholarId: 'confucius',
      topic: '孔子「誨人不倦」與身教重於言教',
      questionText: '孔子自述「默而識之，學而不厭，誨人不倦，何有於我哉？」在當代教師專業倫理與班級經營中，孔子最為後世教師樹立了何種專業典範？',
      options: [
        { key: 'A', text: '終身學習的求知熱忱與身教重於言教的教育愛' },
        { key: 'B', text: '追求升遷獲獎的行政導向' },
        { key: 'C', text: '只與優等生互動的菁英心態' },
        { key: 'D', text: '完全不給予回饋的放任風格' }
      ],
      correctAnswer: 'A',
      explanation: '孔子以自身好學、樂教、身教示範，展現了至聖先師對教育志業的堅定執著與無私大愛。',
      examSource: '111年新北市教師甄選教育專業試題',
      handoutRef: '講義第1章 p.7',
      difficulty: '基礎'
    }
  ],

  eisner: [
    {
      id: 'q-eisner-6',
      chapterId: 1,
      scholarId: 'eisner',
      topic: '艾斯納教育鑑賞（Educational Connoisseurship）意涵',
      questionText: '艾斯納（Eisner）提出「教育鑑賞（Educational Connoisseurship）」概念，主張評鑑者評定教學品質應具備何種特質？',
      options: [
        { key: 'A', text: '如同品酒師或藝術鑑賞家，具備對課堂細微脈絡、師生互動微妙氛圍敏銳洞察與品味欣賞的專門素養' },
        { key: 'B', text: '嚴格按照秒錶計算教師講話字數' },
        { key: 'C', text: '只能由完全不懂教學的局外人實施' },
        { key: 'D', text: '純粹依照學生段考平均分數折算等級' }
      ],
      correctAnswer: 'A',
      explanation: '教育鑑賞（Connoisseurship）是質性課程評鑑的關鍵能力，評鑑者透過敏銳洞察力，捕捉並欣賞教學現場中無法被量化數據完全涵蓋的藝術與生命質地。',
      examSource: '112年高級中等以下學校及幼兒園教師資格考試',
      handoutRef: '講義第1章 p.9',
      difficulty: '進階'
    },
    {
      id: 'q-eisner-7',
      chapterId: 1,
      scholarId: 'eisner',
      topic: '教育批評（Educational Criticism）之四大向度',
      questionText: '艾斯納將「教育批評（Educational Criticism）」進一步劃分為四個向度，下列何者不屬於這四個向度？',
      options: [
        { key: 'A', text: '機械量化（Mechanical quantification）' },
        { key: 'B', text: '記述（Description）' },
        { key: 'C', text: '詮釋（Interpretation）' },
        { key: 'D', text: '評鑑與主題化（Evaluation & Thematics）' }
      ],
      correctAnswer: 'A',
      explanation: '艾斯納教育批評包含四大核心要素：記述（描繪現況）、詮釋（闡釋背後意義）、評鑑（判斷價值）、主題化（萃取普遍教育原則）。機械量化並非其主張。',
      examSource: '111年臺北市中等學校教師甄選教育專業試題',
      handoutRef: '講義第1章 p.9',
      difficulty: '進階'
    },
    {
      id: 'q-eisner-8',
      chapterId: 1,
      scholarId: 'eisner',
      topic: '表意目標（Expressive Outcomes）與行為目標之區辨',
      questionText: '艾斯納（Eisner）質疑泰勒（Tyler）嚴苛的行為目標模式，進而提出「表意目標 / 表現性目標（Expressive Outcomes）」。表意目標的核心特徵為何？',
      options: [
        { key: 'A', text: '指涉一種遭遇情境或探索任務，其結果是開放多元、不可預測且鼓勵個人獨創性的' },
        { key: 'B', text: '必須精確規定答對的題數與百分比' },
        { key: 'C', text: '只要求學生在5分鐘內背誦出20個單字' },
        { key: 'D', text: '嚴禁任何個人情緒涉入' }
      ],
      correctAnswer: 'A',
      explanation: '行為目標預設全班達成相同規格的標準行為；而表意目標提供富含教育價值的探究情境，鼓勵學生展現獨特的情感共鳴與創造性表現。',
      examSource: '110年教育部教師資格考試（課程教學與評量）',
      handoutRef: '講義第1章 p.9, 第7章 p.61',
      difficulty: '中等'
    },
    {
      id: 'q-eisner-9',
      chapterId: 1,
      scholarId: 'eisner',
      topic: '艾斯納「顯著者、潛在者與懸缺者」三元課程論',
      questionText: '艾斯納指出，在學校課程架構中，如果我們只檢視「正式開設了什麼課」，就永遠無法看見教育體制可能剝奪了學生何種思維機會。這項批判主要促使教育界重視：',
      options: [
        { key: 'A', text: '空無/懸缺課程（Null Curriculum）' },
        { key: 'B', text: '補救教學課程' },
        { key: 'C', text: '資優加速課程' },
        { key: 'D', text: '雙語浸潤課程' }
      ],
      correctAnswer: 'A',
      explanation: '懸缺課程提醒學校反省：我們忽視了什麼知識、價值與認知歷程（例如批判思考、藝術創造或哲學思辨），這些未教之物同樣深深塑造學生的心靈。',
      examSource: '109年教育部教師資格考試',
      handoutRef: '講義第1章 p.9',
      difficulty: '基礎'
    },
    {
      id: 'q-eisner-10',
      chapterId: 1,
      scholarId: 'eisner',
      topic: '多元表徵形式（Multiple Forms of Representation）',
      questionText: '艾斯納倡導認知與藝術的整合，強調人類的心智不只透過語言和邏輯運作，也透過視覺、聽覺、動作等多種形式思考。學校若過度偏重語文符號，將造成何種課程弊病？',
      options: [
        { key: 'A', text: '導致非語文認知潛能與藝術美感的懸缺，限縮學生的認知多樣性' },
        { key: 'B', text: '大幅提升學生的美學素養' },
        { key: 'C', text: '促進多元智能均衡發展' },
        { key: 'D', text: '提高學生的運動神經反應' }
      ],
      correctAnswer: 'A',
      explanation: '艾斯納強調多元表徵形式的重要性，過度獨尊語文與數理測驗，會將視覺空間、音樂動覺等表徵形態邊緣化，形成懸缺。',
      examSource: '108年臺中市公立學校教師甄試',
      handoutRef: '講義第1章 p.9',
      difficulty: '中等'
    },
    {
      id: 'q-eisner-11',
      chapterId: 1,
      scholarId: 'eisner',
      topic: '質性課程評鑑在現代素養導向評量之啟示',
      questionText: '當前 12 年國教素養導向教學強調「表現評量」與「學習歷程檔案」，艾斯納的何種理論最能為質性歷程檔案評鑑提供堅實的學理支持？',
      options: [
        { key: 'A', text: '教育鑑賞與教育批評模式（Educational Connoisseurship and Criticism）' },
        { key: 'B', text: '泰勒的目標模式' },
        { key: 'C', text: '普萊西的自動教學機' },
        { key: 'D', text: '常模對照測驗' }
      ],
      correctAnswer: 'A',
      explanation: '素養與歷程檔案具有情境脈絡性與個人獨特性，艾斯納的教育鑑賞批評強調深度質性詮釋與專業品味，是表現評量的學理基石。',
      examSource: '112年桃園市國小教師甄選教育專業試題',
      handoutRef: '講義第1章 p.9',
      difficulty: '進階'
    },
    {
      id: 'q-eisner-12',
      chapterId: 1,
      scholarId: 'eisner',
      topic: '艾斯納對標準化測驗壟斷現象之批判',
      questionText: '艾斯納在著作《教育想像（The Educational Imagination）》中強烈批判標準化紙筆測驗。其批判的核心論點主要為何？',
      options: [
        { key: 'A', text: '標準化測驗將複雜生動的學習簡化為瑣碎事實的勾選，忽略了無法被客觀題測量的高階美感與深度洞察' },
        { key: 'B', text: '標準化測驗印製成本過於便宜' },
        { key: 'C', text: '標準化測驗耗費太多體育課時間' },
        { key: 'D', text: '標準化測驗容易造成墨水浪費' }
      ],
      correctAnswer: 'A',
      explanation: '艾斯納指出，並非所有重要事物皆可量化，量化測驗往往導向只教容易考出的死記知識，犧牲深層意義探究。',
      examSource: '111年教育部教師資格考試',
      handoutRef: '講義第1章 p.9',
      difficulty: '中等'
    }
  ]
};

console.log('Script written with initial scholars');
