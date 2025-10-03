'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ModelCard from "@/components/ModelCard";
import Sidebar from '@/components/Sidebar';
import ComparisonBar from '@/components/ComparisonBar';
import ComparisonModal from '@/components/ComparisonModal';
import ModelDetailModal from '@/components/ModelDetailModal';
import { models, AIModel } from "@/data/models";

export default function Home() {
    const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
    const [selectedTiers, setSelectedTiers] = useState<string[]>([]);
    const [showRecommendedOnly, setShowRecommendedOnly] = useState(false);
    const [compareList, setCompareList] = useState<string[]>([]);
    const [showCompareModal, setShowCompareModal] = useState(false);
    const [selectedModel, setSelectedModel] = useState<AIModel | null>(null);

    const filteredModels = models.filter((model) => {
        const providerMatch = selectedProviders.length === 0 || selectedProviders.includes(model.provider);
        const tierMatch = selectedTiers.length === 0 || selectedTiers.includes(model.tier);
        const recommendedMatch = !showRecommendedOnly || model.recommended;
        return providerMatch && tierMatch && recommendedMatch;
    });

    const handleCompareClick = (modelId: string) => {
        setCompareList((prev) =>
            prev.includes(modelId)
                ? prev.filter((id) => id !== modelId)
                : [...prev, modelId]
        );
    };

    const modelsForComparison = models.filter(model => compareList.includes(model.id));

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Header />
            <main className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <Sidebar
                        selectedProviders={selectedProviders}
                        setSelectedProviders={setSelectedProviders}
                        selectedTiers={selectedTiers}
                        setSelectedTiers={setSelectedTiers}
                        showRecommendedOnly={showRecommendedOnly}
                        setShowRecommendedOnly={setShowRecommendedOnly}
                    />
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {filteredModels.length > 0 ? (
                            filteredModels.map((model) => (
                                <ModelCard
                                    key={model.id}
                                    model={model}
                                    onCompareClick={handleCompareClick}
                                    isSelectedForCompare={compareList.includes(model.id)}
                                    onCardClick={(model) => setSelectedModel(model)}
                                />
                            ))
                        ) : (
                            <p className="text-gray-400 col-span-full text-center">
                                沒有找到匹配的模型。請嘗試調整篩選條件。
                            </p>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
            <ComparisonBar
                compareList={modelsForComparison}
                onCompare={() => setShowCompareModal(true)}
                onClear={() => setCompareList([])}
                onRemove={handleCompareClick}
            />
            {showCompareModal && (
                <ComparisonModal
                    modelsToCompare={modelsForComparison}
                    onClose={() => setShowCompareModal(false)}
                />
            )}
            {selectedModel && (
                <ModelDetailModal
                    model={selectedModel}
                    onClose={() => setSelectedModel(null)}
                />
            )}
        </div>
    );
}
