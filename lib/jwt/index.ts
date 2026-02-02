/**
 * JWT 跨子域认证工具类
 *
 * 用于在 .bitsfactor.com 域名下的多个子站之间共享用户登录状态。
 *
 * 使用示例:
 * ```typescript
 * import { set_auth_cookie, clear_auth_cookie } from '@/lib/jwt'
 *
 * // 设置 Cookie
 * await set_auth_cookie({ userId: '123', email: 'user@example.com', plan: 'pro' })
 *
 * // 清除 Cookie
 * await clear_auth_cookie()
 * ```
 */

import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const COOKIE_NAME = 'auth_token'

/**
 * 生成 JWT Token
 *
 * @param payload - 用户信息
 * @returns JWT Token 字符串
 */
export async function create_auth_token(payload: {
  userId: string
  email: string
  plan: string
}) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET)

  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('30d')
    .sign(secret)
}

/**
 * 验证并解析 JWT Token
 *
 * @param token - JWT Token 字符串
 * @returns 解析后的 payload
 */
export async function verify_auth_token(token: string) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET)
  const { payload } = await jwtVerify(token, secret)
  return payload
}

/**
 * 设置跨域 Cookie
 *
 * 将 JWT Token 写入 .bitsfactor.com 域名的 Cookie，
 * 使得所有子站都能读取到用户登录状态。
 *
 * @param payload - 用户信息
 */
export async function set_auth_cookie(payload: {
  userId: string
  email: string
  plan: string
}) {
  const token = await create_auth_token(payload)
  const cookie_store = await cookies()

  cookie_store.set(COOKIE_NAME, token, {
    domain: process.env.AUTH_COOKIE_DOMAIN || '.bitsfactor.com',
    path: '/',
    httpOnly: false,  // 前端需要读取
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60,  // 30天
  })
}

/**
 * 清除跨域 Cookie
 *
 * 用户登出时调用，清除 .bitsfactor.com 域名下的 auth_token Cookie。
 */
export async function clear_auth_cookie() {
  const cookie_store = await cookies()
  cookie_store.delete({
    name: COOKIE_NAME,
    domain: process.env.AUTH_COOKIE_DOMAIN || '.bitsfactor.com',
    path: '/',
  })
}
