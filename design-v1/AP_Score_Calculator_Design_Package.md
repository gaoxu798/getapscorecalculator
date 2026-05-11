# AP Score Calculator — 站点设计交付包

## 1. 竞品视觉分析

### 竞品 1：Fiveable (https://fiveable.me)

| 维度 | 分析 |
|------|------|
| **主色调** | 暖橙色 `#FF6B35` + 白色背景 |
| **深色/浅色** | 浅色为主，局部深色区块 |
| **字体** | 无衬线，偏圆润友好 |
| **Hero 策略** | 大标题 + 副标题 + 学生头像拼贴 + 评分展示，无直接工具入口 |
| **布局** | 居中为主，科目列表用网格卡片 |
| **CTA 文案** | "start studying →" |
| **整体感觉** | 教育平台感，信息密度高，社区氛围浓，像"学校" |
| **可借鉴** | 科目分类展示、信任数据展示（96%通过率） |
| **必须避开** | 信息过载、emoji 图标（👊🏿🗳️🇪🇺）、需要注册才能使用核心功能 |

### 竞品 2：Marco Learning (https://marcolearning.com)

| 维度 | 分析 |
|------|------|
| **主色调** | 深蓝色 + 白色 |
| **深色/浅色** | 浅色为主 |
| **字体** | 传统衬线/无衬线混合 |
| **Hero 策略** | 大标题 + 配图，偏传统教育网站 |
| **布局** | 分栏布局，偏保守 |
| **CTA 文案** | "View Shopping Cart" |
| **整体感觉** | 传统教育机构网站，偏严肃、课程导向 |
| **可借鉴** | 无（过于传统） |
| **必须避开** | 老气、课程感过重、Cookie Banner 干扰首屏 |

### 竞品 3：GradGPT (https://www.gradgpt.com)

| 维度 | 分析 |
|------|------|
| **主色调** | 紫色渐变 + 白色背景 |
| **深色/浅色** | 浅色为主，Hero 有紫色渐变背景 |
| **字体** | 无衬线，偏现代 |
| **Hero 策略** | 居中标题 + 两个大 CTA 按钮（"Practice AP test" / "Review Essays"） |
| **布局** | 居中对称，标准 SaaS 模板感 |
| **CTA 文案** | "Practice AP test" / "Review Essays" |
| **整体感觉** | 典型 AI SaaS 模板感，紫蓝渐变 + 白背景，通用科技感 |
| **可借鉴** | 无 |
| **必须避开** | 紫蓝渐变、模板感、对称居中布局 |

### 竞品总结

| 竞品 | 主色 | 调性 | 问题 |
|------|------|------|------|
| Fiveable | 暖橙 | 教育社区 | 信息过载、emoji、需注册 |
| Marco Learning | 深蓝 | 传统教育 | 老气、保守 |
| GradGPT | 紫渐变 | 通用 SaaS | 模板感、紫蓝渐变 |

**关键洞察**：
- 所有竞品都是 **浅色背景**
- 所有竞品都有 **教育/课程感**，而非 **工具感**
- 没有竞品把 **计分器作为首屏核心入口**
- 没有竞品走 **深色主题**
- 没有竞品走 **工业/精确感**

**设计机会**：深色主题 + 精确工具感 + 首屏嵌入工具 = 差异化明显

---

## 2. 反 AI 味约束表

| AI 默认做法 | 本方案做法 | 理由 |
|---|---|---|
| Inter / Roboto 字体 | **Space Grotesk** (Display) + **DM Sans** (Body) | 独特、现代、有性格 |
| 紫蓝渐变 + 白背景 | **深色主题** `#0A0E1A` + **琥珀金** `#FFB800` 强调 | 竞品全是浅色，深色突围 |
| 对称居中 3 列 | **非对称布局** / **Split 布局** / **Bento Grid** | 工具感 > 模板感 |
| emoji 做 icon | **Lucide 图标** / 自定义 SVG | 专业、无年龄感 |
| 统一 border-radius | **有尖有圆** — 按钮圆角、卡片微圆角、数据展示直角 | 层次感 |
| 白灰交替 section | **深色统一** + 色块区分 + 细线分隔 | 沉浸感 |
| "Revolutionize" 标题 | **"Know Your AP Score Before the Exam"** — 具体、有动作感 | 说人话 |
| 假评价 / 假数据 | **冷启动信任** — "No signup required · Runs in your browser · Based on official 2026 rubrics" | 真实可信 |

