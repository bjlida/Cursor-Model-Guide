/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // 可选：如果要部署到子路径，取消下面的注释并设置路径
    // basePath: '/your-subdirectory',

    // 禁用图像优化（静态导出不支持）
    images: {
        unoptimized: true,
    },

    // 可选：尾部斜杠
    trailingSlash: true,
}

module.exports = nextConfig

