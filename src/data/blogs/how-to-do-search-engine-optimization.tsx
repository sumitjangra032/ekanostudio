import { TOCItem } from "@/components/layout/BlogLayout";
import { BLOG_IMAGES } from "@/constants/blog-images";

export const SEO_DATA: {
    title: string;
    subtitle: string;
    tocItems: TOCItem[];
    content: React.ReactNode;
} = {
    title: "The SEO Master Class",
    subtitle: "Technical Foundations, Content Strategy, and Future-Proof Optimization",
    tocItems: [
        {
            id: "part-1-foundation",
            label: "PART 1: THE FOUNDATION (TECHNICAL SEO)",
            subItems: [
                { id: "introduction", label: "I. Introduction: The Death and Rebirth of SEO" },
                { id: "anatomy-of-search", label: "II. The Anatomy of Search: How Google Actually Works" },
                { id: "technical-seo", label: "III. Technical SEO: Building the Infrastructure" },
            ]
        },
        {
            id: "part-2-strategy",
            label: "PART 2: THE STRATEGY (ON-PAGE & CONTENT)",
            subItems: [
                { id: "keyword-research", label: "IV. Keyword Research Mastery" },
                { id: "on-page-optimization", label: "V. On-Page Optimization" },
                { id: "content-engine", label: "VI. The Content Engine & E-E-A-T" },
            ]
        },
        {
            id: "part-3-authority",
            label: "PART 3: THE AUTHORITY (OFF-PAGE & LOCAL)",
            subItems: [
                { id: "link-building", label: "VII. Link Building Strategy (Off-Page)" },
                { id: "local-seo", label: "VIII. Local SEO Domination" },
            ]
        },
        {
            id: "part-4-future",
            label: "PART 4: THE FUTURE (ANALYTICS & AI)",
            subItems: [
                { id: "measuring-success", label: "IX. Measuring Success (GA4 & Search Console)" },
                { id: "future-seo", label: "X. The Future: AI, SGE, and Voice Search" },
                { id: "seo-maintenance", label: "XI. The SEO Maintenance Routine" },
                { id: "conclusion", label: "XII. Conclusion: The Infinite Game" },
            ]
        },
    ],
    content: (
        <>
            {/* I. INTRODUCTION */}
            <section id="introduction" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    I. INTRODUCTION: THE DEATH AND REBIRTH OF SEO
                </h2>

                <div className="space-y-4 text-gray-300">
                    <p className="text-xl font-semibold text-red-400">
                        "SEO is dead."
                    </p>
                    <p>
                        Marketing pundits have been screaming this phrase since 2010. First, they said social media would kill SEO. Then they said voice search would kill SEO. Now, they say Artificial Intelligence (AI) will kill SEO.
                    </p>
                    <p>
                        They are all wrong.
                    </p>
                    <p>
                        SEO (Search Engine Optimization) is not dying; it is evolving. In fact, it is becoming more exclusive. As paid advertising costs (PPC) skyrocket and social media reach plummets due to algorithmic changes, Organic Search remains the only sustainable, long-term asset a business can own online.
                    </p>



                    <div className="bg-gray-900 p-4 lg:p-6 rounded-lg mt-6">
                        <h3 className="text-xl font-semibold text-white mb-3">Why SEO is the Infinite Asset:</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong className="text-green-400">Intent:</strong> When someone sees an ad on Instagram, they are scrolling to be entertained. When someone types "best CRM for small business" into Google, they are holding their credit card, ready to buy. SEO captures intent.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong className="text-green-400">Compounding Returns:</strong> A paid ad stops working the second you stop paying. A high-ranking SEO article can generate leads for five years without an additional dime spent.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong className="text-green-400">Trust:</strong> 70% of users ignore paid ads and focus on organic results. Ranking #1 signals authority that money cannot buy.</span>
                            </li>
                        </ul>
                        <p className="mt-4 pt-4 border-t border-gray-700">
                            However, the "Old School" SEO tactics—keyword stuffing, buying shady backlinks, and writing 500-word fluff pieces—are dead. Google's algorithm is now smarter than the average human. It understands context, nuance, and user satisfaction.
                        </p>
                    </div>
                </div>
            </section>

            {/* II. THE ANATOMY OF SEARCH */}
            <section id="anatomy-of-search" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    II. THE ANATOMY OF SEARCH: HOW GOOGLE ACTUALLY WORKS
                </h2>

                <div className="space-y-4 text-gray-300">
                    <p>
                        To defeat the algorithm, you must understand the algorithm. Google (and Bing) operate in three distinct stages. If you fail at stage one, stages two and three are impossible.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <div className="text-3xl font-bold text-green-400 mb-2">1.</div>
                            <h3 className="text-xl font-semibold text-white mb-3">Crawling (Discovery)</h3>
                            <p className="text-sm">
                                Imagine the web as a massive library with no central filing system. Google sends out "Spiders" (bots) to crawl the web. They follow links from one page to another.
                            </p>
                            <p className="text-red-400 text-sm mt-2">
                                <strong>The Issue:</strong> If your site has no links pointing to it, or if your internal linking structure is broken, the spiders cannot find your pages. They are invisible.
                            </p>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <div className="text-3xl font-bold text-yellow-400 mb-2">2.</div>
                            <h3 className="text-xl font-semibold text-white mb-3">Indexing (Filing)</h3>
                            <p className="text-sm">
                                Once a spider finds a page, it analyzes the content. It stores this information in a massive database called the "Index."
                            </p>
                            <p className="text-red-400 text-sm mt-2">
                                <strong>The Issue:</strong> Just because you are crawled doesn't mean you are indexed. If your content is duplicate, low quality, or blocked by code, Google will throw it in the trash rather than file it in the Index.
                            </p>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <div className="text-3xl font-bold text-red-400 mb-2">3.</div>
                            <h3 className="text-xl font-semibold text-white mb-3">Ranking (Retrieval)</h3>
                            <p className="text-sm">
                                When a user types a query, Google scours its Index for the most relevant answer. It ranks results based on over 200 factors.
                            </p>
                            <p className="text-red-400 text-sm mt-2">
                                <strong>The Issue:</strong> You can be indexed but ranked on Page 50. Nobody hides a dead body better than Page 2 of Google results.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-md mt-6 border-l-4 border-green-500">
                        <p className="font-bold text-white">The Golden Rule of Search:</p>
                        <p>Google's customer is not you (the website owner). Google's customer is the <em>Searcher</em>. If you annoy the searcher with slow load times, bad content, or intrusive pop-ups, Google will fire you from the first page.</p>
                    </div>
                </div>
            </section>

            {/* III. TECHNICAL SEO */}
            <section id="technical-seo" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    III. TECHNICAL SEO: BUILDING THE INFRASTRUCTURE
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        Technical SEO is the foundation. You can build a beautiful house (content), but if you build it on a swamp (bad technical SEO), it will sink.
                    </p>

                    <div className="space-y-8 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. Site Architecture & Taxonomy</h3>
                            <p className="mb-3">Your website structure tells Google what is important.</p>
                            <ul className="space-y-2 ml-4">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>The "Flat" Architecture Rule:</strong> No page on your website should be more than 3 clicks away from the homepage.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>Siloing:</strong> Group your content into logical categories.</span>
                                </li>
                            </ul>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3 font-mono text-sm">
                                Homepage<br />
                                ├── Service Category (e.g., Plumbing)<br />
                                │   └── Sub-Service (e.g., Emergency Leak Repair)<br />
                                └── Service Category (e.g., HVAC)
                            </div>
                            <p className="mt-3">
                                <strong>Why this matters:</strong> This creates "Theme Relevance." It tells Google, "We are experts in Plumbing," rather than just having a messy pile of unrelated pages.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Crawlability & Indexability</h3>
                            <p className="mb-3">You need to give clear instructions to the bots.</p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">1. Robots.txt</h4>
                                    <p className="text-sm">The "Do Not Enter" sign. A single typo (e.g., Disallow: /) can de-index your entire site instantly.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">2. XML Sitemaps</h4>
                                    <p className="text-sm">A map you hand to Google. Lists every URL you want to be found. Submit to Google Search Console.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">3. Canonical Tags</h4>
                                    <p className="text-sm">Solves duplicate content issues. Tells Google which page is the "Master" version to rank.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Core Web Vitals (Speed & Experience)</h3>
                            <p className="mb-3">Google's three key metrics for page experience:</p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="border border-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">LCP (Largest Contentful Paint)</h4>
                                    <p className="text-sm"><strong>What:</strong> Loading speed for main content.</p>
                                    <p className="text-sm"><strong>Target:</strong> &lt; 2.5 seconds</p>
                                    <p className="text-sm"><strong>Fix:</strong> Compress images, use CDN</p>
                                </div>
                                <div className="border border-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">INP (Interaction to Next Paint)</h4>
                                    <p className="text-sm"><strong>What:</strong> Page responsiveness.</p>
                                    <p className="text-sm"><strong>Target:</strong> &lt; 100 milliseconds</p>
                                    <p className="text-sm"><strong>Fix:</strong> Minify JavaScript</p>
                                </div>
                                <div className="border border-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">CLS (Cumulative Layout Shift)</h4>
                                    <p className="text-sm"><strong>What:</strong> Visual stability (no jumping content).</p>
                                    <p className="text-sm"><strong>Target:</strong> &lt; 0.1 score</p>
                                    <p className="text-sm"><strong>Fix:</strong> Set image dimensions</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">D. Mobile-First Indexing</h3>
                            <p>Google no longer ranks your desktop site. It ranks your mobile site.</p>
                            <ul className="list-disc ml-6 space-y-1 mt-2">
                                <li><strong>The Reality:</strong> If your desktop site is beautiful but your mobile site is broken, you are effectively invisible to Google.</li>
                                <li><strong>Responsive Design:</strong> Use responsive design, not separate "m.dot" sites.</li>
                                <li><strong>Tap Targets:</strong> Ensure buttons are large enough for thumbs.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">E. SSL (Secure Sockets Layer)</h3>
                            <p>The padlock icon in the browser bar (HTTPS vs. HTTP).</p>
                            <ul className="list-disc ml-6 space-y-1 mt-2">
                                <li><strong>Security as Ranking Signal:</strong> Google confirmed HTTPS as a ranking signal in 2014.</li>
                                <li><strong>Consequence:</strong> If your site says "Not Secure," users will bounce immediately, destroying your rankings.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">F. Schema Markup (Structured Data)</h3>
                            <p>Schema is a code language that helps search engines understand the <em>context</em> of your content.</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3">
                                <p className="font-bold text-green-400">Without Schema:</p>
                                <p className="text-sm">Google sees "4.5 stars" and "30 minutes."</p>
                                <p className="font-bold text-green-400 mt-2">With Schema:</p>
                                <p className="text-sm">You tell Google: "This is a Recipe. The Rating is 4.5. The Cook Time is 30 minutes."</p>
                            </div>
                            <p className="mt-3"><strong>Why it wins:</strong> Schema powers "Rich Snippets" which can increase Click-Through Rate (CTR) by 30%.</p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-2 mt-3">
                                <span className="bg-gray-800 px-3 py-1 rounded text-sm text-center">Organization</span>
                                <span className="bg-gray-800 px-3 py-1 rounded text-sm text-center">Local Business</span>
                                <span className="bg-gray-800 px-3 py-1 rounded text-sm text-center">Article</span>
                                <span className="bg-gray-800 px-3 py-1 rounded text-sm text-center">Product</span>
                                <span className="bg-gray-800 px-3 py-1 rounded text-sm text-center">FAQ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* IV. KEYWORD RESEARCH */}
            <section id="keyword-research" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    IV. KEYWORD RESEARCH MASTERY: THE ART OF LISTENING
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        Keyword research is not about finding words; it is about understanding market behavior. It is the act of listening to what your customers are typing into the search bar when nobody else is looking.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Four Types of Search Intent</h3>
                            <p className="mb-3">"Search Intent" (why they are searching) is infinitely more important than "Search Volume."</p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">1. Navigational</h4>
                                    <p className="text-sm"><em>"Take me there"</em></p>
                                    <p className="text-sm mt-1">Query: "Facebook login"</p>
                                    <p className="text-sm italic mt-1">Goal: User knows where they want to go.</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">2. Informational</h4>
                                    <p className="text-sm"><em>"Teach me"</em></p>
                                    <p className="text-sm mt-1">Query: "How to tie a tie"</p>
                                    <p className="text-sm italic mt-1">Goal: User wants an answer, not a product.</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">3. Commercial Investigation</h4>
                                    <p className="text-sm"><em>"Help me choose"</em></p>
                                    <p className="text-sm mt-1">Query: "Best running shoes 2025"</p>
                                    <p className="text-sm italic mt-1">Goal: User is comparing options.</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">4. Transactional</h4>
                                    <p className="text-sm"><em>"I want to buy"</em></p>
                                    <p className="text-sm mt-1">Query: "Buy Nike Air Max cheap"</p>
                                    <p className="text-sm italic mt-1">Goal: User has credit card ready.</p>
                                </div>
                            </div>
                            <p className="mt-4 text-red-400">
                                <strong>The Mistake:</strong> Trying to rank a Product Page (Transactional) for a "How-to" query (Informational). Google will not rank it because it doesn't satisfy the user's intent.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Short-Tail vs. Long-Tail Keywords</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-red-400 mb-2">Short-Tail ("Head Terms")</h4>
                                    <ul className="space-y-1">
                                        <li className="flex items-start">
                                            <span className="text-red-400 mr-2">•</span>
                                            <span><strong>Example:</strong> "Shoes"</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-red-400 mr-2">•</span>
                                            <span><strong>Volume:</strong> 1M+/mo</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-red-400 mr-2">•</span>
                                            <span><strong>Competition:</strong> Very High</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-red-400 mr-2">•</span>
                                            <span><strong>Conversion:</strong> Low</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-2">Long-Tail ("Niche Terms")</h4>
                                    <ul className="space-y-1">
                                        <li className="flex items-start">
                                            <span className="text-green-400 mr-2">•</span>
                                            <span><strong>Example:</strong> "Men's waterproof running shoes for flat feet"</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-400 mr-2">•</span>
                                            <span><strong>Volume:</strong> 50/mo</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-400 mr-2">•</span>
                                            <span><strong>Competition:</strong> Low</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-400 mr-2">•</span>
                                            <span><strong>Conversion:</strong> High</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-4 font-semibold">
                                The Strategy: New websites must attack the "Long Tail" first. You will never defeat Amazon for "Shoes." But you can defeat them for specific, niche queries.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Semantic Search & LSI Keywords</h3>
                            <p>Google no longer matches keywords exactly; it matches <em>topics</em> using Latent Semantic Indexing (LSI).</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3">
                                <p className="font-bold text-green-400">If you write about "Coffee," Google expects to see:</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="bg-gray-800 px-3 py-1 rounded text-sm">Beans</span>
                                    <span className="bg-gray-800 px-3 py-1 rounded text-sm">Roast</span>
                                    <span className="bg-gray-800 px-3 py-1 rounded text-sm">Caffeine</span>
                                    <span className="bg-gray-800 px-3 py-1 rounded text-sm">Barista</span>
                                    <span className="bg-gray-800 px-3 py-1 rounded text-sm">Brewing</span>
                                    <span className="bg-gray-800 px-3 py-1 rounded text-sm">Mug</span>
                                </div>
                            </div>
                            <p className="mt-3">
                                If your article lacks these semantically related terms, Google assumes your content is shallow and will not rank it highly.
                            </p>
                        </div>
                    </div>


                </div>
            </section>

            {/* V. ON-PAGE OPTIMIZATION */}
            <section id="on-page-optimization" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    V. ON-PAGE OPTIMIZATION: THE PERFECT PAGE
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>Once you have your target keyword, you must place it strategically. This is "On-Page SEO."</p>

                    <div className="space-y-6 mt-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <h3 className="text-xl font-bold text-green-400 mb-2">A. Title Tag</h3>
                                <p className="text-sm mb-2">The blue clickable link in Google results. Most important ranking factor.</p>
                                <p className="font-bold text-sm">Best Practice:</p>
                                <p className="text-sm italic">[Primary Keyword] - [Secondary Keyword] | [Brand Name]</p>
                                <p className="text-sm mt-2"><strong>Length:</strong> &lt; 60 characters</p>
                                <p className="text-sm"><strong>Psychology:</strong> Front-load the most important keyword.</p>
                            </div>
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <h3 className="text-xl font-bold text-green-400 mb-2">B. Meta Description</h3>
                                <p className="text-sm mb-2">The grey text under the title. Affects Click-Through Rate (CTR).</p>
                                <p className="text-sm italic">"Looking for the best SEO tools? We tested the top 20 platforms to help you rank higher. Click to see the winner for 2025."</p>
                                <p className="text-sm mt-2"><strong>Strategy:</strong> Treat this like ad copy. Include hook and call to action.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Header Tags (H1, H2, H3)</h3>
                            <p>Headers provide structure for both the user and the bot.</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3">
                                <p className="text-green-400 font-bold">H1:</p>
                                <p className="ml-4">The main headline. ONLY use one per page. Must contain primary keyword.</p>
                                <p className="text-green-400 font-bold mt-2">H2:</p>
                                <p className="ml-4">The main sub-sections.</p>
                                <p className="text-green-400 font-bold mt-2">H3:</p>
                                <p className="ml-4">Sub-points within the H2s.</p>
                            </div>
                            <p className="mt-2 italic">Analogy: Think of it like a book outline. Title (H1) &gt; Chapter (H2) &gt; Sub-chapter (H3).</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">D. URL Structure</h3>
                            <p>Keep URLs short, clean, and descriptive.</p>
                            <div className="grid md:grid-cols-2 gap-4 mt-3">
                                <div className="bg-gray-900 p-3 rounded">
                                    <p className="text-green-400 font-bold">✓ Good:</p>
                                    <p className="text-sm font-mono">website.com/seo-guide</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <p className="text-red-400 font-bold">✗ Bad:</p>
                                    <p className="text-sm font-mono">website.com/cat=23/post=992?ref=x</p>
                                </div>
                            </div>
                            <p className="mt-3"><strong>Rule:</strong> Avoid underscores (_); always use hyphens (-). Google treats hyphens as spaces.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">E. Image Optimization (Alt Text)</h3>
                            <p>Google cannot "see" images; it reads them. "Alt Text" is the description you give to the bot.</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3">
                                <p className="text-green-400 font-bold">✓ Good Alt Text:</p>
                                <p className="ml-4 italic">"Man typing on a laptop in a coffee shop."</p>
                                <p className="text-red-400 font-bold mt-2">✗ Bad Alt Text:</p>
                                <p className="ml-4 italic">"image001.jpg"</p>
                            </div>
                            <p className="mt-2"><strong>Accessibility:</strong> Primarily for screen readers for the visually impaired.</p>
                            <p><strong>SEO:</strong> Helps you rank in Google Images.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">F. Internal Linking (The Power Grid)</h3>
                            <p>This is the most underrated strategy in SEO.</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3">
                                <p className="font-bold text-green-400">Concept:</p>
                                <p className="ml-4">If you have a high-authority homepage, you can pass that authority (Link Juice) to your new blog posts by linking to them.</p>
                                <p className="font-bold text-green-400 mt-2">Anchor Text:</p>
                                <p className="ml-4 text-green-400">✓ Good: "Check out our [guide to SEO]."</p>
                                <p className="ml-4 text-red-400">✗ Bad: "Check out our guide [here]."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VI. CONTENT ENGINE & E-E-A-T */}
            <section id="content-engine" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VI. THE CONTENT ENGINE & E-E-A-T
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="text-xl font-semibold">
                        "Content is King" is a lie. The internet is drowning in content. <span className="text-green-400">Quality</span> Content is King.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Topic Cluster Model (Hub and Spoke)</h3>
                            <p>Stop writing random blog posts. Build "clusters."</p>
                            <div className="grid md:grid-cols-3 gap-4 mt-4">
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">1. Pillar Page (The Hub)</h4>
                                    <p className="text-sm">3,000+ word guide covering a broad topic (e.g., "Digital Marketing"). Targets high-volume short-tail keyword.</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">2. Cluster Content (Spokes)</h4>
                                    <p className="text-sm">Shorter articles covering specific sub-topics (e.g., "Email Marketing Tips," "PPC vs SEO").</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">3. The Link Network</h4>
                                    <p className="text-sm">All cluster pages link back to the Pillar Page, and the Pillar Page links out to all clusters.</p>
                                </div>
                            </div>
                            <p className="mt-4 font-semibold">Result: This tells Google you are a topical authority on the entire subject, boosting rankings for all pages.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. E-E-A-T (The Quality Standard)</h3>
                            <p>Google's Quality Rater Guidelines use E-E-A-T to judge content. Critical for YMYL (Your Money or Your Life) sites.</p>
                            <div className="grid md:grid-cols-4 gap-4 mt-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">E - Experience</h4>
                                    <p className="text-sm">Does the author have first-hand experience?</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">E - Expertise</h4>
                                    <p className="text-sm">Is the author a subject matter expert?</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">A - Authoritativeness</h4>
                                    <p className="text-sm">Is the website a known authority?</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">T - Trustworthiness</h4>
                                    <p className="text-sm">Is the site secure and trustworthy?</p>
                                </div>
                            </div>
                            <p className="mt-4 font-semibold">Action: Every article should have an Author Bio highlighting credentials ("Dr. Smith, 20 years Cardiology experience").</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Content Freshness (The Decay Factor)</h3>
                            <p>Content "decays" over time. A post written in 2021 about "Best Laptops" is useless today.</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3">
                                <p className="font-bold text-green-400">Strategy:</p>
                                <p>Do not just write new content. Audit old content.</p>
                                <p className="mt-2">Go back to old high-performing posts. Update stats, add new sections, change the date to current year. Google loves freshness and often gives an immediate ranking boost.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">D. Search Quality Needs (Skyscraper Technique)</h3>
                            <p>How do you beat the #1 result?</p>
                            <ol className="list-decimal ml-6 space-y-2 mt-3">
                                <li>Search your keyword.</li>
                                <li>Read the Top 3 results.</li>
                                <li>Ask: What is missing? (Images? Updated data? Better design?)</li>
                                <li>Create content that is 10x better. Longer, better designed, more data-driven.</li>
                                <li>This is the "Skyscraper Technique" (coined by Brian Dean).</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* VII. LINK BUILDING */}
            <section id="link-building" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VII. LINK BUILDING STRATEGY (OFF-PAGE SEO)
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        If On-Page SEO is "what you say about yourself," Off-Page SEO is "what others say about you."
                    </p>
                    <p>
                        Google was the first search engine to treat a hyperlink as a "vote." If Website A links to Website B, Google views that as Website A vouching for Website B's quality.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Concept of Domain Authority</h3>
                            <p>While Google doesn't officially use "Domain Authority" (Moz) or "Domain Rating" (Ahrefs), the concept is real.</p>
                            <div className="grid md:grid-cols-2 gap-4 mt-3">
                                <div className="bg-gray-900 p-3 rounded">
                                    <p className="text-green-400 font-bold">High Authority</p>
                                    <p className="text-sm">NYTimes.com, Wikipedia.org, Harvard.edu</p>
                                    <p className="text-sm mt-1">One link from New York Times ≈ 10,000 spammy links</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <p className="text-red-400 font-bold">Low Authority</p>
                                    <p className="text-sm">MyNewPersonalBlog.com</p>
                                    <p className="text-sm mt-1">Quality always beats quantity.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. "DoFollow" vs. "NoFollow"</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">DoFollow Link</h4>
                                    <p className="text-sm">Standard link. Passes "Link Juice" (PageRank). Boosts SEO.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-yellow-400 mb-1">NoFollow Link</h4>
                                    <p className="text-sm">Link with rel="nofollow". Tells Google "I don't vouch for this."</p>
                                    <p className="text-sm mt-1 italic">Examples: YouTube comments, Wikipedia citations, social media profiles.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. White Hat vs. Black Hat (The Danger Zone)</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-900 border border-green-800 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">White Hat SEO</h4>
                                    <p className="text-sm">Earning links naturally through great content and outreach.</p>
                                    <p className="text-sm mt-1"><strong>Result:</strong> Safe, Long-term</p>
                                </div>
                                <div className="bg-gray-900 border border-red-800 p-4 rounded-lg">
                                    <h4 className="font-bold text-red-400 mb-1">Black Hat SEO</h4>
                                    <p className="text-sm">Buying links, using Private Blog Networks (PBNs), comment spamming.</p>
                                    <p className="text-sm mt-1"><strong>Risk:</strong> "Manual Action" penalty. Site disappears overnight.</p>
                                </div>
                            </div>
                            <p className="mt-4 text-red-400 font-bold">Warning: Do not buy links on Fiverr.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">D. 3 Proven Link Building Strategies</h3>
                            <div className="space-y-4">
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">1. Digital PR & HARO</h4>
                                    <p>Journalists need expert quotes. Platforms like "Connectively" (formerly HARO) connect journalists with experts.</p>
                                    <p className="mt-2 italic">Strategy: Reporter from Forbes asks for "Tips on remote work." You reply with great quote. If used, they link to your site.</p>
                                    <p className="mt-2 font-semibold">Result: High-authority backlink for free.</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">2. Broken Link Building</h4>
                                    <p>The internet is full of "link rot" (links to 404 pages).</p>
                                    <ol className="list-decimal ml-6 space-y-1 mt-2">
                                        <li>Find competitor's resource page.</li>
                                        <li>Use tool to find broken links on their page.</li>
                                        <li>Email site owner: "Hey, I noticed this link is dead. I wrote a similar (newer) guide. You might want to swap it out."</li>
                                    </ol>
                                    <p className="mt-2 font-semibold">Why it works: You're helping them fix their site.</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">3. "Unlinked Mention" Campaign</h4>
                                    <p>People mention your brand but forget to add a hyperlink.</p>
                                    <ol className="list-decimal ml-6 space-y-1 mt-2">
                                        <li>Set up Google Alert for your brand name.</li>
                                        <li>When you see mention without link, email author: "Thanks for shoutout! Would you mind making text clickable?"</li>
                                    </ol>
                                    <p className="mt-2 font-semibold">Success Rate: Very high (they already like your brand).</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">E. Anchor Text Profile</h3>
                            <p>"Anchor Text" is the clickable text in a hyperlink.</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3">
                                <p className="font-bold">If 100% of your backlinks say "Best SEO Agency," Google will flag as unnatural/spam.</p>
                                <p className="mt-2">A natural profile is a mix:</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="bg-gray-800 px-3 py-1 rounded text-sm">Branded: "Agency Name"</span>
                                    <span className="bg-gray-800 px-3 py-1 rounded text-sm">Naked URL: "https://agency.com"</span>
                                    <span className="bg-gray-800 px-3 py-1 rounded text-sm">Generic: "Click here"</span>
                                    <span className="bg-gray-800 px-3 py-1 rounded text-sm">Exact Match: "Best SEO Agency" (Use sparingly)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VIII. LOCAL SEO */}
            <section id="local-seo" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VIII. LOCAL SEO DOMINATION
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        46% of all Google searches have "local intent" (e.g., "Pizza near me," "Plumber in [City]"). If you have a physical location or serve a specific geographic area, Local SEO is mandatory.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. Google Business Profile (GBP) - The Holy Grail</h3>
                            <p>Formerly Google My Business. This is the map listing at the top of search results (The "Map Pack").</p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">1. Verification</h4>
                                    <p className="text-sm">Verify via postcard or video.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">2. Categories</h4>
                                    <p className="text-sm">Choose correct primary category (e.g., "Italian Restaurant" vs. "Pizza Restaurant").</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">3. Photos</h4>
                                    <p className="text-sm">Listings with photos get 42% more direction requests.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">4. Posts</h4>
                                    <p className="text-sm">Share offers/news directly on Google Maps.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. NAP Consistency (Name, Address, Phone)</h3>
                            <p>Google validates your business by cross-referencing your data across the web.</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3">
                                <p className="font-bold text-red-400">The Problem:</p>
                                <p className="ml-4">Website: 123 Main St, Suite B</p>
                                <p className="ml-4">Facebook: 123 Main Street, Ste. B</p>
                                <p className="ml-4">Yelp: 123 Main St #B</p>
                                <p className="mt-2">These slight variations confuse the algorithm. If Google is unsure, it will rank you lower.</p>
                            </div>
                            <p className="mt-3 font-semibold">The Fix: Use tools like BrightLocal or Yext to audit and standardize your NAP across all directories.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Citations (Online Directories)</h3>
                            <p>A "Citation" is any mention of your business NAP on the web, even without a link.</p>
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Tier 1 Directories</h4>
                                    <p className="text-sm">Yelp, YellowPages, Bing Places, Apple Maps, Facebook</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Niche Directories</h4>
                                    <p className="text-sm">TripAdvisor (Travel), Avvo (Legal), Healthgrades (Medical)</p>
                                </div>
                            </div>
                            <p className="mt-3"><strong>Strategy:</strong> Ensure listing on top 50 directories for your country. Builds "Prominence."</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">D. Reviews: The Social Proof Engine</h3>
                            <p>Reviews are a direct ranking factor for the Local Map Pack.</p>
                            <div className="space-y-3 mt-3">
                                <div className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">1.</span>
                                    <span><strong>Velocity:</strong> Getting 10 reviews in one day and then zero for a year looks suspicious. Need steady stream.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">2.</span>
                                    <span><strong>Keywords in Reviews:</strong> If customer writes "Best <em>gluten-free pizza</em> in New York," that helps rank for "gluten-free pizza."</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">3.</span>
                                    <span><strong>Responding:</strong> MUST reply to every review. Shows future customers you care.</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">E. "Near Me" Optimization</h3>
                            <p className="text-red-400 font-bold">Do NOT write "We are a plumber near me" on your website.</p>
                            <p className="mt-2">How to actually rank for "Near Me":</p>
                            <ol className="list-decimal ml-6 space-y-1 mt-2">
                                <li>Embed a Google Map on your "Contact Us" page.</li>
                                <li>Create location-specific landing pages for multiple branches.</li>
                                <li>Use Local Schema Markup to tell Google your GPS coordinates.</li>
                            </ol>
                        </div>
                    </div>


                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* IX. MEASURING SUCCESS */}
            <section id="measuring-success" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    IX. MEASURING SUCCESS: ANALYTICS & KPIS
                </h2>
                <div className="space-y-4 text-gray-300">
                    <blockquote className="border-l-4 border-green-500 pl-4 py-2 bg-gray-900 rounded-r-md italic">
                        "Half the money I spend on advertising is wasted; the trouble is I don't know which half." — John Wanamaker.
                    </blockquote>
                    <p>In SEO, there is no excuse for not knowing. Everything is trackable.</p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. Google Search Console (GSC) - The Health Monitor</h3>
                            <p>GSC is the only tool where data comes directly from Google. Not an estimate; it's the truth.</p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Impressions</h4>
                                    <p className="text-sm">How many times your link appeared.</p>
                                    <p className="text-sm italic mt-1">Insight: High impressions, low clicks? Rewrite Title/Meta.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Clicks</h4>
                                    <p className="text-sm">How many people actually visited.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Avg Position</h4>
                                    <p className="text-sm">Your ranking.</p>
                                    <p className="text-sm italic mt-1">Insight: Focus on positions #4–#10 (Low Hanging Fruit).</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Index Coverage</h4>
                                    <p className="text-sm">Check for broken pages (404 errors).</p>
                                    <p className="text-sm italic mt-1">Check weekly.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Google Analytics 4 (GA4) - The Performance Monitor</h3>
                            <p>Once they land on your site, what do they do?</p>
                            <div className="grid md:grid-cols-3 gap-4 mt-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">1. Organic Traffic</h4>
                                    <p className="text-sm">Filter by "google / organic."</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">2. Engagement Rate</h4>
                                    <p className="text-sm">Are they staying?</p>
                                    <p className="text-sm italic mt-1">If users leave in 10s, Google assumes content is bad.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">3. Conversions</h4>
                                    <p className="text-sm">Traffic is vanity; revenue is sanity.</p>
                                    <p className="text-sm italic mt-1">Set up Events (Form Fills, Purchases, Phone Clicks).</p>
                                </div>
                            </div>
                            <p className="mt-4 font-bold text-red-400">
                                If you get 10,000 visitors but 0 leads, you have a conversion problem, not an SEO problem.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Rank Tracking Tools</h3>
                            <p>GSC data is delayed by 48 hours. For real-time tracking, use third-party tools:</p>
                            <div className="flex flex-wrap gap-3 mt-3">
                                <span className="bg-gray-800 px-4 py-2 rounded-lg">Ahrefs</span>
                                <span className="bg-gray-800 px-4 py-2 rounded-lg">SEMrush</span>
                                <span className="bg-gray-800 px-4 py-2 rounded-lg">Ubersuggest</span>
                                <span className="bg-gray-800 px-4 py-2 rounded-lg">Moz</span>
                            </div>
                            <p className="mt-3 text-yellow-400 font-bold">Warning: Do not obsess over daily fluctuations. Rankings "dance." Look at 30-day trend.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* X. THE FUTURE */}
            <section id="future-seo" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    X. THE FUTURE: AI, SGE, AND VOICE SEARCH
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>SEO is currently undergoing its biggest shift since the invention of the smartphone.</p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">A. SGE (Search Generative Experience) & "Zero-Click" Searches</h3>
                            <p>Google is rolling out AI-generated answers directly at the top of search results.</p>
                            <div className="bg-gray-800 p-4 rounded-lg mt-3">
                                <p className="font-bold text-red-400">The Threat:</p>
                                <p>Users might get answer from AI and never click your website. This is a "Zero-Click Search."</p>
                                <p className="font-bold text-green-400 mt-3">The Defense:</p>
                                <ol className="list-decimal ml-6 space-y-1">
                                    <li><strong>Cite Statistics:</strong> AI cites sources. Publish original data/studies.</li>
                                    <li><strong>Opinion & Experience:</strong> AI cannot have an <em>opinion</em> or <em>human experience</em>. Write "I tried this, and here's what happened."</li>
                                </ol>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Voice Search Optimization</h3>
                            <p>50% of consumers use voice search (Siri, Alexa, Google Assistant).</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3">
                                <p className="font-bold">The Shift: People don't speak like they type.</p>
                                <p className="mt-2"><strong>Typing:</strong> "Weather NY"</p>
                                <p><strong>Speaking:</strong> "Do I need an umbrella in New York today?"</p>
                                <p className="font-bold text-green-400 mt-3">The Strategy:</p>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Optimize for "Natural Language."</li>
                                    <li>Include FAQ section answering conversational questions.</li>
                                    <li>Target "Question Keywords" (Who, What, Where, When, Why).</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Video SEO (YouTube)</h3>
                            <p>YouTube is the world's second-largest search engine. Video content appears in standard Google results.</p>
                            <p className="mt-2 font-bold">Strategy: Embed YouTube videos into blog posts. Increases "Time on Page" (Dwell Time), signaling high quality to Google.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* XI. SEO MAINTENANCE ROUTINE */}
            <section id="seo-maintenance" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XI. THE SEO MAINTENANCE ROUTINE
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>SEO is not a one-time setup; it is a gym membership. You have to keep showing up. Ekanostudio is here to help you maintain your SEO. Best SEO services in Hisar Haryana.</p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-400 mb-3">A. Weekly Routine (1 Hour)</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span>Check Google Search Console for "Coverage Errors" (Broken pages).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span>Check GSC "Performance" for sudden drops in traffic.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span>Reply to all new Google Business Profile reviews.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span>Publish at least one new piece of content (or update an old one).</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">B. Monthly Routine (4 Hours)</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-yellow-400 font-bold mr-2">•</span>
                                    <span>Run technical site audit (using Ahrefs/SEMrush) for broken links or slow pages.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-400 font-bold mr-2">•</span>
                                    <span>Review keyword rankings. Identify pages that slipped from Page 1 to Page 2.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-400 font-bold mr-2">•</span>
                                    <span>Build 2-3 new backlinks (via guest posting or outreach).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-400 font-bold mr-2">•</span>
                                    <span>Check competitor activity. Did they launch new guide? Can you beat it?</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-red-400 mb-3">C. Quarterly Routine (1 Day)</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">•</span>
                                    <span><strong>Content Pruning:</strong> Identify pages with 0 traffic in last 12 months. Either delete them (301 redirect) or rewrite completely.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">•</span>
                                    <span><strong>Core Web Vitals Audit:</strong> Has site speed slowed due to new plugins or large images?</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* XII. CONCLUSION */}
            <section id="conclusion" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XII. CONCLUSION: THE INFINITE GAME
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        SEO is often frustrating. It is slow. It takes 6 to 12 months to see the "Hockey Stick" growth curve. During the first few months, you will be writing content into the void. You will be fixing code that no one sees. You will feel like it isn't working.
                        Best SEO services in Hisar Haryana. Seo , Digital marketing services in Hisar Haryana. Seo , On Page Seo , Off Page Seo , Local Seo , Ecommerce Seo , Local SEO Services in Hisar Haryana.
                        Maintain Your Website on Top Ranking in Hisar Haryana.
                    </p>

                    <div className="bg-gray-900 p-6 rounded-lg my-8 border-l-4 border-red-500">
                        <p className="text-xl font-bold text-white">
                            This is the "Valley of Disappointment." Most people quit here.
                        </p>
                    </div>

                    <p>
                        But if you persist—if you continue to build technical stability, create helpful content, and earn authority—you will cross the threshold. You will reach a point where your traffic grows while you sleep. You will reach a point where you stop chasing customers because they are finding you.
                    </p>

                    <p>
                        The algorithm changes every day, but the core mission remains the same:
                    </p>

                    <div className="my-8 p-6 bg-gray-900 border-l-4 border-green-500 rounded-r-lg">
                        <p className="text-xl font-bold text-white text-center">
                            Organize the world's information and make it universally accessible and useful.
                        </p>
                    </div>

                    <p className="text-lg">
                        Align your business with that mission. Be useful. Be fast. Be authoritative.
                    </p>

                    <p className="text-2xl font-bold text-green-400 mt-8">
                        The first page of Google is waiting.
                    </p>
                </div>
            </section>
        </>
    )
};