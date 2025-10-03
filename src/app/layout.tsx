import './globals.css';

export const metadata = {
  title: 'Cursor AI 模型指南',
  description: 'Cursor AI 模型指南：基于 Next.js + Tailwind CSS 的静态站点，汇总各大厂商最新大模型，支持浏览、筛选、推荐标识、详细对比与使用技巧，帮助开发者快速选择合适模型。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