### 禁词清单

```
❌ Revolutionize / Empower / Seamless / Cutting-edge / Next-generation
❌ Unlock your potential / Transform your learning / Supercharge your prep
❌ AI-powered / Machine learning / Smart algorithm
❌ Best / Official / Guaranteed / 100% accurate
```

### 必须出现的设计元素

```
✅ 首屏嵌入科目选择器（不是"Learn More"按钮）
✅ 分数展示用等宽字体（JetBrains Mono）
✅ 实时计算反馈（sliders 联动数字）
✅ AP® 正确标注商标符号
✅ Disclaimer 可见（页脚 + 结果页）
✅ 移动端 sliders 可用（触摸友好）
```

---

## 3. 三个设计方向

### 方向 A：Industrial Precision（工业精确感）⭐ 推荐

| 维度 | 设定 |
|------|------|
| **调性** | Industrial — 精确、冷静、工具感、无情绪干扰 |
| **背景** | `#0A0E1A` 深蓝黑 |
| **主色** | `#00D4AA` 青绿色（数据、分数、成功） |
| **强调色** | `#FFB800` 琥珀金（CTA、高亮、警告） |
| **文字** | `#E8ECF0` 浅灰白（主文字）/ `#8B95A5` 中灰（次级） |
| **Display 字体** | Space Grotesk |
| **Body 字体** | DM Sans |
| **数字字体** | JetBrains Mono（等宽，分数对齐） |
| **布局** | Split Hero（左文字 + 右工具预览）/ Bento Features |
| **感觉** | 像精密仪器、像专业工具、不像教育网站 |

**适合理由**：
- 竞品都是"教育感"，你做"工具感" = 差异化
- 深色主题在长时间使用时减少眼疲劳（学生刷题）
- 青绿 + 琥珀金 = 数据可视化常用配色，暗示"准确"
- 工业感 = 可信赖、无废话、专注功能

---

### 方向 B：Japanese Minimal（日式极简）

| 维度 | 设定 |
|------|------|
| **调性** | Japanese Minimal — 留白、克制、清晰 |
| **背景** | `#FAFAF8` 暖白 |
| **主色** | `#1A1A1A` 炭黑 |
| **强调色** | `#E85D4E` 朱红（日本传统色，用于 CTA） |
| **文字** | `#1A1A1A` / `#6B6B6B` |
| **Display 字体** | Sora |
| **Body 字体** | Outfit |
| **数字字体** | JetBrains Mono |
| **布局** | 大量留白、非对称、细线分隔 |
| **感觉** | 像 MUJI、像日本设计网站、极度克制 |

**适合理由**：
- 极简 = 专注，没有干扰，适合计算工具
- 暖白背景比纯白更柔和，长时间使用舒适
- 朱红 CTA 在暖白背景上极其醒目
- 与竞品暖橙/紫蓝形成鲜明对比

---

### 方向 C：Dark Editorial（深色编辑感）

| 维度 | 设定 |
|------|------|
| **调性** | Dark Editorial — 杂志感、内容感、高端 |
| **背景** | `#0F0F0F` 纯黑 |
| **主色** | `#FFFFFF` 纯白 |
| **强调色** | `#FF6B00` 亮橙（编辑高亮） |
| **文字** | `#FFFFFF` / `#A0A0A0` |
| **Display 字体** | Clash Display |
| **Body 字体** | Source Sans 3 |
| **数字字体** | Space Mono |
| **布局** | 杂志排版、大标题、图文混排 |
| **感觉** | 像 The New York Times 数字版、像高端杂志 |

