export interface BlogImage {
    src: string;
    alt: string;
    link?: string; // Optional link if we want the image to be clickable
}

export const BLOG_IMAGES: Record<string, BlogImage[]> = {
    'how-a-social-media-advertising-works': [
        { src: "/images/coreExpertise/social-media-marketing.jpg", alt: "Social Media Advertising Platform Dashboard" },
        { src: "/images/service-page-bg/service-layer-1.jpg", alt: "Target Audience Analysis" },
        { src: "/images/service-page-bg/service-layer-2.jpg", alt: "Ad Campaign Metrics" },
    ],
    'how-api-integrations-work': [
        { src: "/images/coreExpertise/website-development.jpg", alt: "API Data Flow Architecture" },
        { src: "/images/service-page-bg/service-layer-3.jpg", alt: "System Connectivity Diagram" },
        { src: "/images/service-page-bg/service-layer-4.jpg", alt: "Secure Data Transfer" },
    ],
    'how-to-build-a-brand-identity': [
        { src: "/images/service-page-bg/service-layer-5.jpg", alt: "Brand Visual Elements" },
        { src: "/images/service-page-bg/service-layer-6.jpg", alt: "Color Psychology Palette" },
        { src: "/images/service-page-bg/service-layer-7.jpg", alt: "Brand Archetypes" },
    ],
    'how-to-create-online-marketplace': [
        { src: "/images/coreExpertise/website-development.jpg", alt: "Marketplace Platform Interface" },
        { src: "/images/service-page-bg/service-layer-8.jpg", alt: "Vendor Management System" },
        { src: "/images/service-page-bg/service-layer-1.jpg", alt: "Ecommerce Transaction Flow" },
    ],
    'how-to-do-a-competitor-analysis': [
        { src: "/images/coreExpertise/performance-marketing.jpg", alt: "Competitor Market Share Chart" },
        { src: "/images/service-page-bg/service-layer-2.jpg", alt: "SWOT Analysis Framework" },
        { src: "/images/service-page-bg/service-layer-3.jpg", alt: "Market Positioning Graph" },
    ],
    'how-to-do-search-engine-optimization': [
        { src: "/images/coreExpertise/seo.jpg", alt: "SEO Keyword Strategy" },
        { src: "/images/service-page-bg/service-layer-4.jpg", alt: "On-Page Optimization Checklist" },
        { src: "/images/service-page-bg/service-layer-5.jpg", alt: "Backlink Network Visualization" },
    ],
    'how-to-learn-script-writing': [
        { src: "/images/service-page-bg/service-layer-6.jpg", alt: "Script Structure Diagram" },
        { src: "/images/service-page-bg/service-layer-7.jpg", alt: "Character Arc Development" },
        { src: "/images/service-page-bg/service-layer-8.jpg", alt: "Storyboarding Process" },
    ],
    'how-to-setup-a-crm': [
        { src: "/images/coreExpertise/performance-marketing.jpg", alt: "CRM Dashboard Interface" },
        { src: "/images/service-page-bg/service-layer-1.jpg", alt: "Customer Journey Mapping" },
        { src: "/images/service-page-bg/service-layer-2.jpg", alt: "Sales Pipeline Workflow" },
    ],
    'how-to-start-email-marketing': [
        { src: "/images/coreExpertise/social-media-marketing.jpg", alt: "Email Campaign Strategy" },
        { src: "/images/service-page-bg/service-layer-3.jpg", alt: "Automated Email Sequences" },
        { src: "/images/service-page-bg/service-layer-4.jpg", alt: "Email Analytics Report" },
    ],
};
