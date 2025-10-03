import React from 'react';

const Header = () => {
    return (
        <header className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-2xl border-b border-gray-700">
            {/* 背景装饰 */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-6 py-8 relative z-10">
                <div className="flex flex-col items-center">
                    {/* Logo/Icon */}
                    <div className="mb-4 p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>

                    {/* 标题 */}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-center">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Cursor AI 模型指南
                        </span>
                    </h1>

                    {/* 副标题 */}
                    <p className="text-center text-gray-300 mt-4 max-w-2xl text-lg leading-relaxed">
                        全面了解 Cursor 中的 AI 大模型、图标含义及适用场景
                    </p>

                    {/* 装饰线 */}
                    <div className="mt-6 flex items-center gap-2">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500"></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
