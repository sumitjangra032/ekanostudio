"use client"

import {useEffect,useState,useMemo} from "react"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, User, Briefcase, Phone, Star, FolderGit2, Check, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
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
    FormDescription,
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
import { IoCallOutline } from "react-icons/io5";
import GlowBeam from "../effects/GlowBeam";
import RandomGradientGlow from "../effects/RandomGradientGlow";
import { COUNTRIES } from "@/constants/countries";
import { Label } from "@/components/ui/label";
import ProjectScroller from "./ProjectScroller";

import { SERVICES_CONTENT } from "@/constants/services";
import AnimatedRotateButton from "../animated/AnimatedRotateButton";
import AnimateDownloadedSVG from "../animated/AnimateDownloadedSVG";
import { useSearchParams } from "next/navigation";

const consultationFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    phone: z.string().min(10, "Phone number must be at least 10 digits."),
    country: z.string().min(1, "Please select a country."),
    callDate: z.date(),
    callTime: z.string(),
    email: z.email("Please enter a valid email address."),
    category: z.string().min(1, "Please select a category."),
    service: z.string().min(1, "Select a service."),
    contactMethod: z.enum(["whatsapp", "email"]),
});

type ConsultationFormValues = z.infer<typeof consultationFormSchema>;

// Generate 12-hour format options
const HOURS = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
const MINUTES = ["00", "15", "30", "45"];
const PERIODS = ["AM", "PM"];

