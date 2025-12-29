"use client";

import React from 'react';

export interface TOCItem {
    id: string;
    label: string;
    subItems?: TOCItem[];
}

interface BlogLayoutProps {
    title: string;
    subtitle: string;
    tocItems: TOCItem[];
    children: React.ReactNode;
}

export default function BlogLayout({ title, subtitle, tocItems, children }: BlogLayoutProps) {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderTOCRequest = (items: TOCItem[], level = 0) => {
        return (
            <ul className={`space-y-1 ${level > 0 ? 'ml-3 border-l border-gray-800 pl-3' : ''}`}>
                {items.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className={`block transition-all duration-300 ease-in-out ${level === 0
                                ? 'text-white font-bold text-sm tracking-wide hover:text-green-400 py-2 mt-2'
                                : 'text-gray-500 hover:text-gray-300 text-xs py-0.5 border-l-2 border-transparent hover:border-green-500 pl-2 -ml-[14px]'
                                }`}
                        >
                            {item.label}
                        </a>
                        {item.subItems && item.subItems.length > 0 && renderTOCRequest(item.subItems, level + 1)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <main className="bg-black text-gray-200 min-h-screen pt-16 px-6">
            {/* Mobile Header */}
            <header className="lg:hidden px-6 py-8 border-b border-gray-800">
                <h1 className="text-3xl font-bold text-white mb-3 leading-tight">
                    {title}
                </h1>
                <p className="text-gray-400 text-lg">
                    {subtitle}
                </p>
            </header>

            <div className="flex flex-col lg:flex-row max-w-[1600px] mx-auto lg:px-6 relative">
                {/* Table of Contents Sidebar - Desktop */}
                <aside className="hidden lg:block lg:w-64 xl:w-72 lg:sticky lg:top-8 h-fit shrink-0 pt-16 pr-6">
                    <div className="mb-6 pb-4 border-b border-gray-800">
                        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                            Table of Contents
                        </h2>
                    </div>
                    <nav className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
                        {renderTOCRequest(tocItems)}
                    </nav>
                </aside>

                {/* Table of Contents - Mobile */}
                <div className="lg:hidden px-6 py-6 border-b border-gray-800 bg-gray-900/20">
                    <details className="group">
                        <summary className="flex justify-between items-center cursor-pointer list-none text-green-400 font-medium">
                            <span>Jump to Section</span>
                            <span className="transition group-open:rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </span>
                        </summary>
                        <nav className="mt-4 pb-2">
                            {renderTOCRequest(tocItems)}
                        </nav>
                    </details>
                </div>

                {/* Main Content */}
                <article className="flex-1 w-full min-w-0 px-6 py-8 lg:py-12 lg:pl-12 lg:pr-6 space-y-12 leading-relaxed">
                    {/* Desktop Header */}
                    <header className="hidden lg:block space-y-6 border-b border-gray-800 pb-12 mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                            {title}
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
                            {subtitle}
                        </p>
                    </header>

                    {children}
                </article>
            </div>

            {/* Mobile Back to Top */}
            <button
                onClick={scrollToTop}
                className="lg:hidden fixed bottom-6 right-6 bg-green-500 text-black p-3 rounded-full shadow-lg hover:bg-green-400 transition-colors z-50"
                aria-label="Back to top"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </button>
        </main>
    );
}
