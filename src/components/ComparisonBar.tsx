'use client';

import React from 'react';
import { AIModel } from '@/data/models';

interface ComparisonBarProps {
    compareList: AIModel[];
    onCompare: () => void;
    onClear: () => void;
    onRemove: (modelId: string) => void;
}

const ComparisonBar: React.FC<ComparisonBarProps> = ({ compareList, onCompare, onClear, onRemove }) => {
    if (compareList.length === 0) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t-2 border-blue-500 shadow-2xl z-50">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">对比列表 ({compareList.length})</h3>
                    <div className="flex items-center gap-4 flex-wrap">
                        {compareList.map((model) => (
                            <div key={model.id} className="bg-gray-700 px-3 py-1 rounded-full flex items-center gap-2">
                                <span className="text-sm text-white">{model.name}</span>
                                <button onClick={() => onRemove(model.id)} className="text-red-400 hover:text-red-300 text-sm font-bold">
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={onCompare}
                        disabled={compareList.length < 2}
                        className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
                    >
                        对比
                    </button>
                    <button
                        onClick={onClear}
                        className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition-colors"
                    >
                        清空
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComparisonBar;
