"use client";

import { useEffect, useState, useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, User, Briefcase, Phone, Star, FolderGit2, Check, Mail, Loader2, Info } from "lucide-react";
import ProjectScroller from "../book-consultation-sections/ProjectScroller";
import { motion } from "framer-motion";

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
import GlowBeam from "../effects/GlowBeam";
import RandomGradientGlow from "../effects/RandomGradientGlow";
import { COUNTRIES } from "@/constants/countries";
import { Label } from "@/components/ui/label";

import { SERVICES_CONTENT } from "@/constants/services";
import AnimatedRotateButton from "../animated/AnimatedRotateButton";
import AnimateDownloadedSVG from "../animated/AnimateDownloadedSVG";
import { useSearchParams } from "next/navigation";
import { loadServiceBySlug } from "@/constants/services/loader";

const serviceFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    phone: z.string().min(10, "Phone number must be at least 10 digits."),
    country: z.string().min(1, "Please select a country."),
    email: z.email("Please enter a valid email address."),
    category: z.string().min(1, "Please select a category."),
    service: z.string().min(1, "Select a service."),
    package: z.string().min(1, "Select a package."),
    contactMethod: z.enum(["email", "whatsapp"]),
    requirements: z.string().optional(),
});

type ServiceFormValues = z.infer<typeof serviceFormSchema>;

