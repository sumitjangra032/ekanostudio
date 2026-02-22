import { TOCItem } from "@/components/layout/BlogLayout";
import { BLOG_IMAGES } from "@/constants/blog-images";

export const COMPETITOR_ANALYSIS_DATA: {
    title: string;
    subtitle: string;
    tocItems: TOCItem[];
    content: React.ReactNode;
} = {
    title: "How to do Competitor Analysis",
    subtitle: "Strategic Frameworks, Digital Espionage, and Battlefield Execution",
    tocItems: [
        {
            id: "part-1-strategy",
            label: "PART 1: THE STRATEGY (FRAMEWORKS & IDENTIFICATION)",
            subItems: [
                { id: "introduction", label: "I. Introduction: Sun Tzu in the Boardroom" },
                { id: "three-tiers", label: "II. The Three Tiers of Competition" },
                { id: "strategic-frameworks", label: "III. Strategic Frameworks" },
                { id: "jtbd-theory", label: "IV. The \"Jobs to Be Done\" Theory" },
            ]
        },
        {
            id: "part-2-intel",
            label: "PART 2: THE INTEL (DIGITAL ESPIONAGE)",
            subItems: [
                { id: "traffic-seo-analysis", label: "V. Traffic & SEO Analysis (Stealing Keywords)" },
                { id: "ad-strategy-deconstruction", label: "VI. Ad Strategy Deconstruction (PPC & Social)" },
                { id: "content-audit", label: "VII. Content & Social Media Audit" },
                { id: "backlink-analysis", label: "VIII. Backlink Analysis: Who Vouches for Them?" },
            ]
        },
        {
            id: "part-3-product",
            label: "PART 3: THE PRODUCT (UX & PRICING)",
            subItems: [
                { id: "feature-gap-analysis", label: "IX. Feature Gap Analysis" },
                { id: "pricing-strategy-audit", label: "X. Pricing Strategy & Psychology Audit" },
                { id: "ux-customer-journey", label: "XI. UX & Customer Journey Mapping" },
                { id: "sentiment-analysis", label: "XII. Sentiment Analysis: Mining Reviews for Weakness" },
            ]
        },
        {
            id: "part-4-action",
            label: "PART 4: THE ACTION (EXECUTION & BATTLECARDS)",
            subItems: [
                { id: "battlecards", label: "XIII. Creating \"Battlecards\" for Sales Teams" },
                { id: "predictive-analysis", label: "XIV. Predictive Analysis: Guessing Their Next Move" },
                { id: "ethical-boundaries", label: "XV. Ethical Boundaries & Legalities" },
                { id: "conclusion", label: "XVI. Conclusion" },
            ]
        },
    ],
    content: (
        <>
            {/* I. INTRODUCTION */}
            <section id="introduction" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    I. INTRODUCTION: SUN TZU IN THE BOARDROOM
                </h2>

                <div className="space-y-4 text-gray-300">
                    <blockquote className="border-l-4 border-green-500 pl-4 py-2 bg-gray-900 rounded-r-md italic">
                        "If you know the enemy and know yourself, you need not fear the result of a hundred battles." — Sun Tzu, The Art of War.
                    </blockquote>

                    <p>
                        Business is war. It is a battle for a finite resource: the customer's attention and wallet.
                    </p>
                    <p>
                        However, most companies practice "Navel-Gazing." They are so obsessed with their own product, their own features, and their own roadmap that they fail to look out the window. By the time they realize a competitor has eaten their market share, it is too late.
                    </p>
                    <p>
                        Competitor Analysis is not about copying. If you copy your competitor, the best you can hope for is second place. Competitor Analysis is about <strong>differentiation</strong>. It is about finding the "White Space"—the gap in the market where they are weak, and you are strong.
                    </p>



                    <div className="bg-gray-900 p-4 lg:p-6 rounded-lg mt-6">
                        <h3 className="text-xl font-semibold text-white mb-3">Why This Matters Now:</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">1.</span>
                                <span><strong className="text-green-400">The Barrier to Entry is Zero:</strong> Today, anyone can launch a SaaS product or an E-commerce brand in 24 hours. You are not competing with 3 companies; you are competing with 300.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">2.</span>
                                <span><strong className="text-green-400">Winner-Take-Most:</strong> In digital markets, the #1 player often captures 70% of the value, while the #2 and #3 fight for scraps. You cannot afford to be average.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">3.</span>
                                <span><strong className="text-green-400">Customer Expectations:</strong> Your customers are comparing you to the best experience they have ever had (Amazon, Uber), not just your direct rivals.</span>
                            </li>
                        </ul>
                        <p className="mt-4 pt-4 border-t border-gray-700">
                            This master class will teach you how to dismantle your opponents' strategies, reverse-engineer their success, and exploit their failures.
                        </p>
                    </div>
                </div>
            </section>

            {/* II. THE THREE TIERS OF COMPETITION */}
            <section id="three-tiers" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    II. THE THREE TIERS OF COMPETITION
                </h2>

                <div className="space-y-4 text-gray-300">
                    <p>
                        The most common mistake is defining your competition too narrowly.
                        "We are a pizza restaurant. Our competitors are other pizza restaurants."
                        False. Your competitor is <em>hunger</em>. Your competitor is <em>convenience</em>.
                    </p>
                    <p>
                        You must map your enemies across three tiers:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-400 mb-3">A. Direct Competitors</h3>
                            <p className="text-sm mb-2"><em>The Mirror Image</em></p>
                            <p className="text-sm mb-3">These companies sell the same product to the same audience at a similar price point.</p>
                            <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>Example:</strong> Coca-Cola vs. Pepsi.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">•</span>
                                    <span><strong>Strategy:</strong> Win on Brand Preference and Execution.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">B. Indirect Competitors</h3>
                            <p className="text-sm mb-2"><em>The Alternative Solution</em></p>
                            <p className="text-sm mb-3">These companies sell a <em>different</em> product, but they solve the <em>same problem</em>.</p>
                            <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                    <span className="text-yellow-400 mr-2">•</span>
                                    <span><strong>Example:</strong> A Gym Membership vs. A Peloton Bike.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-400 mr-2">•</span>
                                    <span><strong>Strategy:</strong> Win by framing the problem differently.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-red-400 mb-3">C. Replacement Competitors</h3>
                            <p className="text-sm mb-2"><em>The Status Quo (Most Dangerous)</em></p>
                            <p className="text-sm mb-3">They compete for the same resource (time or budget) in a completely different category.</p>
                            <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">•</span>
                                    <span><strong>Example:</strong> Netflix vs. Sleep.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">•</span>
                                    <span><strong>Strategy:</strong> Educate the market on why the Status Quo is costing them money.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-md mt-6">
                        <p className="font-semibold text-green-400">Action Step:</p>
                        <p>Create a list of 5 Direct, 5 Indirect, and 1 "Status Quo" competitor. If you can't find 5 Direct competitors, you aren't looking hard enough, or your market is too small.</p>
                    </div>
                </div>
            </section>

            {/* III. STRATEGIC FRAMEWORKS */}
            <section id="strategic-frameworks" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    III. STRATEGIC FRAMEWORKS: ORGANIZING THE DATA
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        Data without structure is noise. Before we start collecting data (in Part 2), we need a mental model to categorize it.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div className="border border-gray-800 rounded-lg p-4">
                            <h3 className="text-xl font-bold text-green-400 mb-2">A. The Modern SWOT Analysis</h3>
                            <p className="mb-3">Everyone knows SWOT, but few do it correctly. They list "Friendly Staff" as a strength. That is table stakes, not a strength.</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-semibold text-white mb-1">Strengths (Internal)</h4>
                                    <p className="text-sm">What is your "Unfair Advantage"? (Patents, Proprietary Data, Exclusive Partnerships).</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-semibold text-white mb-1">Weaknesses (Internal)</h4>
                                    <p className="text-sm">Where do you bleed money? (High Churn, Legacy Tech Stack, Poor Brand Awareness).</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-semibold text-white mb-1">Opportunities (External)</h4>
                                    <p className="text-sm">Trends you can surf. (AI adoption, Competitor Bankruptcy, Regulatory Changes).</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-semibold text-white mb-1">Threats (External)</h4>
                                    <p className="text-sm">Market killers. (New tariffs, Platform risk like iOS updates, Economic recession).</p>
                                </div>
                            </div>
                            <p className="mt-3 text-sm italic">The Tows Matrix (Advanced): Don't just list them. Match them. Use Strengths to capture Opportunities. Minimize Weaknesses to avoid Threats.</p>
                        </div>

                        <div className="border border-gray-800 rounded-lg p-4">
                            <h3 className="text-xl font-bold text-green-400 mb-2">B. Porter’s Five Forces</h3>
                            <p className="mb-3">Michael Porter’s framework assesses the "intensity" of the competition.</p>
                            <ul className="list-decimal ml-6 space-y-2">
                                <li><strong>Rivalry among existing competitors:</strong> Is it a bloodbath (Airlines) or a monopoly (Utilities)?</li>
                                <li><strong>Threat of new entrants:</strong> How high is the wall? (High capital requirements = Low threat).</li>
                                <li><strong>Bargaining power of suppliers:</strong> Can your supplier raise prices and bankrupt you?</li>
                                <li><strong>Bargaining power of buyers:</strong> Can customers demand lower prices?</li>
                                <li><strong>Threat of substitute products:</strong> Can technology make you obsolete? (e.g., Kodak vs. Digital Cameras).</li>
                            </ul>
                        </div>

                        <div className="border border-gray-800 rounded-lg p-4">
                            <h3 className="text-xl font-bold text-green-400 mb-2">C. Perceptual Mapping (Visualizing the Gap)</h3>
                            <p className="mb-3">This is a visual graph with an X and Y axis. Plot your competitors to find the "White Space."</p>
                            <div className="bg-gray-900 p-4 rounded">
                                <p><strong>X-Axis:</strong> Price (Low to High).</p>
                                <p><strong>Y-Axis:</strong> Quality/Complexity (Low to High).</p>
                                <p className="mt-2"><strong>The Insight:</strong> Look for the empty quadrant. Is there a "High Quality / Low Price" gap? Or a "Low Complexity / High Price" (Premium Simplicity) gap? That is where you position your brand.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IV. JOBS TO BE DONE */}
            <section id="jtbd-theory" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    IV. THE "JOBS TO BE DONE" (JTBD) THEORY
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        Harvard Professor Clayton Christensen popularized this. People don't buy products; they "hire" them to do a job.
                    </p>

                    <div className="bg-gray-900 p-5 rounded-lg my-6">
                        <h3 className="text-xl font-semibold text-white mb-2">The Milkshake Study (Classic Example)</h3>
                        <p className="mb-3">McDonald's wanted to sell more milkshakes. They improved the flavor. Sales didn't move.</p>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong>The Insight:</strong> People bought milkshakes at 8:00 AM for their commute. The "Job" wasn't "Dessert." The "Job" was "Keep me full and entertained during a boring drive without making a mess."</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong>The Competitor:</strong> The competitor wasn't Burger King's shake. The competitor was a Banana (too fast to eat) or a Bagel (too messy).</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 font-bold mr-2">•</span>
                                <span><strong>The Solution:</strong> They made the milkshake thicker (lasts longer) and added chunks of fruit (entertainment/surprise). Sales skyrocketed.</span>
                            </li>
                        </ul>
                    </div>

                    <p className="font-semibold">Applying this to Competitor Analysis:</p>
                    <p>Don't ask: "Is their software faster?" Ask: "What Job is the customer hiring their software to do?"</p>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>If the customer hires a CRM to "Micro-manage sales reps," the competitor is Salesforce.</li>
                        <li>If the customer hires a CRM to "Get organized quickly," the competitor is Trello or Excel.</li>
                    </ul>
                    <p className="mt-3">Your analysis must focus on the <em>Outcome</em>, not the <em>Feature</em>.</p>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* V. TRAFFIC & SEO ANALYSIS */}
            <section id="traffic-seo-analysis" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    V. TRAFFIC & SEO ANALYSIS: STEALING THE PLAYBOOK
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        In the pre-internet era, you had to hire a private investigator to count cars in a competitor's parking lot to estimate their revenue. Today, tools like Semrush, Ahrefs, and SimilarWeb give us "Clickstream Data." We can see exactly how many people visit their store and how they got there.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Traffic Sources Split</h3>
                            <p className="mb-3">Input your competitor’s URL into SimilarWeb. Look at the breakdown:</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">1. Direct Traffic (&gt;50%)</h4>
                                    <p className="text-sm"><strong>Insight:</strong> Strong Brand. People are typing the name directly.</p>
                                    <p className="text-sm mt-1"><strong>Strategy:</strong> You cannot easily steal this traffic. It requires long-term brand building.</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">2. Search Traffic (Organic)</h4>
                                    <p className="text-sm"><strong>Insight:</strong> Strong Content/SEO.</p>
                                    <p className="text-sm mt-1"><strong>Strategy:</strong> This is your battleground. You can out-rank them.</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">3. Referral Traffic</h4>
                                    <p className="text-sm"><strong>Insight:</strong> Strong Partnerships.</p>
                                    <p className="text-sm mt-1"><strong>Strategy:</strong> See who is linking to them and pitch the same sites.</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">4. Social/Paid Traffic</h4>
                                    <p className="text-sm"><strong>Insight:</strong> Strong Ad Spend.</p>
                                    <p className="text-sm mt-1"><strong>Strategy:</strong> Analyze their creatives (Section VI).</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Keyword Gap Analysis (The Content Map)</h3>
                            <p className="mb-2">Using Ahrefs or Semrush, run a "Keyword Gap" report. Input your domain vs. competitors.</p>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>The "Missing" Keywords:</strong> Keywords your competitors rank for, but you do not. <em>Action: Build that page immediately.</em></span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>The "Weak" Keywords:</strong> Keywords where you rank Page 2, and they rank Page 1. <em>Action: These are "Striking Distance" keywords.</em></span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Top Pages Analysis & The Skyscraper Technique</h3>
                            <p>Don't just look at keywords; look at <em>Pages</em>.</p>
                            <ul className="list-disc ml-6 space-y-1 mt-2">
                                <li>Sort their site by "Top Pages by Traffic."</li>
                                <li>Insight: You might find that 80% of their traffic comes from just 5 blog posts.</li>
                                <li><strong>Action (Skyscraper Technique):</strong> Read their Top 5 posts. Create versions that are 2x longer, more up-to-date, and better designed.</li>
                            </ul>
                        </div>
                    </div>


                </div>
            </section>

            {/* VI. AD STRATEGY DECONSTRUCTION */}
            <section id="ad-strategy-deconstruction" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VI. AD STRATEGY DECONSTRUCTION: PPC & SOCIAL
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        You don't need to guess what marketing messages work. Your competitors are spending millions of dollars testing them for you.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Transparency Centers (Legal Spying)</h3>
                            <ul className="space-y-3">
                                <li>
                                    <strong>Meta Ad Library (Facebook/Instagram):</strong> Search for the competitor's brand name. Look for "Oldest Ads." If an ad has been running continuously for 6 months, it is profitable. <em>Copy that structure.</em>
                                </li>
                                <li>
                                    <strong>Google Ads Transparency Center:</strong> Shows Search, Display, and YouTube ads. Look at their Headlines. Are they competing on Price ("50% Off") or Quality ("#1 Rated")?
                                </li>
                                <li>
                                    <strong>LinkedIn Ad Library:</strong> Critical for B2B. See what whitepapers or case studies they are promoting.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. The "Hook-Story-Offer" Audit</h3>
                            <p className="mb-3">Dissect their winning ads using this framework:</p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="border border-gray-800 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">The Hook</h4>
                                    <p className="text-sm">How do they stop the scroll? <br /><em>"Stop using Excel for Sales."</em></p>
                                </div>
                                <div className="border border-gray-800 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">The Story</h4>
                                    <p className="text-sm">How do they empathize? <br /><em>"We know tracking leads is a nightmare..."</em></p>
                                </div>
                                <div className="border border-gray-800 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">The Offer</h4>
                                    <p className="text-sm">What is the CTA? <br /><em>"Get a Free Demo" vs. "Start Free Trial"</em></p>
                                </div>
                            </div>
                            <p className="mt-4 italic">Insight: If 90% of their ads push a "Free Trial" and you are pushing a "Demo," they might have discovered that the market prefers self-service.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Landing Page Analysis</h3>
                            <p>Do not just look at the ad. Click it. (Or right-click and copy the link).</p>
                            <ul className="list-disc ml-6 space-y-1 mt-2">
                                <li><strong>Congruency:</strong> Does the headline on the page match the ad?</li>
                                <li><strong>Form Friction:</strong> How many fields do they ask for? (Name/Email vs. Name/Email/Phone/Company size).</li>
                                <li><strong>Social Proof:</strong> What logos or testimonials are placed near the "Submit" button?</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* VII. CONTENT & SOCIAL MEDIA AUDIT */}
            <section id="content-audit" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VII. CONTENT & SOCIAL MEDIA AUDIT: FINDING THE VOICE
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>Content is not just text; it is the personality of the brand.</p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. The "Content Pillars" Audit</h3>
                            <p className="mb-2">Read their last 10 blog posts, newsletters, and LinkedIn posts. Categorize them:</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Education (How-to guides).</li>
                                <li>Company News (Feature launches).</li>
                                <li>Thought Leadership (Opinion pieces).</li>
                                <li>Culture (Employee spotlights).</li>
                            </ul>
                            <p className="mt-3 italic">Insight: If they are 100% "Company News," they are likely boring their audience. This is an opening for you to be the "Educator" in the market.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Engagement Ratio vs. Follower Count</h3>
                            <p className="mb-2">Do not be intimidated by vanity metrics.</p>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">•</span>
                                    <span><strong>Competitor A:</strong> 100,000 followers, 5 likes per post. (Dead audience/Bought followers).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>Competitor B:</strong> 5,000 followers, 100 comments per post. (Cult audience).</span>
                                </li>
                            </ul>
                            <p className="mt-2">Action: Analyze the comments on Competitor B's posts. What questions are people asking? These questions are blog post titles for you.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Frequency and Format</h3>
                            <ul className="list-disc ml-6 space-y-1">
                                <li><strong>Cadence:</strong> Do they post daily? Weekly?</li>
                                <li><strong>Media:</strong> Are they pivoting to Video (TikTok/Reels)?</li>
                            </ul>
                            <p className="mt-2 italic">Insight: If they have abandoned their blog and went all-in on YouTube, it suggests their audience prefers video. You should test video.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* VIII. BACKLINK ANALYSIS */}
            <section id="backlink-analysis" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VIII. BACKLINK ANALYSIS: WHO VOUCHES FOR THEM?
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>Backlinks are the currency of the web. Analyzing them reveals your competitor's PR and Partnership strategy.</p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. Reverse-Engineering PR</h3>
                            <p>If they have a link from <em>Forbes, TechCrunch, or The New York Times</em>, click it.</p>
                            <ul className="list-disc ml-6 space-y-1 mt-2">
                                <li>Did they pay for a sponsored post?</li>
                                <li>Did they get interviewed?</li>
                                <li>Did they release a unique data study?</li>
                            </ul>
                            <p className="mt-3"><strong>Strategy:</strong> If they got a link from a specific journalist by sharing data, you can conduct a better study and pitch that same journalist.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Partnership/Affiliate Discovery</h3>
                            <p className="mb-2">Pattern Recognition: Do you see hundreds of links from "Best CRM for Small Business" review sites (like G2, Capterra, SoftwareAdvice)?</p>
                            <p className="italic">Insight: They are likely paying for placement or running an aggressive review generation campaign.</p>
                            <p className="mt-2"><strong>Action:</strong> You cannot ignore these platforms. You need to launch a review campaign to neutralize their social proof advantage.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. The "Broken Link" Opportunity</h3>
                            <p>Check their 404 pages.</p>
                            <ul className="list-disc ml-6 space-y-1 mt-2">
                                <li>If they have a high-authority page that they deleted (404 error), but other websites are still linking to it, you have gold.</li>
                                <li><strong>Action:</strong> Write a replacement resource. Email the sites linking to the dead page: "Hey, I saw you linked to Competitor X's guide, but it's dead. I have a live version here."</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* IX. FEATURE GAP ANALYSIS */}
            <section id="feature-gap-analysis" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    IX. FEATURE GAP ANALYSIS: BEYOND THE CHECKLIST
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>Most companies create a simple Excel sheet: Column A has features, Column B has "Yes/No." This is a "Feature Parity" trap. Just because a competitor has a feature doesn't mean users want it.</p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Kano Model Framework</h3>
                            <p className="mb-3">Don't just list features; categorize them based on customer satisfaction.</p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="border border-gray-700 p-3 rounded">
                                    <h4 className="font-bold text-red-400 mb-1">1. Basic Needs (Must-Haves)</h4>
                                    <p className="text-sm">If you don't have these, you lose. If you do, nobody cares (it's expected).<br /><em>Example: A CRM having a "Save" button.</em></p>
                                </div>
                                <div className="border border-gray-700 p-3 rounded">
                                    <h4 className="font-bold text-yellow-400 mb-1">2. Performance Needs (More is Better)</h4>
                                    <p className="text-sm">The better you are at these, the happier the customer.<br /><em>Example: Website load speed.</em></p>
                                </div>
                                <div className="border border-gray-700 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">3. Delighters (Excitement)</h4>
                                    <p className="text-sm">Unexpected features that cause "Wow" moments.<br /><em>Example: Free cookies at hotel check-in.</em></p>
                                </div>
                            </div>
                            <p className="mt-4 font-semibold">Strategy: Do not copy their "Basic Needs" and expect to win. You must match their Basics and beat them on Delighters.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. The "Bloat" Audit</h3>
                            <p>Competitors often suffer from "Feature Creep." They have added so many buttons over 10 years that the product is unusable.</p>
                            <ul className="list-disc ml-6 space-y-1 mt-2">
                                <li><strong>The Opportunity:</strong> If your competitor does <em>everything</em> poorly, you can win by doing <em>one thing</em> perfectly.</li>
                                <li><strong>Example:</strong> Zoom beat Skype not by adding more features, but by stripping them away and making the video just work.</li>
                                <li><strong>Action:</strong> Identify features your competitor has that confuse their users. Market your lack of those features as "Simplicity."</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. The Roadmap Prediction</h3>
                            <p>Look at their "Changelog" or "Release Notes" page.</p>
                            <ul className="list-disc ml-6 space-y-1 mt-2">
                                <li><strong>Velocity:</strong> Are they shipping weekly or quarterly? (Slow velocity = Technical Debt).</li>
                                <li><strong>Focus:</strong> Are they launching AI features? Mobile features? API updates? This tells you where they are betting their future.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* X. PRICING STRATEGY AUDIT */}
            <section id="pricing-strategy-audit" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    X. PRICING STRATEGY & PSYCHOLOGY AUDIT
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>Price is not just a math problem; it is a signaling mechanism. Your competitor's price tells you who they think they are.</p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. Model Identification</h3>
                            <p>How do they charge?</p>
                            <div className="grid md:grid-cols-2 gap-4 mt-3">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Flat Rate</h4>
                                    <p className="text-sm">Simple, predictable. (e.g., Basecamp).</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Per User/Seat</h4>
                                    <p className="text-sm">Scales with headcount. (e.g., Salesforce).</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Usage-Based</h4>
                                    <p className="text-sm">Scales with activity. (e.g., AWS, Stripe).</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Freemium</h4>
                                    <p className="text-sm">Free entry, paid upgrade. (e.g., Dropbox).</p>
                                </div>
                            </div>
                            <p className="mt-4"><strong>The Counter-Move:</strong> If the entire market uses "Per User" pricing (hated by customers), you can disrupt the market by offering "Flat Rate" pricing. This instantly differentiates you as the "customer-friendly" option.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Psychological Tactics Audit</h3>
                            <p>Analyze their pricing page for "Dark Patterns" or psychological nudges.</p>
                            <div className="grid md:grid-cols-3 gap-4 mt-4">
                                <div className="border border-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">1. Anchoring</h4>
                                    <p className="text-sm">Do they show a massive "$500 Enterprise" plan next to a "$50 Pro" plan? The $500 plan exists only to make the $50 plan look cheap.</p>
                                </div>
                                <div className="border border-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">2. The Decoy Effect</h4>
                                    <p className="text-sm">Do they have a "Bad Value" middle option? The "Plus" plan is a decoy to push people to "Pro."</p>
                                </div>
                                <div className="border border-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">3. Hidden Costs</h4>
                                    <p className="text-sm">Do they add "Setup Fees," "Support Contracts" at checkout?</p>
                                </div>
                            </div>
                            <p className="mt-4 font-semibold text-green-400">Weapon: If they hide fees, you market "Transparent, All-Inclusive Pricing."</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Discounting Aggression</h3>
                            <p>Sign up for their newsletter and abandon a cart.</p>
                            <ul className="list-disc ml-6 space-y-1 mt-2">
                                <li>Do they email you a 20% coupon in 1 hour?</li>
                                <li>Do they offer a 50% discount at the end of the month?</li>
                            </ul>
                            <p className="mt-3 italic">Insight: If they discount heavily and frequently, their product is a commodity, and they are desperate. If they <em>never</em> discount, they have high brand power (e.g., Apple).</p>
                        </div>
                    </div>


                </div>
            </section>

            {/* XI. UX & CUSTOMER JOURNEY */}
            <section id="ux-customer-journey" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XI. UX & CUSTOMER JOURNEY MAPPING
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>You cannot judge a product by its screenshots. You must experience the friction.</p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">A. The "Secret Shopper" Technique</h3>
                            <p className="mb-3">You (or a friend) must sign up for their service.</p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">1.</span>
                                    <span><strong>Onboarding Speed:</strong> Start a stopwatch. How many seconds from "Sign Up" to "Aha Moment"? If they take 10 minutes and you take 2 minutes, you win on Time-to-Value.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">2.</span>
                                    <span><strong>The Email Sequence:</strong> Catalog every email they send you for 14 days. Are they helpful tutorials or aggressive sales pitches? <em>Action: Build a "Swipe File" of their best subject lines.</em></span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">3.</span>
                                    <span><strong>Cancellation Friction:</strong> Try to cancel. Is it one click? Do you have to call? High friction usually implies high churn rates.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. UI/Design Aesthetic</h3>
                            <p>Design is trust.</p>
                            <ul className="list-disc ml-6 space-y-1 mt-2">
                                <li><strong>Dated Design:</strong> Suggests legacy code, security risks, and lack of innovation.</li>
                                <li><strong>Modern/Clean Design:</strong> Suggests ease of use.</li>
                            </ul>
                            <p className="mt-3 font-semibold">Strategy: If they look like Windows 95, invest heavily in a beautiful UI. Humans naturally perceive attractive things as working better (The Aesthetic-Usability Effect).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* XII. SENTIMENT ANALYSIS */}
            <section id="sentiment-analysis" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XII. SENTIMENT ANALYSIS: MINING REVIEWS FOR WEAKNESS
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>Your competitors' customers are writing your marketing copy for you. You just need to read it.</p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. The 1-Star Review Goldmine</h3>
                            <p>Go to G2, Capterra, Trustpilot. Filter by <strong>1 Star</strong> and <strong>2 Stars</strong>. Ignore the 5-star reviews. The 1-star reviews contain the truth.</p>
                            <ul className="space-y-2 mt-3">
                                <li className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">"</span>
                                    <span><em>Support takes 3 days to reply.</em> → Your Marketing: <strong>"24/7 Live Chat Support."</strong></span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">"</span>
                                    <span><em>They raised prices without warning.</em> → Your Marketing: <strong>"Price Lock Guarantee."</strong></span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">"</span>
                                    <span><em>The mobile app crashes constantly.</em> → Your Marketing: <strong>"The #1 Rated Mobile App."</strong></span>
                                </li>
                            </ul>
                            <p className="mt-4"><strong>Strategy:</strong> Build a "Pain Matrix." List every complaint and map your specific solution to it.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Social Listening (Reddit & Twitter)</h3>
                            <p>People are more honest on Reddit than on G2.</p>
                            <ul className="list-disc ml-6 space-y-1 mt-2">
                                <li>Search: "[Competitor Name] vs" or "[Competitor Name] alternatives."</li>
                                <li>Find threads of people discussing <em>why</em> they left the competitor.</li>
                                <li><em>Example Quote:</em> "I left Hubspot because it got too expensive once I hit 1,000 contacts."</li>
                            </ul>
                            <p className="mt-3"><strong>Action:</strong> Create a landing page titled "The Affordable Hubspot Alternative for Growing Teams."</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Employee Sentiment (Glassdoor)</h3>
                            <p>Check their Glassdoor reviews.</p>
                            <ul className="list-disc ml-6 space-y-1 mt-2">
                                <li><strong>Why?</strong> Happy employees build good products. Unhappy employees build bugs.</li>
                                <li><strong>Red Flags:</strong> "Management is chaotic," "High turnover in engineering," "Sales team is pressured to lie."</li>
                            </ul>
                            <p className="mt-3 font-semibold">Insight: If their engineering team is quitting, their product quality will degrade in 6-12 months. This is your window to strike.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* XIII. BATTLECARDS */}
            <section id="battlecards" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XIII. CREATING "BATTLECARDS" FOR SALES TEAMS
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        Your sales reps are on the front lines. When a prospect says, "We are also talking to [Competitor X]," your rep needs an immediate, confident answer. They cannot say, "Let me get back to you."
                    </p>
                    <p>
                        You need a "Battlecard." This is a one-page cheat sheet for killing the competition.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Anatomy of a Winning Battlecard</h3>
                            <p className="mb-4">Do not fill it with generic text. It needs specific "Kill Shots."</p>

                            <div className="space-y-4">
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-2">1. The "Quick Dismiss" (Elevator Pitch)</h4>
                                    <p><strong>Usage:</strong> When the competitor is mentioned casually.</p>
                                    <p className="mt-1 italic">Script: "Oh, [Competitor]? They're a great legacy option if you still have on-premise servers. We usually replace them when teams want to move to the cloud for speed."</p>
                                    <p className="mt-2 text-sm">Psychology: You framed them as "Old/Slow" and yourself as "New/Fast" in one sentence.</p>
                                </div>

                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-2">2. The "Landmine" Questions (Trap-Setting)</h4>
                                    <p><strong>Usage:</strong> Questions your rep tells the prospect to ask the competitor.</p>
                                    <p className="mt-1 italic">Script: "When you talk to them, make sure you ask if their quote includes 'Tier 2 Support' or if that's an extra $5k add-on. I'd hate for you to get surprised later."</p>
                                </div>

                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-2">3. The Feature "Parity Plus"</h4>
                                    <p><strong>Usage:</strong> When the prospect says, "They have feature X."</p>
                                    <p className="mt-1 italic">Script: "Yes, they do have Feature X. However, we found that most users struggle with it because it requires coding. Our version of Feature X is drag-and-drop. Let me show you."</p>
                                </div>

                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-2">4. The Win Story (Social Proof)</h4>
                                    <p><strong>Usage:</strong> The final blow.</p>
                                    <p className="mt-1 italic">Script: "Actually, Company Y just switched from [Competitor] to us last month because they were tired of the downtime. I can send you the case study."</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Distribution and Updates</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li><strong>Format:</strong> Keep it digital (e.g., inside your CRM or a tool like Crayon/Klue).</li>
                                <li><strong>Freshness:</strong> A Battlecard from 2023 is dangerous in 2025. If the competitor updates their pricing and your rep quotes the old price, your rep looks like a liar. <strong>Update Battlecards quarterly.</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* XIV. PREDICTIVE ANALYSIS */}
            <section id="predictive-analysis" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XIV. PREDICTIVE ANALYSIS: GUESSING THEIR NEXT MOVE
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>Don't skate to where the puck is; skate to where it is going. You need to "War Game" their future strategy.</p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Hiring Map</h3>
                            <p>Look at their "Careers" page. It is a crystal ball.</p>
                            <div className="grid md:grid-cols-3 gap-4 mt-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <p className="text-sm"><strong>Scenario:</strong> Hiring 5 "Enterprise Account Executives."</p>
                                    <p className="text-sm mt-1"><strong>Prediction:</strong> Moving up-market to close bigger deals.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <p className="text-sm"><strong>Scenario:</strong> Hiring "React Native Developers."</p>
                                    <p className="text-sm mt-1"><strong>Prediction:</strong> About to launch a new mobile app.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <p className="text-sm"><strong>Scenario:</strong> Hiring "Japanese Translators."</p>
                                    <p className="text-sm mt-1"><strong>Prediction:</strong> Expanding into Asia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">B. Scenario Planning (War Games)</h3>
                            <p className="mb-3">Gather your leadership team for a 2-hour session.</p>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>Question 1:</strong> "If [Competitor] got $50 million in funding tomorrow, what would they do to kill us?"</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>Question 2:</strong> "If [Competitor] dropped their price to zero (free), how would we survive?"</span>
                                </li>
                            </ul>
                            <p className="mt-4">Why do this? It forces you to find your own weaknesses before they do. If you realize a price war would kill you, you need to build better brand loyalty <em>now</em> to insulate yourself.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* XV. ETHICAL BOUNDARIES */}
            <section id="ethical-boundaries" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XV. ETHICAL BOUNDARIES & LEGALITIES
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>There is a fine line between "Competitive Intelligence" (CI) and "Corporate Espionage." Crossing it can lead to lawsuits and reputation destruction.</p>

                    <div className="space-y-6 mt-6">
                        <div className="border border-red-800 bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-red-400 mb-3">A. The "Do Not Cross" Lines (Illegal)</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">1.</span>
                                    <span><strong>Hacking:</strong> Never access a competitor's non-public servers or backend data.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">2.</span>
                                    <span><strong>Pretexting:</strong> Never call their support line pretending to be someone else to get private account info. (Fraud).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">3.</span>
                                    <span><strong>Poaching with Malice:</strong> You cannot hire employees specifically to steal trade secrets (customer lists, code).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">4.</span>
                                    <span><strong>Dumpster Diving:</strong> Physically going through their trash. (Yes, people do this. Don't be that person).</span>
                                </li>
                            </ul>
                        </div>

                        <div className="border border-yellow-800 bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">B. The "Gray Zone" (Proceed with Caution)</h3>
                            <ul className="space-y-3">
                                <li>
                                    <strong>1. Mystery Shopping:</strong> Signing up for a demo.
                                    <p className="text-sm mt-1 ml-4">Status: Common industry practice, but often violates "Terms of Service."</p>
                                    <p className="text-sm mt-1 ml-4">Ethical Approach: Ask a friendly third-party consultant to evaluate, or rely on public YouTube demos.</p>
                                </li>
                                <li>
                                    <strong>2. Scraping Public Data:</strong> Using bots to scrape their pricing page.
                                    <p className="text-sm mt-1 ml-4">Status: Generally legal (public data), but they can block your bot.</p>
                                </li>
                            </ul>
                            <p className="mt-4 font-semibold text-yellow-400">The Golden Rule: If you wouldn't want it published on the front page of the Wall Street Journal, don't do it.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* XVI. CONCLUSION */}
            <section id="conclusion" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XVI. CONCLUSION: THE INFINITE GAME
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        Competitive Analysis is not a task you check off. It is a state of mind.
                    </p>
                    <p>
                        Markets are living ecosystems. If you stop paying attention, you will be eaten. But remember the ultimate paradox of business strategy:
                    </p>

                    <div className="my-8 p-6 bg-gray-900 border-l-4 border-green-500 rounded-r-lg">
                        <p className="text-xl font-bold text-white text-center">
                            Obsess over your customers, not your competitors.
                        </p>
                    </div>

                    <p>
                        Use competitor analysis to spot gaps, avoid traps, and sharpen your positioning. But do not let it define your roadmap. If you spend all your time looking at the runner in the lane next to you, you will trip.
                    </p>

                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-green-400 font-bold mr-2">•</span>
                            <span>Your competitor can validate a market, but they cannot build your product.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-400 font-bold mr-2">•</span>
                            <span>Your competitor can steal your features, but they cannot steal your culture.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-400 font-bold mr-2">•</span>
                            <span>Your competitor can undercut your price, but they cannot buy your trust.</span>
                        </li>
                    </ul>

                    <p className="mt-6">
                        Build a fortress of brand, execution, and customer love. Then, it doesn't matter what the competition does.
                    </p>

                    <p className="mt-8 text-xl font-semibold text-green-400">
                        You have the intel. You have the strategy. You have the battlecards.
                    </p>
                    <p className="text-2xl font-bold text-white">
                        Go win the war.
                    </p>
                </div>
            </section>
        </>
    )
};