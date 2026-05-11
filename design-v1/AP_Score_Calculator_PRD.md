# AP Score Calculator — 产品需求文档 (PRD)

## 0. 结论先行

| 项目 | 结论 |
|------|------|
| **值不值得做** | ✅ **值得做**。月搜索量 100 万，搜索意图明确（工具型），SERP 有独立站空间，技术实现成本低。 |
| **为什么做** | AP 考试是美高学生刚需，每年有 500 万+ 考生；计分器是备考链条中高频使用的前置工具；现有竞品功能分散、体验参差，有单点切入机会。 |
| **一句话定位** | 最准确、最易用的 AP 考试分数预测工具，帮学生在备考期间实时掌握自己的水平。 |
| **首版做什么** | 38 门 AP 科目的在线计分器 + 分数解释 + 备考建议，免费使用，SEO 引流。 |
| **明确不做什么** | 不做完整题库、不做课程教学、不做 Essay 批改、不做 College Admission 咨询。 |

---

## 1. 市场概述

### 1.1 关键词数据

| 指标 | 数据 | 备注 |
|------|------|------|
| 目标关键词 | `ap score calculator` | 主词 |
| 月搜索量 | 100 万 | 用户提供的 Ahrefs/SEMrush 数据 |
| CPC | 待验证 | 建议用 Google Keyword Planner 核实 |
| KD | 待验证 | 中等偏上，因大站参与，但工具页有机会 |
| 长尾词池 | `ap calculus score calculator` / `ap biology score calculator` / `apush score calculator` 等 38+ 科目 | 每门科目都有独立搜索量 |

### 1.2 趋势判断

- **长期需求**：AP 考试由 College Board 主办，已有 70 年历史，每年 5 月固定考试，需求稳定且可预测。
- **季节性**：每年 1-5 月为旺季（备考期），5-7 月为次旺季（等分出分焦虑期），8-12 月为淡季。
- **增长趋势**：AP 考试参加人数逐年增长，2024 年超过 500 万人次参加考试。

### 1.3 机会判断

| 判定问题 | 结论 |
|---------|------|
| 长期需求还是短期热点？ | ✅ 长期刚需，每年循环 |
| SERP 里有独立小站能排进去吗？ | ✅ Fiveable 作为教育内容站，其 Calculator 子页能排进前 10，说明独立工具站有机会 |
| 用户有明确付费场景吗？ | ⚠️ 工具本身免费更利于 SEO，但可向上销售备考资料/会员 |
| 首版能不能低成本实现？ | ✅ 纯前端计算器，无后端，开发成本极低 |

**判定结果：4 个强信号 → 继续做 PRD**

---

## 2. SERP 与竞品分析

### 2.1 SERP 观察

**目标词**：`ap score calculator`
**搜索日期**：2026-05-09（基于竞品反推）

| SERP 类型 | 预估数量 | 代表站点 |
|-----------|---------|---------|
| 工具页（在线计算器） | 4-5 个 | Fiveable, Albert.io, Marco Learning |
| 信息页（解释 AP 评分） | 2-3 个 | College Board 官网, PrepScholar |
| 教育平台子页 | 2-3 个 | Test Ninjas, Khan Academy |
| 大站 | 3-4 个 | College Board, PrepScholar, Fiveable |
| 独立小站/工具站 | 1-2 个 | 有机会切入 |

**搜索意图判断**：**工具型 + 信息型混合**
- 用户首要意图：输入自己的模拟考/练习成绩，快速得到预测的 AP 分数（1-5）
- 次要意图：了解 AP 评分标准、各科权重、历年分数线

**产品方向**：首屏必须可直接使用工具，同时提供评分解释和备考建议内容。

### 2.2 Top 3 竞品深度分析

#### 竞品 1：Fiveable (https://fiveable.me)

| 维度 | 分析 |
|------|------|
| **定位** | AP 全科备考平台，Score Calculator 是其工具矩阵的一部分 |
| **流量** | 1M+ 用户，96% 通过率，7 年品牌 |
| **Calculator 功能** | 覆盖 38 门 AP 科目， sliders 输入各 section 得分，实时预测 1-5 分 |
| **内容策略** | 每门科目有独立 Calculator 页面，大量 SEO 内容（FAQ、备考策略、历年分数分布） |
| **优势** | 品牌信任度高、数据准确（基于 2025 Exam Scoring Guidelines）、覆盖全科目、有社区氛围 |
| **劣势** | Calculator 只是其庞大平台的一个功能，不是核心入口；页面信息密度过高，首屏不够聚焦；需要注册/登录才能使用部分功能 |
| **定价** | Freemium，免费使用基础 Calculator，高级内容需订阅 |

#### 竞品 2：Test Ninjas (https://test-ninjas.com)

| 维度 | 分析 |
|------|------|
| **定位** | 全考试备考平台（SAT/ACT/AP/GRE/LSAT），AP 只是 1/6 业务线 |
| **流量** | 90,000 学生，2M+ 题目完成 |
| **AP 相关功能** | AP Prep 是子产品，主打 MC + FRQ 练习，非专门 Calculator |
| **优势** | 多考试联动、AI 工具、品牌高端感、有实际录取结果背书 |
| **劣势** | AP Calculator 不是其核心功能，SEO 上不会重点优化 `ap score calculator` 这个词；定价较高 |
| **定价** | 付费订阅制，$XX/月起 |

