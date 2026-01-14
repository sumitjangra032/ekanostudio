import { SEO_SERVICES, SEO_LOCATIONS } from "./constants";

export type Service = typeof SEO_SERVICES[0];
export type Location = typeof SEO_LOCATIONS[0];

export interface SeoPageData {
    service: Service;
    location: Location;
    meta: {
        title: string;
        description: string;
        canonical: string;
    };
    content: {
        hero: {
            title: string;
            subtitle: string;
        };
        overview: {
            title: string;
            text: string;
        };
        whyChoose: {
            title: string;
            points: { title: string; desc: string }[];
        };
        deliverables: string[];
        process: {
            title: string;
            steps: { title: string; desc: string }[];
        };
        cta: {
            title: string;
            text: string;
        };
        relatedServices: { title: string; link: string }[];
    };
}
