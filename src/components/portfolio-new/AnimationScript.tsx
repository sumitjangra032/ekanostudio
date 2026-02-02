"use client";

import { useEffect } from 'react';

export default function AnimationScript() {
    useEffect(() => {
        const checkAndInit = setInterval(() => {
            if ((window as any).gsap && (window as any).ScrollTrigger && (window as any).Lenis) {
                clearInterval(checkAndInit);
                initAnimations();
            }
        }, 50);

        return () => clearInterval(checkAndInit);
    }, []);

    const initAnimations = () => {
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;
        const Lenis = (window as any).Lenis;

        gsap.registerPlugin(ScrollTrigger);

        // Skip if mobile (handled by media query in CSS mostly, but logic here too)
        if (window.innerWidth <= 900) return;

        // Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time: number) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);

        // Portfolio Heading
        const portfolioText = document.querySelector('.portfolio-text');
        if (portfolioText) {
            gsap.to(portfolioText, {
                x: '19vw',
                scale: 0.75,
                scrollTrigger: {
                    trigger: '.whitespace.w-1',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                    // ease: 'none', // Removed ease for smoother scrub
                },
            });
        }

        // Split Digits Logic
        function splitTextIntoSpans(selector: string) {
            const elements = document.querySelectorAll(selector);
            elements.forEach((element) => {
                const text = (element as HTMLElement).innerText || '';
                const firstDigit = text[0] || '0';
                const secondDigit = text[1] || '0';
                element.innerHTML = `
          <div class="digit-wrapper">
            <span class="first">${firstDigit}</span>
            <span class="second">${secondDigit}</span>
          </div>
        `;
            });
        }
        splitTextIntoSpans('.mask h1');

        function isVideo(filename: string) {
            const videoExtensions = ['.mp4', '.webm', '.mov', '.avi', '.m4v'];
            return videoExtensions.some((ext) => filename.toLowerCase().endsWith(ext));
        }

        // Populate Gallery
        const imagesPerProject = 6;
        let imageIndex = 0;

        function populateGallery() {
            const imageContainers = document.querySelectorAll('.images');
            // Original Media Files List
            const mediaFiles = [
                // webdev
                { src: '/portfolio-new/assets/video2.mp4', href: 'https://quechua-lookbook.com/ss25/' },
                { src: '/portfolio-new/assets/img1.webp', href: 'https://www.orage.com/' },
                { src: '/portfolio-new/assets/video1.mp4', href: 'https://www.orage.com/' },
                { src: '/portfolio-new/assets/img3.webp', href: 'https://quechua-lookbook.com/ss25/' },
                { src: '/portfolio-new/assets/video4.mp4', href: 'https://hempelfoundation.com/' },
                { src: '/portfolio-new/assets/video5.mp4', href: 'https://norr11.com/' },

                // content creation
                { src: '/portfolio-new/assets/video6.mp4', href: '' },
                { src: '/portfolio-new/assets/video7.mp4', href: 'https://thibaud.film/' },
                { src: '/portfolio-new/assets/img5.webp', href: 'https://thibaud.film/' },
                { src: '/portfolio-new/assets/img6.webp', href: 'https://google.com' },
                { src: '/portfolio-new/assets/video8.mp4', href: 'https://thibaud.film/#works' },
                { src: '/portfolio-new/assets/img7.webp', href: 'https://pebblelife.com/' },

                // seo
                { src: '/portfolio-new/assets/img8.webp', href: 'https://google.com' },
                { src: '/portfolio-new/assets/img9.webp', href: 'https://amici.com.cy/en/' },
                { src: '/portfolio-new/assets/img10.webp', href: 'https://www.gkaratzias.com/en/' },
                { src: '/portfolio-new/assets/video11.mp4', href: 'https://google.com' },
                { src: '/portfolio-new/assets/img11.webp', href: 'https://www.bmadb.fr/' },
                { src: '/portfolio-new/assets/img12.webp', href: 'https://google.com' },

                // branding
                { src: '/portfolio-new/assets/img13.webp', href: 'https://pebblelife.com/' },
                { src: '/portfolio-new/assets/video12.mp4', href: 'https://sport-fleiss.at/en/ski-rent/' },
                { src: '/portfolio-new/assets/img14.avif', href: 'https://google.com' },
                { src: '/portfolio-new/assets/video13.mp4', href: 'https://google.com' },
                { src: '/portfolio-new/assets/img15.png', href: 'https://google.com' },
                { src: '/portfolio-new/assets/img16.jpg', href: 'https://google.com' },

                // digital marketing
                { src: '/portfolio-new/assets/img17.webp', href: '' },
                { src: '/portfolio-new/assets/video26.mp4', href: '' },
                { src: '/portfolio-new/assets/img19.webp', href: '' },
                { src: '/portfolio-new/assets/img20.webp', href: '' },
                { src: '/portfolio-new/assets/video25.mp4', href: '' },
                { src: '/portfolio-new/assets/img22.jpg', href: '' },

                // e-mail automation
                { src: '/portfolio-new/assets/img23.webp', href: '' },
                { src: '/portfolio-new/assets/img24.webp', href: '' },
                { src: '/portfolio-new/assets/img25.webp', href: '' },
                { src: '/portfolio-new/assets/img26.webp', href: '' },
                { src: '/portfolio-new/assets/img27.webp', href: '' },
                { src: '/portfolio-new/assets/img28.webp', href: '' },

                // consulting
                { src: '/portfolio-new/assets/img29.jpg', href: '' },
                { src: '/portfolio-new/assets/img30.webp', href: '' },
                { src: '/portfolio-new/assets/video14.mp4', href: '' },
                { src: '/portfolio-new/assets/img31.jpg', href: '' },
                { src: '/portfolio-new/assets/img32.avif', href: '' },
                { src: '/portfolio-new/assets/img33.avif', href: '' },

                // tech and cloud
                { src: '/portfolio-new/assets/img34.avif', href: '' },
                { src: '/portfolio-new/assets/img35.avif', href: '' },
                { src: '/portfolio-new/assets/img36.avif', href: '' },
                { src: '/portfolio-new/assets/img37.avif', href: '' },
                { src: '/portfolio-new/assets/img38.avif', href: '' },
                { src: '/portfolio-new/assets/img39.avif', href: '' },

                // smm
                { src: '/portfolio-new/assets/video15.mp4', href: '' },
                { src: '/portfolio-new/assets/img40.png', href: '' },
                { src: '/portfolio-new/assets/video16.mp4', href: '' },
                { src: '/portfolio-new/assets/img41.webp', href: '' },
                { src: '/portfolio-new/assets/video17.mp4', href: '' },
                { src: '/portfolio-new/assets/img42.webp', href: '' },

                // app dev
                { src: '/portfolio-new/assets/video21.mp4', href: '' },
                { src: '/portfolio-new/assets/img43.webp', href: '' },
                { src: '/portfolio-new/assets/img44.avif', href: '' },
                { src: '/portfolio-new/assets/video18.mp4', href: '' },
                { src: '/portfolio-new/assets/video19.mp4', href: '' },
                { src: '/portfolio-new/assets/video20.mp4', href: '' },

                // ai
                { src: '/portfolio-new/assets/video22.mp4', href: '' },
                { src: '/portfolio-new/assets/img45.png', href: '' },
                { src: '/portfolio-new/assets/img46.png', href: '' },
                { src: '/portfolio-new/assets/video23.mp4', href: '' },
                { src: '/portfolio-new/assets/video24.mp4', href: '' },
                { src: '/portfolio-new/assets/img47.jpg', href: 'https://klingai.com/global/' },
            ];

            imageContainers.forEach((container) => {
                for (let j = 0; j < imagesPerProject; j++) {
                    if (imageIndex >= mediaFiles.length) imageIndex = 0;

                    const mediaContainer = document.createElement('div');
                    mediaContainer.classList.add('img');
                    const { src, href } = mediaFiles[imageIndex];

                    const link = document.createElement('a');
                    link.href = href;
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    link.style.display = 'block';
                    link.style.width = '100%';
                    link.style.height = '100%';

                    if (isVideo(src)) {
                        const video = document.createElement('video');
                        video.muted = true;
                        video.loop = true;
                        video.playsInline = true;
                        video.setAttribute('muted', '');
                        video.setAttribute('loop', '');
                        video.setAttribute('playsinline', '');

                        const source = document.createElement('source');
                        source.src = src;
                        source.type = src.endsWith('.webm') ? 'video/webm' : 'video/mp4';
                        video.appendChild(source);

                        // Play immediately when in viewport
                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    (entry.target as HTMLVideoElement).play().catch(() => {});
                                } else {
                                    (entry.target as HTMLVideoElement).pause();
                                }
                            });
                        }, { threshold: 0.1 });

                        observer.observe(video);
                        link.appendChild(video);
                    } else {
                        const img = document.createElement('img');
                        img.src = src;
                        img.alt = `Project Image ${imageIndex + 1}`;
                        img.loading = 'lazy';
                        link.appendChild(img);
                    }

                    mediaContainer.appendChild(link);
                    container.appendChild(mediaContainer);
                    imageIndex++;
                }
            });
        }

        populateGallery();

        // Initialize preview with first image
        setTimeout(() => {
            const firstMedia = document.querySelector('.img img, .img video') as HTMLMediaElement | HTMLImageElement;
            if (firstMedia && previewContainer) {
                updatePreview(firstMedia);
            }
        }, 500);

        // Progress Bar
        ScrollTrigger.create({
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: (self: any) => {
                gsap.set('.progress-bar', { scaleY: self.progress });
            },
        });

        // =======================================================
        // PREVIEW UPDATE LOGIC (FIXED)
        // =======================================================
        const previewContainer = document.querySelector('.preview-img') as HTMLElement;
        const mediaElements = document.querySelectorAll('.img img, .img video');

        function updatePreview(media: HTMLMediaElement | HTMLImageElement) {
            if (!previewContainer) return;

            // PRO FIX: Z-Index + AutoAlpha Crossfade
            // Create new element instead of clearing innerHTML
            const isVideoEl = media.tagName.toLowerCase() === 'video';

            // Check if we are already showing this source
            const currentActive = previewContainer.querySelector('.active-preview') as (HTMLImageElement | HTMLVideoElement);
            // Getting source
            let newSrc = '';
            if (isVideoEl) {
                const v = media as HTMLVideoElement;
                const s = v.querySelector('source');
                newSrc = s ? s.src : v.src;
            } else {
                newSrc = (media as HTMLImageElement).src;
            }

            if (currentActive) {
                // If source is same, do nothing (prevent flicker)
                if (currentActive.tagName.toLowerCase() === (isVideoEl ? 'video' : 'img') &&
                    (currentActive as any).src === newSrc) {
                    return;
                }
            }

            let newEl: HTMLVideoElement | HTMLImageElement;

            if (isVideoEl) {
                newEl = document.createElement('video');
                (newEl as HTMLVideoElement).autoplay = true;
                (newEl as HTMLVideoElement).muted = true;
                (newEl as HTMLVideoElement).loop = true;
                (newEl as HTMLVideoElement).playsInline = true;
                newEl.src = newSrc;
            } else {
                newEl = document.createElement('img');
                newEl.src = newSrc;
            }

            // Style for overlay
            newEl.style.position = 'absolute';
            newEl.style.top = '0';
            newEl.style.left = '0';
            newEl.style.width = '100%';
            newEl.style.height = '100%';
            newEl.style.objectFit = 'cover';
            newEl.style.opacity = '0'; // Start hidden
            newEl.style.zIndex = '50';
            newEl.classList.add('active-preview');

            previewContainer.appendChild(newEl);

            // Animate In
            gsap.to(newEl, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
                overwrite: true
            });

            // Remove old elements
            const oldElements = Array.from(previewContainer.children).filter(el => el !== newEl);
            if (oldElements.length > 0) {
                gsap.to(oldElements, {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    overwrite: true,
                    onComplete: () => {
                        oldElements.forEach(el => el.remove());
                    }
                });
            }
        }

        mediaElements.forEach((media) => {
            ScrollTrigger.create({
                trigger: media,
                start: 'top 50%',
                end: 'bottom 50%',
                onEnter: () => updatePreview(media as any),
                onEnterBack: () => updatePreview(media as any),
            });
        });

        // Indicator Animation (Restored)
        const indicator = document.querySelector('.indicator');
        const names = gsap.utils.toArray('.name');
        const projects = gsap.utils.toArray('.project');

        if (indicator && names.length > 0 && projects.length > 0) {
            gsap.set(indicator, { top: '0px' });
            if ((names[0] as HTMLElement)) (names[0] as HTMLElement).classList.add('active');

            projects.forEach((project: any, index: number) => {
                ScrollTrigger.create({
                    trigger: project,
                    start: 'top 50%',
                    end: 'bottom 50%',
                    onEnter: () => {
                        if (!names[index]) return;
                        const nameTop = (names[index] as HTMLElement).offsetTop;
                        gsap.to(indicator, { top: nameTop + 'px', duration: 0.3, ease: 'power2.out' });
                        names.forEach((name: any, i: number) => {
                            if (i === index) name.classList.add('active');
                            else name.classList.remove('active');
                        });
                    },
                    onLeaveBack: () => {
                        if (index <= 0 || !names[index - 1]) return;
                        const nameTop = (names[index - 1] as HTMLElement).offsetTop;
                        gsap.to(indicator, { top: nameTop + 'px', duration: 0.3, ease: 'power2.out' });
                        names.forEach((name: any, i: number) => {
                            if (i === index - 1) name.classList.add('active');
                            else name.classList.remove('active');
                        });
                    }
                });
            });
        }

        // Fixed elements fade out
        const letsCollabSection = document.getElementById('lets-collab-section') || document.querySelector('.lets-collab-mobile');

        if (letsCollabSection) {
            const projectNamesEl = document.querySelector('.project-names');
            const previewImgEl = document.querySelector('.preview-img');
            const portfolioHeadingEl = document.querySelector('.portfolio-heading');

            if (projectNamesEl && previewImgEl && portfolioHeadingEl) {
                gsap.to([projectNamesEl, previewImgEl, portfolioHeadingEl], {
                    opacity: 0,
                    pointerEvents: 'none',
                    scrollTrigger: {
                        trigger: letsCollabSection,
                        start: 'top 80%', // Adjusted for earlier fade
                        end: 'top 20%',
                        scrub: 1,
                    },
                });
            }
        }

        // =======================================================
        // SCROLL VELOCITY & DIGIT ANIMATIONS (RESTORED)
        // =======================================================
        let activeIndex = -1;
        let lastScrollTop = 0;
        let scrollVelocity = 0;

        const handleScroll = () => {
            const st = window.pageYOffset;
            scrollVelocity = Math.abs(st - lastScrollTop);
            lastScrollTop = st;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        projects.forEach((project: any, i: number) => {
            const mask = (project as HTMLElement).querySelector('.mask');
            const digitWrapper = (project as HTMLElement).querySelector('.digit-wrapper');
            const firstDigit = (project as HTMLElement).querySelector('.first');
            const secondDigit = (project as HTMLElement).querySelector('.second');

            if (!mask || !digitWrapper || !firstDigit || !secondDigit) return;

            gsap.set([mask, digitWrapper, firstDigit, secondDigit], { y: 0 });
            gsap.set(mask, { position: 'absolute', top: 0 });

            ScrollTrigger.create({
                trigger: project,
                start: 'top bottom',
                end: 'bottom top',
                anticipatePin: 1,
                fastScrollEnd: true,
                preventOverlaps: true,
                onUpdate: (self: any) => {
                    const projectRect = (project as HTMLElement).getBoundingClientRect();
                    const windowCenter = window.innerHeight / 2;
                    const nextProject = projects[i + 1] as HTMLElement;
                    const velocityAdjustment = Math.min(scrollVelocity * 0.1, 100);
                    const pushPoint = window.innerHeight * (0.85 + velocityAdjustment / window.innerHeight);

                    if (projectRect.top <= windowCenter) {
                        if (!(mask as any).isFixed) {
                            (mask as any).isFixed = true;
                            gsap.set(mask, { position: 'fixed', top: '50vh' });
                        }
                        if (nextProject) {
                            const nextRect = nextProject.getBoundingClientRect();
                            if (nextRect.top <= pushPoint && activeIndex !== i + 1) {
                                gsap.killTweensOf([mask, digitWrapper, firstDigit, secondDigit]);
                                activeIndex = i + 1;

                                gsap.to([mask, digitWrapper], {
                                    y: -80,
                                    duration: 0.5,
                                    ease: 'power2.out',
                                    overwrite: true,
                                });
                                gsap.to([firstDigit, secondDigit], {
                                    y: -80,
                                    duration: 0.75,
                                    ease: 'power2.out',
                                    overwrite: true,
                                });
                            }
                        }
                    } else {
                        (mask as any).isFixed = false;
                        gsap.set(mask, { position: 'absolute', top: 0 });
                    }

                    if (self.direction === -1 && projectRect.top > windowCenter) {
                        (mask as any).isFixed = false;
                        gsap.set(mask, { position: 'absolute', top: 0 });

                        if (i > 0 && activeIndex === i) {
                            const prevProject = projects[i - 1] as HTMLElement;
                            const prevMask = prevProject.querySelector('.mask');
                            const prevWrapper = prevProject.querySelector('.digit-wrapper');
                            const prevFirst = prevProject.querySelector('.first');
                            const prevSecond = prevProject.querySelector('.second');

                            if (!prevMask || !prevWrapper || !prevFirst || !prevSecond) return;

                            gsap.killTweensOf([prevMask, prevWrapper, prevFirst, prevSecond]);
                            activeIndex = i - 1;

                            gsap.to([prevMask, prevWrapper], { y: 0, duration: 0.3, ease: 'power2.out' });
                            gsap.to([prevFirst, prevSecond], { y: 0, duration: 0.75, ease: 'power2.out' });
                        }
                    }
                },
                onEnter: () => {
                    if (i === 0) activeIndex = 0;
                },
            });
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    };

    return null;
}