#### 竞品 3：GradGPT (https://www.gradgpt.com)

| 维度 | 分析 |
|------|------|
| **定位** | College Essay 反馈 + AP 练习测试，AI 驱动 |
| **流量** | 相对较新，主打 AI Essay Coach |
| **AP 相关功能** | 有 "Practice AP test" 入口，但核心不是 Calculator |
| **优势** | AI 能力、Essay 批改差异化 |
| **劣势** | AP 不是主业，Calculator 功能弱或没有；品牌认知在 AP 领域低 |
| **定价** | Freemium |

### 2.3 三层竞品分级

| 层级 | 竞品 | 威胁程度 |
|------|------|---------|
| **Tier 1 — 直接竞品** | Fiveable AP Score Calculators, Albert.io, Marco Learning | 中-高 |
| **Tier 2 — 相邻方案** | 学生手动用 Excel/计算器算分、Reddit 上的分数对照表、ChatGPT 问分 | 中 |
| **Tier 3 — 现状/不做** | 学生不预测分数，直接等官方出分 | 低（说明需求存在） |

**关键洞察**：很多学生在 Reddit (r/APStudents) 和 Discord 上分享自制的分数对照表，说明 **Tier 3 市场巨大** —— 我们的机会是把"手动查表/问人"的用户变成工具站用户。

### 2.4 用户痛点证据（基于 Reddit/论坛常见帖）

- "How do I calculate my AP Bio score?" — 不知道各科权重
- "If I got 35/60 on MCQ and 6/10 on FRQ, what score is that?" — 不会换算复合分
- "Are the score cutoffs the same every year?" — 对分数线变化焦虑
- "Which section should I focus on to improve from 3 to 4?" — 需要备考策略建议

---

## 3. 目标用户

### 3.1 用户细分（3 类）

#### 用户 A：备考期学生（主力用户）

| 维度 | 描述 |
|------|------|
| **Who** | 美高 10-12 年级学生，正在准备 5 月 AP 考试 |
| **Pain** | 做完模拟题后不知道自己的成绩对应 AP 几分，无法判断备考效果 |
| **Current** | 去 Fiveable 或 Reddit 查对照表，手动计算 |
| **Trigger** | 刚完成一套模拟题/章节测试，想立刻知道预测分数 |
| **Hangout** | Reddit r/APStudents, Discord AP 服务器, TikTok #APexams |
| **Willingness** | 免费使用工具；对 $5-10/月的备考资料付费意愿中等 |

#### 用户 B：等分出分焦虑学生

| 维度 | 描述 |
|------|------|
| **Who** | 刚考完 AP，7 月出分前焦虑的学生 |
| **Pain** | 记不清自己答对了多少，想知道大概能拿几分 |
| **Current** | 在 Reddit 上发帖"estimate my score"，等别人回复 |
| **Trigger** | 考试刚结束，记忆还新鲜，想尽快估算 |
| **Hangout** | Reddit, Instagram, TikTok |
| **Willingness** | 免费；对付费内容意愿低（已考完） |

#### 用户 C：家长 / 辅导员

| 维度 | 描述 |
|------|------|
| **Who** | 想帮助孩子/学生评估 AP 成绩的家长或学校辅导员 |
| **Pain** | 不懂 AP 评分机制，无法给孩子准确反馈 |
| **Current** | 问老师、查 College Board 官网 |
| **Trigger** | 孩子做完模拟题，家长想参与评估 |
| **Hangout** | Facebook 家长群、学校邮件列表 |
| **Willingness** | 对能帮助孩子的工具付费意愿较高 |

### 3.2 主力用户选择

**主力用户 = 用户 A（备考期学生）**

理由：
- 数量最大：每年 500 万+ 考生
- 需求最刚：备考期间高频使用
- 最容易触达：SEO + Reddit/Discord 社区
- 有向上销售空间：备考资料、练习题、学习计划

---

## 4. 产品定位

### 4.1 定位语句

```
FOR 正在备考 AP 考试的美高学生
WHO 做完模拟题后不知道自己的成绩对应几分
AP Score Calculator IS A 在线分数预测工具
THAT 根据最新 College Board 评分标准，实时计算并预测 1-5 分
UNLIKE Fiveable（大而全的备考平台，Calculator 只是其中一个功能）
AP Score Calculator 专注只做计分器，更快、更准、更简洁
```

### 4.2 消息层级

| 层级 | 内容 | 要求 |
|------|------|------|
| **Headline** | "Know Your AP Score Before the Exam" | 3 秒内理解价值 |
| **Subhead** | "Enter your practice test results. Get an instant 1-5 score prediction based on official College Board rubrics." | 说清楚 how |
| **Benefits** | 1. 准确 — 基于最新评分标准<br>2. 快速 — 30 秒出结果<br>3. 清晰 — 知道弱项在哪 | 结果导向 |
| **Features** | 38 科目覆盖 / Sliders 输入 / 实时预测 / 历年分数线对比 / 备考建议 | 功能 → 好处 |
| **Proof** | "Used by 50,000+ students" / "Updated for 2026 exams" / 示例截图 | 建立信任 |

