'use client';

import React, { useEffect, useRef } from 'react';
import { AIModel } from '@/data/models';

interface ComparisonModalProps {
    modelsToCompare: AIModel[];
    onClose: () => void;
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({ modelsToCompare, onClose }) => {
    const headerScrollRef = useRef<HTMLDivElement>(null);
    const contentScrollRefs = useRef<HTMLDivElement[]>([]);

    // 同步所有表格的横向滚动
    useEffect(() => {
        const timer = setTimeout(() => {
            const headerScroll = headerScrollRef.current;
            const contentScrolls = contentScrollRefs.current.filter(Boolean);

            if (!headerScroll || contentScrolls.length === 0) return;

            const syncScroll = (source: HTMLDivElement) => {
                const scrollLeft = source.scrollLeft;

                if (headerScroll !== source) {
                    headerScroll.scrollLeft = scrollLeft;
                }

                contentScrolls.forEach(scroll => {
                    if (scroll !== source) {
                        scroll.scrollLeft = scrollLeft;
                    }
                });
            };

            const handleHeaderScroll = () => syncScroll(headerScroll);
            const handleContentScroll = (scroll: HTMLDivElement) => () => syncScroll(scroll);

            headerScroll.addEventListener('scroll', handleHeaderScroll);
            const contentScrollHandlers = contentScrolls.map(scroll => {
                const handler = handleContentScroll(scroll);
                scroll.addEventListener('scroll', handler);
                return { scroll, handler };
            });

            // 清理函数
            return () => {
                headerScroll.removeEventListener('scroll', handleHeaderScroll);
                contentScrollHandlers.forEach(({ scroll, handler }) => {
                    scroll.removeEventListener('scroll', handler);
                });
            };
        }, 100);

        return () => clearTimeout(timer);
    }, [modelsToCompare.length]);

    if (modelsToCompare.length === 0) return null;

    // 渲染星级评分
    const renderStars = (score: number | undefined) => {
        if (!score) return <span className="text-gray-500">N/A</span>;
        return (
            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < score ? 'text-yellow-400' : 'text-gray-600'}>
                        ★
                    </span>
                ))}
                <span className="text-sm text-gray-400 ml-1">({score}/5)</span>
            </div>
        );
    };

    // 渲染价格级别
    const renderPricing = (pricing: string | undefined) => {
        if (!pricing) return <span className="text-gray-500">N/A</span>;
        const colors = {
            'Low': 'text-green-400',
            'Medium': 'text-yellow-400',
            'High': 'text-orange-400',
            'Very High': 'text-red-400'
        };
        const icons = {
            'Low': '💰',
            'Medium': '💰💰',
            'High': '💰💰💰',
            'Very High': '💰💰💰💰'
        };
        return (
            <div className="flex items-center gap-2">
                <span>{icons[pricing as keyof typeof icons]}</span>
                <span className={colors[pricing as keyof typeof colors]}>{pricing}</span>
            </div>
        );
    };

    // 渲染列表项
    const renderList = (items: string[] | undefined) => {
        if (!items || items.length === 0) return <span className="text-gray-500">N/A</span>;
        return (
            <ul className="space-y-1 text-sm">
                {items.slice(0, 3).map((item, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-2">
                        <span className="text-blue-400 flex-shrink-0">•</span>
                        <span>{item}</span>
                    </li>
                ))}
                {items.length > 3 && (
                    <li className="text-gray-500 text-xs">+ {items.length - 3} 更多...</li>
                )}
            </ul>
        );
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-hidden border border-gray-700">
                {/* 头部 */}
                <div className="sticky top-0 bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-blue-900/50 backdrop-blur-sm p-6 border-b border-gray-700 flex justify-between items-center z-10">
                    <div>
                        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                            <span className="text-4xl">⚖️</span>
                            模型详细对比
                        </h2>
                        <p className="text-gray-400 text-sm mt-1">对比 {modelsToCompare.length} 个模型的详细参数和特性</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white hover:bg-red-500/20 rounded-lg px-4 py-2 text-3xl font-bold transition-all duration-200"
                    >
                        &times;
                    </button>
                </div>

                {/* 固定的模型名称表头 - 滚动时始终可见 */}
                <div className="sticky top-[89px] z-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b-2 border-blue-500/50 shadow-xl overflow-hidden">
                    <div ref={headerScrollRef} className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                        <table className="border-collapse" style={{ tableLayout: 'fixed', width: `${150 + modelsToCompare.length * 220}px` }}>
                            <thead>
                                <tr>
                                    <th className="p-4 bg-gradient-to-br from-gray-700 to-gray-800 text-left font-semibold text-gray-300 border border-gray-600 sticky left-0 z-30" style={{ width: '150px' }}>
                                        <span className="text-lg">📊</span> 参数
                                    </th>
                                    {modelsToCompare.map(model => (
                                        <th key={model.id} className="p-4 bg-gradient-to-br from-blue-900/40 to-purple-900/40 text-center border border-gray-600" style={{ width: '220px' }}>
                                            <div className="flex flex-col gap-1">
                                                <span className="font-bold text-white text-lg">{model.name}</span>
                                                {model.recommended && (
                                                    <span className="text-xs bg-yellow-500/30 text-yellow-300 px-2 py-0.5 rounded-full inline-block border border-yellow-500/50">⭐ 推荐</span>
                                                )}
                                                <span className="text-xs text-gray-400">{model.icons.provider} {model.provider}</span>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>

                <div className="overflow-y-auto max-h-[calc(90vh-190px)] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800" id="content-scroll">
                    <div className="p-6 space-y-8">
                        {/* 基本信息对比 */}
                        <section>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
                                📋 基本信息
                            </h3>
                            <div
                                ref={(el) => {
                                    if (el && !contentScrollRefs.current.includes(el)) {
                                        contentScrollRefs.current.push(el);
                                    }
                                }}
                                className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 comparison-content-scroll"
                            >
                                <table className="border-collapse" style={{ tableLayout: 'fixed', width: `${150 + modelsToCompare.length * 220}px` }}>
                                    <thead className="sr-only">
                                        <tr>
                                            <th className="p-4 bg-gray-700/50 text-left font-semibold text-gray-300 border border-gray-600 sticky left-0 z-[15]" style={{ width: '150px' }}>参数</th>
                                            {modelsToCompare.map(model => (
                                                <th key={model.id} className="p-4 bg-gray-700/50 text-center font-bold text-white border border-gray-600" style={{ width: '220px' }}>
                                                    <div className="flex flex-col gap-1">
                                                        <span>{model.name}</span>
                                                        {model.recommended && (
                                                            <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded-full inline-block">⭐ 推荐</span>
                                                        )}
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]">提供商</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 text-center border border-gray-600">
                                                    <span className="text-lg mr-2">{model.icons.provider}</span>
                                                    <span className="text-white font-medium">{model.provider}</span>
                                                </td>
                                            ))}
                                        </tr>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]">权限级别</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 text-center border border-gray-600">
                                                    <span className={`px-3 py-1 rounded-full font-medium ${model.tier === 'Free' ? 'bg-green-500/20 text-green-300' :
                                                        model.tier === 'Premium' ? 'bg-blue-500/20 text-blue-300' :
                                                            'bg-purple-500/20 text-purple-300'
                                                        }`}>
                                                        {model.tier}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]">Auto 支持</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 text-center border border-gray-600">
                                                    <span className={`text-2xl ${model.autoSupport ? 'text-green-400' : 'text-red-400'}`}>
                                                        {model.autoSupport ? '✅' : '❌'}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]">发布日期</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 text-center text-gray-300 border border-gray-600">
                                                    {model.releaseDate || <span className="text-gray-500">N/A</span>}
                                                </td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* 性能指标对比 */}
                        <section>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-1 h-8 bg-green-500 rounded-full"></span>
                                📊 性能指标
                            </h3>
                            <div
                                ref={(el) => {
                                    if (el && !contentScrollRefs.current.includes(el)) {
                                        contentScrollRefs.current.push(el);
                                    }
                                }}
                                className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 comparison-content-scroll"
                            >
                                <table className="border-collapse" style={{ tableLayout: 'fixed', width: `${150 + modelsToCompare.length * 220}px` }}>
                                    <tbody>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]" style={{ width: '150px' }}>上下文窗口</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 text-center border border-gray-600" style={{ width: '220px' }}>
                                                    <span className="text-cyan-400 font-bold text-lg">
                                                        {model.contextWindow || <span className="text-gray-500">N/A</span>}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]">响应速度</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 text-center border border-gray-600">
                                                    {renderStars(model.speed)}
                                                </td>
                                            ))}
                                        </tr>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]">质量评分</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 text-center border border-gray-600">
                                                    {renderStars(model.quality)}
                                                </td>
                                            ))}
                                        </tr>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]">价格级别</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 text-center border border-gray-600">
                                                    {renderPricing(model.pricing)}
                                                </td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* 功能特性对比 */}
                        <section>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-1 h-8 bg-purple-500 rounded-full"></span>
                                🎯 功能特性
                            </h3>
                            <div
                                ref={(el) => {
                                    if (el && !contentScrollRefs.current.includes(el)) {
                                        contentScrollRefs.current.push(el);
                                    }
                                }}
                                className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 comparison-content-scroll"
                            >
                                <table className="border-collapse" style={{ tableLayout: 'fixed', width: `${150 + modelsToCompare.length * 220}px` }}>
                                    <tbody>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]">快速响应</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 text-center border border-gray-600">
                                                    <span className={`text-2xl ${model.features.fast ? 'text-green-400' : 'text-gray-600'}`}>
                                                        {model.features.fast ? '⚡' : '➖'}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]">高性能</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 text-center border border-gray-600">
                                                    <span className={`text-2xl ${model.features.highPerformance ? 'text-green-400' : 'text-gray-600'}`}>
                                                        {model.features.highPerformance ? '🚀' : '➖'}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]">多模态</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 text-center border border-gray-600">
                                                    <span className={`text-2xl ${model.features.multimodal ? 'text-green-400' : 'text-gray-600'}`}>
                                                        {model.features.multimodal ? '🎨' : '➖'}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]">超大上下文</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 text-center border border-gray-600">
                                                    <span className={`text-2xl ${model.features.largeContext ? 'text-green-400' : 'text-gray-600'}`}>
                                                        {model.features.largeContext ? '📚' : '➖'}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]">推理能力</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 text-center border border-gray-600">
                                                    <span className={`text-2xl ${model.features.reasoning ? 'text-green-400' : 'text-gray-600'}`}>
                                                        {model.features.reasoning ? '🧠' : '➖'}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]">代码专项</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 text-center border border-gray-600">
                                                    <span className={`text-2xl ${model.features.codex ? 'text-green-400' : 'text-gray-600'}`}>
                                                        {model.features.codex ? '💻' : '➖'}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* 优势与限制 */}
                        <section>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-1 h-8 bg-yellow-500 rounded-full"></span>
                                💪 优势与限制
                            </h3>
                            <div
                                ref={(el) => {
                                    if (el && !contentScrollRefs.current.includes(el)) {
                                        contentScrollRefs.current.push(el);
                                    }
                                }}
                                className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 comparison-content-scroll"
                            >
                                <table className="border-collapse" style={{ tableLayout: 'fixed', width: `${150 + modelsToCompare.length * 220}px` }}>
                                    <tbody>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]">核心优势</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 border border-gray-600 align-top">
                                                    {renderList(model.strengths)}
                                                </td>
                                            ))}
                                        </tr>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]">使用限制</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 border border-gray-600 align-top">
                                                    {renderList(model.limitations)}
                                                </td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* 适用场景 */}
                        <section>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
                                🎯 适用场景
                            </h3>
                            <div
                                ref={(el) => {
                                    if (el && !contentScrollRefs.current.includes(el)) {
                                        contentScrollRefs.current.push(el);
                                    }
                                }}
                                className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 comparison-content-scroll"
                            >
                                <table className="border-collapse" style={{ tableLayout: 'fixed', width: `${150 + modelsToCompare.length * 220}px` }}>
                                    <tbody>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]">最适合</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 border border-gray-600 align-top">
                                                    {renderList(model.bestFor)}
                                                </td>
                                            ))}
                                        </tr>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]">不推荐</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 border border-gray-600 align-top">
                                                    {renderList(model.notRecommendedFor)}
                                                </td>
                                            ))}
                                        </tr>
                                        <tr className="hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 font-semibold text-gray-300 bg-gray-700/50 border border-gray-600 sticky left-0 z-[15]">适用场景</td>
                                            {modelsToCompare.map(model => (
                                                <td key={model.id} className="p-4 border border-gray-600 align-top">
                                                    {renderList(model.scenarios)}
                                                </td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComparisonModal;
