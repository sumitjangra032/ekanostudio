"use client";

import { useEffect, useState, useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Briefcase, Phone, Star, Check, Mail, Loader2, Info, ShieldCheck, Zap, Clock, ArrowRight } from "lucide-react";
import ProjectScroller from "../book-consultation-sections/ProjectScroller";
import { m } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import { BOOK_CONSULTATION_CONTENT } from "@/constants/bookConsultation";
import AnimatedLine from "../animated/AnimatedLine";

import RandomGradientGlow from "../effects/RandomGradientGlow";
import { COUNTRIES } from "@/constants/countries";
import { Label } from "@/components/ui/label";

import { SERVICES_CONTENT, IServiceType, IServiceSection } from "@/constants/services";
import AnimatedRotateButton from "../animated/AnimatedRotateButton";
import AnimateDownloadedSVG from "../animated/AnimateDownloadedSVG";
import { useSearchParams } from "next/navigation";
import { loadServiceBySlug } from "@/constants/services/loader";
import { Textarea } from "@/components/ui/textarea";

const serviceFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    phone: z.string().min(10, "Phone number must be at least 10 digits."),
    country: z.string().min(1, "Please select a country."),
    email: z.string().email("Please enter a valid email address."),
    category: z.string().min(1, "Please select a category."),
    service: z.string().min(1, "Select a service."),
    package: z.string().min(1, "Select a package."),
    contactMethod: z.enum(["email", "whatsapp"]),
    requirements: z.string().optional(),
});

type ServiceFormValues = z.infer<typeof serviceFormSchema>;

/**
 * Formats a price string by dividing numbers by 1000 and adding 'K'.
 */
function formatPriceToK(priceStr: string): string {
    if (!priceStr) return priceStr;

    return priceStr.replace(/(\d{1,3}(?:,\d{3})*(?:\.\d+)?)/g, (match) => {
        const num = parseFloat(match.replace(/,/g, ""));
        if (isNaN(num)) return match;

        const kValue = num / 1000;
        if (kValue >= 1 && kValue % 1 === 0) {
            return kValue.toString() + "K";
        }
        return kValue.toFixed(1).replace(/\.0$/, "") + "K";
    });
}

interface ServiceFormProps {
    initialCategory?: string;
    initialService?: string;
}