### 4.3 差异化策略

| 优先级 | 差异化点 | 说明 |
|--------|---------|------|
| 1 | **更聚焦的单点定位** | 不做备考平台，只做最好的 Calculator |
| 2 | **更简洁的体验** | 首屏就是工具，3 步完成，无注册无登录 |
| 3 | **更准确的数据** | 基于最新 Scoring Guidelines，每年更新 |
| 4 | **更强的 SEO 页面结构** | 每门科目独立页面，大量长尾词覆盖 |
| 5 | **更低摩擦** | 完全免费使用，无 paywall |

### 4.4 禁词清单

- ❌ "保证你拿 5 分" — 不能承诺结果
- ❌ "官方计分器" — 不是 College Board 官方产品
- ❌ "100% 准确" — 分数线每年微调，只能预测
- ❌ "替代老师" — 定位是辅助工具，不是教学

---

## 5. 功能规划

### 5.1 核心功能（P0 — 首版必须）

| 功能 | 说明 | 优先级 |
|------|------|--------|
| **科目选择器** | 38 门 AP 科目列表，点击选择 | P0 |
| **分数输入界面** | 根据科目显示各 Section（MCQ/FRQ）的 sliders/输入框 | P0 |
| **实时计分引擎** | 前端 JavaScript 计算复合分，映射到 1-5 预测 | P0 |
| **结果展示** | 显示预测分数 + 历年分数分布对比 + 同分率 | P0 |
| **分数解释** | 解释该分数意味着什么（大学学分/跳过课程） | P0 |
| **移动端适配** | 手机可用，50%+ 流量来自移动 | P0 |
| **SEO 基础** | 每科目独立 URL、meta tags、结构化数据 | P0 |

### 5.2 Landing Page & SEO 功能（P0）

| 功能 | 说明 |
|------|------|
| 首页 Hero + 工具入口 | 首屏内嵌最热门 5 门科目的快速入口 |
| 科目列表页 | /subjects — 所有 38 门科目导航 |
| 独立科目页 | /ap-calculus-ab, /ap-biology 等 — 每门科目的独立计分器 |
| FAQ 页 | 覆盖 Top 10 常见问题 |
| About / How It Works | 解释计分原理 |

### 5.3 付费 & 转化功能（P1 — 第二版）

| 功能 | 说明 |
|------|------|
| 邮件订阅 | 保存计算历史、出分提醒 |
| 高级分析 | 弱项分析、提分建议、学习计划 |
| 备考资料推荐 | 联盟营销（Amazon 教材链接） |
| 广告位 | Google AdSense |

### 5.4 合规 & 基础设施（P0）

| 功能 | 说明 |
|------|------|
| Privacy Policy | GDPR/CCPA 合规 |
| Terms of Service | 免责声明（非官方、预测仅供参考） |
| Google Analytics 4 | 基础埋点 |
| 错误监控 | Sentry 或类似工具 |

### 5.5 NOT-DO（明确不做）

| 不做 | 原因 |
|------|------|
| ❌ 完整题库/练习题 | 技术复杂、版权风险、和定位无关 |
| ❌ 视频课程/教学 | 需要大量内容生产、和 Calculator 定位偏离 |
| ❌ Essay 批改 | GradGPT 已做，需要 AI 后端，成本高 |
| ❌ College Admission 咨询 | 完全另一个品类 |
| ❌ 用户注册/登录（首版） | 增加摩擦，SEO 工具站应无门槛 |
| ❌ 论坛/社区 | 运营重、和核心功能无关 |
| ❌ 多语言（首版） | 先做英文，验证后再扩展 |

---

## 6. 页面信息架构（IA）

### 6.1 首页结构

```
1. HERO
   - Headline: "Know Your AP Score Before the Exam"
   - Subhead: "Free AP Score Calculator for all 38 subjects. Based on official 2026 scoring guidelines."
   - 嵌入式工具入口：选择科目 → 立即开始
   - CTA: "Calculate Your Score"

2. POPULAR SUBJECTS
   - 展示最热门的 6-8 门科目卡片（Calculus, Biology, US History, etc.）
   - 每卡片：科目名 + 一键进入计分器

3. HOW IT WORKS（3 步）
   - Step 1: Pick your AP subject
   - Step 2: Enter your practice scores
   - Step 3: Get your predicted score instantly

4. WHY STUDENTS TRUST US
   - 3 个信任点：Based on official rubrics / Updated yearly / Used by X students
   - 示例截图（Before/After 输入分数界面）

5. ALL 38 SUBJECTS
   - 分类展示所有科目（Math, Science, History, etc.）
   - 每科目链接到独立页面

6. FAQ（首页展示 Top 5，链接到完整 FAQ 页）
   - How accurate is this?
   - How are AP exams scored?
   - What's a good AP score?
   - Do colleges accept 3s?
   - How to improve my score?

7. FOOTER
   - 导航链接 + 法律页面 + 社交链接
```

### 6.2 科目独立页结构（以 /ap-calculus-ab 为例）

