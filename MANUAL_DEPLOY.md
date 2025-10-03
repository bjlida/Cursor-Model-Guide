# 🚀 手动部署到 GitHub Pages

如果您不想使用 GitHub Actions，可以手动部署：

## 方法 1：使用 gh-pages 工具（推荐）

### 步骤：

1. **安装 gh-pages**
```bash
npm install -g gh-pages
```

2. **构建项目**
```bash
npm run build
```

3. **部署到 gh-pages 分支**
```bash
gh-pages -d out
```

4. **配置 GitHub Pages**
   - 访问: https://github.com/bjlida/Cursor-Model-Guide/settings/pages
   - Source 选择: "Deploy from a branch"
   - Branch 选择: "gh-pages" 分支
   - 目录选择: "/ (root)"
   - 保存

5. **访问网站**
   - 等待几分钟部署完成
   - 访问: https://bjlida.github.io/Cursor-Model-Guide/

---

## 方法 2：添加到 package.json 脚本

### 1. 安装依赖
```bash
npm install --save-dev gh-pages
```

### 2. 添加脚本到 package.json
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d out"
  }
}
```

### 3. 一键部署
```bash
npm run deploy
```

---

## 注意事项

⚠️ **主分支（main）不应包含 out 目录**
- out 目录只存在于 gh-pages 分支
- 主分支只包含源代码
- .gitignore 已正确配置

✅ **推荐做法**
- 源代码推送到 main 分支
- 构建产物部署到 gh-pages 分支
- 或者使用 GitHub Actions 自动化

---

## 对比：自动 vs 手动部署

### GitHub Actions（自动）✨
✅ 推送代码自动部署
✅ 无需本地构建
✅ 一致的构建环境
✅ 部署历史记录
❌ 需要配置工作流（已完成）

### 手动部署
✅ 完全控制
✅ 可以预览后再部署
❌ 每次都要手动操作
❌ 容易忘记部署

---

## 快速命令参考

```bash
# 方案 A: 自动部署（推荐）
git add .
git commit -m "Update content"
git push origin main
# GitHub Actions 自动构建并部署

# 方案 B: 手动部署
npm run build
gh-pages -d out
```

---

**建议**: 使用 GitHub Actions 自动部署更方便！