**适合理由**：
- 编辑感 = 权威、可信、内容质量高
- 适合 SEO 内容页面（38 科目独立页需要大量文字）
- 大标题 + 清晰层级 = 扫描阅读友好
- 但可能过于"内容站"，弱化工具属性

---

### 方向选择建议

| 场景 | 推荐方向 |
|------|---------|
| **首版 MVP** | **方向 A（Industrial Precision）** — 工具属性最强，差异化最大 |
| **如果要做内容品牌** | 方向 C（Dark Editorial） |
| **如果追求极致简洁** | 方向 B（Japanese Minimal） |

**最终推荐：方向 A — Industrial Precision**

理由：
1. 竞品全是浅色教育感 → 深色工具感 = 视觉突围
2. 首屏嵌入工具 → 工业感的精密感强化"准确"定位
3. 学生群体对"酷"敏感 → 深色 + 青绿比暖橙更"酷"
4. 数字展示（分数 1-5）→ 等宽字体 + 深色背景 = 数据仪表盘感

---

## 4. 首页页面生成 Prompt

### Desktop 版本

```text
Design a dark-theme landing page for AP Score Calculator — a free online AP exam score predictor for all 38 subjects.

Target users:
US high school students (grades 10-12) preparing for AP exams. Secondary: parents and counselors. These users are stressed, time-constrained, and need instant answers.

Design vibe:
Industrial / Precision / Tool-like. Keywords: accurate, fast, no-nonsense, trustworthy, developer-grade.

Typography:
Use Space Grotesk for headings.
Use DM Sans for body text.
Use JetBrains Mono for all numbers, scores, and data display (tabular figures).
Do not use Inter, Roboto, Arial, or system default fonts.

Color scheme:
Background: #0A0E1A
Surface: #111827 (cards, elevated areas)
Primary accent: #00D4AA (success, scores, active states)
CTA / highlight: #FFB800 (buttons, warnings, attention)
Text primary: #E8ECF0
Text secondary: #8B95A5
Border: #1E293B

Page structure:

1. NAVIGATION
- Fixed top bar, height 64px
- Logo left: "AP Score" in Space Grotesk bold + "Calculator" in DM Sans regular, with a small geometric icon (square with diagonal cut) in #00D4AA
- Nav links center: Subjects, How It Works, FAQ
- CTA right: "Calculate My Score" — pill button, #FFB800 background, #0A0E1A text, 44px height
- Background: #0A0E1A with 1px bottom border #1E293B
- On scroll: add backdrop-blur

2. HERO SECTION
- Layout: Split — Left 55% text, Right 45% embedded tool preview
- Left:
  - Headline: "Know Your AP Score Before the Exam" — Space Grotesk, 48px, #E8ECF0
  - Subheadline: "Free score calculator for all 38 AP subjects. Enter your practice results. Get an instant 1-5 prediction based on official 2026 scoring rubrics." — DM Sans, 18px, #8B95A5, max-width 480px
  - Trust line: "No signup required · Runs entirely in your browser" — JetBrains Mono, 12px, #00D4AA
  - Primary CTA: "Calculate My AP Score — Free" — large pill button, #FFB800, 52px height
  - Secondary CTA: "See How It Works" — text link with arrow, #E8ECF0
- Right:
  - Embedded tool preview card: #111827 background, 1px border #1E293B, rounded-xl
  - Shows: "AP Calculus AB" dropdown at top
  - Below: Section labels "MCQ Part A" / "MCQ Part B" / "FRQ" with slider inputs
  - Real-time result: "Predicted Score: 4" in large JetBrains Mono, #00D4AA
  - Small sparkline chart showing score distribution
  - This is a preview/mock of the actual tool interface
- Background: subtle grid pattern (1px lines, #1E293B, 40px grid) fading out at edges

3. POPULAR SUBJECTS
- Section title: "38 Subjects. One Calculator." — Space Grotesk, 32px
- Subtitle: "From Calculus to Art History — every AP exam covered." — DM Sans, 16px, #8B95A5
- Grid: 4 columns on desktop, bento-style cards
- Each card:
  - Subject icon (geometric, monochrome, #00D4AA)
  - Subject name: "AP Calculus AB" — Space Grotesk, 16px, #E8ECF0
  - Short tag: "Real-time prediction" — DM Sans, 12px, #8B95A5
  - Hover: border changes to #00D4AA, slight lift
- Cards background: #111827, border: #1E293B, radius: 12px
- Show 8 popular subjects, then "View All 38 Subjects →" link

4. HOW IT WORKS
- Section title: "3 Steps to Your Score" — Space Grotesk, 32px
- 3-step horizontal timeline:
  - Step 1: "Pick Your Subject" — icon: grid / DM Sans 14px / #8B95A5
  - Step 2: "Enter Your Scores" — icon: sliders / DM Sans 14px / #8B95A5
  - Step 3: "See Your Prediction" — icon: score badge / DM Sans 14px / #8B95A5
- Connecting line between steps: 1px, #1E293B, active step uses #00D4AA
- Each step: number in JetBrains Mono (01, 02, 03), title in Space Grotesk, description in DM Sans

5. WHY STUDENTS TRUST US
- Section title: "Built for Accuracy" — Space Grotesk, 32px
- 3 benefit cards in a row:
  - Card 1: "Official Rubrics" — "Based on the latest College Board Course & Exam Descriptions, updated yearly." — icon: document/check
  - Card 2: "Real-Time Calculation" — "No page reloads. See your predicted score update instantly as you adjust your inputs." — icon: lightning
  - Card 3: "Privacy First" — "Your practice scores never leave your browser. No account needed. No data collection." — icon: shield
- Cards: #111827 background, left border 3px #00D4AA, padding 24px

6. PRICING
- Section title: "Simple Pricing" — Space Grotesk, 32px
- 3 plans side by side:
  - Free: "$0" — "All 38 subjects · Real-time prediction · Score distribution · Mobile-friendly" — CTA: "Start Calculating"
  - Pro Monthly: "$4.99/month" — "Everything in Free · Save calculation history · Weakness breakdown · Study tips · No ads" — CTA: "Upgrade to Pro"
  - Pro Annual: "$39/year" — "Everything in Pro · 35% savings · All future updates" — CTA: "Save with Annual" — highlighted with #FFB800 border
- Price numbers in JetBrains Mono, large
- "No credit card required for Free" — trust line below

7. FAQ
- Section title: "Questions?" — Space Grotesk, 32px
- Accordion items (max 5 visible):
  - "Is this free to use?" / "Is this an official College Board tool?" / "How accurate is the prediction?" / "Do I need an account?" / "How is this different from Fiveable?"
- Closed state: #111827 background, #E8ECF0 text, plus icon right
- Open state: expands, answer in DM Sans 14px #8B95A5
- Border: 1px #1E293B between items

8. FINAL CTA
- Background: gradient from #0A0E1A to #111827
- Large headline: "You already put in the study hours. The hard part is knowing if they're working." — Space Grotesk, 36px, #E8ECF0, max-width 600px, centered
- Subhead: "AP Score Calculator shows you — in 30 seconds, for free." — DM Sans, 18px, #8B95A5
- CTA: "Calculate My AP Score — Free" — #FFB800, large pill, 56px height
- Trust line: "No signup · 38 subjects · Works on mobile" — JetBrains Mono, 12px, #8B95A5

9. FOOTER
- Background: #080C14 (slightly darker than page)
- 4 columns:
  - Brand: Logo + "Free AP score calculator for all 38 subjects."
  - Product: Subjects, How It Works, Pricing, FAQ
  - Legal: Privacy Policy, Terms of Service, Cookie Policy, Refund Policy
  - Contact: jordivh9@gmail.com
- Bottom bar:
  - "© 2026 AP Score Calculator. All rights reserved."
  - "AP® and Advanced Placement® are registered trademarks of College Board. This site is not affiliated with, endorsed by, or sponsored by College Board." — JetBrains Mono, 11px, #5A6270
- All links: #8B95A5, hover #E8ECF0

Design constraints:
- NOT a generic SaaS template.
- No purple-blue gradient on white background.
- No centered hero with generic 3-column features.
- No emoji icons; use Lucide or custom SVG icons.
- Use asymmetric layout where appropriate.
- CTA must be the most visible element above the fold.
- Keep strong information hierarchy.
- Make the design look like a real brand, not AI-generated.
- All numbers (prices, scores, percentages) use JetBrains Mono with tabular figures.
- Score predictions (1-5) displayed in large JetBrains Mono with #00D4AA color.

Device: DESKTOP version. Width: 1440px.
```

