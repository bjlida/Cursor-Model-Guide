export interface AIModel {
    id: string;
    name: string;
    provider: 'Anthropic' | 'OpenAI' | 'Google' | 'DeepSeek' | 'xAI' | 'Moonshot' | 'Other';
    tier: 'Free' | 'Premium' | 'MAX Only';
    autoSupport: boolean;
    maxOnly: boolean;
    description: string;
    features: {
        auto?: boolean;
        fast?: boolean;
        highPerformance?: boolean;
        multimodal?: boolean;
        largeContext?: boolean;
        codex?: boolean;
        reasoning?: boolean;
    };
    scenarios: string[];
    icons: {
        auto?: string;
        tier?: string;
        provider?: string;
    };
    // 新增详细信息
    recommended?: boolean; // 是否为推荐模型
    contextWindow?: string; // 上下文窗口大小
    speed?: number; // 响应速度评分 1-5
    quality?: number; // 质量评分 1-5
    pricing?: 'Low' | 'Medium' | 'High' | 'Very High'; // 价格级别
    releaseDate?: string; // 发布日期
    strengths?: string[]; // 优势
    limitations?: string[]; // 限制
    bestFor?: string[]; // 最适合的场景
    notRecommendedFor?: string[]; // 不推荐的场景
    usageTips?: string[]; // 推荐用法和提问技巧
}

