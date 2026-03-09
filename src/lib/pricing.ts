/**
 * Pricing currency conversion utilities.
 *
 * Strategy:
 *  - All source prices are stored in USD as plain strings (e.g. "$499+", "$1,499 – $2,999").
 *  - When a user arrives from an Indian location page (city or country), we convert
 *    each dollar amount to INR using a fixed exchange rate and display ₹ instead of $.
 *  - Everything is pure (no side-effects) so it can be called from any component.
 */

export const USD_TO_INR_RATE = 90;
export const PRICE_DISPLAY_FACTOR = 0.4;
export const INR_CURRENCY = "INR" as const;
export const USD_CURRENCY = "USD" as const;
import { parseSeoSlug } from "./seo/content-generator";
import { SEO_SERVICES } from "./seo/constants";

export type Currency = typeof INR_CURRENCY | typeof USD_CURRENCY;

/**
 * Resolves a potentially SEO-optimized slug (e.g., "ai-automation-in-hisar")
 * back to its internal target service slug (e.g., "ai-automation-n8n").
 */
export function getInternalServiceSlug(slug: string | undefined): string | undefined {
    if (!slug) return slug;

    // Direct SEO service slug mapping:
    // e.g. "website-design" -> "website-design-uiux"
    const directSeoService = SEO_SERVICES.find((service) => service.slug === slug);
    if (directSeoService?.targetServiceSlug) {
        return directSeoService.targetServiceSlug;
    }

    const parsed = parseSeoSlug(slug);
    if (parsed?.service?.targetServiceSlug) {
        return parsed.service.targetServiceSlug;
    }
    return slug;
}

/**
 * Converts a single numeric USD value to INR and formats it with Indian
 * number formatting (e.g. 44,910).
 */
function usdAmountToInr(usdAmount: number): string {
    const inr = Math.round(usdAmount * USD_TO_INR_RATE);
    // Use Indian locale formatting (e.g. 1,00,000)
    return inr.toLocaleString("en-IN");
}

function formatScaledAmount(value: number): string {
    if (value < 1) return value.toFixed(2).replace(/\.?0+$/, "");
    if (value < 100 && value % 1 !== 0) return value.toFixed(2).replace(/\.?0+$/, "");
    return Math.round(value).toLocaleString("en-US");
}

/**
 * Reduces displayed numeric prices by a fixed factor.
 * This scales any $ or ₹ amount found in the string while preserving
 * separators like ranges and trailing plus signs.
 */
function applyDisplayPriceFactor(priceStr: string): string {
    return priceStr.replace(/([₹$])\s?(\d[\d,]*(?:\.\d+)?)/g, (_match, symbol, digits) => {
        const amount = parseFloat(digits.replace(/,/g, ""));
        if (isNaN(amount)) return `${symbol}${digits}`;
        const reduced = amount * PRICE_DISPLAY_FACTOR;
        return `${symbol}${formatScaledAmount(reduced)}`;
    });
}

/**
 * Converts a USD price string to its INR equivalent.
 * Handles formats like:
 *   "$499+"         → "₹44,910+"
 *   "$1,499 – $2,999" → "₹1,34,910 – ₹2,69,910"
 *   "$7,000+"       → "₹6,30,000+"
 *   "$0.08"         → "₹7.2"
 *   "Custom"        → "Custom"
 */
export function convertPriceToInr(priceStr: string): string {
    if (!priceStr) return priceStr;

    // Matches: $ followed by digits, commas, and optional decimal point
    // e.g. $499, $1,499, $0.08
    return priceStr.replace(/\$(\d{1,3}(?:,\d{3})*(?:\.\d+)?)/g, (_match, digits) => {
        const amount = parseFloat(digits.replace(/,/g, ""));
        if (isNaN(amount)) return _match;

        const inr = amount * USD_TO_INR_RATE;
        // If it's a small decimal (like $0.08), don't round to nearest integer
        if (inr < 100 && inr % 1 !== 0) {
            return `₹${inr.toFixed(2).replace(/\.?0+$/, "")}`;
        }

        return `₹${Math.round(inr).toLocaleString("en-IN")}`;
    });
}

/**
 * Converts a price string according to the requested currency.
 * If currency is USD (or unspecified), the original string is returned unchanged.
 */
export function formatPrice(priceStr: string, currency: Currency = USD_CURRENCY): string {
    const reducedPrice = applyDisplayPriceFactor(priceStr);
    if (currency === INR_CURRENCY) return convertPriceToInr(reducedPrice);
    return reducedPrice;
}

const INDIAN_SLUGS = ["bangalore", "delhi", "pune", "gurgaon", "hisar", "india"];

/**
 * Returns true when a pathname looks like an Indian SEO location page.
 * Example: /website-design-delhi, /seo-services-in-hisar, /ai-automation-india
 */
export function isIndianSeoPath(pathname: string | null | undefined): boolean {
    if (!pathname) return false;
    const normalized = pathname.toLowerCase();
    return INDIAN_SLUGS.some((slug) => normalized.includes(`-${slug}`) || normalized.endsWith(`/${slug}`));
}

/**
 * Returns true when the given location data represents India (country or city).
 */
export function isIndianLocation(location: {
    country?: string;
    slug?: string;
    name?: string;
} | null | undefined): boolean {
    if (!location) return false;

    // Check country field
    if (location.country?.toLowerCase() === "india") return true;

    // Check slug/name against known Indian locations (robust fallback)
    const slug = location.slug?.toLowerCase();
    const name = location.name?.toLowerCase();

    return INDIAN_SLUGS.some(s => slug?.includes(s) || name?.includes(s));
}
