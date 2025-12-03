import type { ClassValue } from "clsx"
// clsx 和 tailwind-merge 结合使用，优化类名合并，安全的合并和条件化应用
// clsx 负责处理条件类名，
// tailwind-merge 负责处理 Tailwind CSS 类名冲突
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// 类名合并工具
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
