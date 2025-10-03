/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    // GitHub Pages 部署到子路径需要配置 basePath
    basePath: '/Cursor-Model-Guide',

    // 禁用图像优化（静态导出不支持）
    images: {
        unoptimized: true,
    },

    // 可选：尾部斜杠
    trailingSlash: true,
}

module.exports = nextConfig

