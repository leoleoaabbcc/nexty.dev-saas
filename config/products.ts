/**
 * 产品配置
 * 集中管理所有产品信息，方便未来添加更多产品
 *
 * 使用示例:
 * import { products, Product } from "@/config/products";
 * products.forEach(product => console.log(product.name));
 */

export type Product = {
  id: string;           // 产品唯一标识
  name: string;         // 产品名称（用于 i18n key）
  href: string;         // 产品链接
  icon: string;         // Lucide 图标名称
  external: boolean;    // 是否外部链接
};

export const products: Product[] = [
  {
    id: "clipboard-share",
    name: "ClipboardShare",
    href: "https://clipboard.bitsfactor.com/",
    icon: "Clipboard",
    external: true,
  },
  // 未来添加更多产品...
];