export const models: AIModel[] = [
    // Claude Models
    {
        id: 'claude-4.5-sonnet',
        name: 'Claude 4.5 Sonnet',
        provider: 'Anthropic',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: 'Claude 4.5 最新版本，提升的推理能力和代码质量。',
        features: { auto: true, highPerformance: true },
        scenarios: ['高级代码生成', '复杂逻辑推理', '系统架构设计'],
        icons: { auto: '🧠', provider: '🅰️' },
        recommended: true,
        contextWindow: '200K tokens',
        speed: 4,
        quality: 5,
        pricing: 'High',
        releaseDate: '2025-01',
        strengths: [
            '卓越的代码理解和生成能力',
            '强大的多轮对话能力',
            '优秀的中文支持',
            '精准的上下文理解',
            '出色的代码重构建议'
        ],
        limitations: [
            '响应速度相对较慢',
            '成本较高',
            '对实时任务不太适合'
        ],
        bestFor: [
            '企业级代码库开发',
            '复杂系统架构设计',
            '代码审查和重构',
            '技术文档编写',
            '算法优化'
        ],
        notRecommendedFor: [
            '快速原型开发',
            '简单的代码补全',
            '实时聊天场景'
        ],
        usageTips: [
            '💬 提供完整的上下文：详细描述项目背景、技术栈和具体需求',
            '📝 分步骤提问：将复杂任务拆分成多个小问题，逐步深入',
            '🎯 明确目标：清楚说明期望的输出格式、代码风格和性能要求',
            '📚 引用代码片段：粘贴相关代码，让模型理解现有架构',
            '🔄 迭代优化：根据初步结果继续追问，不断完善方案',
            '⚡ 使用专业术语：使用准确的技术术语可以获得更专业的回答',
            '📋 提供示例：给出期望的输入输出示例，让模型更好理解需求',
            '🚫 避免过于宽泛：不要问"帮我写个网站"，而要具体到某个功能模块'
        ]
    },
    {
        id: 'claude-4-sonnet',
        name: 'Claude 4 Sonnet',
        provider: 'Anthropic',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: '最新的 Claude 4 模型，具备强大的推理能力。',
        features: { auto: true, highPerformance: true },
        scenarios: ['复杂逻辑推理', '高质量代码生成', '系统架构设计'],
        icons: { auto: '🧠', provider: '🅰️' },
    },
    {
        id: 'claude-3.5-sonnet',
        name: 'Claude 3.5 Sonnet',
        provider: 'Anthropic',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: 'Claude 3.5 的稳定高性能版本。',
        features: { auto: true, highPerformance: true },
        scenarios: ['日常编码任务', '代码审查', '技术文档编写'],
        icons: { auto: '🧠', provider: '🅰️' },
    },
    {
        id: 'claude-3.5-haiku',
        name: 'Claude 3.5 Haiku',
        provider: 'Anthropic',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: '快速轻量的 Claude 3.5 版本，适合快速响应。',
        features: { auto: true, fast: true },
        scenarios: ['快速代码建议', '实时问答', '简单任务处理'],
        icons: { auto: '🧠', provider: '🅰️' },
        contextWindow: '200K tokens',
        speed: 5,
        quality: 3,
        pricing: 'Low',
        releaseDate: '2024-10',
        strengths: [
            '响应速度极快',
            '成本低廉，适合大量使用',
            '良好的中英文支持',
            '轻量级但功能完整',
            '适合简单到中等复杂度任务'
        ],
        limitations: [
            '处理复杂任务能力有限',
            '代码质量不如Sonnet系列',
            '不适合需要深度分析的场景',
            '上下文理解较浅'
        ],
        bestFor: [
            '个人学习项目',
            '小型Web应用开发',
            '脚本自动化',
            'Markdown文档编写',
            '代码格式化',
            '简单Bug修复',
            'Git提交信息生成',
            '代码注释生成'
        ],
        notRecommendedFor: [
            '企业级大型项目',
            '复杂系统设计',
            '性能关键型应用',
            '算法研究'
        ]
    },
    {
        id: 'claude-4-sonnet-1m',
        name: 'Claude 4 Sonnet 1M',
        provider: 'Anthropic',
        tier: 'MAX Only',
        autoSupport: true,
        maxOnly: true,
        description: '超大上下文窗口 (1M tokens)，适用于大型项目分析。',
        features: { auto: true, largeContext: true },
        scenarios: ['超大项目代码库分析', '大规模重构任务', '多文件关联分析'],
        icons: { auto: '🧠', tier: '💎', provider: '🅰️' },
    },
    {
        id: 'claude-4-opus',
        name: 'Claude 4 Opus',
        provider: 'Anthropic',
        tier: 'MAX Only',
        autoSupport: true,
        maxOnly: true,
        description: '顶级性能的 Claude 4 模型，提供卓越的代码质量和推理能力。',
        features: { auto: true, highPerformance: true },
        scenarios: ['顶级代码生成', '复杂系统设计', '高难度问题解决', '代码审查'],
        icons: { auto: '🧠', tier: '💎', provider: '🅰️' },
    },
    {
        id: 'claude-4.1-opus',
        name: 'Claude 4.1 Opus',
        provider: 'Anthropic',
        tier: 'MAX Only',
        autoSupport: true,
        maxOnly: true,
        description: '最高质量的代码生成和分析，Claude 4.1 的旗舰版本。',
        features: { auto: true, highPerformance: true },
        scenarios: ['最高质量的代码生成', '复杂算法实现', '企业级代码审查', '架构优化'],
        icons: { auto: '🧠', tier: '💎', provider: '🅰️' },
    },

    // GPT-5 Models
    {
        id: 'gpt-5',
        name: 'GPT-5',
        provider: 'OpenAI',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: '最新的 GPT-5 模型，通用高质量代码生成和问题解决。',
        features: { auto: true, highPerformance: true },
        scenarios: ['通用高质量代码生成', '问题解决', '复杂任务'],
        icons: { auto: '🧠', provider: '🤖' },
        recommended: true,
        contextWindow: '128K tokens',
        speed: 4,
        quality: 5,
        pricing: 'High',
        releaseDate: '2025-02',
        strengths: [
            '全面的编程语言支持',
            '优秀的代码生成质量',
            '强大的问题理解能力',
            '良好的上下文连贯性',
            '快速的迭代响应'
        ],
        limitations: [
            '对超大型项目支持有限',
            '中文支持相对较弱',
            '成本较高'
        ],
        bestFor: [
            '全栈Web开发',
            'API设计与实现',
            '数据结构与算法',
            '代码优化',
            '单元测试编写'
        ],
        notRecommendedFor: [
            '超大型代码库分析',
            '纯中文项目',
            '低延迟实时场景'
        ],
        usageTips: [
            '🎯 直接且具体：OpenAI模型喜欢直接明确的指令，避免过于委婉',
            '📊 结构化提问：使用列表、步骤或清晰的格式组织你的问题',
            '💡 给出角色定位：如"你是一个高级全栈工程师"可以提升回答质量',
            '🔍 要求解释：添加"请解释你的思路"可以获得更详细的分析',
            '📝 指定编程语言：明确说明使用的语言版本和框架版本',
            '⚙️ 说明约束条件：如性能要求、兼容性需求、代码规范等',
            '🧪 请求多个方案：问"给我3种不同的实现方式"获得更多选择',
            '✅ 要求最佳实践：加上"遵循最佳实践"获得更规范的代码'
        ]
    },
    {
        id: 'gpt-5-fast',
        name: 'GPT-5 Fast',
        provider: 'OpenAI',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: '快速响应版本，适合实时代码补全和建议。',
        features: { auto: true, fast: true },
        scenarios: ['快速代码补全', '实时建议', '对话式编程'],
        icons: { auto: '🧠', provider: '🤖' },
        recommended: true,
        contextWindow: '128K tokens',
        speed: 5,
        quality: 4,
        pricing: 'Medium',
        releaseDate: '2025-02',
        strengths: [
            '极快的响应速度，几乎即时',
            '良好的代码补全质量',
            '支持多种编程语言',
            '成本相对较低',
            '适合高频使用'
        ],
        limitations: [
            '复杂任务质量略低于标准版',
            '上下文理解深度有限',
            '不适合需要深度推理的场景'
        ],
        bestFor: [
            '敏捷开发项目',
            '快速原型设计',
            'Pair Programming',
            '代码审查辅助',
            '实时代码建议',
            'Bug快速修复',
            '小型脚本编写',
            'IDE集成开发'
        ],
        notRecommendedFor: [
            '复杂算法设计',
            '大型架构规划',
            '深度代码分析',
            '性能优化任务'
        ],
        usageTips: [
            '⚡ 简短精准：提问要简洁明了，直奔主题',
            '🎯 单一任务：一次只问一个小问题，避免复杂的组合需求',
            '📝 代码优先：直接说"写一个XXX函数"比长篇描述更有效',
            '🔧 快速迭代：利用快速响应优势，多轮小步调整而非一次到位',
            '💬 使用模板：对于常见任务，使用固定的提问模板提高效率',
            '📋 明确格式：如"给我一个函数，输入X，输出Y"这样的结构化描述',
            '🚀 利用上下文：在对话中连续提问，利用已有上下文加速响应',
            '⏱️ 时间敏感场景：在需要快速反馈时优先选择，如现场演示或结对编程'
        ]
    },
    {
        id: 'gpt-5-medium',
        name: 'GPT-5 Medium',
        provider: 'OpenAI',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: '中等性能版本，平衡质量与速度的理想选择。',
        features: { auto: true },
        scenarios: ['日常代码编写', '代码重构', '文档生成'],
        icons: { auto: '🧠', provider: '🤖' },
    },
    {
        id: 'gpt-5-medium-fast',
        name: 'GPT-5 Medium Fast',
        provider: 'OpenAI',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: '中等质量的快速响应版本，适合高频交互场景。',
        features: { auto: true, fast: true },
        scenarios: ['高频代码建议', '快速问题解答', '实时协作'],
        icons: { auto: '🧠', provider: '🤖' },
    },
    {
        id: 'gpt-5-high',
        name: 'GPT-5 High',
        provider: 'OpenAI',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: '高性能版本，提供更深入的代码分析和优化建议。',
        features: { auto: true, highPerformance: true },
        scenarios: ['复杂算法优化', '性能调优', '架构设计'],
        icons: { auto: '🧠', provider: '🤖' },
    },
    {
        id: 'gpt-5-high-fast',
        name: 'GPT-5 High Fast',
        provider: 'OpenAI',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: '高性能的快速版本，兼顾质量与速度。',
        features: { auto: true, fast: true, highPerformance: true },
        scenarios: ['高质量快速开发', '敏捷迭代', '紧急问题修复'],
        icons: { auto: '🧠', provider: '🤖' },
    },
    {
        id: 'gpt-5-codex',
        name: 'GPT-5 Codex',
        provider: 'OpenAI',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: '专门为代码生成和编程辅助优化的模型。',
        features: { auto: true, codex: true },
        scenarios: ['专业代码生成', '编程辅助', 'API使用示例'],
        icons: { auto: '🧠', provider: '🤖' },
    },
    {
        id: 'gpt-5-mini',
        name: 'GPT-5 Mini',
        provider: 'OpenAI',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: '轻量级 GPT-5 版本，快速响应且成本更低。',
        features: { auto: true, fast: true },
        scenarios: ['快速代码补全', '简单问题解答', '日常编码辅助'],
        icons: { auto: '🧠', provider: '🤖' },
    },
    {
        id: 'gpt-5-low',
        name: 'GPT-5 Low',
        provider: 'OpenAI',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: '低复杂度场景优化版本，适合简单任务。',
        features: { auto: true },
        scenarios: ['简单代码生成', '基础问答', '代码格式化'],
        icons: { auto: '🧠', provider: '🤖' },
    },
    {
        id: 'gpt-5-low-fast',
        name: 'GPT-5 Low Fast',
        provider: 'OpenAI',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: '低复杂度的快速版本，即时响应。',
        features: { auto: true, fast: true },
        scenarios: ['即时代码建议', '快速语法修正', '简单重构'],
        icons: { auto: '🧠', provider: '🤖' },
    },
    {
        id: 'gpt-4.1',
        name: 'GPT-4.1',
        provider: 'OpenAI',
        tier: 'Premium',
        autoSupport: false,
        maxOnly: false,
        description: 'GPT-4 的改进版本，更好的代码理解能力。',
        features: { highPerformance: true },
        scenarios: ['复杂代码分析', '多语言编程', '技术方案设计'],
        icons: { provider: '🤖' },
    },
    {
        id: 'gpt-4o',
        name: 'GPT-4o',
        provider: 'OpenAI',
        tier: 'Premium',
        autoSupport: false,
        maxOnly: false,
        description: 'GPT-4 的优化版本，具备多模态能力。',
        features: { multimodal: true },
        scenarios: ['多模态任务', '代码与图像结合', 'UI设计分析'],
        icons: { provider: '🤖' },
    },

    // O系列模型 (OpenAI)
    {
        id: 'o3-pro',
        name: 'O3 Pro',
        provider: 'OpenAI',
        tier: 'MAX Only',
        autoSupport: true,
        maxOnly: true,
        description: '专业级推理模型，适合最复杂的编程任务。',
        features: { auto: true, highPerformance: true, reasoning: true },
        scenarios: ['深度推理', '复杂算法设计', '系统优化', '难题解决'],
        icons: { auto: '🧠', tier: '💎', provider: '🤖' },
        recommended: true,
        contextWindow: '200K tokens',
        speed: 2,
        quality: 5,
        pricing: 'Very High',
        releaseDate: '2024-12',
        strengths: [
            '顶级的推理和逻辑能力',
            '卓越的复杂问题解决能力',
            '深度代码分析和优化',
            '数学和算法专长',
            '多步骤任务规划'
        ],
        limitations: [
            '响应速度较慢',
            '成本非常高',
            '仅MAX用户可用',
            '不适合简单任务'
        ],
        bestFor: [
            '复杂算法研究与实现',
            '系统性能优化',
            '难题攻克与调试',
            '算法竞赛解题',
            '科研级代码开发'
        ],
        notRecommendedFor: [
            '日常代码编写',
            '快速原型开发',
            '简单CRUD操作',
            '代码格式化'
        ],
        usageTips: [
            '🧠 描述问题本质：不只是要代码，而是说明你要解决的核心问题',
            '📐 提供数学背景：如果涉及算法，说明数学原理和复杂度要求',
            '🔬 分解复杂问题：将大问题拆解成逻辑清晰的子问题',
            '📊 给出测试用例：提供边界条件和特殊情况的测试数据',
            '⚡ 说明性能目标：明确时间复杂度和空间复杂度的要求',
            '🎓 引用理论：提及相关算法理论或设计模式可以获得更专业的方案',
            '🔄 要求推理过程：让模型展示思考步骤，验证逻辑正确性',
            '💎 强调质量优先：明确说明"不追求速度，追求最优解"'
        ]
    },
    {
        id: 'o3',
        name: 'O3',
        provider: 'OpenAI',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: '强大的推理模型，擅长解决复杂问题。',
        features: { auto: true, reasoning: true },
        scenarios: ['逻辑推理', '算法优化', '问题诊断', '代码优化'],
        icons: { auto: '🧠', provider: '🤖' },
    },
    {
        id: 'o4-mini',
        name: 'O4 Mini',
        provider: 'OpenAI',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: '轻量级推理模型，快速处理中等复杂度任务。',
        features: { auto: true, fast: true, reasoning: true },
        scenarios: ['快速推理', '中等难度算法', '代码调试'],
        icons: { auto: '🧠', provider: '🤖' },
    },

    // Gemini Models
    {
        id: 'gemini-2.5-pro',
        name: 'Gemini 2.5 Pro',
        provider: 'Google',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: 'Google 的高性能多模态模型。',
        features: { auto: true, multimodal: true },
        scenarios: ['多模态开发任务', '支持图像和代码结合', '数据分析'],
        icons: { auto: '🧠', provider: '🇬' },
        recommended: true,
        contextWindow: '1M tokens',
        speed: 4,
        quality: 4,
        pricing: 'High',
        releaseDate: '2024-12',
        strengths: [
            '卓越的多模态处理能力',
            '超大上下文窗口(100万token)',
            '强大的数据分析能力',
            '优秀的图像理解',
            '与Google生态系统集成'
        ],
        limitations: [
            '代码生成质量不如专业模型',
            '在纯代码任务上表现一般',
            '中文支持相对较弱'
        ],
        bestFor: [
            'AI驱动的数据分析项目',
            '图像处理应用开发',
            'UI/UX设计辅助',
            '多媒体内容项目',
            'Google Cloud项目',
            'Vision AI应用',
            '文档OCR项目',
            '数据可视化'
        ],
        notRecommendedFor: [
            '纯后端API开发',
            '性能关键型算法',
            '嵌入式系统开发',
            '纯命令行工具'
        ],
        usageTips: [
            '🎨 描述视觉元素：如果涉及UI，详细描述颜色、布局、交互效果',
            '📊 数据可视化需求：说明想要的图表类型和数据呈现方式',
            '🖼️ 提供设计参考：可以描述参考的网站或应用的设计风格',
            '📱 说明设备平台：明确是Web、移动端还是跨平台应用',
            '🎯 用户体验目标：描述期望的用户交互流程和体验',
            '🌈 设计系统：提及使用的设计系统如Material Design',
            '📐 响应式要求：说明在不同屏幕尺寸下的表现需求',
            '♿ 无障碍需求：如有需要，提及可访问性和无障碍设计要求'
        ]
    },
    {
        id: 'gemini-2.5-flash',
        name: 'Gemini 2.5 Flash',
        provider: 'Google',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: '快速响应的多模态版本，适合实时交互。',
        features: { auto: true, fast: true, multimodal: true },
        scenarios: ['快速多模态响应', '实时交互', '创意生成'],
        icons: { auto: '🧠', provider: '🇬' },
    },

    // DeepSeek Models
    {
        id: 'deepseek-v3.1',
        name: 'DeepSeek V3.1',
        provider: 'DeepSeek',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: 'DeepSeek 最新版本，提升的代码理解和生成能力。',
        features: { auto: true, highPerformance: true },
        scenarios: ['高质量代码生成', '复杂逻辑推理', '算法优化'],
        icons: { auto: '🧠', provider: '🌊' },
        recommended: true,
        contextWindow: '128K tokens',
        speed: 4,
        quality: 4,
        pricing: 'Medium',
        releaseDate: '2025-01',
        strengths: [
            '优秀的代码理解能力',
            '强大的中文支持',
            '算法优化专长',
            '性价比高',
            '技术文档理解准确'
        ],
        limitations: [
            '国际化场景支持一般',
            '部分前沿技术支持滞后',
            '社区资源相对较少'
        ],
        bestFor: [
            '国内技术栈项目',
            '算法与数据结构',
            '后端API开发',
            '数据库设计',
            '中文技术文档项目',
            '微服务架构',
            'Python项目开发',
            'Go语言开发'
        ],
        notRecommendedFor: [
            '纯英文国际项目',
            '前端UI/UX设计',
            '移动端开发',
            '游戏开发'
        ],
        usageTips: [
            '🇨🇳 中英混合：可以用中文描述需求，用英文指定技术细节',
            '📊 算法导向：提问时强调算法效率和数据结构选择',
            '🔍 详细背景：提供充分的业务背景和技术约束',
            '💻 代码示例：给出现有代码片段，让模型理解你的编码风格',
            '📚 引用文档：提及具体的技术文档或API文档链接',
            '🎯 明确技术栈：说清楚Python版本、Go版本等具体环境',
            '⚙️ 性能要求：明确说明对性能、并发、吞吐量的要求',
            '🔧 工程化思维：询问时考虑代码的可维护性、可测试性等工程因素'
        ]
    },
    {
        id: 'deepseek-r1-0528',
        name: 'DeepSeek R1',
        provider: 'DeepSeek',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: '推理密集型编程任务的理想选择。',
        features: { auto: true, reasoning: true },
        scenarios: ['推理密集型编程任务', '逻辑验证', '算法分析'],
        icons: { auto: '🧠', provider: '🌊' },
    },

    // Grok Models (xAI)
    {
        id: 'grok-4-fast-reasoning',
        name: 'Grok 4 Fast Reasoning',
        provider: 'xAI',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: 'Grok 4 的快速推理版本，适合需要快速思考的场景。',
        features: { auto: true, fast: true, reasoning: true },
        scenarios: ['快速推理任务', '实时问题解决', '算法优化'],
        icons: { auto: '🧠', provider: '❌' },
    },
    {
        id: 'grok-4-fast-non-reasoning',
        name: 'Grok 4 Fast Non-Reasoning',
        provider: 'xAI',
        tier: 'Premium',
        autoSupport: false,
        maxOnly: false,
        description: 'Grok 4 快速版本，无推理增强，适合简单任务。',
        features: { fast: true },
        scenarios: ['快速代码生成', '简单问答', '代码补全'],
        icons: { provider: '❌' },
    },
    {
        id: 'grok-4',
        name: 'Grok 4',
        provider: 'xAI',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: 'Grok 最新主力模型，强大的代码理解能力。',
        features: { auto: true, highPerformance: true },
        scenarios: ['复杂代码生成', '系统设计', '技术方案'],
        icons: { auto: '🧠', provider: '❌' },
        contextWindow: '128K tokens',
        speed: 4,
        quality: 4,
        pricing: 'High',
        releaseDate: '2025-01',
        strengths: [
            '创新的代码解决方案',
            '优秀的系统架构设计能力',
            '独特的问题分析视角',
            '前沿技术支持好',
            '实时信息获取能力'
        ],
        limitations: [
            '稳定性还在提升中',
            '社区支持相对较少',
            '文档和示例不够丰富',
            '某些场景下不够成熟'
        ],
        bestFor: [
            '创新技术项目',
            '实验性功能开发',
            'AI驱动的应用',
            'Web3/区块链项目',
            '实时数据处理',
            '新技术栈探索',
            '前沿框架应用',
            '研究型项目'
        ],
        notRecommendedFor: [
            '传统企业项目',
            '稳定性要求极高的系统',
            '遗留系统维护',
            '保守技术栈'
        ],
        usageTips: [
            '🚀 探索新技术：询问最新技术趋势和前沿框架的使用方法',
            '💡 创新思维：鼓励模型提供创新的、非传统的解决方案',
            '🔮 未来导向：询问技术的发展方向和最佳实践',
            '🌐 实时信息：利用其获取最新信息的能力，询问最新的技术动态',
            '🧪 实验性功能：大胆尝试新功能，询问beta版本或实验性API',
            '📱 现代化方案：要求使用最新的语言特性和现代化工具链',
            '🎯 开放式问题：问"有什么更好的方式"鼓励创新建议',
            '🔄 迭代改进：基于初步方案持续优化，探索多种可能性'
        ]
    },
    {
        id: 'grok-3',
        name: 'Grok 3',
        provider: 'xAI',
        tier: 'Premium',
        autoSupport: false,
        maxOnly: false,
        description: 'Grok 3 代模型，稳定可靠的代码助手。',
        features: { highPerformance: true },
        scenarios: ['日常编码', '代码审查', '技术咨询'],
        icons: { provider: '❌' },
    },
    {
        id: 'grok-3-mini',
        name: 'Grok 3 Mini',
        provider: 'xAI',
        tier: 'Premium',
        autoSupport: false,
        maxOnly: false,
        description: '轻量级 Grok 3，快速响应且效率高。',
        features: { fast: true },
        scenarios: ['快速编码', '简单任务', '代码补全'],
        icons: { provider: '❌' },
    },
    {
        id: 'grok-code-fast-1',
        name: 'Grok Code Fast 1',
        provider: 'xAI',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: '专为代码优化的 Grok 快速版本。',
        features: { auto: true, fast: true, codex: true },
        scenarios: ['快速代码生成', '代码优化', '实时编程辅助'],
        icons: { auto: '🧠', provider: '❌' },
    },

    // Moonshot (Kimi)
    {
        id: 'kimi-k2-instruct',
        name: 'Kimi K2 Instruct',
        provider: 'Moonshot',
        tier: 'Premium',
        autoSupport: false,
        maxOnly: false,
        description: 'Moonshot 的 Kimi K2 指令优化模型，适合中文编程场景。',
        features: { highPerformance: true, largeContext: true },
        scenarios: ['中文编程', '大型项目分析', '技术文档处理'],
        icons: { provider: '🌙' },
        recommended: true,
        contextWindow: '200K tokens',
        speed: 3,
        quality: 4,
        pricing: 'Medium',
        releaseDate: '2024-11',
        strengths: [
            '顶级的中文理解能力',
            '大型上下文窗口',
            '优秀的技术文档处理',
            '适合国内开发环境',
            '中文注释生成质量高'
        ],
        limitations: [
            '英文能力相对较弱',
            '国际化项目支持一般',
            '社区和文档较少',
            '部分框架支持不足'
        ],
        bestFor: [
            '纯中文项目',
            '国内企业级应用',
            '中文技术文档生成',
            '中文代码注释',
            '内部管理系统',
            '中文API文档',
            '本地化应用开发',
            '中文自然语言处理'
        ],
        notRecommendedFor: [
            '国际化SaaS产品',
            '纯英文项目',
            '跨国协作项目',
            '开源国际项目'
        ],
        usageTips: [
            '🇨🇳 用中文提问：完全用中文描述需求，可以获得最佳效果',
            '📚 提供中文文档：粘贴中文技术文档或注释，模型理解更准确',
            '🏢 说明业务场景：描述具体的国内业务场景和行业背景',
            '💼 使用国内术语：如"微信支付"、"支付宝"等本地化术语',
            '📋 中文命名规范：可以要求使用中文注释和符合国内规范的命名',
            '🎯 明确技术栈：说明使用的国内流行框架如Vue、Element UI等',
            '📝 要求中文注释：强调"所有注释使用中文"获得高质量中文文档',
            '🔍 参考国内案例：提及国内知名项目或平台作为参考'
        ]
    },

    // Other Models
    {
        id: 'code-supernova-1-million',
        name: 'Code Supernova 1 Million',
        provider: 'Other',
        tier: 'Premium',
        autoSupport: true,
        maxOnly: false,
        description: '百万级上下文的代码专用模型，适合超大代码库。',
        features: { auto: true, largeContext: true, codex: true },
        scenarios: ['超大型代码库分析', '全项目重构', '跨文件依赖分析'],
        icons: { auto: '🧠', provider: '⭐' },
    },
];
