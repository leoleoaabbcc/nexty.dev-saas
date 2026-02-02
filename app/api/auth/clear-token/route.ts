/**
 * 清除 JWT Token API
 *
 * 用于清除用户的跨域认证 Cookie。
 * 在用户登出时调用。
 *
 * POST /api/auth/clear-token
 *
 * 返回:
 * - 成功: { success: true }
 */

import { NextResponse } from 'next/server'
import { clear_auth_cookie } from '@/lib/jwt'

export async function POST() {
  await clear_auth_cookie()
  return NextResponse.json({ success: true })
}