### Mobile 版本

```text
Design a dark-theme mobile landing page for AP Score Calculator.

All colors, fonts, and design tokens identical to the desktop version above.

Mobile-specific rules:
- Single column layout throughout
- Navigation: hamburger menu, logo left, CTA right (small pill)
- Hero: stacked — headline (32px, max 2 lines) → subheadline → CTA button (full width, 52px height) → then tool preview card below
- Popular Subjects: 2-column grid (not 4)
- How It Works: vertical stack (not horizontal), each step full width with number on left
- Trust cards: single column stack
- Pricing: horizontal scroll or stacked cards
- FAQ: full width accordion
- Final CTA: stacked, headline 28px max
- Touch targets: minimum 44x44px
- No horizontal overflow at 375px width
- Tool preview card: simplified, shows only 1-2 sliders and score result
```

---

## 5. Logo / OG / Hero 图提示词

### Logo SVG

```text
Design an SVG vector logo icon for AP Score Calculator.

Requirements:
- Output raw SVG code, not an image
- Single color: #00D4AA
- viewBox="0 0 64 64"
- Geometric design, built from squares and diagonal cuts
- Concept: A square calculator/display with a diagonal score line trending upward, suggesting prediction/accuracy
- 16px size must still be recognizable
- Only one memorable element
- No gradients, no shadows, no 3D
- The icon should feel precise, mathematical, tool-like
```

