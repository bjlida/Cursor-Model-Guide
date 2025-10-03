# 🚀 Cursor AI 模型指南

> 全面了解 Cursor 中的 AI 大模型、图标含义及适用场景

一个现代化的 Web 应用，帮助开发者了解和选择 Cursor AI 编辑器中的各种 AI 模型。

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.13-38B2AC)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)](https://www.typescriptlang.org/)

## ✨ 特性

### 🎯 核心功能
- **📊 模型展示**: 37+ AI 模型完整信息展示
- **🔍 智能筛选**: 按提供商、权限级别筛选模型
- **📱 详情查看**: 点击卡片查看模型详细介绍
- **⚖️ 模型对比**: 支持多模型对比功能

### 🎨 界面特色
- **渐变设计**: 现代化的渐变背景和视觉效果
- **交互动画**: 流畅的悬停和点击动画
- **响应式布局**: 完美支持桌面和移动设备
- **暗色主题**: 护眼的暗色系设计

## 🏗️ 技术栈

- **框架**: Next.js 15.5.4 (App Router)
- **UI库**: React 19.1.1
- **样式**: Tailwind CSS 4.1.13
- **语言**: TypeScript 5.9.2
- **部署**: Vercel (推荐)

## 📦 支持的模型提供商

### 🅰️ Anthropic
- Claude 4.5 系列
- Claude 4 系列 (含 1M 上下文版本)
- Claude 3.5 系列

### 🤖 OpenAI
- GPT-5 系列 (含 Fast, High, Medium, Low, Mini 等变体)
- GPT-4 系列 (GPT-4o, GPT-4.1)
- O系列推理模型 (O3 Pro, O3, O4 Mini)

### 🔍 Google
- Gemini 2.5 Pro
- Gemini 2.5 Flash
- Gemini 2.0 Flash (100万 token 上下文)

### 🌊 DeepSeek
- DeepSeek V3.1
- DeepSeek R1

### ❌ xAI (Grok)
- Grok 4 系列 (含 Fast Reasoning 和 Non-Reasoning 版本)
- Grok 3 系列
- Grok Code Fast 1

### 🌙 Moonshot
- Kimi K2 Instruct

### ⭐ 其他
- Code Supernova 1 Million

## 🚀 快速开始

### 前置要求

- Node.js 16.x 或更高版本
- npm 或 yarn 包管理器

### 安装

```bash
# 克隆项目
git clone https://github.com/bjlida/Cursor-Model-Guide.git

# 进入项目目录
cd Cursor-Model-Guide

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

#### 静态站点导出（推荐）

本项目已配置为静态站点生成（SSG），构建后生成纯静态 HTML/CSS/JS 文件：

```bash
# 构建静态站点
npm run build

# 构建完成后，静态文件将输出到 out/ 目录
# 可以直接部署到任何静态托管服务（GitHub Pages、Netlify、Vercel 等）
```

#### 本地预览静态站点

```bash
# 安装简单的 HTTP 服务器（如果没有）
npm install -g serve

# 预览静态站点
serve out

# 或使用 Python（Python 3）
cd out && python -m http.server 3000
```

#### 服务器模式（如需要）

```bash
# 构建
npm run build

# 启动 Next.js 服务器
npm start
```

## 📚 项目结构

```
Cursor-Model-Guide/
├── src/
│   ├── app/
│   │   ├── globals.css          # 全局样式
│   │   ├── layout.tsx           # 根布局
│   │   └── page.tsx             # 主页面
│   ├── components/
│   │   ├── Header.tsx           # 页头组件
│   │   ├── Footer.tsx           # 页脚组件
│   │   ├── Sidebar.tsx          # 筛选侧边栏
│   │   ├── ModelCard.tsx        # 模型卡片
│   │   ├── ModelDetailModal.tsx # 模型详情弹窗
│   │   ├── ComparisonBar.tsx    # 对比工具栏
│   │   └── ComparisonModal.tsx  # 对比弹窗
│   └── data/
│       └── models.ts            # 模型数据
├── public/
│   └── images/                  # 图片资源
├── MODELS_UPDATE.md             # 最新模型信息文档
└── PRD_Cursor_AI_Models_Guide.md # 产品需求文档
```

## 📖 使用说明

### 浏览模型
1. 打开应用首页
2. 滚动浏览所有可用的 AI 模型
3. 查看每个模型的基本信息和适用场景

### 筛选模型
1. 使用左侧筛选栏
2. 选择提供商（Anthropic、OpenAI、Google 等）
3. 选择权限级别（Free、Premium、MAX Only）
4. 点击"清除"按钮重置筛选

### 查看详情
1. 点击任意模型卡片
2. 查看完整的模型信息：
   - 性能指标（上下文窗口、速度、质量、价格）
   - 核心特性
   - 适用场景
   - 优势与限制
   - 使用建议

### 对比模型
1. 点击模型卡片的"添加到对比"按钮
2. 选择 2-4 个模型
3. 点击底部对比栏的"开始对比"
4. 查看详细的对比表格

## 🔄 最新更新

### 2025年10月更新
- ✅ 添加 37+ AI 模型支持
- ✅ 新增模型详情弹窗
- ✅ 优化筛选交互体验
- ✅ 添加性能评分和详细指标
- ✅ 更新最新模型信息文档

详见 [MODELS_UPDATE.md](./MODELS_UPDATE.md) 查看各厂商最新模型详情。

## 🎯 功能特色

### 模型信息
每个模型包含以下详细信息：
- 📝 模型描述和特点
- 📊 性能指标（上下文窗口、速度、质量）
- 💰 价格级别
- 🎯 适用场景
- ⚡ 核心特性
- ✅ 优势列表
- ⚠️ 限制说明
- 💡 使用建议

### 智能推荐
根据不同场景推荐最适合的模型：
- 日常开发
- 复杂项目
- 算法与推理
- 超大型项目
- 中文项目

## 🚀 部署

本项目已配置为**静态站点生成（SSG）**，可以零成本部署到任何静态托管服务。

### 快速部署

#### GitHub Pages（推荐）
本项目已包含 GitHub Actions 自动部署配置：
1. 推送代码到 GitHub
2. 在 Settings → Pages 中启用 "GitHub Actions"
3. 自动部署完成！

#### Vercel
1. 访问 [Vercel](https://vercel.com)
2. 导入 GitHub 仓库
3. 自动检测并部署

#### Netlify
1. 访问 [Netlify](https://netlify.com)
2. 连接 GitHub 仓库
3. 构建命令：`npm run build`，发布目录：`out`

### 详细部署指南

📖 查看 [DEPLOYMENT.md](./DEPLOYMENT.md) 获取完整的部署文档，包括：
- 各平台详细部署步骤
- 自定义域名配置
- 常见问题解决方案
- CI/CD 配置说明

## 🤝 贡献

欢迎贡献！请随时提交 Pull Request。

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📝 待办事项

- [ ] 添加模型性能基准测试数据
- [ ] 支持模型搜索功能
- [ ] 添加模型使用统计
- [ ] 支持多语言（英文、日文）
- [ ] 添加暗色/亮色主题切换
- [ ] 移动端优化

## 📄 许可证

ISC License

## 👨‍💻 作者

[@bjlida](https://github.com/bjlida)

## 🏢 技术支持

本项目由 [呀米科技](https://www.yamikeji.com) 提供技术支持

## 🙏 致谢

- [呀米科技](https://www.yamikeji.com) - 技术支持与开发
- [Cursor AI](https://cursor.sh/) - 优秀的 AI 代码编辑器
- [Next.js](https://nextjs.org/) - React 框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- 所有 AI 模型提供商

## 📮 联系方式

如有问题或建议，请通过以下方式联系：
- 📧 提交 [Issue](https://github.com/bjlida/Cursor-Model-Guide/issues)
- 💬 开启 [Discussion](https://github.com/bjlida/Cursor-Model-Guide/discussions)

---

⭐ 如果这个项目对你有帮助，请给个 Star！

**最后更新**: 2025年10月

