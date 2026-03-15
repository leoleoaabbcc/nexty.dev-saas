# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nexty is a full-stack SaaS boilerplate built on Next.js 16 + React 19. Tech stack:
- **Auth**: Better Auth + Drizzle adapter (Google/GitHub OAuth, magic link, anonymous, One Tap)
- **Database**: PostgreSQL + Drizzle ORM (auto-tuning for Vercel/Netlify/Lambda/server)
- **Payments**: Dual provider — Stripe and Creem, with unified credit management
- **Storage**: Cloudflare R2 (S3-compatible, presigned URLs)
- **Email**: Resend + React email templates
- **i18n**: next-intl (en/zh/ja, locale prefix only for non-default)
- **AI**: Vercel AI SDK with multiple providers (OpenAI, Anthropic, Google, DeepSeek, XAI, OpenRouter)
- **UI**: Tailwind CSS v4 + shadcn/ui + Radix
- **State**: Zustand (stores in `stores/`)

## Commands

```bash
pnpm dev          # dev server
pnpm build        # production build
pnpm lint         # ESLint
pnpm analyze      # bundle analysis (ANALYZE=true)

# Database (Drizzle)
pnpm db:generate  # generate migrations from schema
pnpm db:migrate   # run migrations
pnpm db:push      # push schema directly (dev)
pnpm db:studio    # Drizzle Studio GUI
pnpm db:seed      # seed data (tsx lib/db/seed/index.ts)
```

**Always use pnpm.** No npm or yarn.

## Architecture

### Directory Layout
- `app/[locale]/` — i18n routes (next-intl), `(site)/` route group for public pages
- `app/api/` — Route Handlers (auth, webhooks, payments, AI demos, admin)
- `actions/` — Server Actions organized by domain (users, orders, prices, posts, usage, stripe, creem, r2-resources, resend)
- `lib/` — Backend modules (auth, db, stripe, cloudflare, resend, payments, upstash)
- `components/` — React components, `components/ui/` for shadcn/ui primitives
- `config/` — Site config, product registry, AI model registry, R2 paths, color presets
- `i18n/messages/{locale}/` — Translation JSON files split by namespace
- `emails/` — React email templates
- `stores/` — Zustand stores
- `types/` — TypeScript type definitions

### Authentication

- **Server**: `getSession()` and `isAdmin()` from `lib/auth/server.ts`
- **Client**: `authClient` from `lib/auth/auth-client.ts`
- **Config**: `lib/auth/index.ts` — Better Auth instance with Drizzle adapter, social providers, plugins
- **API mount**: `app/api/auth/[...all]/route.ts` — catch-all handler
- Never access cookies directly for auth; use Better Auth helpers
- Never write directly to `user`, `account`, `session`, `verification` tables
- Admin checks always use `isAdmin()` with DB role lookup, never trust client-provided roles
- ID generation uses `crypto.randomUUID()`

### Dual Response Pattern

Route Handlers and Server Actions use parallel but distinct response helpers:

- **Route Handlers** → `apiResponse` from `lib/api-response.ts` (returns `NextResponse.json`)
  - `.success(data)`, `.error(msg, status)`, `.badRequest()`, `.unauthorized()`, `.forbidden()`, `.notFound()`, `.serverError()`, `.conflict()`
- **Server Actions** → `actionResponse` from `lib/action-response.ts` (returns plain `{ success, data/error, customCode? }`)
  - Same method names, returns discriminated union `ActionResult<T>`

Always use zod `.safeParse()` for input validation.

### Database

- **Schema**: Single file at `lib/db/schema.ts` — tables: user, session, account, verification, pricingPlans, orders, subscriptions, usage, creditLogs, posts, tags, postTags
- **Connection**: Singleton `db` from `lib/db/index.ts` — never create per-request connections
- **Auto-config**: `lib/db/config.ts` detects platform (serverless vs server) and DB provider (Supabase/Neon/RDS) for pooling and SSL settings
- **Migrations**: Output to `lib/db/migrations/`, configured in `drizzle.config.ts`
- Use Drizzle typed DSL (`eq`, `and`, etc.), never raw SQL strings