### OG Image (1200x630)

```text
Generate a 1200x630 social preview image for AP Score Calculator.

Background: #0A0E1A (dark blue-black)
Left side: Bold headline "Know Your AP Score" in Space Grotesk, #E8ECF0, 48px equivalent
Below: "Before the Exam — 38 Subjects, Free" in DM Sans, #8B95A5, 24px equivalent
Right side: A stylized score display showing "4" in JetBrains Mono, #00D4AA, large, with a subtle slider interface below it
Bottom-left: "AP Score Calculator" in #00D4AA, small
Style: Industrial, precise, dark theme, premium, clean, not template-looking
No tiny text. No fake UI details. No gradients.
```

### Hero 图（可选，如果不用工具预览）

```text
Generate a hero image for AP Score Calculator landing page.

Style: Industrial / Precision / Dark
Content: An abstract visualization of score prediction — floating geometric shapes (squares, lines) forming a path from low to high, with numbers 1-5 along the path. A subtle grid background.
Color palette: #00D4AA (accent lines) + #0A0E1A (background) + #FFB800 (highlights)
Aspect ratio: 16:9
No text in the image.
Minimal, mathematical, no photorealistic elements.
```

**优先级说明**：
1. **首选**：Hero 区域直接使用「嵌入式工具预览」（真实 UI 截图/ mock）
2. **次选**：上述抽象 Hero 图
3. **避免**：学生照片、书本照片、课堂场景 — 这些会强化"教育网站"感，削弱"工具"定位

