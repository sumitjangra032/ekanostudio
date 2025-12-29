export interface RelatedContentItem {
    id: string;
    image: string;
    link: string;
    title: string;
}

export const RELATED_CONTENT: RelatedContentItem[] = [
    {
        id: "related-1",
        image: "/images/blog/related-1.jpg", // Replace with actual image path
        link: "/services/web-development",     // Replace with actual link
        title: "Web Development Services",
    },
    {
        id: "related-2",
        image: "/images/blog/related-2.jpg", // Replace with actual image path
        link: "/services/branding",            // Replace with actual link
        title: "Brand Strategy Services",
    },
    {
        id: "related-3",
        image: "/images/blog/related-3.jpg", // Replace with actual image path
        link: "/contact",                      // Replace with actual link
        title: "Start Your Project",
    },
];
