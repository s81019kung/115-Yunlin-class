# scripts/data_scholars_part1.py
# Scholars: socrates, confucius, eisner, pavlov, thorndike, skinner, carroll, morrison

QUESTIONS_PART1 = [
  # ----------------------------------------------------
  # 1. 蘇格拉底 (socrates) - 5 new
  # ----------------------------------------------------
  {
    "id": "q-socrates-7",
    "chapterId": 1,
    "scholarId": "socrates",
    "topic": "蘇格拉底之反詰法（Elenchus）教學歷程",
    "questionText": "在蘇格拉底的詰問法歷程中，教師首先提出問題讓學生回答，接著指出其回答中的矛盾之處，促使學生發現自己思維漏洞。此一打破對方自以為是觀點的階段稱為什麼？",
    "options": [
      { "key": "A", "text": "反詰法（Elenchus / 破斥）" },
      { "key": "B", "text": "回憶說（Anamnesis）" },
      { "key": "C", "text": "歸納定義（Inductive definition）" },
      { "key": "D", "text": "感官印刻（Sensory engraving）" }
    ],
    "correctAnswer": "A",
    "explanation": "反詰法（Elenchus）是產婆術的第一步，透過一連串追問揭露對方概念定義的自相矛盾，使對方承認「自覺的無知」，為後續催生真理鋪路。",
    "examSource": "112年新北市國民小學教師甄選教育專業科目",
    "handoutRef": "講義第1章 p.8, p.15",
    "difficulty": "中等"
  },
  {
    "id": "q-socrates-8",
    "chapterId": 1,
    "scholarId": "socrates",
    "topic": "蘇格拉底「知識即美德」之意涵",
    "questionText": "蘇格拉底主張「知識即美德（Virtue is Knowledge）」，其意旨為何？",
    "options": [
      { "key": "A", "text": "只要會背誦倫理道德規範就是有美德的人" },
      { "key": "B", "text": "人之所以作惡多半是因為無知；若真正洞察善的真諦，必然會踐行善行" },
      { "key": "C", "text": "只有受過高等教育的大學者才具備道德品行" },
      { "key": "D", "text": "知識多寡與道德行為毫無關聯" }
    ],
    "correctAnswer": "B",
    "explanation": "蘇格拉底認為無人會自願為惡，作惡源於對善與利益的無知或錯認。真正的知識不僅是事實認知，更是一種實踐智慧，真知必然導向德行。",
    "examSource": "111年教育部教師資格考試（教育理念與實踐）",
    "handoutRef": "講義第1章 p.15",
    "difficulty": "基礎"
  },
  {
    "id": "q-socrates-9",
    "chapterId": 8,
    "scholarId": "socrates",
    "topic": "蘇格拉底產婆法與問思教學法之關聯",
    "questionText": "國中社會領域陳老師在進行法律與道德單元教學時，不直接宣布答案，而是透過設計層層遞進的提問鏈，引導學生在小組討論中澄清觀念。陳老師的教學主要體現了：",
    "options": [
      { "key": "A", "text": "蘇格拉底式的詰問探究教學（Socratic Questioning）" },
      { "key": "B", "text": "史金納的編序精熟增強法" },
      { "key": "C", "text": "巴夫洛夫的古典條件刺激制約" },
      { "key": "D", "text": "莫禮生的單元同化默背法" }
    ],
    "correctAnswer": "A",
    "explanation": "蘇格拉底式提問法（Socratic Questioning）強調透過系統性、批判性的問答引導學生探究核心問題，培養反思與邏輯辯證能力。",
    "examSource": "110年臺北市立中等學校教師聯合甄選",
    "handoutRef": "講義第8章 p.68, 第1章 p.16",
    "difficulty": "基礎"
  },
  {
    "id": "q-socrates-10",
    "chapterId": 13,
    "scholarId": "socrates",
    "topic": "產婆法在學生學習動機引導之成效",
    "questionText": "依據教育哲學與教學原理，蘇格拉底產婆法之所以能引發學生強烈的內在學習動機，關鍵在於下列何項因素？",
    "options": [
      { "key": "A", "text": "學生由原先的自滿轉為「自覺無知」，因而產生對探索真理的強烈好奇與認知失衡渴望" },
      { "key": "B", "text": "答對問題能獲得大量的金錢獎勵" },
      { "key": "C", "text": "害怕教師當眾斥責而不得不主動回答" },
      { "key": "D", "text": "提問內容全為是非題容易猜測" }
    ],
    "correctAnswer": "A",
    "explanation": "產婆法打破虛妄的知，引發學生的認知失衡（Cognitive Disequilibrium），使求知欲望成為自發的內在探究驅動力。",
    "examSource": "109年高級中等以下學校及幼兒園教師資格考試",
    "handoutRef": "講義第13章 p.111, 第1章 p.15",
    "difficulty": "中等"
  },
  {
    "id": "q-socrates-11",
    "chapterId": 1,
    "scholarId": "socrates",
    "topic": "回憶說（Anamnesis）之認識論基礎",
    "questionText": "在柏拉圖的《美諾篇（Meno）》中，蘇格拉底透過引導一名從未受過幾何訓練的童僕自行推導出幾何定理，藉以證明知識並非外在灌輸，而是心靈內在的喚醒。此一主張被稱為：",
    "options": [
      { "key": "A", "text": "回憶說（Theory of Recollection / Anamnesis）" },
      { "key": "B", "text": "白板說（Tabula Rasa）" },
      { "key": "C", "text": "經驗印刻說（Empirical Imprinting）" },
      { "key": "D", "text": "行為塑造說（Behavioral Shaping）" }
    ],
    "correctAnswer": "A",
    "explanation": "回憶說主張人的靈魂在投胎前已具有完美理型知識，世俗的學習實質上是靈魂透過理性反省與外在啟發重新「回憶」起來的歷程。",
    "examSource": "108年教育部高級中等以下學校教師資格考試",
    "handoutRef": "講義第1章 p.15",
    "difficulty": "進階"
  },

  # ----------------------------------------------------
  # 2. 孔子 (confucius) - 6 new
  # ----------------------------------------------------
  {
    "id": "q-confucius-7",
    "chapterId": 1,
    "scholarId": "confucius",
    "topic": "「不憤不啟，不悱不發」之啟發教學時機",
    "questionText": "《論語·述而》：「不憤不啟，不悱不發。舉一隅不以三隅反，則不復也。」其中「憤」與「悱」在現代教學心理學中分別代表學生的何種心智狀態？",
    "options": [
      { "key": "A", "text": "憤：心裡想求明白而尚未豁然貫通；悱：口中想表達卻辭不達意" },
      { "key": "B", "text": "憤：因受到處罰而憤怒；悱：因過度自卑而悲傷" },
      { "key": "C", "text": "憤：已經熟能生巧；悱：想要提早交卷" },
      { "key": "D", "text": "憤：體力充沛；悱：注意力不集中" }
    ],
    "correctAnswer": "A",
    "explanation": "朱熹解：「憤者，心求通而未得之意；悱者，口欲言而未能之貌。啟，謂開其意；發，謂達其辭。」唯有學生經過苦思卡關時點撥，才能獲得最大教學成效。",
    "examSource": "112年教育部教師資格考試（學習者發展與適性輔導）",
    "handoutRef": "講義第1章 p.7",
    "difficulty": "中等"
  },
  {
    "id": "q-confucius-8",
    "chapterId": 1,
    "scholarId": "confucius",
    "topic": "孔子「溫故而知新」之教學原理",
    "questionText": "孔子提倡「溫故而知新，可以為師矣」。從現代教學原理的先備知識與有意義學習觀點檢視，溫故知新的核心在於：",
    "options": [
      { "key": "A", "text": "機械式重複抄寫直到永久記憶" },
      { "key": "B", "text": "藉由喚起與精熟舊有經驗（先備知識），作為建構並同化新知識的穩固基礎" },
      { "key": "C", "text": "徹底摒棄過去的所有教材觀念" },
      { "key": "D", "text": "要求每堂課都由學生輪流上台講課" }
    ],
    "correctAnswer": "B",
    "explanation": "溫故知新強調知識結構的延續性與建構性，學生必須以既有基模為根基，方能對新教材進行深層理解與概念擴充。",
    "examSource": "111年高雄市國民小學教師甄選教育專業試題",
    "handoutRef": "講義第1章 p.7",
    "difficulty": "基礎"
  },
  {
    "id": "q-confucius-9",
    "chapterId": 1,
    "scholarId": "confucius",
    "topic": "孔子「視其所以，觀其所由，察其所安」之學生評量觀",
    "questionText": "孔子說：「視其所以，觀其所由，察其所安，人焉廋哉？人焉廋哉？」在班級教學與學生評量中，這段話最強調教師應具備何種評量能力？",
    "options": [
      { "key": "A", "text": "從學生的言行舉止、行為動機及心境意向進行全面且細緻的歷程性觀察與質性評量" },
      { "key": "B", "text": "純粹依據期末紙筆測驗排名來評價學生好壞" },
      { "key": "C", "text": "以學生的家庭社經地位作為獎懲標準" },
      { "key": "D", "text": "要求全班學生互評並互相打分數" }
    ],
    "correctAnswer": "A",
    "explanation": "「所以」看其當前行為，「所由」察其行為背後的動機與經歷，「所安」審視其心安與價值取向，展現了孔子全人、多元與質性的深層評量智慧。",
    "examSource": "110年教育部教師資格考試（教育理念與實踐）",
    "handoutRef": "講義第1章 p.7",
    "difficulty": "中等"
  },
  {
    "id": "q-confucius-10",
    "chapterId": 1,
    "scholarId": "confucius",
    "topic": "孔子「行有餘力，則以學文」之全人素養觀",
    "questionText": "《論語·學而》提出：「弟子入則孝，出則弟，謹而信，汎愛眾，而親仁。行有餘力，則以學文。」孔子此處闡明了教育在德行與智育上的優先順序為：",
    "options": [
      { "key": "A", "text": "以品德修養為根基，在此基礎上拓展知識學藝" },
      { "key": "B", "text": "考試文憑至上，品德無關緊要" },
      { "key": "C", "text": "體育技能重於一切" },
      { "key": "D", "text": "只注重背誦四書五經文字" }
    ],
    "correctAnswer": "A",
    "explanation": "孔子主張「修身齊家」與仁德為本，知識技能（學文）則是建構於健全品德人格之上的深化實踐，與現代全人素養教育相呼應。",
    "examSource": "109年臺中市公立學校教師甄試教育科目",
    "handoutRef": "講義第1章 p.7",
    "difficulty": "基礎"
  },
  {
    "id": "q-confucius-11",
    "chapterId": 1,
    "scholarId": "confucius",
    "topic": "孔子「語之而不知，雖舍之可也」之適性發展原則",
    "questionText": "《禮記·學記》記述古代教學：「語之而不知，雖舍之可也。」此一原則與孔子因材施教及適性發展觀念相合，其意涵最接近下列何者？",
    "options": [
      { "key": "A", "text": "當教學超出學生現階段的接受與理解能力時，教師應暫時保留擱置，等待其心智成熟或時機適宜時再教，切莫揠苗助長" },
      { "key": "B", "text": "學生學不會就永遠放棄不要教" },
      { "key": "C", "text": "直接處罰學生罰站一整天" },
      { "key": "D", "text": "立即調換班級" }
    ],
    "correctAnswer": "A",
    "explanation": "古代教育智慧強調教學應考量學生認知成熟度與起點能力，「語之而不知，雖舍之可也」體現了不強灌、順應發展節奏之適性精神。",
    "examSource": "108年教育部教師資格考試",
    "handoutRef": "講義第1章 p.7",
    "difficulty": "進階"
  },
  {
    "id": "q-confucius-12",
    "chapterId": 1,
    "scholarId": "confucius",
    "topic": "孔子「誨人不倦」與身教重於言教",
    "questionText": "孔子自述「默而識之，學而不厭，誨人不倦，何有於我哉？」在當代教師專業倫理與班級經營中，孔子最為後世教師樹立了何種專業典範？",
    "options": [
      { "key": "A", "text": "終身學習的求知熱忱與身教重於言教的教育愛" },
      { "key": "B", "text": "追求升遷獲獎的行政導向" },
      { "key": "C", "text": "只與優等生互動的菁英心態" },
      { "key": "D", "text": "完全不給予回饋的放任風格" }
    ],
    "correctAnswer": "A",
    "explanation": "孔子以自身好學、樂教、身教示範，展現了至聖先師對教育志業的堅定執著與無私大愛。",
    "examSource": "111年新北市教師甄選教育專業試題",
    "handoutRef": "講義第1章 p.7",
    "difficulty": "基礎"
  },

  # ----------------------------------------------------
  # 3. 艾斯納 (eisner) - 7 new
  # ----------------------------------------------------
  {
    "id": "q-eisner-6",
    "chapterId": 1,
    "scholarId": "eisner",
    "topic": "艾斯納教育鑑賞（Educational Connoisseurship）意涵",
    "questionText": "艾斯納（Eisner）提出「教育鑑賞（Educational Connoisseurship）」概念，主張評鑑者評定教學品質應具備何種特質？",
    "options": [
      { "key": "A", "text": "如同品酒師或藝術鑑賞家，具備對課堂細微脈絡、師生互動微妙氛圍敏銳洞察與品味欣賞的專門素養" },
      { "key": "B", "text": "嚴格按照秒錶計算教師講話字數" },
      { "key": "C", "text": "只能由完全不懂教學的局外人實施" },
      { "key": "D", "text": "純粹依照學生段考平均分數折算等級" }
    ],
    "correctAnswer": "A",
    "explanation": "教育鑑賞（Connoisseurship）是質性課程評鑑的關鍵能力，評鑑者透過敏銳洞察力，捕捉並欣賞教學現場中無法被量化數據完全涵蓋的藝術與生命質地。",
    "examSource": "112年高級中等以下學校及幼兒園教師資格考試",
    "handoutRef": "講義第1章 p.9",
    "difficulty": "進階"
  },
  {
    "id": "q-eisner-7",
    "chapterId": 1,
    "scholarId": "eisner",
    "topic": "教育批評（Educational Criticism）之四大向度",
    "questionText": "艾斯納將「教育批評（Educational Criticism）」進一步劃分為四個向度，下列何者不屬於這四個向度？",
    "options": [
      { "key": "A", "text": "機械量化（Mechanical quantification）" },
      { "key": "B", "text": "記述（Description）" },
      { "key": "C", "text": "詮釋（Interpretation）" },
      { "key": "D", "text": "評鑑與主題化（Evaluation & Thematics）" }
    ],
    "correctAnswer": "A",
    "explanation": "艾斯納教育批評包含四大核心要素：記述（描繪現況）、詮釋（闡釋背後意義）、評鑑（判斷價值）、主題化（萃取普遍教育原則）。機械量化並非其主張。",
    "examSource": "111年臺北市中等學校教師甄選教育專業試題",
    "handoutRef": "講義第1章 p.9",
    "difficulty": "進階"
  },
  {
    "id": "q-eisner-8",
    "chapterId": 1,
    "scholarId": "eisner",
    "topic": "表意目標（Expressive Outcomes）與行為目標之區辨",
    "questionText": "艾斯納（Eisner）質疑泰勒（Tyler）嚴苛的行為目標模式，進而提出「表意目標 / 表現性目標（Expressive Outcomes）」。表意目標的核心特徵為何？",
    "options": [
      { "key": "A", "text": "指涉一種遭遇情境或探索任務，其結果是開放多元、不可預測且鼓勵個人獨創性的" },
      { "key": "B", "text": "必須精確規定答對的題數與百分比" },
      { "key": "C", "text": "只要求學生在5分鐘內背誦出20個單字" },
      { "key": "D", "text": "嚴禁任何個人情緒涉入" }
    ],
    "correctAnswer": "A",
    "explanation": "行為目標預設全班達成相同規格的標準行為；而表意目標提供富含教育價值的探究情境，鼓勵學生展現獨特的情感共鳴與創造性表現。",
    "examSource": "110年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第1章 p.9, 第7章 p.61",
    "difficulty": "中等"
  },
  {
    "id": "q-eisner-9",
    "chapterId": 1,
    "scholarId": "eisner",
    "topic": "艾斯納「顯著者、潛在者與懸缺者」三元課程論",
    "questionText": "艾斯納指出，在學校課程架構中，如果我們只檢視「正式開設了什麼課」，就永遠無法看見教育體制可能剝奪了學生何種思維機會。這項批判主要促使教育界重視：",
    "options": [
      { "key": "A", "text": "空無/懸缺課程（Null Curriculum）" },
      { "key": "B", "text": "補救教學課程" },
      { "key": "C", "text": "資優加速課程" },
      { "key": "D", "text": "雙語浸潤課程" }
    ],
    "correctAnswer": "A",
    "explanation": "懸缺課程提醒學校反省：我們忽視了什麼知識、價值與認知歷程（例如批判思考、藝術創造或哲學思辨），這些未教之物同樣深深塑造學生的心靈。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第1章 p.9",
    "difficulty": "基礎"
  },
  {
    "id": "q-eisner-10",
    "chapterId": 1,
    "scholarId": "eisner",
    "topic": "多元表徵形式（Multiple Forms of Representation）",
    "questionText": "艾斯納倡導認知與藝術的整合，強調人類的心智不只透過語言和邏輯運作，也透過視覺、聽覺、動作等多種形式思考。學校若過度偏重語文符號，將造成何種課程弊病？",
    "options": [
      { "key": "A", "text": "導致非語文認知潛能與藝術美感的懸缺，限縮學生的認知多樣性" },
      { "key": "B", "text": "大幅提升學生的美學素養" },
      { "key": "C", "text": "促進多元智能均衡發展" },
      { "key": "D", "text": "提高學生的運動神經反應" }
    ],
    "correctAnswer": "A",
    "explanation": "艾斯納強調多元表徵形式的重要性，過度獨尊語文與數理測驗，會將視覺空間、音樂動覺等表徵形態邊緣化，形成懸缺。",
    "examSource": "108年臺中市公立學校教師甄試",
    "handoutRef": "講義第1章 p.9",
    "difficulty": "中等"
  },
  {
    "id": "q-eisner-11",
    "chapterId": 1,
    "scholarId": "eisner",
    "topic": "質性課程評鑑在現代素養導向評量之啟示",
    "questionText": "當前 12 年國教素養導向教學強調「表現評量」與「學習歷程檔案」，艾斯納的何種理論最能為質性歷程檔案評鑑提供堅實的學理支持？",
    "options": [
      { "key": "A", "text": "教育鑑賞與教育批評模式（Educational Connoisseurship and Criticism）" },
      { "key": "B", "text": "泰勒的目標模式" },
      { "key": "C", "text": "普萊西的自動教學機" },
      { "key": "D", "text": "常模對照測驗" }
    ],
    "correctAnswer": "A",
    "explanation": "素養與歷程檔案具有情境脈絡性與個人獨特性，艾斯納的教育鑑賞批評強調深度質性詮釋與專業品味，是表現評量的學理基石。",
    "examSource": "112年桃園市國小教師甄選教育專業試題",
    "handoutRef": "講義第1章 p.9",
    "difficulty": "進階"
  },
  {
    "id": "q-eisner-12",
    "chapterId": 1,
    "scholarId": "eisner",
    "topic": "艾斯納對標準化測驗壟斷現象之批判",
    "questionText": "艾斯納在著作《教育想像（The Educational Imagination）》中強烈批判標準化紙筆測驗。其批判的核心論點主要為何？",
    "options": [
      { "key": "A", "text": "標準化測驗將複雜生動的學習簡化為瑣碎事實的勾選，忽略了無法被客觀題測量的高階美感與深度洞察" },
      { "key": "B", "text": "標準化測驗印製成本過於便宜" },
      { "key": "C", "text": "標準化測驗耗費太多體育課時間" },
      { "key": "D", "text": "標準化測驗容易造成墨水浪費" }
    ],
    "correctAnswer": "A",
    "explanation": "艾斯納指出，並非所有重要事物皆可量化，量化測驗往往導向只教容易考出的死記知識，犧牲深層意義探究。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第1章 p.9",
    "difficulty": "中等"
  },

  # ----------------------------------------------------
  # 4. 巴夫洛夫 (pavlov) - 9 new
  # ----------------------------------------------------
  {
    "id": "q-pavlov-4",
    "chapterId": 2,
    "scholarId": "pavlov",
    "topic": "刺激類化（Stimulus Generalization）之課堂實務",
    "questionText": "小明在一年級時被嚴格苛刻的數學男老師嚴厲體罰，因而產生極大恐懼。升上二年級後，小明只要看見所有戴眼鏡且身型相似的男老師都會心跳加速、害怕發抖。這種現象屬於古典制約的：",
    "options": [
      { "key": "A", "text": "刺激類化（Stimulus Generalization）" },
      { "key": "B", "text": "刺激辨別（Stimulus Discrimination）" },
      { "key": "C", "text": "行為塑造（Behavior Shaping）" },
      { "key": "D", "text": "效果律反應（Law of Effect）" }
    ],
    "correctAnswer": "A",
    "explanation": "刺激類化是指個體對與原制約刺激（CS）相似的其他刺激，也會產生類似制約反應（CR）的現象。小明將對原男老師的恐懼類化到其他相貌相近的男老師身上。",
    "examSource": "112年教育部教師資格考試（學習者發展）",
    "handoutRef": "講義第2章 p.20-21",
    "difficulty": "基礎"
  },
  {
    "id": "q-pavlov-5",
    "chapterId": 2,
    "scholarId": "pavlov",
    "topic": "刺激辨別（Stimulus Discrimination）與精確反應",
    "questionText": "承上題，後來小明發現新來的自然男老師非常和藹親切，漸漸地小明只有看見數學男老師時才會緊張，看見自然老師時則能放鬆微笑。這代表小明產生了何種心理歷程？",
    "options": [
      { "key": "A", "text": "刺激辨別（Stimulus Discrimination）" },
      { "key": "B", "text": "消弱突增（Extinction Burst）" },
      { "key": "C", "text": "代幣制約（Token Conditioning）" },
      { "key": "D", "text": "潛在學習（Latent Learning）" }
    ],
    "correctAnswer": "A",
    "explanation": "刺激辨別是指個體能區辨不同的刺激，只對特定的制約刺激產生制約反應，對其他相似但不具備相同後果的刺激不再反應。",
    "examSource": "111年新北市公立國小教師甄試教育學科",
    "handoutRef": "講義第2章 p.21",
    "difficulty": "基礎"
  },
  {
    "id": "q-pavlov-6",
    "chapterId": 2,
    "scholarId": "pavlov",
    "topic": "古典制約之消弱（Extinction）歷程",
    "questionText": "在古典制約實驗中，若連續多次僅呈現制約刺激（CS，如鈴聲），而不再伴隨非制約刺激（UCS，如食物肉粉），則制約反應（CR，流唾液）的強度會逐漸減弱直至消失。此一現象稱作：",
    "options": [
      { "key": "A", "text": "消弱（Extinction）" },
      { "key": "B", "text": "負增強（Negative Reinforcement）" },
      { "key": "C", "text": "習慣化（Habituation）" },
      { "key": "D", "text": "行為懲罰（Punishment）" }
    ],
    "correctAnswer": "A",
    "explanation": "當制約刺激長期單獨出現而失去預測非制約刺激的訊號功能時，條件反射會逐漸消退，即為消弱現象。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第2章 p.21",
    "difficulty": "基礎"
  },
  {
    "id": "q-pavlov-7",
    "chapterId": 2,
    "scholarId": "pavlov",
    "topic": "自發恢復（Spontaneous Recovery）現象",
    "questionText": "當某一制約反應經過消弱且完全停止後，經過一段時間休息，若再次單獨呈現該制約刺激（CS），個體可能又會突然展現出先前已消失的制約反應。巴夫洛夫稱此現象為：",
    "options": [
      { "key": "A", "text": "自發恢復（Spontaneous Recovery）" },
      { "key": "B", "text": "逆向制約（Backward Conditioning）" },
      { "key": "C", "text": "刺激替代（Stimulus Substitution）" },
      { "key": "D", "text": "感覺記憶（Sensory Memory）" }
    ],
    "correctAnswer": "A",
    "explanation": "自發恢復證明消弱並非將原有的神經聯結完全抹除，而是產生了一種抑制機制；經過時間間隔後，原聯結會暫時重新顯現。",
    "examSource": "109年高級中等學校教師資格考試",
    "handoutRef": "講義第2章 p.21",
    "difficulty": "中等"
  },
  {
    "id": "q-pavlov-8",
    "chapterId": 2,
    "scholarId": "pavlov",
    "topic": "次級制約（Higher-Order Conditioning）在教育宣導之應用",
    "questionText": "商業廣告常將知名受歡迎的偶像明星（已具備良好吸引力 CS1）與某新產品（中性刺激 CS2）搭配出現，使消費者對新產品也產生好感與信任。巴夫洛夫將這種以既有制約刺激為基礎建立新制約的歷程稱為：",
    "options": [
      { "key": "A", "text": "高層次/次級制約（Higher-Order Conditioning）" },
      { "key": "B", "text": "操作制約（Operant Conditioning）" },
      { "key": "C", "text": "延遲制約（Delay Conditioning）" },
      { "key": "D", "text": "痕跡制約（Trace Conditioning）" }
    ],
    "correctAnswer": "A",
    "explanation": "次級制約是指利用一個已經建立成功的制約刺激（CS1），去跟另一個中性刺激配對，進而使新刺激也能引發制約反應。",
    "examSource": "108年臺北市教師甄選教育專業試題",
    "handoutRef": "講義第2章 p.22",
    "difficulty": "中等"
  },
  {
    "id": "q-pavlov-9",
    "chapterId": 2,
    "scholarId": "pavlov",
    "topic": "系統減敏法（Systematic Desensitization）之古典制約基礎",
    "questionText": "輔導教師協助嚴重考試焦慮的學生，先指導其進行深層肌肉放鬆訓練，再由輕至重循序呈現想像中的考試焦慮情境，以放鬆反應取代焦慮恐懼。這種系統減敏法的心理學原理根源於：",
    "options": [
      { "key": "A", "text": "反制約作用（Counter-conditioning）" },
      { "key": "B", "text": "普氏原則（Premack Principle）" },
      { "key": "C", "text": "外在正增強" },
      { "key": "D", "text": "社會學習示範" }
    ],
    "correctAnswer": "A",
    "explanation": "系統減敏法由沃爾普（Wolpe）創立，根基於巴夫洛夫古典制約的反制約原理（生理放鬆與肌肉焦慮相互拮抗，無法同時存在）。",
    "examSource": "112年臺南市國小教師甄選教育專業科目",
    "handoutRef": "講義第2章 p.22",
    "difficulty": "進階"
  },
  {
    "id": "q-pavlov-10",
    "chapterId": 2,
    "scholarId": "pavlov",
    "topic": "學校恐懼症（School Phobia）之制約成因分析",
    "questionText": "從古典制約的角度分析，許多初入學學童之所以會對學校產生強烈的「上學恐懼症」，最可能的心理學形成途徑為何？",
    "options": [
      { "key": "A", "text": "學校環境（原中性刺激）在不知不覺中與被同儕嘲笑、被體罰或母子分離焦慮（非制約刺激）產生配對聯結" },
      { "key": "B", "text": "學生先天腦部結構萎縮" },
      { "key": "C", "text": "學校教科書字體太小" },
      { "key": "D", "text": "學校營養午餐熱量不足" }
    ],
    "correctAnswer": "A",
    "explanation": "情緒與恐懼往往是古典制約的產物，中性的學校環境若反覆伴隨創傷、受辱或劇烈分離焦慮，學校本身便會轉變為誘發恐懼反應的制約刺激（CS）。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第2章 p.20",
    "difficulty": "中等"
  },
  {
    "id": "q-pavlov-11",
    "chapterId": 2,
    "scholarId": "pavlov",
    "topic": "課堂情境中制約刺激配對時間間隔（Contiguity）",
    "questionText": "在建立古典制約反應時，下列哪一種刺激呈現的時間順序，最容易建立牢固的制約反應？",
    "options": [
      { "key": "A", "text": "前向延遲制約（Delayed Conditioning）：制約刺激（CS）先出現並持續到非制約刺激（UCS）出現" },
      { "key": "B", "text": "後向制約（Backward Conditioning）：非制約刺激先出現，結束後才出現制約刺激" },
      { "key": "C", "text": "相隔三天後才呈現非制約刺激" },
      { "key": "D", "text": "兩者永遠不同時出現" }
    ],
    "correctAnswer": "A",
    "explanation": "實驗證實，前向延遲制約（CS 在 UCS 出現前約 0.5 秒出現並重疊）最有效，因為 CS 能發揮最佳的「信號預測」功能；後向制約效果最差甚至無效。",
    "examSource": "110年新竹縣教師甄選教育專業試題",
    "handoutRef": "講義第2章 p.21",
    "difficulty": "進階"
  },
  {
    "id": "q-pavlov-12",
    "chapterId": 2,
    "scholarId": "pavlov",
    "topic": "班級教學營造正向情緒制約氛圍",
    "questionText": "教師希望學童對閱讀課產生熱愛與期待，依據巴夫洛夫理論，教師最應採取的教學情境設計為何？",
    "options": [
      { "key": "A", "text": "將閱讀活動（CS）與溫暖舒適的沙發、愉悅的故事分享及鼓勵肯定（UCS）緊密配對" },
      { "key": "B", "text": "規定讀不完一本書就罰抄課文五遍" },
      { "key": "C", "text": "全班安靜無聲進行嚴格的閱讀測驗" },
      { "key": "D", "text": "只准優等生進入圖書角" }
    ],
    "correctAnswer": "A",
    "explanation": "透過將中性的學習材料與愉悅放鬆的情緒刺激配對，能讓學生對學科活動產生正向的喜愛制約情緒。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第2章 p.22",
    "difficulty": "基礎"
  },

  # ----------------------------------------------------
  # 5. 桑代克 (thorndike) - 8 new
  # ----------------------------------------------------
  {
    "id": "q-thorndike-5",
    "chapterId": 2,
    "scholarId": "thorndike",
    "topic": "桑代克三大學習律之準備律（Law of Readiness）",
    "questionText": "桑代克提出「準備律（Law of Readiness）」，強調學習者個體身心準備狀態對行為結果滿意度的影響。下列何種情境最符合準備律中的「苦惱狀態」？",
    "options": [
      { "key": "A", "text": "當個體身心處於準備採取行動狀態時，卻被強行阻止而不允許其行動" },
      { "key": "B", "text": "當個體不想運動時，剛好放學回家睡覺" },
      { "key": "C", "text": "當個體肚子餓時，立刻獲得熱騰騰的便當" },
      { "key": "D", "text": "當個體想要解題時，教師適時給予提示" }
    ],
    "correctAnswer": "A",
    "explanation": "準備律的三大原則：1.個體準備做而做，產生滿足；2.個體準備做而不給做，產生苦惱；3.個體不準備做而被強迫去做，亦產生苦惱。",
    "examSource": "112年教育部教師資格考試（學習者發展）",
    "handoutRef": "講義第2章 p.18-19",
    "difficulty": "中等"
  },
  {
    "id": "q-thorndike-6",
    "chapterId": 2,
    "scholarId": "thorndike",
    "topic": "練習律（Law of Exercise）之修訂與盲點",
    "questionText": "桑代克早年提出「練習律（包含使用律與不使用律）」，但其晚年根據實證研究大幅修訂了這項定律，指出純粹盲目的機械重複並不能保證學習進步。其關鍵修正原因在於：",
    "options": [
      { "key": "A", "text": "練習若缺乏伴隨滿意的後果與正確回饋（效果律引導），單純練習並不會自動增強 S-R 聯結" },
      { "key": "B", "text": "所有學生智力均相同不需要練習" },
      { "key": "C", "text": "練習只對動物有效，對人類完全無效" },
      { "key": "D", "text": "紙筆測驗會損耗記憶神經" }
    ],
    "correctAnswer": "A",
    "explanation": "桑代克晚年承認「單純的練習不能導致進步，唯有伴隨結果知悉（Knowledge of results）與滿意回饋的練習才有效」，此即效果律對練習律的修正。",
    "examSource": "111年臺北市國小教師甄試教育學科",
    "handoutRef": "講義第2章 p.19",
    "difficulty": "進階"
  },
  {
    "id": "q-thorndike-7",
    "chapterId": 2,
    "scholarId": "thorndike",
    "topic": "效果律（Law of Effect）之非對稱性修訂",
    "questionText": "桑代克晚年對「效果律」的研究有了重大修改，發現「獎賞（滿意的結果）」與「懲罰（煩惱的結果）」對 S-R 聯結強度的影響並不對稱。其研究結論為：",
    "options": [
      { "key": "A", "text": "滿意的結果能強烈加強 S-R 聯結，但懲罰並不能直接削弱或抹去聯結，只能暫時壓抑行為" },
      { "key": "B", "text": "懲罰的效果遠大於獎勵一百倍" },
      { "key": "C", "text": "獎懲均無任何效果" },
      { "key": "D", "text": "只有體罰才能永久去除錯誤反應" }
    ],
    "correctAnswer": "A",
    "explanation": "桑代克修正效果律：獎賞能直接增強正確聯結，但懲罰並無法直接破壞 S-R 聯結，往往只是使個體嘗試其他逃避行為，奠定了史金納反對懲罰之基礎。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第2章 p.19",
    "difficulty": "進階"
  },
  {
    "id": "q-thorndike-8",
    "chapterId": 2,
    "scholarId": "thorndike",
    "topic": "桑代克「共同要素說（Identical Elements Theory）」學習遷移論",
    "questionText": "在探討學習遷移（Transfer of Learning）時，桑代克反對形式訓練說（心能鍛鍊），提出「共同要素說」。依據此理論，學習遷移之所以能夠發生的先決條件是：",
    "options": [
      { "key": "A", "text": "兩個學習情境之間必須存在客觀相同的成分、刺激特徵或程序要素" },
      { "key": "B", "text": "學生必須背誦拉丁文以訓練大腦肌肉" },
      { "key": "C", "text": "兩門學科的授課教師必須是同一人" },
      { "key": "D", "text": "必須在相同的教室考試" }
    ],
    "correctAnswer": "A",
    "explanation": "共同要素說主張：只有在新舊兩種學習情境具有共同的刺激與反應要素時（例如學會打網球有助於學壁球），正向遷移才會發生。",
    "examSource": "109年高級中等以下學校教師資格考試",
    "handoutRef": "講義第2章 p.18",
    "difficulty": "中等"
  },
  {
    "id": "q-thorndike-9",
    "chapterId": 2,
    "scholarId": "thorndike",
    "topic": "貓咪迷籠實驗之試誤學習本質",
    "questionText": "桑代克將飢餓的貓咪放入迷籠（Puzzle Box）中，觀察其逃脫獲得魚肉的歷程。該實驗證實了學習具有何種根本特質？",
    "options": [
      { "key": "A", "text": "學習是漸進式的盲目試誤（Trial and Error），藉由成功後果刻印聯結，而非突然的理性頓悟" },
      { "key": "B", "text": "動物天生具有完整的物理力學幾何知識" },
      { "key": "C", "text": "學習純粹由社會模仿而來" },
      { "key": "D", "text": "貓咪是透過深思熟慮計畫後才動手" }
    ],
    "correctAnswer": "A",
    "explanation": "迷籠實驗顯示逃脫時間隨次數增加平滑遞減，桑代克據此判定學習是隨機試誤、偶然成功並透過效果律逐漸強化聯結的機械漸進歷程。",
    "examSource": "108年新北市公立國小教甄試題",
    "handoutRef": "講義第2章 p.18",
    "difficulty": "基礎"
  },
  {
    "id": "q-thorndike-10",
    "chapterId": 2,
    "scholarId": "thorndike",
    "topic": "聯結轉移律（Associative Shifting）之課堂引導",
    "questionText": "桑代克指出，如果逐漸在原刺激中加入新刺激，並隨後逐步抽離原刺激，個體對原刺激的反應最終可轉移到新刺激上。這項副律稱為：",
    "options": [
      { "key": "A", "text": "聯結轉移律（Associative Shifting）" },
      { "key": "B", "text": "多差反應律（Multiple Response）" },
      { "key": "C", "text": "心向態度律（Set or Attitude）" },
      { "key": "D", "text": "優勢要素律（Prepotency of Elements）" }
    ],
    "correctAnswer": "A",
    "explanation": "聯結轉移律（相當於古典制約與漸退提示技術的前身），說明反應可以透過刺激的逐步替換與過渡，轉移到嶄新的情境刺激中。",
    "examSource": "112年桃園市教師甄選教育專業試題",
    "handoutRef": "講義第2章 p.19",
    "difficulty": "進階"
  },
  {
    "id": "q-thorndike-11",
    "chapterId": 2,
    "scholarId": "thorndike",
    "topic": "智力三維說（抽象、機械、社會智力）",
    "questionText": "桑代克在智力測驗研究中，率先將人類的智力劃分為三種形態：處理語言符號的「抽象智力」、操作具體工具機器的「機械/具體智力」，以及處理人際關係互動的何種智力？",
    "options": [
      { "key": "A", "text": "社會智力（Social Intelligence）" },
      { "key": "B", "text": "靈性智力（Spiritual Intelligence）" },
      { "key": "C", "text": "體能智力（Bodily Intelligence）" },
      { "key": "D", "text": "自然智力（Naturalistic Intelligence）" }
    ],
    "correctAnswer": "A",
    "explanation": "桑代克智力三維結構：抽象智力（語文數理符號思維）、具體/機械智力（實物操作能力）、社會智力（理解與善待他人的人際知能）。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第2章 p.19",
    "difficulty": "中等"
  },
  {
    "id": "q-thorndike-12",
    "chapterId": 2,
    "scholarId": "thorndike",
    "topic": "試誤學習理論在國小技能科教學之應用",
    "questionText": "國小體育課學習跳繩或桌球正手發球時，學生一開始常手忙腳亂發生多次失誤，教師透過鼓勵肯定、讓學生體驗球過網的成功成就感，幫助學生逐步掌握正確肌肉發力技巧。此一教學過程最吻合：",
    "options": [
      { "key": "A", "text": "桑代克的試誤學習與效果律（Trial and error with Law of Effect）" },
      { "key": "B", "text": "奧斯貝的上位概念同化" },
      { "key": "C", "text": "維高斯基的文化歷史符號中介" },
      { "key": "D", "text": "羅吉斯的非指導性情感宣洩" }
    ],
    "correctAnswer": "A",
    "explanation": "動作技能學習常需經歷摸索試誤，獲得成功回饋（效果律）能鞏固正確神經動作聯結，淘汰無效動作。",
    "examSource": "110年高雄市國小教甄教育學科",
    "handoutRef": "講義第2章 p.18",
    "difficulty": "基礎"
  },

  # ----------------------------------------------------
  # 6. 史金納 (skinner) - 6 new
  # ----------------------------------------------------
  {
    "id": "q-skinner-7",
    "chapterId": 2,
    "scholarId": "skinner",
    "topic": "普氏原則（Premack Principle / 祖母法則）在課堂之應用",
    "questionText": "王老師告訴全班：「只要大家把數學練習題全部認真算完並訂正（低頻率/不喜歡的行為），下半堂課就可以去電腦教室玩程式遊戲（高頻率/喜歡的行為）。」王老師運用了何種行為增強原則？",
    "options": [
      { "key": "A", "text": "普氏原則（Premack Principle）" },
      { "key": "B", "text": "古典制約刺激替代" },
      { "key": "C", "text": "消弱法" },
      { "key": "D", "text": "自發恢復" }
    ],
    "correctAnswer": "A",
    "explanation": "普氏原則（祖母法則）主張：利用個體出現機率較高（喜愛）的行為，作為增強出現機率較低（不喜愛）行為的有效增強物。",
    "examSource": "112年教育部教師資格考試（學習者發展）",
    "handoutRef": "講義第2章 p.23, 第12章 p.98",
    "difficulty": "基礎"
  },
  {
    "id": "q-skinner-8",
    "chapterId": 2,
    "scholarId": "skinner",
    "topic": "行為塑造（Shaping）與連續漸進法（Successive Approximations）",
    "questionText": "自閉症學童小華完全不敢開口發聲，特教李老師先從小華只要嘴唇微動就給予增強，接著要求發出喉音才增強，最後要求說出完整單字才給予增強。這種逐步引導出目標複雜行為的技術稱為：",
    "options": [
      { "key": "A", "text": "行為塑造（Shaping）/ 連續漸進法" },
      { "key": "B", "text": "洪水法（Flooding）" },
      { "key": "C", "text": "嫌惡治療（Aversive Therapy）" },
      { "key": "D", "text": "刺激辨別訓練" }
    ],
    "correctAnswer": "A",
    "explanation": "行為塑造（Shaping）透過對朝向目標行為的每一次微小進步（連續漸進近似反應）給予差異增強，逐步建立起原本個體不會的新複雜行為。",
    "examSource": "111年新北市特殊教育教師甄試教育科目",
    "handoutRef": "講義第2章 p.23",
    "difficulty": "基礎"
  },
  {
    "id": "q-skinner-9",
    "chapterId": 2,
    "scholarId": "skinner",
    "topic": "間歇增強時制（Schedules of Reinforcement）抗消弱性比較",
    "questionText": "在史金納的增強時制研究中，下列哪一種增強時制所塑造出的行為反應速率最高，且在停止增強後「抗消弱性最強（最不易被消弱消失）」（例如拉霸角子老虎機賭博）？",
    "options": [
      { "key": "A", "text": "變動比率增強時制（Variable Ratio, VR）" },
      { "key": "B", "text": "固定比率增強時制（Fixed Ratio, FR）" },
      { "key": "C", "text": "固定時距增強時制（Fixed Interval, FI）" },
      { "key": "D", "text": "連續增強時制（Continuous Reinforcement, CRF）" }
    ],
    "correctAnswer": "A",
    "explanation": "變動比率增強（VR）需要平均次數但不固定的反應才能獲得增強，個體永遠無法預測下一次何時中獎，因此反應持續性最高、抗消弱力最強。",
    "examSource": "110年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第2章 p.24",
    "difficulty": "中等"
  },
  {
    "id": "q-skinner-10",
    "chapterId": 2,
    "scholarId": "skinner",
    "topic": "固定時距增強（FI）之扇貝形反應曲線（Scallop effect）",
    "questionText": "每到期中考前一週，平時不讀書的學生紛紛熬夜抱佛腳；考完當天立刻徹底放鬆不再看書。這種在固定時間增強物（段考成績）出現前反應急遽飆升、出現後反應驟降的曲線特徵被稱為：",
    "options": [
      { "key": "A", "text": "扇貝效應 / 扇貝現象（Scallop Effect）" },
      { "key": "B", "text": "高原期現象（Plateau Effect）" },
      { "key": "C", "text": "蔡戈尼效應（Zeigarnik Effect）" },
      { "key": "D", "text": "霍桑效應（Hawthorne Effect）" }
    ],
    "correctAnswer": "A",
    "explanation": "固定時距時制（FI）會產生典型的「扇貝效應」：增強物剛給予後出現反應停頓，接近增強時間點時反應率急遽攀升。",
    "examSource": "109年臺中市公立學校教師甄試教育科目",
    "handoutRef": "講義第2章 p.24",
    "difficulty": "進階"
  },
  {
    "id": "q-skinner-11",
    "chapterId": 12,
    "scholarId": "skinner",
    "topic": "編序教學法（Programmed Instruction）之五大核心原則",
    "questionText": "史金納基於操作制約理論研發「編序教學法」與教學機，下列哪一項不屬於編序教學的五大原則？",
    "options": [
      { "key": "A", "text": "大步幅原則（Large steps）以增加挫折挑戰度" },
      { "key": "B", "text": "小步子原則（Small steps）" },
      { "key": "C", "text": "積極主動反應原則（Active responding）" },
      { "key": "D", "text": "即時確認與回饋原則（Immediate feedback）與自定步調（Self-pacing）" }
    ],
    "correctAnswer": "A",
    "explanation": "編序教學法五大原則為：小步子（Small steps）、積極反應、即時確認（增強）、自定步調、低錯誤率。因此 A 選項「大步幅」錯誤。",
    "examSource": "108年教育部高級中等以下學校教師資格考試",
    "handoutRef": "講義第12章 p.96-97",
    "difficulty": "中等"
  },
  {
    "id": "q-skinner-12",
    "chapterId": 2,
    "scholarId": "skinner",
    "topic": "消弱突增（Extinction Burst）之處理策略",
    "questionText": "林老師決定對經常以尖叫哭鬧吸引注意的小明實施「消弱策略（不予理會）」。但在實施頭兩天，小明哭鬧得比平時更加劇烈且在地上打滾。依據史金納理論，林老師此時最適宜的做法是：",
    "options": [
      { "key": "A", "text": "堅定維持消弱原則，因為這是行為消失前正常的「消弱突增（Extinction Burst）」現象，若妥協關注反而會大幅增強該劇烈行為" },
      { "key": "B", "text": "立刻抱起小明並給糖果以安撫情緒" },
      { "key": "C", "text": "立刻送醫急救" },
      { "key": "D", "text": "拿木棍當眾體罰" }
    ],
    "correctAnswer": "A",
    "explanation": "消弱剛開始時，個體因原先增強物消失，常會短暫出現頻率與強度劇烈上升的「消弱突增」。此時若屈服給予注意，會使尖叫行為得到變動比率增強而更加惡化。",
    "examSource": "112年高雄市教育專業科目試題",
    "handoutRef": "講義第2章 p.23",
    "difficulty": "中等"
  },

  # ----------------------------------------------------
  # 7. 卡羅 (carroll) - 10 new
  # ----------------------------------------------------
  {
    "id": "q-carroll-3",
    "chapterId": 2,
    "scholarId": "carroll",
    "topic": "卡羅「學校學習模式」之學習程度基本公式",
    "questionText": "約翰·卡羅（John B. Carroll）在 1963 年提出著名的「學校學習模式（Model for School Learning）」，他將學生的「學習程度（Degree of Learning）」界定為下列哪兩個變項的比率？",
    "options": [
      { "key": "A", "text": "實際投入學習時間 ÷ 達成學習所需時間" },
      { "key": "B", "text": "智商測驗分數 ÷ 年齡" },
      { "key": "C", "text": "考試答對題數 ÷ 全班平均題數" },
      { "key": "D", "text": "家庭作業頁數 ÷ 授課節數" }
    ],
    "correctAnswer": "A",
    "explanation": "Carroll 學習公式：學習程度 = f(實際使用時間 / 所需時間)。當分子大於或等於分母時，學習者即可達成完全精熟。",
    "examSource": "112年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第2章 p.25, 第12章 p.94",
    "difficulty": "基礎"
  },
  {
    "id": "q-carroll-4",
    "chapterId": 2,
    "scholarId": "carroll",
    "topic": "卡羅對學生「性向（Aptitude）」的革命性重新界定",
    "questionText": "在卡羅的學習理論中，他對傳統視為遺傳智力上限的「性向（Aptitude）」提出了革命性的詮釋，他認為性向實際上代表什麼？",
    "options": [
      { "key": "A", "text": "學習特定教材所需時間的長短（即學習速率，Rate of learning）" },
      { "key": "B", "text": "個體永遠無法逾越的認知智力天花板" },
      { "key": "C", "text": "學生的道德操守水準" },
      { "key": "D", "text": "學生的藝術繪畫天分" }
    ],
    "correctAnswer": "A",
    "explanation": "卡羅指出：高性向學生只是學得比較快（所需時間少），低性向學生學得較慢（所需時間多）。性向不是成就上限，而是速度量數。只要給足時間與合適教學，人人皆能精熟。",
    "examSource": "111年臺北市國小教師甄試教育科目",
    "handoutRef": "講義第2章 p.25",
    "difficulty": "中等"
  },
  {
    "id": "q-carroll-5",
    "chapterId": 2,
    "scholarId": "carroll",
    "topic": "卡羅模式中五大決定變項之劃分",
    "questionText": "卡羅的學校學習模式包含五個決定學習成敗的核心變項，其中哪三項屬於「學習者個人特質變項」？",
    "options": [
      { "key": "A", "text": "性向、了解教學的能力、毅力（Perseverance）" },
      { "key": "B", "text": "教學品質、學習機會、性向" },
      { "key": "C", "text": "家庭社經地位、身高、毅力" },
      { "key": "D", "text": "學校預算、教師薪資、設備" }
    ],
    "correctAnswer": "A",
    "explanation": "五大變項中，學生個人變項為：性向（決定所需時間）、了解教學能力（影響所需時間）、毅力（願投入的時間）；外在教學變項為：教學品質、學習機會（允許的時間）。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第2章 p.25",
    "difficulty": "中等"
  },
  {
    "id": "q-carroll-6",
    "chapterId": 2,
    "scholarId": "carroll",
    "topic": "毅力（Perseverance）變項之教育意涵",
    "questionText": "卡羅將「毅力（Perseverance）」定義為學生願意在學習任務中保持專注與持續投入的時間量。在教學實務上，教師欲提升學生的毅力，最關鍵的教學途徑為何？",
    "options": [
      { "key": "A", "text": "提升教材的趣味性與切身相關性，建立合宜的成功挑戰機會以增進內在學習動機" },
      { "key": "B", "text": "體罰打手心強迫學生不准下課" },
      { "key": "C", "text": "降低課堂標準到不需要任何努力" },
      { "key": "D", "text": "讓學生完全自由玩手機" }
    ],
    "correctAnswer": "A",
    "explanation": "毅力受到學習動機、自我效能與教學吸引力的影響。優質且具成就感的教學能讓學生主動願意延長專注投入的時間。",
    "examSource": "109年新北市國小教師甄選教育專業試題",
    "handoutRef": "講義第2章 p.25",
    "difficulty": "基礎"
  },
  {
    "id": "q-carroll-7",
    "chapterId": 12,
    "scholarId": "carroll",
    "topic": "學習機會（Opportunity to Learn）與常態編班挑戰",
    "questionText": "卡羅模式中的「學習機會（Opportunity to Learn）」主要指的是：",
    "options": [
      { "key": "A", "text": "教學計畫與體制中允許學生進行學習與練習的「可用時間配當量」" },
      { "key": "B", "text": "出國留學交換學生的名額" },
      { "key": "C", "text": "獲得課外補習的經濟財力" },
      { "key": "D", "text": "參加校外競賽的機會" }
    ],
    "correctAnswer": "A",
    "explanation": "學習機會指學校課程與教師實際撥給該單元學習的充足時間量。若教師因趕進度而過早結束單元，就剝奪了慢速學生的學習機會。",
    "examSource": "108年教育部教師資格考試",
    "handoutRef": "講義第12章 p.94",
    "difficulty": "中等"
  },
  {
    "id": "q-carroll-8",
    "chapterId": 12,
    "scholarId": "carroll",
    "topic": "教學品質（Quality of Instruction）對所需時間之調控",
    "questionText": "卡羅指出，如果教師能提升「教學品質（例如清楚解說、善用前導鷹架、即時訂正）」，將對學生的學習產生何種直接效果？",
    "options": [
      { "key": "A", "text": "能有效減少所有學生達成精熟所需的學習時間" },
      { "key": "B", "text": "會使資優生變得遲鈍" },
      { "key": "C", "text": "會讓全班成績倒退" },
      { "key": "D", "text": "完全不會改變所需時間" }
    ],
    "correctAnswer": "A",
    "explanation": "高品質的教學讓觀念淺顯易懂、解題路徑清晰，能大幅降低學生迷思摸索的時間，使原本需要大量時間的學生也能迅速理解精熟。",
    "examSource": "112年高雄市國民小學教師甄試",
    "handoutRef": "講義第12章 p.94",
    "difficulty": "基礎"
  },
  {
    "id": "q-carroll-9",
    "chapterId": 12,
    "scholarId": "carroll",
    "topic": "卡羅模式對布魯姆（Bloom）精熟教學法之啟發",
    "questionText": "布魯姆（Bloom）深受卡羅模式的啟發，進而提出「精熟學習策略（Mastery Learning）」。布魯姆將卡羅理念轉化為教學行動的最核心假定為：",
    "options": [
      { "key": "A", "text": "只要提供充足的時間與適當質量的個別化教學，常態分班中 90%~95% 的學生都能達到精熟標準" },
      { "key": "B", "text": "只有全校前 5% 的學生有能力學好數學" },
      { "key": "C", "text": "成績分布必須嚴格呈現常態分配鐘型曲線" },
      { "key": "D", "text": "不應該對任何學生實施補救教學" }
    ],
    "correctAnswer": "A",
    "explanation": "Bloom 破除常態分配神話，主張在傳統等速教學下成績才呈常態分配；若給予彈性時間與補救（Carroll 模式），成績將呈現多數精熟的負偏態分布。",
    "examSource": "111年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第12章 p.95",
    "difficulty": "中等"
  },
  {
    "id": "q-carroll-10",
    "chapterId": 12,
    "scholarId": "carroll",
    "topic": "「了解教學的能力」與語文智能及先備知識關聯",
    "questionText": "在卡羅模式中，「了解教學的能力（Ability to understand instruction）」主要取決於學生的哪兩項關鍵知能？",
    "options": [
      { "key": "A", "text": "一般普通智力（尤其是普通語文理解能力）與該單元的先備知識知能" },
      { "key": "B", "text": "體育體能與骨骼發育" },
      { "key": "C", "text": "書寫字跡美觀度" },
      { "key": "D", "text": "班長或幹部領導力" }
    ],
    "correctAnswer": "A",
    "explanation": "學生若語文理解力不足或欠缺先備概念，就無法聽懂教師的語言講解；反之，具備良好語文力與先備知識者能迅速掌握教學內容。",
    "examSource": "110年新北市國小教甄教育科目",
    "handoutRef": "講義第2章 p.25",
    "difficulty": "中等"
  },
  {
    "id": "q-carroll-11",
    "chapterId": 2,
    "scholarId": "carroll",
    "topic": "適應個別差異之「彈性自定進度」設計",
    "questionText": "卡羅認為傳統班級教學最大的弊病，就是用「固定的時間長度」去要求「速率不同的所有學生」。為了落實因材施教，現代數位學習與翻轉教育採取何種方式符合其理念？",
    "options": [
      { "key": "A", "text": "利用數位自學影片讓慢速學生能重複觀看暫停，快速學生能加速進度（自定進度學習）" },
      { "key": "B", "text": "強迫全體學生每節課只能看同一秒鐘的進度" },
      { "key": "C", "text": "禁止任何學生在課後使用學習載具" },
      { "key": "D", "text": "取消所有單元測驗" }
    ],
    "correctAnswer": "A",
    "explanation": "數位學習的非同步與自定進度特性，完美解決了 Carroll 所指出每個人所需時間不同的差異，讓時間變成自變項，學習精熟變成常數。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第2章 p.25",
    "difficulty": "基礎"
  },
  {
    "id": "q-carroll-12",
    "chapterId": 12,
    "scholarId": "carroll",
    "topic": "補救教學（Remedial Teaching）之時間配當哲學",
    "questionText": "依據卡羅的理論觀點，教育部推動國中小「學習扶助（補救教學）」政策，在學理上最核心的意義在於：",
    "options": [
      { "key": "A", "text": "為學習速率較慢（所需時間多）的學生，在課後提供額外的學習機會與時間配當，以達成基本學力精熟" },
      { "key": "B", "text": "懲罰考試不及格的學生" },
      { "key": "C", "text": "向家長證明學生智力低下" },
      { "key": "D", "text": "增加教師兼課鐘點費收入" }
    ],
    "correctAnswer": "A",
    "explanation": "學習扶助本質上就是延長實際學習時間（分子），並透過小班加強教學品質降低所需時間（分母），使學習程度達成 100% 精熟。",
    "examSource": "108年臺中市公立學校教甄試題",
    "handoutRef": "講義第12章 p.94",
    "difficulty": "基礎"
  },

  # ----------------------------------------------------
  # 8. 莫禮生 (morrison) - 10 new
  # ----------------------------------------------------
  {
    "id": "q-morrison-3",
    "chapterId": 2,
    "scholarId": "morrison",
    "topic": "莫禮生單元教學法之五大教學步驟順序",
    "questionText": "莫禮生（H. C. Morrison）提出的「單元教學法（Unit Teaching Method）」，其精熟學習的五個教學步驟依序為何？",
    "options": [
      { "key": "A", "text": "探究（Exploration）→ 提示（Presentation）→ 同化（Assimilation）→ 組織（Organization）→ 複述（Recitation）" },
      { "key": "B", "text": "提示 → 探究 → 組織 → 同化 → 複述" },
      { "key": "C", "text": "組織 → 複述 → 提示 → 探究 → 同化" },
      { "key": "D", "text": "同化 → 組織 → 提示 → 複述 → 探究" }
    ],
    "correctAnswer": "A",
    "explanation": "莫禮生單元五步法口訣「探、提、同、組、複」：探究（起點行為前測）、提示（教師講授大綱）、同化（學生自學吸收）、組織（統整結構大綱）、複述（口頭報告展現）。",
    "examSource": "112年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第2章 p.26, 第12章 p.93",
    "difficulty": "基礎"
  },
  {
    "id": "q-morrison-4",
    "chapterId": 2,
    "scholarId": "morrison",
    "topic": "探究階段（Exploration）之核心任務",
    "questionText": "在莫禮生單元教學的第一步驟「探究（Exploration）」中，教師最主要的課堂活動任務為何？",
    "options": [
      { "key": "A", "text": "實施前測或提問診斷，探討學生對該單元的先備知識與起點行為" },
      { "key": "B", "text": "進行期末紙筆測驗並打等第" },
      { "key": "C", "text": "讓學生進行分組戲劇成果發表" },
      { "key": "D", "text": "處罰上課遲到的學生" }
    ],
    "correctAnswer": "A",
    "explanation": "探究階段相當於安置性前測，教師透過測驗或討論調查學生既有經驗與迷思概念，作為後續提示教學的起點。",
    "examSource": "111年新北市公立國小教師甄試教育學科",
    "handoutRef": "講義第2章 p.26",
    "difficulty": "基礎"
  },
  {
    "id": "q-morrison-5",
    "chapterId": 2,
    "scholarId": "morrison",
    "topic": "提示階段（Presentation）與精熟測驗",
    "questionText": "在莫禮生單元教學的第二步驟「提示（Presentation）」結束後，莫禮生特別強調教師必須立刻執行下列何種評量行動？",
    "options": [
      { "key": "A", "text": "實施「提示後測驗（Presentation Test）」，未精熟者必須重新提示並再次測驗" },
      { "key": "B", "text": "立即放學休息" },
      { "key": "C", "text": "直接跳入期末總結性評量" },
      { "key": "D", "text": "完全不進行任何檢核" }
    ],
    "correctAnswer": "A",
    "explanation": "莫禮生主張精熟精神，提示教學後若學生未完全理解，教師必須再次針對弱點重講提示，直到全班理解單元大綱核心。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第2章 p.26",
    "difficulty": "中等"
  },
  {
    "id": "q-morrison-6",
    "chapterId": 12,
    "scholarId": "morrison",
    "topic": "同化階段（Assimilation）之學生主體自學特質",
    "questionText": "在莫禮生單元教學五步中，耗費時間最長、由學生親自研讀教材、蒐集資料、進行實驗與小組研討以吸收內容的階段是：",
    "options": [
      { "key": "A", "text": "同化（Assimilation）階段" },
      { "key": "B", "text": "探究（Exploration）階段" },
      { "key": "C", "text": "提示（Presentation）階段" },
      { "key": "D", "text": "複述（Recitation）階段" }
    ],
    "correctAnswer": "A",
    "explanation": "同化階段是自學與吸收的重頭戲，教室猶如實驗室或自修研討室，學生在豐富資料中自主探索，教師提供個別輔導。",
    "examSource": "109年臺北市教師甄選教育專業試題",
    "handoutRef": "講義第12章 p.93",
    "difficulty": "中等"
  },
  {
    "id": "q-morrison-7",
    "chapterId": 12,
    "scholarId": "morrison",
    "topic": "組織階段（Organization）之知識架構統整",
    "questionText": "在莫禮生單元教學的「組織（Organization）」階段，學生主要的任務與成果產出為何？",
    "options": [
      { "key": "A", "text": "在不看課本講義的情況下，獨自擬定單元概念的大綱結構表或思維導圖，統整所學知識" },
      { "key": "B", "text": "進行大掃除整理教室桌椅" },
      { "key": "C", "text": "抄寫生字甲乙本十遍" },
      { "key": "D", "text": "被動坐在台下聽老師講笑話" }
    ],
    "correctAnswer": "A",
    "explanation": "組織階段強調內在心智結構的整合，學生必須能閉卷將零散概念有條理地架構化，展現深層邏輯統整力。",
    "examSource": "108年教育部教師資格考試",
    "handoutRef": "講義第12章 p.93",
    "difficulty": "中等"
  },
  {
    "id": "q-morrison-8",
    "chapterId": 12,
    "scholarId": "morrison",
    "topic": "複述階段（Recitation）之成果發表形式",
    "questionText": "莫禮生單元教學的最後步驟是「複述（Recitation）」，下列有關複述階段的實施敘述，何者最為正確？",
    "options": [
      { "key": "A", "text": "由精熟該單元的學生上台向全班進行口頭發表、論述解說，如同教師一般展示所學" },
      { "key": "B", "text": "全班合唱國歌" },
      { "key": "C", "text": "教師將答案投影在黑板讓學生抄" },
      { "key": "D", "text": "學生互相交換考卷批改" }
    ],
    "correctAnswer": "A",
    "explanation": "複述不是死記背誦，而是「教學相長」的口頭表達展現，學生能清楚向同儕闡述單元核心內容，確認真正精熟透徹。",
    "examSource": "112年桃園市國小教甄試題",
    "handoutRef": "講義第12章 p.93",
    "difficulty": "基礎"
  },
  {
    "id": "q-morrison-9",
    "chapterId": 2,
    "scholarId": "morrison",
    "topic": "莫禮生之「精熟公式（Mastery Formula）」",
    "questionText": "莫禮生提出了劃時代的「精熟公式（Mastery Formula）」，奠定了現代診斷補救教學的基石。該公式的完整循環為：",
    "options": [
      { "key": "A", "text": "教學 → 測驗 → 診斷 → 補救 → 再測驗，直到達到精熟" },
      { "key": "B", "text": "測驗 → 懲罰 → 留級 → 退學" },
      { "key": "C", "text": "講課 → 抄黑板 → 放學" },
      { "key": "D", "text": "分組 → 遊戲 → 摸彩" }
    ],
    "correctAnswer": "A",
    "explanation": "莫禮生名言：「Teach, test, diagnose, modify the instruction, and re-test until mastery is attained.（教學、測驗、診斷、補救教學、再測驗，直到精熟）。」",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第2章 p.26",
    "difficulty": "基礎"
  },
  {
    "id": "q-morrison-10",
    "chapterId": 12,
    "scholarId": "morrison",
    "topic": "莫禮生單元法之「單元（Unit）」本質定義",
    "questionText": "莫禮生將學習「單元（Unit）」定義為教材或環境中具有重要意義的整體經驗片段。他主張真正的單元學習目標應著重於：",
    "options": [
      { "key": "A", "text": "引起學生人格與態度習慣的實質轉變（Adaptation），而非瑣碎孤立事實的短期記憶" },
      { "key": "B", "text": "每一頁講義逐字逐句背誦" },
      { "key": "C", "text": "完成選擇題答案的快速勾選" },
      { "key": "D", "text": "比賽誰寫字速度最快" }
    ],
    "correctAnswer": "A",
    "explanation": "莫禮生強調學習的產出是「適應（Adaptation）」——使學習者對環境產生根本性的態度、觀念與能力轉化，而非應付考試的死背。",
    "examSource": "110年高雄市國小教甄試題",
    "handoutRef": "講義第12章 p.93",
    "difficulty": "進階"
  },
  {
    "id": "q-morrison-11",
    "chapterId": 2,
    "scholarId": "morrison",
    "topic": "單元教學法在跨領域專案教學（PBL）中之當代價值",
    "questionText": "當前 108 課綱推動跨領域專案學習與探究實作，莫禮生單元教學法最值得借鑑的設計思維為何？",
    "options": [
      { "key": "A", "text": "以核心大概念統整教材為完整單元，給予充裕自學同化時間，並要求高階組織統整與口頭展現" },
      { "key": "B", "text": "將所有學科完全拆碎為填充題練習" },
      { "key": "C", "text": "完全取消教師的講述角色" },
      { "key": "D", "text": "讓學生完全憑直覺不需任何資料閱讀" }
    ],
    "correctAnswer": "A",
    "explanation": "莫禮生破除按課本頁碼零碎講課的舊習，以主題單元為核心，整合自學、結構化產出與口語發表，是當代專案教學之先驅。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第2章 p.26",
    "difficulty": "中等"
  },
  {
    "id": "q-morrison-12",
    "chapterId": 12,
    "scholarId": "morrison",
    "topic": "莫禮生對「未精熟即趕進度」傳統教學之抨擊",
    "questionText": "莫禮生在其教育著作中痛斥傳統學校的「進度迷思」。他指出若全班多數學生在單元尚未精熟時教師就強行進入下一個單元，會造成何種毀滅性後果？",
    "options": [
      { "key": "A", "text": "學習缺陷如滾雪球般不斷累積，最終導致學生永久喪失學習信心並被完全拋棄" },
      { "key": "B", "text": "能自動激發學生的資優潛能" },
      { "key": "C", "text": "會使學生更熱愛學校" },
      { "key": "D", "text": "能大幅提升升學率" }
    ],
    "correctAnswer": "A",
    "explanation": "莫禮生堅持「不精熟絕不前進」，若起點概念未牢固就硬教新單元，基礎薄弱的學生將徹底落後掉隊，這是傳統教育的最大悲劇。",
    "examSource": "108年新北市公立國小教甄試題",
    "handoutRef": "講義第12章 p.93",
    "difficulty": "基礎"
  }
]