---

## 6. HANDOFF.md

```markdown
# AP Score Calculator — Design Handoff

状态：可开发
日期：2026-05-10
负责人：灵绘

---

## 1. 项目概览

产品名：AP Score Calculator
域名：getapscorecalculator.xyz（待最终确认）
一句话定位：最准确、最易用的 AP 考试分数预测工具，帮学生在备考期间实时掌握自己的水平。
目标用户：美高 10-12 年级备考学生（主力），家长/辅导员（次要）
设计调性：Industrial Precision — 精确、冷静、工具感、深色主题

---

## 2. 交付文件

```text
deliverables/ap-score-calculator/
├── prompts/
│   ├── landing-desktop.md
│   ├── landing-mobile.md
│   └── seo-page-template.md
├── screens/
│   ├── landing-desktop.png (待生成)
│   └── landing-mobile.png (待生成)
├── html/
│   ├── landing-desktop.html (待开发)
│   └── landing-mobile.html (待开发)
└── assets/
    ├── icon.svg (待生成)
    ├── wordmark.svg (待生成)
    ├── favicon.svg (待生成)
    ├── og-image.png (待生成)
    └── hero-prompt.md
```

### Prompt
- `prompts/landing-desktop.md` — 首页 Desktop 完整 Prompt（见上方第 4 节）
- `prompts/landing-mobile.md` — 首页 Mobile 完整 Prompt（见上方第 4 节）
- `prompts/seo-page-template.md` — 38 科目独立页复用模板（见下方）

### 品牌资产
- `assets/icon.svg` — Logo 生成 Prompt（见上方第 5 节）
- `assets/og-image.png` — OG 图生成 Prompt（见上方第 5 节）
- `assets/hero-prompt.md` — Hero 图备用 Prompt（见上方第 5 节）

---

## 3. Design Tokens

| Token | Value | Usage |
|---|---|---|
| Background | `#0A0E1A` | 页面底色 |
| Surface | `#111827` | 卡片、 elevated 区域、工具面板 |
| Border | `#1E293B` | 分割线、卡片边框、输入框边框 |
| Primary Accent | `#00D4AA` | 品牌色、分数显示、成功状态、激活态 |
| CTA / Highlight | `#FFB800` | 按钮、警告、注意力吸引、推荐 Plan 边框 |
| Text Primary | `#E8ECF0` | 标题、正文 |
| Text Secondary | `#8B95A5` | 副标题、描述、标签 |
| Text Muted | `#5A6270` | 页脚小字、免责声明 |
| Font Display | Space Grotesk | 所有标题 (H1-H6) |
| Font Body | DM Sans | 正文、描述、按钮文字 |
| Font Mono | JetBrains Mono | 数字、分数、价格、代码、标签 |
| Border Radius - Button | 9999px (full pill) | 所有 CTA 按钮 |
| Border Radius - Card | 12px | 卡片、面板 |
| Border Radius - Input | 8px | 输入框、下拉框 |
| Grid Pattern | 1px #1E293B, 40px | Hero 背景网格（边缘淡出） |

### 字体加载
```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

### Tailwind 扩展配置
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#0A0E1A',
        surface: '#111827',
        border: '#1E293B',
        accent: '#00D4AA',
        cta: '#FFB800',
        'text-primary': '#E8ECF0',
        'text-secondary': '#8B95A5',
        'text-muted': '#5A6270',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
}
```

---

## 4. 页面 IA

### 首页 (`/`)

1. **Navigation** — 固定顶栏，Logo + 链接 + CTA
2. **Hero** — Split 布局，左文案 + 右工具预览，首屏必须可见科目选择器
3. **Popular Subjects** — 8 张科目卡片，4 列 Bento Grid
4. **How It Works** — 3 步水平时间线
5. **Why Students Trust Us** — 3 张信任卡片（左边框强调）
6. **Pricing** — 3 列定价卡片，Annual 高亮
7. **FAQ** — 手风琴，5 个问题
8. **Final CTA** — 大标题 + CTA，渐变背景
9. **Footer** — 4 列 + 免责声明

