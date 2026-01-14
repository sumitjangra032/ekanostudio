import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "ai-automation",
        name: "AI Automation",
        slug: "ai-automation",
        targetServiceSlug: "ai-automation-n8n",
        categorySlug: "ai-automation",
        keywords: ["Business Automation", "AI Workflows", "n8n Integration"],
        description: "Streamline your operations and reduce costs with cutting-edge AI automation and workflow optimization.",
    },
    location: {
        name: "UAE",
        slug: "uae",
        type: "country",
        country: "UAE",
        adjective: "UAE",
        context: "in the United Arab Emirates",
        metaTitleSuffix: "UAE | Dubai & Abu Dhabi",
        traits: ["luxury market", "rapid development", "global business hub"],
    },
    meta: {
        title: "AI Automation Services UAE | Dubai Smart Business Solutions",
        description: "Transform your UAE business with AI. We build custom n8n workflows and AI chatbots to automate operations for companies in Dubai & Abu Dhabi.",
        canonical: "/ai-automation-uae",
    },
    content: {
        hero: {
            title: "AI Innovation for Business in the UAE",
            subtitle: "Embrace the future. We implement intelligent automation to power the next generation of Dubai enterprises.",
        },
        overview: {
            title: "Smart Automation for the Smart Nation",
            text: "The UAE leads the world in adopting future technologies. Your business operations should be no different. Ekanostudio brings advanced AI automation to the Emirates. Whether it's automating property inquiries in Real Estate or streamlining logistics data, our custom AI solutions save time and drive efficiency.",
        },
        whyChoose: {
            title: "Why Automate Your UAE Business",
            points: [
                { title: "Scalability", desc: "Handle growing demand without increasing headcount." },
                { title: "24/7 Service", desc: "AI agents that serve your customers round-the-clock." },
                { title: "Error Reduction", desc: "Automated workflows eliminate manual data entry mistakes." }
            ]
        },
        deliverables: [
            "WhatsApp Business AI Bots",
            "Real Estate Lead Automation",
            "Custom n8n Workflows",
            "CRM Integration (Salesforce/Zoho)",
            "Automated Invoicing",
            "Bilingual Chatbot Setup"
        ],
        process: {
            title: "UAE Automation Strategy",
            steps: [
                { title: "Consult", desc: "Identifying your operational bottlenecks." },
                { title: "Design", desc: "Architecting a secure automation flow." },
                { title: "Implement", desc: "Building and testing the solution." },
                { title: "Support", desc: "Ongoing maintenance and optimization." }
            ]
        },
        cta: {
            title: "Ready to innovate?",
            text: "Explore our AI automation solutions for UAE."
        },
        relatedServices: [
            { title: "Web Apps", link: "/services/app-development/web-app-development" },
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "CRM Setup", link: "/services/email-automation/crm-setup" }
        ]
    }
};
