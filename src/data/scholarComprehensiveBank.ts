import { Question } from '../types';

/**
 * 歷代教育學者全方位高頻真題題庫（每位學者均擴充 10~20 題）
 * 涵蓋臺灣歷屆教師資格考試（教檢）與各縣市公立教師甄選（教甄）真題與情境素養試題
 */
export const SCHOLAR_COMPREHENSIVE_QUESTIONS: Question[] = [
  {
    "id": "q-socrates-7",
    "chapterId": 1,
    "scholarId": "socrates",
    "topic": "蘇格拉底之反詰法（Elenchus）教學歷程",
    "questionText": "在蘇格拉底的詰問法歷程中，教師首先提出問題讓學生回答，接著指出其回答中的矛盾之處，促使學生發現自己思維漏洞。此一打破對方自以為是觀點的階段稱為什麼？",
    "options": [
      {
        "key": "A",
        "text": "反詰法（Elenchus / 破斥）"
      },
      {
        "key": "B",
        "text": "回憶說（Anamnesis）"
      },
      {
        "key": "C",
        "text": "歸納定義（Inductive definition）"
      },
      {
        "key": "D",
        "text": "感官印刻（Sensory engraving）"
      }
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
      {
        "key": "A",
        "text": "只要會背誦倫理道德規範就是有美德的人"
      },
      {
        "key": "B",
        "text": "人之所以作惡多半是因為無知；若真正洞察善的真諦，必然會踐行善行"
      },
      {
        "key": "C",
        "text": "只有受過高等教育的大學者才具備道德品行"
      },
      {
        "key": "D",
        "text": "知識多寡與道德行為毫無關聯"
      }
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
      {
        "key": "A",
        "text": "蘇格拉底式的詰問探究教學（Socratic Questioning）"
      },
      {
        "key": "B",
        "text": "史金納的編序精熟增強法"
      },
      {
        "key": "C",
        "text": "巴夫洛夫的古典條件刺激制約"
      },
      {
        "key": "D",
        "text": "莫禮生的單元同化默背法"
      }
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
      {
        "key": "A",
        "text": "學生由原先的自滿轉為「自覺無知」，因而產生對探索真理的強烈好奇與認知失衡渴望"
      },
      {
        "key": "B",
        "text": "答對問題能獲得大量的金錢獎勵"
      },
      {
        "key": "C",
        "text": "害怕教師當眾斥責而不得不主動回答"
      },
      {
        "key": "D",
        "text": "提問內容全為是非題容易猜測"
      }
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
      {
        "key": "A",
        "text": "回憶說（Theory of Recollection / Anamnesis）"
      },
      {
        "key": "B",
        "text": "白板說（Tabula Rasa）"
      },
      {
        "key": "C",
        "text": "經驗印刻說（Empirical Imprinting）"
      },
      {
        "key": "D",
        "text": "行為塑造說（Behavioral Shaping）"
      }
    ],
    "correctAnswer": "A",
    "explanation": "回憶說主張人的靈魂在投胎前已具有完美理型知識，世俗的學習實質上是靈魂透過理性反省與外在啟發重新「回憶」起來的歷程。",
    "examSource": "108年教育部高級中等以下學校教師資格考試",
    "handoutRef": "講義第1章 p.15",
    "difficulty": "進階"
  },
  {
    "id": "q-confucius-7",
    "chapterId": 1,
    "scholarId": "confucius",
    "topic": "「不憤不啟，不悱不發」之啟發教學時機",
    "questionText": "《論語·述而》：「不憤不啟，不悱不發。舉一隅不以三隅反，則不復也。」其中「憤」與「悱」在現代教學心理學中分別代表學生的何種心智狀態？",
    "options": [
      {
        "key": "A",
        "text": "憤：心裡想求明白而尚未豁然貫通；悱：口中想表達卻辭不達意"
      },
      {
        "key": "B",
        "text": "憤：因受到處罰而憤怒；悱：因過度自卑而悲傷"
      },
      {
        "key": "C",
        "text": "憤：已經熟能生巧；悱：想要提早交卷"
      },
      {
        "key": "D",
        "text": "憤：體力充沛；悱：注意力不集中"
      }
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
      {
        "key": "A",
        "text": "機械式重複抄寫直到永久記憶"
      },
      {
        "key": "B",
        "text": "藉由喚起與精熟舊有經驗（先備知識），作為建構並同化新知識的穩固基礎"
      },
      {
        "key": "C",
        "text": "徹底摒棄過去的所有教材觀念"
      },
      {
        "key": "D",
        "text": "要求每堂課都由學生輪流上台講課"
      }
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
      {
        "key": "A",
        "text": "從學生的言行舉止、行為動機及心境意向進行全面且細緻的歷程性觀察與質性評量"
      },
      {
        "key": "B",
        "text": "純粹依據期末紙筆測驗排名來評價學生好壞"
      },
      {
        "key": "C",
        "text": "以學生的家庭社經地位作為獎懲標準"
      },
      {
        "key": "D",
        "text": "要求全班學生互評並互相打分數"
      }
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
      {
        "key": "A",
        "text": "以品德修養為根基，在此基礎上拓展知識學藝"
      },
      {
        "key": "B",
        "text": "考試文憑至上，品德無關緊要"
      },
      {
        "key": "C",
        "text": "體育技能重於一切"
      },
      {
        "key": "D",
        "text": "只注重背誦四書五經文字"
      }
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
      {
        "key": "A",
        "text": "當教學超出學生現階段的接受與理解能力時，教師應暫時保留擱置，等待其心智成熟或時機適宜時再教，切莫揠苗助長"
      },
      {
        "key": "B",
        "text": "學生學不會就永遠放棄不要教"
      },
      {
        "key": "C",
        "text": "直接處罰學生罰站一整天"
      },
      {
        "key": "D",
        "text": "立即調換班級"
      }
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
      {
        "key": "A",
        "text": "終身學習的求知熱忱與身教重於言教的教育愛"
      },
      {
        "key": "B",
        "text": "追求升遷獲獎的行政導向"
      },
      {
        "key": "C",
        "text": "只與優等生互動的菁英心態"
      },
      {
        "key": "D",
        "text": "完全不給予回饋的放任風格"
      }
    ],
    "correctAnswer": "A",
    "explanation": "孔子以自身好學、樂教、身教示範，展現了至聖先師對教育志業的堅定執著與無私大愛。",
    "examSource": "111年新北市教師甄選教育專業試題",
    "handoutRef": "講義第1章 p.7",
    "difficulty": "基礎"
  },
  {
    "id": "q-eisner-6",
    "chapterId": 1,
    "scholarId": "eisner",
    "topic": "艾斯納教育鑑賞（Educational Connoisseurship）意涵",
    "questionText": "艾斯納（Eisner）提出「教育鑑賞（Educational Connoisseurship）」概念，主張評鑑者評定教學品質應具備何種特質？",
    "options": [
      {
        "key": "A",
        "text": "如同品酒師或藝術鑑賞家，具備對課堂細微脈絡、師生互動微妙氛圍敏銳洞察與品味欣賞的專門素養"
      },
      {
        "key": "B",
        "text": "嚴格按照秒錶計算教師講話字數"
      },
      {
        "key": "C",
        "text": "只能由完全不懂教學的局外人實施"
      },
      {
        "key": "D",
        "text": "純粹依照學生段考平均分數折算等級"
      }
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
      {
        "key": "A",
        "text": "機械量化（Mechanical quantification）"
      },
      {
        "key": "B",
        "text": "記述（Description）"
      },
      {
        "key": "C",
        "text": "詮釋（Interpretation）"
      },
      {
        "key": "D",
        "text": "評鑑與主題化（Evaluation & Thematics）"
      }
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
      {
        "key": "A",
        "text": "指涉一種遭遇情境或探索任務，其結果是開放多元、不可預測且鼓勵個人獨創性的"
      },
      {
        "key": "B",
        "text": "必須精確規定答對的題數與百分比"
      },
      {
        "key": "C",
        "text": "只要求學生在5分鐘內背誦出20個單字"
      },
      {
        "key": "D",
        "text": "嚴禁任何個人情緒涉入"
      }
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
      {
        "key": "A",
        "text": "空無/懸缺課程（Null Curriculum）"
      },
      {
        "key": "B",
        "text": "補救教學課程"
      },
      {
        "key": "C",
        "text": "資優加速課程"
      },
      {
        "key": "D",
        "text": "雙語浸潤課程"
      }
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
      {
        "key": "A",
        "text": "導致非語文認知潛能與藝術美感的懸缺，限縮學生的認知多樣性"
      },
      {
        "key": "B",
        "text": "大幅提升學生的美學素養"
      },
      {
        "key": "C",
        "text": "促進多元智能均衡發展"
      },
      {
        "key": "D",
        "text": "提高學生的運動神經反應"
      }
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
      {
        "key": "A",
        "text": "教育鑑賞與教育批評模式（Educational Connoisseurship and Criticism）"
      },
      {
        "key": "B",
        "text": "泰勒的目標模式"
      },
      {
        "key": "C",
        "text": "普萊西的自動教學機"
      },
      {
        "key": "D",
        "text": "常模對照測驗"
      }
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
      {
        "key": "A",
        "text": "標準化測驗將複雜生動的學習簡化為瑣碎事實的勾選，忽略了無法被客觀題測量的高階美感與深度洞察"
      },
      {
        "key": "B",
        "text": "標準化測驗印製成本過於便宜"
      },
      {
        "key": "C",
        "text": "標準化測驗耗費太多體育課時間"
      },
      {
        "key": "D",
        "text": "標準化測驗容易造成墨水浪費"
      }
    ],
    "correctAnswer": "A",
    "explanation": "艾斯納指出，並非所有重要事物皆可量化，量化測驗往往導向只教容易考出的死記知識，犧牲深層意義探究。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第1章 p.9",
    "difficulty": "中等"
  },
  {
    "id": "q-pavlov-4",
    "chapterId": 2,
    "scholarId": "pavlov",
    "topic": "刺激類化（Stimulus Generalization）之課堂實務",
    "questionText": "小明在一年級時被嚴格苛刻的數學男老師嚴厲體罰，因而產生極大恐懼。升上二年級後，小明只要看見所有戴眼鏡且身型相似的男老師都會心跳加速、害怕發抖。這種現象屬於古典制約的：",
    "options": [
      {
        "key": "A",
        "text": "刺激類化（Stimulus Generalization）"
      },
      {
        "key": "B",
        "text": "刺激辨別（Stimulus Discrimination）"
      },
      {
        "key": "C",
        "text": "行為塑造（Behavior Shaping）"
      },
      {
        "key": "D",
        "text": "效果律反應（Law of Effect）"
      }
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
      {
        "key": "A",
        "text": "刺激辨別（Stimulus Discrimination）"
      },
      {
        "key": "B",
        "text": "消弱突增（Extinction Burst）"
      },
      {
        "key": "C",
        "text": "代幣制約（Token Conditioning）"
      },
      {
        "key": "D",
        "text": "潛在學習（Latent Learning）"
      }
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
      {
        "key": "A",
        "text": "消弱（Extinction）"
      },
      {
        "key": "B",
        "text": "負增強（Negative Reinforcement）"
      },
      {
        "key": "C",
        "text": "習慣化（Habituation）"
      },
      {
        "key": "D",
        "text": "行為懲罰（Punishment）"
      }
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
      {
        "key": "A",
        "text": "自發恢復（Spontaneous Recovery）"
      },
      {
        "key": "B",
        "text": "逆向制約（Backward Conditioning）"
      },
      {
        "key": "C",
        "text": "刺激替代（Stimulus Substitution）"
      },
      {
        "key": "D",
        "text": "感覺記憶（Sensory Memory）"
      }
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
      {
        "key": "A",
        "text": "高層次/次級制約（Higher-Order Conditioning）"
      },
      {
        "key": "B",
        "text": "操作制約（Operant Conditioning）"
      },
      {
        "key": "C",
        "text": "延遲制約（Delay Conditioning）"
      },
      {
        "key": "D",
        "text": "痕跡制約（Trace Conditioning）"
      }
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
      {
        "key": "A",
        "text": "反制約作用（Counter-conditioning）"
      },
      {
        "key": "B",
        "text": "普氏原則（Premack Principle）"
      },
      {
        "key": "C",
        "text": "外在正增強"
      },
      {
        "key": "D",
        "text": "社會學習示範"
      }
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
      {
        "key": "A",
        "text": "學校環境（原中性刺激）在不知不覺中與被同儕嘲笑、被體罰或母子分離焦慮（非制約刺激）產生配對聯結"
      },
      {
        "key": "B",
        "text": "學生先天腦部結構萎縮"
      },
      {
        "key": "C",
        "text": "學校教科書字體太小"
      },
      {
        "key": "D",
        "text": "學校營養午餐熱量不足"
      }
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
      {
        "key": "A",
        "text": "前向延遲制約（Delayed Conditioning）：制約刺激（CS）先出現並持續到非制約刺激（UCS）出現"
      },
      {
        "key": "B",
        "text": "後向制約（Backward Conditioning）：非制約刺激先出現，結束後才出現制約刺激"
      },
      {
        "key": "C",
        "text": "相隔三天後才呈現非制約刺激"
      },
      {
        "key": "D",
        "text": "兩者永遠不同時出現"
      }
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
      {
        "key": "A",
        "text": "將閱讀活動（CS）與溫暖舒適的沙發、愉悅的故事分享及鼓勵肯定（UCS）緊密配對"
      },
      {
        "key": "B",
        "text": "規定讀不完一本書就罰抄課文五遍"
      },
      {
        "key": "C",
        "text": "全班安靜無聲進行嚴格的閱讀測驗"
      },
      {
        "key": "D",
        "text": "只准優等生進入圖書角"
      }
    ],
    "correctAnswer": "A",
    "explanation": "透過將中性的學習材料與愉悅放鬆的情緒刺激配對，能讓學生對學科活動產生正向的喜愛制約情緒。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第2章 p.22",
    "difficulty": "基礎"
  },
  {
    "id": "q-thorndike-5",
    "chapterId": 2,
    "scholarId": "thorndike",
    "topic": "桑代克三大學習律之準備律（Law of Readiness）",
    "questionText": "桑代克提出「準備律（Law of Readiness）」，強調學習者個體身心準備狀態對行為結果滿意度的影響。下列何種情境最符合準備律中的「苦惱狀態」？",
    "options": [
      {
        "key": "A",
        "text": "當個體身心處於準備採取行動狀態時，卻被強行阻止而不允許其行動"
      },
      {
        "key": "B",
        "text": "當個體不想運動時，剛好放學回家睡覺"
      },
      {
        "key": "C",
        "text": "當個體肚子餓時，立刻獲得熱騰騰的便當"
      },
      {
        "key": "D",
        "text": "當個體想要解題時，教師適時給予提示"
      }
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
      {
        "key": "A",
        "text": "練習若缺乏伴隨滿意的後果與正確回饋（效果律引導），單純練習並不會自動增強 S-R 聯結"
      },
      {
        "key": "B",
        "text": "所有學生智力均相同不需要練習"
      },
      {
        "key": "C",
        "text": "練習只對動物有效，對人類完全無效"
      },
      {
        "key": "D",
        "text": "紙筆測驗會損耗記憶神經"
      }
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
      {
        "key": "A",
        "text": "滿意的結果能強烈加強 S-R 聯結，但懲罰並不能直接削弱或抹去聯結，只能暫時壓抑行為"
      },
      {
        "key": "B",
        "text": "懲罰的效果遠大於獎勵一百倍"
      },
      {
        "key": "C",
        "text": "獎懲均無任何效果"
      },
      {
        "key": "D",
        "text": "只有體罰才能永久去除錯誤反應"
      }
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
      {
        "key": "A",
        "text": "兩個學習情境之間必須存在客觀相同的成分、刺激特徵或程序要素"
      },
      {
        "key": "B",
        "text": "學生必須背誦拉丁文以訓練大腦肌肉"
      },
      {
        "key": "C",
        "text": "兩門學科的授課教師必須是同一人"
      },
      {
        "key": "D",
        "text": "必須在相同的教室考試"
      }
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
      {
        "key": "A",
        "text": "學習是漸進式的盲目試誤（Trial and Error），藉由成功後果刻印聯結，而非突然的理性頓悟"
      },
      {
        "key": "B",
        "text": "動物天生具有完整的物理力學幾何知識"
      },
      {
        "key": "C",
        "text": "學習純粹由社會模仿而來"
      },
      {
        "key": "D",
        "text": "貓咪是透過深思熟慮計畫後才動手"
      }
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
      {
        "key": "A",
        "text": "聯結轉移律（Associative Shifting）"
      },
      {
        "key": "B",
        "text": "多差反應律（Multiple Response）"
      },
      {
        "key": "C",
        "text": "心向態度律（Set or Attitude）"
      },
      {
        "key": "D",
        "text": "優勢要素律（Prepotency of Elements）"
      }
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
      {
        "key": "A",
        "text": "社會智力（Social Intelligence）"
      },
      {
        "key": "B",
        "text": "靈性智力（Spiritual Intelligence）"
      },
      {
        "key": "C",
        "text": "體能智力（Bodily Intelligence）"
      },
      {
        "key": "D",
        "text": "自然智力（Naturalistic Intelligence）"
      }
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
      {
        "key": "A",
        "text": "桑代克的試誤學習與效果律（Trial and error with Law of Effect）"
      },
      {
        "key": "B",
        "text": "奧斯貝的上位概念同化"
      },
      {
        "key": "C",
        "text": "維高斯基的文化歷史符號中介"
      },
      {
        "key": "D",
        "text": "羅吉斯的非指導性情感宣洩"
      }
    ],
    "correctAnswer": "A",
    "explanation": "動作技能學習常需經歷摸索試誤，獲得成功回饋（效果律）能鞏固正確神經動作聯結，淘汰無效動作。",
    "examSource": "110年高雄市國小教甄教育學科",
    "handoutRef": "講義第2章 p.18",
    "difficulty": "基礎"
  },
  {
    "id": "q-skinner-7",
    "chapterId": 2,
    "scholarId": "skinner",
    "topic": "普氏原則（Premack Principle / 祖母法則）在課堂之應用",
    "questionText": "王老師告訴全班：「只要大家把數學練習題全部認真算完並訂正（低頻率/不喜歡的行為），下半堂課就可以去電腦教室玩程式遊戲（高頻率/喜歡的行為）。」王老師運用了何種行為增強原則？",
    "options": [
      {
        "key": "A",
        "text": "普氏原則（Premack Principle）"
      },
      {
        "key": "B",
        "text": "古典制約刺激替代"
      },
      {
        "key": "C",
        "text": "消弱法"
      },
      {
        "key": "D",
        "text": "自發恢復"
      }
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
      {
        "key": "A",
        "text": "行為塑造（Shaping）/ 連續漸進法"
      },
      {
        "key": "B",
        "text": "洪水法（Flooding）"
      },
      {
        "key": "C",
        "text": "嫌惡治療（Aversive Therapy）"
      },
      {
        "key": "D",
        "text": "刺激辨別訓練"
      }
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
      {
        "key": "A",
        "text": "變動比率增強時制（Variable Ratio, VR）"
      },
      {
        "key": "B",
        "text": "固定比率增強時制（Fixed Ratio, FR）"
      },
      {
        "key": "C",
        "text": "固定時距增強時制（Fixed Interval, FI）"
      },
      {
        "key": "D",
        "text": "連續增強時制（Continuous Reinforcement, CRF）"
      }
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
      {
        "key": "A",
        "text": "扇貝效應 / 扇貝現象（Scallop Effect）"
      },
      {
        "key": "B",
        "text": "高原期現象（Plateau Effect）"
      },
      {
        "key": "C",
        "text": "蔡戈尼效應（Zeigarnik Effect）"
      },
      {
        "key": "D",
        "text": "霍桑效應（Hawthorne Effect）"
      }
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
      {
        "key": "A",
        "text": "大步幅原則（Large steps）以增加挫折挑戰度"
      },
      {
        "key": "B",
        "text": "小步子原則（Small steps）"
      },
      {
        "key": "C",
        "text": "積極主動反應原則（Active responding）"
      },
      {
        "key": "D",
        "text": "即時確認與回饋原則（Immediate feedback）與自定步調（Self-pacing）"
      }
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
      {
        "key": "A",
        "text": "堅定維持消弱原則，因為這是行為消失前正常的「消弱突增（Extinction Burst）」現象，若妥協關注反而會大幅增強該劇烈行為"
      },
      {
        "key": "B",
        "text": "立刻抱起小明並給糖果以安撫情緒"
      },
      {
        "key": "C",
        "text": "立刻送醫急救"
      },
      {
        "key": "D",
        "text": "拿木棍當眾體罰"
      }
    ],
    "correctAnswer": "A",
    "explanation": "消弱剛開始時，個體因原先增強物消失，常會短暫出現頻率與強度劇烈上升的「消弱突增」。此時若屈服給予注意，會使尖叫行為得到變動比率增強而更加惡化。",
    "examSource": "112年高雄市教育專業科目試題",
    "handoutRef": "講義第2章 p.23",
    "difficulty": "中等"
  },
  {
    "id": "q-carroll-3",
    "chapterId": 2,
    "scholarId": "carroll",
    "topic": "卡羅「學校學習模式」之學習程度基本公式",
    "questionText": "約翰·卡羅（John B. Carroll）在 1963 年提出著名的「學校學習模式（Model for School Learning）」，他將學生的「學習程度（Degree of Learning）」界定為下列哪兩個變項的比率？",
    "options": [
      {
        "key": "A",
        "text": "實際投入學習時間 ÷ 達成學習所需時間"
      },
      {
        "key": "B",
        "text": "智商測驗分數 ÷ 年齡"
      },
      {
        "key": "C",
        "text": "考試答對題數 ÷ 全班平均題數"
      },
      {
        "key": "D",
        "text": "家庭作業頁數 ÷ 授課節數"
      }
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
      {
        "key": "A",
        "text": "學習特定教材所需時間的長短（即學習速率，Rate of learning）"
      },
      {
        "key": "B",
        "text": "個體永遠無法逾越的認知智力天花板"
      },
      {
        "key": "C",
        "text": "學生的道德操守水準"
      },
      {
        "key": "D",
        "text": "學生的藝術繪畫天分"
      }
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
      {
        "key": "A",
        "text": "性向、了解教學的能力、毅力（Perseverance）"
      },
      {
        "key": "B",
        "text": "教學品質、學習機會、性向"
      },
      {
        "key": "C",
        "text": "家庭社經地位、身高、毅力"
      },
      {
        "key": "D",
        "text": "學校預算、教師薪資、設備"
      }
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
      {
        "key": "A",
        "text": "提升教材的趣味性與切身相關性，建立合宜的成功挑戰機會以增進內在學習動機"
      },
      {
        "key": "B",
        "text": "體罰打手心強迫學生不准下課"
      },
      {
        "key": "C",
        "text": "降低課堂標準到不需要任何努力"
      },
      {
        "key": "D",
        "text": "讓學生完全自由玩手機"
      }
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
      {
        "key": "A",
        "text": "教學計畫與體制中允許學生進行學習與練習的「可用時間配當量」"
      },
      {
        "key": "B",
        "text": "出國留學交換學生的名額"
      },
      {
        "key": "C",
        "text": "獲得課外補習的經濟財力"
      },
      {
        "key": "D",
        "text": "參加校外競賽的機會"
      }
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
      {
        "key": "A",
        "text": "能有效減少所有學生達成精熟所需的學習時間"
      },
      {
        "key": "B",
        "text": "會使資優生變得遲鈍"
      },
      {
        "key": "C",
        "text": "會讓全班成績倒退"
      },
      {
        "key": "D",
        "text": "完全不會改變所需時間"
      }
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
      {
        "key": "A",
        "text": "只要提供充足的時間與適當質量的個別化教學，常態分班中 90%~95% 的學生都能達到精熟標準"
      },
      {
        "key": "B",
        "text": "只有全校前 5% 的學生有能力學好數學"
      },
      {
        "key": "C",
        "text": "成績分布必須嚴格呈現常態分配鐘型曲線"
      },
      {
        "key": "D",
        "text": "不應該對任何學生實施補救教學"
      }
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
      {
        "key": "A",
        "text": "一般普通智力（尤其是普通語文理解能力）與該單元的先備知識知能"
      },
      {
        "key": "B",
        "text": "體育體能與骨骼發育"
      },
      {
        "key": "C",
        "text": "書寫字跡美觀度"
      },
      {
        "key": "D",
        "text": "班長或幹部領導力"
      }
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
      {
        "key": "A",
        "text": "利用數位自學影片讓慢速學生能重複觀看暫停，快速學生能加速進度（自定進度學習）"
      },
      {
        "key": "B",
        "text": "強迫全體學生每節課只能看同一秒鐘的進度"
      },
      {
        "key": "C",
        "text": "禁止任何學生在課後使用學習載具"
      },
      {
        "key": "D",
        "text": "取消所有單元測驗"
      }
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
      {
        "key": "A",
        "text": "為學習速率較慢（所需時間多）的學生，在課後提供額外的學習機會與時間配當，以達成基本學力精熟"
      },
      {
        "key": "B",
        "text": "懲罰考試不及格的學生"
      },
      {
        "key": "C",
        "text": "向家長證明學生智力低下"
      },
      {
        "key": "D",
        "text": "增加教師兼課鐘點費收入"
      }
    ],
    "correctAnswer": "A",
    "explanation": "學習扶助本質上就是延長實際學習時間（分子），並透過小班加強教學品質降低所需時間（分母），使學習程度達成 100% 精熟。",
    "examSource": "108年臺中市公立學校教甄試題",
    "handoutRef": "講義第12章 p.94",
    "difficulty": "基礎"
  },
  {
    "id": "q-morrison-3",
    "chapterId": 2,
    "scholarId": "morrison",
    "topic": "莫禮生單元教學法之五大教學步驟順序",
    "questionText": "莫禮生（H. C. Morrison）提出的「單元教學法（Unit Teaching Method）」，其精熟學習的五個教學步驟依序為何？",
    "options": [
      {
        "key": "A",
        "text": "探究（Exploration）→ 提示（Presentation）→ 同化（Assimilation）→ 組織（Organization）→ 複述（Recitation）"
      },
      {
        "key": "B",
        "text": "提示 → 探究 → 組織 → 同化 → 複述"
      },
      {
        "key": "C",
        "text": "組織 → 複述 → 提示 → 探究 → 同化"
      },
      {
        "key": "D",
        "text": "同化 → 組織 → 提示 → 複述 → 探究"
      }
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
      {
        "key": "A",
        "text": "實施前測或提問診斷，探討學生對該單元的先備知識與起點行為"
      },
      {
        "key": "B",
        "text": "進行期末紙筆測驗並打等第"
      },
      {
        "key": "C",
        "text": "讓學生進行分組戲劇成果發表"
      },
      {
        "key": "D",
        "text": "處罰上課遲到的學生"
      }
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
      {
        "key": "A",
        "text": "實施「提示後測驗（Presentation Test）」，未精熟者必須重新提示並再次測驗"
      },
      {
        "key": "B",
        "text": "立即放學休息"
      },
      {
        "key": "C",
        "text": "直接跳入期末總結性評量"
      },
      {
        "key": "D",
        "text": "完全不進行任何檢核"
      }
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
      {
        "key": "A",
        "text": "同化（Assimilation）階段"
      },
      {
        "key": "B",
        "text": "探究（Exploration）階段"
      },
      {
        "key": "C",
        "text": "提示（Presentation）階段"
      },
      {
        "key": "D",
        "text": "複述（Recitation）階段"
      }
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
      {
        "key": "A",
        "text": "在不看課本講義的情況下，獨自擬定單元概念的大綱結構表或思維導圖，統整所學知識"
      },
      {
        "key": "B",
        "text": "進行大掃除整理教室桌椅"
      },
      {
        "key": "C",
        "text": "抄寫生字甲乙本十遍"
      },
      {
        "key": "D",
        "text": "被動坐在台下聽老師講笑話"
      }
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
      {
        "key": "A",
        "text": "由精熟該單元的學生上台向全班進行口頭發表、論述解說，如同教師一般展示所學"
      },
      {
        "key": "B",
        "text": "全班合唱國歌"
      },
      {
        "key": "C",
        "text": "教師將答案投影在黑板讓學生抄"
      },
      {
        "key": "D",
        "text": "學生互相交換考卷批改"
      }
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
      {
        "key": "A",
        "text": "教學 → 測驗 → 診斷 → 補救 → 再測驗，直到達到精熟"
      },
      {
        "key": "B",
        "text": "測驗 → 懲罰 → 留級 → 退學"
      },
      {
        "key": "C",
        "text": "講課 → 抄黑板 → 放學"
      },
      {
        "key": "D",
        "text": "分組 → 遊戲 → 摸彩"
      }
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
      {
        "key": "A",
        "text": "引起學生人格與態度習慣的實質轉變（Adaptation），而非瑣碎孤立事實的短期記憶"
      },
      {
        "key": "B",
        "text": "每一頁講義逐字逐句背誦"
      },
      {
        "key": "C",
        "text": "完成選擇題答案的快速勾選"
      },
      {
        "key": "D",
        "text": "比賽誰寫字速度最快"
      }
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
      {
        "key": "A",
        "text": "以核心大概念統整教材為完整單元，給予充裕自學同化時間，並要求高階組織統整與口頭展現"
      },
      {
        "key": "B",
        "text": "將所有學科完全拆碎為填充題練習"
      },
      {
        "key": "C",
        "text": "完全取消教師的講述角色"
      },
      {
        "key": "D",
        "text": "讓學生完全憑直覺不需任何資料閱讀"
      }
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
      {
        "key": "A",
        "text": "學習缺陷如滾雪球般不斷累積，最終導致學生永久喪失學習信心並被完全拋棄"
      },
      {
        "key": "B",
        "text": "能自動激發學生的資優潛能"
      },
      {
        "key": "C",
        "text": "會使學生更熱愛學校"
      },
      {
        "key": "D",
        "text": "能大幅提升升學率"
      }
    ],
    "correctAnswer": "A",
    "explanation": "莫禮生堅持「不精熟絕不前進」，若起點概念未牢固就硬教新單元，基礎薄弱的學生將徹底落後掉隊，這是傳統教育的最大悲劇。",
    "examSource": "108年新北市公立國小教甄試題",
    "handoutRef": "講義第12章 p.93",
    "difficulty": "基礎"
  },
  {
    "id": "q-bandura-7",
    "chapterId": 3,
    "scholarId": "bandura",
    "topic": "觀察學習之四個心理歷程階段順序",
    "questionText": "班杜拉（A. Bandura）社會學習論中，個體透過楷模示範習得新行為的四個歷程階段，正確順序為何？",
    "options": [
      {
        "key": "A",
        "text": "注意（Attention）→ 保持（Retention）→ 動作再生（Reproduction）→ 動機（Motivation）"
      },
      {
        "key": "B",
        "text": "保持 → 注意 → 動機 → 動作再生"
      },
      {
        "key": "C",
        "text": "動機 → 動作再生 → 保持 → 注意"
      },
      {
        "key": "D",
        "text": "注意 → 動機 → 動作再生 → 保持"
      }
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
      {
        "key": "A",
        "text": "個人內在認知/特質（P）、外在環境（E）、個人行為表現（B）"
      },
      {
        "key": "B",
        "text": "遺傳基因、血型、生肖星座"
      },
      {
        "key": "C",
        "text": "家庭收入、學校排名、學測成績"
      },
      {
        "key": "D",
        "text": "本我、自我、超我"
      }
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
      {
        "key": "A",
        "text": "親身掌握的成功經驗（Mastery Experiences / 過去成敗經驗）"
      },
      {
        "key": "B",
        "text": "言語勸告（Verbal Persuasion，口頭讚美）"
      },
      {
        "key": "C",
        "text": "替代經驗（Vicarious Experiences，看別人成功）"
      },
      {
        "key": "D",
        "text": "生理與情緒激起狀態（Physiological States）"
      }
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
      {
        "key": "A",
        "text": "替代增強（Vicarious Reinforcement）"
      },
      {
        "key": "B",
        "text": "直接正增強"
      },
      {
        "key": "C",
        "text": "自我增強"
      },
      {
        "key": "D",
        "text": "負增強"
      }
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
      {
        "key": "A",
        "text": "觀察示範（Observation of Modeling）與去抑制作用（Disinhibition）"
      },
      {
        "key": "B",
        "text": "生理遺傳變異"
      },
      {
        "key": "C",
        "text": "嚴格的操作古典制約"
      },
      {
        "key": "D",
        "text": "感覺統合失調"
      }
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
      {
        "key": "A",
        "text": "將大任務拆解成小步幅目標，設計其能力所及的階梯任務，創造連續微小的成功體驗（親身掌握）"
      },
      {
        "key": "B",
        "text": "直接送給他滿分考卷安慰他"
      },
      {
        "key": "C",
        "text": "叫全班同學大聲嘲笑他以激發羞恥心"
      },
      {
        "key": "D",
        "text": "免除他所有數學作業與考試"
      }
    ],
    "correctAnswer": "A",
    "explanation": "親身成功是建立效能感的最穩固來源。透過近側目標（Proximal goals）與循序漸進的挑戰，讓學生親身累積「我真的做得到」的成功證據。",
    "examSource": "112年高雄市國民小學教師甄選教育專業試題",
    "handoutRef": "講義第13章 p.112",
    "difficulty": "基礎"
  },
  {
    "id": "q-zimmerman-3",
    "chapterId": 3,
    "scholarId": "zimmerman",
    "topic": "自律學習（SRL）三階段循環模式順序",
    "questionText": "齊瑪曼（B. J. Zimmerman）提出的「自律學習循環模式（Self-Regulated Learning, SRL）」，其三大階段的運作順序依序為何？",
    "options": [
      {
        "key": "A",
        "text": "計畫/預見階段（Forethought）→ 表現/意志監控階段（Performance）→ 自我反思階段（Self-Reflection）"
      },
      {
        "key": "B",
        "text": "自我反思 → 計畫預見 → 表現監控"
      },
      {
        "key": "C",
        "text": "表現監控 → 計畫預見 → 自我反思"
      },
      {
        "key": "D",
        "text": "計畫預見 → 自我反思 → 表現監控"
      }
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
      {
        "key": "A",
        "text": "作業分析（設定目標與策略規劃）與自我激勵信念（自我效能與內在價值）"
      },
      {
        "key": "B",
        "text": "偷看鄰座考卷與擦黑板"
      },
      {
        "key": "C",
        "text": "等待老師發下標準解答"
      },
      {
        "key": "D",
        "text": "進行課後打掃工作"
      }
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
      {
        "key": "A",
        "text": "自律學習的「自我監控（Self-Monitoring / Metacognitive Monitoring）」"
      },
      {
        "key": "B",
        "text": "消極被動學習"
      },
      {
        "key": "C",
        "text": "操作制約消弱"
      },
      {
        "key": "D",
        "text": "外在獎懲反應"
      }
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
      {
        "key": "A",
        "text": "適應性反應（Adaptive reactions）與建設性歸因"
      },
      {
        "key": "B",
        "text": "防衛性反應（Defensive reactions）"
      },
      {
        "key": "C",
        "text": "習得無助感"
      },
      {
        "key": "D",
        "text": "外在逃避行為"
      }
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
      {
        "key": "A",
        "text": "觀察水準（Observation）→ 模仿水準（Emulation）→ 自我控制水準（Self-Control）→ 自律水準（Self-Regulation）"
      },
      {
        "key": "B",
        "text": "自律 → 自我控制 → 模仿 → 觀察"
      },
      {
        "key": "C",
        "text": "模仿 → 觀察 → 自律 → 自我控制"
      },
      {
        "key": "D",
        "text": "自我控制 → 自律 → 觀察 → 模仿"
      }
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
      {
        "key": "A",
        "text": "主動尋求教師或同儕的「解題策略指導或概念提示」，而非直接要答案，以便自己能獨立解決問題"
      },
      {
        "key": "B",
        "text": "直接抄襲別人的作業答案了事"
      },
      {
        "key": "C",
        "text": "因為愛面子死不承認自己不懂，堅決不問任何人"
      },
      {
        "key": "D",
        "text": "立刻放棄考試直接睡覺"
      }
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
      {
        "key": "A",
        "text": "環境結構化調控（Environmental Structuring）"
      },
      {
        "key": "B",
        "text": "被動受制約"
      },
      {
        "key": "C",
        "text": "古典制約消弱"
      },
      {
        "key": "D",
        "text": "普氏原則懲罰"
      }
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
      {
        "key": "A",
        "text": "將失敗視為學習策略需調整的訊號，並保持樂觀的自我效能與主動控制信念"
      },
      {
        "key": "B",
        "text": "天生智商高出 30 分以上"
      },
      {
        "key": "C",
        "text": "從來不曾遇到任何挫折"
      },
      {
        "key": "D",
        "text": "完全不需要任何人的教學支持"
      }
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
      {
        "key": "A",
        "text": "搭建自律學習鷹架，引導學生外顯化自我監控與反思歷程，提升自主學習素養"
      },
      {
        "key": "B",
        "text": "作為期末扣分的懲戒工具"
      },
      {
        "key": "C",
        "text": "替教師省下備課講課的時間"
      },
      {
        "key": "D",
        "text": "檢查學生的國字筆劃工整度"
      }
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
      {
        "key": "A",
        "text": "自主學習並非完全放任自流，教師初期必須提供目標設定、進度監控與反思策略的鷹架示範，逐步移轉學習責任"
      },
      {
        "key": "B",
        "text": "把自主學習時間完全拿來考數學小考"
      },
      {
        "key": "C",
        "text": "教師完全不准踏入自主學習教室"
      },
      {
        "key": "D",
        "text": "規定全體學生必須寫一模一樣的專題"
      }
    ],
    "correctAnswer": "A",
    "explanation": "自律能力需要經過社會認知鷹架引導與逐步放手。教師應指導學生學會「計畫、執行、反思」循環，而非放牛吃草。",
    "examSource": "112年新北市公立中等學校教甄試題",
    "handoutRef": "講義第3章 p.28",
    "difficulty": "中等"
  },
  {
    "id": "q-flavell-3",
    "chapterId": 3,
    "scholarId": "flavell",
    "topic": "弗萊威爾後設認知（Metacognition）之三大知識向度",
    "questionText": "弗萊威爾（J. H. Flavell）於 1970 年代開創「後設認知（Metacognition）」研究，他將「後設認知知識」歸納為哪三大面向？",
    "options": [
      {
        "key": "A",
        "text": "人的知識（Person）、事的知識（Task）、策略的知識（Strategy）"
      },
      {
        "key": "B",
        "text": "過去的知識、現在的知識、未來的知識"
      },
      {
        "key": "C",
        "text": "感官知識、情緒知識、直覺知識"
      },
      {
        "key": "D",
        "text": "語文知識、數理知識、藝術知識"
      }
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
      {
        "key": "A",
        "text": "人的變項/知識（Person knowledge）"
      },
      {
        "key": "B",
        "text": "工作變項/知識（Task knowledge）"
      },
      {
        "key": "C",
        "text": "策略變項/知識（Strategy knowledge）"
      },
      {
        "key": "D",
        "text": "環境刺激變項"
      }
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
      {
        "key": "A",
        "text": "工作的知識（Task knowledge）"
      },
      {
        "key": "B",
        "text": "人的知識（Person knowledge）"
      },
      {
        "key": "C",
        "text": "社會情意知識"
      },
      {
        "key": "D",
        "text": "潛意識直覺"
      }
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
      {
        "key": "A",
        "text": "策略的知識（Strategy knowledge）"
      },
      {
        "key": "B",
        "text": "行為增強知識"
      },
      {
        "key": "C",
        "text": "人的知識"
      },
      {
        "key": "D",
        "text": "機械記憶"
      }
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
      {
        "key": "A",
        "text": "後設認知體驗（Metacognitive Experiences）"
      },
      {
        "key": "B",
        "text": "心流超覺狀態"
      },
      {
        "key": "C",
        "text": "知覺常模"
      },
      {
        "key": "D",
        "text": "感覺動作基模"
      }
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
      {
        "key": "A",
        "text": "學生在心裡檢驗自己剛剛背書的記憶方法是否有效，並決定改用聯想法重新背誦"
      },
      {
        "key": "B",
        "text": "用眼睛看課本上的英文字母"
      },
      {
        "key": "C",
        "text": "用嘴巴朗讀課文第一段"
      },
      {
        "key": "D",
        "text": "用鉛筆在考卷上寫下答案數字 10"
      }
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
      {
        "key": "A",
        "text": "放聲思考教學法（Think-Aloud Protocol）"
      },
      {
        "key": "B",
        "text": "機械講述法"
      },
      {
        "key": "C",
        "text": "被動暗示法"
      },
      {
        "key": "D",
        "text": "精熟默寫法"
      }
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
      {
        "key": "A",
        "text": "理解他人擁有與自己不同的信念、願望、意圖與感受（包含理解錯誤信念 False Belief）"
      },
      {
        "key": "B",
        "text": "背誦九九乘法表"
      },
      {
        "key": "C",
        "text": "精確分辨紅黃藍三原色"
      },
      {
        "key": "D",
        "text": "雙手能夠靈活抓握湯匙"
      }
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
      {
        "key": "A",
        "text": "後設記憶能力（Metamemory）"
      },
      {
        "key": "B",
        "text": "感官知覺敏銳度"
      },
      {
        "key": "C",
        "text": "肌肉協調耐力"
      },
      {
        "key": "D",
        "text": "古典制約反應率"
      }
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
      {
        "key": "A",
        "text": "放慢閱讀速度、回讀前文（Rereading）、參照上下文脈絡推敲意涵，或主動查閱字典"
      },
      {
        "key": "B",
        "text": "假裝沒看見直接把該頁撕掉"
      },
      {
        "key": "C",
        "text": "直接停止閱讀並把書扔掉"
      },
      {
        "key": "D",
        "text": "加速用一秒鐘掃過十頁"
      }
    ],
    "correctAnswer": "A",
    "explanation": "理解監控（Comprehension monitoring）指讀者隨時檢測理解狀態，發現盲點時立即採取修補策略（如回讀、減速、標記），是閱讀素養的關鍵能力。",
    "examSource": "108年新北市公立國小教甄試題",
    "handoutRef": "講義第3章 p.29",
    "difficulty": "基礎"
  },
  {
    "id": "q-piaget-6",
    "chapterId": 4,
    "scholarId": "piaget",
    "topic": "同化（Assimilation）與調適（Accommodation）之核心辨析",
    "questionText": "幼兒原本的基模認為「有四隻腳且會汪汪叫的動物叫作狗」。當他第一次在公園看到貓咪時也喊「大狗」，這屬於（甲）；隨後媽媽告訴他「這是貓咪，它會喵喵叫而且會爬樹」，幼兒調整修改了自己的基模建立「貓」的新概念，這屬於（乙）。甲與乙依序為：",
    "options": [
      {
        "key": "A",
        "text": "甲：同化（Assimilation）；乙：調適（Accommodation）"
      },
      {
        "key": "B",
        "text": "甲：調適；乙：同化"
      },
      {
        "key": "C",
        "text": "甲：平衡；乙：失衡"
      },
      {
        "key": "D",
        "text": "甲：反射；乙：制約"
      }
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
      {
        "key": "A",
        "text": "物體恆存概念（Object Permanence）"
      },
      {
        "key": "B",
        "text": "守恆概念（Conservation）"
      },
      {
        "key": "C",
        "text": "去集中化（Decentration）"
      },
      {
        "key": "D",
        "text": "自我中心性（Egocentrism）"
      }
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
      {
        "key": "A",
        "text": "自我中心主義（Egocentrism / 無法從他人視角思考）"
      },
      {
        "key": "B",
        "text": "泛靈論（Animism）"
      },
      {
        "key": "C",
        "text": "可逆性思維（Reversibility）"
      },
      {
        "key": "D",
        "text": "符號表徵失調"
      }
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
      {
        "key": "A",
        "text": "泛靈論（Animism）"
      },
      {
        "key": "B",
        "text": "守恆概念"
      },
      {
        "key": "C",
        "text": "抽象推論"
      },
      {
        "key": "D",
        "text": "平衡化"
      }
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
      {
        "key": "A",
        "text": "可逆性（倒回去一樣多）、互補/補償性（杯子變高但變瘦）、同一性（沒有加水也沒有倒掉水）"
      },
      {
        "key": "B",
        "text": "直覺性、主觀性、偶然性"
      },
      {
        "key": "C",
        "text": "感覺動作性、模仿性、泛靈性"
      },
      {
        "key": "D",
        "text": "假設性、演繹性、抽象性"
      }
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
      {
        "key": "A",
        "text": "類包含能力（Class Inclusion / 掌握整體與部分關係）"
      },
      {
        "key": "B",
        "text": "假設演繹思維"
      },
      {
        "key": "C",
        "text": "自我中心語言"
      },
      {
        "key": "D",
        "text": "鐘擺實驗驗證力"
      }
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
      {
        "key": "A",
        "text": "提出系統性假設，並採取「控制變因法（一次只改變單一變因，固定其餘變因）」進行邏輯驗證"
      },
      {
        "key": "B",
        "text": "隨意亂拉亂放繩子碰運氣"
      },
      {
        "key": "C",
        "text": "堅稱鐘擺是活的會自己決定跑多快"
      },
      {
        "key": "D",
        "text": "拒絕進行任何操作"
      }
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
      {
        "key": "A",
        "text": "提供反例或衝突事件引發學生的「認知衝突（Cognitive Conflict / 失衡）」，迫使其啟動調適歷程以重構更高層次的平衡"
      },
      {
        "key": "B",
        "text": "直接要求學生背誦教師給的唯一標準答案"
      },
      {
        "key": "C",
        "text": "避免讓學生遭遇任何不會的問題以維持愉快"
      },
      {
        "key": "D",
        "text": "考試全部出送分題"
      }
    ],
    "correctAnswer": "A",
    "explanation": "由平衡 → 認知失衡（遭遇矛盾）→ 透過同化與調適重組基模 → 達到新平衡，是心智發展的動力樞紐。教學應善用認知衝突促進思維躍升。",
    "examSource": "110年高雄市國小教甄試題",
    "handoutRef": "講義第4章 p.31",
    "difficulty": "基礎"
  },
  {
    "id": "q-bruner-3",
    "chapterId": 4,
    "scholarId": "bruner",
    "topic": "認知表徵三階段發展順序",
    "questionText": "布魯納（J. S. Bruner）提出人類表徵外在世界的認知發展三階段，其演進順序依序為何？",
    "options": [
      {
        "key": "A",
        "text": "動作表徵（Enactive）→ 影像/圖像表徵（Iconic）→ 符號表徵（Symbolic）"
      },
      {
        "key": "B",
        "text": "符號表徵 → 影像表徵 → 動作表徵"
      },
      {
        "key": "C",
        "text": "影像表徵 → 符號表徵 → 動作表徵"
      },
      {
        "key": "D",
        "text": "動作表徵 → 符號表徵 → 影像表徵"
      }
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
      {
        "key": "A",
        "text": "螺旋式課程（Spiral Curriculum）"
      },
      {
        "key": "B",
        "text": "直線式課程"
      },
      {
        "key": "C",
        "text": "核心課程"
      },
      {
        "key": "D",
        "text": "廣域課程"
      }
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
      {
        "key": "A",
        "text": "教師提供結構化的學習情境與正反實例，引導學生主動探索並歸納概念結構與原則"
      },
      {
        "key": "B",
        "text": "完全不給予任何線索，讓學生在教室任意胡亂猜測"
      },
      {
        "key": "C",
        "text": "教師從頭到尾單向講述所有結論"
      },
      {
        "key": "D",
        "text": "學生只需背誦標準答案不需動手思考"
      }
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
      {
        "key": "A",
        "text": "使學科知識更易於理解與長久保持，並有利於廣泛的學習遷移（Transfer of Learning）"
      },
      {
        "key": "B",
        "text": "增加教科書印刷厚度"
      },
      {
        "key": "C",
        "text": "方便出題老師出刁鑽的細節題目"
      },
      {
        "key": "D",
        "text": "縮短所有學生的放學時間"
      }
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
      {
        "key": "A",
        "text": "引導學生透過對比與屬性分析，檢驗並形成該概念的本質屬性（Critical attributes）"
      },
      {
        "key": "B",
        "text": "測試學生的視力與注意力"
      },
      {
        "key": "C",
        "text": "當場給學生打成績等第"
      },
      {
        "key": "D",
        "text": "消耗課堂多餘的時間"
      }
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
      {
        "key": "A",
        "text": "直觀思維（Intuitive Thinking / 敏銳洞察與頓悟假說）"
      },
      {
        "key": "B",
        "text": "機械記憶思維"
      },
      {
        "key": "C",
        "text": "操作制約思維"
      },
      {
        "key": "D",
        "text": "文字抄寫能力"
      }
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
      {
        "key": "A",
        "text": "內在動機（Intrinsic Motivation）"
      },
      {
        "key": "B",
        "text": "外在代幣增強"
      },
      {
        "key": "C",
        "text": "負增強逃避動機"
      },
      {
        "key": "D",
        "text": "社會比較動機"
      }
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
      {
        "key": "A",
        "text": "布魯納（J. Bruner）"
      },
      {
        "key": "B",
        "text": "皮亞傑（J. Piaget）"
      },
      {
        "key": "C",
        "text": "史金納（B. F. Skinner）"
      },
      {
        "key": "D",
        "text": "莫禮生（H. Morrison）"
      }
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
      {
        "key": "A",
        "text": "布魯納（Bruner）"
      },
      {
        "key": "B",
        "text": "巴夫洛夫（Pavlov）"
      },
      {
        "key": "C",
        "text": "泰勒（Tyler）"
      },
      {
        "key": "D",
        "text": "華生（Watson）"
      }
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
      {
        "key": "A",
        "text": "優質合宜的教學表徵架構能積極引導、促進甚至加速兒童的認知概念掌握"
      },
      {
        "key": "B",
        "text": "教育對認知發展毫無任何影響"
      },
      {
        "key": "C",
        "text": "所有學生都應跳級就讀大學"
      },
      {
        "key": "D",
        "text": "兒童只需依靠遺傳基因自然生長"
      }
    ],
    "correctAnswer": "A",
    "explanation": "布魯納樂觀看待教學的力量，認為只要善用合宜的表徵方式（動作、圖像），即使年幼兒童也能理解高深學科結構，教學能主動引導心智發展。",
    "examSource": "108年教育部教師資格考試",
    "handoutRef": "講義第4章 p.34",
    "difficulty": "中等"
  },
  {
    "id": "q-dale-3",
    "chapterId": 4,
    "scholarId": "dale",
    "topic": "戴爾「經驗金字塔（Cone of Experience）」三大層次分類",
    "questionText": "愛德加·戴爾（Edgar Dale）提出的「經驗金字塔（Cone of Experience）」，由塔底至塔頂將學習經驗歸納為哪三大類？",
    "options": [
      {
        "key": "A",
        "text": "做的經驗（實作）→ 觀察的經驗（視聽/參觀）→ 抽象的經驗（符號/語言）"
      },
      {
        "key": "B",
        "text": "抽象的經驗 → 觀察的經驗 → 做的經驗"
      },
      {
        "key": "C",
        "text": "感覺經驗 → 情緒經驗 → 道德經驗"
      },
      {
        "key": "D",
        "text": "家庭經驗 → 學校經驗 → 社會經驗"
      }
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
      {
        "key": "A",
        "text": "自然課中學生親自在校園花圃整地、播種番茄、澆水施肥並觀察記錄生長"
      },
      {
        "key": "B",
        "text": "看番茄生長卡通動畫影片"
      },
      {
        "key": "C",
        "text": "聽老師口頭朗讀番茄的生物界門綱目科屬種"
      },
      {
        "key": "D",
        "text": "在考卷上寫出番茄兩個字"
      }
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
      {
        "key": "A",
        "text": "設計的經驗（Contrived Experiences / 模型模擬經驗）"
      },
      {
        "key": "B",
        "text": "語言符號經驗"
      },
      {
        "key": "C",
        "text": "參觀旅行經驗"
      },
      {
        "key": "D",
        "text": "直接經驗"
      }
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
      {
        "key": "A",
        "text": "戲劇化的經驗（Dramatized Experiences）"
      },
      {
        "key": "B",
        "text": "語言抽象經驗"
      },
      {
        "key": "C",
        "text": "野外考察"
      },
      {
        "key": "D",
        "text": "靜態展覽"
      }
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
      {
        "key": "A",
        "text": "金字塔頂層並非代表最高級或最好，而是抽象程度最高；若缺乏底層具體經驗支撐，頂層符號極易淪為空洞無意義的死背"
      },
      {
        "key": "B",
        "text": "語言符號是唯一具有學術價值的經驗，學校應該完全取消實作"
      },
      {
        "key": "C",
        "text": "小學生一入學就應該只讀無注音純文字教科書"
      },
      {
        "key": "D",
        "text": "底層的直接經驗毫無智力價值"
      }
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
      {
        "key": "A",
        "text": "將難以親臨的遠距或危險抽象情境，轉化為沉浸感極高的擬真「設計經驗與觀察經驗」，架起具體到抽象的橋樑"
      },
      {
        "key": "B",
        "text": "徹底取代真實自然界的所有物質存在"
      },
      {
        "key": "C",
        "text": "完全消滅紙筆測驗"
      },
      {
        "key": "D",
        "text": "降低學生的腦神經細胞活動"
      }
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
      {
        "key": "A",
        "text": "視覺符號（Visual Symbols）"
      },
      {
        "key": "B",
        "text": "直接經驗"
      },
      {
        "key": "C",
        "text": "戲劇化經驗"
      },
      {
        "key": "D",
        "text": "野外考察"
      }
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
      {
        "key": "A",
        "text": "野外考察 / 參觀旅行（Field Trips）"
      },
      {
        "key": "B",
        "text": "語言符號"
      },
      {
        "key": "C",
        "text": "虛擬幻想"
      },
      {
        "key": "D",
        "text": "純粹直接經驗"
      }
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
      {
        "key": "A",
        "text": "視教學目標與學生認知起點，彈性交織具體實作、視聽觀察與概念符號，促成經驗相互印證與轉化"
      },
      {
        "key": "B",
        "text": "每堂課只播放 40 分鐘爆笑短影音"
      },
      {
        "key": "C",
        "text": "整學期只用粉筆抄板書絕不使用任何教具"
      },
      {
        "key": "D",
        "text": "要求學生整天都在操場挖泥土"
      }
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
      {
        "key": "A",
        "text": "動作表徵（Enactive representation）"
      },
      {
        "key": "B",
        "text": "符號表徵"
      },
      {
        "key": "C",
        "text": "影像表徵"
      },
      {
        "key": "D",
        "text": "超覺表徵"
      }
    ],
    "correctAnswer": "A",
    "explanation": "做的經驗（直接經驗、設計經驗、戲劇化經驗）對應動作表徵；觀察的經驗（影片、模型、展覽）對應影像表徵；抽象符號對應符號表徵。",
    "examSource": "108年臺中市公立學校教甄試題",
    "handoutRef": "講義第4章 p.36",
    "difficulty": "中等"
  },
  {
    "id": "q-ausubel-4",
    "chapterId": 4,
    "scholarId": "ausubel",
    "topic": "奧斯貝之「有意義學習（Meaningful Learning）」核心條件",
    "questionText": "奧斯貝（D. P. Ausubel）認為，要使學習成為「有意義的學習（Meaningful Learning）」而非死記硬背的「機械學習（Rote Learning）」，必須滿足的最關鍵條件為何？",
    "options": [
      {
        "key": "A",
        "text": "學習者必須將具有潛在意義的新知識，與其既有認知結構中的適當先備概念建立非隨機且實質性的聯結（Substantive and non-arbitrary connection）"
      },
      {
        "key": "B",
        "text": "必須在下課前把課文背誦十遍"
      },
      {
        "key": "C",
        "text": "每次答對都必須給予金錢增強"
      },
      {
        "key": "D",
        "text": "學習材料必須全為彩色圖片"
      }
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
      {
        "key": "A",
        "text": "說明性前導組織（Expository Organizer）"
      },
      {
        "key": "B",
        "text": "比較性前導組織（Comparative Organizer）"
      },
      {
        "key": "C",
        "text": "回憶性前導組織"
      },
      {
        "key": "D",
        "text": "懲罰性前導組織"
      }
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
      {
        "key": "A",
        "text": "比較性前導組織（Comparative Organizer）"
      },
      {
        "key": "B",
        "text": "說明性前導組織"
      },
      {
        "key": "C",
        "text": "古典制約聯結"
      },
      {
        "key": "D",
        "text": "行為塑造"
      }
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
      {
        "key": "A",
        "text": "先呈現最一般性、最包攝性的大概念核心架構，再逐步向下展開詳細具體的細部次概念"
      },
      {
        "key": "B",
        "text": "先呈現微小細節，完全不告訴學生全貌"
      },
      {
        "key": "C",
        "text": "按照抽籤隨機排列順序"
      },
      {
        "key": "D",
        "text": "只教考試不考的冷門知識"
      }
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
      {
        "key": "A",
        "text": "統整協調（Integrative Reconciliation）"
      },
      {
        "key": "B",
        "text": "消弱反應"
      },
      {
        "key": "C",
        "text": "機械記憶"
      },
      {
        "key": "D",
        "text": "盲目試誤"
      }
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
      {
        "key": "A",
        "text": "上位學習（Superordinate Learning）"
      },
      {
        "key": "B",
        "text": "下位學習（Subsumptive Learning）"
      },
      {
        "key": "C",
        "text": "並列結合學習（Combinatorial Learning）"
      },
      {
        "key": "D",
        "text": "機械學習"
      }
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
      {
        "key": "A",
        "text": "衍生下位學習（Derivative Subsumption）"
      },
      {
        "key": "B",
        "text": "相關下位學習（Correlative Subsumption）"
      },
      {
        "key": "C",
        "text": "上位學習"
      },
      {
        "key": "D",
        "text": "並列學習"
      }
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
      {
        "key": "A",
        "text": "有意義的接受學習（Meaningful Reception Learning）"
      },
      {
        "key": "B",
        "text": "被動填鴨學習"
      },
      {
        "key": "C",
        "text": "古典制約反射"
      },
      {
        "key": "D",
        "text": "無意識潛在學習"
      }
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
      {
        "key": "A",
        "text": "起點行為與先備知識（Prior Knowledge）的精確評估與連結"
      },
      {
        "key": "B",
        "text": "嚴格的體能測驗"
      },
      {
        "key": "C",
        "text": "調查學生家庭背景財富"
      },
      {
        "key": "D",
        "text": "星座性格配對"
      }
    ],
    "correctAnswer": "A",
    "explanation": "先備知識是新概念同化的唯一定錨點（Cognitive Anchors）。教學唯有精準扣合學童既有知識基礎，新知識才能生根茁壯。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第4章 p.37",
    "difficulty": "基礎"
  },
  {
    "id": "q-vygotsky-6",
    "chapterId": 5,
    "scholarId": "vygotsky",
    "topic": "近側發展區（ZPD）之精確定義跨度",
    "questionText": "維高斯基（L. S. Vygotsky）提出的「近側發展區（Zone of Proximal Development, ZPD）」，是指下列哪兩個水準之間的差距跨度？",
    "options": [
      {
        "key": "A",
        "text": "「個人獨立解決問題時展現的實際發展水準」與「在成人指導或能力較佳同儕協同下所能達到的潛在發展水準」"
      },
      {
        "key": "B",
        "text": "全班最高分與全班最低分"
      },
      {
        "key": "C",
        "text": "學生的年齡與智商分數"
      },
      {
        "key": "D",
        "text": "第一學期成績與第二學期成績"
      }
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
      {
        "key": "A",
        "text": "隨著學生能力的逐步增強與掌握，教師必須適時「漸進撤除（Fading）」鷹架支持，使學生最終能夠獨立自主完成任務"
      },
      {
        "key": "B",
        "text": "鷹架搭建後必須永久保留，絕不撤除"
      },
      {
        "key": "C",
        "text": "直接幫學生寫出整張考卷答案"
      },
      {
        "key": "D",
        "text": "完全不給任何提示讓學生碰壁"
      }
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
      {
        "key": "A",
        "text": "前測（Pre-test）→ 教學/介入中介（Mediation）→ 後測（Post-test），評量學習潛能與對提示的反應敏感度"
      },
      {
        "key": "B",
        "text": "只在期末考 100 題選擇題"
      },
      {
        "key": "C",
        "text": "評量學生的跑步速度"
      },
      {
        "key": "D",
        "text": "讓學生隨意互打分數"
      }
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
      {
        "key": "A",
        "text": "私語（Private Speech）是兒童用來引導、計畫與自我監控思維的重要「自我調控心理工具」"
      },
      {
        "key": "B",
        "text": "這是語言發展遲緩的病態現象"
      },
      {
        "key": "C",
        "text": "這是無意義的條件反射回音"
      },
      {
        "key": "D",
        "text": "純粹是為了吸引大人注意"
      }
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
      {
        "key": "A",
        "text": "符號與心理工具（Psychological tools / 主要是語言、文字與數字符號系統）"
      },
      {
        "key": "B",
        "text": "石器與弓箭"
      },
      {
        "key": "C",
        "text": "基因突變"
      },
      {
        "key": "D",
        "text": "肌肉發達度"
      }
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
      {
        "key": "A",
        "text": "由「更有能力的他人（MKO, More Knowledgeable Other）」在近側發展區中提供同儕鷹架，促進共同認知建構"
      },
      {
        "key": "B",
        "text": "強迫高成就學生充當免錢助教"
      },
      {
        "key": "C",
        "text": "製造同儕間的不平衡競爭"
      },
      {
        "key": "D",
        "text": "分散教師的法律責任"
      }
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
      {
        "key": "A",
        "text": "「教學走在發展的前面（Learning leads development）」——優質的教學能引導並走在心智發展前方，催生潛在能力"
      },
      {
        "key": "B",
        "text": "教學完全跟在發展屁股後面"
      },
      {
        "key": "C",
        "text": "學校不需要開設任何進階課程"
      },
      {
        "key": "D",
        "text": "發展與教學互不相干"
      }
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
      {
        "key": "A",
        "text": "在思維中相互交會融通：使生活日常概念系統化與邏輯化，同時賦予抽象科學概念以生活實感"
      },
      {
        "key": "B",
        "text": "完全消滅學生的生活經驗"
      },
      {
        "key": "C",
        "text": "嚴禁學校傳授任何科學理論"
      },
      {
        "key": "D",
        "text": "維持兩者徹底割裂互不往來"
      }
    ],
    "correctAnswer": "A",
    "explanation": "日常生活自發概念具豐富感性但欠系統，學校科學概念具邏輯性但易成教條。教學使兩者在 ZPD 中相遇，促成真正的概念理解。",
    "examSource": "110年新北市公立國小教甄試題",
    "handoutRef": "講義第5章 p.43",
    "difficulty": "進階"
  },
  {
    "id": "q-bloom-4",
    "chapterId": 5,
    "scholarId": "bloom",
    "topic": "修訂版認知領域教育目標層次順序（2001 Anderson & Krathwohl）",
    "questionText": "Anderson 與 Krathwohl（2001）修訂布魯姆（Bloom）認知歷程向度，由低層次至高層次的六大層次順序依序為何？",
    "options": [
      {
        "key": "A",
        "text": "記憶（Remember）→ 理解（Understand）→ 應用（Apply）→ 分析（Analyze）→ 評鑑（Evaluate）→ 創造（Create）"
      },
      {
        "key": "B",
        "text": "知識 → 理解 → 應用 → 綜合 → 分析 → 評鑑"
      },
      {
        "key": "C",
        "text": "記憶 → 應用 → 理解 → 評鑑 → 分析 → 創造"
      },
      {
        "key": "D",
        "text": "創造 → 評鑑 → 分析 → 應用 → 理解 → 記憶"
      }
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
      {
        "key": "A",
        "text": "程序知識（Procedural Knowledge）"
      },
      {
        "key": "B",
        "text": "事實知識（Factual Knowledge）"
      },
      {
        "key": "C",
        "text": "概念知識（Conceptual Knowledge）"
      },
      {
        "key": "D",
        "text": "後設認知知識（Metacognitive Knowledge）"
      }
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
      {
        "key": "A",
        "text": "分析（Analyze）"
      },
      {
        "key": "B",
        "text": "記憶（Remember）"
      },
      {
        "key": "C",
        "text": "應用（Apply）"
      },
      {
        "key": "D",
        "text": "理解（Understand）"
      }
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
      {
        "key": "A",
        "text": "綜合所學的綠色能源與力學原理，親自設計並製作出一部全新的太陽能節能模型車原型"
      },
      {
        "key": "B",
        "text": "默寫牛頓運動三大定律之公式與內文"
      },
      {
        "key": "C",
        "text": "用白話文解釋浮力原理之意義"
      },
      {
        "key": "D",
        "text": "套用加速度公式計算物體落地速度"
      }
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
      {
        "key": "A",
        "text": "接受（Receiving）→ 反應（Responding）→ 評價/價值化（Valuing）→ 組織（Organization）→ 品格形成/價值性格化（Characterization）"
      },
      {
        "key": "B",
        "text": "品格形成 → 組織 → 評價 → 反應 → 接受"
      },
      {
        "key": "C",
        "text": "反應 → 接受 → 組織 → 評價 → 品格形成"
      },
      {
        "key": "D",
        "text": "接受 → 評價 → 反應 → 組織 → 品格形成"
      }
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
      {
        "key": "A",
        "text": "即時診斷學生的學習困難與盲點，針對未精熟者提供精準的個別化補救回饋修正"
      },
      {
        "key": "B",
        "text": "給全班學生打期末段考分數並在聯絡簿排名"
      },
      {
        "key": "C",
        "text": "懲罰考得差的學生"
      },
      {
        "key": "D",
        "text": "挑選出資優生進入實驗班"
      }
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
      {
        "key": "A",
        "text": "「教學教材內容主題」與「教育目標認知歷程層次」"
      },
      {
        "key": "B",
        "text": "「學生姓名」與「座號」"
      },
      {
        "key": "C",
        "text": "「考試日期」與「監考老師姓名」"
      },
      {
        "key": "D",
        "text": "「字體大小」與「紙張磅數」"
      }
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
      {
        "key": "A",
        "text": "「如果你是當時的決策者，你會依據何種倫理與科學規準評斷這項核能發電政策的得失？為什麼？」（評鑑）"
      },
      {
        "key": "B",
        "text": "「請問第二次世界大戰於哪一年結束？」（記憶）"
      },
      {
        "key": "C",
        "text": "「台灣最高的山峰名稱是什麼？」（記憶）"
      },
      {
        "key": "D",
        "text": "「三角形內角和等於幾度？」（記憶）"
      }
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
      {
        "key": "A",
        "text": "常模參照評量人為地製造失敗者與劣等生標籤，將學生互相比較競爭置於「人人精熟特定目標」之上"
      },
      {
        "key": "B",
        "text": "常模評量計算標準差過於簡單"
      },
      {
        "key": "C",
        "text": "常模評量無法在紙筆上作答"
      },
      {
        "key": "D",
        "text": "常模評量會減少學生的體育運動時間"
      }
    ],
    "correctAnswer": "A",
    "explanation": "布魯姆主張應採「標準參照評量（Criterion-Referenced）」，教育目標是幫助人人達成卓越標準，而非為了製造鐘型曲線常態分配而犧牲三分之一學生的自尊。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第7章 p.62",
    "difficulty": "中等"
  },
  {
    "id": "q-maslow-5",
    "chapterId": 6,
    "scholarId": "maslow",
    "topic": "需求層次理論（Hierarchy of Needs）七/八階層模型擴充",
    "questionText": "馬斯洛晚年將原先的五階層需求模型擴充為更完整的體系，在「自尊需求」之上、「自我實現需求」之下，加入了哪兩種高階心智需求？",
    "options": [
      {
        "key": "A",
        "text": "知的需求（求知/認知需求）與 美的需求（審美需求）"
      },
      {
        "key": "B",
        "text": "生理需求與安全需求"
      },
      {
        "key": "C",
        "text": "物質金錢需求與權力需求"
      },
      {
        "key": "D",
        "text": "排泄需求與睡眠需求"
      }
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
      {
        "key": "A",
        "text": "匱乏需求在獲得滿足後張力會降低或消失；而成長需求（如求知、審美、自我實現）在獲得滿足後反而會越發渴望追求"
      },
      {
        "key": "B",
        "text": "成長需求滿足後會完全消失不再出現"
      },
      {
        "key": "C",
        "text": "飢餓是成長需求，求知是匱乏需求"
      },
      {
        "key": "D",
        "text": "兩者沒有任何運作差異"
      }
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
      {
        "key": "A",
        "text": "協同社工提供早餐營養補充，建立班級溫暖包容的安全感，滿足其低層次的生理與安全基本需求"
      },
      {
        "key": "B",
        "text": "強制罰寫數學作業一百次"
      },
      {
        "key": "C",
        "text": "當眾斥責其學習態度不端正"
      },
      {
        "key": "D",
        "text": "直接將其列入資優班加強培訓"
      }
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
      {
        "key": "A",
        "text": "高峰經驗（Peak Experience）"
      },
      {
        "key": "B",
        "text": "習得無助感"
      },
      {
        "key": "C",
        "text": "刺激類化狀態"
      },
      {
        "key": "D",
        "text": "感官剝奪效應"
      }
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
      {
        "key": "A",
        "text": "盲目遵從世俗偏見與物質虛榮"
      },
      {
        "key": "B",
        "text": "能客觀準確地洞察現實"
      },
      {
        "key": "C",
        "text": "接納自己、他人與自然"
      },
      {
        "key": "D",
        "text": "富含自發性與以問題為中心的思維導向"
      }
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
      {
        "key": "A",
        "text": "愛與隸屬需求（Belongingness and Love Needs）"
      },
      {
        "key": "B",
        "text": "生理需求"
      },
      {
        "key": "C",
        "text": "審美需求"
      },
      {
        "key": "D",
        "text": "超越自我需求"
      }
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
      {
        "key": "A",
        "text": "將學生視為流水線產品、強迫灌輸外在標準答案與工具化分數考核的機械教育"
      },
      {
        "key": "B",
        "text": "關照學生身心發展的個別化教學"
      },
      {
        "key": "C",
        "text": "啟發潛能的探究課程"
      },
      {
        "key": "D",
        "text": "營造友善溫暖的班級氛圍"
      }
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
      {
        "key": "A",
        "text": "引導學生勇敢面對自我內在懷疑，建立心理安全感，鼓勵其接納自身才華並勇於承擔卓越責任"
      },
      {
        "key": "B",
        "text": "警告學生出頭鳥會被打死，要盡量裝傻"
      },
      {
        "key": "C",
        "text": "完全取消所有挑戰性任務"
      },
      {
        "key": "D",
        "text": "對其冷嘲熱諷以鍛鍊心智"
      }
    ],
    "correctAnswer": "A",
    "explanation": "約拿情結代表面對偉大命運時的逃避恐懼。教師應提供心理支持，幫助學生破除對失敗或被孤立的恐懼，邁向自我實現。",
    "examSource": "110年高雄市國小教甄試題",
    "handoutRef": "講義第6章 p.53",
    "difficulty": "進階"
  },
  {
    "id": "q-rogers-4",
    "chapterId": 6,
    "scholarId": "rogers",
    "topic": "羅吉斯促進學習之三大核心態度",
    "questionText": "人本主義教育心理學大師卡爾·羅吉斯（Carl Rogers）提出，教師作為「學習促進者（Facilitator）」，必須具備哪三種最核心的特質態度？",
    "options": [
      {
        "key": "A",
        "text": "真誠一致（Congruence / Genuineness）、無條件積極關懷（Unconditional Positive Regard）、同理心傾聽理解（Empathy）"
      },
      {
        "key": "B",
        "text": "權威嚴肅、賞罰分明、滔滔不絕"
      },
      {
        "key": "C",
        "text": "放任不管、冷漠以對、隨意打分"
      },
      {
        "key": "D",
        "text": "博學多聞、板書工整、音量宏亮"
      }
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
      {
        "key": "A",
        "text": "張老師在課堂上不戴權威面具，當自己不知道某題答案時能坦白承認並邀請學生一起查證，真誠表達內在感受"
      },
      {
        "key": "B",
        "text": "李老師明明不懂卻硬掰假答案以維持尊嚴"
      },
      {
        "key": "C",
        "text": "王老師私下憤怒但臉上掛著僵硬的假笑"
      },
      {
        "key": "D",
        "text": "陳老師對學生永遠保持冷漠撲克臉"
      }
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
      {
        "key": "A",
        "text": "接納並尊重學生作為「人」的本質價值與尊嚴，不因其當前成績高低或犯錯而否定其生存價值，將「人」與「行為」分開看待"
      },
      {
        "key": "B",
        "text": "放任學生所有破壞公物行為不管"
      },
      {
        "key": "C",
        "text": "只有考第一名的學生才值得被愛"
      },
      {
        "key": "D",
        "text": "不管學生做什麼都給予金錢獎賞"
      }
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
      {
        "key": "A",
        "text": "「看到考卷的分數，你感到非常沮喪與挫折，甚至開始懷疑自己的價值，對嗎？」"
      },
      {
        "key": "B",
        "text": "「這有什麼好哭的，男子漢大丈夫哭什麼哭！」"
      },
      {
        "key": "C",
        "text": "「早就叫你不要打電動，活該！」"
      },
      {
        "key": "D",
        "text": "「別難過了，我們去吃冰淇淋就沒事了。」"
      }
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
      {
        "key": "A",
        "text": "具有全人投入性（整個人身心靈涉入）、由自我主動發起、能深入滲透並根本改變個體的行為與人格"
      },
      {
        "key": "B",
        "text": "只與大腦左半球記憶區有關"
      },
      {
        "key": "C",
        "text": "必須靠外在電擊增強驅動"
      },
      {
        "key": "D",
        "text": "在考完試三天後必然全數遺忘"
      }
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
      {
        "key": "A",
        "text": "師生共同協商擬定合約，由學生自主設定目標、選擇活動路徑並約定評量規準，教師擔任資源支持者"
      },
      {
        "key": "B",
        "text": "由教師單方擬定賣身契嚴格懲罰"
      },
      {
        "key": "C",
        "text": "要求家長簽字保證學生考進台大"
      },
      {
        "key": "D",
        "text": "完全不訂定任何規範讓學生自生自滅"
      }
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
      {
        "key": "A",
        "text": "心理安全與心理自由（Psychological Safety and Freedom）的無威脅學習情境"
      },
      {
        "key": "B",
        "text": "高壓恐懼的淘汰篩選戰場"
      },
      {
        "key": "C",
        "text": "死氣沉沉的禁語環境"
      },
      {
        "key": "D",
        "text": "充滿彼此攻訐的零和競爭"
      }
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
      {
        "key": "A",
        "text": "「身旁的引導促進者（Guide on the side / Facilitator of learning）」"
      },
      {
        "key": "B",
        "text": "威權的法官"
      },
      {
        "key": "C",
        "text": "無關緊要的旁觀者"
      },
      {
        "key": "D",
        "text": "嚴格的監考員"
      }
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
      {
        "key": "A",
        "text": "被動填鴨灌輸式的教學模式"
      },
      {
        "key": "B",
        "text": "學生的自主專案研究"
      },
      {
        "key": "C",
        "text": "合作學習與同儕探究"
      },
      {
        "key": "D",
        "text": "學生的課外實習經驗"
      }
    ],
    "correctAnswer": "A",
    "explanation": "羅吉斯強調真知必然源於個人主動內化與體驗；外在強加的說教與死背無法轉化為健全人格與生活行動力，這是對填鴨教育的深痛針砭。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第6章 p.54",
    "difficulty": "中等"
  },
  {
    "id": "q-wiggins-6",
    "chapterId": 7,
    "scholarId": "wiggins_mctighe",
    "topic": "逆向設計三階段（Backward Design）順序",
    "questionText": "威金斯與麥克泰（Wiggins & McTighe）在 UbD（Understanding by Design）中倡導「逆向設計（Backward Design）」，其三大設計階段順序依序為何？",
    "options": [
      {
        "key": "A",
        "text": "階段一：確認期望成果 → 階段二：決定可接受的評量證據 → 階段三：規劃學習經驗與教學"
      },
      {
        "key": "B",
        "text": "階段一：規劃教學活動 → 階段二：設計考試考卷 → 階段三：確認學習成果"
      },
      {
        "key": "C",
        "text": "階段一：翻開教科書第一頁 → 階段二：照本宣科講述 → 階段三：期末段考"
      },
      {
        "key": "D",
        "text": "階段一：設計表現任務 → 階段二：確認核心大概念 → 階段三：出紙筆測驗"
      }
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
      {
        "key": "A",
        "text": "「活動導向教學（只顧熱鬧好玩卻無目標）」與「教材覆蓋導向（只顧趕進度教完課本卻無深層理解）」"
      },
      {
        "key": "B",
        "text": "體罰學生與作業出太少"
      },
      {
        "key": "C",
        "text": "放學太早與冷氣開太強"
      },
      {
        "key": "D",
        "text": "字寫太小與粉筆灰太重"
      }
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
      {
        "key": "A",
        "text": "機械背誦（Mechanical Memorization）"
      },
      {
        "key": "B",
        "text": "解釋（Explanation）與詮釋（Interpretation）"
      },
      {
        "key": "C",
        "text": "應用（Application）與觀點（Perspective）"
      },
      {
        "key": "D",
        "text": "同理心（Empathy）與自知（Self-Knowledge）"
      }
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
      {
        "key": "A",
        "text": "目標（Goal）、角色（Role）、對象（Audience）、情境（Situation）、產品/表現（Product）、標準規準（Standards）"
      },
      {
        "key": "B",
        "text": "成績、跑步、年齡、學校、鉛筆、學生"
      },
      {
        "key": "C",
        "text": "遊戲、規則、行動、速度、力量、獎賞"
      },
      {
        "key": "D",
        "text": "語法、閱讀、問答、拼字、發音、句子"
      }
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
      {
        "key": "A",
        "text": "開放性、發人深省、直指學科核心大概念、沒有單一標準答案且能引發持續探究"
      },
      {
        "key": "B",
        "text": "是非題或一眼就能在課本找到答案的封閉事實問題"
      },
      {
        "key": "C",
        "text": "只需要背誦特定公式就能回答"
      },
      {
        "key": "D",
        "text": "學生完全無法理解的艱澀術語"
      }
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
      {
        "key": "A",
        "text": "幫助學生明白單元目標「去向何方（Where）」與「為何而學（Why）」"
      },
      {
        "key": "B",
        "text": "要求學生等待（Wait）老師到齊"
      },
      {
        "key": "C",
        "text": "抄寫生字工作（Writing）"
      },
      {
        "key": "D",
        "text": "測量教室溫度（Weather）"
      }
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
      {
        "key": "A",
        "text": "作為概念的核心定錨點，統整零碎孤立的事實知識，促成高階思維與生活情境實踐的深度遷移"
      },
      {
        "key": "B",
        "text": "用來增加教科書的章節數量"
      },
      {
        "key": "C",
        "text": "取代所有基礎練習題"
      },
      {
        "key": "D",
        "text": "只給大學研究所學生研究用"
      }
    ],
    "correctAnswer": "A",
    "explanation": "大概念（Big Ideas）具備深層包攝性與超越時間的持久價值，是落實素養導向「跨領域統整、深度探究與生活遷移」的課程靈魂。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第7章 p.63",
    "difficulty": "中等"
  },
  {
    "id": "q-dewey-4",
    "chapterId": 8,
    "scholarId": "dewey",
    "topic": "杜威思考術（How We Think）五大思維步驟順序",
    "questionText": "約翰·杜威（John Dewey）在《我們如何思維》中提出科學問題解決思維的五大步驟，其正確順序為何？",
    "options": [
      {
        "key": "A",
        "text": "遭遇疑難情境 → 界定問題關鍵 → 提出解決假說 → 推論演繹結果 → 驗證檢驗假說"
      },
      {
        "key": "B",
        "text": "提出假說 → 遭遇疑難 → 界定問題 → 驗證假說 → 推論演繹"
      },
      {
        "key": "C",
        "text": "驗證檢驗 → 遭遇疑難 → 提出假說 → 推論演繹 → 界定問題"
      },
      {
        "key": "D",
        "text": "界定問題 → 遭遇疑難 → 驗證假說 → 提出假說 → 推論演繹"
      }
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
      {
        "key": "A",
        "text": "在真實生活的情境脈絡中主動行動、遭遇問題並進行科學探究反省，使經驗不斷重組與改造"
      },
      {
        "key": "B",
        "text": "只讓學生動手做勞作或體力活，不需要任何大腦反省思考"
      },
      {
        "key": "C",
        "text": "在黑板上抄寫一千遍做中學"
      },
      {
        "key": "D",
        "text": "完全取消課本與所有文字閱讀"
      }
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
      {
        "key": "A",
        "text": "將當前兒童的真實生活視為手段，把教育僅僅窄化為「替遙遠成年未來謀職做準備」的冷酷預備說"
      },
      {
        "key": "B",
        "text": "讓學生在學校吃營養午餐"
      },
      {
        "key": "C",
        "text": "學校開設生活與科技課程"
      },
      {
        "key": "D",
        "text": "提倡終身學習"
      }
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
      {
        "key": "A",
        "text": "連續性原則（Continuity）與 交互作用原則（Interaction）"
      },
      {
        "key": "B",
        "text": "速度原則與重量原則"
      },
      {
        "key": "C",
        "text": "獎勵原則與懲罰原則"
      },
      {
        "key": "D",
        "text": "文字原則與數字原則"
      }
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
      {
        "key": "A",
        "text": "將學校打造為一個簡化、純化且平衡的微型民主合作社會，讓學生在真實共同體生活中學習民主參與"
      },
      {
        "key": "B",
        "text": "將學校完全變成營利賺錢的商業工廠"
      },
      {
        "key": "C",
        "text": "使學校與現實社會完全隔絕成為象牙塔"
      },
      {
        "key": "D",
        "text": "在校園建立監獄式的軍事管制"
      }
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
      {
        "key": "A",
        "text": "學習不是被動接收外在現成知識，而是學習者主動將新舊經驗融會貫通，賦予經驗更深意義並增進指揮後續經驗的能力"
      },
      {
        "key": "B",
        "text": "背誦考古題答案以應付聯考"
      },
      {
        "key": "C",
        "text": "將大腦當作空水桶由老師倒水"
      },
      {
        "key": "D",
        "text": "全盤否定人類所有的文化傳統"
      }
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
      {
        "key": "A",
        "text": "以證據為基礎、能獨立批判並審慎考量後果的「反省性思維能力（Reflective Thinking）」"
      },
      {
        "key": "B",
        "text": "對權威領袖的絕對盲從順服"
      },
      {
        "key": "C",
        "text": "高度一致的宗教信仰"
      },
      {
        "key": "D",
        "text": "相同規格的體型與服裝"
      }
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
      {
        "key": "A",
        "text": "以兒童的四種原生衝動（溝通、探究、製作、藝術表達）為核心的「作業（Occupations，如烹飪、木工、編織）與生活探究」"
      },
      {
        "key": "B",
        "text": "嚴格的拉丁文與希臘文文法背誦"
      },
      {
        "key": "C",
        "text": "完全軍事化的步操操練"
      },
      {
        "key": "D",
        "text": "全天候的紙筆模擬試卷測驗"
      }
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
      {
        "key": "A",
        "text": "真理不是靜止不變的教條，而是在親身行動探究與經驗檢驗的歷程中動態證成的（實用主義實踐真理觀）"
      },
      {
        "key": "B",
        "text": "教科書上的每一句話都絕不容懷疑"
      },
      {
        "key": "C",
        "text": "探究只是用來打發課堂時間"
      },
      {
        "key": "D",
        "text": "實作課程不需要任何科學邏輯"
      }
    ],
    "correctAnswer": "A",
    "explanation": "杜威實用主義（Pragmatism / 工具主義）認為概念與假說是引導行動的工具，知識是在動態探究與問題解決中不斷被檢驗與更新的成果。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第8章 p.69",
    "difficulty": "中等"
  },
  {
    "id": "q-suchman-4",
    "chapterId": 8,
    "scholarId": "suchman",
    "topic": "探究訓練模式（Inquiry Training Model）發起人",
    "questionText": "李察·蘇克曼（Richard Suchman）為培養學生如同科學家般的獨立探究思考能力，創立了著名的：",
    "options": [
      {
        "key": "A",
        "text": "探究訓練模式（Inquiry Training Model）"
      },
      {
        "key": "B",
        "text": "直接教學法"
      },
      {
        "key": "C",
        "text": "暗示感應教學法"
      },
      {
        "key": "D",
        "text": "精熟默寫模式"
      }
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
      {
        "key": "A",
        "text": "打破既有預期認知，引發強烈的認知失衡、好奇心與探究內在動機"
      },
      {
        "key": "B",
        "text": "炫耀教師的個人魔術雜耍技巧"
      },
      {
        "key": "C",
        "text": "恐嚇學生如果不用功就會被吸入瓶中"
      },
      {
        "key": "D",
        "text": "作為課堂結束前的娛樂消遣"
      }
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
      {
        "key": "A",
        "text": "只能提出能由教師回答「是（Yes）」或「否（No）」的封閉性假設驗證問題"
      },
      {
        "key": "B",
        "text": "直接問「老師，請問為什麼會這樣？」要求老師給出答案"
      },
      {
        "key": "C",
        "text": "學生只能用眼神示意不准開口說話"
      },
      {
        "key": "D",
        "text": "必須用英文寫出長篇論文提問"
      }
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
      {
        "key": "A",
        "text": "遭遇問題（呈現衝突事件）→ 蒐集資料驗證屬性 → 蒐集資料實驗操弄 → 形成理論解釋 → 分析探究歷程（後設省思）"
      },
      {
        "key": "B",
        "text": "形成解釋 → 遭遇問題 → 蒐集資料 → 分析歷程 → 實驗操弄"
      },
      {
        "key": "C",
        "text": "分析歷程 → 形成解釋 → 遭遇問題 → 實驗操弄 → 蒐集資料"
      },
      {
        "key": "D",
        "text": "實驗操弄 → 遭遇問題 → 形成解釋 → 蒐集資料 → 分析歷程"
      }
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
      {
        "key": "A",
        "text": "培養學生對自身提問與探究策略的「後設認知反思（Metacognitive reflection）」，學會如何問出更具穿透力的科學問題"
      },
      {
        "key": "B",
        "text": "處罰問錯問題的同學"
      },
      {
        "key": "C",
        "text": "將實驗儀器清洗乾淨"
      },
      {
        "key": "D",
        "text": "競賽誰抄筆記字數最多"
      }
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
      {
        "key": "A",
        "text": "教師徹底保持價值中立與提示守門人角色，迫使學生必須親自提出假設、承擔求證責任"
      },
      {
        "key": "B",
        "text": "取消所有評量考試"
      },
      {
        "key": "C",
        "text": "教師戴耳塞不聽學生講話"
      },
      {
        "key": "D",
        "text": "把學生隨機送去野外"
      }
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
      {
        "key": "A",
        "text": "甲：驗證客體性質/屬性（Verification）；乙：實驗操弄條件/因果（Experimentation）"
      },
      {
        "key": "B",
        "text": "甲：實驗操弄；乙：驗證性質"
      },
      {
        "key": "C",
        "text": "甲：總結理論；乙：衝突呈現"
      },
      {
        "key": "D",
        "text": "甲：後設反思；乙：消弱反應"
      }
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
      {
        "key": "A",
        "text": "蘇克曼的探究訓練模式（Inquiry Training Model）"
      },
      {
        "key": "B",
        "text": "桑代克的迷籠試誤法"
      },
      {
        "key": "C",
        "text": "巴夫洛夫的古典刺激反射"
      },
      {
        "key": "D",
        "text": "凱勒的個人化自學制"
      }
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
      {
        "key": "A",
        "text": "適時重整已驗證的事實摘要，或提醒學生轉向檢驗關鍵變因（如「你們已經知道物體本身性質，那外在環境的氣體呢？」）搭建適度引導鷹架"
      },
      {
        "key": "B",
        "text": "大聲斥責全班笨拙並公布答案"
      },
      {
        "key": "C",
        "text": "宣布提早下課"
      },
      {
        "key": "D",
        "text": "罰全班起立抄課文"
      }
    ],
    "correctAnswer": "A",
    "explanation": "當探究陷入僵局時，教師不直接給解答，而是透過摘要整理或方向性提問搭建思考鷹架，引導學生重新校準探究焦點。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第8章 p.70",
    "difficulty": "中等"
  },
  {
    "id": "q-ennis-4",
    "chapterId": 8,
    "scholarId": "ennis",
    "topic": "恩尼斯批判性思考（Critical Thinking）經典定義",
    "questionText": "批判性思考領域權威學者勞伯·恩尼斯（Robert H. Ennis）將「批判性思考（Critical Thinking）」界定為：",
    "options": [
      {
        "key": "A",
        "text": "「一種合理的（Reasonable）且反省性的（Reflective）思維，其目的在於決定何者該相信（Believe）或何者該去做（Do）」"
      },
      {
        "key": "B",
        "text": "專門在別人的言論中雞蛋裡挑骨頭並大聲辯論"
      },
      {
        "key": "C",
        "text": "能夠在三十秒內背誦一整面教科書"
      },
      {
        "key": "D",
        "text": "毫無根據地反對所有權威與法律"
      }
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
      {
        "key": "A",
        "text": "焦點（Focus）、理由（Reasons）、推論（Inference）、情境（Situation）、澄清/清晰（Clarity）、全觀概覽（Overview）"
      },
      {
        "key": "B",
        "text": "事實、反應、直覺、速度、冷靜、觀察"
      },
      {
        "key": "C",
        "text": "朋友、金錢、利益、安全、班級、秩序"
      },
      {
        "key": "D",
        "text": "自由、權利、獨立、社會、公民、責任"
      }
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
      {
        "key": "A",
        "text": "精確定義核心語詞與概念，釐清歧義（Ambiguity）與含糊不清的語意，避免雞同鴨講"
      },
      {
        "key": "B",
        "text": "提高說話音量讓對方閉嘴"
      },
      {
        "key": "C",
        "text": "要求對方立下字據發誓"
      },
      {
        "key": "D",
        "text": "將黑板擦得乾乾淨淨"
      }
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
      {
        "key": "A",
        "text": "批判思考傾向（Critical Thinking Dispositions，如追求真理、心胸開放、尊重證據、考慮他人視角）"
      },
      {
        "key": "B",
        "text": "爭強好勝的侵略傾向"
      },
      {
        "key": "C",
        "text": "討好師長的順從傾向"
      },
      {
        "key": "D",
        "text": "孤僻自傲的優越傾向"
      }
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
      {
        "key": "A",
        "text": "資訊提供者是否具備專業聲譽、是否具利益衝突（利益偏私）、是否有客觀實證支持"
      },
      {
        "key": "B",
        "text": "影片點閱率是否超過一百萬"
      },
      {
        "key": "C",
        "text": "發文者的照片是否長得好看"
      },
      {
        "key": "D",
        "text": "文字標題是否足夠驚悚聳動"
      }
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
      {
        "key": "A",
        "text": "倒果為因，且將「相關關係」錯誤推論為「必然的因果關係」"
      },
      {
        "key": "B",
        "text": "平板電腦螢幕太小"
      },
      {
        "key": "C",
        "text": "資優生智商測驗不準"
      },
      {
        "key": "D",
        "text": "沒有任何邏輯錯誤，非常合理"
      }
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
      {
        "key": "A",
        "text": "提供立場相互對立的兩份社論或實驗數據文本，要求學生評估雙方論點的證據強度並指出推論漏洞"
      },
      {
        "key": "B",
        "text": "考文言文注釋的單一標準答案默寫"
      },
      {
        "key": "C",
        "text": "考歷史年代的單純是非勾選"
      },
      {
        "key": "D",
        "text": "要求學生背出全班同學的名字"
      }
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
      {
        "key": "A",
        "text": "退後一步檢視全局，確認焦點、理由、推論、情境與語意澄清是否連貫完整，有無遺漏重大反面論點"
      },
      {
        "key": "B",
        "text": "立即在社群媒體發文炫耀自己想通了"
      },
      {
        "key": "C",
        "text": "把考卷直接交上去不管對錯"
      },
      {
        "key": "D",
        "text": "把所有理由刪除只保留結論"
      }
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
      {
        "key": "A",
        "text": "創造性思考負責發散產生大量新穎構想（產生假說）；批判性思考負責聚斂嚴密評鑑構想的可行性與有效性（檢驗假說），兩者相輔相成"
      },
      {
        "key": "B",
        "text": "有創造力的人必然毫無批判思考"
      },
      {
        "key": "C",
        "text": "批判思考會徹底抹殺所有創造力"
      },
      {
        "key": "D",
        "text": "兩者完全是同一件事沒有區別"
      }
    ],
    "correctAnswer": "A",
    "explanation": "創造性思維產生多元可能性（發散），批判性思維檢驗合理性與邏輯有效性（聚斂），兩者結合方能達成卓越問題解決。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第8章 p.71",
    "difficulty": "中等"
  },
  {
    "id": "q-raths-4",
    "chapterId": 9,
    "scholarId": "raths",
    "topic": "價值澄清法（Values Clarification）三大歷程階段",
    "questionText": "路易斯·瑞斯（L. E. Raths）等人在 1966 年開創「價值澄清法（Values Clarification）」，強調個人價值觀的形成必須經過哪三大基本歷程階段？",
    "options": [
      {
        "key": "A",
        "text": "選擇（Choosing）→ 珍視（Prizing）→ 行動（Acting）"
      },
      {
        "key": "B",
        "text": "處罰 → 認錯 → 改過"
      },
      {
        "key": "C",
        "text": "背誦 → 默寫 → 考試"
      },
      {
        "key": "D",
        "text": "示範 → 模仿 → 增強"
      }
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
      {
        "key": "A",
        "text": "被迫接受權威長輩的硬性規定"
      },
      {
        "key": "B",
        "text": "完全自由地選擇"
      },
      {
        "key": "C",
        "text": "從各種可行的途徑中選擇，並深思熟慮每種途徑的後果"
      },
      {
        "key": "D",
        "text": "珍愛自豪該選擇、公開向他人承認，並反覆在生活中踐行"
      }
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
      {
        "key": "A",
        "text": "成人以權威高壓「硬性灌輸（Indoctrination）」固定信條，強迫學生背誦道德教條"
      },
      {
        "key": "B",
        "text": "民主討論法"
      },
      {
        "key": "C",
        "text": "角色扮演法"
      },
      {
        "key": "D",
        "text": "生活實作體驗"
      }
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
      {
        "key": "A",
        "text": "「這項決定是你自己深思熟慮後自由選擇的嗎？你是否願意在全班面前為這項選擇辯護？」"
      },
      {
        "key": "B",
        "text": "「你怎麼會想出這麼愚蠢的點子，立刻給我改掉！」"
      },
      {
        "key": "C",
        "text": "「你的想法跟我完全不同，你被扣十分了。」"
      },
      {
        "key": "D",
        "text": "「不管你做什麼，老師都無條件支持你犯罪。」"
      }
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
      {
        "key": "A",
        "text": "價值連續線（Values Continuum）"
      },
      {
        "key": "B",
        "text": "道德兩難故事"
      },
      {
        "key": "C",
        "text": "角色扮演九步法"
      },
      {
        "key": "D",
        "text": "制約消弱訓練"
      }
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
      {
        "key": "A",
        "text": "在安全無威脅的氛圍中迅速讓學生對廣泛價值議題表態，促進對自身價值傾向的初步覺察"
      },
      {
        "key": "B",
        "text": "清點人數以便處罰少數派"
      },
      {
        "key": "C",
        "text": "決定當天的午餐菜單"
      },
      {
        "key": "D",
        "text": "挑選班長候選人"
      }
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
      {
        "key": "A",
        "text": "公開向他人聲明確認（Affirming publicly / 在公眾面前不畏他人異樣眼光坦誠擁護該價值）"
      },
      {
        "key": "B",
        "text": "把秘密鎖在日記本裡永遠不讓人知道"
      },
      {
        "key": "C",
        "text": "隨波逐流偽裝迎合大家的答案"
      },
      {
        "key": "D",
        "text": "用金錢賄賂其他同學"
      }
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
      {
        "key": "A",
        "text": "行動實踐且反覆成為固定生活習慣（Acting repeatedly into a pattern of life）"
      },
      {
        "key": "B",
        "text": "空頭口號階段"
      },
      {
        "key": "C",
        "text": "被動同化階段"
      },
      {
        "key": "D",
        "text": "短期記憶反應"
      }
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
      {
        "key": "A",
        "text": "普世人權倫理原則（普遍道德核心美德）與理性思辨標準相結合"
      },
      {
        "key": "B",
        "text": "回到古代封建體罰制度"
      },
      {
        "key": "C",
        "text": "完全取消所有道德教育課程"
      },
      {
        "key": "D",
        "text": "全面實施軍事化管理"
      }
    ],
    "correctAnswer": "A",
    "explanation": "現代教育保留價值澄清「重自主探究、反對僵化灌輸」的優點，同時兼顧柯爾保「普遍倫理公正原則」，避免滑入虛無主義。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第9章 p.74",
    "difficulty": "進階"
  },
  {
    "id": "q-kohlberg-4",
    "chapterId": 9,
    "scholarId": "kohlberg",
    "topic": "海因茨偷藥（Heinz Dilemma）之道德判斷核心依據",
    "questionText": "柯爾保（L. Kohlberg）在「海因茨偷藥（Heinz Dilemma）」道德兩難研究中，用以判定受試者道德發展階段的核心依據為何？",
    "options": [
      {
        "key": "A",
        "text": "受試者做出選擇背後的「道德推理理由（Reasoning）」，而非最後回答「該偷或不該偷」的答案結論"
      },
      {
        "key": "B",
        "text": "受試者是否有犯罪前科紀錄"
      },
      {
        "key": "C",
        "text": "受試者的回答速度快慢"
      },
      {
        "key": "D",
        "text": "受試者的英文詞彙量"
      }
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
      {
        "key": "A",
        "text": "階段一：避罰服從取向（Punishment and Obedience Orientation）"
      },
      {
        "key": "B",
        "text": "階段二：相對功利取向"
      },
      {
        "key": "C",
        "text": "階段三：好男孩巧女孩取向"
      },
      {
        "key": "D",
        "text": "階段四：維持社會秩序取向"
      }
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
      {
        "key": "A",
        "text": "階段二：相對功利取向（Instrumental Relativist Orientation）"
      },
      {
        "key": "B",
        "text": "階段一：避罰服從取向"
      },
      {
        "key": "C",
        "text": "階段四：法規秩序取向"
      },
      {
        "key": "D",
        "text": "階段六：普遍倫理取向"
      }
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
      {
        "key": "A",
        "text": "階段三：尋求認可取向（好男孩巧女孩取向）"
      },
      {
        "key": "B",
        "text": "階段二：相對功利取向"
      },
      {
        "key": "C",
        "text": "階段五：社會契約取向"
      },
      {
        "key": "D",
        "text": "階段一：避罰服從取向"
      }
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
      {
        "key": "A",
        "text": "階段四：遵守法規與維持社會秩序取向（Law and Order Orientation）"
      },
      {
        "key": "B",
        "text": "階段一：避罰服從取向"
      },
      {
        "key": "C",
        "text": "階段三：好男孩取向"
      },
      {
        "key": "D",
        "text": "階段六：普遍倫理原則取向"
      }
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
      {
        "key": "A",
        "text": "階段五：社會契約合法取向（Social Contract Orientation）"
      },
      {
        "key": "B",
        "text": "階段四：法規秩序取向"
      },
      {
        "key": "C",
        "text": "階段二：相對功利取向"
      },
      {
        "key": "D",
        "text": "階段一：避罰服從取向"
      }
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
      {
        "key": "A",
        "text": "階段六：普遍倫理原則取向（Universal Ethical Principle Orientation）"
      },
      {
        "key": "B",
        "text": "階段三：尋求認可取向"
      },
      {
        "key": "C",
        "text": "階段一：避罰服從取向"
      },
      {
        "key": "D",
        "text": "階段二：相對功利取向"
      }
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
      {
        "key": "A",
        "text": "提供高出學生現有道德發展「一個階段（+1 階段）」的論點與理由引導激盪"
      },
      {
        "key": "B",
        "text": "提供高出三個階段的深奧哲學論文強迫學生閱讀"
      },
      {
        "key": "C",
        "text": "只迎合學生現有階段的答案絕不挑戰"
      },
      {
        "key": "D",
        "text": "由教師直接公布標準道德答案"
      }
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
      {
        "key": "A",
        "text": "柯爾保純以男性受試者為樣本，建立獨尊正義權利的「正義倫理（Ethics of Justice）」，貶低了女性普遍展現的「關懷與人際連結倫理（Ethics of Care）」"
      },
      {
        "key": "B",
        "text": "柯爾保完全不懂希臘哲學"
      },
      {
        "key": "C",
        "text": "柯爾保的道德情境缺乏圖片"
      },
      {
        "key": "D",
        "text": "柯爾保研究花費太多研究經費"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Gilligan 提出關懷倫理學（Ethics of Care），指出女性道德發展往往以人際連結、關愛、同理與維護關係為核心，柯爾保將其歸入低層階段三是男性中心偏見。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第9章 p.77",
    "difficulty": "進階"
  },
  {
    "id": "q-shaftel-3",
    "chapterId": 9,
    "scholarId": "shaftel",
    "topic": "薛夫特爾角色扮演教學模式之九大步驟順序",
    "questionText": "芬妮與喬治·薛夫特爾（Fannie & George Shaftel）在 1967 年開創「角色扮演教學模式（Role Playing Model）」，其完整的九個教學程序依序為何？",
    "options": [
      {
        "key": "A",
        "text": "暖身團體 → 選定角色扮演者 → 佈置場景 → 準備觀察員 → 演出角色 → 討論與評鑑 → 再次演出 → 再次討論評鑑 → 分享經驗與歸納概括"
      },
      {
        "key": "B",
        "text": "演出角色 → 佈置場景 → 暖身團體 → 準備觀察員 → 討論評鑑 → 再次演出 → 再次討論 → 選定角色 → 分享經驗"
      },
      {
        "key": "C",
        "text": "準備觀察員 → 暖身團體 → 選定角色 → 演出角色 → 佈置場景 → 分享經驗 → 討論評鑑 → 再次演出 → 再次討論"
      },
      {
        "key": "D",
        "text": "討論評鑑 → 暖身團體 → 演出角色 → 佈置場景 → 選定角色 → 準備觀察員 → 再次演出 → 再次討論 → 分享經驗"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Shaftel 角色扮演九步法：1.暖身（引介衝突問題）；2.選定演員；3.布置場景；4.培訓觀察員；5.首次演出；6.討論與評鑑；7.再次演出（換人或嘗試新解法）；8.再次討論；9.一般化分享心得。",
    "examSource": "112年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第9章 p.78",
    "difficulty": "基礎"
  },
  {
    "id": "q-shaftel-4",
    "chapterId": 9,
    "scholarId": "shaftel",
    "topic": "第四步驟「準備觀察員（Prepare Observers）」之任務指標",
    "questionText": "在薛夫特爾角色扮演模式中，台下多數學生擔任「觀察員（Observers）」，教師在演出前指導觀察員的主要任務為何？",
    "options": [
      {
        "key": "A",
        "text": "給予具體的觀察任務清單，聚焦觀察演員的非口語肢體情緒、衝突爆發點及背後的價值假設，以便後續深度討論"
      },
      {
        "key": "B",
        "text": "充當起鬨觀眾嘲笑台上的同學"
      },
      {
        "key": "C",
        "text": "在台下低頭寫自己的數學功課"
      },
      {
        "key": "D",
        "text": "拿手機錄影上傳抖音娛樂大眾"
      }
    ],
    "correctAnswer": "A",
    "explanation": "觀察員培訓至關重要：唯有台下帶著批判性與同理心的具體觀察任務，全體學生才能在演出結束後進行有深度、有焦點的情境評鑑。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第9章 p.78",
    "difficulty": "中等"
  },
  {
    "id": "q-shaftel-5",
    "chapterId": 9,
    "scholarId": "shaftel",
    "topic": "第七步驟「再次演出（Re-enactment）」之教育功能",
    "questionText": "薛夫特爾模式特別強調在第一次演出與討論後，必須進行「再次演出（Re-enactment）」，其最重要的教學意涵在於：",
    "options": [
      {
        "key": "A",
        "text": "嘗試由不同學生扮演，或演繹出不同的衝突解決新方案（替代策略），體驗不同行為選擇帶來的多樣後果"
      },
      {
        "key": "B",
        "text": "嚴格背誦第一次演出的相同台詞"
      },
      {
        "key": "C",
        "text": "懲罰第一次演得不好的同學"
      },
      {
        "key": "D",
        "text": "消耗未上完的課堂鐘點"
      }
    ],
    "correctAnswer": "A",
    "explanation": "再次演出是認知與行為的實驗室，讓學生探究「如果當事人換一種說話語氣，結果會如何？」，藉此拓寬解決人際衝突的策略光譜。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第9章 p.78",
    "difficulty": "基礎"
  },
  {
    "id": "q-shaftel-6",
    "chapterId": 9,
    "scholarId": "shaftel",
    "topic": "角色扮演之核心價值：穿上他人的鞋子（Empathy）",
    "questionText": "薛夫特爾夫婦創立角色扮演模式的核心哲學，引用了古老諺語：「穿上他人的鞋子走一段路」。在教育現場，此模式最能有效培養學生的何種關鍵素養？",
    "options": [
      {
        "key": "A",
        "text": "設身處地的社會同理心（Empathy）與換位思考能力"
      },
      {
        "key": "B",
        "text": "參加好萊塢電影試鏡的演技技能"
      },
      {
        "key": "C",
        "text": "快速背誦台詞的記憶力"
      },
      {
        "key": "D",
        "text": "在全班面前辯論壓制他人的勝負欲"
      }
    ],
    "correctAnswer": "A",
    "explanation": "角色扮演讓學生跳脫自我中心，親身體會衝突另一方的委屈、恐懼與內心掙扎，是培養深層人際同理與品德關懷的最佳途徑。",
    "examSource": "109年新北市國小教甄試題",
    "handoutRef": "講義第9章 p.78",
    "difficulty": "基礎"
  },
  {
    "id": "q-shaftel-7",
    "chapterId": 9,
    "scholarId": "shaftel",
    "topic": "防制校園霸凌之角色扮演情境應用",
    "questionText": "某國中實施防制霸凌教學，教師設計「小文在班級群組被言語嘲弄排擠」的情境，讓學生分別扮演霸凌者、被霸凌者、起鬨旁觀者與沉默多數。該活動的主要教學目標在於：",
    "options": [
      {
        "key": "A",
        "text": "讓學生覺察各角色的心理機制，特別是旁觀者的道德責任，並演練如何安全有效地介入制止霸凌"
      },
      {
        "key": "B",
        "text": "找出是誰在現實中帶頭霸凌並當眾公審"
      },
      {
        "key": "C",
        "text": "宣洩學生的攻擊暴力傾向"
      },
      {
        "key": "D",
        "text": "傳授更隱蔽的網路霸凌手法"
      }
    ],
    "correctAnswer": "A",
    "explanation": "透過真實角色扮演與換位思考，能喚醒沉默旁觀者的同理心與道德勇氣，並具體演練合宜的正向干預技巧。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第9章 p.78",
    "difficulty": "基礎"
  },
  {
    "id": "q-shaftel-8",
    "chapterId": 9,
    "scholarId": "shaftel",
    "topic": "角色扮演中「事後釋疑（Debriefing / 角色脫離）」之重要性",
    "questionText": "在角色扮演結束後，薛夫特爾特別提醒教師必須進行「事後解說與角色脫離（Debriefing / De-roling）」，下列何者為其最重要的心理防護目的？",
    "options": [
      {
        "key": "A",
        "text": "讓扮演負面或反派角色的學生徹底卸下戲中角色身分，回到真實自我，避免將劇中衝突負面情緒延伸至課後現實同儕關係"
      },
      {
        "key": "B",
        "text": "將戲服收進倉庫"
      },
      {
        "key": "C",
        "text": "給每個人發放小點心"
      },
      {
        "key": "D",
        "text": "計算全班學生的心跳次數"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Debriefing 與脫離角色（De-roling）是重要的心理安全保護，明確區隔「角色行為」與「學生個人」，保護扮演反派學生的心理健康。",
    "examSource": "112年桃園市國小教甄試題",
    "handoutRef": "講義第9章 p.78",
    "difficulty": "中等"
  },
  {
    "id": "q-shaftel-9",
    "chapterId": 9,
    "scholarId": "shaftel",
    "topic": "第一步驟「暖身（Warm-up）」之問題引介技巧",
    "questionText": "在薛夫特爾九步驟的第一步「暖身團體（Warm-up the group）」中，教師引導問題情境的最佳方式為：",
    "options": [
      {
        "key": "A",
        "text": "講述一個具有懸疑衝突的故事，在矛盾即將爆發的高潮點「嘎然而止（Dilemma stop）」，邀請學生探討接下來該怎麼辦"
      },
      {
        "key": "B",
        "text": "直接告訴學生故事最後的完美結局"
      },
      {
        "key": "C",
        "text": "播放催眠音樂讓全班放鬆睡覺"
      },
      {
        "key": "D",
        "text": "發下二十頁劇本要求全班背誦"
      }
    ],
    "correctAnswer": "A",
    "explanation": "暖身階段使用「未完待續的衝突故事」，在矛盾關鍵點煞車，留下懸念，激發學生強烈的好奇心與代入欲，為演員登台搭建舞台。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第9章 p.78",
    "difficulty": "中等"
  },
  {
    "id": "q-shaftel-10",
    "chapterId": 9,
    "scholarId": "shaftel",
    "topic": "第九步驟「分享經驗與歸納概括（Share and Generalize）」",
    "questionText": "在角色扮演的最後一步「分享經驗與一般化歸納（Share and Generalize）」，教師引導學生跳出剛才的單一具體戲劇，主要要歸納出什麼？",
    "options": [
      {
        "key": "A",
        "text": "萃取出能廣泛應用於現實生活各類衝突情境的「普世人際互動原理與道德因應通則」"
      },
      {
        "key": "B",
        "text": "評選出班級最佳男女主角獎狀"
      },
      {
        "key": "C",
        "text": "統計誰的台詞錯誤最多"
      },
      {
        "key": "D",
        "text": "向校長呈報表演成績單"
      }
    ],
    "correctAnswer": "A",
    "explanation": "最後一步是經驗的昇華與概念化（Generalization），促成學習遷移，讓學生將演練心得轉化為往後人生面對真實道德抉擇時的行動指南。",
    "examSource": "110年高雄市國小教甄試題",
    "handoutRef": "講義第9章 p.78",
    "difficulty": "基礎"
  },
  {
    "id": "q-shaftel-11",
    "chapterId": 9,
    "scholarId": "shaftel",
    "topic": "選定角色者（Select Participants）之自願原則",
    "questionText": "薛夫特爾強調在第二步驟選定角色扮演者時，教師應遵循何種重要原則？",
    "options": [
      {
        "key": "A",
        "text": "尋求「自願者（Volunteers）」或對該角色已展現強烈同理感受的學生，切忌強迫生性羞怯抗拒的學童上台"
      },
      {
        "key": "B",
        "text": "強迫全班成績最後一名同學上台演小偷"
      },
      {
        "key": "C",
        "text": "按學號座號硬性抽籤規定"
      },
      {
        "key": "D",
        "text": "只准班長和副班長演出"
      }
    ],
    "correctAnswer": "A",
    "explanation": "角色扮演需要心理安全感，強迫非自願者或將負面角色貼標籤給特定弱勢學生會造成創傷。應以自願、共感者為優先。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第9章 p.78",
    "difficulty": "中等"
  },
  {
    "id": "q-shaftel-12",
    "chapterId": 9,
    "scholarId": "shaftel",
    "topic": "社會互動模式教學家族中之定位",
    "questionText": "喬伊斯與韋爾（Joyce & Weil）在《教學模式》一書中將當代教學模式分為四大模式家族。薛夫特爾的角色扮演教學模式屬於哪一個模式家族？",
    "options": [
      {
        "key": "A",
        "text": "社會互動模式家族（Social Interaction Family）"
      },
      {
        "key": "B",
        "text": "訊息處理模式家族"
      },
      {
        "key": "C",
        "text": "個人模式家族"
      },
      {
        "key": "D",
        "text": "行為系統模式家族"
      }
    ],
    "correctAnswer": "A",
    "explanation": "角色扮演、合作學習（STAD、拼圖法）、團體探究模式等皆隸屬於「社會互動教學模式家族」，核心目標在於發展人際關係與社會公民能力。",
    "examSource": "108年新北市公立國小教甄試題",
    "handoutRef": "講義第9章 p.78",
    "difficulty": "進階"
  },
  {
    "id": "q-kilpatrick-5",
    "chapterId": 10,
    "scholarId": "kilpatrick",
    "topic": "設計教學法四大步驟（Purposing, Planning, Executing, Judging）",
    "questionText": "威廉·克伯屈（W. H. Kilpatrick）創立的「設計教學法（Project Method）」，其四大實施歷程步驟依序為何？",
    "options": [
      {
        "key": "A",
        "text": "決定目的（Purposing）→ 擬訂計畫（Planning）→ 實行工作（Executing）→ 批評/評量（Judging）"
      },
      {
        "key": "B",
        "text": "擬訂計畫 → 決定目的 → 實行工作 → 批評評量"
      },
      {
        "key": "C",
        "text": "實行工作 → 擬訂計畫 → 決定目的 → 批評評量"
      },
      {
        "key": "D",
        "text": "批評評量 → 實行工作 → 擬訂計畫 → 決定目的"
      }
    ],
    "correctAnswer": "A",
    "explanation": "克伯屈設計教學四大步驟口訣「目、計、行、評」：決定目的（學生自定）、擬訂計畫（自主規劃）、實行工作（動手實踐）、批評評量（自我反省檢視）。",
    "examSource": "112年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第10章 p.80",
    "difficulty": "基礎"
  },
  {
    "id": "q-kilpatrick-6",
    "chapterId": 10,
    "scholarId": "kilpatrick",
    "topic": "克伯屈學習三伴隨論（主學習、副學習、附學習）",
    "questionText": "克伯屈提出劃時代的「同時學習三原則（三伴隨論）」，當學生在自然課進行「植物栽培專案」時，下列何者屬於「附學習 / 輔學習（Concomitant Learning）」？",
    "options": [
      {
        "key": "A",
        "text": "在長達三個月的照料中，自然孕育出對生命的敬畏愛護、負責任心態與持之以恆的毅力情操"
      },
      {
        "key": "B",
        "text": "習得光合作用的科學原理知識（主學習）"
      },
      {
        "key": "C",
        "text": "聯帶學會使用溫度計與水質酸鹼度測試筆的測量技巧（副學習）"
      },
      {
        "key": "D",
        "text": "背誦生物分類名詞"
      }
    ],
    "correctAnswer": "A",
    "explanation": "主學習：直接達成的教材主要知識；副學習：伴隨產生的相關技能與概念；附學習/輔學習：潛移默化中形成的態度、情感、價值觀與品德習慣，影響最為終身久遠。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第10章 p.80",
    "difficulty": "中等"
  },
  {
    "id": "q-kilpatrick-7",
    "chapterId": 10,
    "scholarId": "kilpatrick",
    "topic": "設計教學法之四大設計類型",
    "questionText": "克伯屈將設計教學法的活動歸納為四種類型。若學生立志「為校慶運動會親手製作一張大型宣傳立體海報或搭建一個木製鳥巢」，這屬於何種類型的設計？",
    "options": [
      {
        "key": "A",
        "text": "生產者設計（Producer's Project）"
      },
      {
        "key": "B",
        "text": "欣賞者設計（Consumer's Project）"
      },
      {
        "key": "C",
        "text": "問題設計（Problem Project）"
      },
      {
        "key": "D",
        "text": "訓練/特種練習設計（Specific Learning Project）"
      }
    ],
    "correctAnswer": "A",
    "explanation": "四大類型：1.生產者設計（製作具體實物）；2.欣賞/消費者設計（體驗審美藝術音樂）；3.問題設計（解答謎題或克服難關）；4.練習/訓練設計（精熟特定技巧熟練度）。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第10章 p.80",
    "difficulty": "中等"
  },
  {
    "id": "q-kilpatrick-8",
    "chapterId": 10,
    "scholarId": "kilpatrick",
    "topic": "設計教學法之定義：「有目的之全心活動」",
    "questionText": "克伯屈在 1918 年發表的經典論文中，將設計教學法定義為：「在社會情境中全心全意進行的有目的活動（A wholehearted purposeful activity proceeding in a social environment）」。其中「全心全意（Wholehearted）」最主要是強調：",
    "options": [
      {
        "key": "A",
        "text": "學習任務源於學生的內在自發目的與真實興趣，使學生能全神貫注主動投入"
      },
      {
        "key": "B",
        "text": "每天必須在學校待滿十二小時"
      },
      {
        "key": "C",
        "text": "只能由心臟健康的學生參加"
      },
      {
        "key": "D",
        "text": "教師必須全程拿碼表計時監控"
      }
    ],
    "correctAnswer": "A",
    "explanation": "全心全意（Wholehearted）體現了學生自主意志的覺醒：不是奉命行事的被動敷衍，而是對自我追求的目標充滿熱忱與主體投入。",
    "examSource": "109年新北市國小教甄試題",
    "handoutRef": "講義第10章 p.80",
    "difficulty": "基礎"
  },
  {
    "id": "q-kilpatrick-9",
    "chapterId": 10,
    "scholarId": "kilpatrick",
    "topic": "第一步驟「決定目的（Purposing）」之主體性原則",
    "questionText": "在設計教學法的第一步「決定目的（Purposing）」，克伯屈主張活動的目的應該主要由誰來決定？",
    "options": [
      {
        "key": "A",
        "text": "主要由學生自己（或在教師民主引導下師生共同商議）提出，以確保學習動機源於內在"
      },
      {
        "key": "B",
        "text": "必須由教育部長直接頒布命令"
      },
      {
        "key": "C",
        "text": "由校長和教務主任全權硬性指派"
      },
      {
        "key": "D",
        "text": "由教科書出版商在印刷廠決定"
      }
    ],
    "correctAnswer": "A",
    "explanation": "目的若由教師單方強加，便失去「設計」的主體靈魂。克伯屈堅持讓學生自己感受需要、自定目的，教師提供適當鷹架建議。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第10章 p.80",
    "difficulty": "基礎"
  },
  {
    "id": "q-kilpatrick-10",
    "chapterId": 10,
    "scholarId": "kilpatrick",
    "topic": "第四步驟「批評評量（Judging）」之自評自我反思",
    "questionText": "在設計教學的最後步驟「批評/評量（Judging）」中，克伯屈最反對由教師一人拿著紅筆打分數的傳統做法。他主張評量應優先由：",
    "options": [
      {
        "key": "A",
        "text": "學生自己與同儕對照原訂目的進行自我檢討、反思成功與失敗原因，培養自我鑑別力"
      },
      {
        "key": "B",
        "text": "隔壁班老師抽籤評審"
      },
      {
        "key": "C",
        "text": "完全不進行任何檢視評鑑"
      },
      {
        "key": "D",
        "text": "純粹依照作品賣出的金額來評判"
      }
    ],
    "correctAnswer": "A",
    "explanation": "評量是學習歷程的深化反思，學生親自對照原先目的檢核成品良窳，才能學會對自己的行動成果負起全責。",
    "examSource": "112年高雄市國民小學教師甄選教育專業試題",
    "handoutRef": "講義第10章 p.80",
    "difficulty": "中等"
  },
  {
    "id": "q-kilpatrick-11",
    "chapterId": 10,
    "scholarId": "kilpatrick",
    "topic": "克伯屈設計教學法作為杜威實用主義哲學之實踐樞紐",
    "questionText": "克伯屈是哲學大師杜威（John Dewey）最著名的親傳弟子。設計教學法（Project Method）在教育史上最大的歷史地位為：",
    "options": [
      {
        "key": "A",
        "text": "成功將杜威深奧抽象的「做中學」與「經驗重組改造」哲學，具體落實為課堂上可操作的教學實踐架構"
      },
      {
        "key": "B",
        "text": "徹底推翻了杜威的所有實用主義學說"
      },
      {
        "key": "C",
        "text": "發明了世界上第一台電腦輔助教學設備"
      },
      {
        "key": "D",
        "text": "創立了操作制約行為學派"
      }
    ],
    "correctAnswer": "A",
    "explanation": "克伯屈將導師杜威的「做中學」轉化為生動的 Project Method，引領了全美進步主義教育的實踐浪潮，影響遍及全球。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第10章 p.80",
    "difficulty": "基礎"
  },
  {
    "id": "q-kilpatrick-12",
    "chapterId": 10,
    "scholarId": "kilpatrick",
    "topic": "設計教學法與當代專案導向學習（PBL）之淵源",
    "questionText": "當代風靡全球的「專案導向學習（Project-Based Learning, PBL）」與 STEM 實作探究，其歷史根源最主要可直接溯源至哪位教育家百年前的開創？",
    "options": [
      {
        "key": "A",
        "text": "克伯屈（William H. Kilpatrick）"
      },
      {
        "key": "B",
        "text": "桑代克（E. L. Thorndike）"
      },
      {
        "key": "C",
        "text": "巴夫洛夫（I. Pavlov）"
      },
      {
        "key": "D",
        "text": "赫爾巴特（J. F. Herbart）"
      }
    ],
    "correctAnswer": "A",
    "explanation": "克伯屈的 Project Method（1918）正是當代 PBL 的始祖，兩者皆強調真實情境脈絡、學生主體有目的探究、手腦並用產出具體成果。",
    "examSource": "110年新北市國小教甄試題",
    "handoutRef": "講義第10章 p.80",
    "difficulty": "基礎"
  },
  {
    "id": "q-slavin-4",
    "chapterId": 11,
    "scholarId": "slavin",
    "topic": "學生小組成就區分法（STAD）之五大教學實施步驟順序",
    "questionText": "羅伯特·史拉芬（Robert E. Slavin）發展的「學生小組成就區分法（STAD）」，其完整的五個教學步驟順序依序為何？",
    "options": [
      {
        "key": "A",
        "text": "全班授課（Class Presentation）→ 分組學習（Teams）→ 個人測驗（Quizzes）→ 計算個人進步分數（Improvement Scores）→ 小組表揚（Team Recognition）"
      },
      {
        "key": "B",
        "text": "個人測驗 → 全班授課 → 分組學習 → 小組表揚 → 計算個人進步分數"
      },
      {
        "key": "C",
        "text": "分組學習 → 全班授課 → 個人測驗 → 小組表揚 → 計算個人進步分數"
      },
      {
        "key": "D",
        "text": "小組表揚 → 個人測驗 → 全班授課 → 分組學習 → 計算個人進步分數"
      }
    ],
    "correctAnswer": "A",
    "explanation": "STAD 五步驟口訣「授、學、測、進、獎」：全班授課（講解概念）→ 異質小組合作自學互助 → 獨立個人紙筆測驗（不得互助）→ 計算個人進步分數 → 小組總分表揚。",
    "examSource": "112年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第11章 p.86",
    "difficulty": "基礎"
  },
  {
    "id": "q-slavin-5",
    "chapterId": 11,
    "scholarId": "slavin",
    "topic": "個人進步分數（Individual Improvement Points）之制度核心",
    "questionText": "在 STAD 合作學習模式中，最精妙且具革命性的創新是「個人進步分數（Improvement Points）」，其評分計算哲學為：",
    "options": [
      {
        "key": "A",
        "text": "將每位學生本次測驗成績與其個人的「過去基準分（Base Score）」相比較，只要超越自己過去即得滿分進步分，讓低成就學生也能為小組立大功"
      },
      {
        "key": "B",
        "text": "直接依全班絕對原始考卷分數計算"
      },
      {
        "key": "C",
        "text": "只計算全組成績最高的一位同學的分數"
      },
      {
        "key": "D",
        "text": "全組每個人一律平分相同的分數"
      }
    ],
    "correctAnswer": "A",
    "explanation": "個人進步分數破除傳統菁英壟斷榮譽的弊病：每個人都是與過去的自己比，低成就學生只要進步 5 分就能為小組貢獻最大進步分（如 30 分），激發全員拼搏。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第11章 p.86",
    "difficulty": "基礎"
  },
  {
    "id": "q-slavin-6",
    "chapterId": 11,
    "scholarId": "slavin",
    "topic": "STAD 異質性分組（Heterogeneous Grouping）原則",
    "questionText": "在實施 STAD 合作學習時，史拉芬強調每組 4-5 人的組成必須採取「異質性分組（Heterogeneous Grouping）」。組內成員應依據哪些向度進行均衡搭配？",
    "options": [
      {
        "key": "A",
        "text": "學業成就（高、中、低成就各 1-2 名）、性別（男女混合）、族群與人際特質均勻配置"
      },
      {
        "key": "B",
        "text": "全班排名前 4 名組成菁英組，最後 4 名組成放牛組"
      },
      {
        "key": "C",
        "text": "完全按照學生好朋友自由勾選分組"
      },
      {
        "key": "D",
        "text": "依照學生的家庭所得高低分組"
      }
    ],
    "correctAnswer": "A",
    "explanation": "異質分組讓每組如同全班縮影，能促進能力較強者透過教學相長鞏固概念，中低成就者獲得同儕即時鷹架，並打破性別與族群隔閡。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第11章 p.86",
    "difficulty": "基礎"
  },
  {
    "id": "q-slavin-7",
    "chapterId": 11,
    "scholarId": "slavin",
    "topic": "合作學習核心成分：小組目標與個人績效責任（Individual Accountability）",
    "questionText": "史拉芬綜合大量實證研究指出，合作學習若要顯著提升學生的學業成就，必須同時具備哪兩大關鍵支柱？",
    "options": [
      {
        "key": "A",
        "text": "「小組目標/獎勵（Group goals / Team rewards）」與「個人績效責任（Individual accountability）」"
      },
      {
        "key": "B",
        "text": "「嚴厲體罰」與「取消下課」"
      },
      {
        "key": "C",
        "text": "「大量的校外教學」與「免費文具」"
      },
      {
        "key": "D",
        "text": "「互相抄襲答案」與「隱匿個人分數」"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slavin 實證研究金律：合作學習必須有小組獎勵激發同舟共濟，同時必須透過個人獨立受測確保個人責任，兩者缺一不可，否則成績不會顯著提升。",
    "examSource": "109年高級中等以下學校教師資格考試",
    "handoutRef": "講義第11章 p.87",
    "difficulty": "中等"
  },
  {
    "id": "q-slavin-8",
    "chapterId": 11,
    "scholarId": "slavin",
    "topic": "避免「搭便車（Free-Rider Effect）」之機制設計",
    "questionText": "在傳統小組報告中，常出現少數同學做全部工作、其餘組員掛名混分的「搭便車效應（Free-Rider Effect）」。在 STAD 中，史拉芬如何透過制度設計徹底杜絕此弊端？",
    "options": [
      {
        "key": "A",
        "text": "小組學習結束後，每位組員必須「獨立單獨參加個人隨堂測驗」，不得互相討論或代答，每人分數皆影響小組進步總分"
      },
      {
        "key": "B",
        "text": "指派一名風紀股長拿棍子監督"
      },
      {
        "key": "C",
        "text": "讓組長有權力開除組員"
      },
      {
        "key": "D",
        "text": "取消所有評量測驗"
      }
    ],
    "correctAnswer": "A",
    "explanation": "獨立測驗落實了個人責任（Individual Accountability），每個人都必須自己學會，同儕才會全力教導組內落後同學，無人能搭便車。",
    "examSource": "108年新北市公立國小教甄試題",
    "handoutRef": "講義第11章 p.86",
    "difficulty": "基礎"
  },
  {
    "id": "q-slavin-9",
    "chapterId": 11,
    "scholarId": "slavin",
    "topic": "拼圖法第二代（Jigsaw II）相較第一代之改良",
    "questionText": "史拉芬在艾朗森（Aronson）拼圖法第一代的基礎上改版提出「拼圖法第二代（Jigsaw II）」，Jigsaw II 最重大的修訂與改良為何？",
    "options": [
      {
        "key": "A",
        "text": "所有學生研讀全篇教材，但各分派特定主題深入專精；並引進 STAD 的「個人進步分數」與「小組獎勵」機制"
      },
      {
        "key": "B",
        "text": "將拼圖改為紙板拼圖玩具"
      },
      {
        "key": "C",
        "text": "取消專家小組研討"
      },
      {
        "key": "D",
        "text": "不進行任何個人測驗"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Jigsaw II 改良處：全體閱讀整篇文章保有整體脈絡，各執一專題精研；且納入個人進步分數與小組表揚，兼具同儕互惠與合作競爭激勵。",
    "examSource": "112年高雄市教育專業科目試題",
    "handoutRef": "講義第11章 p.88",
    "difficulty": "中等"
  },
  {
    "id": "q-slavin-10",
    "chapterId": 11,
    "scholarId": "slavin",
    "topic": "小組遊戲競賽法（TGT, Teams-Games-Tournament）",
    "questionText": "史拉芬發展的另一種合作學習法「團隊遊戲競賽法（TGT）」，其在競賽階段設計了「同質競賽桌（Tournament Tables）」，其競賽公平性原則為：",
    "options": [
      {
        "key": "A",
        "text": "各小組中「實力程度相當」的代表在同一張競賽桌比拚答題，使每個人面對均等獲勝機會，為所屬原小組爭取積分"
      },
      {
        "key": "B",
        "text": "讓全班第一名與全班最後一名一對一單挑"
      },
      {
        "key": "C",
        "text": "隨機抽籤不論實力"
      },
      {
        "key": "D",
        "text": "由教師直接指定優勝小組"
      }
    ],
    "correctAnswer": "A",
    "explanation": "TGT 競賽桌採取「同質競爭」：各組第一名同桌、各組最後一名同桌，人人皆有 1/3 獲勝機會為原小組貢獻分數，兼顧競爭趣味與公平激勵。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第11章 p.87",
    "difficulty": "中等"
  },
  {
    "id": "q-slavin-11",
    "chapterId": 11,
    "scholarId": "slavin",
    "topic": "小組輔助個別化學習（TAI, Team Accelerated Instruction）",
    "questionText": "史拉芬將合作學習與個別化自學進度相結合，發展出專門適用於國小數學科教學的教學法是：",
    "options": [
      {
        "key": "A",
        "text": "小組輔助個別化學習法（TAI, Team Accelerated Instruction）"
      },
      {
        "key": "B",
        "text": "單元教學法"
      },
      {
        "key": "C",
        "text": "設計教學法"
      },
      {
        "key": "D",
        "text": "暗示感應法"
      }
    ],
    "correctAnswer": "A",
    "explanation": "TAI 結合了個別化自學教材與小組互助：組員按各自能力自定步調研讀數學單元，組內同儕互相交換批改作業並提供個別輔導。",
    "examSource": "110年新北市國小教甄試題",
    "handoutRef": "講義第11章 p.89",
    "difficulty": "進階"
  },
  {
    "id": "q-slavin-12",
    "chapterId": 11,
    "scholarId": "slavin",
    "topic": "合作學習對增進跨族群同儕關係之實證成效",
    "questionText": "大量實證研究證實，在多元文化班級或融合教育教室中實施 STAD 合作學習，除了提升課業成績外，還能產生何種最顯著的社會心理效益？",
    "options": [
      {
        "key": "A",
        "text": "顯著打破不同族群、社經背景及身心障礙學生的刻板偏見，增進跨群體的友誼接納與自我價值感"
      },
      {
        "key": "B",
        "text": "加深族群之間的對立仇視"
      },
      {
        "key": "C",
        "text": "使身心障礙學生遭到更嚴重的排擠"
      },
      {
        "key": "D",
        "text": "完全沒有任何社會效益"
      }
    ],
    "correctAnswer": "A",
    "explanation": "同舟共濟的合作情境使學生在共同目標下緊密互動，真正看見彼此的人性光輝，是消弭族群隔閡與促進融合教育的最強實證途徑。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第11章 p.87",
    "difficulty": "基礎"
  },
  {
    "id": "q-aronson-4",
    "chapterId": 11,
    "scholarId": "aronson",
    "topic": "拼圖法第一代（Jigsaw I）之創始歷史背景",
    "questionText": "社會心理學家艾略特·艾朗森（Elliot Aronson）於 1971 年在德州奧斯汀初次研發「拼圖法教室（Jigsaw Classroom）」，其當時最重要的社會歷史改革使命為何？",
    "options": [
      {
        "key": "A",
        "text": "化解當時美國種族廢除隔離後，公立學校黑人、白人與西裔學童之間嚴重的種族衝突、敵意與學業差距"
      },
      {
        "key": "B",
        "text": "為了提高學生的速讀記憶能力"
      },
      {
        "key": "C",
        "text": "為了節省學校購買教科書的經費"
      },
      {
        "key": "D",
        "text": "為了在全市數學競賽中拿冠軍"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Jigsaw Classroom 的誕生是為了解決種族衝突危機：在高度競爭的傳統教室弱勢黑人學童被嘲笑排擠，拼圖法建立互賴結構，成功化解敵意並建立了跨種族友誼。",
    "examSource": "112年教育部教師資格考試（教育理念與實踐）",
    "handoutRef": "講義第11章 p.88",
    "difficulty": "基礎"
  },
  {
    "id": "q-aronson-5",
    "chapterId": 11,
    "scholarId": "aronson",
    "topic": "「原生小組（Home Group）」與「專家小組（Expert Group）」之運作",
    "questionText": "在艾朗森拼圖法第一代的教學流程中，學生首先在原組領取專屬段落教材，接著前往聚集相同專題的（甲）研討至精熟，最後返回（乙）負責教導其他組員。甲與乙依序為：",
    "options": [
      {
        "key": "A",
        "text": "甲：專家小組（Expert Group）；乙：原生小組（Home Group）"
      },
      {
        "key": "B",
        "text": "甲：原生小組；乙：專家小組"
      },
      {
        "key": "C",
        "text": "甲：同質小組；乙：競賽桌"
      },
      {
        "key": "D",
        "text": "甲：大會堂；乙：圖書館"
      }
    ],
    "correctAnswer": "A",
    "explanation": "拼圖法雙軌小組：各組代表前往「專家小組（Expert Group）」深入切磋研習確定學會，隨後返回「原生小組（Home Group）」扮演教師傳授該塊拼圖知識。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第11章 p.88",
    "difficulty": "基礎"
  },
  {
    "id": "q-aronson-6",
    "chapterId": 11,
    "scholarId": "aronson",
    "topic": "拼圖法中之「資源互賴（Resource Interdependence）」",
    "questionText": "在拼圖法中，每位組員手中僅掌握完整教材的其中一部分（例如一篇五段傳記中的其中一段）。若想了解完整文章內容，大家必須專注傾聽每一位組員的解說。這種設計在合作學習中稱為：",
    "options": [
      {
        "key": "A",
        "text": "資源互賴（Resource Interdependence）"
      },
      {
        "key": "B",
        "text": "目標獨立"
      },
      {
        "key": "C",
        "text": "角色衝突"
      },
      {
        "key": "D",
        "text": "古典制約"
      }
    ],
    "correctAnswer": "A",
    "explanation": "資源互賴（手中拼圖不可或缺）創造了真正的積極互賴：任何一個人不發言或不理解，全組就無法拼出知識全貌，使每位學生（包括慢速生）都變得不可替代。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第11章 p.88",
    "difficulty": "中等"
  },
  {
    "id": "q-aronson-7",
    "chapterId": 11,
    "scholarId": "aronson",
    "topic": "拼圖法第一代（Jigsaw I）評量計分方式特點",
    "questionText": "在艾朗森原創的拼圖法第一代（Jigsaw I）中，最後階段的評量與成績計算方式為何？",
    "options": [
      {
        "key": "A",
        "text": "每位學生「個別獨立參加全範圍測驗，獲得個人的個別成績」（無小組進步分數或小組共同總分獎勵）"
      },
      {
        "key": "B",
        "text": "全組拿一模一樣的平均分數"
      },
      {
        "key": "C",
        "text": "只給專家小組組長打分數"
      },
      {
        "key": "D",
        "text": "由全班投票選出最受歡迎組員給予滿分"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Jigsaw I 的原始設計中，測驗是個人獨立作答獲得個人分數，並沒有小組總分獎勵（這也是後來 Slavin 在 Jigsaw II 中加入 STAD 小組進步獎勵的原因）。",
    "examSource": "109年新北市國小教甄試題",
    "handoutRef": "講義第11章 p.88",
    "difficulty": "進階"
  },
  {
    "id": "q-aronson-8",
    "chapterId": 11,
    "scholarId": "aronson",
    "topic": "拼圖法對增進傾聽技巧與同儕耐性之成效",
    "questionText": "艾朗森在觀察拼圖法教室時發現，當一位平常內向或語文表達較慢的學生在原生小組結結巴巴解說自己的拼圖段落時，組內優秀同學從一開始的不耐煩，轉變成主動溫和提問引導。這種轉變的原因在於：",
    "options": [
      {
        "key": "A",
        "text": "優秀同學體認到：如果這名同學沒講清楚，自己在稍後的個人測驗中該部分就會拿零分，因此必須學會耐心傾聽與支持引導"
      },
      {
        "key": "B",
        "text": "老師在旁邊拿藤條威脅"
      },
      {
        "key": "C",
        "text": "優秀同學突然想要放棄考試"
      },
      {
        "key": "D",
        "text": "內向學生給了大家很多零食"
      }
    ],
    "correctAnswer": "A",
    "explanation": "拼圖法的結構性互賴迫使學生發現「唯有善待同儕、耐心引導對方說清楚，自己才能成功」，從根本上重塑了課堂的人際互動文化。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第11章 p.88",
    "difficulty": "中等"
  },
  {
    "id": "q-aronson-9",
    "chapterId": 11,
    "scholarId": "aronson",
    "topic": "專家小組研討中之「同儕演練與核對（Peer Checking）」",
    "questionText": "在拼圖法專家小組會議中，教師應特別指導各專題代表在返回原生小組前，必須完成哪一項核心確認工作？",
    "options": [
      {
        "key": "A",
        "text": "全體專家代表互相口頭試講演練、澄清盲點，確保每一位專家（無論原先程度如何）都已真正精熟並能清晰表達該主題"
      },
      {
        "key": "B",
        "text": "各自在座位上發呆等待時間結束"
      },
      {
        "key": "C",
        "text": "互相抄寫一份大綱就散會"
      },
      {
        "key": "D",
        "text": "由程度最好的一位全權包辦"
      }
    ],
    "correctAnswer": "A",
    "explanation": "專家小組必須確認每個人都「準備好當老師了」，透過互相試講、修正表達，為能力較弱的學生注入信心與清晰的教學策略。",
    "examSource": "112年桃園市國小教甄試題",
    "handoutRef": "講義第11章 p.88",
    "difficulty": "中等"
  },
  {
    "id": "q-aronson-10",
    "chapterId": 11,
    "scholarId": "aronson",
    "topic": "拼圖法在社會領域長文與歷史文獻閱讀教學之應用",
    "questionText": "國中歷史課探討「台灣開港通商後的四大條約與經濟轉變」，教材篇幅極長。林老師若想在 45 分鐘內讓全班深度掌握，最適合採取何種合作學習策略？",
    "options": [
      {
        "key": "A",
        "text": "拼圖法（Jigsaw Method）：拆分四個專題篇章，透過專家組精研後回原組互惠教學"
      },
      {
        "key": "B",
        "text": "全班齊聲朗讀四遍"
      },
      {
        "key": "C",
        "text": "教師以極快語速一口氣講述完畢"
      },
      {
        "key": "D",
        "text": "直接要求學生回家自行看解答"
      }
    ],
    "correctAnswer": "A",
    "explanation": "拼圖法最適合處理篇幅龐大、概念可切分為並列或子題的長篇閱讀材料，兼具學習效率、同儕互惠與深度理解。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第11章 p.88",
    "difficulty": "基礎"
  },
  {
    "id": "q-aronson-11",
    "chapterId": 11,
    "scholarId": "aronson",
    "topic": "消滅課堂競爭與降低焦慮感",
    "questionText": "艾朗森在其心理學著作中指出，傳統課堂充滿了「贏家與輸家的零和競爭」，容易導致低成就者產生慢性焦慮與破壞性行為。拼圖法取代零和競爭的機制為：",
    "options": [
      {
        "key": "A",
        "text": "建立「同儕合作互惠結構」，使學生的成就建立在彼此支持與互相成就之上"
      },
      {
        "key": "B",
        "text": "完全取消考試使所有學生都拿 A+"
      },
      {
        "key": "C",
        "text": "把所有課堂作業減半"
      },
      {
        "key": "D",
        "text": "嚴格禁止學生互相對話"
      }
    ],
    "correctAnswer": "A",
    "explanation": "拼圖法將「競爭型結構（我要你失敗我才能顯得優秀）」轉化為「合作型結構（我需要你成功，我們才能一起卓越）」，大幅減輕焦慮。",
    "examSource": "110年高雄市國小教甄試題",
    "handoutRef": "講義第11章 p.88",
    "difficulty": "基礎"
  },
  {
    "id": "q-aronson-12",
    "chapterId": 11,
    "scholarId": "aronson",
    "topic": "拼圖法實施中弱勢/低成就學生的自信心重建",
    "questionText": "許多特教融合與輔導研究指出，在常態班級中實施拼圖法，往往能為長期學業落後的弱勢學童帶來最顯著的心理療癒，其主要原因在於：",
    "options": [
      {
        "key": "A",
        "text": "他們在專家小組支持下精熟特定段落，在原生小組中體驗到「成為他人知識來源、被同儕認真傾聽與需要」的尊嚴與勝任感"
      },
      {
        "key": "B",
        "text": "他們可以不用參與任何學習"
      },
      {
        "key": "C",
        "text": "同儕會替他們把所有考卷寫完"
      },
      {
        "key": "D",
        "text": "老師會給他們免死金牌"
      }
    ],
    "correctAnswer": "A",
    "explanation": "在傳統課堂總是被動落後的孩子，在拼圖法中成為掌握獨特關鍵拼圖的專家，享受同儕專注筆記與感謝的目光，自我價值感大幅躍升。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第11章 p.88",
    "difficulty": "基礎"
  },
  {
    "id": "q-sato-4",
    "chapterId": 11,
    "scholarId": "sato_manabu",
    "topic": "學習共同體（Learning Community）之三大哲學支柱",
    "questionText": "日本東京大學名譽教授佐藤學（Sato Manabu）倡導「學習共同體（Learning Community）」學校改革，其三大核心哲學哲理為何？",
    "options": [
      {
        "key": "A",
        "text": "公共性（Public philosophy）、民主性（Democracy）、卓越性（Excellence）"
      },
      {
        "key": "B",
        "text": "菁英性、競爭性、速度性"
      },
      {
        "key": "C",
        "text": "權威性、服從性、紀律性"
      },
      {
        "key": "D",
        "text": "娛樂性、休閒性、隨意性"
      }
    ],
    "correctAnswer": "A",
    "explanation": "佐藤學三大哲理：公共性（學校是向公眾開放的公共空間，教師共同觀課議課）；民主性（師生人人平等，擁有同等尊嚴主體）；卓越性（不放棄任何人，追求最高境界的卓越課題）。",
    "examSource": "112年教育部教師資格考試（教育理念與實踐）",
    "handoutRef": "講義第11章 p.90",
    "difficulty": "基礎"
  },
  {
    "id": "q-sato-5",
    "chapterId": 11,
    "scholarId": "sato_manabu",
    "topic": "伸展跳躍課題（Jump Challenge）之設計理念",
    "questionText": "在學習共同體的課堂中，佐藤學特別強調在完成了基礎課題後，教師必須設計高難度、超越當前程度的「伸展跳躍課題（Jump）」。這項課題設計的核心目的為何？",
    "options": [
      {
        "key": "A",
        "text": "激發高階認知挑戰，讓學生體認單打獨鬥無法解決，必須自發展開同儕深度協同探究，實現思維的跨越"
      },
      {
        "key": "B",
        "text": "故意挫折全班學生讓大家考試不及格"
      },
      {
        "key": "C",
        "text": "挑選出少數資優生，淘汰其餘平庸學生"
      },
      {
        "key": "D",
        "text": "作為課堂作業的懲罰加碼"
      }
    ],
    "correctAnswer": "A",
    "explanation": "佐藤學指出「低難度練習只會帶來無聊」，伸展跳躍課題（Jump）引導學生挑戰看似不可能的深度難題，迫使同儕在相互傾聽協同中觸碰真理的高峰。",
    "examSource": "111年臺北市中等學校教甄教育專業科目",
    "handoutRef": "講義第11章 p.90",
    "difficulty": "中等"
  },
  {
    "id": "q-sato-6",
    "chapterId": 11,
    "scholarId": "sato_manabu",
    "topic": "「潤澤的教室（Moist Classroom）」與心理安全氛圍",
    "questionText": "佐藤學倡導將教室打造為「潤澤的教室（Moist Classroom）」，其描繪的課堂文化樣態為何？",
    "options": [
      {
        "key": "A",
        "text": "安心、沉靜且包容的氛圍，允許學生自然坦白說出「我這裡聽不懂」、「請幫幫我」，人人彼此真誠相互傾聽"
      },
      {
        "key": "B",
        "text": "每天用拖把拖地保持地板潮濕"
      },
      {
        "key": "C",
        "text": "教室開水冷空調噴霧"
      },
      {
        "key": "D",
        "text": "嚴禁學生在課堂發出任何微小聲音"
      }
    ],
    "correctAnswer": "A",
    "explanation": "「潤澤的教室」相對於乾涸冷酷的競爭教室，充滿了人性的溫暖與信任，學生不需武裝掩飾不懂，在柔和的傾聽關係中安心探究。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第11章 p.90",
    "difficulty": "基礎"
  },
  {
    "id": "q-sato-7",
    "chapterId": 11,
    "scholarId": "sato_manabu",
    "topic": "教師三大專業角色轉變：傾聽、串聯與回歸",
    "questionText": "在學習共同體課堂中，教師不再是發號施令的主講者，佐藤學將教師的核心專業行為歸納為哪三大工作？",
    "options": [
      {
        "key": "A",
        "text": "傾聽（Listening）、串聯（Connecting）、回歸（Returning）"
      },
      {
        "key": "B",
        "text": "訓話、打分、懲戒"
      },
      {
        "key": "C",
        "text": "講課、抄黑板、發考卷"
      },
      {
        "key": "D",
        "text": "排桌椅、計時、算分數"
      }
    ],
    "correctAnswer": "A",
    "explanation": "佐藤學教師三部曲：傾聽（細緻聆聽學生的微小喃喃自語）、串聯（將學生的發言與教材或同儕的想法串聯起來）、回歸（將探究議題回歸給全班學生深入思考）。",
    "examSource": "109年新北市國小教甄試題",
    "handoutRef": "講義第11章 p.90",
    "difficulty": "中等"
  },
  {
    "id": "q-sato-8",
    "chapterId": 11,
    "scholarId": "sato_manabu",
    "topic": "學習共同體教室之桌椅排列型態特徵",
    "questionText": "在學習共同體的課堂空間配置上，佐藤學強烈主張打破傳統「秧田式（排排坐朝向講台）」排列，轉而採取何種桌椅排列方式？",
    "options": [
      {
        "key": "A",
        "text": "「U 字型排列」，全班圍繞講台成馬蹄形，分組時 4 人一組男女混坐，且不指派小組長"
      },
      {
        "key": "B",
        "text": "每個人背對講台面向牆壁"
      },
      {
        "key": "C",
        "text": "完全撤除桌椅全部躺在地上"
      },
      {
        "key": "D",
        "text": "按成績由前至後排成直線單行"
      }
    ],
    "correctAnswer": "A",
    "explanation": "U 字型讓全班能看見彼此眼神與表情，協同時男女混坐（避免同質抱團），不設組長（避免少數人強權主導），實現真正平等的對話。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第11章 p.90",
    "difficulty": "基礎"
  },
  {
    "id": "q-sato-9",
    "chapterId": 11,
    "scholarId": "sato_manabu",
    "topic": "「靜態協同探究」vs「熱鬧表面活動」之辨析",
    "questionText": "佐藤學多次批評亞洲許多學校對合作學習的誤解。他指出真正的學習共同體是「靜態協同探究」，下列何者最符合其描述的協同學習理想樣態？",
    "options": [
      {
        "key": "A",
        "text": "小組成員身體靠近、聲音壓低、眼神專注凝視文本與彼此，安靜沉思地相互聆聽與深度對話"
      },
      {
        "key": "B",
        "text": "全班大聲搶答、爭相舉手、高聲歡呼競賽積分的吵鬧場面"
      },
      {
        "key": "C",
        "text": "各組組長大聲宣讀標準答案，其他人低頭抄寫"
      },
      {
        "key": "D",
        "text": "放任學生在教室奔跑打鬧"
      }
    ],
    "correctAnswer": "A",
    "explanation": "佐藤學指出「吵鬧的活動不等於學習」，真正的思維往往發生在深沉的寂靜與屏氣凝神的聆聽中，安靜的低語更能引發深層的知性碰撞。",
    "examSource": "112年高雄市國民小學教師甄選教育專業試題",
    "handoutRef": "講義第11章 p.90",
    "difficulty": "中等"
  },
  {
    "id": "q-sato-10",
    "chapterId": 11,
    "scholarId": "sato_manabu",
    "topic": "打開教室大門：公開授課與議課（Lesson Study）",
    "questionText": "佐藤學推動學習共同體改革的第一步，就是要求全校教師「打開教室大門，實施同儕公開觀課與議課」。在議課時，觀課教師的焦點應當放在：",
    "options": [
      {
        "key": "A",
        "text": "聚焦觀察「學生的具體學習在哪個瞬間發生？在何處遭遇卡關？」，而非評斷授課教師的個人台風或挑毛病"
      },
      {
        "key": "B",
        "text": "挑剔授課教師的板書字跡是否夠工整"
      },
      {
        "key": "C",
        "text": "計算教師在黑板前走動的步數"
      },
      {
        "key": "D",
        "text": "當場給授課教師打分數排名"
      }
    ],
    "correctAnswer": "A",
    "explanation": "佐藤學議課哲學是「以學生的學習為中心」：觀察學生的困惑、眼神與學習契機，共同研討如何提供更好的學習鷹架，建立同僚專業社群。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第11章 p.91",
    "difficulty": "基礎"
  },
  {
    "id": "q-sato-11",
    "chapterId": 11,
    "scholarId": "sato_manabu",
    "topic": "「相互傾聽（Listening）」重於發言之教育哲學",
    "questionText": "佐藤學名言：「課堂中最重要的事情不是發言，而是相互傾聽。」他認為一個不懂得傾聽的課堂，就算發言再踴躍也無法形成深層思考。其背後哲學緣由為：",
    "options": [
      {
        "key": "A",
        "text": "傾聽是對他人的尊重與接納，唯有在細緻聆聽他人想法時，才能反觀自身的思維盲點，促成真正的對話與認知重組"
      },
      {
        "key": "B",
        "text": "教師不想聽學生講話"
      },
      {
        "key": "C",
        "text": "學生發言會浪費太多粉筆"
      },
      {
        "key": "D",
        "text": "為了讓課堂維持絕對零分貝"
      }
    ],
    "correctAnswer": "A",
    "explanation": "傾聽是建立學習關係的起點。能謙遜傾聽不同觀點的孩子，才能走出獨斷，在同儕對話中孕育寬廣的知性世界。",
    "examSource": "110年新北市國小教甄試題",
    "handoutRef": "講義第11章 p.90",
    "difficulty": "基礎"
  },
  {
    "id": "q-sato-12",
    "chapterId": 11,
    "scholarId": "sato_manabu",
    "topic": "學習共同體對臺灣教育界公開觀課實踐之影響",
    "questionText": "臺灣 108 課綱法規明定「校長及教師每學年應至少公開授課一次並進行專業回饋」，這項歷史性的制度變革，最主要是受到佐藤學何項教育倡導的深刻啟發？",
    "options": [
      {
        "key": "A",
        "text": "建立學校專業學習社群，打開教室實施「備課、觀課、議課」常態化，落實教學相長與學習共同體"
      },
      {
        "key": "B",
        "text": "為了對公立學校教師進行年終考績考評"
      },
      {
        "key": "C",
        "text": "引進電視台實境秀節目入校拍攝"
      },
      {
        "key": "D",
        "text": "增加學校行政公文量"
      }
    ],
    "correctAnswer": "A",
    "explanation": "佐藤學掀起亞洲課堂革命，推動公開授課制度化，打破過去閉門造車的教學孤島，促成臺灣公開觀課法制化與專業學習社群發展。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第11章 p.91",
    "difficulty": "中等"
  },
  {
    "id": "q-keller-4",
    "chapterId": 12,
    "scholarId": "keller",
    "topic": "個人化系統教學法（PSI / Keller Plan）之創立背景",
    "questionText": "行為分析心理學家弗萊德·凱勒（Fred S. Keller）於 1968 年發表劃時代演講《老師，再見！（Good-Bye, Teacher!）》，進而創立了：",
    "options": [
      {
        "key": "A",
        "text": "個人化系統教學法（PSI, Personalized System of Instruction / 凱勒計畫）"
      },
      {
        "key": "B",
        "text": "團體探究模式"
      },
      {
        "key": "C",
        "text": "做中學實用主義"
      },
      {
        "key": "D",
        "text": "道德兩難討論法"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Fred Keller 開創 PSI（Personalized System of Instruction），主張徹底打破傳統以教師為中心的大班齊步教學，讓學生按個人步調自學精熟教材。",
    "examSource": "112年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第12章 p.96",
    "difficulty": "基礎"
  },
  {
    "id": "q-keller-5",
    "chapterId": 12,
    "scholarId": "keller",
    "topic": "PSI 五大核心特徵之首要：自我步調（Self-Pacing）",
    "questionText": "在凱勒計畫（PSI）的五大核心特徵中，學生能依據個人的學習速度、時間安排與理解快慢決定進度，不受全班進度拘束。這項特徵稱為：",
    "options": [
      {
        "key": "A",
        "text": "自定步調學習（Self-Paced Learning）"
      },
      {
        "key": "B",
        "text": "強制齊步進度"
      },
      {
        "key": "C",
        "text": "常模分配步調"
      },
      {
        "key": "D",
        "text": "隨機抽籤進度"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Self-pacing 是 PSI 的靈魂：學得快的學生可以三週通過一學期進度提前結業，需要更多時間的學生能按照自己的速度精熟，不被迫倉促前進。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第12章 p.96",
    "difficulty": "基礎"
  },
  {
    "id": "q-keller-6",
    "chapterId": 12,
    "scholarId": "keller",
    "topic": "精熟標準（Mastery Requirement）與無懲罰重測",
    "questionText": "在 PSI 教學中，每個單元結束時學生必須參加單元測驗。下列有關 PSI 精熟標準與測驗規定的敘述，何者最為正確？",
    "options": [
      {
        "key": "A",
        "text": "通常要求答對率達 80%~90% 或滿分才准通過晉級；若未達標「不予處罰，可重複研讀並無限次重測直到通過」"
      },
      {
        "key": "B",
        "text": "未達標直接被退學留級"
      },
      {
        "key": "C",
        "text": "只要考 60 分就不准再考"
      },
      {
        "key": "D",
        "text": "不管考幾分大家都自動通過"
      }
    ],
    "correctAnswer": "A",
    "explanation": "PSI 嚴格恪守精熟標準（通常 80-90%），且徹底打破傳統考試的處罰性質——測驗未過不算失敗，只是尚未完全掌握，提供無限次無害重測直到精熟。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第12章 p.96",
    "difficulty": "中等"
  },
  {
    "id": "q-keller-7",
    "chapterId": 12,
    "scholarId": "keller",
    "topic": "助理教導員制度（Proctors）之一對一即時回饋",
    "questionText": "凱勒計畫中有一項獨創的教學人力安排：聘用過去已精熟該課程的高年級優秀學長姐擔任「助理教導員（Proctors）」。助理教導員的核心職責為何？",
    "options": [
      {
        "key": "A",
        "text": "在一對一情境中為學生「即時當面批改測驗卷」，詳細解說錯題原因並提供針對性補救指導與情感支持"
      },
      {
        "key": "B",
        "text": "替教授在黑板上整堂課講課"
      },
      {
        "key": "C",
        "text": "負責在走廊登記違規學生名單"
      },
      {
        "key": "D",
        "text": "代替學生打卡簽到"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Proctor 是一對一即時增強的核心：學生考完立刻當面逐題對答案、釐清盲點，提供即時回饋與社會增強（讚美肯定），大幅降低挫折感。",
    "examSource": "109年高級中等以下學校教師資格考試",
    "handoutRef": "講義第12章 p.96",
    "difficulty": "中等"
  },
  {
    "id": "q-keller-8",
    "chapterId": 12,
    "scholarId": "keller",
    "topic": "演講（Lectures）在 PSI 中之全新定位：動機激發",
    "questionText": "在凱勒計畫中，課堂教授依然會偶爾安排「大班演講（Lectures）」，但其功能與傳統講述教學有根本的不同。在 PSI 中，演講的主要功能是：",
    "options": [
      {
        "key": "A",
        "text": "純粹作為「激發動機與視野拓展（Motivation and enrichment）」，不傳授任何考試必考的新進度，且學生自由選擇是否出席"
      },
      {
        "key": "B",
        "text": "公布期末考絕對會考的冷門考題"
      },
      {
        "key": "C",
        "text": "嚴格點名缺席一次扣十分"
      },
      {
        "key": "D",
        "text": "由教授照著教科書從頭唸到尾"
      }
    ],
    "correctAnswer": "A",
    "explanation": "教材主要透過文字自學單元習得，演講不再是傳播知識的唯一管道，而是作為啟發性、高潮式的激勵與前沿分享，非強制出席。",
    "examSource": "108年新北市公立國小教甄試題",
    "handoutRef": "講義第12章 p.96",
    "difficulty": "進階"
  },
  {
    "id": "q-keller-9",
    "chapterId": 12,
    "scholarId": "keller",
    "topic": "以結構化文字自學教材（Written Materials）為核心",
    "questionText": "在凱勒計畫（PSI）中，知識傳遞的主要媒介不是教師的口語講授，而是倚重下列何種教材形態？",
    "options": [
      {
        "key": "A",
        "text": "編寫精良、目標明確、拆分成小步幅單元的「文字自學講義與學習指引（Written Study Guides）」"
      },
      {
        "key": "B",
        "text": "隨機指派的厚重學術原文書"
      },
      {
        "key": "C",
        "text": "完全空白的筆記本由學生自己憑空想像"
      },
      {
        "key": "D",
        "text": "單純的口耳相傳不用任何文字"
      }
    ],
    "correctAnswer": "A",
    "explanation": "PSI 仰賴結構清晰的自學指引（包含單元目標、學習資源指引、自我檢核題目），學生能依此自主研讀，不受時間空間限制。",
    "examSource": "112年高雄市教育專業科目試題",
    "handoutRef": "講義第12章 p.96",
    "difficulty": "基礎"
  },
  {
    "id": "q-keller-10",
    "chapterId": 12,
    "scholarId": "keller",
    "topic": "PSI 作為當代非同步數位學習（MOOCs / 翻轉課堂）之先驅",
    "questionText": "現代大規模開放式線上課程（MOOCs，如 Coursera）與數位學習平台普遍具備「自定進度、單元小測驗通過才解鎖下一關、論壇同儕互評即時回饋」等特點。這些設計在歷史上最直接體現了哪位學者的教學思想？",
    "options": [
      {
        "key": "A",
        "text": "弗萊德·凱勒（Fred Keller）的 PSI 模式"
      },
      {
        "key": "B",
        "text": "蘇格拉底的產婆術"
      },
      {
        "key": "C",
        "text": "赫爾巴特的四段教學"
      },
      {
        "key": "D",
        "text": "培根的歸納法"
      }
    ],
    "correctAnswer": "A",
    "explanation": "現代數位自學通關機制、即時評量與自定步調，本質上就是 1968 年 Keller PSI 理念藉由現代電腦網路科技的終極實現。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第12章 p.96",
    "difficulty": "中等"
  },
  {
    "id": "q-keller-11",
    "chapterId": 12,
    "scholarId": "keller",
    "topic": "凱勒計畫對落後學生心理挫折之減敏效果",
    "questionText": "依據凱勒的研究，傳統班級教學讓成績落後的學生天天在眾人面前遭受挫敗與羞辱；而 PSI 模式能有效維護學生自尊心的原因在於：",
    "options": [
      {
        "key": "A",
        "text": "測驗結果完全個別保密，未通過可立即在助理教導員一對一支持下重學重測，將「失敗」轉化為「邁向精熟的中途站」"
      },
      {
        "key": "B",
        "text": "落後學生不准參加考試"
      },
      {
        "key": "C",
        "text": "把考卷難度降為零"
      },
      {
        "key": "D",
        "text": "由全班同學集體替他寫考卷"
      }
    ],
    "correctAnswer": "A",
    "explanation": "PSI 營造了低威脅、高支持的環境，消除了公開比較的殘酷競爭，讓每個學生都能按照自己的節奏體驗征服知識的尊嚴。",
    "examSource": "110年新北市國小教甄試題",
    "handoutRef": "講義第12章 p.96",
    "difficulty": "基礎"
  },
  {
    "id": "q-keller-12",
    "chapterId": 12,
    "scholarId": "keller",
    "topic": "PSI 實施中「拖延現象（Procrastination）」之防制策略",
    "questionText": "在凱勒計畫實施時，部分自律能力較弱的學生可能會出現過度放鬆、將所有單元測驗拖延到學期末的「拖延症」。為了因應此挑戰，教師最適宜的調整為：",
    "options": [
      {
        "key": "A",
        "text": "設定建議進度查核點（Pacing milestones），並對按時通過單元者給予早期獎勵增強，提供適度的進度鷹架引導"
      },
      {
        "key": "B",
        "text": "直接給拖延的學生零分當掉"
      },
      {
        "key": "C",
        "text": "取消所有個別化自學回到大班講述"
      },
      {
        "key": "D",
        "text": "由警察將學生帶回學校"
      }
    ],
    "correctAnswer": "A",
    "explanation": "面對自由步調可能帶來的拖延，現代 PSI 融入進度里程碑建議、前置單元完成獎勵等行為塑造技術，協助學生兼顧自定律與進度達成。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第12章 p.96",
    "difficulty": "進階"
  },
  {
    "id": "q-tomlinson-4",
    "chapterId": 12,
    "scholarId": "tomlinson",
    "topic": "差異化教學（Differentiated Instruction）三大評估向度",
    "questionText": "國際差異化教學權威卡蘿·安·湯姆林森（Carol Ann Tomlinson）指出，教師實施差異化教學前，應針對學生的哪三個關鍵向度進行多元診斷評估？",
    "options": [
      {
        "key": "A",
        "text": "準備度（Readiness）、興趣（Interest）、學習風格/歷程型態（Learning Profile）"
      },
      {
        "key": "B",
        "text": "身高、體重、視力"
      },
      {
        "key": "C",
        "text": "家庭資產、父母學歷、住址距離"
      },
      {
        "key": "D",
        "text": "星座、血型、生肖"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tomlinson 學生診斷三大基石：準備度（起點知識與技能熟練度）、興趣（個人熱情與好奇主題）、學習風格/ profile（偏好的認知表徵方式如視覺、動覺、個別或協同）。",
    "examSource": "112年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第12章 p.99",
    "difficulty": "基礎"
  },
  {
    "id": "q-tomlinson-5",
    "chapterId": 12,
    "scholarId": "tomlinson",
    "topic": "差異化教學四大調整要素（Content, Process, Product, Environment）",
    "questionText": "在課堂教學中，湯姆林森主張教師可依據學生特質，在教學的哪四個核心要素上進行彈性調適（Differentiation）？",
    "options": [
      {
        "key": "A",
        "text": "內容（Content）、歷程（Process）、產出/成果（Product）、學習環境（Learning Environment）"
      },
      {
        "key": "B",
        "text": "教室大小、學費高低、制服樣式、校車路線"
      },
      {
        "key": "C",
        "text": "打卡時間、午餐菜色、冷氣溫度、黑板顏色"
      },
      {
        "key": "D",
        "text": "考卷張數、罰站時間、扣分標準、通報電話"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tomlinson 四大調適要素：內容（教材難易與接觸途徑）、歷程（思維鷹架與活動形式）、產出成果（展現所學的多元作品選擇）、學習環境（物理座位與班級心理安全氛圍）。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第12章 p.99",
    "difficulty": "基礎"
  },
  {
    "id": "q-tomlinson-6",
    "chapterId": 12,
    "scholarId": "tomlinson",
    "topic": "內容調適（Content Differentiation）實務情境",
    "questionText": "在國小語文閱讀課中，林老師針對同一篇「台灣黑熊保育」核心大概念，為不同閱讀程度的學生準備了「基礎圖文版、標準版、進階學術報導版」三種不同詞彙深度的閱讀材料供學生研讀。這屬於何種調適？",
    "options": [
      {
        "key": "A",
        "text": "內容的調適（Differentiating Content）"
      },
      {
        "key": "B",
        "text": "環境的調適"
      },
      {
        "key": "C",
        "text": "懲罰的調適"
      },
      {
        "key": "D",
        "text": "常模的調適"
      }
    ],
    "correctAnswer": "A",
    "explanation": "內容調適指針對不同準備度學生，提供不同複雜度或不同表徵形態（文字、影音、多層次讀本）的學習材料，使人人皆能掌握相同核心概念。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第12章 p.99",
    "difficulty": "基礎"
  },
  {
    "id": "q-tomlinson-7",
    "chapterId": 12,
    "scholarId": "tomlinson",
    "topic": "歷程調適（Process Differentiation）與思考鷹架",
    "questionText": "在數學解題時，陳老師為需要支持的組別提供「步驟指引卡與數棒操作教具」，為進階組別提供「開放性變因探索挑戰題」。這種在學習活動思考歷程上給予不同鷹架的做法屬於：",
    "options": [
      {
        "key": "A",
        "text": "歷程的調適（Differentiating Process）"
      },
      {
        "key": "B",
        "text": "內容的調適"
      },
      {
        "key": "C",
        "text": "成果的調適"
      },
      {
        "key": "D",
        "text": "環境的調適"
      }
    ],
    "correctAnswer": "A",
    "explanation": "歷程調適指在學生「理解與消化概念的活動過程」中提供多層次鷹架、不同的探究速度、或不同的思維活動策略。",
    "examSource": "109年新北市國小教甄試題",
    "handoutRef": "講義第12章 p.99",
    "difficulty": "基礎"
  },
  {
    "id": "q-tomlinson-8",
    "chapterId": 12,
    "scholarId": "tomlinson",
    "topic": "成果調適（Product Differentiation）與表現性選擇",
    "questionText": "社會科單元評量時，張老師允許學生在「撰寫一份研究報告、錄製一段 3 分鐘播客廣播、繪製一幅歷史連環漫畫、或製作一個立體模型」中擇一展現其對該歷史事件的理解。這屬於：",
    "options": [
      {
        "key": "A",
        "text": "成果/產出的調適（Differentiating Product）"
      },
      {
        "key": "B",
        "text": "內容的調適"
      },
      {
        "key": "C",
        "text": "歷程的調適"
      },
      {
        "key": "D",
        "text": "環境的調適"
      }
    ],
    "correctAnswer": "A",
    "explanation": "成果調適指提供多元展現所學的評量途徑，配合學生的優勢智能與興趣，但依循相同嚴謹的評量規準（Rubrics）評判其概念理解深度。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第12章 p.99",
    "difficulty": "基礎"
  },
  {
    "id": "q-tomlinson-9",
    "chapterId": 12,
    "scholarId": "tomlinson",
    "topic": "錨式活動（Anchoring Activities）在班級經營之作用",
    "questionText": "在差異化教室中，經常有學習快速的學生提早完成任務。湯姆林森建議教師在教室設置「錨式活動（Anchoring Activities）」，其核心意涵為何？",
    "options": [
      {
        "key": "A",
        "text": "有意義且能自主持續進行的延伸學習活動（如主題深入探究、跨學科閱讀、創意寫作），讓提早完成者自動投入，不干擾他人"
      },
      {
        "key": "B",
        "text": "罰提早寫完的學生趴下睡覺不准動"
      },
      {
        "key": "C",
        "text": "要求提早寫完的學生幫老師改全班考卷"
      },
      {
        "key": "D",
        "text": "讓學生自由在走廊遊蕩"
      }
    ],
    "correctAnswer": "A",
    "explanation": "錨式活動（定錨活動）是事先規劃的高品質自主學習常態機制，讓早完成者有深度延伸挑戰，使教師能安心輔導需要協助的學生。",
    "examSource": "112年高雄市國民小學教師甄選教育專業試題",
    "handoutRef": "講義第12章 p.100",
    "difficulty": "中等"
  },
  {
    "id": "q-tomlinson-10",
    "chapterId": 12,
    "scholarId": "tomlinson",
    "topic": "層次化任務（Tiered Assignments）設計原則",
    "questionText": "湯姆林森倡導的「分層任務 / 層次化作業（Tiered Assignments）」，其設計的最核心原則為：",
    "options": [
      {
        "key": "A",
        "text": "所有層次的任務皆聚焦於「相同的核心大概念與本質理解」，但依據學生準備度調整抽象度、複雜度與開放度"
      },
      {
        "key": "B",
        "text": "程度差的學生只做毫無意義的抄寫，程度好的學生才學概念"
      },
      {
        "key": "C",
        "text": "各層次完全教不同的學科主題"
      },
      {
        "key": "D",
        "text": "直接將學生永久標籤分流"
      }
    ],
    "correctAnswer": "A",
    "explanation": "分層任務不是差別待遇或教不同學科，而是「殊途同歸」：所有人探索同一核心概念，但提供不同梯度的梯子（階梯任務），確保人人獲得適切挑戰。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第12章 p.100",
    "difficulty": "中等"
  },
  {
    "id": "q-tomlinson-11",
    "chapterId": 12,
    "scholarId": "tomlinson",
    "topic": "差異化教學不是「為每人出一份獨立考卷」之迷思破除",
    "questionText": "許多教師誤以為實施差異化教學必須「在 30 人的班級為 30 個人準備 30 份不同教案」。湯姆林森如何澄清這項典型迷思？",
    "options": [
      {
        "key": "A",
        "text": "差異化不是混亂的個人化客製，而是在全班大概念架構下，提供「2-3 種合宜的層次路徑與彈性分組」，是兼顧常態大班的務實教學模式"
      },
      {
        "key": "B",
        "text": "教師確實必須每天不睡覺寫 30 份教案"
      },
      {
        "key": "C",
        "text": "差異化教學只適用於 1 對 1 家教"
      },
      {
        "key": "D",
        "text": "差異化教學完全禁止使用教科書"
      }
    ],
    "correctAnswer": "A",
    "explanation": "湯姆林森強調差異化是「有組織、有彈性」的課堂常態，透過前測形成 2-3 個彈性群組或多種產出選擇，兼顧集體目標與個別適性。",
    "examSource": "110年新北市國小教甄試題",
    "handoutRef": "講義第12章 p.99",
    "difficulty": "基礎"
  },
  {
    "id": "q-tomlinson-12",
    "chapterId": 12,
    "scholarId": "tomlinson",
    "topic": "形成性評量是差異化教學的指南針",
    "questionText": "湯姆林森名言：「在差異化教室中，評量不是教學結束後的最後審判，而是貫穿教學每一天的指南針。」這段話強調何種評量在差異化教學中的核心地位？",
    "options": [
      {
        "key": "A",
        "text": "形成性評量（Formative Assessment / 促進學習的評量）"
      },
      {
        "key": "B",
        "text": "常模段考評量"
      },
      {
        "key": "C",
        "text": "智商標準化測驗"
      },
      {
        "key": "D",
        "text": "全縣統一模擬考"
      }
    ],
    "correctAnswer": "A",
    "explanation": "差異化教學靠形成性評量（觀察、提問、出口票卷 Exit cards）持續掌握學生的理解狀態，作為即時調配分組、內容與鷹架的指南針。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第12章 p.99",
    "difficulty": "基礎"
  },
  {
    "id": "q-weiner-4",
    "chapterId": 13,
    "scholarId": "weiner",
    "topic": "成敗歸因理論（Attribution Theory）之三大向度架構",
    "questionText": "伯納德·韋納（Bernard Weiner）提出著名的「成敗歸因理論（Attribution Theory）」，他將個人對成敗原因的認知歸納為哪三大向度？",
    "options": [
      {
        "key": "A",
        "text": "內在-外在向度（Locus of Control）、穩定-不穩定向度（Stability）、能控-不可控向度（Controllability）"
      },
      {
        "key": "B",
        "text": "時間向度、空間向度、速度向度"
      },
      {
        "key": "C",
        "text": "過去向度、現在向度、未來向度"
      },
      {
        "key": "D",
        "text": "生理向度、心理向度、社會向度"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Weiner 歸因三大向度：1.控制點（內在/外在）；2.穩定性（穩定/不穩定）；3.可控制性（能控/不可控）。六大因素皆可在此三向度中定位。",
    "examSource": "112年教育部教師資格考試（學習者發展）",
    "handoutRef": "講義第13章 p.113",
    "difficulty": "基礎"
  },
  {
    "id": "q-weiner-5",
    "chapterId": 13,
    "scholarId": "weiner",
    "topic": "六大常見歸因因素之向度屬性交叉分析",
    "questionText": "在韋納的歸因模型中，「努力（Effort）」因素在三大向度上的屬性組合為何？",
    "options": [
      {
        "key": "A",
        "text": "內在（Internal）、不穩定（Unstable）、能控制（Controllable）"
      },
      {
        "key": "B",
        "text": "外在、穩定、不可控"
      },
      {
        "key": "C",
        "text": "內在、穩定、不可控"
      },
      {
        "key": "D",
        "text": "外在、不穩定、能控制"
      }
    ],
    "correctAnswer": "A",
    "explanation": "「努力」是六大因素中唯一「內在、不穩定且自己能控制（Controllable）」的關鍵因素，因此最能激發主動改變的動機。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第13章 p.113",
    "difficulty": "基礎"
  },
  {
    "id": "q-weiner-6",
    "chapterId": 13,
    "scholarId": "weiner",
    "topic": "「能力（Ability）」因素之向度屬性分析",
    "questionText": "在韋納歸因模型中，「能力（Ability / 聰明程度）」在三大向度上的屬性組合為何？",
    "options": [
      {
        "key": "A",
        "text": "內在（Internal）、穩定（Stable）、不可控制（Uncontrollable）"
      },
      {
        "key": "B",
        "text": "外在、不穩定、能控制"
      },
      {
        "key": "C",
        "text": "外在、穩定、不可控制"
      },
      {
        "key": "D",
        "text": "內在、不穩定、能控制"
      }
    ],
    "correctAnswer": "A",
    "explanation": "能力屬於個人內在特質（內在），通常被視為相對長期固定（穩定），且非當下主觀意願能瞬間隨意改變（不可控）。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第13章 p.113",
    "difficulty": "中等"
  },
  {
    "id": "q-weiner-7",
    "chapterId": 13,
    "scholarId": "weiner",
    "topic": "失敗歸因於「能力不足」易導致習得無助感（Learned Helplessness）",
    "questionText": "若學生每次考試不及格時，都將失敗原因歸咎於「我天生太笨、資質不如人（內在、穩定、不可控的能力歸因）」，在心理學上最容易產生何種災難性後果？",
    "options": [
      {
        "key": "A",
        "text": "產生習得無助感（Learned Helplessness），認為再怎麼努力也不可能改變，徹底放棄學習"
      },
      {
        "key": "B",
        "text": "激發強烈的好勝心連夜苦讀"
      },
      {
        "key": "C",
        "text": "自我效能感大幅飆升"
      },
      {
        "key": "D",
        "text": "主動要求加課輔導"
      }
    ],
    "correctAnswer": "A",
    "explanation": "若歸因於穩定且不可控的能力，學生會預期未來必然再次失敗，產生「努力也是徒勞」的絕望無力感，引發習得無助。",
    "examSource": "109年新北市國小教甄試題",
    "handoutRef": "講義第13章 p.113",
    "difficulty": "基礎"
  },
  {
    "id": "q-weiner-8",
    "chapterId": 13,
    "scholarId": "weiner",
    "topic": "穩定性向度（Stability）對未來成敗期望之影響",
    "questionText": "韋納研究指出，歸因的三大向度各自主導不同的心理後續反應。其中「穩定性向度（穩定 vs 不穩定）」主要決定了個體對未來的何種心理狀態？",
    "options": [
      {
        "key": "A",
        "text": "對未來再次成敗的「期望（Expectation of future success / 期望維持原狀或可能改變）」"
      },
      {
        "key": "B",
        "text": "自尊與自豪情緒"
      },
      {
        "key": "C",
        "text": "同儕嫉妒心理"
      },
      {
        "key": "D",
        "text": "身體體溫高低"
      }
    ],
    "correctAnswer": "A",
    "explanation": "向度功能對應：內外向度決定情緒自尊（自豪或羞恥）；穩定性向度決定未來期望（穩定則預期維持，不穩定則預期可翻轉）；能控性向度決定努力意願與他人同情。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第13章 p.113",
    "difficulty": "進階"
  },
  {
    "id": "q-weiner-9",
    "chapterId": 13,
    "scholarId": "weiner",
    "topic": "歸因再造訓練（Attribution Retraining）之輔導策略",
    "questionText": "針對經常陷入習得無助的學業挫折學生，輔導教師實施「歸因再造訓練（Attribution Retraining）」，最核心的輔導方向為何？",
    "options": [
      {
        "key": "A",
        "text": "引導學生將失敗由「能力差（不可控）」轉變為歸因於「努力不足或方法策略不當（內在、不穩定、可控）」，重塑掌控感"
      },
      {
        "key": "B",
        "text": "教導學生將失敗全部推卸給考卷太難或運氣太差"
      },
      {
        "key": "C",
        "text": "直接給學生滿分以討好學生"
      },
      {
        "key": "D",
        "text": "說服學生放棄升學去打工"
      }
    ],
    "correctAnswer": "A",
    "explanation": "歸因再造引導學生認知重構：體會「只要我投入合適的努力與學習策略，我就能改善成績」，恢復對學業成就的自我掌控信念。",
    "examSource": "112年高雄市國民小學教師甄選教育專業試題",
    "handoutRef": "講義第13章 p.113",
    "difficulty": "基礎"
  },
  {
    "id": "q-weiner-10",
    "chapterId": 13,
    "scholarId": "weiner",
    "topic": "成功歸因於「運氣好（Luck）」對自尊之消極影響",
    "questionText": "若學生段考考了全班第一名，但在大家稱讚時他卻回答：「只是我運氣好、猜題剛好猜對而已（外在、不穩定、不可控）」。依據韋納理論，這種歸因對該學生的心理影響為何？",
    "options": [
      {
        "key": "A",
        "text": "無法體驗到真誠的內在自豪感（Pride）與自我效能感，且對下一次能否成功充滿不確定焦慮"
      },
      {
        "key": "B",
        "text": "會使其傲慢自大無比"
      },
      {
        "key": "C",
        "text": "會使其智力立刻退化"
      },
      {
        "key": "D",
        "text": "沒有任何心理影響"
      }
    ],
    "correctAnswer": "A",
    "explanation": "成功若歸因於外在不穩定的運氣，無法內化為對自我能力的肯定與自尊，學生依然缺乏真正掌控感，下一次考試會倍感焦慮。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第13章 p.113",
    "difficulty": "中等"
  },
  {
    "id": "q-weiner-11",
    "chapterId": 13,
    "scholarId": "weiner",
    "topic": "「作業難度（Task Difficulty）」之向度屬性",
    "questionText": "學生在考完試後抱怨：「這次考卷題目出得太艱深刁鑽了（作業難度）」。在韋納的歸因架構中，作業難度屬於何種向度組合？",
    "options": [
      {
        "key": "A",
        "text": "外在（External）、穩定（Stable）、不可控（Uncontrollable）"
      },
      {
        "key": "B",
        "text": "內在、不穩定、能控制"
      },
      {
        "key": "C",
        "text": "內在、穩定、不可控"
      },
      {
        "key": "D",
        "text": "外在、不穩定、能控制"
      }
    ],
    "correctAnswer": "A",
    "explanation": "題目難易是由出題教師與考卷決定的外在客觀條件（外在），在該次考試情境中是固定不變的（穩定），且學生個人無法透過主觀意願更改題目（不可控）。",
    "examSource": "110年新北市國小教甄試題",
    "handoutRef": "講義第13章 p.113",
    "difficulty": "中等"
  },
  {
    "id": "q-weiner-12",
    "chapterId": 13,
    "scholarId": "weiner",
    "topic": "教師正向回饋之歸因引導語言示範",
    "questionText": "當學生經過努力終於取得進步時，教師下列哪一種回饋用語，最能促成正向的歸因風格與內在動機激勵？",
    "options": [
      {
        "key": "A",
        "text": "「你這次非常認真研讀，並且靈活運用了心智圖策略（努力與策略歸因），你的用心投入帶來了這次的成功！」"
      },
      {
        "key": "B",
        "text": "「哇，你這次踩到狗屎運了喔！」"
      },
      {
        "key": "C",
        "text": "「你看吧，一定是這次題目出太簡單送分給你的。」"
      },
      {
        "key": "D",
        "text": "「你天生就是個天才，完全不用讀書就能考滿分。」"
      }
    ],
    "correctAnswer": "A",
    "explanation": "讚美努力與策略（可控且可持續因素）能建立成長心態（Growth Mindset）；盲目讚美天才或運氣反而容易使學生抗拒未來挑戰。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第13章 p.113",
    "difficulty": "基礎"
  },
  {
    "id": "q-jkeller-4",
    "chapterId": 13,
    "scholarId": "john_keller",
    "topic": "ARCS 動機設計模式之四大要素名稱與順序",
    "questionText": "約翰·凱勒（John M. Keller）整合動機心理學理論，提出教學設計的「ARCS 動機模式」，其四個核心要素字母 A-R-C-S 依序代表為何？",
    "options": [
      {
        "key": "A",
        "text": "引起注意（Attention）、切身相關（Relevance）、建立信心（Confidence）、獲得滿足（Satisfaction）"
      },
      {
        "key": "B",
        "text": "態度、反應、溝通、標準"
      },
      {
        "key": "C",
        "text": "能力、反省、合作、成功"
      },
      {
        "key": "D",
        "text": "行動、獎賞、控制、安全"
      }
    ],
    "correctAnswer": "A",
    "explanation": "ARCS 模式四大要素口訣「注、切、信、滿」：Attention（引起注意）、Relevance（切身相關/貼近生活）、Confidence（建立挑戰信心）、Satisfaction（獲得滿足感）。",
    "examSource": "112年教育部教師資格考試（課程教學與評量）",
    "handoutRef": "講義第13章 p.114",
    "difficulty": "基礎"
  },
  {
    "id": "q-jkeller-5",
    "chapterId": 13,
    "scholarId": "john_keller",
    "topic": "ARCS 之「注意（Attention）」次成分策略",
    "questionText": "在 ARCS 模式中，為了達成「引起注意（Attention）」的第一步，教師在課堂一開始播放一段出乎意料的驚奇科學實驗短片或講述一個懸疑故事。這屬於注意的哪種次策略？",
    "options": [
      {
        "key": "A",
        "text": "知覺喚起（Perceptual Arousal）與 探究喚起（Inquiry Arousal）"
      },
      {
        "key": "B",
        "text": "目標定向"
      },
      {
        "key": "C",
        "text": "正向增強"
      },
      {
        "key": "D",
        "text": "自然後果"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Attention 包含三項次策略：知覺喚起（運用新奇聲光或道具刺激感官）、探究喚起（提出反常謎題激發好奇）、變化性（教學活動節奏多元交替）。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第13章 p.114",
    "difficulty": "中等"
  },
  {
    "id": "q-jkeller-6",
    "chapterId": 13,
    "scholarId": "john_keller",
    "topic": "ARCS 之「切身相關（Relevance）」次成分策略",
    "questionText": "數學老師在教授「一次方程式」單元時，不直接講述 X 與 Y，而是設計「手搖飲料店點餐結帳與折價券計算」的生活情境。這屬於 ARCS 模式中的何種要素策略？",
    "options": [
      {
        "key": "A",
        "text": "切身相關（Relevance / 熟悉感與生活連結）"
      },
      {
        "key": "B",
        "text": "引起注意"
      },
      {
        "key": "C",
        "text": "獲得滿足"
      },
      {
        "key": "D",
        "text": "建立信心"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Relevance 策略包括：熟悉感（連結學生既有生活經驗）、目標定向（說明此知識對未來何處有用）、動機匹配（提供符合學生興趣的選擇）。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第13章 p.114",
    "difficulty": "基礎"
  },
  {
    "id": "q-jkeller-7",
    "chapterId": 13,
    "scholarId": "john_keller",
    "topic": "ARCS 之「信心（Confidence）」建立策略",
    "questionText": "為降低學生的考試恐懼並建立挑戰信心（Confidence），依據約翰·凱勒理論，教師在評量任務開始前應優先採取何種措施？",
    "options": [
      {
        "key": "A",
        "text": "清楚說明「學習要求與成功規準（清晰評分標準）」，並設計階梯挑戰讓學生體驗成功掌控感"
      },
      {
        "key": "B",
        "text": "故意隱瞞考試內容以考倒學生"
      },
      {
        "key": "C",
        "text": "直接給所有人滿分"
      },
      {
        "key": "D",
        "text": "警告全班這題沒有人能算出來"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Confidence 策略包括：明確的學習要求（知道達到什麼算成功）、成功機會（循序漸進的挑戰難度）、個人掌控感（讓學生體會成功源於自己努力）。",
    "examSource": "109年新北市國小教甄試題",
    "handoutRef": "講義第13章 p.114",
    "difficulty": "基礎"
  },
  {
    "id": "q-jkeller-8",
    "chapterId": 13,
    "scholarId": "john_keller",
    "topic": "ARCS 之「滿足（Satisfaction）」次成分策略",
    "questionText": "在 ARCS 模式的「滿足（Satisfaction）」維度中，下列哪一項教學措施最能讓學生在學習後產生持久而深沉的成就滿足感？",
    "options": [
      {
        "key": "A",
        "text": "提供在真實生活情境中「立即學以致用（自然結果 Natural consequences）」的舞台，並給予公正及時的肯定"
      },
      {
        "key": "B",
        "text": "發給每人一千元新台幣鈔票"
      },
      {
        "key": "C",
        "text": "立即宣布放長假不用上學"
      },
      {
        "key": "D",
        "text": "完全不進行任何回饋"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Satisfaction 策略包括：自然結果（將新知用於真實問題的知性喜悅）、正向增強（適度及時肯定）、公平原則（評量要求與當初承諾標準一致）。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第13章 p.114",
    "difficulty": "中等"
  },
  {
    "id": "q-jkeller-9",
    "chapterId": 13,
    "scholarId": "john_keller",
    "topic": "公平原則（Equity）在獲得滿足中之重要性",
    "questionText": "約翰·凱勒在探討「滿足（Satisfaction）」時特別提出「公平原則（Equity）」。若教師在評量時發生何種情況，會最嚴重摧毀學生的學習滿足感與後續動機？",
    "options": [
      {
        "key": "A",
        "text": "考試題目與平時公布的教學目標與標準完全脫節、評分標準因人而異偏袒特定學生"
      },
      {
        "key": "B",
        "text": "依照原本公布的評分規準客觀打分"
      },
      {
        "key": "C",
        "text": "考卷印得太整齊"
      },
      {
        "key": "D",
        "text": "及時發還批改完畢的考卷"
      }
    ],
    "correctAnswer": "A",
    "explanation": "公平性（Equity）是滿足感的心靈底線：若學生辛苦付出卻遭遇不公平評判或目標背道而馳，會產生強烈的憤怒與挫折感，動機徹底瓦解。",
    "examSource": "112年高雄市國民小學教師甄選教育專業試題",
    "handoutRef": "講義第13章 p.114",
    "difficulty": "中等"
  },
  {
    "id": "q-jkeller-10",
    "chapterId": 13,
    "scholarId": "john_keller",
    "topic": "ARCS 模式在數位教材與線上學習之應用",
    "questionText": "在規劃遠距數位自學教材時，依據 ARCS 模式，教學設計者為了維持學生在螢幕前的持續專注，最應避免的缺失為：",
    "options": [
      {
        "key": "A",
        "text": "長時間單調平淡的純文字投影片念稿（缺乏變化性與探究喚起），且未說明與學生生活的關聯"
      },
      {
        "key": "B",
        "text": "加入多媒體互動檢核題"
      },
      {
        "key": "C",
        "text": "將大單元拆成 5 分鐘微課程"
      },
      {
        "key": "D",
        "text": "設計即時反饋機制"
      }
    ],
    "correctAnswer": "A",
    "explanation": "缺乏知覺變化性與生活切身性是線上學習最致命的動機殺手，容易導致學生迅速疲乏分心與中途輟學。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第13章 p.114",
    "difficulty": "基礎"
  },
  {
    "id": "q-jkeller-11",
    "chapterId": 13,
    "scholarId": "john_keller",
    "topic": "外在獎勵對內在動機破壞（過度辯證效應）之防範",
    "questionText": "約翰·凱勒在討論正向增強與獎賞策略時特別提醒教師，若學生原本就對某項學習活動充滿濃厚內在興趣，過度給予外在物質獎賞可能造成：",
    "options": [
      {
        "key": "A",
        "text": "過度辯證效應（Overjustification Effect），反客為主削弱學生原本純粹的內在動機"
      },
      {
        "key": "B",
        "text": "大幅增強學生的內在好奇心"
      },
      {
        "key": "C",
        "text": "讓學生自發性讀書到天亮"
      },
      {
        "key": "D",
        "text": "提高學生的記憶容量"
      }
    ],
    "correctAnswer": "A",
    "explanation": "過度辯證效應：將原本好玩的自主探索變成「為了拿獎品才做」的功利行為，一旦抽離獎品，原本的熱情便煙消雲散。獎勵應以精神肯定為宜。",
    "examSource": "110年新北市國小教甄試題",
    "handoutRef": "講義第13章 p.114",
    "difficulty": "進階"
  },
  {
    "id": "q-jkeller-12",
    "chapterId": 13,
    "scholarId": "john_keller",
    "topic": "ARCS 與 Bandura 自我效能及 Weiner 歸因之理論整合",
    "questionText": "從教育心理學體系觀之，ARCS 模式中的「建立信心（Confidence）」維度，在理論根基上最主要是融匯整合了哪兩位大師的心理學學說？",
    "options": [
      {
        "key": "A",
        "text": "班杜拉（Bandura）的「自我效能論」與 韋納（Weiner）的「可控努力歸因論」"
      },
      {
        "key": "B",
        "text": "巴夫洛夫的唾液制約與華生的恐懼制約"
      },
      {
        "key": "C",
        "text": "弗洛伊德的潛意識本我論"
      },
      {
        "key": "D",
        "text": "桑代克的貓咪迷籠試誤論"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Confidence 核心就是自我效能（我相信我能成功，Bandura）與努力歸因（成功可控於自己，Weiner），體現了動機設計的高度整合性。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第13章 p.114",
    "difficulty": "中等"
  },
  {
    "id": "q-rosenthal-4",
    "chapterId": 14,
    "scholarId": "rosenthal",
    "topic": "1968 年橡樹學校實驗（Oak School Experiment）經典歷程",
    "questionText": "羅伯特·羅森索（Robert Rosenthal）與雅各布森（Jacobson）於 1968 年在小學進行了著名的「橡樹學校實驗」。該實驗的具體研究設計為何？",
    "options": [
      {
        "key": "A",
        "text": "對全校施測後，「隨機抽取 20% 普通學生」謊稱其為經測驗證實的「智力潛力即將大爆發的資優生」告知教師，一年後這些隨機學生的智商與學力果真顯著超越常人"
      },
      {
        "key": "B",
        "text": "挑選全校真正智商最高的一群學生進行跳級培訓"
      },
      {
        "key": "C",
        "text": "給予學生連續一年的每天電擊處罰"
      },
      {
        "key": "D",
        "text": "測試維他命丸對兒童身高的影響"
      }
    ],
    "correctAnswer": "A",
    "explanation": "實驗的震撼之處在於名單完全是隨機抽選（天賦無差別），純粹是「教師心中植入了高期待」，教師的期待態度便神奇地讓普通學生的智商一年後實質大幅提升。",
    "examSource": "112年教育部教師資格考試（學習者發展）",
    "handoutRef": "講義第14章 p.120",
    "difficulty": "基礎"
  },
  {
    "id": "q-rosenthal-5",
    "chapterId": 14,
    "scholarId": "rosenthal",
    "topic": "比馬龍效應傳遞之四大中介管道（Brophy & Good / Rosenthal）",
    "questionText": "羅森索後續研究揭露了教師是如何在不知不覺中將內心的高期待轉化為學生的實際表現。教師展現高期待的「四大中介管道」包括：",
    "options": [
      {
        "key": "A",
        "text": "情感氛圍（Climate）、教學教材輸入（Input）、互動產出機會（Output）、回饋回覆（Feedback）"
      },
      {
        "key": "B",
        "text": "處罰、扣分、停課、留級"
      },
      {
        "key": "C",
        "text": "跑步、跳高、投籃、游泳"
      },
      {
        "key": "D",
        "text": "算盤、毛筆、墨汁、宣紙"
      }
    ],
    "correctAnswer": "A",
    "explanation": "四大管道：1.氛圍（更溫暖微笑接納）；2.輸入（教更多更難的深層教材）；3.產出（給更多回答發言機會與更長候答時間）；4.回饋（給更多讚美與建設性深入指點）。",
    "examSource": "111年臺北市國小教育專業科目試題",
    "handoutRef": "講義第14章 p.120",
    "difficulty": "中等"
  },
  {
    "id": "q-rosenthal-6",
    "chapterId": 14,
    "scholarId": "rosenthal",
    "topic": "候答時間（Wait Time）與期待效應之關聯",
    "questionText": "課堂提問研究指出，教師對「低期待（被視為學力差）」學生與「高期待（被視為優秀）」學生的候答時間（Wait Time）往往有顯著不公。典型的不良現象為何？",
    "options": [
      {
        "key": "A",
        "text": "對低期待學生提問後僅等待不到 1 秒鐘就急著替其回答或叫下一人；而對高期待學生則願意耐心等待 3-5 秒甚至給予提示引導"
      },
      {
        "key": "B",
        "text": "對低期待學生等待一整天"
      },
      {
        "key": "C",
        "text": "完全不向高期待學生提問"
      },
      {
        "key": "D",
        "text": "兩人候答時間完全相同毫無差距"
      }
    ],
    "correctAnswer": "A",
    "explanation": "候答時間短傳遞了「反正你也不會算」的低期望訊號，剥奪思考機會；延長候答時間（Rowe 研究）則能顯著提升學生的思維品質與自信。",
    "examSource": "110年教育部教師資格考試",
    "handoutRef": "講義第14章 p.120",
    "difficulty": "基礎"
  },
  {
    "id": "q-rosenthal-7",
    "chapterId": 14,
    "scholarId": "rosenthal",
    "topic": "泥人效應 / 葛冷效應（Golem Effect）之危害",
    "questionText": "與正面比馬龍效應相對應的負向自我應驗預言被稱為「泥人效應（Golem Effect）」。下列何者最符合泥人效應的形成循環？",
    "options": [
      {
        "key": "A",
        "text": "教師認定特定弱勢學生「無可救藥」抱持低期待 → 課堂給予冷漠眼神、簡單枯燥教材與極少反饋 → 學生感知被放棄而自我放棄 → 最終成績真的越變越差"
      },
      {
        "key": "B",
        "text": "教師的高期待讓學生變成資優生"
      },
      {
        "key": "C",
        "text": "學生用黏土捏出泥人玩具"
      },
      {
        "key": "D",
        "text": "全班一同慶祝教師節"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Golem Effect 是負向自我應驗預言的悲劇：成人的偏見與低期待壓抑了學生的潛能，最終在行為上應驗了原本莫須有的低劣預言。",
    "examSource": "109年新北市國小教甄試題",
    "handoutRef": "講義第14章 p.120",
    "difficulty": "基礎"
  },
  {
    "id": "q-rosenthal-8",
    "chapterId": 14,
    "scholarId": "rosenthal",
    "topic": "自我應驗預言（Self-Fulfilling Prophecy）之心理學機制",
    "questionText": "社會學家默頓（Robert K. Merton）與羅森索探討的「自我應驗預言（Self-Fulfilling Prophecy）」，其運作核心機制的本質為：",
    "options": [
      {
        "key": "A",
        "text": "起初對情境的一個「錯誤或未經證實的假定定義」，因為引發了一連串符合該假定的行為互動，最終使原本錯誤的假定變成了真實結果"
      },
      {
        "key": "B",
        "text": "算命師具有神準的預知超能力"
      },
      {
        "key": "C",
        "text": "只要天天做白日夢夢想就能自然實現"
      },
      {
        "key": "D",
        "text": "完全憑藉遺傳基因的客觀生長"
      }
    ],
    "correctAnswer": "A",
    "explanation": "自我應驗預言：假定定義情境 → 依據該信念採取行為 → 行為誘導對方做出符合信念的反應 → 原初假定被證實為真。",
    "examSource": "108年高級中等以下學校教師資格考試",
    "handoutRef": "講義第14章 p.120",
    "difficulty": "中等"
  },
  {
    "id": "q-rosenthal-9",
    "chapterId": 14,
    "scholarId": "rosenthal",
    "topic": "比馬龍效應與霍桑效應（Hawthorne Effect）之區辨",
    "questionText": "在教育評鑑研究中，常將比馬龍效應與「霍桑效應（Hawthorne Effect）」進行區辨。霍桑效應的核心意涵是指：",
    "options": [
      {
        "key": "A",
        "text": "受試者因為意識到「自己正在被觀察、研究與受人注視關心」，而主動改變並提升自身行為表現的現象"
      },
      {
        "key": "B",
        "text": "教師的高期望引發學生的成績進步"
      },
      {
        "key": "C",
        "text": "學生因為害怕體罰而服從"
      },
      {
        "key": "D",
        "text": "實驗室老鼠因鈴聲流唾液"
      }
    ],
    "correctAnswer": "A",
    "explanation": "霍桑效應（源於西方電氣廠實驗）：受試者自知受注意關注而提升產能；比馬龍效應（Pygmalion）：受試者是受到「他人隱含的期望暗示」而改變表現。",
    "examSource": "112年高雄市國民小學教師甄選教育專業試題",
    "handoutRef": "講義第14章 p.120",
    "difficulty": "中等"
  },
  {
    "id": "q-rosenthal-10",
    "chapterId": 14,
    "scholarId": "rosenthal",
    "topic": "暈輪效應（Halo Effect / 月暈效應）在評量中的干擾",
    "questionText": "國文李老師批改作文時，因為某位學生平常在校品學兼優、字跡清秀（具備良好特徵），即使該次作文離題瑕疵明顯，李老師依然給予了 95 分的高分。這種評量偏誤被稱為：",
    "options": [
      {
        "key": "A",
        "text": "月暈效應 / 暈輪效應（Halo Effect）"
      },
      {
        "key": "B",
        "text": "霍桑效應"
      },
      {
        "key": "C",
        "text": "投射效應"
      },
      {
        "key": "D",
        "text": "寬大效應"
      }
    ],
    "correctAnswer": "A",
    "explanation": "月暈效應指評定者因個體某一方面突出的特徵（如相貌好、品學兼優），而以偏概全地對其所有其他表現均賦予過高評價。",
    "examSource": "111年教育部教師資格考試",
    "handoutRef": "講義第14章 p.120",
    "difficulty": "基礎"
  },
  {
    "id": "q-rosenthal-11",
    "chapterId": 14,
    "scholarId": "rosenthal",
    "topic": "破除對低成就學童刻板印象之專業倫理",
    "questionText": "羅森索的理論給予現代教師最重要的專業倫理啟示為：在接手新班級時，教師面對學籍資料卡上的前科紀錄或落後成績，最健康的態度應為：",
    "options": [
      {
        "key": "A",
        "text": "保持無偏見的初心，對每一位學生都抱持「具有無限成長與突破潛能」的真誠高期待，拒絕自我應驗預言的負面陷阱"
      },
      {
        "key": "B",
        "text": "立刻將成績差的學生全部調到教室最後一排"
      },
      {
        "key": "C",
        "text": "直接通知家長放棄這名孩子"
      },
      {
        "key": "D",
        "text": "向全班公布每位學生的家庭弱點"
      }
    ],
    "correctAnswer": "A",
    "explanation": "羅森索名言：你用什麼眼光看待學生，學生就會成長為你所期許的模樣。真誠的高期望是教師給予學生最珍貴的成長禮物。",
    "examSource": "110年新北市國小教甄試題",
    "handoutRef": "講義第14章 p.120",
    "difficulty": "基礎"
  },
  {
    "id": "q-rosenthal-12",
    "chapterId": 14,
    "scholarId": "rosenthal",
    "topic": "希臘神話比馬龍（Pygmalion）典故之精神意涵",
    "questionText": "羅森索將教師期望效應命名為「比馬龍效應（Pygmalion Effect）」，取自希臘神話雕刻家比馬龍的典故。在神話中，比馬龍的故事象徵何種精神？",
    "options": [
      {
        "key": "A",
        "text": "以純粹專注的愛與至誠深切的期望，最終感通神明使原本冰冷的象牙少女雕像化為真人（精誠所至，期望成真）"
      },
      {
        "key": "B",
        "text": "飛得太高而使蠟翼融化的伊卡洛斯悲劇"
      },
      {
        "key": "C",
        "text": "日復一日推巨石上山的薛西弗斯徒勞"
      },
      {
        "key": "D",
        "text": "打開魔盒釋放災難的潘朵拉好奇"
      }
    ],
    "correctAnswer": "A",
    "explanation": "塞浦路斯國王比馬龍深愛自己雕刻的少女像，其摯愛與至誠感動了愛神阿芙蘿黛蒂賦予雕像生命。這象徵著深切信念具有點石成金的塑造力量。",
    "examSource": "109年教育部教師資格考試",
    "handoutRef": "講義第14章 p.120",
    "difficulty": "中等"
  }
];