```
1. BREADCRUMB: Home > AP Calculus AB Score Calculator
2. H1: AP Calculus AB Score Calculator 2026
3. SUBHEAD: Based on official College Board scoring guidelines
4. TOOL INTERFACE
   - Section I: Multiple Choice
     - MCQ Part A (No calculator): slider 0-30
     - MCQ Part B (Calculator): slider 0-15
   - Section II: Free Response
     - FRQ 1-6: sliders 0-9 each
   - REAL-TIME RESULT:
     - Composite Score: XX/100
     - Predicted AP Score: X
     - Score distribution chart (历年对比)
     - "You scored higher than XX% of students"
5. HOW SCORING WORKS（该科目评分解释）
6. SCORE MEANING（3=passing, 4/5=good for credit）
7. TIPS TO IMPROVE（3-5 条针对性建议）
8. FAQ（该科目专属 FAQ）
9. RELATED SUBJECTS（其他 Math/Science 科目推荐）
```

### 6.3 转化检查清单

- [x] Hero 3 秒内说明价值
- [x] 首屏可直接使用工具（科目选择器）
- [x] CTA 是动词 + 结果（"Calculate Your Score"）
- [x] 有 How It Works
- [x] 有示例/截图展示
- [x] FAQ 覆盖准确性、评分机制、好分数标准、大学接受度、提分方法
- [x] 定价区先展示价值（免费）再展示功能

---

## 7. SEO 页面矩阵

### 7.1 页面规划

| 页面 | URL | 目标关键词 | 目的 | 优先级 |
|------|-----|-----------|------|--------|
| 首页 | `/` | `ap score calculator` | 转化 + 品牌 | P0 |
| 科目列表 | `/subjects` | `ap exam score calculator` | 导航 + SEO | P0 |
| 科目页 x38 | `/ap-[subject]` | `ap [subject] score calculator` | 长尾词转化 | P0 |
| FAQ | `/faq` | `how is ap exam scored` | 信息型引流 | P1 |
| 评分解释 | `/how-ap-scoring-works` | `ap scoring rubric` | 信息型引流 | P1 |
| 分数对照 | `/score-distribution` | `ap score distribution` | 信息型引流 | P1 |
| Blog: Best | `/blog/best-ap-score-calculators` | `best ap score calculator` | 对比截流 | P2 |
| Alternative | `/alternative/fiveable` | `fiveable alternative` | 竞品截流 | P2 |
| 历年分数线 | `/score-cutoffs/2025` | `ap score cutoffs` | 信息型引流 | P2 |

### 7.2 关键词覆盖策略

**主词**：`ap score calculator` (100万/月)
**长尾词池**（预估每门 1K-50K/月）：
- `ap calculus score calculator`
- `ap biology score calculator`
- `apush score calculator`
- `ap lang score calculator`
- `ap chem score calculator`
- `ap physics score calculator`
- ... 38 门科目 × 3-5 个变体 = 150+ 长尾页面

**信息词**（引流）：
- `how are ap exams scored`
- `what is a good ap score`
- `ap score distribution 2025`
- `do colleges accept ap scores of 3`

---

## 8. 定价与成本设计

### 8.1 竞品价格锚点

| 竞品 | 定价模式 | 价格 |
|------|---------|------|
| Fiveable | Freemium + 订阅 | 免费基础，$XX/月 Premium |
| Test Ninjas | 付费订阅 | $XX/月起 |
| Albert.io | 付费 | $XX/月起 |
| Marco Learning | 免费 + 课程付费 | 工具免费，课程收费 |

### 8.2 本站点定价策略

**首版：完全免费**
- 所有 38 门 Calculator 免费使用
- 无注册、无 paywall
- 盈利模式：Google AdSense + 联盟营销（Amazon 教材推荐）+ 未来 Premium 功能

**第二版：Freemium**

| 层级 | 功能 | 价格 |
|------|------|------|
| **Free** | 基础计分器、38 科目、即时结果 | $0 |
| **Pro** | 保存历史、弱项分析、提分计划、无广告 | $4.99/月 或 $29.99/年 |
| **Lifetime** | 永久 Pro | $49.99 一次性 |

### 8.3 成本明细（首年）

| 成本项 | 首年费用 | 说明 |
|--------|---------|------|
| **域名** | $12-15/年 | .com 域名，Namecheap/Cloudflare |
| **托管 (Vercel)** | $0 | 免费 tier 够用（静态站点） |
| **CDN** | $0 | Vercel 自带全球 CDN |
| **SSL 证书** | $0 | Let's Encrypt / Vercel 自动 |
| **开发成本** | 时间成本 | 1 人，2-3 周（纯前端） |
| **设计成本** | 时间成本 | 可用现成 UI 组件（shadcn/ui） |
| **数据维护** | 时间成本 | 每年 5 月前更新评分标准 |
| **分析工具** | $0 | Google Analytics 4 免费 |
| **错误监控** | $0 | Sentry 免费 tier |
| **SEO 工具** | $0-50 | 可选：Ahrefs 免费版 / Google Search Console 免费 |
| **联盟营销** | $0 | Amazon Associates 免费加入 |
| **AdSense** | $0 | 免费加入，有流量后自动变现 |
| **法律合规** | $0-100 | Privacy Policy / Terms 模板（可选律师审核） |
| **备用预算** | $200 | 域名续费、意外支出 |
| **首年总成本** | **<$400** | 主要是域名 + 时间投入 |

