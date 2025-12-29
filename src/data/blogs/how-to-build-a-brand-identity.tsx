import { TOCItem } from "@/components/layout/BlogLayout";
import { BLOG_IMAGES } from "@/constants/blog-images";

export const BRAND_IDENTITY_DATA: {
    title: string;
    subtitle: string;
    tocItems: TOCItem[];
    content: React.ReactNode;
} = {
    title: "The Branding Master Class",
    subtitle: "Psychology, Strategy, and Execution for Building Iconic Brands",
    tocItems: [
        {
            id: "part-1-introduction",
            label: "PART 1: THE FOUNDATION",
            subItems: [
                { id: "introduction", label: "I. Introduction: Beyond the Logo" },
                { id: "psychology", label: "II. The Psychology of Branding" },
                { id: "strategy", label: "III. Brand Strategy: The Internal Compass" },
            ]
        },
        {
            id: "part-2-execution",
            label: "PART 2: THE EXECUTION",
            subItems: [
                { id: "visual-identity", label: "IV. Visual Identity: The Silent Ambassador" },
                { id: "brand-voice", label: "V. Brand Voice & Messaging: How You Speak" },
                { id: "digital-presence", label: "VI. Digital Presence: The 24/7 Storefront" },
                { id: "brand-experience", label: "VII. Brand Experience: Where Rubber Meets Road" },
            ]
        },
        {
            id: "part-3-management",
            label: "PART 3: MANAGEMENT & MEASUREMENT",
            subItems: [
                { id: "internal-branding", label: "VIII. Internal Branding: Cultivating Ambassadors" },
                { id: "measuring-equity", label: "IX. Measuring Brand Equity: The Intangible Asset" },
                { id: "maintenance-rebrand", label: "X. Brand Maintenance and The Rebrand" },
            ]
        },
        {
            id: "part-4-advanced",
            label: "PART 4: ADVANCED APPLICATIONS",
            subItems: [
                { id: "case-studies", label: "XII. Master Class Case Studies: Theory in Action" },
                { id: "audit-checklist", label: "XIII. The Advanced Brand Audit Checklist" },
                { id: "future-trends", label: "XIV. The Future of Branding: AI, Metaverse, Web3" },
                { id: "personal-branding", label: "XV. Building a Personal Brand (The CEO's Duty)" },
                { id: "pricing-psychology", label: "XVI. Psychology of Pricing and Branding" },
                { id: "conclusion", label: "XI. Conclusion: The Long Game" },
            ]
        },
    ],
    content: (
        <>
            {/* I. INTRODUCTION */}
            <section id="introduction" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    I. INTRODUCTION: BEYOND THE LOGO
                </h2>

                <div className="space-y-4 text-gray-300">
                    <p>
                        In the hyper-saturated marketplace of the 21st century, where barriers to entry have crumbled and consumers are bombarded with over 5,000 marketing messages per day, one concept stands as the ultimate differentiator: <strong>Branding</strong>.
                    </p>

                    <div className="bg-gray-900 p-4 lg:p-6 rounded-lg border-l-4 border-blue-500">
                        <p className="font-semibold text-blue-400">The Truth About Branding:</p>
                        <p>Branding is <em>not</em> a logo. It is <em>not</em> a color palette. It is <em>not</em> a catchy tagline.</p>
                        <p className="mt-2">Branding is the <strong>gut feeling</strong> a person has about a product, service, or organization. It is the cumulative result of every interaction a customer has with your business.</p>
                    </div>

                    <div className="mt-6 bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-3">Why This Matters Now:</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <div>
                                    <strong className="text-green-400">Commoditization:</strong>
                                    <span className="ml-2">Technology has leveled the playing field. Features are easily copied. Brand is the only thing that cannot be duplicated.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <div>
                                    <strong className="text-green-400">Trust Deficit:</strong>
                                    <span className="ml-2">Modern consumers are skeptical. A strong brand bridges the gap between skepticism and trust.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <div>
                                    <strong className="text-green-400">Premium Pricing:</strong>
                                    <span className="ml-2">Strong brands command higher prices. People pay for the certainty and status a brand provides, not just the raw materials.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <p className="mt-6">
                        This guide serves as a comprehensive master class. We will dismantle the fluff surrounding branding and rebuild it as a systematic, rigorous discipline that drives revenue, retention, and resilience.
                    </p>
                </div>
            </section>

            {/* II. PSYCHOLOGY OF BRANDING */}
            <section id="psychology" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    II. THE PSYCHOLOGY OF BRANDING
                </h2>

                <div className="space-y-6 text-gray-300">
                    <p>
                        To build a brand, one must first understand the biological hardware of the target audience: the human brain. Branding is, at its core, applied psychology.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-400 mb-3">1. System 1 vs. System 2 Thinking</h3>
                            <p>Nobel laureate Daniel Kahneman described two modes of thought:</p>
                            <div className="mt-2 grid grid-cols-2 gap-3">
                                <div className="bg-gray-800 p-3 rounded-md">
                                    <h4 className="font-semibold text-green-400">System 1</h4>
                                    <p className="text-sm">Fast, instinctive, emotional. Great branding targets System 1.</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded-md">
                                    <h4 className="font-semibold text-yellow-400">System 2</h4>
                                    <p className="text-sm">Slower, deliberative, logical. If your brand requires System 2 thinking, you've lost.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-purple-400 mb-3">2. The Role of Emotion</h3>
                            <p>Neuroscience indicates that humans make decisions based on emotion and justify them later with logic.</p>
                            <div className="mt-3 p-3 bg-gray-800 rounded-md">
                                <p className="font-semibold text-purple-400">Application:</p>
                                <p className="text-sm">Your brand strategy must define the "emotional payload" you deliver. Do you sell "safety" (Volvo)? "Rebellion" (Harley Davidson)? "Magic" (Disney)?</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-green-400 mb-3">3. The Mere Exposure Effect</h3>
                        <p>People develop a preference for things merely because they are familiar with them. Consistency in branding—using the same fonts, colors, and tone over years—leverages this effect.</p>
                        <div className="mt-3 p-3 bg-red-900/20 rounded-md border border-red-800">
                            <p className="font-semibold text-red-400">Warning:</p>
                            <p className="text-sm">Inconsistency resets the clock on familiarity. Rebranding too often erodes this psychological advantage.</p>
                        </div>
                    </div>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-3">4. Brand Archetypes (Carl Jung)</h3>
                        <p>Universal, primal patterns that all humans understand instinctively. Successful brands align with one archetype.</p>

                        <div className="grid md:grid-cols-3 gap-4 mt-4">
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h4 className="font-semibold text-red-400">The Hero</h4>
                                <p className="text-sm">Motivates the world to be better. <em>"Just Do It."</em></p>
                                <p className="text-xs mt-2 text-gray-400">Example: Nike</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h4 className="font-semibold text-blue-400">The Outlaw</h4>
                                <p className="text-sm">Disrupts the status quo.</p>
                                <p className="text-xs mt-2 text-gray-400">Example: Virgin, Harley Davidson</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-400">The Sage</h4>
                                <p className="text-sm">Seeks truth and provides wisdom.</p>
                                <p className="text-xs mt-2 text-gray-400">Example: Google, BBC</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h4 className="font-semibold text-yellow-400">The Innocent</h4>
                                <p className="text-sm">Offers simplicity and happiness.</p>
                                <p className="text-xs mt-2 text-gray-400">Example: Dove, Coca-Cola</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h4 className="font-semibold text-purple-400">The Creator</h4>
                                <p className="text-sm">Inspires innovation and expression.</p>
                                <p className="text-xs mt-2 text-gray-400">Example: Lego, Adobe</p>
                            </div>
                        </div>

                        <div className="mt-4 p-3 bg-yellow-900/20 rounded-md border border-yellow-800">
                            <p className="font-semibold text-yellow-400">Action Step:</p>
                            <p className="text-sm">Identify your archetype. If you try to be the "Hero" and the "Jester" simultaneously, you will confuse your audience. A confused mind says "no."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* III. BRAND STRATEGY */}
            <section id="strategy" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    III. BRAND STRATEGY: THE INTERNAL COMPASS
                </h2>

                <div className="space-y-6 text-gray-300">
                    <p>
                        Before a single pixel is designed, the strategic foundation must be poured. Visuals without strategy are just decoration. Strategy is the internal compass that guides every decision.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-400 mb-3">A. Mission, Vision, and Purpose</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-green-400">Mission (What we do today)</h4>
                                    <p className="text-sm">Defines business objectives and approach.</p>
                                    <p className="text-sm italic mt-1 text-gray-400">Tesla: "To accelerate the world's transition to sustainable energy."</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-yellow-400">Vision (Where we're going)</h4>
                                    <p className="text-sm">Aspirational future state.</p>
                                    <p className="text-sm italic mt-1 text-gray-400">Microsoft: "A computer on every desk and in every home."</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-red-400">Purpose (Why we exist)</h4>
                                    <p className="text-sm">Moral reason beyond making money.</p>
                                    <p className="text-sm italic mt-1 text-gray-400">Patagonia: "We're in business to save our home planet."</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-purple-400 mb-3">B. Core Values</h3>
                            <p>Values are the non-negotiable behaviors of the company. They are hiring and firing criteria.</p>
                            <div className="mt-3">
                                <div className="bg-red-900/20 p-3 rounded-md mb-3">
                                    <h4 className="font-semibold text-red-400">Bad Values (Generic):</h4>
                                    <p className="text-sm">"Integrity," "Excellence," "Teamwork" - Every company claims these.</p>
                                </div>
                                <div className="bg-green-900/20 p-3 rounded-md">
                                    <h4 className="font-semibold text-green-400">Good Values (Actionable):</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>Facebook: "Move fast and break things"</li>
                                        <li>Zappos: "Create fun and a little weirdness"</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-400 mb-3">C. Unique Selling Proposition (USP)</h3>
                            <p>What is the one thing you can claim that no competitor can?</p>
                            <div className="mt-3 p-3 bg-gray-800 rounded-md">
                                <h4 className="font-semibold text-green-400">The "Only" Statement:</h4>
                                <p className="text-sm">"We are the only [Category] that [Unique Benefit] for [Target Customer]."</p>
                            </div>
                            <div className="mt-3">
                                <h4 className="font-semibold text-white">Finding Your USP:</h4>
                                <ul className="mt-1 text-sm space-y-1">
                                    <li className="flex items-start">
                                        <span className="text-yellow-400 mr-2">•</span>
                                        <span>Price/Value: Are you the cheapest? (Walmart)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-400 mr-2">•</span>
                                        <span>Quality/Status: Are you the best? (Rolls Royce)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-400 mr-2">•</span>
                                        <span>Speed: Are you the fastest? (Amazon Prime)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-3">D. Target Audience Profiling</h3>
                        <p>You cannot appeal to everyone. If you try to appeal to everyone, you appeal to no one.</p>

                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-gray-800 p-4 rounded-md">
                                <h4 className="font-semibold text-blue-400">Demographics (The Who)</h4>
                                <p className="text-sm">Age, Gender, Income, Location</p>
                                <p className="text-xs mt-2 text-gray-400">Example: Women, 25-40, New York</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-md">
                                <h4 className="font-semibold text-green-400">Psychographics (The Why)</h4>
                                <p className="text-sm">Values, Fears, Desires, Lifestyle</p>
                                <p className="text-xs mt-2 text-gray-400">Example: Values sustainability, fears wasting time, desires social status</p>
                            </div>
                        </div>

                        <div className="mt-4 p-3 bg-blue-900/20 rounded-md border border-blue-800">
                            <h4 className="font-semibold text-blue-400">The Empathy Map Exercise:</h4>
                            <p className="text-sm mt-1">To truly brand effectively, map out the customer's mind:</p>
                            <ul className="mt-2 text-sm space-y-1">
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    <span><strong>What do they SEE?</strong> (Environment)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    <span><strong>What do they HEAR?</strong> (Influencers)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    <span><strong>What do they THINK & FEEL?</strong> (Anxieties)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    <span><strong>What do they SAY & DO?</strong> (Public vs. private behavior)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* IV. VISUAL IDENTITY */}
            <section id="visual-identity" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    IV. VISUAL IDENTITY: THE SILENT AMBASSADOR
                </h2>

                <div className="space-y-6 text-gray-300">
                    <p>
                        Once the strategy (the "Soul") is defined, we must build the body. Visual identity is the translation of your strategy into a language that can be seen.
                    </p>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-3">A. The Logo: The Tip of the Spear</h3>
                        <p>The logo is the most concentrated symbol of your brand, but it is not the brand itself. It is a flag.</p>

                        <div className="mt-4">
                            <h4 className="font-semibold text-yellow-400">The Three Sacred Laws of Logo Design:</h4>
                            <div className="grid md:grid-cols-3 gap-4 mt-3">
                                <div className="bg-gray-800 p-4 rounded-md">
                                    <h5 className="font-semibold text-green-400">1. Simplicity</h5>
                                    <p className="text-sm">Can a child draw it from memory? (Apple, Nike, McDonald's)</p>
                                </div>
                                <div className="bg-gray-800 p-4 rounded-md">
                                    <h5 className="font-semibold text-blue-400">2. Scalability</h5>
                                    <p className="text-sm">Looks good on a billboard and a ballpoint pen. Vector formats (SVG, EPS) are non-negotiable.</p>
                                </div>
                                <div className="bg-gray-800 p-4 rounded-md">
                                    <h5 className="font-semibold text-purple-400">3. Relevance</h5>
                                    <p className="text-sm">Fits the industry while standing out. A heavy metal font doesn't work for a pediatric dentist.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h4 className="font-semibold text-white">Types of Logos:</h4>
                            <div className="grid md:grid-cols-5 gap-3 mt-3">
                                <div className="bg-gray-800 p-3 rounded-md text-center">
                                    <div className="font-semibold text-sm text-green-400">Wordmark</div>
                                    <div className="text-xs mt-1 text-gray-400">Google, Coca-Cola</div>
                                </div>
                                <div className="bg-gray-800 p-3 rounded-md text-center">
                                    <div className="font-semibold text-sm text-blue-400">Lettermark</div>
                                    <div className="text-xs mt-1 text-gray-400">IBM, HBO</div>
                                </div>
                                <div className="bg-gray-800 p-3 rounded-md text-center">
                                    <div className="font-semibold text-sm text-yellow-400">Pictorial</div>
                                    <div className="text-xs mt-1 text-gray-400">Twitter, Apple</div>
                                </div>
                                <div className="bg-gray-800 p-3 rounded-md text-center">
                                    <div className="font-semibold text-sm text-purple-400">Abstract</div>
                                    <div className="text-xs mt-1 text-gray-400">Pepsi, Adidas</div>
                                </div>
                                <div className="bg-gray-800 p-3 rounded-md text-center">
                                    <div className="font-semibold text-sm text-red-400">Emblem</div>
                                    <div className="text-xs mt-1 text-gray-400">Starbucks, Harley</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-3">B. Color Psychology: Hacking the Subconscious</h3>
                        <p>Color creates chemical reactions in the brain. It increases brand recognition by up to 80%.</p>

                        <div className="grid md:grid-cols-3 gap-4 mt-4">
                            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-800">
                                <h4 className="font-semibold text-blue-400">Blue</h4>
                                <p className="text-sm">Trust, security, logic, calm</p>
                                <p className="text-xs mt-2 text-gray-400">Facebook, Ford, Visa</p>
                            </div>
                            <div className="bg-red-900/20 p-4 rounded-lg border border-red-800">
                                <h4 className="font-semibold text-red-400">Red</h4>
                                <p className="text-sm">Urgency, passion, hunger, excitement</p>
                                <p className="text-xs mt-2 text-gray-400">Netflix, Target, Coca-Cola</p>
                            </div>
                            <div className="bg-green-900/20 p-4 rounded-lg border border-green-800">
                                <h4 className="font-semibold text-green-400">Green</h4>
                                <p className="text-sm">Health, growth, money, nature</p>
                                <p className="text-xs mt-2 text-gray-400">Whole Foods, Android</p>
                            </div>
                            <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-800">
                                <h4 className="font-semibold text-yellow-400">Yellow</h4>
                                <p className="text-sm">Optimism, clarity, warmth</p>
                                <p className="text-xs mt-2 text-gray-400">McDonald's, Snapchat</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                <h4 className="font-semibold text-white">Black</h4>
                                <p className="text-sm">Luxury, exclusivity, power</p>
                                <p className="text-xs mt-2 text-gray-400">Chanel, Uber, Nike</p>
                            </div>
                            <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-800">
                                <h4 className="font-semibold text-orange-400">Orange</h4>
                                <p className="text-sm">Friendly, cheerful, confidence</p>
                                <p className="text-xs mt-2 text-gray-400">Home Depot, Nickelodeon</p>
                            </div>
                        </div>

                        <div className="mt-4 p-3 bg-gray-800 rounded-md">
                            <h4 className="font-semibold text-green-400">The 60-30-10 Rule (Application):</h4>
                            <ul className="mt-2 text-sm space-y-1">
                                <li className="flex items-start">
                                    <span className="text-gray-400 mr-2">•</span>
                                    <span><strong>60% Primary Color:</strong> Usually a neutral or background</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>30% Secondary Color:</strong> Your main brand color</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-400 mr-2">•</span>
                                    <span><strong>10% Accent Color:</strong> For CTAs and buttons</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">C. Typography: The Tone of Voice in Print</h3>
                            <div className="space-y-4">
                                <div className="bg-gray-800 p-3 rounded-md">
                                    <h4 className="font-semibold text-blue-400">Serif</h4>
                                    <p className="text-sm">Has "feet." Communicates: Tradition, respectability, reliability.</p>
                                    <p className="text-xs mt-2 text-gray-400">Best for: Newspapers, law firms, Vogue</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded-md">
                                    <h4 className="font-semibold text-green-400">Sans Serif</h4>
                                    <p className="text-sm">No "feet." Communicates: Modernity, objectivity, minimalism.</p>
                                    <p className="text-xs mt-2 text-gray-400">Best for: Tech companies, startups</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded-md">
                                    <h4 className="font-semibold text-yellow-400">Script & Display</h4>
                                    <p className="text-sm">Mimics handwriting. Communicates: Creativity, elegance.</p>
                                    <p className="text-xs mt-2 text-gray-400">Usage: Headlines only, never body text</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">D. Imagery and Photography Style</h3>
                            <p>Your brand needs a "visual vocabulary." If you use stock photos, you look like everyone else.</p>
                            <div className="mt-3 p-3 bg-gray-800 rounded-md">
                                <h4 className="font-semibold text-green-400">Consistency is Key</h4>
                                <ul className="mt-2 text-sm space-y-1">
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-2">•</span>
                                        <span>Bright, high-contrast photos?</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-2">•</span>
                                        <span>Moody, desaturated tones?</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-2">•</span>
                                        <span>Illustrations or photography?</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-3 p-3 bg-blue-900/20 rounded-md">
                                <p className="font-semibold text-blue-400">The "People" Factor:</p>
                                <p className="text-sm">Humans are wired to look at faces. Images including authentic people generally convert better than objects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* V. BRAND VOICE */}
            <section id="brand-voice" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    V. BRAND VOICE & MESSAGING: HOW YOU SPEAK
                </h2>

                <div className="space-y-6 text-gray-300">
                    <p>
                        If you covered your logo, would your customers know who is writing to them? Brand voice is the distinct personality taken on by a brand in its communications.
                    </p>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-3">A. Defining Your Voice Dimensions</h3>
                        <p>According to Nielsen Norman Group, brand voice falls on a 4-part scale:</p>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-gray-800 p-4 rounded-md">
                                <div className="flex justify-between">
                                    <span className="font-semibold text-green-400">Funny</span>
                                    <span className="font-semibold text-red-400">Serious</span>
                                </div>
                                <div className="mt-2 text-sm">
                                    <p><span className="text-green-400">Old Spice</span> vs. <span className="text-red-400">The Red Cross</span></p>
                                </div>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-md">
                                <div className="flex justify-between">
                                    <span className="font-semibold text-blue-400">Formal</span>
                                    <span className="font-semibold text-yellow-400">Casual</span>
                                </div>
                                <div className="mt-2 text-sm">
                                    <p><span className="text-blue-400">Rolex</span> vs. <span className="text-yellow-400">Wendy's Twitter</span></p>
                                </div>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-md">
                                <div className="flex justify-between">
                                    <span className="font-semibold text-purple-400">Respectful</span>
                                    <span className="font-semibold text-orange-400">Irreverent</span>
                                </div>
                                <div className="mt-2 text-sm">
                                    <p><span className="text-purple-400">LinkedIn</span> vs. <span className="text-orange-400">Cards Against Humanity</span></p>
                                </div>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-md">
                                <div className="flex justify-between">
                                    <span className="font-semibold text-red-400">Enthusiastic</span>
                                    <span className="font-semibold text-gray-400">Matter-of-Fact</span>
                                </div>
                                <div className="mt-2 text-sm">
                                    <p><span className="text-red-400">Tony Robbins</span> vs. <span className="text-gray-400">Gov.uk</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-3">B. Creating a Messaging Framework</h3>
                        <p>To ensure every employee speaks the same language, you need a Messaging Matrix.</p>

                        <div className="grid md:grid-cols-3 gap-4 mt-4">
                            <div className="bg-gray-800 p-4 rounded-md">
                                <h4 className="font-semibold text-green-400">1. The Tagline</h4>
                                <p className="text-sm">A short, memorable phrase summarizing value.</p>
                                <div className="mt-2 space-y-1 text-xs text-gray-400">
                                    <p>"Think Different." (Apple)</p>
                                    <p>"I'm Lovin' It." (McDonald's)</p>
                                    <p>"Shave Time. Shave Money." (Dollar Shave Club)</p>
                                </div>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-md">
                                <h4 className="font-semibold text-blue-400">2. The Elevator Pitch</h4>
                                <p className="text-sm">Explain the brand in 30 seconds.</p>
                                <div className="mt-2 p-2 bg-gray-900 rounded">
                                    <p className="text-xs font-mono">
                                        For [Target Customer] who needs [Problem Solved], [Brand Name] is the [Category] that provides [Benefit]. Unlike [Competitor], we [Unique Differentiator].
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-md">
                                <h4 className="font-semibold text-yellow-400">3. Brand Vocabulary</h4>
                                <ul className="mt-2 text-sm space-y-1">
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-2">✓</span>
                                        <span><strong>Words We Use:</strong> "Partners" not "Clients"</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2">✗</span>
                                        <span><strong>Words We Never Use:</strong> "Cheap," "Hackle," "Blast"</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg border border-blue-800">
                        <h3 className="text-xl font-semibold text-blue-400 mb-3">C. Storytelling: The Hero's Journey (Donald Miller)</h3>
                        <p>The biggest mistake brands make is thinking THEY are the hero of the story.</p>
                        <div className="mt-3 p-3 bg-blue-900/20 rounded-md">
                            <p className="font-semibold text-blue-400">The Reality:</p>
                            <ul className="mt-2 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-yellow-400 mr-2">•</span>
                                    <span>The <strong>CUSTOMER</strong> is the Hero (Luke Skywalker)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span>The <strong>BRAND</strong> is the Guide (Yoda)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <h4 className="font-semibold text-white">StoryBrand Framework:</h4>
                            <ol className="list-decimal ml-6 mt-2 space-y-2 text-sm">
                                <li>A <strong>Character</strong> (The Customer) has a <strong>Problem</strong></li>
                                <li>And meets a <strong>Guide</strong> (Your Brand)</li>
                                <li>Who gives them a <strong>Plan</strong></li>
                                <li>And calls them to <strong>Action</strong></li>
                                <li>That results in <strong>Success</strong></li>
                                <li>Or helps avoid <strong>Failure</strong></li>
                            </ol>
                        </div>
                        <div className="mt-4 p-3 bg-red-900/20 rounded-md">
                            <p className="font-semibold text-red-400">Warning:</p>
                            <p className="text-sm">If your marketing talks about how great your company is ("We were founded in 1988..."), you are failing. Talk about who the customer will become.</p>
                        </div>
                    </div>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-3">D. Content Strategy: Voice in Action</h3>
                        <p>Branding is not static; it is lived through content.</p>
                        <div className="grid md:grid-cols-3 gap-4 mt-4">
                            <div className="bg-green-900/20 p-4 rounded-lg border border-green-800">
                                <h4 className="font-semibold text-green-400">Education</h4>
                                <p className="text-sm">Establishing authority (Blogs, Whitepapers)</p>
                            </div>
                            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-800">
                                <h4 className="font-semibold text-blue-400">Inspiration</h4>
                                <p className="text-sm">Building community (Instagram, Pinterest)</p>
                            </div>
                            <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-800">
                                <h4 className="font-semibold text-purple-400">Entertainment</h4>
                                <p className="text-sm">Grabbing attention (TikTok, YouTube)</p>
                            </div>
                        </div>
                        <div className="mt-4 p-3 bg-gray-800 rounded-md">
                            <p className="font-semibold text-yellow-400">The "3 E's" Rule:</p>
                            <p className="text-sm">Every piece of content must Educate, Entertain, or Empower. If it does just "Sell," it subtracts from brand equity.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* VI. DIGITAL PRESENCE */}
            <section id="digital-presence" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VI. DIGITAL PRESENCE: THE 24/7 STOREFRONT
                </h2>

                <div className="space-y-6 text-gray-300">
                    <p>
                        In the digital age, your website is your flagship store. Your social media is your cocktail party. Your email list is your living room.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-400 mb-3">A. Website User Experience (UX) as Branding</h3>
                            <p>A slow website is a brand failure. A confusing menu is a brand failure.</p>
                            <div className="mt-3 space-y-3">
                                <div className="p-3 bg-red-900/20 rounded-md">
                                    <p className="font-semibold text-red-400">Speed Matters:</p>
                                    <p className="text-sm">53% of mobile visits are abandoned if a site takes longer than 3 seconds to load.</p>
                                </div>
                                <div className="p-3 bg-yellow-900/20 rounded-md">
                                    <p className="font-semibold text-yellow-400">Aesthetics vs. Usability:</p>
                                    <p className="text-sm">Never sacrifice usability for "coolness." If users can't find the "Buy" button, the brand feels incompetent.</p>
                                </div>
                                <div className="p-3 bg-green-900/20 rounded-md">
                                    <p className="font-semibold text-green-400">Mobile First:</p>
                                    <p className="text-sm">Google indexes mobile sites first. If your brand looks broken on an iPhone, your brand is broken.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-purple-400 mb-3">B. Social Media Consistency</h3>
                            <p>You do not need to be on every platform. You need to be where your audience is.</p>
                            <div className="mt-3">
                                <h4 className="font-semibold text-white">Platform Branding:</h4>
                                <div className="grid grid-cols-3 gap-3 mt-2">
                                    <div className="bg-blue-900/20 p-3 rounded-md">
                                        <div className="font-semibold text-blue-400 text-sm">LinkedIn</div>
                                        <div className="text-xs mt-1 text-gray-400">Professional, authoritative</div>
                                    </div>
                                    <div className="bg-pink-900/20 p-3 rounded-md">
                                        <div className="font-semibold text-pink-400 text-sm">Instagram</div>
                                        <div className="text-xs mt-1 text-gray-400">Visual, lifestyle</div>
                                    </div>
                                    <div className="bg-gray-800 p-3 rounded-md">
                                        <div className="font-semibold text-white text-sm">X (Twitter)</div>
                                        <div className="text-xs mt-1 text-gray-400">Real-time, conversation</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 p-3 bg-gray-800 rounded-md">
                                <p className="font-semibold text-green-400">The Golden Rule of Social:</p>
                                <p className="text-sm">Engagement greater than Broadcasting. A brand that replies to comments builds a tribe.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">C. Email Marketing: The Owned Audience</h3>
                            <p>Social media algorithms change; your email list remains yours.</p>
                            <div className="mt-3 space-y-3">
                                <div className="p-3 bg-yellow-900/20 rounded-md">
                                    <h4 className="font-semibold text-yellow-400">Personalization:</h4>
                                    <p className="text-sm">"Dear Valued Customer" is a brand fail. "Hey Steven" is a brand win.</p>
                                </div>
                                <div className="p-3 bg-green-900/20 rounded-md">
                                    <h4 className="font-semibold text-green-400">Value vs. Ask Ratio:</h4>
                                    <p className="text-sm">3:1 - Give value three times before asking for a sale once.</p>
                                </div>
                                <div className="p-3 bg-red-900/20 rounded-md">
                                    <h4 className="font-semibold text-red-400">Design Consistency:</h4>
                                    <p className="text-sm">Emails must look like your website. If branding disconnects, trust evaporates.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-400 mb-3">D. SEO as Branding</h3>
                            <p>Search Engine Optimization is usually seen as technical, but it's a branding task.</p>
                            <div className="mt-3 space-y-3">
                                <div className="p-3 bg-gray-800 rounded-md">
                                    <h4 className="font-semibold text-blue-400">Authority:</h4>
                                    <p className="text-sm">Ranking #1 for a keyword implies you are the market leader.</p>
                                </div>
                                <div className="p-3 bg-red-900/20 rounded-md">
                                    <h4 className="font-semibold text-red-400">Content Alignment:</h4>
                                    <p className="text-sm">If you claim to be luxury but write "cheap tips" articles, you dilute brand equity.</p>
                                </div>
                                <div className="p-3 bg-green-900/20 rounded-md">
                                    <h4 className="font-semibold text-green-400">Snippets:</h4>
                                    <p className="text-sm">The meta description on Google is often the first interaction. Write it like ad copy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VII. BRAND EXPERIENCE */}
            <section id="brand-experience" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VII. BRAND EXPERIENCE: WHERE THE RUBBER MEETS THE ROAD
                </h2>

                <div className="space-y-6 text-gray-300">
                    <p>
                        You can have the best logo and strategy, but if the customer experience is poor, the brand fails. Branding is a promise; Experience is the proof.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">A. The Unboxing Experience</h3>
                            <p>In E-commerce, the "unboxing" is the only physical touchpoint. It is a theatrical moment.</p>
                            <div className="mt-3 space-y-2">
                                <div className="p-3 bg-gray-800 rounded-md">
                                    <h4 className="font-semibold text-yellow-400">Packaging:</h4>
                                    <p className="text-sm">Apple spent months designing boxes that open slowly to build anticipation.</p>
                                </div>
                                <div className="p-3 bg-gray-800 rounded-md">
                                    <h4 className="font-semibold text-green-400">The Note:</h4>
                                    <p className="text-sm">A handwritten thank-you note turns a transaction into a relationship.</p>
                                </div>
                                <div className="p-3 bg-gray-800 rounded-md">
                                    <h4 className="font-semibold text-red-400">Sustainability:</h4>
                                    <p className="text-sm">Excess plastic damages an eco-friendly brand. Materials must align with values.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-400 mb-3">B. Customer Service as Brand Marketing</h3>
                            <p>Zappos built a billion-dollar empire on the brand promise of "delivering happiness."</p>
                            <div className="mt-3 space-y-3">
                                <div className="p-3 bg-gray-800 rounded-md">
                                    <h4 className="font-semibold text-white">Scripted vs. Human:</h4>
                                    <p className="text-sm">A luxury brand shouldn't sound like a robot. A fun brand shouldn't sound like a lawyer.</p>
                                </div>
                                <div className="p-3 bg-green-900/20 rounded-md border border-green-800">
                                    <h4 className="font-semibold text-green-400">Recovery Paradox:</h4>
                                    <p className="text-sm">A customer with a problem resolved quickly often becomes MORE loyal than one who never had a problem.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-400 mb-3">C. The Omni-Channel Consistency</h3>
                            <p>The customer journey is non-linear. They see an Instagram ad, visit the website, go to a store, then call support.</p>
                            <div className="mt-3 p-3 bg-blue-900/20 rounded-md border border-blue-800">
                                <p className="font-semibold text-blue-400">The Test:</p>
                                <p className="text-sm">If a customer walks into your store, does it "feel" the same as your Instagram feed? If not, you have a "Brand Gap."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* VIII. INTERNAL BRANDING */}
            <section id="internal-branding" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VIII. INTERNAL BRANDING: CULTIVATING AMBASSADORS
                </h2>

                <div className="space-y-6 text-gray-300">
                    <p>
                        Your employees are your first customers. If they do not buy the brand, the market won't either.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-400 mb-3">A. Hiring for Values</h3>
                            <p>Skills can be taught; attitude and values cannot.</p>
                            <div className="mt-3 p-3 bg-green-900/20 rounded-md">
                                <p className="font-semibold text-green-400">Strategy:</p>
                                <p className="text-sm">During interviews, ask questions that reveal alignment with Brand Values. If "Innovation" is a value, ask about breaking rules to improve processes.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-400 mb-3">B. The Brand Bible (Style Guide)</h3>
                            <p>Every company needs a central document housing strategy, voice, and visual rules.</p>
                            <div className="mt-3">
                                <h4 className="font-semibold text-white">Who Needs It:</h4>
                                <ul className="mt-2 text-sm space-y-1">
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        <span>Sales teams for pitches</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        <span>HR for recruitment</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        <span>Support for tone consistency</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-purple-400 mb-3">C. Employee Advocacy</h3>
                            <p>In the era of LinkedIn, your employees are media channels.</p>
                            <div className="mt-3 p-3 bg-purple-900/20 rounded-md border border-purple-800">
                                <p className="font-semibold text-purple-400">The Stat:</p>
                                <p className="text-sm">Content shared by employees receives 8x more engagement than content shared by brand channels.</p>
                            </div>
                            <div className="mt-3 p-3 bg-gray-800 rounded-md">
                                <p className="font-semibold text-green-400">Application:</p>
                                <p className="text-sm">Encourage employees to build personal brands under the company umbrella. Give them content to share.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IX. MEASURING BRAND EQUITY */}
            <section id="measuring-equity" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    IX. MEASURING BRAND EQUITY: THE INTANGIBLE ASSET
                </h2>

                <div className="space-y-6 text-gray-300">
                    <p>
                        How do you measure a feeling? While branding is qualitative, its impact is quantitative.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-400 mb-3">A. Net Promoter Score (NPS)</h3>
                            <p>The Golden Question: "On a scale of 0-10, how likely are you to recommend us to a friend?"</p>
                            <div className="mt-3 grid grid-cols-3 gap-3">
                                <div className="bg-green-900/20 p-3 rounded-md">
                                    <h4 className="font-semibold text-green-400">Promoters</h4>
                                    <p className="text-sm">9-10: Loyal enthusiasts</p>
                                </div>
                                <div className="bg-yellow-900/20 p-3 rounded-md">
                                    <h4 className="font-semibold text-yellow-400">Passives</h4>
                                    <p className="text-sm">7-8: Vulnerable to competitors</p>
                                </div>
                                <div className="bg-red-900/20 p-3 rounded-md">
                                    <h4 className="font-semibold text-red-400">Detractors</h4>
                                    <p className="text-sm">0-6: Can damage your brand</p>
                                </div>
                            </div>
                            <div className="mt-3 p-3 bg-gray-800 rounded-md">
                                <p className="font-semibold text-blue-400">Formula:</p>
                                <p className="text-sm">% Promoters - % Detractors = NPS. A high NPS is a leading indicator of growth.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-400 mb-3">B. Brand Awareness and Recall</h3>
                            <div className="space-y-3">
                                <div className="p-3 bg-gray-800 rounded-md">
                                    <h4 className="font-semibold text-green-400">Aided Recall:</h4>
                                    <p className="text-sm">"Have you heard of [Brand Name]?"</p>
                                </div>
                                <div className="p-3 bg-gray-800 rounded-md">
                                    <h4 className="font-semibold text-blue-400">Unaided Recall:</h4>
                                    <p className="text-sm">"Name a brand that sells [Product Category]."</p>
                                    <div className="mt-2 p-2 bg-blue-900/20 rounded">
                                        <p className="text-xs text-blue-400">If they name you first without prompting, you own "Top of Mind" awareness.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-purple-400 mb-3">C. Share of Voice (SOV)</h3>
                            <p>How much of the conversation in your industry is about you vs. your competitors?</p>
                            <div className="mt-3 p-3 bg-purple-900/20 rounded-md">
                                <p className="font-semibold text-purple-400">Tools:</p>
                                <p className="text-sm">Social listening tools (Mention, Brandwatch) track brand mentions online compared to competitors.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-red-400 mb-3">D. Price Elasticity</h3>
                            <p>The ultimate test of a brand: Can you raise prices without losing customers?</p>
                            <div className="mt-3 grid grid-cols-2 gap-3">
                                <div className="bg-red-900/20 p-3 rounded-md">
                                    <h4 className="font-semibold text-red-400">Weak Brand</h4>
                                    <p className="text-sm">Raising prices 10% → 10% drop in sales</p>
                                </div>
                                <div className="bg-green-900/20 p-3 rounded-md">
                                    <h4 className="font-semibold text-green-400">Strong Brand</h4>
                                    <p className="text-sm">Raising prices 10% → No drop (or perceived value increase)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* X. MAINTENANCE AND REBRAND */}
            <section id="maintenance-rebrand" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    X. BRAND MAINTENANCE AND THE REBRAND
                </h2>

                <div className="space-y-6 text-gray-300">
                    <p>
                        A brand is a living entity. It must evolve, or it will die (like Blockbuster or Kodak).
                    </p>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-3">A. Consistency vs. Stagnation</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-green-900/20 p-4 rounded-lg border border-green-800">
                                <h4 className="font-semibold text-green-400">Consistency</h4>
                                <p className="text-sm">Keeping the core promise and values the same.</p>
                            </div>
                            <div className="bg-red-900/20 p-4 rounded-lg border border-red-800">
                                <h4 className="font-semibold text-red-400">Stagnation</h4>
                                <p className="text-sm">Refusing to update visuals or methods to match modern times.</p>
                            </div>
                        </div>
                        <div className="mt-4 p-3 bg-gray-800 rounded-md">
                            <p className="font-semibold text-blue-400">The Balance:</p>
                            <p className="text-sm">Change the "How" (tactics, visuals), never change the "Why" (purpose).</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-400 mb-3">B. The Refresh vs. The Rebrand</h3>
                            <div className="space-y-4">
                                <div className="p-3 bg-blue-900/20 rounded-md">
                                    <h4 className="font-semibold text-blue-400">Brand Refresh</h4>
                                    <p className="text-sm">A makeover. Updating logo slightly, brightening colors, modernizing font.</p>
                                    <div className="mt-2 p-2 bg-gray-900 rounded">
                                        <p className="font-semibold text-green-400 text-sm">Do this when:</p>
                                        <p className="text-xs">The brand feels dated, but reputation is strong. (Example: Google's logo evolution)</p>
                                    </div>
                                </div>
                                <div className="p-3 bg-red-900/20 rounded-md">
                                    <h4 className="font-semibold text-red-400">Total Rebrand</h4>
                                    <p className="text-sm">New identity. New name, new values, new strategy.</p>
                                    <div className="mt-2 p-2 bg-gray-900 rounded">
                                        <p className="font-semibold text-red-400 text-sm">Do this when:</p>
                                        <p className="text-xs">Merger, fundamental business model shift, or current brand reputation is toxic. (Example: Facebook → Meta)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg border border-red-800">
                            <h3 className="text-xl font-semibold text-red-400 mb-3">C. The Risks of Rebranding</h3>
                            <p>Gap famously rebranded their logo in 2010. The backlash was so severe they reverted within 6 days.</p>
                            <div className="mt-3 space-y-3">
                                <div className="p-3 bg-red-900/20 rounded-md">
                                    <p className="font-semibold text-red-400">Lesson 1:</p>
                                    <p className="text-sm">Don't fix what isn't broken.</p>
                                </div>
                                <div className="p-3 bg-yellow-900/20 rounded-md">
                                    <p className="font-semibold text-yellow-400">Lesson 2:</p>
                                    <p className="text-sm">Involve your customers in the process.</p>
                                </div>
                                <div className="p-3 bg-green-900/20 rounded-md">
                                    <p className="font-semibold text-green-400">Lesson 3:</p>
                                    <p className="text-sm">Respect the emotional ownership customers feel over your brand.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* XI. CONCLUSION */}
            <section id="conclusion" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XI. CONCLUSION: THE LONG GAME
                </h2>

                <div className="space-y-6 text-gray-300">
                    <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-green-500">
                        <p className="text-lg">
                            Building a brand is not a sprint; it is an ultra-marathon. It is the practice of showing up, day after day, year after year, with the same promise and the same values.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-800 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Short Term vs. Long Term</h3>
                            <p>In the short term, "marketing" generates quick cash. But "branding" is what builds wealth.</p>
                            <div className="mt-3 space-y-2">
                                <div className="flex items-start">
                                    <span className="text-yellow-400 mr-2">•</span>
                                    <span><strong>Marketing asks:</strong> "Will you buy this?"</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>Branding asks:</strong> "Will you join us?"</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-400 mb-3">The Infinite Asset</h3>
                            <p>When you build a brand effectively:</p>
                            <ul className="mt-2 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">✓</span>
                                    <span>You stop competing on price</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">✓</span>
                                    <span>You stop chasing customers</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">✓</span>
                                    <span>You start attracting believers</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 p-6 bg-gray-900 rounded-lg">
                        <p className="text-center text-lg">
                            You build an asset that resides not in your warehouse or your server, but in the <strong>hearts and minds</strong> of the people you serve.
                        </p>
                        <p className="text-center text-xl font-bold text-green-400 mt-4">
                            That is the infinite asset.
                        </p>
                    </div>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* XII. CASE STUDIES */}
            <section id="case-studies" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XII. MASTER CLASS CASE STUDIES: THE THEORY IN ACTION
                </h2>

                <div className="space-y-8 text-gray-300">
                    <p>
                        To truly understand branding, we must move from theory to application. Let us dissect three distinct brands that dominate their categories.
                    </p>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg border border-red-800">
                        <h3 className="text-xl font-semibold text-red-400 mb-3">CASE STUDY 1: LIQUID DEATH (The Jester/Outlaw)</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-white">The Problem:</h4>
                                <p>Water is the ultimate commodity. For decades, marketing focused on "purity" with blue bottles and nature imagery.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">The Strategy:</h4>
                                <p>Mike Cessario realized healthiest drink (water) had boring branding, while unhealthy drinks had cool branding.</p>
                                <div className="mt-2 p-3 bg-gray-800 rounded-md">
                                    <ul className="space-y-1">
                                        <li className="flex items-start">
                                            <span className="text-red-400 mr-2">•</span>
                                            <span><strong>Name:</strong> Liquid Death</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-red-400 mr-2">•</span>
                                            <span><strong>Tagline:</strong> "Murder Your Thirst"</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-red-400 mr-2">•</span>
                                            <span><strong>Packaging:</strong> Tallboy aluminum cans (like cheap beer)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="p-3 bg-green-900/20 rounded-md border border-green-800">
                                <h4 className="font-semibold text-green-400">The Result:</h4>
                                <p>Valued at over $700 million. They didn't change the product; they changed the <em>story</em>.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg border border-blue-800">
                        <h3 className="text-xl font-semibold text-blue-400 mb-3">CASE STUDY 2: APPLE (The Creator)</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-white">The Shift:</h4>
                                <p>1980s computing was about "bits and bytes" - utilitarian and nerdy.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">The Strategy:</h4>
                                <p>Steve Jobs shifted focus from "Processor Speed" to "Human Creativity."</p>
                                <div className="mt-2 p-3 bg-gray-800 rounded-md">
                                    <p className="font-semibold text-blue-400">The "Think Different" Campaign:</p>
                                    <p className="text-sm">Didn't feature a single computer. Featured Gandhi, Einstein, Picasso. Associated brand with genius.</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">The Design Philosophy:</h4>
                                <ul className="mt-2 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        <span><strong>Unboxing:</strong> Apple holds a patent on their box design. The "whoosh" of air is engineered for anticipation.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        <span><strong>Store Design:</strong> Apple Stores are "Town Squares." Genius Bar replaces "Service Desk."</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-3 bg-blue-900/20 rounded-md">
                                <h4 className="font-semibold text-blue-400">The Result:</h4>
                                <p>Apple is not a tech company; it's a luxury lifestyle brand. They sell $1,200 phones that cost $400 to make.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg border border-green-800">
                        <h3 className="text-xl font-semibold text-green-400 mb-3">CASE STUDY 3: PATAGONIA (The Explorer/Caregiver)</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-white">The Paradox:</h4>
                                <p>Fashion is polluting. Patagonia sells clothes but hates consumerism.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">The Strategy (Anti-Marketing):</h4>
                                <p>2011 Black Friday - full-page NY Times ad: "DON'T BUY THIS JACKET."</p>
                                <div className="mt-2 p-3 bg-gray-800 rounded-md">
                                    <p className="text-sm">Explained environmental cost and urged people to repair old clothes instead.</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">The Psychology:</h4>
                                <p>Used "Costly Signaling Theory." By telling people not to give them money, they proved authentic values.</p>
                            </div>
                            <div className="p-3 bg-green-900/20 rounded-md">
                                <h4 className="font-semibold text-green-400">The Result:</h4>
                                <p>Sales rose 30% following the ad. People bought the jacket because they were told not to.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* XIII. AUDIT CHECKLIST */}
            <section id="audit-checklist" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XIII. THE ADVANCED BRAND AUDIT CHECKLIST
                </h2>

                <div className="space-y-6 text-gray-300">
                    <p>
                        How do you know if your brand is rotting? Conduct a semi-annual Brand Audit with this 25-point checklist.
                    </p>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">PART 1: VISUAL CONSISTENCY</h3>
                        <ul className="space-y-3">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <li key={num} className="flex items-start">
                                    <span className="text-yellow-400 font-bold mr-2">{num}.</span>
                                    <span>Do we use exact same Hex codes across all platforms?</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">PART 2: MESSAGING ALIGNMENT</h3>
                        <ul className="space-y-3">
                            {[6, 7, 8, 9, 10].map((num) => (
                                <li key={num} className="flex items-start">
                                    <span className="text-blue-400 font-bold mr-2">{num}.</span>
                                    <span>If we cover the logo, does it sound like us or competitors?</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">PART 3: MARKET POSITION</h3>
                        <ul className="space-y-3">
                            {[11, 12, 13, 14, 15].map((num) => (
                                <li key={num} className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">{num}.</span>
                                    <span>Have we raised prices in last 2 years? (Strong brands can)</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">PART 4: EMPLOYEE ENGAGEMENT</h3>
                        <ul className="space-y-3">
                            {[16, 17, 18, 19, 20].map((num) => (
                                <li key={num} className="flex items-start">
                                    <span className="text-purple-400 font-bold mr-2">{num}.</span>
                                    <span>Can every employee recite the mission statement?</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">PART 5: DIGITAL HEALTH</h3>
                        <ul className="space-y-3">
                            {[21, 22, 23, 24, 25].map((num) => (
                                <li key={num} className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">{num}.</span>
                                    <span>Is our website mobile-responsive with load time under 3 seconds?</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* XIV. FUTURE TRENDS */}
            <section id="future-trends" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XIV. THE FUTURE OF BRANDING: AI, METAVERSE, AND WEB3
                </h2>

                <div className="space-y-6 text-gray-300">
                    <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-purple-500">
                        <p className="text-lg">
                            We are standing on the precipice of the biggest shift in branding since the invention of the internet.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-purple-400 mb-3">1. Hyper-Personalization through AI</h3>
                            <p>Currently branding is "one-to-many." The future is "one-to-one."</p>
                            <div className="mt-3 p-3 bg-purple-900/20 rounded-md">
                                <p className="font-semibold text-purple-400">Prediction:</p>
                                <p className="text-sm">Generative AI will create custom imagery and copy for each individual user in real-time.</p>
                            </div>
                            <div className="mt-3 p-3 bg-red-900/20 rounded-md">
                                <p className="font-semibold text-red-400">The Risk:</p>
                                <p className="text-sm">This erodes shared cultural experience. If everyone sees different Nike, does Nike exist as unified concept?</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">2. Sonic Branding (The Rise of Audio)</h3>
                            <p>As screens disappear (smart speakers, VR), visual logos matter less. Audio logos matter more.</p>
                            <div className="mt-3">
                                <h4 className="font-semibold text-white">The Benchmark:</h4>
                                <ul className="mt-2 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-yellow-400 mr-2">•</span>
                                        <span>Netflix's "Ta-Dum"</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-400 mr-2">•</span>
                                        <span>McDonald's "Ba-da-ba-ba-ba"</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-3 p-3 bg-yellow-900/20 rounded-md">
                                <p className="font-semibold text-yellow-400">The Strategy:</p>
                                <p className="text-sm">Brands must develop "Sonic DNA." What does your brand sound like when it loads? When a transaction completes?</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg border border-green-800">
                            <h3 className="text-xl font-semibold text-green-400 mb-3">3. The Era of "Radical Transparency"</h3>
                            <p>Blockchain technology will force brands to prove their claims.</p>
                            <div className="mt-3 space-y-3">
                                <div className="p-3 bg-gray-800 rounded-md">
                                    <h4 className="font-semibold text-green-400">Supply Chain:</h4>
                                    <p className="text-sm">You can't just say coffee is fair trade. Consumers scan QR codes to trace beans via blockchain.</p>
                                </div>
                                <div className="p-3 bg-red-900/20 rounded-md">
                                    <h4 className="font-semibold text-red-400">Greenwashing:</h4>
                                    <p className="text-sm">Brands that claim eco-friendliness but can't prove it on the ledger will be destroyed.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg border border-blue-800">
                            <h3 className="text-xl font-semibold text-blue-400 mb-3">4. Community-Owned Brands (DAOs)</h3>
                            <p>We're moving from "Company → Consumer" to "Community → Creator."</p>
                            <div className="mt-3 p-3 bg-blue-900/20 rounded-md">
                                <p className="font-semibold text-blue-400">The Shift:</p>
                                <p className="text-sm">Decentralized Autonomous Organizations (DAOs) allow customers to own a piece of brands they love.</p>
                            </div>
                            <div className="mt-3 p-3 bg-gray-800 rounded-md">
                                <p className="font-semibold text-purple-400">New Model:</p>
                                <p className="text-sm">Customers hold governance tokens. They vote on next product line, ad budget. Line between shareholder and customer dissolves.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* XV. PERSONAL BRANDING */}
            <section id="personal-branding" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XV. BUILDING A PERSONAL BRAND (THE CEO'S DUTY)
                </h2>

                <div className="space-y-6 text-gray-300">
                    <p>
                        Finally, the "Brand within the Brand." In the modern era, people trust people more than logos.
                    </p>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-3">A. The Founder's Halo Effect</h3>
                        <p>Elon Musk has more Twitter followers than Tesla, SpaceX, and SolarCity combined.</p>
                        <div className="mt-3 p-3 bg-red-900/20 rounded-md border border-red-800">
                            <p className="font-semibold text-red-400">Warning:</p>
                            <p className="text-sm">If the CEO is invisible, the company feels soulless.</p>
                        </div>
                    </div>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-green-400 mb-3">B. The Pillars of Personal Branding</h3>
                        <div className="grid md:grid-cols-3 gap-4 mt-4">
                            <div className="bg-gray-800 p-4 rounded-md">
                                <h4 className="font-semibold text-blue-400">1. Competence</h4>
                                <p className="text-sm">You must actually be good at what you do.</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-md">
                                <h4 className="font-semibold text-green-400">2. Warmth</h4>
                                <p className="text-sm">You must be relatable. (Share failures, not just wins).</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-md">
                                <h4 className="font-semibold text-yellow-400">3. Frequency</h4>
                                <p className="text-sm">You must show up daily.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-gray-900 p-5 rounded-lg border border-purple-800">
                        <h3 className="text-xl font-semibold text-purple-400 mb-3">C. The Content Matrix for Founders</h3>
                        <div className="grid md:grid-cols-3 gap-4 mt-4">
                            <div className="bg-blue-900/20 p-4 rounded-lg">
                                <h4 className="font-semibold text-blue-400">20% Personal Life</h4>
                                <p className="text-sm">Hobbies, Family - humanizes you.</p>
                            </div>
                            <div className="bg-green-900/20 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-400">50% Industry Expertise</h4>
                                <p className="text-sm">Trends, How-To's - builds authority.</p>
                            </div>
                            <div className="bg-yellow-900/20 p-4 rounded-lg">
                                <h4 className="font-semibold text-yellow-400">30% Company News</h4>
                                <p className="text-sm">Launches, Hiring - sells the business.</p>
                            </div>
                        </div>
                        <div className="mt-4 p-3 bg-red-900/20 rounded-md">
                            <p className="font-semibold text-red-400">Warning:</p>
                            <p className="text-sm">Do not turn your personal brand into a press release machine. No one follows a press release. They follow a journey.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* XVI. PRICING PSYCHOLOGY */}
            <section id="pricing-psychology" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XVI. THE PSYCHOLOGY OF PRICING AND BRANDING
                </h2>

                <div className="space-y-6 text-gray-300">
                    <p>
                        Your price is part of your brand story. It is a signal, not just a math equation.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">1. Price as a Quality Cue</h3>
                            <p>If you sell "Premium Consulting" for $20/hour, no one will buy it. Low price contradicts "Premium" promise.</p>
                            <div className="mt-3 p-3 bg-yellow-900/20 rounded-md">
                                <h4 className="font-semibold text-yellow-400">The Chivas Regal Effect:</h4>
                                <p className="text-sm">The scotch brand doubled price without changing product. Sales exploded. Consumers assumed higher price meant higher quality.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-400 mb-3">2. Decoy Pricing</h3>
                            <p>Brands use pricing structures to guide choices.</p>
                            <div className="mt-3 p-3 bg-blue-900/20 rounded-md">
                                <p className="font-semibold text-blue-400">Example:</p>
                                <ul className="mt-2 text-sm space-y-1">
                                    <li>Digital Subscription: $50</li>
                                    <li>Print Subscription: $120</li>
                                    <li>Print + Digital: $120</li>
                                </ul>
                                <p className="mt-2 text-sm">Option B is the "Decoy." It exists to make Option C look like an incredible deal.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-400 mb-3">3. The Power of "Anchoring"</h3>
                            <p>When Steve Jobs launched iPad, he showed "$999" first, then revealed "$499."</p>
                            <div className="mt-3 p-3 bg-green-900/20 rounded-md">
                                <p className="font-semibold text-green-400">Psychology:</p>
                                <p className="text-sm">$499 is expensive, but because he "anchored" at $999 first, it felt like a bargain. The audience cheered.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};