### SEO 矩阵页模板 (`/ap-[subject]`)

每门科目独立页面，复用以下结构：

```text
1. Breadcrumb: Home > AP [Subject] Score Calculator
2. H1: AP [Subject] Score Calculator 2026
3. Subhead: Based on official College Board scoring guidelines
4. TOOL INTERFACE (核心)
   - Section I: Multiple Choice (sliders)
   - Section II: Free Response (sliders)
   - REAL-TIME RESULT:
     - Composite Score: XX/100 (JetBrains Mono, large)
     - Predicted AP Score: X (JetBrains Mono, 64px, #00D4AA)
     - Score distribution sparkline
     - "You scored higher than XX% of students"
5. HOW SCORING WORKS（该科目评分解释）
6. SCORE MEANING（3=passing, 4/5=good for credit）
7. TIPS TO IMPROVE（3-5 条针对性建议）
8. FAQ（该科目专属 FAQ，2-3 个）
9. RELATED SUBJECTS（同分类其他科目）
```

**复用规则**：
- 配色、字体、导航、Footer 完全复用首页
- 每页只改：headline、subheadline、tool sections（根据科目调整 sliders）、scoring explanation、tips、FAQ
- 38 个页面使用同一套组件，只换数据

### 其他页面

- `/subjects` — 科目列表页（38 门分类展示）
- `/faq` — 完整 FAQ 页（首页 5 个 + 扩展）
- `/how-it-works` — 计分原理解释页
- `/privacy` — Privacy Policy（已有文案）
- `/terms` — Terms of Service（已有文案）
- `/cookie-policy` — Cookie Policy（已有文案）
- `/refund` — Refund Policy（已有文案）

---

## 5. 开发注意事项

### 必须保留
- ✅ 首屏必须保留 CTA 按钮（"Calculate My AP Score — Free"）
- ✅ 首屏右侧必须可见工具预览/科目选择器
- ✅ 所有数字（分数、价格、百分比）使用 JetBrains Mono + tabular figures
- ✅ AP® 商标必须带 ® 符号，页脚必须有归属声明
- ✅ Disclaimer 必须在工具结果页和页脚可见
- ✅ 移动端 sliders 必须触摸友好（thumb 最小 24px）

### 禁止替换
- ❌ 不要把 Hero 改成居中模板布局
- ❌ 不要替换回 Inter / Roboto / Arial
- ❌ 不要使用 emoji icon（用 Lucide 或自定义 SVG）
- ❌ 不要使用紫蓝渐变 + 白背景
- ❌ 不要添加假评价/假用户数据

### 移动端要求
- 375px 宽度无横向滚动
- 标题最多 2 行
- 卡片垂直堆叠
- 触摸目标 ≥ 44×44px
- 工具预览简化（1-2 个 sliders + 分数结果）

### Pricing 高亮 Plan
- **Pro Annual ($39/year)** 为推荐 Plan
- 高亮方式：#FFB800 边框（2px）、"Best Value" 标签（#FFB800 背景，#0A0E1A 文字）

### 合规必须展示
- 页脚必须有 AP® 商标归属声明
- 工具结果页必须有 Disclaimer："This is an estimate based on official rubrics. Your actual score is determined by College Board."
- Privacy Policy / Terms / Cookie Policy / Refund Policy 链接必须在页脚
- 如使用 GA4 / Sentry，需 Cookie Consent Banner（欧盟/英国）

### 禁用表达
- "Official College Board tool"
- "Guaranteed score"
- "100% accurate"
- "Best AP calculator"
- "Revolutionize / Empower / Seamless"

---

## 6. 需要替换 / 补充的内容