### 8.4 月度运营成本（稳定期）

| 成本项 | 月费用 | 说明 |
|--------|--------|------|
| Vercel Pro（可选） | $20 | 如需 Analytics / 更多带宽 |
| 域名摊销 | ~$1 | $12/年 ÷ 12 |
| 数据更新维护 | 时间成本 | 每年 1-2 次大更新 |
| **月度总成本** | **$0-21** | 几乎零运营成本 |

### 8.5 收入预估与盈亏平衡

**变现渠道**：

| 渠道 | 预估 RPM | 条件 |
|------|---------|------|
| Google AdSense | $2-5/千次展示 | 教育类流量，美国用户 |
| Amazon 联盟（教材推荐） | $50-200/月 | 月活 10K，转化率 1-2% |
| Pro 订阅（第二版） | $500-2000/月 | 转化率 2-3%，月活 50K |

**盈亏平衡测算**：

| 阶段 | 月活 | 收入预估 | 是否盈利 |
|------|------|---------|---------|
| 第 1-3 月 | 1K-5K | $5-25（AdSense） | ❌ 不盈利 |
| 第 4-6 月 | 10K-30K | $50-150（AdSense + 联盟） | ✅ 覆盖成本 |
| 第 7-12 月 | 30K-80K | $150-400 | ✅ 盈利 |
| 第二年 | 100K+ | $500-2000+ | ✅ 稳定盈利 |

**关键假设**：
- 首年目标：月活 50K（通过 38 科目长尾页 SEO）
- AdSense 美国教育流量 RPM 约 $3-8
- 联盟营销转化率 1-2%（教材单价 $15-30，佣金 4-6%）

### 8.6 成本控制原则

1. **先做免费，验证流量**：不急于变现，先靠 SEO 拿流量
2. **零后端成本**：纯静态站，无服务器、无数据库
3. **自动化运维**：Vercel 自动部署，无需运维人力
4. **内容复用**：评分数据 JSON 化，一次录入，全站复用
5. **延迟付费功能**：Pro 功能等流量验证后再开发
6. **Pro 先零 API**：首版 Pro 用前端逻辑实现，验证付费意愿后再加 API

### 8.1 竞品价格锚点

| 竞品 | 定价模式 | 价格 |
|------|---------|------|
| Fiveable | Freemium + 订阅 | 免费基础，$XX/月 Premium |
| Test Ninjas | 付费订阅 | $XX/月起 |
| Albert.io | 付费 | $XX/月起 |
| Marco Learning | 免费 + 课程付费 | 工具免费，课程收费 |

### 8.2 本站点定价策略

**首版：完全免费**
- 所有 38 门 Calculator 免费使用
- 无注册、无 paywall
- 盈利模式：Google AdSense + 联盟营销（Amazon 教材推荐）+ 未来 Premium 功能

**第二版：Freemium**

| 层级 | 功能 | 价格 |
|------|------|------|
| **Free** | 基础计分器、38 科目、即时结果 | $0 |
| **Pro** | 保存历史、弱项分析、提分计划、无广告 | $4.99/月 或 $29.99/年 |
| **Lifetime** | 永久 Pro | $49.99 一次性 |

### 8.3 成本验算

| 成本项 | 预估 |
|--------|------|
| 域名 | $10-15/年 |
| 托管 (Vercel/Netlify) | $0-20/月 |
| 开发（1 人，2-3 周） | 时间成本 |
| 数据维护（每年更新分数线） | 低 |
| **首年总成本** | **<$500** |

**盈亏平衡**：AdSense + 联盟营销，月活 10K 即可覆盖成本。

---


### 8.7 Pro 功能的 API 成本分析

**核心问题：Pro 功能是否需要调用外部 API？**

答案：**不一定，可以分阶段实现**

#### 方案 A：零 API 的 Pro（推荐首版）

| Pro 功能 | 实现方式 | API 成本 |
|---------|---------|---------|
| 保存计算历史 | LocalStorage / 浏览器本地存储 | **$0** |
| 弱项分析 | 前端逻辑（基于分数分布自动判断） | **$0** |
| 提分建议 | 硬编码模板（根据分数区间匹配建议） | **$0** |
| 学习进度追踪 | LocalStorage 记录多次计算结果 | **$0** |
| 无广告 | 前端条件渲染 | **$0** |

**实现原理**：
```
弱项分析（前端逻辑）：
- MCQ 得分率 < 60% → "建议加强选择题练习"
- FRQ 得分率 < 50% → "建议重点练习自由作答"
- 总分接近 cutoff → "距离 X 分只差 Y 分，重点突破 Z 章节"

提分建议（模板匹配）：
- 预测分 = 2 → 显示"基础巩固建议"
- 预测分 = 3 → 显示"提分冲刺建议"
- 预测分 = 4 → 显示"保分冲5建议"
```

**优点**：
- ✅ 零 API 成本，边际成本为零
- ✅ 无需后端，维护简单
- ✅ 响应速度极快（本地计算）
- ✅ 用户隐私好（数据不上传）

