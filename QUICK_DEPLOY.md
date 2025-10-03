# ⚡ 快速部署参考

## 🎯 推荐方式：GitHub Actions 自动部署

### ⚠️ 重要：CSS 加载配置

项目已配置 `basePath: '/Cursor-Model-Guide'` 以确保 CSS 正确加载。
如果 CSS 不加载，请查看 `CSS_LOADING_FIX.md` 文档。

### 一次性设置（只需做一次）

1. **推送代码到 GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **启用 GitHub Pages**
- 访问：https://github.com/bjlida/Cursor-Model-Guide/settings/pages
- Source：选择 **"GitHub Actions"**
- 保存

3. **完成！**
- 以后每次推送代码都会自动部署
- 无需手动操作

---

## 📦 可选方式：手动部署

### 选项 A：使用 npm 脚本（需要先安装 gh-pages）

```bash
# 安装 gh-pages（只需一次）
npm install --save-dev gh-pages

# 以后每次部署只需运行
npm run deploy:manual
```

### 选项 B：使用命令行工具

```bash
# 安装 gh-pages 全局工具（只需一次）
npm install -g gh-pages

# 构建并部署
npm run build
gh-pages -d out
```

---

## 🔄 日常工作流程

### 如果使用自动部署（推荐）

```bash
# 1. 修改代码
# 2. 提交并推送
git add .
git commit -m "Update features"
git push origin main

# 3. GitHub Actions 自动构建和部署
# 4. 几分钟后访问网站查看更新
```

### 如果使用手动部署

```bash
# 1. 修改代码
# 2. 提交代码（不包括 out 目录）
git add .
git commit -m "Update features"
git push origin main

# 3. 手动部署
npm run deploy:manual

# 4. 几分钟后访问网站查看更新
```

---

## ❓ 常见问题

### Q: out 目录要不要提交到 Git？
**A: 不要！** out 目录已在 .gitignore 中，是构建产物，不应提交。

### Q: 怎么查看部署状态？
**A:** 
- GitHub Actions: 仓库 → Actions 标签页
- 手动部署: GitHub Pages 设置页面

### Q: 部署需要多久？
**A:** 通常 2-5 分钟

### Q: 如何回滚到之前的版本？
**A:** 
- 自动部署: 回退 Git 提交，重新推送
- 手动部署: 检出之前的提交，重新运行部署

### Q: 可以同时使用多个部署方式吗？
**A:** 可以，但建议选择一种以避免混淆

---

## 🌐 访问网站

部署完成后，访问：
- https://bjlida.github.io/Cursor-Model-Guide/

---

## 📝 总结

| 方式 | 命令 | 频率 | 推荐度 |
|------|------|------|--------|
| GitHub Actions | `git push` | 自动 | ⭐⭐⭐⭐⭐ |
| npm 脚本 | `npm run deploy:manual` | 手动 | ⭐⭐⭐ |
| gh-pages CLI | `gh-pages -d out` | 手动 | ⭐⭐ |

**建议**: 使用 GitHub Actions 自动部署！
