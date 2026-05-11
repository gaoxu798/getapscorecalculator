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
│   ├── seo-page-template.md
│   └── assets-prompts.md
├── screens/
│   ├── landing-desktop.png (待生成)
│   └── landing-mobile.png (待生成)
├── html/
│   ├── landing-desktop.html
│   └── landing-mobile.html
└── assets/
    ├── icon.svg
    ├── og-image.jpg
    └── hero-image.jpg
```

### Prompt
- `prompts/landing-desktop.md` — 首页 Desktop 完整 Prompt
- `prompts/landing-mobile.md` — 首页 Mobile 完整 Prompt
- `prompts/seo-page-template.md` — 38 科目独立页复用模板
- `prompts/assets-prompts.md` — Logo / OG / Hero 图生成 Prompt

### HTML 原型
- `html/landing-desktop.html` — Desktop 首页 HTML（含 Tailwind + 字体配置）
- `html/landing-mobile.html` — Mobile 首页 HTML（含 Tailwind + 字体配置）

### 品牌资产
- `assets/icon.svg` — Logo（青绿色计算器网格+上升斜线）
- `assets/og-image.jpg` — OG 社交预览图
- `assets/hero-image.jpg` — Hero 背景图

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
- [ ] Logo SVG（已生成，见 assets/icon.svg）
- [ ] OG Image（已生成，见 assets/og-image.jpg）
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
- [x] Desktop + Mobile HTML 都完成
- [x] 375px 无横向滚动（Mobile 规则已指定）
- [x] 没有紫蓝渐变 + 白背景模板感（深色主题 + 青绿/琥珀金）
- [x] 没有 emoji icon（使用 Material Symbols / Lucide）
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
