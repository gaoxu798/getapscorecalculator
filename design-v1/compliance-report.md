# AP Score Calculator — 合规审查报告

**站点名：** AP Score Calculator  
**域名：** getapscorecalculator.xyz  
**运营主体：** Independent developer  
**联系邮箱：** jordivh9@gmail.com  
**司法辖区：** California, USA  
**最后更新：** 2026-05-09  

---

## 1. 风险等级

**🟡 中风险**

| 风险因素 | 说明 |
|----------|------|
| 商标关联 | 产品功能涉及 AP®（College Board 注册商标），需严格免责声明 |
| 付费订阅 | Pro / 学期制 / One-time 涉及支付、退款、自动续费合规 |
| 未成年用户 | 目标用户 15-18 岁美高学生，需年龄限制声明 |
| 教育预测输出 | 分数预测影响用户重大权益（大学学分），需严格免责声明 |
| 第三方数据收集 | GA4、Sentry、Stripe |

---

## 2. 数据流摘要

```
[用户浏览器]
    │
    ├─→ 输入分数（sliders）→ 前端 JavaScript 计算（本地）
    │       ↓
    ├─→ LocalStorage（保存计算历史 — Pro 功能，不上传服务器）
    │       ↓
    ├─→ Vercel CDN（静态页面 + 边缘路由）
    │       ↓
    ├─→ Google Analytics 4（页面访问、事件埋点）
    │       ↓
    └─→ Sentry（错误监控、性能数据）
```

**关键判断：**
- ✅ 首版纯前端，**不上传用户输入的分数到服务器**
- ✅ 计算在浏览器本地完成
- ⚠️ GA4 收集 IP、页面访问路径、事件交互
- ⚠️ Sentry 收集错误堆栈、IP、UA
- ⚠️ Stripe 处理支付（Tokenized，不存储完整卡号）

---

## 3. 第三方服务清单

