# scripts/assemble_bank.py
import json
from data_scholars_part1 import QUESTIONS_PART1
from data_scholars_part2 import QUESTIONS_PART2
from data_scholars_part2b import QUESTIONS_PART2B
from data_scholars_part3 import QUESTIONS_PART3
from data_scholars_part4 import QUESTIONS_PART4

all_comprehensive_questions = (
    QUESTIONS_PART1 +
    QUESTIONS_PART2 +
    QUESTIONS_PART2B +
    QUESTIONS_PART3 +
    QUESTIONS_PART4
)

print(f"Total comprehensive questions assembled: {len(all_comprehensive_questions)}")

# Verify all IDs are unique
ids = set()
duplicates = []
for q in all_comprehensive_questions:
    if q["id"] in ids:
        duplicates.append(q["id"])
    ids.add(q["id"])

if duplicates:
    print(f"WARNING: Duplicates found: {duplicates}")
else:
    print("All IDs are unique!")

# Count per scholar
scholar_counts = {}
for q in all_comprehensive_questions:
    s = q.get("scholarId", "unknown")
    scholar_counts[s] = scholar_counts.get(s, 0) + 1

print("Comprehensive question counts per scholar in new bank:")
print(json.dumps(scholar_counts, indent=2, ensure_ascii=False))

# Now write out TypeScript file
ts_content = """import { Question } from '../types';

/**
 * 歷代教育學者全方位高頻真題題庫（每位學者均擴充 10~20 題）
 * 涵蓋臺灣歷屆教師資格考試（教檢）與各縣市公立教師甄選（教甄）真題與情境素養試題
 */
export const SCHOLAR_COMPREHENSIVE_QUESTIONS: Question[] = """

ts_content += json.dumps(all_comprehensive_questions, indent=2, ensure_ascii=False) + ";\n"

with open("src/data/scholarComprehensiveBank.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Successfully written to src/data/scholarComprehensiveBank.ts")
