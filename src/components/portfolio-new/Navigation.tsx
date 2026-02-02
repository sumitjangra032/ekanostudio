import React from 'react';

export default function Navigation() {
    return (
        <>
            <nav className="portfolio-nav">
                <a href="/">Index</a>
                <a href="#">Showreel</a>
            </nav>

            <div className="portfolio-nav-items nav-items">
                <a href="#work">Work,</a>
                <a href="#about">About,</a>
                <a href="#contact">Contact</a>
            </div>
        </>
    );
}