| 名称 | 用途 | 处理数据 | 接触用户内容 | 跨境传输 | 用于模型训练 | 政策链接 |
|------|------|----------|--------------|----------|--------------|----------|
| **Vercel** | 托管/CDN | IP、访问日志、UA | 否 | 是（全球边缘节点） | 否 | [Privacy](https://vercel.com/legal/privacy-policy) |
| **Google Analytics 4** | 流量分析 | IP、页面访问、事件、设备信息 | 否 | 是（美国） | 否 | [Privacy](https://policies.google.com/privacy) |
| **Sentry** | 错误监控 | 错误堆栈、IP、UA、浏览器版本 | 否（仅技术错误） | 是（美国） | 否 | [Privacy](https://sentry.io/privacy/) |
| **Stripe** | 支付处理 | 支付卡号（Tokenized）、邮箱、账单地址、订单记录 | 否（Stripe 托管输入） | 是 | 否 | [Privacy](https://stripe.com/privacy) |

---

## 4. 必需合规页面

| 页面 | 优先级 | 原因 |
|------|--------|------|
| **Privacy Policy** (`/privacy`) | P0 | GA4、Sentry、Stripe |
| **Terms of Service** (`/terms`) | P0 | 免责声明、付费订阅、年龄限制 |
| **Cookie Policy / Notice** | P0 | GA4 需要 Cookie Consent（欧盟/英国/加州） |
| **Disclaimer**（页脚 + 工具结果页） | P0 | 非官方声明、预测仅供参考 |
| **Refund Policy** (`/refund`) | P1 | 付费订阅上线后必须 |
| **Contact** (`/contact`) | P1 | 用户权利行使、退款申请 |

---

## 5. 数据处理表

| 数据类型 | 用途 | Lawful Basis | 第三方 | 保留期限 | 用户可否删除 |
|----------|------|--------------|--------|----------|--------------|
| IP / 访问日志 | CDN 路由、安全、防滥用 | Legitimate Interests | Vercel / Cloudflare | Vercel 默认保留期 | 可依法申请 |
| 页面分析数据 | 统计访问、优化页面 | Consent（欧盟/英国）/ Legitimate Interests（美国） | Google Analytics 4 | 26 个月（GA4 默认） | 通过 Cookie 设置或浏览器退出 |
| 错误日志 | 排错、稳定性 | Legitimate Interests | Sentry | 90 天（Sentry 免费 tier） | 可依法申请 |
| LocalStorage（计算历史） | Pro 功能保存历史记录 | 本地存储不上传服务器 | 无（浏览器本地） | 直至用户清除浏览器数据 | 用户自行清除浏览器数据 |
| 支付信息 | 订单、订阅、退款、发票 | Contract / Legal Obligation | Stripe | 支付服务商处理；本站保存必要订单记录 | 可请求删除；交易记录依法保留 |

---

## 6. 支付/订阅检查

| 检查项 | 状态 | 说明 |
|--------|------|------|
| **退款窗口** | ✅ 14 天 | 已确认 |
| **自动续费披露** | ✅ 已定义 | Checkout 显示："Your subscription renews automatically unless canceled before the next billing date" |
| **取消路径** | ✅ 已定义 | `Account Settings → Billing → Manage Subscription → Cancel Plan` |
| **取消后权益** | ✅ 已定义 | 周期结束失效 |
| **试用期** | ✅ 无 | 无需处理 |
| **VAT / Sales Tax** | ✅ 已定义 | 价格页标注："Prices do not include applicable taxes. Tax will be calculated at checkout." |
| **价格含税说明** | ✅ 已定义 | 同上 |
| **支付方式** | ✅ Stripe | Stripe Checkout 托管，不存储完整卡号 |
| **支付披露** | ✅ 已定义 | "We use Stripe to process payments. We do not store your full payment card details on our servers." |
| **Chargeback 处理** | ✅ 已定义 | 提供客服邮箱，不禁止 chargeback |
| **退款处理时间** | ✅ 已定义 | 5–10 个工作日 |
| **退款申请方式** | ✅ 已定义 | 邮箱：jordivh9@gmail.com |
| **学期制定义** | ✅ 4-month term | "$14.99 per 4-month term" |
| **Lifetime 改 One-time** | ✅ 已修改 | "$99 One-time Purchase" |

**定价合规确认：**

| 定价 | 状态 |
|------|------|
| **$4.99/月** | ✅ 保留，加 "plus applicable taxes" |
| **$39/年（35% 折扣）** | ✅ 保留，展示原价 $59.88/年 |
| **$14.99/学期** | ✅ 改为 "$14.99 per 4-month term" |
| **$99 One-time Purchase** | ✅ 原 Lifetime 已修改 |

---

## 7. AI 内容安全检查

| 检查项 | 状态 | 说明 |
|--------|------|------|
| **AI 生成内容** | ❌ 暂不启用 | 首版无 AI，Phase 2 待定 |
| **输入过滤** | N/A | 无 AI 功能 |
| **Prompt 安全约束** | N/A | 无 AI 功能 |
| **输出检查** | N/A | 无 AI 功能 |
| **人工复核状态** | N/A | 无 AI 功能 |
| **NSFW 检测** | N/A | 无图像生成 |
| **Moderation API** | N/A | 未启用 OpenAI |

**结论：** 首版无 AI，本项风险低。未来启用 OpenAI 时需补充 AI 内容安全策略。

---

## 8. 上线前 Checklist

### 页面存在性
- [ ] `/privacy` — Privacy Policy
- [ ] `/terms` — Terms of Service
- [ ] `/cookie-policy` — Cookie Policy / Cookie Notice
- [ ] `/refund` — Refund Policy（Pro 上线前）
- [ ] `/contact` — 联系方式
- [ ] 页脚 Disclaimer（每页可见）

### 页面链接
- [ ] 页脚有 Privacy / Terms / Refund / Contact 链接
- [ ] Checkout 页面有 Refund / Subscription 提示
- [ ] 订阅确认邮件包含续费/取消提示
- [ ] Cookie Banner 链接到 Cookie Policy

### 数据与第三方
- [ ] 第三方清单与实际代码一致
- [ ] GA4 配置与 Privacy Policy 一致
- [ ] Sentry 不收集用户输入的分数数据
- [ ] 数据处理表已填写完整

### Cookie
- [ ] 必要 Cookie（功能必需）与非必要 Cookie（分析/广告）区分
- [ ] GA4 / Sentry 在欧盟/英国用户同意前不加载
- [ ] Cookie Banner 有同意/拒绝选项

### 支付（Pro 上线时）
- [ ] 退款政策与价格页、FAQ、Terms 一致
- [ ] 自动续费披露清楚（周期、金额、扣款时间）
- [ ] 取消路径可用（账户设置内）
- [ ] 取消后权益说明清楚
- [ ] VAT / Sales Tax 在 checkout 显示
- [ ] 支付由 Stripe 托管，本站不存完整卡号

### 品牌/IP
- [ ] 无 "official / approved by / guaranteed / best" 表述
- [ ] AP® 商标有正确 ® 符号和归属声明
- [ ] Disclaimer 在工具结果页可见（不仅是页脚）
- [ ] 域名不暗示官方关联

### 版本管理
- [ ] 每个法律页面有 Last updated 日期
- [ ] 内部保留 change log
- [ ] 联系邮箱可用：jordivh9@gmail.com

---

*文档版本：v1.0*  
*生成日期：2026-05-09*  
*基于：student-site-compliance-pipeline 标准流程*
