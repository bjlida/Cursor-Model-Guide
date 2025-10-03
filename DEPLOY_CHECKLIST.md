# ✅ 部署前检查清单

在部署之前，请确保完成以下检查项：

## 🔍 基础检查

- [ ] 代码已提交到 Git 仓库
- [ ] `.gitignore` 文件正确配置（排除 `node_modules`, `.next`, `out` 等）
- [ ] `package.json` 中的依赖项都已正确安装
- [ ] 本地开发模式运行正常 (`npm run dev`)
- [ ] 本地构建成功 (`npm run build`)

## 📝 配置文件检查

### next.config.js
- [ ] `output: 'export'` 已配置（静态导出）
- [ ] `images.unoptimized: true` 已设置
- [ ] 如果部署到子路径，`basePath` 已正确配置
- [ ] `trailingSlash` 设置符合需求

### package.json
- [ ] 项目名称、版本、描述已填写
- [ ] 仓库 URL 正确
- [ ] 构建脚本配置正确

### 环境变量（如果有）
- [ ] 生产环境变量已配置
- [ ] API 密钥等敏感信息未提交到代码库
- [ ] `.env.example` 文件已创建（如果使用环境变量）

## 🎨 内容检查

- [ ] 所有页面文字内容正确无误
- [ ] 图片资源都在 `public` 目录下
- [ ] 所有链接都可以正常访问
- [ ] 没有死链接或 404 错误
- [ ] SEO 元数据已设置（标题、描述等）

## 🚀 平台特定检查

### GitHub Pages
- [ ] 仓库已设置为 Public（或 Pro 账户的 Private）
- [ ] `.github/workflows/deploy.yml` 文件已配置
- [ ] GitHub Actions 权限已启用
- [ ] 如果使用自定义域名，`public/CNAME` 文件已创建

### Vercel
- [ ] `vercel.json` 配置文件已创建（可选）
- [ ] 环境变量已在 Vercel 控制面板配置
- [ ] 构建命令和输出目录设置正确

### Netlify
- [ ] `netlify.toml` 配置文件已创建
- [ ] 环境变量已在 Netlify 控制面板配置
- [ ] 重定向规则已配置（如需要）

## 🔒 安全检查

- [ ] 没有硬编码的 API 密钥或密码
- [ ] `.env` 文件已添加到 `.gitignore`
- [ ] 敏感数据使用环境变量
- [ ] HTTPS 已启用
- [ ] 安全头已配置（如 CSP、HSTS 等）

## 📊 性能优化

- [ ] 图片已优化（压缩、合适的格式）
- [ ] CSS 和 JS 已压缩
- [ ] 未使用的代码已删除
- [ ] 控制台没有错误或警告
- [ ] Lighthouse 得分检查通过

## 🧪 测试

- [ ] 所有主要功能已测试
- [ ] 筛选功能正常工作
- [ ] 对比功能正常工作
- [ ] 详情弹窗正常显示
- [ ] 响应式布局在不同设备上正常
- [ ] 所有浏览器兼容性测试通过

## 📱 移动端检查

- [ ] 移动端布局正确
- [ ] 触摸交互正常
- [ ] 字体大小适中
- [ ] 按钮易于点击

## 🌐 SEO 和可访问性

- [ ] 页面标题和描述已设置
- [ ] Open Graph 标签已配置
- [ ] 语义化 HTML 标签使用正确
- [ ] Alt 文本已添加到所有图片
- [ ] 键盘导航可用
- [ ] 颜色对比度符合标准

## 📝 文档

- [ ] README.md 完整且最新
- [ ] DEPLOYMENT.md 包含部署说明
- [ ] 代码注释清晰
- [ ] API 文档已更新（如适用）

## 🔄 部署后验证

- [ ] 网站可以正常访问
- [ ] 所有页面加载正常
- [ ] 静态资源加载正常
- [ ] 没有 404 错误
- [ ] 功能测试全部通过
- [ ] 性能表现符合预期

---

## 🎯 快速检查命令

```bash
# 清理并重新构建
npm run clean
npm install
npm run build

# 本地预览构建结果
npm run preview

# 检查构建输出
ls -la out/

# 检查 Git 状态
git status
```

---

## ✨ 部署

完成所有检查后，可以开始部署：

```bash
# 提交更改
git add .
git commit -m "Ready for deployment"
git push origin main

# 如果使用手动部署
npm run build
# 然后上传 out/ 目录到托管服务
```

---

**祝部署顺利！** 🚀