export default function ServiceForm({ initialCategory, initialService }: ServiceFormProps) {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];
    const [submittedData, setSubmittedData] = useState<ServiceFormValues | null>(null);
    const [serviceData, setServiceData] = useState<IServiceType | null>(null);
    const [loadingService, setLoadingService] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState<string | null>(null);

    const searchParams = useSearchParams();
    const categoryFromUrl = searchParams.get("category") || initialCategory;
    const serviceFromUrl = searchParams.get("service") || initialService;

    // Determine initial values
    let initialCat = categoryFromUrl || "";
    let initialServ = serviceFromUrl || "";

    if (!initialCat && initialServ) {
        const found = SERVICES_CONTENT.categories.find(c =>
            c.items.some(i => i.slug === initialServ)
        );
        if (found) initialCat = found.slug;
    }

    if (!initialCat && !initialServ) {
        initialCat = SERVICES_CONTENT.categories[0].slug;
        initialServ = SERVICES_CONTENT.categories[0].items[0].slug;
    }

    const form = useForm<ServiceFormValues>({
        resolver: zodResolver(serviceFormSchema),
        defaultValues: {
            name: "",
            phone: "",
            country: "",
            email: "",
            category: initialCat,
            service: initialServ,
            package: "",
            contactMethod: "whatsapp",
            requirements: "",
        },
    });

    const selectedCategorySlug = form.watch("category");
    const selectedServiceSlug = form.watch("service");

    const availableServices = useMemo(() => {
        return SERVICES_CONTENT.categories.find((c) => c.slug === selectedCategorySlug)?.items || [];
    }, [selectedCategorySlug]);

    // Sync form with URL params if they change
    useEffect(() => {
        if (categoryFromUrl) form.setValue("category", categoryFromUrl);
        if (serviceFromUrl) {
            form.setValue("service", serviceFromUrl);
            // If category is not set but service is, find and set category
            if (!categoryFromUrl) {
                const found = SERVICES_CONTENT.categories.find(c =>
                    c.items.some(i => i.slug === serviceFromUrl)
                );
                if (found) form.setValue("category", found.slug);
            }
        }
    }, [categoryFromUrl, serviceFromUrl, form]);

    // Load service data when selection changes
    useEffect(() => {
        if (selectedCategorySlug && selectedServiceSlug) {
            setLoadingService(true);
            loadServiceBySlug(selectedCategorySlug, selectedServiceSlug)
                .then((data) => {
                    setServiceData(data);
                    // Reset package ONLY if current package doesn't exist in new data
                    const pricing = data?.sections?.find((s: IServiceSection) => s.type === "pricing")?.data;
                    const packageExists = pricing?.plans?.some((p: any) => p.name === form.getValues("package"));
                    if (!packageExists) {
                        form.setValue("package", "");
                    }
                })
                .finally(() => setLoadingService(false));
        } else {
            setServiceData(null);
        }
    }, [selectedCategorySlug, selectedServiceSlug, form]);

    const pricingSection = serviceData?.sections?.find((s: IServiceSection) => s.type === "pricing")?.data;

    async function onSubmit(data: ServiceFormValues) {
        setIsSubmitting(true);
        setSubmissionError(null);
        try {
            const response = await fetch("/api/service", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to submit inquiry.");
            }

            setSubmittedData(data);
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : "Something went wrong. Please try again.";
            setSubmissionError(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="relative min-h-[calc(100vh-4rem)] px-4 py-8 md:py-12 lg:py-20">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none z-0 bg-black" />

            <div className="relative z-10 max-w-7xl mx-auto mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-start">
                    {/* Left Column: Context & Trust */}
                    <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 lg:h-fit">
                        <div className="space-y-6">
                            <div
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase py-2 px-4 rounded-full border"
                                style={{
                                    color: theme.primary,
                                    borderColor: theme.primary + "33",
                                    background: theme.primary + "11"
                                }}
                            >
                                <Zap size={14} className="animate-pulse" />
                                Service Inquiry
                            </div>

                            <div
                                className="text-3xl md:text-4xl lg:text-5xl font-bold font-cabinet leading-[1.05] tracking-tight"
                                style={{ color: theme.text }}
                            >
                                {serviceData?.title || "Get Your Service Started"}
                            </div>

                            <p
                                className="text-base md:text-lg opacity-80 leading-relaxed max-w-lg"
                                style={{ color: theme.subtext }}
                            >
                                Tell us about your vision. We combine strategy, design, and technology to build digital products that perform.
                            </p>
                        </div>

                        {/* Why ekanostudio List */}
                        <div className="space-y-4 pt-4">
                            <h4 className="text-xs font-bold uppercase tracking-widest opacity-50" style={{ color: theme.text }}>
                                Why partner with us?
                            </h4>
                            <div className="grid gap-3">
                                {[
                                    { icon: ShieldCheck, title: "Secure & Confidential", desc: "Your project details and data are protected." },
                                    { icon: Clock, title: "24h Response Time", desc: "We review every inquiry within one business day." },
                                    { icon: Star, title: "Expert Implementation", desc: "Work with senior designers and developers." }
                                ].map((item, i) => (
                                    <m.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: i * 0.1 }}
                                        className="flex gap-3 p-3 rounded-xl border bg-black/20 backdrop-blur-sm"
                                        style={{ borderColor: theme.text + "11" }}
                                    >
                                        <div className="p-2 rounded-lg bg-primary/10 h-fit">
                                            <item.icon size={18} className="text-primary" style={{ color: theme.accents.a }} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h5 className="font-bold text-sm truncate" style={{ color: theme.text }}>{item.title}</h5>
                                            <p className="text-xs opacity-60 mt-0.5 line-clamp-2" style={{ color: theme.subtext }}>{item.desc}</p>
                                        </div>
                                    </m.div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Success Section */}
                        <div className="space-y-3 pt-4">
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40" style={{ color: theme.text }}>
                                Global Success
                            </h4>
                            <div className="relative h-28 overflow-hidden rounded-xl border bg-black/20 backdrop-blur-xl p-4 flex items-center" style={{ borderColor: theme.text + "11" }}>
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
                                <ProjectScroller projects={BOOK_CONSULTATION_CONTENT.projects.list} />
                            </div>
                        </div>

                        {/* Next Steps */}
                        <div className="p-6 rounded-2xl border bg-gradient-to-br from-primary/5 to-transparent overflow-hidden relative" style={{ borderColor: theme.accents.a + "33" }}>
                            <div className="absolute -right-4 -bottom-4 opacity-10" style={{ color: theme.accents.a }}>
                                <Briefcase size={100} />
                            </div>
                            <h4 className="font-bold text-sm mb-4" style={{ color: theme.text }}>What happens next?</h4>
                            <ul className="space-y-3 relative z-10">
                                {[
                                    "We analyze your project goals",
                                    "Our team drafts a custom proposal",
                                    "We schedule a strategy consultation"
                                ].map((step, i) => (
                                    <li key={i} className="flex gap-3 text-sm opacity-80 items-start" style={{ color: theme.subtext }}>
                                        <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: theme.accents.a }} />
                                        <span className="leading-relaxed">{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: The Form */}
                    <div className="lg:col-span-7">
                        {submittedData ? (
                            <div className="relative w-full rounded-xl">

                                <RandomGradientGlow colorA={theme.accents.a} colorB={theme.accents.b} />
                                <Card
                                    style={{
                                        background: theme.cardBg,
                                        border: `1px solid ${theme.text}22`,
                                        color: theme.text,
                                        minHeight: "400px",
                                    }}
                                >
                                    <CardContent className="space-y-6 pt-8 pb-8">
                                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                            <AnimateDownloadedSVG
                                                src={BOOK_CONSULTATION_CONTENT.confirmationPage.icon}
                                                size={35}
                                                stroke={theme.primary}
                                            />
                                        </div>
                                        <div className="text-center">
                                            <h2 className="text-3xl font-bold mb-2">
                                                <AnimatedLine text={BOOK_CONSULTATION_CONTENT.confirmationPage.title} />
                                            </h2>
                                            <p className="text-sm opacity-80" style={{ color: theme.subtext }}>
                                                <AnimatedLine text={BOOK_CONSULTATION_CONTENT.confirmationPage.description} />
                                            </p>
                                        </div>

                                        <div className="bg-primary/5 p-4 sm:p-6 rounded-lg space-y-3 text-left w-full border" style={{ borderColor: theme.text + "11" }}>
                                            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-70">Submission Details</h3>
                                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                                <span className="opacity-60">Name:</span>
                                                <span className="font-medium text-right truncate">{submittedData.name}</span>

                                                <span className="opacity-60">Email:</span>
                                                <span className="font-medium text-right truncate">{submittedData.email}</span>

                                                <span className="opacity-60">Service:</span>
                                                <span className="font-medium text-right truncate">
                                                    {SERVICES_CONTENT.categories.find(c => c.slug === submittedData.category)?.items.find(i => i.slug === submittedData.service)?.title || submittedData.service}
                                                </span>

                                                <span className="opacity-60">Package:</span>
                                                <span className="font-medium text-right truncate">{submittedData.package}</span>

                                                <span className="opacity-60">Contact:</span>
                                                <span className="font-medium text-right truncate capitalize">{submittedData.contactMethod}</span>
                                            </div>
                                        </div>

                                        <p className="text-sm text-center" style={{ color: theme.subtext }}>
                                            You will receive a confirmation email shortly.
                                        </p>

                                        <div className="pt-2 flex justify-center">
                                            <AnimatedRotateButton
                                                text="Back to Home"
                                                href="/"
                                                color={theme.buttonBg}
                                                accent={theme.accents}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ) : (
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 lg:space-y-8">
                                    {/* Service & Package Card */}
                                    <div className="relative w-full rounded-xl">

                                        <RandomGradientGlow colorA={theme.accents.b} colorB={theme.accents.a} />
                                        <Card style={{
                                            background: theme.cardBg,
                                            border: `1px solid ${theme.text}22`,
                                            color: theme.text,
                                        }}>
                                            <CardHeader className="pb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-lg bg-primary/10">
                                                        <Briefcase className="h-5 w-5" style={{ color: theme.accents.a }} />
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <CardTitle className="font-satoshi text-lg">Service & Package</CardTitle>
                                                        <CardDescription className="font-cabinet text-sm" style={{ color: theme.subtext }}>
                                                            Select the service and package that best fits your needs.
                                                        </CardDescription>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-6 pt-2">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <FormField
                                                        control={form.control}
                                                        name="category"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                                                                    Category
                                                                </FormLabel>
                                                                <Select
                                                                    onValueChange={(value) => {
                                                                        field.onChange(value);
                                                                        form.setValue("service", "");
                                                                        form.setValue("package", "");
                                                                    }}
                                                                    value={field.value}
                                                                >
                                                                    <FormControl>
                                                                        <SelectTrigger
                                                                            className="w-full h-11"
                                                                            style={{
                                                                                border: `1px solid ${theme.text}22`,
                                                                                background: `${theme.cardBg}80`,
                                                                            }}
                                                                        >
                                                                            <SelectValue placeholder="Select a category" />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent
                                                                        className="max-h-[300px]"
                                                                        style={{
                                                                            backgroundColor: theme.background,
                                                                            borderColor: theme.text + "22",
                                                                            color: theme.text,
                                                                        }}
                                                                    >
                                                                        {SERVICES_CONTENT.categories.map((cat) => (
                                                                            <SelectItem key={cat.slug} value={cat.slug}>
                                                                                {cat.name}
                                                                            </SelectItem>
                                                                        ))}
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="service"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                                                                    Service
                                                                </FormLabel>
                                                                <Select
                                                                    onValueChange={field.onChange}
                                                                    value={field.value}
                                                                    disabled={!selectedCategorySlug}
                                                                >
                                                                    <FormControl>
                                                                        <SelectTrigger
                                                                            className="w-full h-11"
                                                                            style={{
                                                                                border: `1px solid ${theme.text}22`,
                                                                                background: `${theme.cardBg}80`,
                                                                            }}
                                                                        >
                                                                            <SelectValue
                                                                                placeholder={selectedCategorySlug ? "Select a service" : "Select a category first"}
                                                                            />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent
                                                                        className="max-h-[300px]"
                                                                        style={{
                                                                            backgroundColor: theme.background,
                                                                            borderColor: theme.text + "22",
                                                                            color: theme.text,
                                                                        }}
                                                                    >
                                                                        {availableServices.map((service) => (
                                                                            <SelectItem key={service.slug} value={service.slug}>
                                                                                <div className="flex items-center gap-2">
                                                                                    <span className="truncate">{service.title}</span>
                                                                                </div>
                                                                            </SelectItem>
                                                                        ))}
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>

                                                {/* Project Requirements */}
                                                <FormField
                                                    control={form.control}
                                                    name="requirements"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                                                                Project Requirements
                                                                <span className="text-xs font-normal opacity-70 ml-1" style={{ color: theme.subtext }}>
                                                                    (Optional)
                                                                </span>
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Textarea
                                                                    {...field}
                                                                    placeholder="Describe your goals, timeline, references, or any specific requirements"
                                                                    className="min-h-[100px] resize-none"
                                                                    style={{
                                                                        borderColor: theme.text + "22",
                                                                        color: theme.text,
                                                                        background: `${theme.cardBg}80`,
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {/* Package Selection */}
                                                <FormField
                                                    control={form.control}
                                                    name="package"
                                                    render={({ field }) => (
                                                        <FormItem className="space-y-3">
                                                            <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                                                                Select Package
                                                            </FormLabel>

                                                            {loadingService ? (
                                                                <div className="flex items-center gap-2 text-sm text-muted-foreground p-4">
                                                                    <Loader2 className="h-4 w-4 animate-spin" />
                                                                    Loading packages...
                                                                </div>
                                                            ) : !selectedServiceSlug ? (
                                                                <div
                                                                    className="text-sm p-4 border rounded-lg border-dashed text-center"
                                                                    style={{ borderColor: theme.text + "22", color: theme.subtext }}
                                                                >
                                                                    Please select a service to view available packages.
                                                                </div>
                                                            ) : pricingSection?.plans?.length ? (
                                                                <FormControl>
                                                                    <RadioGroup
                                                                        onValueChange={field.onChange}
                                                                        value={field.value}
                                                                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
                                                                    >
                                                                        {pricingSection.plans.map((plan: { name: string; price: string; description: string }) => {
                                                                            const isSelected = field.value === plan.name;
                                                                            const displayPrice = formatPriceToK(plan.price);

                                                                            return (
                                                                                <FormItem key={plan.name} className="h-full">
                                                                                    <FormControl>
                                                                                        <div className="relative h-full">
                                                                                            <RadioGroupItem
                                                                                                value={plan.name}
                                                                                                id={`pkg-${plan.name}`}
                                                                                                className="peer sr-only"
                                                                                            />
                                                                                            <Label
                                                                                                htmlFor={`pkg-${plan.name}`}
                                                                                                className="flex flex-col h-full items-center justify-center text-center p-4 sm:p-5 rounded-xl border cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                                                                                                style={{
                                                                                                    borderColor: isSelected
                                                                                                        ? theme.accents.a
                                                                                                        : theme.text + "30",
                                                                                                    backgroundColor: isSelected
                                                                                                        ? theme.accents.a + "0F"
                                                                                                        : theme.background + "40",
                                                                                                }}
                                                                                            >
                                                                                                <span
                                                                                                    className="text-xs font-bold uppercase tracking-widest mb-3 font-satoshi truncate w-full"
                                                                                                    style={{
                                                                                                        color: isSelected
                                                                                                            ? theme.accents.a
                                                                                                            : theme.subtext,
                                                                                                    }}
                                                                                                >
                                                                                                    {plan.name}
                                                                                                </span>

                                                                                                <span
                                                                                                    className="text-2xl sm:text-3xl font-extrabold font-cabinet mb-3 tracking-tight"
                                                                                                    style={{ color: theme.text }}
                                                                                                >
                                                                                                    {displayPrice}
                                                                                                </span>

                                                                                                <p
                                                                                                    className="text-xs font-medium leading-relaxed opacity-80 line-clamp-3"
                                                                                                    style={{ color: theme.subtext }}
                                                                                                >
                                                                                                    {plan.description}
                                                                                                </p>
                                                                                            </Label>
                                                                                        </div>
                                                                                    </FormControl>
                                                                                </FormItem>
                                                                            );
                                                                        })}
                                                                    </RadioGroup>
                                                                </FormControl>
                                                            ) : (
                                                                <div
                                                                    className="text-sm p-4 border rounded-lg border-dashed text-center"
                                                                    style={{ borderColor: theme.text + "22", color: theme.subtext }}
                                                                >
                                                                    No packages available for this service.
                                                                </div>
                                                            )}
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* Personal & Contact Details Card */}
                                    <div className="relative w-full rounded-xl">

                                        <RandomGradientGlow colorA={theme.accents.a} colorB={theme.accents.b} />
                                        <Card style={{
                                            background: theme.cardBg,
                                            border: `1px solid ${theme.text}22`,
                                            color: theme.text,
                                        }}>
                                            <CardHeader className="pb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-lg bg-primary/10">
                                                        <Check className="h-5 w-5" style={{ color: theme.accents.a }} />
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <CardTitle className="font-satoshi text-lg">Personal & Contact Details</CardTitle>
                                                        <CardDescription className="font-cabinet text-sm" style={{ color: theme.subtext }}>
                                                            How can we reach you?
                                                        </CardDescription>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-6 pt-2">
                                                <div className="grid gap-4 md:grid-cols-2">
                                                    <FormField
                                                        control={form.control}
                                                        name="name"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                                                                    Full Name
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        placeholder="John Doe"
                                                                        {...field}
                                                                        className="h-11"
                                                                        style={{
                                                                            border: `1px solid ${theme.text}22`,
                                                                            background: `${theme.cardBg}80`,
                                                                        }}
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="email"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                                                                    Email Address
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        placeholder="john@example.com"
                                                                        type="email"
                                                                        {...field}
                                                                        className="h-11"
                                                                        style={{
                                                                            border: `1px solid ${theme.text}22`,
                                                                            background: `${theme.cardBg}80`,
                                                                        }}
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="country"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                                                                    Country
                                                                </FormLabel>
                                                                <Select
                                                                    onValueChange={field.onChange}
                                                                    defaultValue={field.value}
                                                                >
                                                                    <FormControl>
                                                                        <SelectTrigger
                                                                            className="h-11 w-full"
                                                                            style={{
                                                                                border: `1px solid ${theme.text}22`,
                                                                                background: `${theme.cardBg}80`,
                                                                            }}
                                                                        >
                                                                            <SelectValue placeholder="Select your country" />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent
                                                                        className="max-h-[300px]"
                                                                        style={{
                                                                            backgroundColor: theme.background,
                                                                            borderColor: theme.text + "22",
                                                                            color: theme.text,
                                                                        }}
                                                                    >
                                                                        {COUNTRIES.map((country) => (
                                                                            <SelectItem key={country.value} value={country.value}>
                                                                                <div className="flex items-center gap-2">
                                                                                    <span>{country.label}</span>
                                                                                </div>
                                                                            </SelectItem>
                                                                        ))}
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="phone"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                                                                    Phone Number
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        placeholder="123 456 7890"
                                                                        type="tel"
                                                                        {...field}
                                                                        className="h-11"
                                                                        style={{
                                                                            border: `1px solid ${theme.text}22`,
                                                                            background: `${theme.cardBg}80`,
                                                                        }}
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>

                                                <div className="h-px w-full" style={{ backgroundColor: theme.text + "22" }} />

                                                <FormField
                                                    control={form.control}
                                                    name="contactMethod"
                                                    render={({ field }) => (
                                                        <FormItem className="space-y-3">
                                                            <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                                                                Preferred Contact Method
                                                            </FormLabel>
                                                            <FormControl>
                                                                <RadioGroup
                                                                    onValueChange={field.onChange}
                                                                    value={field.value}
                                                                    className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6"
                                                                >
                                                                    <div className="flex items-center space-x-2">
                                                                        <RadioGroupItem
                                                                            value="whatsapp"
                                                                            id="whatsapp"
                                                                            style={{
                                                                                '--primary': theme.accents.a,
                                                                                borderColor: theme.text + "44"
                                                                            } as React.CSSProperties}
                                                                        />
                                                                        <Label htmlFor="whatsapp" className="font-normal cursor-pointer text-sm">
                                                                            WhatsApp Call/Message
                                                                        </Label>
                                                                    </div>
                                                                    <div className="flex items-center space-x-2">
                                                                        <RadioGroupItem
                                                                            value="email"
                                                                            id="email"
                                                                            style={{
                                                                                '--primary': theme.accents.a,
                                                                                borderColor: theme.text + "44"
                                                                            } as React.CSSProperties}
                                                                        />
                                                                        <Label htmlFor="email" className="font-normal cursor-pointer text-sm">
                                                                            Email
                                                                        </Label>
                                                                    </div>
                                                                </RadioGroup>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {submissionError && (
                                                    <p className="text-sm font-medium text-destructive text-center pt-4">
                                                        {submissionError}
                                                    </p>
                                                )}
                                            </CardContent>
                                            <CardFooter className="pt-4 border-t" style={{ borderColor: theme.text + "11" }}>
                                                <Button
                                                    type="submit"
                                                    size="lg"
                                                    className="w-full relative overflow-hidden group h-12 sm:h-14 text-base font-bold transition-all duration-300 hover:scale-[1.02]"
                                                    style={{ backgroundColor: theme.accents.a, color: theme.primary }}
                                                    disabled={isSubmitting || !form.formState.isValid}
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                            Sending Inquiry...
                                                        </>
                                                    ) : (
                                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                                            Request a Proposal
                                                            <ArrowRight size={18} />
                                                        </span>
                                                    )}
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </form>
                            </Form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}