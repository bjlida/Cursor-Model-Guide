'use client';

import React from 'react';
import { AIModel } from '@/data/models';

interface ModelDetailModalProps {
    model: AIModel;
    onClose: () => void;
}

const ModelDetailModal: React.FC<ModelDetailModalProps> = ({ model, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
                {/* 头部 */}
                <div className="sticky top-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-6 border-b border-gray-600 rounded-t-2xl">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                {model.icons.provider && (
                                    <span className="text-4xl">{model.icons.provider}</span>
                                )}
                                <h2 className="text-3xl font-bold text-white">{model.name}</h2>
                            </div>
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${model.tier === 'MAX Only'
                                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50'
                                    : model.tier === 'Premium'
                                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/50'
                                        : 'bg-green-500/20 text-green-300 border border-green-500/50'
                                    }`}>
                                    {model.icons.tier} {model.tier}
                                </span>
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-gray-300">
                                    {model.provider}
                                </span>
                                {model.autoSupport && (
                                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/50">
                                        {model.icons.auto} Auto 模式
                                    </span>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="ml-4 p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                        >
                            <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* 内容 */}
                <div className="p-6 space-y-6">
                    {/* 描述 */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                            <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                            模型描述
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                            {model.description}
                        </p>
                    </div>

                    {/* 性能指标 */}
                    {(model.contextWindow || model.speed || model.quality || model.pricing) && (
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                <span className="w-1 h-6 bg-cyan-500 rounded-full"></span>
                                性能指标
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {model.contextWindow && (
                                    <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-4 rounded-xl border border-blue-500/30">
                                        <div className="text-blue-400 text-sm mb-1">上下文窗口</div>
                                        <div className="text-white font-bold text-lg">{model.contextWindow}</div>
                                    </div>
                                )}
                                {model.speed && (
                                    <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 p-4 rounded-xl border border-green-500/30">
                                        <div className="text-green-400 text-sm mb-1">响应速度</div>
                                        <div className="text-white font-bold text-lg flex items-center gap-1">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <span key={i} className={i < model.speed ? 'text-green-400' : 'text-gray-600'}>★</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {model.quality && (
                                    <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 p-4 rounded-xl border border-purple-500/30">
                                        <div className="text-purple-400 text-sm mb-1">质量评分</div>
                                        <div className="text-white font-bold text-lg flex items-center gap-1">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <span key={i} className={i < model.quality ? 'text-purple-400' : 'text-gray-600'}>★</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {model.pricing && (
                                    <div className={`bg-gradient-to-br p-4 rounded-xl border ${model.pricing === 'Very High' ? 'from-red-500/10 to-red-600/10 border-red-500/30' :
                                        model.pricing === 'High' ? 'from-orange-500/10 to-orange-600/10 border-orange-500/30' :
                                            model.pricing === 'Medium' ? 'from-yellow-500/10 to-yellow-600/10 border-yellow-500/30' :
                                                'from-green-500/10 to-green-600/10 border-green-500/30'
                                        }`}>
                                        <div className={`text-sm mb-1 ${model.pricing === 'Very High' ? 'text-red-400' :
                                            model.pricing === 'High' ? 'text-orange-400' :
                                                model.pricing === 'Medium' ? 'text-yellow-400' :
                                                    'text-green-400'
                                            }`}>价格级别</div>
                                        <div className="text-white font-bold text-lg">{model.pricing}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* 核心特性 */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                            <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                            核心特性
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {model.features.auto && (
                                <div className="flex items-center gap-3 bg-blue-500/10 p-3 rounded-xl border border-blue-500/30">
                                    <span className="text-2xl">🧠</span>
                                    <span className="text-blue-300 font-medium">支持 Auto 智能模式</span>
                                </div>
                            )}
                            {model.features.fast && (
                                <div className="flex items-center gap-3 bg-green-500/10 p-3 rounded-xl border border-green-500/30">
                                    <span className="text-2xl">⚡</span>
                                    <span className="text-green-300 font-medium">快速响应</span>
                                </div>
                            )}
                            {model.features.highPerformance && (
                                <div className="flex items-center gap-3 bg-purple-500/10 p-3 rounded-xl border border-purple-500/30">
                                    <span className="text-2xl">🚀</span>
                                    <span className="text-purple-300 font-medium">高性能</span>
                                </div>
                            )}
                            {model.features.largeContext && (
                                <div className="flex items-center gap-3 bg-orange-500/10 p-3 rounded-xl border border-orange-500/30">
                                    <span className="text-2xl">📚</span>
                                    <span className="text-orange-300 font-medium">超大上下文窗口</span>
                                </div>
                            )}
                            {model.features.multimodal && (
                                <div className="flex items-center gap-3 bg-pink-500/10 p-3 rounded-xl border border-pink-500/30">
                                    <span className="text-2xl">🎨</span>
                                    <span className="text-pink-300 font-medium">多模态能力</span>
                                </div>
                            )}
                            {model.features.codex && (
                                <div className="flex items-center gap-3 bg-cyan-500/10 p-3 rounded-xl border border-cyan-500/30">
                                    <span className="text-2xl">💻</span>
                                    <span className="text-cyan-300 font-medium">代码专项优化</span>
                                </div>
                            )}
                            {model.features.reasoning && (
                                <div className="flex items-center gap-3 bg-yellow-500/10 p-3 rounded-xl border border-yellow-500/30">
                                    <span className="text-2xl">🤔</span>
                                    <span className="text-yellow-300 font-medium">增强推理能力</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 适用场景 */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                            <span className="w-1 h-6 bg-green-500 rounded-full"></span>
                            适用场景
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {model.scenarios.map((scenario, index) => (
                                <div
                                    key={scenario}
                                    className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-green-500/50 transition-colors duration-200"
                                >
                                    <span className="text-green-400 font-bold text-lg flex-shrink-0">
                                        {index + 1}.
                                    </span>
                                    <span className="text-gray-300 font-medium">{scenario}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 优势 */}
                    {model.strengths && model.strengths.length > 0 && (
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                                核心优势
                            </h3>
                            <div className="grid grid-cols-1 gap-2">
                                {model.strengths.map((strength, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/30"
                                    >
                                        <span className="text-emerald-400 text-xl flex-shrink-0">✓</span>
                                        <span className="text-gray-300">{strength}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 限制 */}
                    {model.limitations && model.limitations.length > 0 && (
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
                                使用限制
                            </h3>
                            <div className="grid grid-cols-1 gap-2">
                                {model.limitations.map((limitation, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 bg-orange-500/10 p-3 rounded-xl border border-orange-500/30"
                                    >
                                        <span className="text-orange-400 text-xl flex-shrink-0">⚠</span>
                                        <span className="text-gray-300">{limitation}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 最适合的项目 */}
                    {model.bestFor && model.bestFor.length > 0 && (
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                                最适合的项目
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {model.bestFor.map((project, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 bg-blue-500/10 p-3 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-colors duration-200"
                                    >
                                        <span className="text-blue-400 text-xl flex-shrink-0">🎯</span>
                                        <span className="text-gray-300 font-medium">{project}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 不推荐的场景 */}
                    {model.notRecommendedFor && model.notRecommendedFor.length > 0 && (
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                <span className="w-1 h-6 bg-red-500 rounded-full"></span>
                                不推荐使用场景
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {model.notRecommendedFor.map((scenario, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 bg-red-500/10 p-3 rounded-xl border border-red-500/30"
                                    >
                                        <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                                        <span className="text-gray-300">{scenario}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 推荐用法 */}
                    {model.usageTips && model.usageTips.length > 0 && (
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
                                💡 推荐用法与提问技巧
                            </h3>
                            <div className="bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-indigo-500/30">
                                <p className="text-gray-300 mb-4 text-sm">
                                    掌握以下技巧，让AI更准确地理解你的需求，获得更高质量的代码和建议：
                                </p>
                                <div className="space-y-3">
                                    {model.usageTips.map((tip, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-lg border border-indigo-500/20 hover:border-indigo-500/40 transition-colors duration-200"
                                        >
                                            <span className="text-indigo-400 font-bold text-lg flex-shrink-0 mt-0.5">
                                                {index + 1}
                                            </span>
                                            <span className="text-gray-200 leading-relaxed">{tip}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                                    <p className="text-yellow-300 text-sm flex items-start gap-2">
                                        <span className="text-lg flex-shrink-0">💡</span>
                                        <span>提示：好的提问方式能让模型的输出质量提升30-50%，值得花时间精心组织问题！</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* 底部 */}
                <div className="sticky bottom-0 bg-gray-800 p-6 border-t border-gray-700 rounded-b-2xl">
                    <button
                        onClick={onClose}
                        className="w-full btn btn-primary"
                    >
                        关闭详情
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModelDetailModal;

