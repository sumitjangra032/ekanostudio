"use client";

import { useState, useEffect } from 'react';
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

    // Load animation libraries via dynamic imports instead of external CDNs
    useEffect(() => {
        let cancelled = false;

        const loadScripts = async () => {
            try {
                const gsapModule = await import('gsap');
                const scrollTriggerModule = await import('gsap/ScrollTrigger');
                const lenisModule = await import('@studio-freight/lenis');
                const splitTypeModule = await import('split-type');

                if (cancelled) return;

                const w = window as any;

                // Normalise module shapes and expose as globals for existing animation code
                w.gsap =
                    (gsapModule as any).default ||
                    (gsapModule as any).gsap ||
                    gsapModule;

                w.ScrollTrigger =
                    (scrollTriggerModule as any).ScrollTrigger ||
                    (scrollTriggerModule as any).default ||
                    scrollTriggerModule;

                w.Lenis =
                    (lenisModule as any).default ||
                    (lenisModule as any).Lenis ||
                    lenisModule;

                w.SplitType =
                    (splitTypeModule as any).default ||
                    (splitTypeModule as any).SplitType ||
                    splitTypeModule;

                setScriptsLoaded(true);
            } catch (error) {
                console.error('Failed to load portfolio animation scripts', error);
                // Allow the page to render even if animations fail
                setScriptsLoaded(true);
            }
        };

        if (typeof window !== 'undefined') {
            loadScripts();
        }

        return () => {
            cancelled = true;
        };
    }, []);

    const handlePreloaderComplete = () => {
        setLoading(false);
    };

    return (
        <div className="portfolio-wrapper">
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