**缺点**：
- ❌ 建议不够"智能"（模板化）
- ❌ 无法跨设备同步
- ❌ 无法做复杂的自然语言分析

---

#### 方案 B：轻量 API 的 Pro（第二版可选）

| Pro 功能 | 实现方式 | API 成本 |
|---------|---------|---------|
| 保存计算历史 | Supabase / Firebase（免费 tier） | **$0-25/月** |
| 弱项分析 | 前端逻辑 + 简单后端规则 | **$0** |
| 提分建议 | GPT-4o mini 生成个性化建议 | **~$0.003/次** |
| 邮件提醒 | Resend（免费 3000 封/月） | **$0** |
| 学习进度追踪 | Supabase 存储历史记录 | **$0-25/月** |

**成本测算（月活 50K，Pro 用户 5K）**：

| 服务 | 用量 | 单价 | 月成本 |
|------|------|------|--------|
| Supabase（数据库） | 5K 用户数据 | 免费 tier 够 | **$0** |
| Resend（邮件） | 1K 封/月 | 免费 3K 封 | **$0** |
| GPT-4o mini（建议） | 5K 次 | $0.003/次 | **$15** |
| **合计** | | | **$15/月** |

---

#### 方案 C：全 AI 的 Pro（高阶版，成本较高）

| Pro 功能 | 实现方式 | API 成本 |
|---------|---------|---------|
| AI 个性化学习计划 | GPT-4o / Claude 3.5 Sonnet | $0.05-0.10/次 |
| AI FRQ 批改评分 | Claude 3.5 Sonnet | $0.10-0.30/次 |
| AI 答疑助手 | GPT-4o mini | $0.01/次 |
| 数据同步 | Supabase Pro | $25/月 |

**成本测算**：

| 服务 | 用量 | 单价 | 月成本 |
|------|------|------|--------|
| GPT-4o mini（轻量任务） | 10K 次 | $0.003/次 | $30 |
| GPT-4o（复杂计划） | 2K 次 | $0.01/次 | $20 |
| Claude 3.5（FRQ 批改） | 1K 次 | $0.20/次 | $200 |
| Supabase Pro | 1 项目 | $25/月 | $25 |
| **合计** | | | **$275/月** |

---

### 8.8 Pro 方案对比与推荐

| 维度 | 方案 A（零 API） | 方案 B（轻量 API） | 方案 C（全 AI） |
|------|----------------|------------------|----------------|
| **月成本** | **$0** | **$15** | **$275** |
| 技术复杂度 | 低 | 中 | 高 |
| 用户体验 | 良好 | 更好 | 最佳 |
| 开发周期 | 1-2 天 | 1-2 周 | 1-2 月 |
| 维护成本 | 极低 | 低 | 中 |
| 毛利率 | ~95% | ~90% | ~50-70% |

**推荐策略**：

```
Phase 1（首版）: 方案 A — 零 API Pro
  ↓ 验证付费意愿，观察转化率
Phase 2（3-6 月后）: 方案 B — 加 Supabase + GPT-4o mini
  ↓ 提升体验，增加粘性
Phase 3（12 月后）: 评估方案 C — 高阶 AI 功能
  ↓ 仅当用户量 >100K 且付费率 >5% 时考虑
```

**关键决策点**：
- 如果 Pro 转化率 < 2%：保持方案 A，不加 API 成本
- 如果 Pro 转化率 > 5% 且用户反馈"建议太模板化"：升级到方案 B
- 如果月活 > 100K 且有用户愿意付 $19.99/月：考虑方案 C

---

### 8.9 零 API Pro 的具体实现示例

**弱项分析（纯前端逻辑）**：

```javascript
function analyzeWeaknesses(scores, subject) {
  const weaknesses = [];
  
  // MCQ 分析
  const mcqRate = scores.mcq / subject.mcqMax;
  if (mcqRate < 0.5) {
    weaknesses.push({
      area: "Multiple Choice",
      severity: "high",
      advice: "Your MCQ score is below 50%. Focus on timed practice tests and review fundamental concepts."
    });
  } else if (mcqRate < 0.7) {
    weaknesses.push({
      area: "Multiple Choice", 
      severity: "medium",
      advice: "You're close to mastery. Target your weak units with focused drills."
    });
  }
  
  // FRQ 分析
  const frqRate = scores.frq / subject.frqMax;
  if (frqRate < mcqRate - 0.1) {
    weaknesses.push({
      area: "Free Response",
      severity: "high", 
      advice: "FRQ is dragging your score down. Practice writing full responses under timed conditions."
    });
  }
  
  return weaknesses;
}
```

**提分建议（模板匹配）**：

```javascript
const adviceTemplates = {
  1: {
    headline: "Build the Foundation First",
    tips: [
      "Start with basic concept review using Khan Academy or your textbook",
      "Focus on understanding rather than memorizing",
      "Consider getting a tutor or joining a study group"
    ]
  },
  2: {
    headline: "Bridge the Gap to Passing",
    tips: [
      "Identify your weakest units using our breakdown above",
      "Do 10 MCQs daily from those units",
      "Practice 1 FRQ every other day"
    ]
  },
  3: {
    headline: "Push for a 4 or 5",
    tips: [
      "You're passing! Now optimize for college credit",
      "Focus on FRQ structure and rubric alignment",
      "Take at least 2 full practice exams before test day"
    ]
  },
  4: {
    headline: "Secure That 5",
    tips: [
      "You're doing great! Maintain consistency",
      "Practice the hardest FRQ types",
      "Review common mistakes from past exams"
    ]
  }
};
```

