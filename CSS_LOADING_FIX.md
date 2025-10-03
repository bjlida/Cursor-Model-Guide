# 🔧 CSS 加载问题修复说明

## ❗ 问题描述

GitHub Pages 部署后，CSS 样式不加载，页面显示无样式的 HTML。

## 🔍 原因分析

当部署到 GitHub Pages 的**子路径**时（如 `https://bjlida.github.io/Cursor-Model-Guide/`），Next.js 需要知道应用的基础路径，否则它会从根路径（`/`）加载 CSS 和 JavaScript 文件，导致 404 错误。

**错误的资源路径**：
```
https://bjlida.github.io/_next/static/css/app.css  ❌ 404 Not Found
```

**正确的资源路径**：
```
https://bjlida.github.io/Cursor-Model-Guide/_next/static/css/app.css  ✅
```

## ✅ 解决方案

在 `next.config.js` 中添加 `basePath` 配置：

```javascript
const nextConfig = {
    output: 'export',
    basePath: '/Cursor-Model-Guide',  // 添加这一行
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
}
```

## 🚀 部署步骤

### 1. 重新构建（已完成 ✓）
```bash
npm run build
```

### 2. 提交并推送更改
```bash
git add next.config.js
git commit -m "Fix: Add basePath for GitHub Pages deployment"
git push origin main
```

### 3. 等待 GitHub Actions 自动部署
- 访问：https://github.com/bjlida/Cursor-Model-Guide/actions
- 等待工作流完成（约 2-5 分钟）
- 状态显示为绿色勾号 ✓

### 4. 验证部署
访问：https://bjlida.github.io/Cursor-Model-Guide/

**检查项**：
- ✅ 页面有样式（渐变背景、卡片样式等）
- ✅ 所有交互功能正常
- ✅ 浏览器控制台无 404 错误

## 🔄 如果还是有问题

### 方法 1：强制刷新浏览器缓存
```
Windows: Ctrl + Shift + R
Mac: Cmd + Shift + R
```

### 方法 2：清除浏览器缓存
1. 打开浏览器开发者工具（F12）
2. 右键点击刷新按钮
3. 选择"清空缓存并硬性重新加载"

### 方法 3：检查 GitHub Actions 部署日志
1. 访问：https://github.com/bjlida/Cursor-Model-Guide/actions
2. 点击最新的工作流运行
3. 查看构建和部署日志
4. 确认没有错误

### 方法 4：验证构建输出
```bash
# 查看构建输出的 HTML
cat out/index.html | grep "_next"

# 应该看到类似这样的路径：
# /Cursor-Model-Guide/_next/static/...
```

## 📝 本地开发注意事项

### 开发模式（不受影响）
```bash
npm run dev
# 访问: http://localhost:3000
# basePath 在开发模式下会自动处理
```

### 预览生产构建
```bash
npm run build
npm run preview
# 访问: http://localhost:3000/Cursor-Model-Guide/
# 注意：需要包含 /Cursor-Model-Guide/ 路径
```

## 🌐 不同部署场景的配置

### 场景 1：GitHub Pages 子路径（当前配置）
```javascript
basePath: '/Cursor-Model-Guide'
```
访问地址：`https://bjlida.github.io/Cursor-Model-Guide/`

### 场景 2：GitHub Pages 根域名
如果使用自定义域名（如 `your-domain.com`）：
```javascript
// 不需要 basePath，或者设置为空
basePath: ''
```
访问地址：`https://your-domain.com/`

### 场景 3：Vercel/Netlify
```javascript
// 不需要 basePath
// 这些平台会自动处理
```

## 🎯 快速检查清单

部署后，检查以下项目：

- [ ] 访问网站，页面有完整样式
- [ ] 打开浏览器控制台（F12）→ Network 标签
- [ ] 刷新页面
- [ ] 确认所有 CSS 和 JS 文件都是 200 状态（不是 404）
- [ ] 确认资源路径包含 `/Cursor-Model-Guide/`

## 📚 相关资源

- [Next.js basePath 文档](https://nextjs.org/docs/app/api-reference/next-config-js/basePath)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [Next.js 静态导出文档](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

---

## ✨ 现在的状态

✅ **已修复**：添加了 `basePath: '/Cursor-Model-Guide'` 配置
✅ **已构建**：项目重新构建成功
📤 **待执行**：推送代码到 GitHub 触发自动部署

**下一步**：
```bash
git add next.config.js
git commit -m "Fix: Add basePath for GitHub Pages deployment"
git push origin main
```

几分钟后访问 https://bjlida.github.io/Cursor-Model-Guide/ 验证修复！🎉

