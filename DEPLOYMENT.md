# 🚀 部署指南

本文档详细说明如何将 Cursor AI 模型指南部署到各种静态托管平台。

## 📋 目录

- [快速开始](#快速开始)
- [GitHub Pages](#github-pages)
- [Vercel](#vercel)
- [Netlify](#netlify)
- [其他平台](#其他平台)
- [自定义域名](#自定义域名)
- [常见问题](#常见问题)

---

## 🎯 快速开始

### 本地构建

```bash
# 安装依赖
npm install

# 构建静态站点
npm run build

# 构建完成后，静态文件将输出到 out/ 目录
```

### 本地预览

```bash
# 方法1: 使用 serve
npm install -g serve
serve out

# 方法2: 使用 Python
cd out && python -m http.server 3000

# 方法3: 使用 http-server
npm install -g http-server
http-server out
```

---

## 🌐 GitHub Pages

### 方式一：GitHub Actions 自动部署（推荐）

本项目已包含 GitHub Actions 配置文件 `.github/workflows/deploy.yml`。

#### 配置步骤：

1. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "Setup static site generation"
   git push origin main
   ```

2. **启用 GitHub Pages**
   - 进入仓库 → Settings → Pages
   - Source 选择 "GitHub Actions"
   - 保存设置

3. **自动部署**
   - 每次推送到 `main` 分支会自动触发部署
   - 也可以在 Actions 页面手动触发

4. **访问网站**
   - 部署完成后，网站将在 `https://[你的用户名].github.io/Cursor-Model-Guide/` 可访问

#### 自定义子路径（如果需要）

如果你的站点部署在子路径（如 `/Cursor-Model-Guide/`），需要修改 `next.config.js`：

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/Cursor-Model-Guide', // 添加这一行
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}
```

### 方式二：手动部署

```bash
# 1. 构建
npm run build

# 2. 安装 gh-pages
npm install -g gh-pages

# 3. 部署到 gh-pages 分支
gh-pages -d out

# 4. 在 GitHub Settings → Pages 中选择 gh-pages 分支
```

---

## ⚡ Vercel

### 通过 Vercel 网站部署（推荐）

1. **访问 [Vercel](https://vercel.com)**

2. **导入项目**
   - 点击 "New Project"
   - 选择你的 GitHub 仓库
   - Vercel 会自动检测 Next.js 项目

3. **配置（可选）**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`
   - Vercel 会自动识别这些设置

4. **部署**
   - 点击 "Deploy"
   - 几分钟后即可访问

5. **自动部署**
   - 每次推送到主分支会自动重新部署

### 通过 Vercel CLI 部署

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 登录
vercel login

# 3. 部署
vercel

# 4. 生产部署
vercel --prod
```

---

## 📦 Netlify

### 通过 Netlify 网站部署

1. **访问 [Netlify](https://netlify.com)**

2. **导入项目**
   - 点击 "Add new site" → "Import an existing project"
   - 连接 GitHub 并选择仓库

3. **配置构建设置**
   - Build command: `npm run build`
   - Publish directory: `out`
   - 本项目已包含 `netlify.toml` 配置文件

4. **部署**
   - 点击 "Deploy site"
   - 每次推送会自动重新部署

### 通过 Netlify CLI 部署

```bash
# 1. 安装 Netlify CLI
npm install -g netlify-cli

# 2. 登录
netlify login

# 3. 初始化项目
netlify init

# 4. 部署
netlify deploy

# 5. 生产部署
netlify deploy --prod
```

---

## 🌍 其他平台

### Cloudflare Pages

1. 登录 Cloudflare Pages
2. 连接 GitHub 仓库
3. 配置：
   - Build command: `npm run build`
   - Build output directory: `out`
4. 部署

### AWS S3 + CloudFront

```bash
# 1. 构建
npm run build

# 2. 上传到 S3
aws s3 sync out/ s3://your-bucket-name --delete

# 3. 清除 CloudFront 缓存
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

### 阿里云 OSS

```bash
# 1. 安装 ossutil
# 下载地址: https://help.aliyun.com/document_detail/120075.html

# 2. 配置
ossutil config

# 3. 上传
npm run build
ossutil cp -r out/ oss://your-bucket-name/ -u
```

### 腾讯云 COS

```bash
# 1. 安装 COSCMD
pip install coscmd

# 2. 配置
coscmd config

# 3. 上传
npm run build
coscmd upload -r out/ / --delete
```

---

## 🔗 自定义域名

### GitHub Pages

1. 在仓库根目录创建 `public/CNAME` 文件：
   ```
   your-domain.com
   ```

2. 在域名提供商添加 DNS 记录：
   ```
   类型: CNAME
   名称: www (或 @)
   值: [你的用户名].github.io
   ```

### Vercel

1. 在 Vercel 项目设置中点击 "Domains"
2. 添加你的域名
3. 按照提示配置 DNS 记录

### Netlify

1. 在 Netlify 项目设置中点击 "Domain management"
2. 添加自定义域名
3. 按照提示配置 DNS 记录

---

## ❓ 常见问题

### 1. 为什么选择静态站点生成？

**优势：**
- ⚡ 超快加载速度
- 💰 零运行成本（免费托管）
- 🔒 更高的安全性
- 📈 更好的 SEO
- 🌍 全球 CDN 加速

**适用场景：**
- 内容不需要服务器端渲染
- 数据不频繁变化
- 需要高性能和低成本

### 2. 构建失败怎么办？

```bash
# 清除缓存
rm -rf .next node_modules

# 重新安装依赖
npm install

# 重新构建
npm run build
```

### 3. 如何更新内容？

1. 修改代码或数据
2. 提交并推送到 GitHub
3. 自动部署（如果配置了 CI/CD）
4. 或手动运行 `npm run build` 并重新部署

### 4. 如何查看构建日志？

- **GitHub Actions**: 仓库 → Actions → 点击工作流运行
- **Vercel**: 项目 → Deployments → 点击部署记录
- **Netlify**: 项目 → Deploys → 点击部署记录

### 5. 页面 404 错误

确保：
- `next.config.js` 中的 `basePath` 设置正确
- `trailingSlash` 配置与托管平台一致
- 所有链接使用相对路径或正确的绝对路径

### 6. CSS 样式丢失

检查：
- 确保 `public` 目录下的文件正确复制到 `out` 目录
- 检查控制台是否有资源加载错误
- 确认 `basePath` 配置正确

### 7. 如何启用 HTTPS？

大多数现代托管平台（GitHub Pages、Vercel、Netlify）都自动提供免费的 HTTPS 证书。只需：
- GitHub Pages: Settings → Pages → 勾选 "Enforce HTTPS"
- Vercel/Netlify: 自动启用

---

## 📚 相关资源

- [Next.js 静态导出文档](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [Vercel 文档](https://vercel.com/docs)
- [Netlify 文档](https://docs.netlify.com/)

---

## 🆘 需要帮助？

如果遇到问题：
1. 查看本文档的常见问题部分
2. 在 GitHub Issues 中搜索类似问题
3. 提交新的 Issue 并提供详细信息

---

**祝部署顺利！** 🎉