**优点**：
- 完全本地运行，零延迟
- 零成本，可服务无限用户
- 隐私安全，数据不出设备
- 离线可用

---


## 9. 域名与技术栈

### 9.1 域名候选

| 域名 | 状态 | 价格 | 评价 |
|------|------|------|------|
| `apscorecalc.com` | 待查 | ~$12/年 | ⭐ 首选，短、直接、关键词强 |
| `apscorecalculator.com` | 待查 | ~$12/年 | 精确匹配关键词，稍长但清晰 |
| `getapscore.com` | 待查 | ~$12/年 | 品牌感强，顺口 |
| `apscorepredictor.com` | 待查 | ~$12/年 | 差异化，强调"预测" |
| `myapscore.com` | 待查 | ~$12/年 | 个人化，适合品牌 |
| `apcalc.io` | 待查 | ~$30/年 | 现代感，但 .io 价格稍高 |
| `apscore.tools` | 待查 | ~$20/年 | 工具属性明确 |

**推荐 Top 3**：
1. `apscorecalc.com` — 最短、最易记、关键词最强
2. `apscorecalculator.com` — 精确匹配，SEO 友好
3. `getapscore.com` — 品牌潜力大，可扩展

### 9.2 技术栈建议

| 层级 | 技术 | 理由 |
|------|------|------|
| 前端框架 | Next.js 14 (App Router) | SSR 利于 SEO、React 生态成熟 |
| 样式 | Tailwind CSS | 快速开发、响应式 |
| 部署 | Vercel | 免费 tier 够用、自动 CDN、性能优 |
| 数据 | JSON 静态文件 | 评分数据不复杂，无需数据库 |
| 分析 | Google Analytics 4 + Plausible | 免费 + 隐私友好 |
| 监控 | Sentry (免费 tier) | 错误追踪 |
| SEO | Next.js Metadata API + sitemap.xml | 原生支持 |

**不需要**：
- 后端服务器（纯静态/前端计算）
- 数据库（首版）
- 用户认证系统（首版）
- CMS（内容直接写代码里）

---

## 10. GTM 策略

### 10.1 首发渠道

| 渠道 | 动作 | 预期效果 |
|------|------|---------|
| **SEO** | 38 科目页面上线，提交 sitemap | 3-6 个月自然流量增长 |
| **Reddit** | 在 r/APStudents 分享（非 spam，提供价值） | 初期种子用户 |
| **Discord** | AP 备考服务器分享 | 口碑传播 |
| **TikTok** | "How to calculate your AP score" 短视频 | 年轻用户触达 |
| **Product Hunt** | 上线当天发布 | 科技圈曝光 |

### 10.2 首周动作

- Day 1: 上线 + Product Hunt 发布
- Day 2-3: Reddit r/APStudents 分享，收集反馈
- Day 4-5: 根据反馈修复 bug，优化热门科目页面
- Day 6-7: 联系 AP 备考 YouTuber/TikToker 合作

### 10.3 内容计划（持续）

- 每月发布 2 篇 Blog："AP [Subject] Score Calculator Guide"
- 每年 5 月前更新所有 Calculator 为当年评分标准
- 每年 7 月发布 "AP Score Analysis" 内容（蹭出分热度）

---

## 11. 转化漏斗与埋点

### 11.1 关键事件

| 事件 | 触发时机 | 用途 |
|------|---------|------|
| `page_view` | 每页加载 | 流量分析 |
| `tool_start` | 用户选择科目 | 工具使用起点 |
| `section_input` | 用户输入某 section 分数 | 参与度分析 |
| `tool_complete` | 用户得到预测分数 | 核心转化 |
| `tool_share` | 用户分享结果 | 病毒传播 |
| `cta_click` | 点击任何 CTA | 转化意图 |
| `subject_click` | 点击科目卡片 | 热门科目分析 |
| `faq_expand` | 展开 FAQ | 内容优化 |

### 11.2 核心指标

| 指标 | 目标 |
|------|------|
| 月独立访客 | 首年 50K，第二年 200K |
| 工具使用率 | >60%（访问首页的人使用工具） |
| 平均使用科目数 | 1.5（用户尝试多门科目） |
| 回访率 | >30%（备考期多次使用） |
| 自然搜索占比 | >70% |

---

## 12. 风险评估

### 12.1 风险矩阵

