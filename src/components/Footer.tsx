import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-12 border-t border-gray-700">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* 版权信息 */}
                    <div className="text-center md:text-left">
                        <p className="text-gray-400">
                            &copy; {new Date().getFullYear()} Cursor AI 模型指南. All Rights Reserved.
                        </p>
                    </div>

                    {/* 呀米科技信息 */}
                    <div className="flex items-center gap-2">
                        <span className="text-gray-500">Powered by</span>
                        <a
                            href="https://www.yamikeji.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg hover:border-blue-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
                        >
                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🚀</span>
                            <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                呀米科技
                            </span>
                        </a>
                    </div>
                </div>

                {/* 装饰线 */}
                <div className="mt-6 flex items-center justify-center gap-2">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                    <div className="h-1 w-1 rounded-full bg-blue-500 animate-pulse"></div>
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
