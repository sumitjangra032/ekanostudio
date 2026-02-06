"use client";

import React from 'react';

export default function Gallery() {
    return (
        <div className="gallery">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(num => (
                <div className="project" key={num}>
                    <div className="index text-center">
                        <div className={`mask ${num >= 10 ? 'h-[85px]' : 'h-[70px]'}`}>
                            <h1 className="text-[var(--theme-text)] font-bold">{num.toString().padStart(2, '0')}</h1>
                        </div>
                    </div>
                    <div className="images"></div>
                </div>
            ))}
        </div>
    );
}