- [ ] 产品真实截图（工具界面实际运行图）
- [ ] Logo SVG（使用上方 Prompt 生成）
- [ ] OG Image（使用上方 Prompt 生成）
- [ ] Favicon（Logo 的 32x32 版本）
- [ ] 38 门科目的具体 scoring data（JSON 文件）
- [ ] 域名最终确认（替换所有占位域名）
- [ ] Google Analytics 4 代码
- [ ] Sentry DSN
- [ ] Stripe 支付链接（Pro 上线时）

---

## 7. 终检结果

- [x] 5 秒内能看懂产品（"Know Your AP Score Before the Exam" + 工具预览）
- [x] 首屏 CTA 可见（"Calculate My AP Score — Free" 按钮）
- [x] Desktop + Mobile Prompt 都完成
- [x] 375px 无横向滚动（Mobile 规则已指定）
- [x] 没有紫蓝渐变 + 白背景模板感（深色主题 + 青绿/琥珀金）
- [x] 没有 emoji icon（使用 Lucide / 自定义 SVG）
- [x] 没有假评价（使用冷启动信任数据）
- [x] 按钮有明确文案（不是 "Learn More"）
- [x] 占位图已标记（Hero 优先用工具预览，备用抽象图）

---

## 8. 未完成项 / 风险

| 项目 | 状态 | 风险 |
|------|------|------|
| 真实产品截图 | 待开发后截取 | 首版可用 mock 数据替代 |
| 38 科目 scoring JSON | 待录入 | 每年 5 月前需更新 |
| Pro 功能开发 | Phase 2 | 首版仅展示 Pricing 区，支付功能后续接入 |
| 域名确认 | 待确认 | 当前使用 getapscorecalculator.xyz |
| 用户数据积累 | 冷启动 | Social Proof 区使用功能信任点替代 |

---

*Design by 灵绘 | 2026-05-10*
*基于 site-design-student Skill 标准流程*
```

---

## 附录：SEO 科目页 Prompt 模板

```text
Design a dark-theme tool page for AP [Subject] Score Calculator.

Reuse all design tokens from the main landing page (colors, fonts, spacing).

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
  - ... (根据科目调整数量)
- REAL-TIME RESULT (sticky or below inputs):
  - "Composite Score: XX/[max]" — JetBrains Mono, 24px, #E8ECF0
  - "Predicted AP Score: X" — JetBrains Mono, 64px, #00D4AA (large, prominent)
  - Mini sparkline showing score distribution
  - "You scored higher than XX% of students" — DM Sans, 14px, #8B95A5
- All sliders: #1E293B track, #00D4AA fill, #FFB800 thumb (24px, touch-friendly)

5. HOW SCORING WORKS
- Title: "How AP [Subject] Is Scored" — Space Grotesk, 24px
- Content: [根据科目填写评分机制说明]
- Use bullet points, DM Sans 14px

6. SCORE MEANING
- Title: "What Your Score Means" — Space Grotesk, 24px
- 1-2: "Not passing" / 3: "Passing — may earn college credit" / 4-5: "Strong — likely earns credit"
- Display as horizontal bar: 1-2 (red) | 3 (yellow) | 4-5 (green)

7. TIPS TO IMPROVE
- Title: "Tips to Improve Your Score" — Space Grotesk, 24px
- 3-5 条针对性建议，根据科目调整
- Each tip: icon + title + description

8. FAQ (2-3 个科目专属问题)
- Accordion style, same as homepage

9. RELATED SUBJECTS
- 3-4 张同分类科目卡片，链接到其他科目页

Footer: 完全复用首页 Footer

Design constraints:
- This is a tool page, not a content page. The calculator must be the most prominent element.
- Score result (1-5) must be the visual focal point.
- All numbers use JetBrains Mono.
- Mobile: tool interface stacks vertically, sliders full width.
```

---

*完整设计交付包生成完毕。*
*下一步：将 Desktop Prompt 复制到 Stitch / v0 / Lovable 生成首页设计稿。*
