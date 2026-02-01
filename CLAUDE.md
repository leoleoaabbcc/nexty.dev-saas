# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

Nexty 是一个基于 Next.js 16 + React 19 的全栈 SaaS 模板项目。主要技术栈包括:
- **认证**: Better Auth + Drizzle adapter (支持 Google/GitHub OAuth)
- **数据库**: PostgreSQL + Drizzle ORM
- **支付**: Stripe / Creem
- **存储**: Cloudflare R2 (S3 兼容)
- **邮件**: Resend
- **国际化**: next-intl (en/zh/ja)
- **AI**: 多 AI 提供商 (OpenAI, Anthropic, Google, DeepSeek, XAI 等)
- **UI**: Tailwind CSS + shadcn/ui + Radix

## 常用命令

```bash
# 开发
pnpm dev          # 启动开发服务器
pnpm build        # 生产构建
pnpm start        # 启动生产服务器
pnpm lint         # 运行 ESLint

# 数据库 (Drizzle)
pnpm db:generate  # 从 schema 生成迁移
pnpm db:migrate   # 执行迁移
pnpm db:push      # 直接推送 schema
pnpm db:studio    # 打开 Drizzle Studio
pnpm db:seed      # 运行种子脚本

# 分析
pnpm analyze      # 构建并分析 bundle 大小
```

**注意**: 使用 pnpm，不要使用 npm 或 yarn。

## 项目架构

### 目录结构
- `app/` - Next.js App Router
  - `[locale]/` - 国际化路由 (next-intl)
  - `api/` - Route Handlers (API 端点)
  - `(site)/` - 站点相关路由组
- `actions/` - Server Actions (业务逻辑入口)
- `lib/` - 后端工具和集成
  - `auth/` - Better Auth 配置 (server.ts, auth-client.ts)
  - `db/` - Drizzle schema、迁移、种子
  - `stripe/` - Stripe SDK
  - `cloudflare/` - R2 存储
  - `resend/` - 邮件客户端
  - `api-response.ts` - API 响应助手
  - `action-response.ts` - Server Action 响应助手
- `components/` - React 组件
  - `ui/` - shadcn/ui 基础组件
- `i18n/messages/` - 国际化翻译文件 (JSON)
- `emails/` - React 邮件模板
- `config/` - 项目配置
- `stores/` - Zustand 状态管理
- `types/` - TypeScript 类型定义

### 关键模式

**认证**:
- 服务端: `auth.api.getSession({ headers })` 或 `lib/auth/server.ts` 中的 `getSession()`
- 客户端: 使用 `lib/auth/auth-client.ts` 的 `authClient`
- 管理员检查: `isAdmin()` 来自 `lib/auth/server.ts`

**API 响应**:
- Route Handlers 使用 `lib/api-response.ts` (`apiResponse.success`, `.error`, `.badRequest`)
- Server Actions 使用 `lib/action-response.ts` (`actionResponse.success`, `.error`)
- 使用 zod 进行输入验证

**数据库**:
- Schema 定义在 `lib/db/schema.ts`
- 使用 `lib/db/index.ts` 导出的 `db` 实例
- 不要每个请求创建新连接

**外部服务**:
- Stripe webhook: `app/api/stripe/webhook/route.ts`
- R2 存储: `lib/cloudflare/r2.ts`
- 邮件: `actions/resend` + `lib/resend`

## 开发规范

- TypeScript 严格模式，避免使用 `any`，优先使用 `unknown`
- 导入顺序: React/Next → 外部库 → 内部绝对路径 (@/) → 相对路径
- 类型导入使用 `import type { ... }`
- 使用 zod 验证所有外部输入
- 环境变量参考 `.env.example`