### Payment System

Provider-agnostic with unified credit layer:
- `lib/payments/credit-manager.ts` — upgrade/revoke credits (subscription + one-time)
- `lib/payments/webhook-helpers.ts` — idempotent order creation, refund handling
- `lib/payments/provider-utils.ts` — normalizes types across Stripe/Creem
- Stripe subscriptions: handled via `invoice.paid`, not `checkout.session.completed`
- One-time payments: handled via `checkout.session.completed`
- Always store `userId` and `planId` in checkout session metadata
- Credit operations use atomic transactions with retry logic (3 attempts, exponential backoff)
- Webhooks: `app/api/stripe/webhook/route.ts`, `app/api/creem/webhook/route.ts`

### Internationalization

- Locales: `en` (default, no URL prefix), `zh`, `ja` (prefixed: `/zh/...`, `/ja/...`)
- Config: `i18n/routing.ts` (localePrefix: `as-needed`), `i18n/request.ts` (message loading)
- Messages split by namespace: `common.json` (shared), `Landing.json`, `Dashboard/Admin/*.json`, etc.
- Navigation helpers exported from `i18n/routing.ts`: `Link`, `redirect`, `usePathname`, `useRouter`
- Server: `getTranslations()` from `next-intl/server`; Client: `useTranslations()` from `next-intl`
- Use `useFormatter`/`getFormatter` for locale-aware dates, numbers, currency
- All user-facing strings must be internationalized; use interpolation (`t('key', { name })`) not concatenation
- No project-level `middleware.ts` — i18n handled by `createNextIntlPlugin()` in `next.config.mjs`

### R2 Storage

- Upload functions by user type in `lib/cloudflare/r2.ts`:
  - `generateUserPresignedUploadUrl` — auto-isolates by userId
  - `generateAdminPresignedUploadUrl` — full control
  - `generatePublicPresignedUploadUrl` — rate-limited via Upstash
- Server uploads: `serverUploadFile()` for server-produced bytes (no presign hop)
- Downloads: `lib/cloudflare/r2-download.ts` — separate helpers per access level
- Key generation: always use `generateR2Key` from `lib/cloudflare/r2-utils.ts`, never trust client keys
- Store both `key` and `publicObjectUrl` in DB for uploaded files
- Presigned URL expiry: 300s

### Email

- Single Resend client: `lib/resend/index.ts`
- Always send through `actions/resend` helpers (standardizes from/reply-to)
- Templates: React components in `emails/`, keep props serializable
- Use absolute URLs with `NEXT_PUBLIC_SITE_URL` in templates, no relative links
- No lucide-react icons in email templates

### AI Integration

- Provider initialization server-only — API keys must never reach client
- Routes: `app/api/ai-demo/` (single-chat, multi-chat, text-to-image, image-to-image, image-to-video)
- Client: `@ai-sdk/react` hooks (`useChat`, `useCompletion`); examples in `components/ai-demo/`
- Model registry: `config/models.ts`

## Coding Conventions

- TypeScript strict mode; `unknown` over `any`; `interface` for objects, `type` for unions/utilities
- Import order: React/Next → external libs → `@/` internal → relative
- Type imports: `import type { ... }`
- Server Components first; only add `'use client'` when needed
- Prefer Server Actions over Route Handlers for mutations
- Tailwind v4: uses `@theme` directive in CSS, not `tailwind.config.ts`; use `clsx`/`tailwind-merge` for conditional classes
- Rate limiting: use Upstash (`lib/upstash`) for public-facing endpoints
- Only `NEXT_PUBLIC_*` env vars may be used in client code
- Env vars: reference `.env.example`; feature flags via env for optional integrations
- Next.js config strips `console.*` except `console.error` in production
- Dashboard redirect: `/dashboard` → `/dashboard/settings`
