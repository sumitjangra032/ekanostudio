"use client";

import { useState, useEffect } from 'react';
import Script from 'next/script';
import Preloader from './Preloader';

// Desktop Components
import Footer from './Footer';
import ProgressBar from './ProgressBar';
import ProjectNames from './ProjectNames';
import PreviewMedia from './PreviewMedia';
import Gallery from './Gallery';
import PortfolioHeading from './PortfolioHeading';
import AnimationScript from './AnimationScript';
import LetsCollab from './LetsCollab';

// Mobile Components
import PortfolioHeadingMobile from './PortfolioHeadingMobile';
import ProgressBarMobile from './ProgressBarMobile';
import ProjectNamesMobile from './ProjectNamesMobile';
import GalleryMobile from './GalleryMobile';
import LetsCollabMobile from './LetsCollabMobile';
import AnimationScriptMobile from './AnimationScriptMobile';

import './portfolio.css';

export default function PortfolioNew() {
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(true);
    const [scriptsLoaded, setScriptsLoaded] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 900);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Check if all scripts are loaded
    useEffect(() => {
        const checkScripts = setInterval(() => {
            if ((window as any).gsap && (window as any).ScrollTrigger && (window as any).Lenis && (window as any).SplitType) {
                clearInterval(checkScripts);
                setScriptsLoaded(true);
            }
        }, 100);

        return () => clearInterval(checkScripts);
    }, []);

    const handlePreloaderComplete = () => {
        setLoading(false);
    };

    return (
        <div className="portfolio-wrapper">
            {/* Load all scripts first */}
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"
                strategy="beforeInteractive"
            />
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js"
                strategy="beforeInteractive"
            />
            <Script
                src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js"
                strategy="beforeInteractive"
            />
            <Script
                src="https://unpkg.com/split-type"
                strategy="beforeInteractive"
            />

            {/* Show preloader only when scripts are loaded */}
            {scriptsLoaded && loading && <Preloader onComplete={handlePreloaderComplete} />}

            {/* Show content only after preloader completes */}
            {!loading && scriptsLoaded && (
                <>
                    {isMobile ? (
                        <>
                            {/* Mobile Layout */}
                            <PortfolioHeadingMobile />
                            <GalleryMobile />
                            <LetsCollabMobile />
                            <ProjectNamesMobile />
                            <ProgressBarMobile />
                            <AnimationScriptMobile />
                        </>
                    ) : (
                        <>
                            {/* Desktop Layout */}
                            <PortfolioHeading />
                            <div className="whitespace w-1"></div>
                            <Gallery />
                            <div className="whitespace w-2"></div>
                            <LetsCollab />
                            <ProjectNames />
                            <PreviewMedia />
                            <ProgressBar />
                            <Footer />
                            <AnimationScript />
                        </>
                    )}
                </>
            )}
        </div>
    );
}