export default function BookConsultationForm() {

    const searchParams = useSearchParams();
    const categoryFromUrl = searchParams.get("category");
    const serviceFromUrl = searchParams.get("service");
    
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    const [submittedData, setSubmittedData] = useState<ConsultationFormValues | null>(null);

    const form = useForm<ConsultationFormValues>({
        resolver: zodResolver(consultationFormSchema),
        defaultValues: {
            name: "",
            phone: "",
            country: "",
            email: "",
            category: "",
            service: "",
            callDate: undefined,
            callTime: "09:00 AM", 
            contactMethod: "whatsapp",
        },
    });    

    const selectedCategorySlug = form.watch("category");
    const availableServices = useMemo(() => {
        return SERVICES_CONTENT.categories.find((c) => c.slug === selectedCategorySlug)?.items || [];
    }, [selectedCategorySlug]);
    

    useEffect(() => {
        if (categoryFromUrl) {
            form.setValue("category", categoryFromUrl);
        }

        if (serviceFromUrl) {
            form.setValue("service", serviceFromUrl);
        }
    }, [categoryFromUrl, serviceFromUrl, form]);

    function onSubmit(data: ConsultationFormValues) {
        console.log(data);
        setSubmittedData(data);
    }

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-4" style={{
            backgroundColor: theme.background,
            color: theme.text,
        }}>
            <div className="max-w-7xl w-full space-y-8 mt-40">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div
                        className="flex text-xs justify-center items-center gap-2 font-medium uppercase py-2 px-3 rounded-full "
                        style={{ color: theme.primary, }}
                    >
                        <IoCallOutline size={14} />
                        Contact us
                    </div>
                    <div
                        className="text-lg md:text-xl lg:text-4xl font-bold leading-tight mb-2"
                        style={{ color: theme.text }}
                    >
                        <AnimatedLine text={BOOK_CONSULTATION_CONTENT.title} />
                    </div>
                    <div
                        className="text-sm md:text-base lg:text-lg font-medium items-center justify-center leading-tight mb-2"
                        style={{ color: theme.subtext }}
                    >
                        <AnimatedLine text={BOOK_CONSULTATION_CONTENT.description} />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

                                                <span className="opacity-60">Category:</span>
                                                <span className="font-medium text-right">{SERVICES_CONTENT.categories.find(c => c.slug === submittedData.category)?.name || submittedData.category}</span>

                                                <span className="opacity-60">Service:</span>
                                                <span className="font-medium text-right">{SERVICES_CONTENT.categories.find(c => c.slug === submittedData.category)?.items.find(i => i.slug === submittedData.service)?.title || submittedData.service}</span>

                                                <span className="opacity-60">Date:</span>
                                                <span className="font-medium text-right">{format(submittedData.callDate, "PPP")}</span>

                                                <span className="opacity-60">Time:</span>
                                                <span className="font-medium text-right">{submittedData.callTime}</span>

                                                <span className="opacity-60">Contact:</span>
                                                <span className="font-medium text-right capitalize">{submittedData.contactMethod}</span>
                                            </div>
                                        </div>

                                        <p className="text-sm" style={{ color: theme.subtext }}>
                                            You will receive a confirmation email and text shortly.
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

                                    {/* Card 1: Personal Details */}
                                    <div className="relative w-full rounded-xl">
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
                                                        <CardTitle>Personal Details</CardTitle>
                                                        <CardDescription>
                                                            Tell us a bit about yourself so we can get in touch.
                                                        </CardDescription>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="grid gap-6 md:grid-cols-2">
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

                                                {/* Date Picker */}
                                                <FormField
                                                    control={form.control}
                                                    name="callDate"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Preferred Date</FormLabel>
                                                            <FormControl>
                                                                <Popover>
                                                                    <PopoverTrigger asChild>
                                                                        <Button
                                                                            variant="outline"
                                                                            className="w-full justify-start text-left font-normal px-3 hover:bg-primary/10"
                                                                            style={{
                                                                                border: `1px solid ${theme.text}22`,
                                                                                backgroundColor: theme.background,
                                                                                color: theme.text,
                                                                            }}>
                                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                                            {field.value ? format(field.value, "PPP") : "Pick a date"}
                                                                        </Button>
                                                                    </PopoverTrigger>
                                                                    <PopoverContent className="w-auto p-0">
                                                                        <Calendar
                                                                            mode="single"
                                                                            selected={field.value}
                                                                            onSelect={(date) => field.onChange(date)}
                                                                            style={{
                                                                                background: theme.background,
                                                                                color: theme.text,
                                                                                border: `1px solid ${theme.text}22`,
                                                                                // Using CSS variables to override shadcn/tailwind defaults for Calendar
                                                                                "--accent": theme.accents.a,
                                                                                "--accent-foreground": theme.background,
                                                                                "--muted": theme.text + "44",
                                                                                "--muted-foreground": theme.subtext,
                                                                            } as React.CSSProperties}
                                                                            initialFocus
                                                                        />
                                                                    </PopoverContent>
                                                                </Popover>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {/* Time Selector (12h Format) */}
                                                <FormField
                                                    control={form.control}
                                                    name="callTime"
                                                    render={({ field }) => {
                                                        const [timePart, periodPart] = (field.value || "").split(" ");
                                                        const [hourPart, minutePart] = (timePart || "").split(":");

                                                        const handleTimeChange = (type: "hour" | "minute" | "period", value: string) => {
                                                            const currentH = hourPart || "12";
                                                            const currentM = minutePart || "00";
                                                            const currentP = periodPart || "PM";

                                                            let newTime = "";
                                                            if (type === "hour") newTime = `${value}:${currentM} ${currentP}`;
                                                            else if (type === "minute") newTime = `${currentH}:${value} ${currentP}`;
                                                            else if (type === "period") newTime = `${currentH}:${currentM} ${value}`;

                                                            field.onChange(newTime);
                                                        };

                                                        return (
                                                            <FormItem>
                                                                <FormLabel>Preferred Time</FormLabel>
                                                                <div className="flex gap-2">
                                                                    {/* Hour */}
                                                                    <Select
                                                                        value={hourPart}
                                                                        onValueChange={(val) => handleTimeChange("hour", val)}
                                                                    >
                                                                        <FormControl>
                                                                            <SelectTrigger className="flex-1" style={{ border: `1px solid ${theme.text}22` }}>
                                                                                <SelectValue placeholder="HH" />
                                                                            </SelectTrigger>
                                                                        </FormControl>
                                                                        <SelectContent style={{ backgroundColor: theme.background, borderColor: theme.text + "22", color: theme.text }}>
                                                                            {HOURS.map((h) => (
                                                                                <SelectItem key={h} value={h}>{h}</SelectItem>
                                                                            ))}
                                                                        </SelectContent>
                                                                    </Select>

                                                                    {/* Minute */}
                                                                    <Select
                                                                        value={minutePart}
                                                                        onValueChange={(val) => handleTimeChange("minute", val)}
                                                                    >
                                                                        <FormControl>
                                                                            <SelectTrigger className="flex-1" style={{ border: `1px solid ${theme.text}22` }}>
                                                                                <SelectValue placeholder="MM" />
                                                                            </SelectTrigger>
                                                                        </FormControl>
                                                                        <SelectContent style={{ backgroundColor: theme.background, borderColor: theme.text + "22", color: theme.text }}>
                                                                            {MINUTES.map((m) => (
                                                                                <SelectItem key={m} value={m}>{m}</SelectItem>
                                                                            ))}
                                                                        </SelectContent>
                                                                    </Select>

                                                                    {/* Period */}
                                                                    <Select
                                                                        value={periodPart}
                                                                        onValueChange={(val) => handleTimeChange("period", val)}
                                                                    >
                                                                        <FormControl>
                                                                            <SelectTrigger className="w-[80px]" style={{ border: `1px solid ${theme.text}22` }}>
                                                                                <SelectValue placeholder="AM/PM" />
                                                                            </SelectTrigger>
                                                                        </FormControl>
                                                                        <SelectContent style={{ backgroundColor: theme.background, borderColor: theme.text + "22", color: theme.text }}>
                                                                            {PERIODS.map((p) => (
                                                                                <SelectItem key={p} value={p}>{p}</SelectItem>
                                                                            ))}
                                                                        </SelectContent>
                                                                    </Select>
                                                                </div>
                                                                <FormMessage />
                                                            </FormItem>
                                                        );
                                                    }}
                                                />

                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* Card 2: Service Selector */}
                                    <div className="relative w-full rounded-xl">
                                        <GlowBeam color={theme.accents.a} />
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
                                                        <CardTitle>Service Interest</CardTitle>
                                                        <CardDescription>
                                                            What kind of services are you looking for?
                                                        </CardDescription>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
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
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* Card 3: Contact Preferences */}
                                    <div className="relative w-full rounded-xl">
                                        <GlowBeam color={theme.accents.a} />
                                        <RandomGradientGlow colorA={theme.accents.a} colorB={theme.accents.b} />
                                        <Card style={{
                                            background: theme.cardBg,
                                            border: `1px solid ${theme.text}22`,
                                            color: theme.text,
                                        }}>
                                            <CardHeader>
                                                <div className="flex items-center gap-2">
                                                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                                                        <Phone className="h-5 w-5" style={{ color: theme.accents.a }} />
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <CardTitle>Contact Preferences</CardTitle>
                                                        <CardDescription>
                                                            How would you like us to contact you?
                                                        </CardDescription>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <FormField
                                                    control={form.control}
                                                    name="contactMethod"
                                                    render={({ field }) => (
                                                        <FormItem className="space-y-3">
                                                            <FormLabel>Preferred Method</FormLabel>
                                                            <FormControl>
                                                                <RadioGroup
                                                                    onValueChange={field.onChange}
                                                                    defaultValue={field.value}
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
                                                                            value="phone"
                                                                            id="phone"
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
                                            </CardContent>
                                            <CardFooter>
                                                <Button type="submit" size="lg" className="w-full" style={{ backgroundColor: theme.accents.a, color: theme.primary }}>
                                                    Book Consultation
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </form>
                            </Form>
                        )}
                    </div>

                    <div className="lg:col-span-1 hidden lg:block">
                        <div className="sticky top-24 space-y-8">

                            {/* Card 4: Why Choose Us */}
                            <div className="relative w-full rounded-xl">
                                <GlowBeam color={theme.accents.b} />
                                <Card style={{
                                    background: theme.cardBg,
                                    border: `1px solid ${theme.text}22`,
                                    color: theme.text,
                                }}>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 rounded-md bg-primary/10 text-primary">
                                                <Star className="h-5 w-5" style={{ color: theme.accents.b }} />
                                            </div>
                                            <div>
                                                <CardTitle>
                                                    <AnimatedLine text={BOOK_CONSULTATION_CONTENT.whyChooseUs.title} />
                                                </CardTitle>
                                            </div>
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            <AnimatedLine text={BOOK_CONSULTATION_CONTENT.whyChooseUs.description} />
                                        </div>
                                        <ul className="space-y-3">
                                            {BOOK_CONSULTATION_CONTENT.whyChooseUs.list.slice(0, 3).map((item, index) => (
                                                <li key={index} className="flex gap-2 items-start text-sm">
                                                    <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: theme.accents.b }} />
                                                    <span style={{ color: theme.subtext }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Card 5: Our Projects */}
                            <div className="relative w-full rounded-xl">
                                <GlowBeam color={theme.accents.b} />
                                <Card style={{
                                    background: theme.cardBg,
                                    border: `1px solid ${theme.text}22`,
                                    color: theme.text,
                                }}>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 rounded-md bg-primary/10 text-primary">
                                                <FolderGit2 className="h-5 w-5" style={{ color: theme.accents.b }} />
                                            </div>
                                            <div>
                                                <CardTitle>
                                                    <AnimatedLine text={BOOK_CONSULTATION_CONTENT.projects.title} />
                                                </CardTitle>
                                            </div>
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            <AnimatedLine text={BOOK_CONSULTATION_CONTENT.projects.description} />
                                        </div>
                                        <ProjectScroller projects={BOOK_CONSULTATION_CONTENT.projects.list} />
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Card 6: Contact Us */}
                            <div className="relative w-full rounded-xl">
                                <GlowBeam color={theme.accents.b} />
                                <Card style={{
                                    background: theme.cardBg,
                                    border: `1px solid ${theme.text}22`,
                                    color: theme.text,
                                }}>
                                    <CardContent className="space-y-3 pt-0">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 rounded-md bg-primary/10 text-primary">
                                                <Phone className="h-5 w-5" style={{ color: theme.accents.b }} />
                                            </div>
                                            <div>
                                                <CardTitle>Contact Us</CardTitle>
                                            </div>
                                        </div>

                                        {/* Emails */}
                                        <div className="flex flex-row items-start gap-4">
                                            <div className="flex items-center justify-center p-3 rounded-full bg-primary/10 shrink-0">
                                                <Mail className="h-5 w-5" />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-xs font-semibold uppercase tracking-wider opacity-50 mb-1" style={{ color: theme.subtext }}>Email</p>
                                                {BOOK_CONSULTATION_CONTENT.contact.emails.map((email, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={`mailto:${email}`}
                                                        className="block text-sm hover:underline hover:opacity-80 transition-opacity truncate mb-0.5"
                                                        style={{ color: theme.text }}
                                                    >
                                                        {email}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Phones */}
                                        <div className="flex flex-row items-start gap-4">
                                            <div className="flex items-center justify-center p-3 rounded-full bg-primary/10 shrink-0">
                                                <Phone className="h-5 w-5" />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-xs font-semibold uppercase tracking-wider opacity-50 mb-1" style={{ color: theme.subtext }}>Phone</p>
                                                {BOOK_CONSULTATION_CONTENT.contact.phones.map((phone, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={`tel:${phone.replace(/\s+/g, '')}`}
                                                        className="block text-sm hover:underline hover:opacity-80 transition-opacity truncate mb-0.5"
                                                        style={{ color: theme.text }}
                                                    >
                                                        {phone}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>

                                    </CardContent>
                                </Card>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