export default function ServiceForm() {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];
    const form = useForm<ServiceFormValues>({
        resolver: zodResolver(serviceFormSchema),
        defaultValues: {
            name: "",
            phone: "",
            country: "",
            email: "",
            category: "",
            service: "",
            package: "",
            contactMethod: "whatsapp",
            requirements: "",

        },
    });
    const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
    const [hoveredFormSection, setHoveredFormSection] = useState<string | null>(null);

    const getFormSectionScale = (section: string) => {
        if (hoveredFormSection === null) return 1;
        return hoveredFormSection === section ? 1.02 : 0.98;
    };

    const formSectionTransition = {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
    };


    const [submittedData, setSubmittedData] = useState<ServiceFormValues | null>(null);
    const [serviceData, setServiceData] = useState<any | null>(null);
    const [loadingService, setLoadingService] = useState(false);

    const selectedCategorySlug = form.watch("category");
    const selectedServiceSlug = form.watch("service");

    const availableServices = useMemo(() => {
        console.log(SERVICES_CONTENT.categories.find((c) => c.slug === selectedCategorySlug)?.items || []);

        return SERVICES_CONTENT.categories.find((c) => c.slug === selectedCategorySlug)?.items || [];
    }, [selectedCategorySlug]);

    const searchParams = useSearchParams();
    const categoryFromUrl = searchParams.get("category");
    const serviceFromUrl = searchParams.get("service");

    // Initialize from URL
    const [isUrlPreselected, setIsUrlPreselected] = useState(false);

    useEffect(() => {
        if (categoryFromUrl && serviceFromUrl) {
            form.setValue("category", categoryFromUrl);
            form.setValue("service", serviceFromUrl);
            setIsUrlPreselected(true);
        }
    }, [categoryFromUrl, serviceFromUrl, form]);

    // Load dynamic service content
    useEffect(() => {
        if (selectedCategorySlug && selectedServiceSlug) {
            setLoadingService(true);
            loadServiceBySlug(selectedCategorySlug, selectedServiceSlug)
                .then((data) => {

                    setServiceData(data);
                    form.setValue("package", "");
                })
                .finally(() => setLoadingService(false));
        } else {
            setServiceData(null);
        }
    }, [selectedCategorySlug, selectedServiceSlug, form]);

    const pricingSection = serviceData?.sections.find((s: any) => s.type === "pricing")?.data;

    function onSubmit(data: ServiceFormValues) {
        console.log(data);
        setSubmittedData(data);
    }

    return (
        <div className="flex relative items-center justify-center min-h-[calc(100vh-4rem)] p-4"
        >
            <div
                className="absolute inset-0 pointer-events-none z-0 bg-black"
                // style={{
                //     backgroundImage: `url('/images/svg-images/svg-pattern-1.svg')`,
                //     backgroundSize: "cover",
                //     backgroundPosition: "center",
                //     backgroundRepeat: "no-repeat",
                //     filter: "brightness(0.45) saturate(0.8)",
                // }}
            />

            <div className="max-w-6xl w-full space-y-8 mt-40 z-10">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div
                        className="flex text-xs justify-center items-center gap-2 font-medium uppercase py-2 px-3 rounded-full "
                        style={{ color: theme.primary, }}
                    >
                        <Briefcase size={14} />
                        Service Inquiry
                    </div>
                    <div
                        className="text-lg md:text-xl lg:text-4xl font-bold font-cabinet leading-tight mb-2"
                        style={{ color: theme.text }}
                    >
                        <AnimatedLine text={serviceData?.title || "Get Your Service Started"} />
                    </div>
                    <div
                        className="text-sm md:text-base lg:text-lg font-medium items-center justify-center leading-tight mb-2"
                        style={{ color: theme.subtext }}
                    >
                        <AnimatedLine text="Fill in the details below to get a custom quote and start your project." />
                    </div>
                </div>

                <div className="grid grid-cols-1  gap-8">
                    {/* Left Column: Form Sections (Scrollable) */}
                    <div className="lg:col-span-2 space-y-8">
                        {submittedData ? (
                            <div className="relative w-full rounded-xl">
                                <GlowBeam color={theme.accents.a} />
                                <RandomGradientGlow colorA={theme.accents.a} colorB={theme.accents.b} />
                                <Card
                                    style={{
                                        background: theme.cardBg,
                                        border: `1px solid ${theme.text}22`,
                                        color: theme.text,
                                        minHeight: "400px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textAlign: "center",
                                    }}
                                >
                                    <CardContent className="space-y-6 pt-6 w-full max-w-lg">
                                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                            <AnimateDownloadedSVG src={BOOK_CONSULTATION_CONTENT.confirmationPage.icon} size={35} stroke={theme.primary} />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold mb-2">
                                                <AnimatedLine text={BOOK_CONSULTATION_CONTENT.confirmationPage.title} />
                                            </h2>
                                            <div className="text-sm opacity-80" style={{ color: theme.subtext }}>
                                                <AnimatedLine text={BOOK_CONSULTATION_CONTENT.confirmationPage.description} />
                                            </div>
                                        </div>

                                        <div className="bg-primary/5 p-6 rounded-lg space-y-3 text-left w-full border" style={{ borderColor: theme.text + "11" }}>
                                            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-70">Submission Details</h3>

                                            <div className="grid grid-cols-2 gap-2 text-sm">
                                                <span className="opacity-60">Name:</span>
                                                <span className="font-medium text-right">{submittedData.name}</span>

                                                <span className="opacity-60">Email:</span>
                                                <span className="font-medium text-right truncate">{submittedData.email}</span>

                                                <span className="opacity-60">Service:</span>
                                                <span className="font-medium text-right">{SERVICES_CONTENT.categories.find(c => c.slug === submittedData.category)?.items.find(i => i.slug === submittedData.service)?.title || submittedData.service}</span>

                                                <span className="opacity-60">Package:</span>
                                                <span className="font-medium text-right">{submittedData.package}</span>

                                                <span className="opacity-60">Contact:</span>
                                                <span className="font-medium text-right capitalize">{submittedData.contactMethod}</span>
                                            </div>
                                        </div>

                                        <p className="text-sm" style={{ color: theme.subtext }}>
                                            You will receive a confirmation email shortly.
                                        </p>

                                        <div className="pt-2">
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
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                                    {/* Card 1: Service & Package Selector */}
                                    <motion.div
                                        className="relative w-full rounded-xl"
                                        onHoverStart={() => setHoveredFormSection('service')}
                                        onHoverEnd={() => setHoveredFormSection(null)}
                                        animate={{
                                            scale: getFormSectionScale('service'),
                                            zIndex: hoveredFormSection === 'service' ? 10 : 1,
                                        }}
                                        transition={formSectionTransition}
                                    >
                                        <GlowBeam color={theme.accents.b} />
                                        <RandomGradientGlow colorA={theme.accents.b} colorB={theme.accents.a} />
                                        <Card style={{
                                            background: theme.cardBg,
                                            border: `1px solid ${theme.text}22`,
                                            color: theme.text,
                                        }}>
                                            <CardHeader >
                                                <div className="flex items-center gap-2">
                                                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                                                        <Briefcase className="h-5 w-5" style={{ color: theme.accents.a }} />
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <CardTitle className="font-satoshi">Service & Package</CardTitle>
                                                        <CardDescription className="font-cabinet" style={{ color: theme.subtext }}>
                                                            Select the service and package that best fits your needs.
                                                        </CardDescription>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-6">
                                                {isUrlPreselected ? (
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                        <div className="space-y-2">
                                                            <div className="text-sm font-semibold" style={{ color: theme.text }}>Category</div>
                                                            <div className="p-3 rounded-md border text-sm font-medium" style={{ borderColor: theme.text + "22", color: theme.text }}>
                                                                {SERVICES_CONTENT.categories.find(c => c.slug === categoryFromUrl)?.name || categoryFromUrl}
                                                            </div>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <div className="text-sm font-semibold" style={{ color: theme.text }}>Service</div>
                                                            <div className="p-3 rounded-md border text-sm font-medium" style={{ borderColor: theme.text + "22", color: theme.text }}>
                                                                {serviceData?.title || serviceFromUrl}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <FormField
                                                            control={form.control}
                                                            name="category"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Category</FormLabel>
                                                                    <Select
                                                                        onValueChange={(value) => {
                                                                            field.onChange(value);
                                                                            form.setValue("service", "");
                                                                            form.setValue("package", "");
                                                                        }}
                                                                        value={field.value}
                                                                    >
                                                                        <FormControl>
                                                                            <SelectTrigger className="w-full" style={{ border: `1px solid ${theme.text}22` }}>
                                                                                <SelectValue placeholder="Select a category" />
                                                                            </SelectTrigger>
                                                                        </FormControl>
                                                                        <SelectContent style={{
                                                                            backgroundColor: theme.background,
                                                                            borderColor: theme.text + "22",
                                                                            color: theme.text,
                                                                            "--accent": theme.primary + "15",
                                                                            "--accent-foreground": theme.primary,
                                                                        } as React.CSSProperties}>
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
                                                                    <FormLabel>Service</FormLabel>
                                                                    <Select
                                                                        onValueChange={field.onChange}
                                                                        value={field.value}
                                                                        disabled={!selectedCategorySlug}
                                                                    >
                                                                        <FormControl>
                                                                            <SelectTrigger className="w-full" style={{ border: `1px solid ${theme.text}22` }}>
                                                                                <SelectValue placeholder={selectedCategorySlug ? "Select a service" : "Select a category first"} />
                                                                            </SelectTrigger>
                                                                        </FormControl>
                                                                        <SelectContent style={{
                                                                            backgroundColor: theme.background,
                                                                            borderColor: theme.text + "22",
                                                                            color: theme.text,
                                                                            "--accent": theme.primary + "15",
                                                                            "--accent-foreground": theme.primary,
                                                                        } as React.CSSProperties}>
                                                                            {availableServices.map((service) => (
                                                                                <SelectItem key={service.slug} value={service.slug}>
                                                                                    {service.title}
                                                                                </SelectItem>
                                                                            ))}
                                                                        </SelectContent>
                                                                    </Select>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>
                                                )}
                                                    <FormField
                                                    control={form.control}
                                                    name="requirements"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                        <FormLabel>
                                                            Project Requirements{" "}
                                                            <span
                                                            className="text-xs font-normal opacity-70"
                                                            style={{ color: theme.subtext }}
                                                            >
                                                            (Optional)
                                                            </span>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <textarea
                                                            {...field}
                                                            placeholder="Describe your goals, timeline, references, or any specific requirements"
                                                            className="min-h-[120px] w-full rounded-md px-3 py-2 text-xs font-normal opacity-70 border"
                                                            style={{
                                                                
                                                                borderColor: theme.text + "22",
                                                                color: theme.text,
                                                            }}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                        </FormItem>
                                                    )}
                                                    />

                                                {/* Packages Section */}
                                                <FormField
                                                    control={form.control}
                                                    name="package"
                                                    render={({ field }) => (
                                                        <FormItem className="space-y-3">
                                                            <FormLabel>Select Package</FormLabel>

                                                            {loadingService ? (
                                                                <div className="flex items-center gap-2 text-sm text-muted-foreground p-4">
                                                                    <Loader2 className="h-4 w-4 animate-spin" />
                                                                    Loading packages...
                                                                </div>
                                                            ) : !selectedServiceSlug ? (
                                                                <div
                                                                    className="text-sm p-4 border rounded-md border-dashed"
                                                                    style={{ borderColor: theme.text + "22", color: theme.subtext }}
                                                                >
                                                                    Please select a service to view available packages.
                                                                </div>
                                                            ) : pricingSection ? (
                                                                <FormControl>
                                                                    <RadioGroup
                                                                        onValueChange={field.onChange}
                                                                        value={field.value}
                                                                        className="flex flex-col md:flex-row gap-2"
                                                                    >
                                                                        {pricingSection.plans.map((plan: any) => {
                                                                            const isSelected = field.value === plan.name;
                                                                            const isHovered = hoveredPlan === plan.name;

                                                                            const scale =
                                                                                hoveredPlan === null
                                                                                    ? isSelected
                                                                                        ? 1.04
                                                                                        : 1
                                                                                    : isHovered
                                                                                        ? 1.06
                                                                                        : 0.94;


                                                                            return (
                                                                                <FormItem key={plan.name} className="flex-1">
                                                                                    <FormControl>
                                                                                        <motion.div
                                                                                            layout
                                                                                            onHoverStart={() => setHoveredPlan(plan.name)}
                                                                                            onHoverEnd={() => setHoveredPlan(null)}
                                                                                            animate={{
                                                                                                scale,
                                                                                                zIndex: isHovered || isSelected ? 20 : 1,
                                                                                            }}
                                                                                            transition={{
                                                                                                type: "spring",
                                                                                                stiffness: 140,
                                                                                                damping: 26,
                                                                                                mass: 0.8,
                                                                                            }}
                                                                                            className="relative h-full"
                                                                                        >
                                                                                            <RadioGroupItem
                                                                                                value={plan.name}
                                                                                                id={`pkg-${plan.name}`}
                                                                                                className="peer sr-only"
                                                                                            />

                                                                                            <Label
                                                                                                htmlFor={`pkg-${plan.name}`}
                                                                                                className="
                                                                                                    flex flex-col h-full
                                                                                                    items-center justify-center text-center
                                                                                                    px-6 py-8
                                                                                                    rounded-2xl
                                                                                                    border cursor-pointer
                                                                                                    transition-colors
                                                                                                "
                                                                                                style={{
                                                                                                    borderColor: isSelected
                                                                                                        ? theme.accents.a
                                                                                                        : theme.text + "30",
                                                                                                    backgroundColor: isSelected
                                                                                                        ? theme.accents.a + "0F"
                                                                                                        : theme.background + "40",
                                                                                                    boxShadow:
                                                                                                        isHovered || isSelected
                                                                                                            ? `0 24px 50px -24px ${theme.accents.a}40`
                                                                                                            : `0 10px 30px -15px ${theme.text}10`,
                                                                                                }}
                                                                                            >
                                                                                                {/* PLAN NAME */}
                                                                                                <span
                                                                                                    className="text-sm font-bold uppercase tracking-wider mb-4 font-satoshi"
                                                                                                    style={{
                                                                                                        color: isSelected
                                                                                                            ? theme.accents.a
                                                                                                            : theme.subtext,
                                                                                                    }}
                                                                                                >
                                                                                                    {plan.name}
                                                                                                </span>

                                                                                                {/* PRICE */}
                                                                                                <span
                                                                                                    className="text-4xl font-extrabold font-cabinet mb-5 tracking-tight"
                                                                                                    style={{ color: theme.text }}
                                                                                                >
                                                                                                    {plan.price}
                                                                                                </span>

                                                                                                {/* DESCRIPTION */}
                                                                                                <p
                                                                                                    className="text-sm font-medium leading-relaxed max-w-[240px] opacity-90"
                                                                                                    style={{ color: theme.subtext }}
                                                                                                >
                                                                                                    {plan.description}
                                                                                                </p>
                                                                                            </Label>
                                                                                        </motion.div>

                                                                                    </FormControl>
                                                                                </FormItem>
                                                                            );
                                                                        })}
                                                                    </RadioGroup>
                                                                </FormControl>
                                                            ) : (
                                                                <div
                                                                    className="text-sm p-4 border rounded-md border-dashed"
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
                                    </motion.div>

                                    {/* Card 2: Personal Details & Contact (Merged) */}
                                    <motion.div
                                        className="relative w-full rounded-xl"
                                        onHoverStart={() => setHoveredFormSection('personal')}
                                        onHoverEnd={() => setHoveredFormSection(null)}
                                        animate={{
                                            scale: getFormSectionScale('personal'),
                                            zIndex: hoveredFormSection === 'personal' ? 10 : 1,
                                        }}
                                        transition={formSectionTransition}
                                    >
                                        <GlowBeam color={theme.accents.a} />
                                        <RandomGradientGlow colorA={theme.accents.a} colorB={theme.accents.b} />
                                        <Card
                                            style={{
                                                background: theme.cardBg,
                                                border: `1px solid ${theme.text}22`,
                                                color: theme.text,
                                            }}
                                        >
                                            <CardHeader>
                                                <div className="flex items-center gap-2">
                                                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                                                        <User className="h-5 w-5" style={{ color: theme.accents.a }} />
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <CardTitle className="font-satoshi">Personal & Contact Details</CardTitle>
                                                        <CardDescription className="font-cabinet" style={{ color: theme.subtext }}>
                                                            How can we reach you?
                                                        </CardDescription>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-8">
                                                {/* Personal Fields Grid */}
                                                <div className="grid gap-6 md:grid-cols-2">
                                                    <FormField
                                                        control={form.control}
                                                        name="name"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="required">Full Name</FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        placeholder="John Doe"
                                                                        {...field}
                                                                        style={{ border: `1px solid ${theme.text}22`, }}
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
                                                                <FormLabel>Email Address</FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        placeholder="john@example.com"
                                                                        type="email"
                                                                        {...field}
                                                                        style={{ border: `1px solid ${theme.text}22`, }}
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
                                                                <FormLabel>Country</FormLabel>
                                                                <Select
                                                                    onValueChange={field.onChange}
                                                                    defaultValue={field.value}
                                                                >
                                                                    <FormControl>
                                                                        <SelectTrigger className="w-full" style={{ border: `1px solid ${theme.text}22` }}>
                                                                            <SelectValue placeholder="Select your country" />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent className="max-h-[300px]" style={{
                                                                        backgroundColor: theme.background,
                                                                        borderColor: theme.text + "22",
                                                                        color: theme.text,
                                                                        "--accent": theme.primary + "15",
                                                                        "--accent-foreground": theme.primary,
                                                                    } as React.CSSProperties}>
                                                                        {COUNTRIES.map((country) => (
                                                                            <SelectItem
                                                                                key={country.value}
                                                                                value={country.value}
                                                                            >
                                                                                {country.label}
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
                                                                <FormLabel>Phone Number</FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        placeholder="123 456 7890"
                                                                        type="tel"
                                                                        {...field}
                                                                        style={{ border: `1px solid ${theme.text}22`, }}
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>

                                                {/* Divider */}
                                                <div className="h-px w-full" style={{ backgroundColor: theme.text + "22" }} />

                                                {/* Contact Method */}
                                                <FormField
                                                    control={form.control}
                                                    name="contactMethod"
                                                    render={({ field }) => (
                                                        <FormItem className="space-y-3">
                                                            <FormLabel className="text-base font-semibold">Preferred Contact Method</FormLabel>
                                                            <FormControl>
                                                                <RadioGroup
                                                                    onValueChange={field.onChange}
                                                                    value={field.value}
                                                                    className="flex flex-col space-y-1"
                                                                >
                                                                    <div className="flex items-center space-x-2">
                                                                        <RadioGroupItem
                                                                            value="whatsapp"
                                                                            id="whatsapp"
                                                                            style={{ "--primary": theme.accents.a, borderColor: theme.text + "44" } as React.CSSProperties}
                                                                        />
                                                                        <Label htmlFor="whatsapp" className="font-normal cursor-pointer">
                                                                            WhatsApp Call/Message
                                                                        </Label>
                                                                    </div>
                                                                    <div className="flex items-center space-x-2">
                                                                        <RadioGroupItem
                                                                            value="email"
                                                                            id="email"
                                                                            style={{ "--primary": theme.accents.a, borderColor: theme.text + "44" } as React.CSSProperties}
                                                                        />
                                                                        <Label htmlFor="email" className="font-normal cursor-pointer">
                                                                            Email
                                                                        </Label>
                                                                    </div>
                                                                </RadioGroup>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                <Button type="submit" size="lg" className="w-full" style={{ backgroundColor: theme.accents.a, color: theme.primary }}>
                                                    Request a Proposal
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </motion.div>



                                    {/* Info Card: Why Choose Us, Projects, Contact */}
                                    <div className="pt-4">
                                        <div className="relative w-full rounded-xl">
                                            {/* <GlowBeam color={theme.accents.b} /> */}
                                            <Card style={{
                                                background: theme.cardBg,
                                                border: `1px solid ${theme.text}22`,
                                                color: theme.text,
                                            }}>
                                                <CardContent className="p-6">
                                                    <div
                                                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                                                        style={{ borderColor: theme.text }}
                                                    >

                                                        {/* Why Choose Us */}
                                                        <div className="space-y-4 md:pr-4 md:border-r" style={{ borderColor: theme.text + "40" }}>
                                                            <div className="flex items-center gap-2">
                                                                <div className="p-2 rounded-md bg-primary/10 text-primary">
                                                                    <Star className="h-5 w-5" style={{ color: theme.accents.b }} />
                                                                </div>
                                                                <div>
                                                                    <CardTitle className="text-base font-satoshi">
                                                                        <AnimatedLine text="Why Choose Us?" />
                                                                    </CardTitle>
                                                                </div>
                                                            </div>
                                                            <div className="text-sm leading-relaxed font-bold font-cabinet" style={{ color: theme.subtext }}>
                                                                <AnimatedLine text={BOOK_CONSULTATION_CONTENT.whyChooseUs.description} />
                                                            </div>
                                                        </div>

                                                        {/* Our Projects */}
                                                        <div className="space-y-4 pt-4 md:pt-0 md:px-4 md:border-r" style={{ borderColor: theme.text + "40" }}>
                                                            <div className="flex items-center gap-2">
                                                                <div className="p-2 rounded-md bg-primary/10 text-primary">
                                                                    <FolderGit2 className="h-5 w-5" style={{ color: theme.accents.a }} />
                                                                </div>
                                                                <div>
                                                                    <CardTitle className="text-base">
                                                                        <AnimatedLine text={BOOK_CONSULTATION_CONTENT.projects.title} />
                                                                    </CardTitle>
                                                                </div>
                                                            </div>
                                                            <div className="text-sm leading-relaxed font-bold font-cabinet" style={{ color: theme.subtext }}>
                                                                <AnimatedLine text={BOOK_CONSULTATION_CONTENT.projects.description} />
                                                            </div>
                                                            <div className="relative h-20 overflow-hidden mask-linear-gradient">
                                                                <ProjectScroller projects={BOOK_CONSULTATION_CONTENT.projects.list} />
                                                            </div>
                                                        </div>

                                                        {/* Contact Info */}
                                                        <div className="space-y-4 pt-4 md:pt-0 md:pl-4">
                                                            <div className="flex items-center gap-2">
                                                                <div className="p-2 rounded-md bg-primary/10 text-primary">
                                                                    <Phone className="h-5 w-5" style={{ color: theme.accents.b }} />
                                                                </div>
                                                                <div>
                                                                    <CardTitle className="text-base">Contact Us</CardTitle>
                                                                </div>
                                                            </div>
                                                            <div className="space-y-3">
                                                                <div className="flex flex-row items-start gap-3">
                                                                    <div className="min-w-0">
                                                                        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: theme.text }}>Email</p>
                                                                        {BOOK_CONSULTATION_CONTENT.contact.emails.slice(0, 1).map((email, idx) => (
                                                                            <a
                                                                                key={idx}
                                                                                href={`mailto:${email}`}
                                                                                className="block text-base hover:underline opacity-90 hover:opacity-80 transition-opacity truncate font-cabinet"
                                                                                style={{ color: theme.text }}
                                                                            >
                                                                                {email}
                                                                            </a>
                                                                        ))}
                                                                    </div>
                                                                </div>

                                                                <div className="flex flex-row items-start gap-3">
                                                                    <div className="min-w-0">
                                                                        <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: theme.text }}>Phone</p>
                                                                        {BOOK_CONSULTATION_CONTENT.contact.phones.slice(0, 1).map((phone, idx) => (
                                                                            <a
                                                                                key={idx}
                                                                                href={`tel:${phone.replace(/\s+/g, '')}`}
                                                                                className="block text-base hover:underline opacity-90 hover:opacity-80 transition-opacity truncate font-cabinet"
                                                                                style={{ color: theme.text }}
                                                                            >
                                                                                {phone}
                                                                            </a>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </form>
                            </Form>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
}
