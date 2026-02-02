/**
 * AuthTokenSync 组件
 *
 * 自动同步用户登录状态到跨域 Cookie。
 * 监听 Better Auth 的 session 变化，在登录/登出时自动更新 JWT Cookie。
 *
 * 使用方式:
 * 在根布局中添加此组件即可，无需传递任何 props。
 *
 * ```tsx
 * import { AuthTokenSync } from "@/components/auth/AuthTokenSync"
 *
 * // 在 layout.tsx 中
 * <AuthTokenSync />
 * ```
 */

"use client"

import { authClient } from "@/lib/auth/auth-client"
import { useEffect, useRef } from "react"

export function AuthTokenSync() {
  const { data: session } = authClient.useSession()
  const prev_user_id = useRef<string | null>(null)

  useEffect(() => {
    const current_user_id = session?.user?.id || null

    // 登录状态变化时同步 token
    if (current_user_id !== prev_user_id.current) {
      if (current_user_id) {
        // 用户登录了，刷新 token
        fetch('/api/auth/refresh-token', { method: 'POST' })
      } else if (prev_user_id.current) {
        // 用户登出了，清除 token
        fetch('/api/auth/clear-token', { method: 'POST' })
      }
      prev_user_id.current = current_user_id
    }
  }, [session?.user?.id])

  return null
}
