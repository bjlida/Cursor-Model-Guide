'use client';

import React from 'react';

const providers = ['Anthropic', 'OpenAI', 'Google', 'DeepSeek', 'xAI', 'Moonshot', 'Other'];
const tiers = ['Premium', 'MAX Only', 'Free'];

// Provider图标映射
const providerIcons: Record<string, string> = {
    'Anthropic': '🅰️',
    'OpenAI': '🤖',
    'Google': '🔍',
    'DeepSeek': '🌊',
    'xAI': '❌',
    'Moonshot': '🌙',
    'Other': '⭐'
};

// Tier图标映射
const tierIcons: Record<string, string> = {
    'Premium': '👑',
    'MAX Only': '⚡',
    'Free': '🎁'
};

interface SidebarProps {
    selectedProviders: string[];
    setSelectedProviders: (providers: string[]) => void;
    selectedTiers: string[];
    setSelectedTiers: (tiers: string[]) => void;
    showRecommendedOnly?: boolean;
    setShowRecommendedOnly?: (show: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    selectedProviders,
    setSelectedProviders,
    selectedTiers,
    setSelectedTiers,
    showRecommendedOnly = false,
    setShowRecommendedOnly,
}) => {
    const handleProviderChange = (provider: string) => {
        const newSelection = selectedProviders.includes(provider)
            ? selectedProviders.filter((p) => p !== provider)
            : [...selectedProviders, provider];
        setSelectedProviders(newSelection);
    };

    const handleTierChange = (tier: string) => {
        const newSelection = selectedTiers.includes(tier)
            ? selectedTiers.filter((t) => t !== tier)
            : [...selectedTiers, tier];
        setSelectedTiers(newSelection);
    };

    const clearFilters = () => {
        setSelectedProviders([]);
        setSelectedTiers([]);
        if (setShowRecommendedOnly) {
            setShowRecommendedOnly(false);
        }
    };

    const hasActiveFilters = selectedProviders.length > 0 || selectedTiers.length > 0 || showRecommendedOnly;

    return (
        <aside className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl w-full md:w-72 border border-gray-700 sticky top-4">
            {/* 标题区域 */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold text-white">筛选模型</h2>
                </div>
                {hasActiveFilters && (
                    <button
                        onClick={clearFilters}
                        className="text-xs text-red-400 hover:text-red-300 transition-colors duration-200 hover:underline"
                    >
                        清除
                    </button>
                )}
            </div>

            {/* 推荐模型筛选 */}
            {setShowRecommendedOnly && (
                <div className="mb-6">
                    <label
                        className={`
                            flex items-center p-4 rounded-xl cursor-pointer
                            transition-all duration-200
                            ${showRecommendedOnly
                                ? 'bg-yellow-500/20 border-2 border-yellow-500/60 shadow-lg shadow-yellow-500/20'
                                : 'bg-gray-700/30 border-2 border-transparent hover:bg-gray-700/50 hover:border-gray-600'
                            }
                        `}
                    >
                        <input
                            type="checkbox"
                            checked={showRecommendedOnly}
                            onChange={(e) => setShowRecommendedOnly(e.target.checked)}
                            className="sr-only"
                        />
                        <div className={`
                            w-5 h-5 rounded-md border-2 flex items-center justify-center
                            transition-all duration-200 mr-3
                            ${showRecommendedOnly
                                ? 'bg-yellow-500 border-yellow-500'
                                : 'border-gray-500 hover:border-yellow-400'
                            }
                        `}>
                            {showRecommendedOnly && (
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </div>
                        <span className="text-xl mr-2">⭐</span>
                        <div className="flex-1">
                            <span className={`
                                text-sm font-bold transition-colors duration-200
                                ${showRecommendedOnly ? 'text-yellow-300' : 'text-gray-300'}
                            `}>
                                只看推荐模型
                            </span>
                            <p className="text-xs text-gray-500 mt-0.5">筛选编辑器精选的优质模型</p>
                        </div>
                    </label>
                </div>
            )}

            {/* 分隔线 */}
            {setShowRecommendedOnly && (
                <div className="border-t border-gray-700 mb-6"></div>
            )}

            {/* 提供商筛选 */}
            <div className="mb-8">
                <h3 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
                    提供商
                </h3>
                <div className="space-y-2">
                    {providers.map((provider) => {
                        const isSelected = selectedProviders.includes(provider);
                        return (
                            <label
                                key={provider}
                                className={`
                                    flex items-center p-3 rounded-xl cursor-pointer
                                    transition-all duration-200 group
                                    ${isSelected
                                        ? 'bg-blue-500/20 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20'
                                        : 'bg-gray-700/30 border-2 border-transparent hover:bg-gray-700/50 hover:border-gray-600'
                                    }
                                `}
                            >
                                <div className="flex items-center flex-1">
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={() => handleProviderChange(provider)}
                                        className="sr-only"
                                    />
                                    <div className={`
                                        w-5 h-5 rounded-md border-2 flex items-center justify-center
                                        transition-all duration-200 mr-3
                                        ${isSelected
                                            ? 'bg-blue-500 border-blue-500'
                                            : 'border-gray-500 group-hover:border-blue-400'
                                        }
                                    `}>
                                        {isSelected && (
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </div>
                                    <span className="text-2xl mr-2">{providerIcons[provider]}</span>
                                    <span className={`
                                        text-sm font-medium transition-colors duration-200
                                        ${isSelected ? 'text-white' : 'text-gray-300 group-hover:text-white'}
                                    `}>
                                        {provider}
                                    </span>
                                </div>
                            </label>
                        );
                    })}
                </div>
            </div>

            {/* 分隔线 */}
            <div className="border-t border-gray-700 my-6"></div>

            {/* 权限级别筛选 */}
            <div>
                <h3 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1 h-4 bg-purple-500 rounded-full"></span>
                    权限级别
                </h3>
                <div className="space-y-2">
                    {tiers.map((tier) => {
                        const isSelected = selectedTiers.includes(tier);
                        return (
                            <label
                                key={tier}
                                className={`
                                    flex items-center p-3 rounded-xl cursor-pointer
                                    transition-all duration-200 group
                                    ${isSelected
                                        ? 'bg-purple-500/20 border-2 border-purple-500/50 shadow-lg shadow-purple-500/20'
                                        : 'bg-gray-700/30 border-2 border-transparent hover:bg-gray-700/50 hover:border-gray-600'
                                    }
                                `}
                            >
                                <div className="flex items-center flex-1">
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={() => handleTierChange(tier)}
                                        className="sr-only"
                                    />
                                    <div className={`
                                        w-5 h-5 rounded-md border-2 flex items-center justify-center
                                        transition-all duration-200 mr-3
                                        ${isSelected
                                            ? 'bg-purple-500 border-purple-500'
                                            : 'border-gray-500 group-hover:border-purple-400'
                                        }
                                    `}>
                                        {isSelected && (
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </div>
                                    <span className="text-2xl mr-2">{tierIcons[tier]}</span>
                                    <span className={`
                                        text-sm font-medium transition-colors duration-200
                                        ${isSelected ? 'text-white' : 'text-gray-300 group-hover:text-white'}
                                    `}>
                                        {tier}
                                    </span>
                                </div>
                            </label>
                        );
                    })}
                </div>
            </div>

            {/* 底部装饰 */}
            <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-center gap-1 text-gray-500 text-xs">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-75"></span>
                    <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-150"></span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
