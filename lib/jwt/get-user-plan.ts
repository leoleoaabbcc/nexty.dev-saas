/**
 * 获取用户订阅计划
 *
 * 查询用户当前的活跃订阅，返回订阅计划名称。
 *
 * 使用示例:
 * ```typescript
 * import { get_user_plan } from '@/lib/jwt/get-user-plan'
 *
 * const plan = await get_user_plan('user-id-123')
 * // 返回: 'free' | 'Pro' | 'Premium' 等
 * ```
 */

import { db } from '@/lib/db'
import { subscriptions, pricingPlans } from '@/lib/db/schema'
import { eq, and } from 'drizzle-orm'

/**
 * 获取用户当前订阅计划名称
 *
 * @param user_id - 用户 ID
 * @returns 订阅计划名称，无订阅时返回 'free'
 */
export async function get_user_plan(user_id: string): Promise<string> {
  const result = await db
    .select({ plan_name: pricingPlans.cardTitle })
    .from(subscriptions)
    .innerJoin(pricingPlans, eq(subscriptions.planId, pricingPlans.id))
    .where(
      and(
        eq(subscriptions.userId, user_id),
        eq(subscriptions.status, 'active')
      )
    )
    .limit(1)

  return result[0]?.plan_name || 'free'
}
