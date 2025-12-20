import ServiceFormClient from "./ServiceFormClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Get a Quote | Ekanostudio",
    description: "Request a custom quote for your digital project. Detailed estimation for web development, design, and marketing services.",
};

export default function ServiceFormPage() {
    return <ServiceFormClient />;
}
