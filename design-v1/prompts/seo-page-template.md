Design a dark-theme tool page for AP [Subject] Score Calculator.

Reuse all design tokens from the main landing page:
- Background: #0A0E1A
- Surface: #111827
- Border: #1E293B
- Primary accent: #00D4AA
- CTA / highlight: #FFB800
- Text primary: #E8ECF0
- Text secondary: #8B95A5
- Text muted: #5A6270
- Font Display: Space Grotesk
- Font Body: DM Sans
- Font Mono: JetBrains Mono

Page structure:

1. BREADCRUMB
"Home > AP [Subject] Score Calculator" — DM Sans 12px, #8B95A5

2. H1
"AP [Subject] Score Calculator 2026" — Space Grotesk, 36px, #E8ECF0

3. SUBHEAD
"Based on official College Board scoring guidelines. Enter your practice scores to get an instant 1-5 prediction." — DM Sans, 16px, #8B95A5

4. TOOL INTERFACE (核心区域)
- Card background: #111827, border: 1px #1E293B, radius: 12px
- Section I: Multiple Choice
  - [MCQ Part A]: slider 0-[max], label in DM Sans, value in JetBrains Mono
  - [MCQ Part B]: slider 0-[max] (if applicable)
- Section II: Free Response
  - [FRQ 1]: slider 0-[max]
  - ... (adjust quantity per subject)
- REAL-TIME RESULT (sticky or below inputs):
  - "Composite Score: XX/[max]" — JetBrains Mono, 24px, #E8ECF0
  - "Predicted AP Score: X" — JetBrains Mono, 64px, #00D4AA (large, prominent)
  - Mini sparkline showing score distribution
  - "You scored higher than XX% of students" — DM Sans, 14px, #8B95A5
- All sliders: #1E293B track, #00D4AA fill, #FFB800 thumb (24px, touch-friendly)

5. HOW SCORING WORKS
- Title: "How AP [Subject] Is Scored" — Space Grotesk, 24px
- Content: [subject-specific scoring explanation]
- Use bullet points, DM Sans 14px

6. SCORE MEANING
- Title: "What Your Score Means" — Space Grotesk, 24px
- 1-2: "Not passing" / 3: "Passing — may earn college credit" / 4-5: "Strong — likely earns credit"
- Display as horizontal bar: 1-2 (red) | 3 (yellow) | 4-5 (green)

7. TIPS TO IMPROVE
- Title: "Tips to Improve Your Score" — Space Grotesk, 24px
- 3-5 subject-specific tips
- Each tip: icon + title + description

8. FAQ (2-3 subject-specific questions)
- Accordion style, same as homepage

9. RELATED SUBJECTS
- 3-4 cards of same-category subjects, linking to other subject pages

Footer: Reuse homepage footer exactly.

Design constraints:
- This is a tool page, not a content page. The calculator must be the most prominent element.
- Score result (1-5) must be the visual focal point.
- All numbers use JetBrains Mono.
- Mobile: tool interface stacks vertically, sliders full width.
- NOT a generic SaaS template.
- No purple-blue gradient on white background.
- No emoji icons; use Lucide or custom SVG icons.
- Make the design look like a real brand, not AI-generated.

Device: DESKTOP version (1440px). For mobile, stack all sections vertically, sliders full width, touch targets 44x44px.