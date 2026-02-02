/**
 * 刷新 JWT Token API
 *
 * 用于刷新用户的跨域认证 Cookie。
 * 在用户登录成功后或订阅状态变化后调用。
 *
 * POST /api/auth/refresh-token
 *
 * 返回:
 * - 成功: { success: true, plan: string }
 * - 失败: { error: 'Unauthorized' }, status: 401
 */

import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth/server'
import { set_auth_cookie } from '@/lib/jwt'
import { get_user_plan } from '@/lib/jwt/get-user-plan'

export async function POST() {
  const session = await getSession()

  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const plan = await get_user_plan(session.user.id)

  await set_auth_cookie({
    userId: session.user.id,
    email: session.user.email,
    plan,
  })

  return NextResponse.json({ success: true, plan })
}
