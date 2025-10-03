import React from 'react';
import { AIModel } from '@/data/models';

interface ModelCardProps {
    model: AIModel;
    onCompareClick: (modelId: string) => void;
    isSelectedForCompare: boolean;
    onCardClick: (model: AIModel) => void;
}

const ModelCard: React.FC<ModelCardProps> = ({ model, onCompareClick, isSelectedForCompare, onCardClick }) => {
    return (
        <div className={`bg-gray-800 rounded-lg shadow-lg p-6 border ${isSelectedForCompare ? 'border-green-500 scale-105' : model.recommended ? 'border-yellow-500/50' : 'border-gray-700'} hover:border-blue-500 hover:shadow-blue-500/20 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between relative group`}>
            {/* 推荐标识 */}
            {model.recommended && (
                <div className="absolute -top-3 -right-3 z-20 pointer-events-none">
                    <div className="relative">
                        <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-50"></div>
                        <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-xl flex items-center gap-1 border-2 border-yellow-300 animate-pulse">
                            <span className="text-sm">⭐</span>
                            <span>推荐</span>
                        </div>
                    </div>
                </div>
            )}

            {/* 点击查看详情的覆盖层 */}
            <div
                onClick={() => onCardClick(model)}
                className="absolute inset-0 cursor-pointer rounded-lg z-0"
                aria-label={`查看 ${model.name} 详情`}
            />

            <div className="relative z-10 pointer-events-none">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-white">{model.name}</h2>
                    <div className="flex items-center space-x-2">
                        {model.icons.provider && <span className="text-2xl">{model.icons.provider}</span>}
                        {model.icons.auto && <span className="text-2xl" title="Auto智能模式">{model.icons.auto}</span>}
                        {model.icons.tier && <span className="text-2xl" title={model.tier}>{model.icons.tier}</span>}
                    </div>
                </div>
                <p className="text-gray-400 mb-4">{model.description}</p>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-300 mb-2">适用场景:</h3>
                    <div className="flex flex-wrap gap-2">
                        {model.scenarios.map((scenario) => (
                            <span key={scenario} className="bg-gray-700 text-blue-300 text-sm font-medium px-3 py-1 rounded-full">
                                {scenario}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-300 mb-2">特性:</h3>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                        {model.features.auto && <li>支持 Auto 智能模式</li>}
                        {model.features.fast && <li>快速响应</li>}
                        {model.features.highPerformance && <li>高性能</li>}
                        {model.features.largeContext && <li>超大上下文</li>}
                        {model.features.multimodal && <li>多模态能力</li>}
                        {model.features.codex && <li>代码专项优化</li>}
                        {model.features.reasoning && <li>增强推理能力</li>}
                    </ul>
                </div>
            </div>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onCompareClick(model.id);
                }}
                className={`mt-6 w-full btn ${isSelectedForCompare
                    ? 'btn-danger'
                    : 'btn-primary'
                    } relative z-10 pointer-events-auto`}
            >
                {isSelectedForCompare ? '从对比中移除' : '添加到对比'}
            </button>

            {/* 点击查看详情提示 */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-blue-500 text-white text-xs px-2 py-1 rounded-md pointer-events-none z-20">
                点击查看详情
            </div>
        </div>
    );
};

export default ModelCard;
