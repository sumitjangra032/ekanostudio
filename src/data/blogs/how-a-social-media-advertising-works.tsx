import { TOCItem } from "@/components/layout/BlogLayout";
import { BLOG_IMAGES } from "@/constants/blog-images";

export const PAID_SOCIAL_DATA: {
    title: string;
    subtitle: string;
    tocItems: TOCItem[];
    content: React.ReactNode;
} = {
    title: "The Paid Social Master Class",
    subtitle: "Creative, Data Infrastructure, and Scaling Strategies for 2024",
    tocItems: [
        {
            id: "part-1-strategy",
            label: "PART 1: THE STRATEGY (LANDSCAPE & ALGORITHM)",
            subItems: [
                { id: "introduction", label: "I. Introduction: The Death of Organic Reach" },
                { id: "platform-landscape", label: "II. The Platform Landscape: Where is Your Money?" },
                { id: "auction-mechanics", label: "III. The Mechanics of the Auction: How the Algorithm Decides" },
                { id: "campaign-architecture", label: "IV. Campaign Architecture: The 3-Level Structure" },
            ]
        },
        {
            id: "part-2-tracking",
            label: "PART 2: THE TRACKING (PIXELS & SIGNAL)",
            subItems: [
                { id: "tracking-crisis", label: "V. The Tracking Crisis: iOS14 and the Death of Cookies" },
                { id: "capi", label: "VI. Server-Side Tracking (CAPI)" },
                { id: "attribution-windows", label: "VII. Attribution Windows: Click vs. View" },
                { id: "learning-phase", label: "VIII. The \"Learning Phase\" and Optimization Events" },
            ]
        },
        {
            id: "part-3-creative",
            label: "PART 3: THE CREATIVE (THE NEW TARGETING)",
            subItems: [
                { id: "creative-as-targeting", label: "IX. Creative is the New Targeting" },
                { id: "video-framework", label: "X. The Hook-Hold-Reward Video Framework" },
                { id: "asset-types", label: "XI. UGC vs. Studio vs. Static" },
                { id: "copywriting-psychology", label: "XII. Ad Copywriting Psychology" },
            ]
        },
        {
            id: "part-4-optimization",
            label: "PART 4: THE OPTIMIZATION (SCALING & METRICS)",
            subItems: [
                { id: "metric-hierarchy", label: "XIII. The Metric Hierarchy (Diagnosing the Patient)" },
                { id: "scaling-strategies", label: "XIV. Scaling Strategies: Horizontal vs. Vertical" },
                { id: "retargeting", label: "XV. Retargeting Strategies (The Funnel)" },
                { id: "conclusion", label: "XVI. Conclusion: The Infinite Casino" },
            ]
        },
    ],
    content: (
        <>
            {/* I. INTRODUCTION */}
            <section id="introduction" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    I. INTRODUCTION: THE DEATH OF ORGANIC REACH
                </h2>

                <div className="space-y-4 text-gray-300">
                    <p>
                        In 2012, if you posted on a Facebook Business Page with 10,000 followers, about 1,600 of them saw it (16% reach).
                    </p>
                    <p>
                        Today, if you post to that same page, perhaps 200 people see it (2% reach).
                    </p>
                    <p>
                        Organic social media is no longer a distribution channel for businesses; it is a "Pay-to-Play" environment. The platforms (Meta, TikTok, LinkedIn) are publicly traded companies. Their primary product is not the newsfeed; their product is the user&apos;s attention, and you are the customer renting it.
                    </p>
                    <p>
                        Paid Social is the act of buying guaranteed visibility.
                    </p>
                    <p>
                        However, unlike Google Ads (where you capture <em className="italic">Intent</em>—people searching for a solution), Social Ads are about generating <em className="italic">Demand</em> (interrupting people who didn&apos;t know they wanted your solution).
                    </p>

                    <div className="bg-gray-900 p-4 lg:p-6 rounded-lg mt-6">
                        <h3 className="text-xl font-semibold text-white mb-3">The Reality of 2024:</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong className="text-green-400">Saturation:</strong> Costs (CPM) have risen 300% in the last 5 years.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong className="text-green-400">Privacy:</strong> Apple&apos;s iOS14 update blinded advertisers, making tracking harder.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong className="text-green-400">Creative First:</strong> The algorithm is now so smart that "targeting settings" matter less than "creative execution." If your video is boring, no amount of targeting hacks will save you.</span>
                            </li>
                        </ul>
                        <p className="mt-4 pt-4 border-t border-gray-700">
                            This master class is not about boosting posts. It is about building a scalable customer acquisition machine.
                        </p>
                    </div>
                </div>
            </section>

            {/* II. THE PLATFORM LANDSCAPE */}
            <section id="platform-landscape" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    II. THE PLATFORM LANDSCAPE: WHERE IS YOUR MONEY?
                </h2>

                <div className="space-y-4 text-gray-300">
                    <p>
                        You cannot be everywhere. You must choose the platform that matches your Unit Economics and Audience.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">A. Meta (Facebook & Instagram)</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong className="text-green-400">The Juggernaut:</strong> 3+ Billion monthly users.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong className="text-green-400">Strengths:</strong> The most advanced AI algorithm in the world (Advantage+). Incredible scaling ability. Works for almost every B2C product and many B2B products.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong className="text-green-400">Weakness:</strong> High CPMs (Cost Per Mille/Thousand impressions) due to competition.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong className="text-green-400">Verdict:</strong> The foundation of any paid social strategy. Start here.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">B. TikTok</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong className="text-green-400">The Wild West:</strong> Over 1 Billion users.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong className="text-green-400">Strengths:</strong> Virality. Cheap impressions. Unrivaled for Gen Z and younger Millennials.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong className="text-green-400">Weakness:</strong> Creative fatigue. You need to produce new videos every week because ads "burn out" in days. High volume of low-quality leads.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong className="text-green-400">Verdict:</strong> Mandatory for B2C brands under $100 price point.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">C. LinkedIn</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong className="text-green-400">The Boardroom:</strong> 900 Million professionals.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong className="text-green-400">Strengths:</strong> Pinpoint B2B targeting. You can target by "Job Title," "Company Size," and "Revenue."</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong className="text-green-400">Weakness:</strong> Extremely expensive. CPC (Cost Per Click) can be $10-$20 (compared to $1 on Meta).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong className="text-green-400">Verdict:</strong> Only for High-Ticket B2B ($5k+ LTV) or SaaS.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">D. Pinterest</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong className="text-green-400">The Shopping Mall:</strong> Users come here specifically to plan purchases (Home decor, Weddings, Fashion).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong className="text-green-400">Strengths:</strong> High intent. Longer shelf-life of ads.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong className="text-green-400">Weakness:</strong> Very specific demographics (mostly women).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong className="text-green-400">Verdict:</strong> Niche, but highly profitable for e-commerce visual brands.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* III. THE MECHANICS OF THE AUCTION */}
            <section id="auction-mechanics" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    III. THE MECHANICS OF THE AUCTION: HOW THE ALGORITHM DECIDES
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        Why does your competitor&apos;s ad appear instead of yours? It is not just about who pays the most.
                        Meta and TikTok use an "Auction Formula" to decide who wins the impression.
                    </p>
                    <div className="bg-gray-800 p-4 rounded-md font-mono text-green-400 text-sm md:text-base">
                        [Bid Amount] x [Estimated Action Rate] + [User Value] = Total Value
                    </div>
                    <ul className="space-y-3 mt-4">
                        <li className="flex items-start">
                            <span className="text-green-400 font-bold mr-2">1.</span>
                            <span><strong>Bid Amount:</strong> How much are you willing to pay? (Usually automated).</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-400 font-bold mr-2">2.</span>
                            <span><strong>Estimated Action Rate (EAR):</strong> The algorithm&apos;s prediction: "How likely is this specific user to click/buy this ad?"</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-400 font-bold mr-2">3.</span>
                            <span><strong>User Value (Quality):</strong> Is the post-click experience good?</span>
                        </li>
                    </ul>
                    <div className="bg-gray-900 border-l-4 border-green-500 pl-4 py-3 rounded-r-md">
                        <p className="font-semibold text-green-400">The Implication:</p>
                        <p>If you have great creative (High EAR) and a fast website (High User Value), you can actually <em className="italic">outbid</em> a competitor who has a higher budget but terrible ads.</p>
                        <p className="mt-2"><strong>Rule:</strong> Cheap creative = Expensive ads. Great creative = Discounted ads.</p>
                    </div>
                </div>
            </section>

            {/* IV. CAMPAIGN ARCHITECTURE */}
            <section id="campaign-architecture" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    IV. CAMPAIGN ARCHITECTURE: THE 3-LEVEL STRUCTURE
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        Every ad account follows a strict hierarchy. If you mess this up, your data gets fragmented, and the AI cannot learn.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div className="border border-gray-800 rounded-lg p-4">
                            <h3 className="text-xl font-bold text-white mb-2">Level 1: The Campaign (The "What")</h3>
                            <p>Here, you choose your <strong>Objective</strong>.</p>
                            <ul className="mt-2 space-y-1 ml-4">
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>Awareness:</strong> "Show this to as many people as possible." (Vanity metrics).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>Traffic:</strong> "Get people to click." (Often gets low-quality bot traffic).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>Leads:</strong> "Get people to fill out a form."</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>Sales (Conversions):</strong> "Get people to buy." (The Holy Grail).</span>
                                </li>
                            </ul>
                            <p className="mt-3"><strong>Strategy:</strong> 90% of your budget should go to "Sales/Conversions." Do not waste money on "Traffic" campaigns hoping they will buy. Optimize for the outcome you actually want.</p>
                        </div>

                        <div className="border border-gray-800 rounded-lg p-4 ml-4 lg:ml-8">
                            <h3 className="text-xl font-bold text-white mb-2">Level 2: The Ad Set (The "Who" and "Where")</h3>
                            <p>Here, you define:</p>
                            <ul className="mt-2 space-y-1 ml-4">
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>Budget:</strong> Daily ($50/day) vs. Lifetime ($1000 total).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>Schedule:</strong> Start/End dates.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>Audience:</strong> Location, Age, Interests, Lookalikes.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>Placements:</strong> Feed, Stories, Reels, Right Column.</span>
                                </li>
                            </ul>
                            <div className="mt-3 bg-gray-800 p-3 rounded-md">
                                <p className="font-semibold text-green-400">Modern Strategy: "Broad Targeting"</p>
                                <p className="mt-1">In the past, we targeted "Women, 25-30, who like Yoga and Dog Food." Today, we target "Women, 25-50." We let the AI find the Yoga lovers based on who clicks the ad. Constricting the audience too much actually hurts performance in 2024.</p>
                            </div>
                        </div>

                        <div className="border border-gray-800 rounded-lg p-4 ml-8 lg:ml-16">
                            <h3 className="text-xl font-bold text-white mb-2">Level 3: The Ad (The "Creative")</h3>
                            <p>Here, you upload the image/video and write the copy.</p>
                            <p className="mt-2"><strong>Dynamic Creative Testing (DCT):</strong> A feature where you upload 3 Images, 2 Headlines, and 2 Primary Texts. The Algorithm mixes and matches them to find the winning combination for each user.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* V. THE TRACKING CRISIS */}
            <section id="tracking-crisis" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    V. THE TRACKING CRISIS: iOS14 AND THE DEATH OF COOKIES
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        For a decade, Facebook advertising was easy. You placed a "Pixel" (a line of code) on your website. When a user clicked an ad and bought a product, the Pixel told Facebook, and Facebook reported the sale.
                    </p>
                    <p>
                        Then came Apple&apos;s App Tracking Transparency (ATT) framework in iOS14.
                        Apple gave iPhone users a popup: "Allow Facebook to track your activity across other companies' apps and websites?"
                        90% of users clicked "Ask App Not to Track."
                    </p>
                    <div className="bg-gray-900 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-2">The Result: "Signal Loss."</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-red-400 mr-2">•</span>
                                <span>Meta can no longer see what happens on your website for those users.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-400 mr-2">•</span>
                                <span>A user clicks your ad, buys $100 worth of goods, and Meta reports: $0 Revenue.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-400 mr-2">•</span>
                                <span>Your ROAS (Return on Ad Spend) looks terrible, so you turn off a profitable ad.</span>
                            </li>
                        </ul>
                    </div>
                    <p>
                        This is the "Data Blindfold." To succeed in 2024 and beyond, you must build a new tracking infrastructure that does not rely on browser cookies.
                    </p>
                </div>
            </section>

            {/* VI. SERVER-SIDE TRACKING (CAPI) */}
            <section id="capi" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VI. SERVER-SIDE TRACKING (CAPI)
                </h2>
                <div className="space-y-6 text-gray-300">
                    <p>
                        The solution to cookie blocking is moving tracking from the "Client Side" (Browser) to the "Server Side" (Backend).
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Pixel (Client-Side)</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>How it works:</strong> The user&apos;s Chrome/Safari browser fires the event.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>The problem:</strong> Ad Blockers, Brave Browser, and iOS settings block these scripts.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">B. Conversions API (CAPI) - Server-Side</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>How it works:</strong> Your website server talks directly to Meta&apos;s server.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>The Benefit:</strong> Browsers cannot block this. It bypasses Ad Blockers entirely.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-md">
                        <h4 className="font-semibold text-white mb-2">The Flow:</h4>
                        <ol className="list-decimal ml-6 space-y-2">
                            <li>User buys a product.</li>
                            <li>Your Shopify/WooCommerce server records the transaction in its database.</li>
                            <li>Your server sends an encrypted signal to Meta: "User X (Hashed Email) bought Item Y."</li>
                        </ol>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white mb-3">Implementation Strategy:</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong>Redundant Setup:</strong> Use BOTH the Pixel and CAPI.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span>Meta will "Deduplicate" the events. (If it sees the sale from both the Pixel and CAPI, it counts it as one sale).</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong>Result:</strong> You recover about 15-20% of the data lost to iOS14.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-3">C. UTM Parameters (The Backup Truth)</h3>
                        <p>Never rely 100% on the ad platform&apos;s data. They grade their own homework.</p>
                        <ul className="mt-2 space-y-2">
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span>You must append UTMs to every ad link.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span>Example: <code className="bg-gray-800 px-2 py-1 rounded text-sm">website.com?utm_source=facebook&utm_medium=paid&utm_campaign=summer_sale&utm_content=video_01</code></span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span>Verify in Google Analytics (GA4): Compare what Facebook Ads Manager says (e.g., 50 sales) with what GA4 says for that Source/Medium (e.g., 40 sales). The truth is usually somewhere in the middle.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* VII. ATTRIBUTION WINDOWS */}
            <section id="attribution-windows" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VII. ATTRIBUTION WINDOWS: CLICK VS. VIEW
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        "Attribution" is the rulebook for who gets credit for a sale.
                    </p>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-white mb-3">A. The Windows</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">1.</span>
                                <span><strong>1-Day Click:</strong> Credit is given only if they buy within 24 hours of clicking.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">2.</span>
                                <span><strong>7-Day Click:</strong> Credit is given if they buy within 7 days of clicking.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">3.</span>
                                <span><strong>1-Day View:</strong> Credit is given if they <em>saw</em> the ad (didn&apos;t click), but went to your site later that day and bought.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-2">B. The Controversy (View-Through Conversions)</h3>
                        <p>Meta defaults to "7-Day Click + 1-Day View."</p>
                        <div className="mt-2 p-3 bg-gray-800 rounded-md">
                            <p className="font-semibold">Scenario:</p>
                            <p>A user scrolls past your ad (doesn&apos;t click). Later, they receive an email from you and buy.</p>
                            <ul className="mt-2 space-y-1">
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">•</span>
                                    <span>Meta&apos;s Report: "We generated that sale because they saw our ad first!"</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    <span>Email Platform&apos;s Report: "We generated that sale because they clicked the email!"</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span>Reality: Both platforms claim the same sale. Your total reported revenue is inflated.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-white mb-3">C. The Strategy</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong>For Low Ticket Items (&lt;$50):</strong> Use "7-Day Click / 1-Day View." Impulse buys happen fast.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong>For High Ticket Items (&gt;$500):</strong> View-through is dangerous. It over-credits the platform. You might want to analyze performance based on "Click Only" to see who actually took action.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-2">D. Third-Party Attribution Tools (Triple Whale / Northbeam)</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span>If you spend &gt;$10k/month, platform data is too messy.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span>Third-party tools use "First-Party Data" pixels to build a "Customer Journey." They can tell you: "User clicked a Facebook Ad, then a Google Ad, then an Email, then bought."</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span>This allows you to understand the "Assist" value of your top-of-funnel ads.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* VIII. LEARNING PHASE */}
            <section id="learning-phase" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VIII. THE "LEARNING PHASE" AND OPTIMIZATION EVENTS
                </h2>
                <div className="space-y-6 text-gray-300">
                    <p>
                        The algorithm is a machine learning engine. It needs data to learn who your customer is.
                    </p>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white mb-3">A. The "50 Conversions" Rule</h3>
                        <p>
                            Meta explicitly states that an Ad Set needs ~50 conversion events within a 7-day period to exit the "Learning Phase."
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-400 mb-2">Before 50 Conversions:</h4>
                                <p>The AI is guessing. Performance is volatile (CPA swings wildly).</p>
                            </div>
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-400 mb-2">After 50 Conversions:</h4>
                                <p>The AI knows who to target. Performance stabilizes.</p>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-red-900/30 border border-red-800 rounded-lg">
                            <p className="font-semibold text-red-400">The Budget Trap:</p>
                            <p>If your CPA (Cost Per Acquisition) is $50, you need $2,500/week ($50 x 50) per Ad Set to exit the learning phase.</p>
                            <p className="mt-2">If you only have $500/week, you will never exit learning.</p>
                            <p className="mt-2 font-semibold">Solution: Consolidate! Do not run 10 Ad Sets with small budgets. Run 1 Ad Set with a consolidated budget.</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-white mb-3">B. Optimization Events (What do you want?)</h3>
                        <p>You tell the algorithm what to aim for.</p>
                        <ul className="mt-2 space-y-2">
                            <li className="flex items-start">
                                <span className="text-yellow-400 font-bold mr-2">1.</span>
                                <span><strong>Purchase (The Gold Standard):</strong> Always optimize for Purchase if you can.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-yellow-400 font-bold mr-2">2.</span>
                                <span><strong>Add to Cart (ATC):</strong> If you have a small budget and can&apos;t get 50 Purchases, optimize for ATC. It gives the AI more data points (since there are more ATCs than Purchases).</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-yellow-400 font-bold mr-2">3.</span>
                                <span><strong>Landing Page View:</strong> Generally useless for sales. Optimized for bots and "happy clickers."</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-red-800">
                        <h3 className="text-xl font-semibold text-white mb-3">C. "Resetting" The Algorithm</h3>
                        <p>Once an ad set is performing, DO NOT TOUCH IT.</p>
                        <div className="mt-2">
                            <h4 className="font-semibold text-red-400">Significant Edits reset the Learning Phase:</h4>
                            <ul className="mt-1 space-y-1 ml-4">
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">•</span>
                                    <span>Changing the creative.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">•</span>
                                    <span>Changing the target audience.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">•</span>
                                    <span>Pausing for &gt;7 days.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">•</span>
                                    <span>Changing budget by &gt;20% at once.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-3 p-3 bg-gray-800 rounded-md">
                            <p className="font-semibold text-green-400">Scaling Rule:</p>
                            <p>If you want to increase budget, do it by 20% every 2-3 days. If you double the budget overnight ($100 → $200), you break the algorithm&apos;s logic, and your CPA will skyrocket.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* IX. CREATIVE IS THE NEW TARGETING */}
            <section id="creative-as-targeting" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    IX. CREATIVE IS THE NEW TARGETING
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        Before 2021, media buyers spent 80% of their time in Ads Manager, tweaking audiences, ages, and interests. They were "hackers."
                        Today, the algorithm is smarter than any human buyer. The AI knows who is likely to buy dog food based on billions of signals that you cannot see.
                    </p>
                    <p className="text-xl font-semibold text-green-400">
                        In the modern era, <strong>your creative acts as your targeting.</strong>
                    </p>

                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">A. The "Dog Whistle" Effect</h3>
                            <p>
                                If you run a broad audience ad targeting everyone in the USA, but your video shows a specific problem only new mothers face, only new mothers will stop scrolling. The creative filters out the wrong people and attracts the right ones.
                            </p>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">B. Creative Fatigue & The "Testing Engine"</h3>
                            <p>
                                On TikTok and Meta Reels, a winning ad might last 2 weeks before fatigue sets in (CPAs rise as everyone has seen it).
                            </p>
                            <ul className="mt-2 space-y-1">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>The implication:</strong> You cannot launch 5 ads and go on vacation. You need a "Creative Testing Engine."</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>Benchmark:</strong> You should aim to launch 3–5 net new creative concepts every single week to stay ahead of fatigue.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* X. HOOK-HOLD-REWARD VIDEO FRAMEWORK */}
            <section id="video-framework" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    X. THE HOOK-HOLD-REWARD VIDEO FRAMEWORK
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        Video is dominant on social. But "good video" doesn&apos;t mean expensive production; it means structured storytelling designed for an ADHD brain.
                    </p>
                    <p className="text-lg font-semibold">
                        Every winning video ad follows a three-part structure.
                    </p>

                    <div className="grid lg:grid-cols-3 gap-6 mt-6">
                        <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
                            <h3 className="text-xl font-bold text-green-400 mb-2">1. The Hook (0-3 Seconds): Stop the Scroll</h3>
                            <p className="text-sm mb-2">
                                If you don&apos;t grab them in 3 seconds, you have lost them forever. Do not start with your logo. Do not start with a slow fade-in.
                            </p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>Visual Arrest:</strong> Do something weird visually. (e.g., A person jumping into a pool of ice; dropping the product).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>The "Negative Hook":</strong> Tell them what they are doing wrong. <em>"Stop cleaning your kitchen like this."</em></span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>The "Us vs. Them" Hook:</strong> Call out the enemy. <em>"Why traditional banks are ripping you off."</em></span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
                            <h3 className="text-xl font-bold text-green-400 mb-2">2. The Hold (3-15 Seconds): Retain Attention</h3>
                            <p className="text-sm mb-2">
                                You stopped them. Now you have to keep them.
                            </p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>Agitate the Problem:</strong> Twist the knife. Show them the pain of their current situation.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>Pacing:</strong> Use quick cuts. A shot should rarely last longer than 2 seconds. Use captions for sound-off viewing.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>Introduce the Solution:</strong> Show your product as the hero that solves the agitated problem.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
                            <h3 className="text-xl font-bold text-green-400 mb-2">3. The Reward (15-30+ Seconds): The Payoff & CTA</h3>
                            <p className="text-sm mb-2">
                                What do they get out of it?
                            </p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>Social Proof:</strong> Show a testimonial or a 5-star review graphic.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>The Offer:</strong> "Get 20% off your first order."</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>The CTA (Call to Action):</strong> Be explicit. "Click Shop Now to get yours." Don&apos;t assume they know what to do.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* XI. ASSET TYPES */}
            <section id="asset-types" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XI. UGC VS. STUDIO VS. STATIC
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        You need a mixed diet of asset types. Relying on only one is a recipe for failure.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-400 mb-3">UGC (User Generated Content) - The Trust Engine</h3>
                            <p className="text-sm">
                                UGC looks like a TikTok or Story made by a real person, not a brand. It looks "lo-fi" (shot on an iPhone).
                            </p>
                            <div className="mt-3">
                                <p className="font-semibold text-white text-sm">Why it works:</p>
                                <p className="text-sm">Ad blindness. People scroll past anything that looks like a polished TV commercial. UGC feels native to the feed. It builds immense trust because it feels like a peer recommendation.</p>
                            </div>
                            <div className="mt-3 p-3 bg-gray-800 rounded-md">
                                <p className="font-semibold text-green-400 text-sm">Best Use Case:</p>
                                <p className="text-sm">Top of Funnel (Cold audiences) on TikTok, Reels, and Stories.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-400 mb-3">Studio/High-Fidelity - The Authority Engine</h3>
                            <p className="text-sm">
                                Polished, professional videography.
                            </p>
                            <div className="mt-3">
                                <p className="font-semibold text-white text-sm">Why it works:</p>
                                <p className="text-sm">It signals legitimacy and premium quality. Expensive products sometimes struggle with UGC because it makes the brand look cheap.</p>
                            </div>
                            <div className="mt-3 p-3 bg-gray-800 rounded-md">
                                <p className="font-semibold text-green-400 text-sm">Best Use Case:</p>
                                <p className="text-sm">Luxury products, complex B2B software demos, and retargeting (showing the product details close up).</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-400 mb-3">Static Images - The Scale Engine</h3>
                            <p className="text-sm">
                                Images are not dead. They are often cheaper to produce and easier to scale.
                            </p>
                            <ul className="mt-3 text-sm space-y-1">
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span>The "Us vs. Them" Chart</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span>The "Press Quote" Ad</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span>The Offer Ad</span>
                                </li>
                            </ul>
                            <div className="mt-3 p-3 bg-gray-800 rounded-md">
                                <p className="font-semibold text-green-400 text-sm">Best Use Case:</p>
                                <p className="text-sm">Retargeting and bottom-of-funnel conversion campaigns.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* XII. COPYWRITING PSYCHOLOGY */}
            <section id="copywriting-psychology" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XII. AD COPYWRITING PSYCHOLOGY
                </h2>
                <div className="space-y-6 text-gray-300">
                    <p>
                        People on social media do not read; they scan. Your copy must be punchy and complement the creative, not repeat it.
                    </p>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white mb-3">A. The Primary Text (The "Caption")</h3>
                        <p>
                            This is the text above the image on Facebook or below it on Instagram. Meta hides text after two lines behind a "...See More" button.
                        </p>
                        <p className="mt-2 font-semibold text-green-400">
                            Strategy: You must put your biggest hook in the first sentence.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4 mt-4">
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <h4 className="font-semibold text-white mb-2">1. The "Problem/Solution" Angle</h4>
                                <p className="text-sm">Identify the pain, introduce the product as the salve.</p>
                                <p className="text-sm italic mt-2 text-gray-400">"Tired of back pain after a long day at the desk? Our ergonomic chair fixes posture instantly."</p>
                            </div>
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <h4 className="font-semibold text-white mb-2">2. The "Social Proof" Angle</h4>
                                <p className="text-sm">Lead with the herd.</p>
                                <p className="text-sm italic mt-2 text-gray-400">"Over 50,000 customers have switched to [Brand] for better sleep. Here is why we have 4.9 stars."</p>
                            </div>
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <h4 className="font-semibold text-white mb-2">3. The "FOMO/Urgency" Angle</h4>
                                <p className="text-sm">Lead with scarcity.</p>
                                <p className="text-sm italic mt-2 text-gray-400">"We sold out in 24 hours last time. The restock is finally here. Don't miss out."</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-white mb-3">B. The Headline (The Bold Text)</h3>
                        <p>
                            This appears below the image near the CTA button on Facebook. It is the most important text element after the creative itself.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-green-900/20 p-4 rounded-lg border border-green-800">
                                <h4 className="font-semibold text-green-400 mb-2">Good Headlines:</h4>
                                <ul className="space-y-1">
                                    <li className="text-sm">"30% Off Ends Tonight."</li>
                                    <li className="text-sm">"The Last Pillow You&apos;ll Ever Buy."</li>
                                    <li className="text-sm">"Rated #1 by TechCrunch."</li>
                                </ul>
                            </div>
                            <div className="bg-red-900/20 p-4 rounded-lg border border-red-800">
                                <h4 className="font-semibold text-red-400 mb-2">Bad Headlines:</h4>
                                <ul className="space-y-1">
                                    <li className="text-sm">"Welcome to Our Store." (Boring)</li>
                                    <li className="text-sm">"Our Proprietary patented technology." (Too long, nobody cares)</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-3 font-semibold">Keep it short: Under 5 words is ideal. Focus on the benefit or the offer.</p>
                    </div>

                    <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-3">C. The CTA Button</h3>
                        <p>Don&apos;t overthink this.</p>
                        <ul className="mt-2 space-y-2">
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong>For E-commerce:</strong> Always use "Shop Now."</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong>For Lead Gen/SaaS:</strong> Use "Learn More" or "Sign Up."</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong>Avoid generic buttons</strong> like "Watch More" unless you just want video views.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* XIII. THE METRIC HIERARCHY */}
            <section id="metric-hierarchy" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XIII. THE METRIC HIERARCHY (DIAGNOSING THE PATIENT)
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        A common mistake is obsessing over ROAS (Return on Ad Spend). ROAS is a "Lagging Indicator." It tells you what happened, but not <em>why</em> it happened. To fix a broken campaign, you must look at the "Waterfall of Metrics."
                    </p>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-white mb-4">A. The Waterfall Diagnostic Method</h3>
                        <p className="mb-4">
                            If your ads aren&apos;t selling, look at the metrics in this specific order to find the bottleneck:
                        </p>

                        <div className="space-y-6">
                            <div className="border-l-4 border-blue-500 pl-4 py-3">
                                <h4 className="text-lg font-semibold text-blue-400">1. CPM (Cost Per Mille/Thousand Impressions)</h4>
                                <p>The cost to show the ad.</p>
                                <div className="mt-2 bg-gray-800 p-3 rounded-md">
                                    <p className="font-semibold text-red-400">High CPM? (&gt; $25-40):</p>
                                    <p>Your audience is too small, or the platform (competition) is expensive today.</p>
                                    <p className="font-semibold text-green-400 mt-1">Fix: Broaden the audience. Remove interest targeting.</p>
                                </div>
                            </div>

                            <div className="border-l-4 border-purple-500 pl-4 py-3">
                                <h4 className="text-lg font-semibold text-purple-400">2. CTR (Click-Through Rate - Link Clicks)</h4>
                                <p>The hook.</p>
                                <div className="mt-2 bg-gray-800 p-3 rounded-md">
                                    <p className="font-semibold text-red-400">Low CTR? (&lt; 1%):</p>
                                    <p>Your creative is boring. People are scrolling past it.</p>
                                    <p className="font-semibold text-green-400 mt-1">Fix: Change the first 3 seconds of the video or the headline.</p>
                                </div>
                            </div>

                            <div className="border-l-4 border-yellow-500 pl-4 py-3">
                                <h4 className="text-lg font-semibold text-yellow-400">3. CPC (Cost Per Click)</h4>
                                <p>The cost of traffic.</p>
                                <div className="mt-2 bg-gray-800 p-3 rounded-md">
                                    <p className="font-semibold text-red-400">High CPC? (&gt; $2-3):</p>
                                    <p>A combination of high CPM and low CTR. You are paying too much for visitors.</p>
                                    <p className="font-semibold text-green-400 mt-1">Fix: Improve creative to lower traffic costs.</p>
                                </div>
                            </div>

                            <div className="border-l-4 border-orange-500 pl-4 py-3">
                                <h4 className="text-lg font-semibold text-orange-400">4. Conversion Rate (CVR)</h4>
                                <p>The landing page performance.</p>
                                <div className="mt-2 bg-gray-800 p-3 rounded-md">
                                    <p className="font-semibold text-red-400">Low CVR? (&lt; 1-2%):</p>
                                    <p>Your ad worked (they clicked), but your website failed.</p>
                                    <p className="font-semibold text-green-400 mt-1">Fix: Speed up the site, simplify the checkout, or align the landing page copy with the ad copy.</p>
                                </div>
                            </div>

                            <div className="border-l-4 border-red-500 pl-4 py-3">
                                <h4 className="text-lg font-semibold text-red-400">5. CPA (Cost Per Acquisition)</h4>
                                <p>The result.</p>
                                <div className="mt-2 bg-gray-800 p-3 rounded-md">
                                    <p className="font-semibold">High CPA?</p>
                                    <p>The sum of all errors above.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                            <h4 className="text-xl font-semibold text-white mb-2">Summary:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">•</span>
                                    <span><strong>If CTR is low → Blame the Media Buyer/Creative.</strong></span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">•</span>
                                    <span><strong>If CVR is low → Blame the Web Developer/CRO Strategist.</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* XIV. SCALING STRATEGIES */}
            <section id="scaling-strategies" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XIV. SCALING STRATEGIES: HORIZONTAL VS. VERTICAL
                </h2>
                <div className="space-y-6 text-gray-300">
                    <p>
                        You have a winning ad with a 3.0 ROAS. You want to spend more money. If you just change the budget from $50 to $5,000, you will crash the performance. Scaling requires finesse.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-400 mb-3">A. Vertical Scaling (The "Slow & Steady")</h3>
                            <p>This involves increasing the budget on <em>existing</em> winning ad sets.</p>
                            <div className="mt-3 p-3 bg-gray-800 rounded-md">
                                <h4 className="font-semibold text-white">The 20% Rule:</h4>
                                <p>Increase the budget by 20% every 48-72 hours.</p>
                            </div>
                            <p className="mt-3">Why? The algorithm needs stability. A massive budget jump forces it to re-enter the "Learning Phase" to find more people, often resulting in inefficient spend.</p>
                            <div className="mt-3 p-3 bg-red-900/30 rounded-md border border-red-800">
                                <p className="font-semibold text-red-400">Risk:</p>
                                <p>Eventually, every audience hits a "Point of Diminishing Returns" where CPA rises as spend rises.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-400 mb-3">B. Horizontal Scaling (The "Wide Net")</h3>
                            <p>This involves creating <em>new</em> ad sets to find <em>new</em> pockets of users.</p>
                            <div className="mt-3">
                                <h4 className="font-semibold text-white">Strategy: Duplicate your winning creative into new audiences.</h4>
                                <ul className="mt-2 space-y-1 ml-4">
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-2">•</span>
                                        <span>Lookalikes: 1% LAL, 5% LAL of Purchasers.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-2">•</span>
                                        <span>Interest Stacks: Group competitors or relevant topics.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-2">•</span>
                                        <span>Broad: No targeting (Age/Gender only).</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-3 p-3 bg-green-900/20 rounded-md border border-green-800">
                                <p className="font-semibold text-green-400">Benefit:</p>
                                <p>This allows you to spend more money without saturating a single audience bucket.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-5 bg-gray-900 rounded-lg">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-3">C. Cost Caps (Manual Bidding) - The Advanced Move</h3>
                        <p>
                            Instead of "Lowest Cost" (telling Meta "Spend my $500 no matter what"), you use "Cost Cap" (telling Meta "Spend my $500 ONLY if you can get me purchases for under $40").
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-green-900/20 p-4 rounded-lg border border-green-800">
                                <h4 className="font-semibold text-green-400">Pros:</h4>
                                <p>Protects your profit margin. If the auction is expensive that day, Meta won&apos;t spend your money.</p>
                            </div>
                            <div className="bg-red-900/20 p-4 rounded-lg border border-red-800">
                                <h4 className="font-semibold text-red-400">Cons:</h4>
                                <p>If your cap is too low, the ad won&apos;t deliver at all (Zero spend).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* XV. RETARGETING STRATEGIES */}
            <section id="retargeting" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XV. RETARGETING STRATEGIES (THE FUNNEL)
                </h2>
                <div className="space-y-6 text-gray-300">
                    <p>
                        Retargeting (showing ads to people who already know you) used to be the gold mine. Post-iOS14, audiences are smaller, but it is still vital for closing deals.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-400 mb-3">1. MOF (Middle of Funnel) - The Engagers</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>Audience:</strong> People who watched 50% of your video or engaged with your Instagram/Facebook page (365 Days).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>Creative:</strong> "More Info" / "Social Proof." Show them reviews, unboxings, or deep-dives into product features.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>Why?</strong> These sources (Video Views/IG Engagement) are "On-Platform" data, so they are NOT affected by iOS14 tracking loss.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-red-400 mb-3">2. BOF (Bottom of Funnel) - The Shoppers</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>Audience:</strong> Website Visitors (30 Days), Add to Cart (14 Days), Initiate Checkout (7 Days).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>Creative:</strong> "The Offer" / "Objection Handling."</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>Ad Copy:</strong> "Did you forget something?" "Here is 10% off to finish your order." "Free Shipping ends tonight."</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 p-5 bg-gray-900 rounded-lg border border-yellow-800">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-3">B. The Frequency Warning</h3>
                        <p>
                            Retargeting audiences are small. If you throw $500/day at an audience of 1,000 people, they will see your ad 50 times a day. They will hate you.
                        </p>
                        <ul className="mt-3 space-y-2">
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong>Monitor "Frequency" Metric:</strong> Keep Retargeting frequency between 3.0 and 4.0 over a 7-day period.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong>If Frequency hits 6+</strong>, your creative is annoying them. Lower the budget or add new creative.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-6 p-5 bg-gray-900 rounded-lg border border-green-800">
                        <h3 className="text-xl font-semibold text-green-400 mb-3">C. DPA (Dynamic Product Ads)</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong>For E-commerce:</strong> Use the Catalog Sales objective.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong>Function:</strong> If a user looks at the "Red Shoes" on your site, Facebook automatically shows them an ad featuring the exact "Red Shoes" they looked at.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong>Performance:</strong> These are usually the highest ROI ads in any account.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* XVI. CONCLUSION */}
            <section id="conclusion" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XVI. CONCLUSION: THE INFINITE CASINO
                </h2>
                <div className="space-y-6 text-gray-300">
                    <p className="text-lg">
                        Paid Social is a casino where the house (Meta/TikTok) always wins—unless you learn how to count cards.
                    </p>
                    <p className="text-xl font-semibold text-green-400">
                        The "cards" are your creatives.
                    </p>
                    <p>
                        Ten years ago, the winner was the best media buyer—the person who knew which buttons to click in the settings.
                        Today, the winner is the best storyteller—the brand that can produce high-volume, high-quality video content that stops the scroll and entertains while it sells.
                    </p>

                    <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-green-800">
                        <h3 className="text-xl font-semibold text-white mb-4">Three Final Rules for Success:</h3>
                        <ol className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold text-2xl mr-3">1.</span>
                                <div>
                                    <strong className="text-green-400 text-lg">Creative is Variable #1:</strong>
                                    <p className="mt-1">If performance drops, don&apos;t change the target audience. Make better videos.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold text-2xl mr-3">2.</span>
                                <div>
                                    <strong className="text-green-400 text-lg">Broad is Better:</strong>
                                    <p className="mt-1">Trust the algorithm. Give it a wide lane (Broad targeting) and let it drive.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold text-2xl mr-3">3.</span>
                                <div>
                                    <strong className="text-green-400 text-lg">Patience Pays:</strong>
                                    <p className="mt-1">Do not kill an ad after 4 hours. Give the machine 3-4 days to learn. Panic-editing destroys performance.</p>
                                </div>
                            </li>
                        </ol>
                    </div>

                    <div className="mt-8 p-6 bg-gray-800 rounded-lg">
                        <p className="text-center text-lg">
                            The platforms will change. TikTok might get banned. VR ads might appear. But the psychology of human attention remains the same. Hook them, hold them, and reward them.
                        </p>
                        <p className="text-center text-xl font-bold text-green-400 mt-4">
                            Place your bets.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
};