| 风险 | 概率 | 影响 | 缓解措施 |
|------|------|------|---------|
| **SEO 风险：大站挤压** | 中 | 高 | 专注长尾词（38 科目独立页），避开和大站正面竞争主词 |
| **数据风险：分数线不准** | 中 | 高 | 免责声明 + 基于官方 Course & Exam Description + 每年更新 |
| **技术风险：College Board 改考试格式** | 低 | 中 | 关注官方公告，每年 5 月前更新数据 |
| **合规风险：非官方工具的法律问题** | 低 | 中 | 明确 Disclaimer：非官方、预测仅供参考、不关联 College Board |
| **商业化风险：免费工具难变现** | 中 | 中 | 先靠广告/联盟盈利，验证流量后再推 Pro |
| **季节性风险：流量波动大** | 高 | 中 | 布局全年可用的内容（分数解释、大学学分政策），淡季靠信息词维持 |

### 12.2 关键假设（待验证）

- [ ] 月搜索量 100 万是否准确？（建议用 Google Keyword Planner 核实）
- [ ] 用户是否愿意使用非 Fiveable 的独立工具？（需上线后验证）
- [ ] 长尾词流量是否足够支撑 SEO 策略？（3-6 个月后看数据）

---

## 13. 交接摘要

### 13.1 给文案

```
产品名：AP Score Calculator（或域名决定的品牌名）
定位语句：The fastest, most accurate AP score predictor for all 38 subjects.
Headline：Know Your AP Score Before the Exam
Subhead：Free AP Score Calculator based on official 2026 scoring guidelines.
核心 Benefits：
1. Accurate — Based on official College Board rubrics, updated yearly
2. Fast — Get your predicted score in 30 seconds
3. Clear — See exactly where you stand and how to improve
FAQ 必须覆盖：
- How accurate is this calculator?
- How are AP exams scored?
- What's a good AP score?
- Do colleges accept 3s?
- How to improve my AP score?
- Is this official from College Board?
不能把产品说成：
- "官方计分器"（我们不是 College Board）
- "保证拿 5 分"（不能承诺结果）
- "100% 准确"（分数线每年微调）
CTA 格式：动词 + 结果（如 "Calculate Your Score" / "Predict My AP Score"）
```

### 13.2 给设计

```
首页结构：
1. Hero（大标题 + 副标题 + 科目选择器）
2. Popular Subjects（6-8 卡片网格）
3. How It Works（3 步图标流程）
4. Trust Section（3 个信任点 + 截图）
5. All Subjects（分类列表，38 门）
6. FAQ（手风琴，Top 5）
7. Footer

首屏重点：
- 科目选择器必须首屏可见
- 背景用浅色/教育感（蓝/绿/白）
- 避免太花哨，学生用户需要清晰专业

核心交互：
- 科目选择 → 进入工具页
- Sliders 输入分数 → 实时显示预测结果
- 结果页有分享按钮

视觉参考：
- Fiveable Calculator 页（功能布局参考）
- 但要比它更简洁、更聚焦
- 移动端优先设计（50%+ 流量来自手机）

不需要设计：
- 用户登录/注册页（首版不做）
- 支付页（首版不做）
- 复杂的仪表盘
```

### 13.3 给开发

```
技术栈：
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- 部署：Vercel

P0 功能（首版 2-3 周）：
1. 首页（Hero + 科目列表 + FAQ）
2. 38 门科目独立页（/ap-[subject]）
3. 计分器组件（sliders + 实时计算）
4. 结果展示（分数 + 解释 + 建议）
5. SEO 基础（meta tags, sitemap, structured data）
6. 响应式（移动端优先）
7. 法律页面（Privacy, Terms, Disclaimer）

数据结构：
- subjects.json：38 门科目信息（名称、分类、sections、权重）
- scoring.json：每门科目的评分标准（section weights, score cutoffs）
- 每年更新这两个 JSON 文件即可

NOT-DO：
- 不要后端服务器
- 不要数据库（首版）
- 不要用户认证
- 不要 CMS
- 不要多语言

验收标准：
- [ ] 首页 Lighthouse SEO 评分 > 90
- [ ] 移动端可用（iPhone SE 尺寸测试）
- [ ] 38 科目页全部可访问
- [ ] 计分器计算结果和 Fiveable 对比误差 < 0.5 分
- [ ] 页面加载 < 2 秒（3G 网络）
```

---

## 14. 质量检查清单

- [x] 有明确关键词（`ap score calculator`）
- [x] 有搜索量数据（100万/月），CPC/KD 标注待验证
- [x] SERP 经过竞品反推分析
- [x] 搜索意图判断清楚（工具型 + 信息型）
- [x] Top 3 竞品写清楚（Fiveable, Test Ninjas, GradGPT）
- [x] 竞品做了三层分级
- [x] 拆了 3 个用户场景（备考学生、等分学生、家长/辅导员）
- [x] 选定主力用户（备考期学生）
- [x] 有结构化定位语句
- [x] 消息层级清楚（Headline → Subhead → Benefits → Features → Proof）
- [x] 功能范围分 P0 / P1 / NOT-DO
- [x] 首页 IA 可以直接给设计使用
- [x] SEO 页面矩阵明确（38 科目独立页 + 信息页）
- [x] 定价有竞品锚点和成本意识
- [x] 域名有 Top 3 推荐
- [x] GTM 有首周动作
- [x] 埋点事件明确
- [x] 风险有缓解措施
- [x] 交接摘要分文案/设计/开发三段

---

*文档版本：v1.0*
*生成日期：2026-05-09*
*基于：product-definition-prd 技能标准流程*
