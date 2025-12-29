import { TOCItem } from "@/components/layout/BlogLayout";
import { BLOG_IMAGES } from "@/constants/blog-images";

export const EMAIL_MARKETING_DATA: {
    title: string;
    subtitle: string;
    tocItems: TOCItem[];
    content: React.ReactNode;
} = {
    title: "The Email Marketing Master Class",
    subtitle: "From List Building to Automated Revenue: The Complete Framework",
    tocItems: [
        {
            id: "part-1-strategy",
            label: "PART 1: THE STRATEGY (LIST BUILDING & COMPLIANCE)",
            subItems: [
                { id: "introduction", label: "I. Introduction: Owned Land vs. Rented Land" },
                { id: "psychology-opt-in", label: "II. The Psychology of the Opt-In: Why People Subscribe" },
                { id: "lead-magnets", label: "III. Lead Magnets: The Value Exchange" },
                { id: "list-hygiene", label: "IV. List Hygiene & Legal Compliance (GDPR, CAN-SPAM)" },
            ]
        },
        {
            id: "part-2-infrastructure",
            label: "PART 2: THE INFRASTRUCTURE (DELIVERABILITY)",
            subItems: [
                { id: "technical-setup", label: "V. Technical Setup: SPF, DKIM, DMARC" },
                { id: "sender-reputation", label: "VI. Sender Reputation & IP Warming" },
                { id: "spam-folder", label: "VII. The Spam Folder: How to Stay Out" },
                { id: "choosing-esp", label: "VIII. Choosing the Right ESP (Email Service Provider)" },
            ]
        },
        {
            id: "part-3-content",
            label: "PART 3: THE CONTENT (COPYWRITING & DESIGN)",
            subItems: [
                { id: "subject-line", label: "IX. The Subject Line: The Gatekeeper" },
                { id: "body-copy", label: "X. The Body Copy: Storytelling & Psychology" },
                { id: "design", label: "XI. Design: HTML vs. Plain Text" },
                { id: "cta", label: "XII. The CTA: The Click" },
            ]
        },
        {
            id: "part-4-automation",
            label: "PART 4: THE AUTOMATION (FLOWS & ANALYTICS)",
            subItems: [
                { id: "core-flows", label: "XIII. The \"Core 4\" Automated Flows" },
                { id: "segmentation", label: "XIV. Segmentation Strategy" },
                { id: "analytics-testing", label: "XV. Analytics & A/B Testing" },
                { id: "conclusion", label: "XVI. Conclusion: The Infinite Asset" },
            ]
        },
    ],
    content: (
        <>
            {/* I. INTRODUCTION */}
            <section id="introduction" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    I. INTRODUCTION: OWNED LAND VS. RENTED LAND
                </h2>

                <div className="space-y-4 text-gray-300">
                    <div className="bg-blue-900/30 border border-blue-800 p-4 rounded-lg mb-6">
                        <p className="text-xl font-bold text-white text-center">
                            Social media is a cocktail party. Email is a living room.
                        </p>
                    </div>

                    <p>
                        In the digital age, businesses make a fatal mistake: they build their empires on "Rented Land." If you have 100,000 followers on Instagram, you do not own that audience. Mark Zuckerberg owns it. A single algorithm change can wipe out your reach overnight.
                    </p>

                    <div className="bg-gray-900 p-4 lg:p-6 rounded-lg mt-6">
                        <p className="text-xl font-semibold text-green-400 mb-3">Email is "Owned Land."</p>
                        <p>When you have an email list, you have a direct line of communication to your customers that no algorithm can block. You own the asset.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-gray-900 p-4 rounded-lg">
                            <h3 className="font-bold text-green-400 mb-1">The ROI Reality</h3>
                            <ul className="text-sm space-y-1">
                                <li>$36 to $42 for every $1 spent</li>
                                <li>40x more effective than Facebook/Twitter</li>
                                <li>99% check email daily</li>
                            </ul>
                        </div>
                    </div>

                    <p className="mt-4">
                        However, the era of "Spray and Pray" is over. Modern email marketing is not about blasting a generic newsletter to 10,000 people. It is about sending the right message, to the right person, at the right time. It is about intimacy and relevance.
                    </p>

                    <p className="font-bold">
                        This master class will take you from a novice "blaster" to an advanced "architect" of automated revenue.
                    </p>


                </div>
            </section>

            {/* II. PSYCHOLOGY OF OPT-IN */}
            <section id="psychology-opt-in" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    II. THE PSYCHOLOGY OF THE OPT-IN: WHY PEOPLE SUBSCRIBE
                </h2>

                <div className="space-y-4 text-gray-300">
                    <p className="text-xl font-bold">
                        Nobody wakes up in the morning and says, "I wish I had more emails."
                    </p>
                    <p>People protect their inboxes fiercely. To get an email address, you must overcome friction. You must understand the "Transaction of Trust."</p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Value Equation</h3>
                            <p className="mb-3">An email address is a currency.</p>
                            <div className="bg-gray-800 p-4 rounded-md">
                                <p className="font-bold text-green-400">The User Asks:</p>
                                <p>"Is the value of what you are offering greater than the annoyance of your future emails?"</p>
                                <div className="grid md:grid-cols-2 gap-4 mt-3">
                                    <div className="border border-green-800 p-3 rounded">
                                        <p className="text-green-400 font-bold">If Value greater than Friction</p>
                                        <p className="text-sm">= Subscribed</p>
                                    </div>
                                    <div className="border border-red-800 p-3 rounded">
                                        <p className="text-red-400 font-bold">If Value less than Friction</p>
                                        <p className="text-sm">= Bounce</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. The 3 Types of Opt-In Motivation</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-yellow-400 mb-2">1. Transactional (The Discount)</h4>
                                    <p className="text-sm mb-2">"Sign up for 10% off."</p>
                                    <p className="text-xs text-green-400">✓ High conversion rate</p>
                                    <p className="text-xs text-red-400 mt-1">✗ Low quality. Want deal, not relationship</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-2">2. Educational (Lead Magnet)</h4>
                                    <p className="text-sm mb-2">"Download the Ultimate Guide to SEO."</p>
                                    <p className="text-xs text-green-400">✓ High intent. See you as expert</p>
                                    <p className="text-xs text-red-400 mt-1">✗ Requires effort to create</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-purple-400 mb-2">3. Exclusive (The Access)</h4>
                                    <p className="text-sm mb-2">"Join the waitlist," "Get early access"</p>
                                    <p className="text-xs text-green-400">✓ Creates FOMO, high loyalty</p>
                                    <p className="text-xs text-red-400 mt-1">✗ Works for established brands only</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">C. Double Opt-In vs. Single Opt-In</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-800 p-4 rounded-lg">
                                    <h4 className="font-bold text-orange-400 mb-2">Single Opt-In</h4>
                                    <p className="text-sm">User types email → On the list</p>
                                    <div className="mt-3">
                                        <p className="text-green-400 text-sm">✓ Faster growth</p>
                                        <p className="text-red-400 text-sm">✗ More fake emails/typos</p>
                                    </div>
                                </div>
                                <div className="bg-gray-800 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-2">Double Opt-In</h4>
                                    <p className="text-sm">User types email → Confirmation link → Clicks → On list</p>
                                    <div className="mt-3">
                                        <p className="text-green-400 text-sm">✓ Higher quality, better deliverability</p>
                                        <p className="text-red-400 text-sm">✗ Slower growth</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-4 font-bold text-green-400">
                                Recommendation: Use Double Opt-In. A smaller, engaged list is better than a massive, dead one.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* III. LEAD MAGNETS */}
            <section id="lead-magnets" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    III. LEAD MAGNETS: THE VALUE EXCHANGE
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="text-xl font-bold text-red-400">
                        "Join our Newsletter" is a dead call-to-action (CTA). No one wants a newsletter. They want a solution.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. Characteristics of a High-Converting Lead Magnet</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">1. Specific Solution</h4>
                                    <p className="text-sm">Not "How to get fit." Use "The 15-Minute Kettlebell Routine for Busy Dads."</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">2. Immediate Gratification</h4>
                                    <p className="text-sm">Avoid 300-page ebooks. Give a checklist, template, or cheat sheet they can use now.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">3. High Perceived Value</h4>
                                    <p className="text-sm">Should look like something you could charge $20 for.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Types of Lead Magnets</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-gray-900 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400 mb-1">Checklist/Cheat Sheet</h4>
                                    <p className="text-sm">Condensed value. "The Packing List for Digital Nomads"</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400 mb-1">Template</h4>
                                    <p className="text-sm">Saves time. "3 Copy-Paste Email Scripts for Sales"</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400 mb-1">Quiz</h4>
                                    <p className="text-sm">Interactive. High conversion. "What is your Skin Type?"</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400 mb-1">Webinar/Masterclass</h4>
                                    <p className="text-sm">High commitment, high trust. Best for high-ticket.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">C. The Landing Page (Squeeze Page)</h3>
                            <p>Where does the user sign up?</p>
                            <div className="space-y-3 mt-3">
                                <div className="bg-gray-800 p-3 rounded">
                                    <p className="font-bold text-green-400">The Headline</p>
                                    <p className="text-sm">Must state benefit, not features.</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <p className="font-bold text-green-400">The Bullets</p>
                                    <p className="text-sm">3-5 punchy points on what they will learn.</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <p className="font-bold text-green-400">The Form</p>
                                    <p className="text-sm">Ask for as little as possible.</p>
                                    <ul className="text-xs mt-1 space-y-1">
                                        <li>Just "Email": Best conversion</li>
                                        <li>Add "First Name": Drops conversion ~10%</li>
                                        <li>Add "Phone Number": Drops conversion ~50%</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IV. LIST HYGIENE & COMPLIANCE */}
            <section id="list-hygiene" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    IV. LIST HYGIENE & LEGAL COMPLIANCE (THE BORING BUT VITAL PART)
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="text-red-400 font-bold">
                        Before you send a single email, you must ensure you aren't breaking the law. Email laws are strict, and fines are massive.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. GDPR (General Data Protection Regulation) - Europe</h3>
                            <p className="text-red-400 mb-2">Even if you're in the US, if you have a single subscriber in Europe, you must comply.</p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li><strong>Explicit Consent:</strong> Pre-checked boxes are illegal. User must physically click "I agree."</li>
                                <li><strong>Right to be Forgotten:</strong> If a user asks to be deleted, you must scrub them completely.</li>
                                <li><strong>Data Controller:</strong> You must state clearly who you are and how you use the data.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. CAN-SPAM Act - United States</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li><strong>No False Headers:</strong> The "From" name must be accurate. Can't pretend to be "The IRS" or "Amazon Support."</li>
                                <li><strong>Physical Address:</strong> MUST include valid physical postal address in every email footer. (Use a PO Box if you work from home).</li>
                                <li><strong>Easy Opt-Out:</strong> Unsubscribe link must be visible and work instantly (within 10 days). Making people log in to unsubscribe is illegal.</li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-red-500">
                            <h3 className="text-xl font-semibold text-white mb-3">C. List Hygiene: The Sunset Policy</h3>
                            <p className="text-red-400 font-bold mb-3">Most people hoard emails like trophies. "I have a list of 50,000!" If 40,000 haven't opened in 6 months, they are toxic waste.</p>
                            <div className="bg-gray-800 p-4 rounded-lg mb-4">
                                <p className="font-bold text-green-400">Why?</p>
                                <p className="text-sm">Gmail looks at Engagement Rates. If you send to 50k and only 1k open it (2%), Gmail assumes you are spam and moves you to Junk for everyone.</p>
                            </div>
                            <p className="font-bold text-white">The Strategy:</p>
                            <ol className="list-decimal ml-6 space-y-2 mt-2">
                                <li>Clean list every quarter.</li>
                                <li>Segment: Anyone who hasn't opened in 90 days.</li>
                                <li>Action: Send "Re-engagement Campaign" ("Do you still want to hear from us?").</li>
                                <li>Result: If they don't click, DELETE THEM.</li>
                            </ol>
                            <p className="mt-4 font-bold text-green-400">
                                Benefit: A list of 10,000 with 40% open rate is infinitely more profitable than 50,000 with 2% open rate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* V. TECHNICAL SETUP */}
            <section id="technical-setup" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    V. TECHNICAL SETUP: SPF, DKIM, DMARC (THE HOLY TRINITY)
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="text-red-400 font-bold">
                        In 2024, Gmail and Yahoo rolled out strict new requirements. If you do not have these set up, your emails will bounce.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gray-900 p-5 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-400 mb-3">1. SPF (Sender Policy Framework)</h3>
                                <p className="text-sm mb-3"><em>"The Guest List"</em></p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start">
                                        <span className="text-blue-400 font-bold mr-2">•</span>
                                        <span>A DNS record listing which IP addresses can send email on your behalf.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 font-bold mr-2">•</span>
                                        <span>Analogy: The bouncer at the club with a clipboard.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-400 font-bold mr-2">•</span>
                                        <span>Risk: Without SPF, spammers can spoof your domain easily.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-900 p-5 rounded-lg">
                                <h3 className="text-xl font-bold text-green-400 mb-3">2. DKIM (DomainKeys Identified Mail)</h3>
                                <p className="text-sm mb-3"><em>"The Wax Seal"</em></p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start">
                                        <span className="text-green-400 font-bold mr-2">•</span>
                                        <span>Encrypted digital signature added to email header.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-400 font-bold mr-2">•</span>
                                        <span>Analogy: A wax seal on an envelope.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-400 font-bold mr-2">•</span>
                                        <span>Setup: ESP gives public key to put in DNS.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-900 p-5 rounded-lg">
                                <h3 className="text-xl font-bold text-red-400 mb-3">3. DMARC (Domain-based Message Authentication)</h3>
                                <p className="text-sm mb-3"><em>"The Rule Book"</em></p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start">
                                        <span className="text-red-400 font-bold mr-2">•</span>
                                        <span>Tells Gmail what to do if email fails SPF/DKIM.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-400 font-bold mr-2">•</span>
                                        <span><code>p=none</code>: Just report, but deliver (Start here)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-400 font-bold mr-2">•</span>
                                        <span><code>p=quarantine</code>: Put in Spam folder</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-400 font-bold mr-2">•</span>
                                        <span><code>p=reject</code>: Bounce immediately (Goal)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-md border-l-4 border-red-500">
                            <p className="font-bold text-white">Action Step:</p>
                            <p>Go to <code className="bg-gray-900 px-2 py-1 rounded">mxtoolbox.com</code> and run a domain scan. If you see red X's next to these three, stop sending emails and fix your DNS immediately.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* VI. SENDER REPUTATION */}
            <section id="sender-reputation" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VI. SENDER REPUTATION & IP WARMING
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="text-xl font-bold">
                        You have a "Credit Score" for email. It is called Sender Reputation.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. Domain Reputation vs. IP Reputation</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-blue-400 mb-1">IP Reputation</h4>
                                    <p className="text-sm">Tied to specific server address sending mail.</p>
                                    <p className="text-xs text-red-400 mt-1">Shared IPs are risky. If another user spams, your reputation drops.</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">Domain Reputation</h4>
                                    <p className="text-sm">Tied to your website URL (@yourcompany.com).</p>
                                    <p className="text-xs text-green-400 mt-1">Follows you even if you switch email providers.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">B. The Warming Process</h3>
                            <p className="text-red-400 font-bold mb-3">If you buy a new domain today and try to send 10,000 emails tomorrow, you will be blocked. You look like a spammer.</p>
                            <div className="space-y-3">
                                <div className="flex items-center bg-gray-800 p-3 rounded">
                                    <div className="text-green-400 font-bold mr-4">Week 1</div>
                                    <div>Send 50 emails/day to most engaged users</div>
                                </div>
                                <div className="flex items-center bg-gray-800 p-3 rounded ml-4">
                                    <div className="text-green-400 font-bold mr-4">Week 2</div>
                                    <div>Send 100 emails/day</div>
                                </div>
                                <div className="flex items-center bg-gray-800 p-3 rounded ml-8">
                                    <div className="text-green-400 font-bold mr-4">Week 3</div>
                                    <div>Send 500 emails/day</div>
                                </div>
                                <div className="flex items-center bg-gray-800 p-3 rounded ml-12">
                                    <div className="text-green-400 font-bold mr-4">Week 4</div>
                                    <div>Full volume</div>
                                </div>
                            </div>
                            <p className="mt-4">Why? This teaches Gmail you are legitimate and people open your emails.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. The "Gmail Promotions Tab" Purgatory</h3>
                            <p>Gmail sorts email into Primary, Social, and Promotions. Goal: You want the Primary tab.</p>
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-gray-900 p-3 rounded border border-red-800">
                                    <p className="text-red-400 font-bold mb-1">Triggers for Promotions Tab</p>
                                    <ul className="text-sm space-y-1">
                                        <li>Too many images</li>
                                        <li>Heavy HTML code</li>
                                        <li>Words like "Free," "Sale," "Discount"</li>
                                        <li>Too many links</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-900 p-3 rounded border border-green-800">
                                    <p className="text-green-400 font-bold mb-1">The Fix</p>
                                    <p className="text-sm">Send "Plain Text" style emails that look like a personal letter. Ask users to "Reply" to your email. A reply is the strongest signal to Google that this is personal, moving you to Primary.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VII. SPAM FOLDER */}
            <section id="spam-folder" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VII. THE SPAM FOLDER: HOW TO STAY OUT
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>Spam filters use AI to scan your content, code, and behavior. Here are the red flags to avoid.</p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Content Triggers</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-red-400 mb-1">Trigger Words</h4>
                                    <p className="text-sm">"Make Money Fast," "100% Free," "Guarantee," "Click Here"</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-red-400 mb-1">ALL CAPS</h4>
                                    <p className="text-sm font-bold">WRITING LIKE THIS IS A TICKET TO SPAM</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-red-400 mb-1">Punctuation Abuse</h4>
                                    <p className="text-sm">"Free!!!!!!!" (Multiple exclamation marks)</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. The Image-to-Text Ratio</h3>
                            <p>Spammers hide text inside images to fool scanners. Filters hate emails that are just one giant image.</p>
                            <div className="bg-gray-800 p-4 rounded-lg mt-3">
                                <p className="font-bold text-green-400">Rule: Aim for 60% Text, 40% Image.</p>
                                <p className="text-sm mt-1">Always include body text.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-red-500">
                            <h3 className="text-xl font-semibold text-white mb-3">C. The Unsubscribe Trap</h3>
                            <p className="text-red-400 font-bold mb-2">Never hide your Unsubscribe link.</p>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">•</span>
                                    <span>If a user can't find unsubscribe, they hit "Report Spam."</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">•</span>
                                    <span>One "Report Spam" causes more damage than 1,000 unsubscribes.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span>Strategy: Put Unsubscribe link at top if you're worried about complaints. It saves your reputation.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">D. Trap Accounts (Honeypots)</h3>
                            <p>ISPs create fake email addresses scattered around the web. If you scrape the web for emails and hit a "Honeypot," you're instantly blacklisted.</p>
                            <div className="bg-gray-800 p-4 rounded-lg mt-3">
                                <p className="font-bold text-red-400">Prevention: Never buy lists. Always use Double Opt-In.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VIII. CHOOSING ESP */}
            <section id="choosing-esp" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VIII. CHOOSING THE RIGHT ESP (EMAIL SERVICE PROVIDER)
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>Your ESP is your vehicle. You need the right car for the race.</p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. The "Marketing" Platforms (B2C / E-commerce)</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-purple-400 mb-1">Klaviyo</h4>
                                    <p className="text-sm mb-2">King of E-commerce. Deep Shopify integration.</p>
                                    <p className="text-xs text-green-400">Best for: Product data, e-commerce flows</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-orange-400 mb-1">Mailchimp</h4>
                                    <p className="text-sm mb-2">Old standard. Good for beginners.</p>
                                    <p className="text-xs text-yellow-400">Cons: Gets expensive, lacks advanced logic</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">ConvertKit</h4>
                                    <p className="text-sm mb-2">Best for Creators, Bloggers, Coaches.</p>
                                    <p className="text-xs text-green-400">Focus: Text-heavy emails, simple automation</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. The "Sales/CRM" Platforms (B2B)</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-blue-400 mb-1">HubSpot</h4>
                                    <p className="text-sm mb-2">All-in-one CRM and Email.</p>
                                    <p className="text-xs text-green-400">Best for B2B sales teams</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-yellow-400 mb-1">ActiveCampaign</h4>
                                    <p className="text-sm mb-2">Automation powerhouse. Extremely complex logic.</p>
                                    <p className="text-xs text-green-400">Best for advanced funnels</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg border border-red-800">
                            <h3 className="text-xl font-semibold text-red-400 mb-3">C. The "Cold Email" Platforms (Outbound)</h3>
                            <p className="text-red-400 font-bold mb-2">WARNING: Do NOT use Mailchimp/Klaviyo for cold emailing (sending to people who didn't opt-in). They will ban you.</p>
                            <p>Use specialized tools: <strong className="text-green-400">Lemlist, Instantly, or Apollo</strong>. These throttle sending to mimic human behavior.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">D. Migration Strategy</h3>
                            <p>Moving ESPs is dangerous.</p>
                            <ul className="list-disc ml-6 space-y-2 mt-2">
                                <li>Do NOT move "Unsubscribed" or "Bounced" contacts to new platform.</li>
                                <li>Start with your best list (Active 30 days) to establish high reputation immediately.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* IX. SUBJECT LINE */}
            <section id="subject-line" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    IX. THE SUBJECT LINE: THE GATEKEEPER
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="text-xl font-bold">
                        The subject line is the most expensive real estate in digital marketing. If it fails, the email is deleted unread. You have roughly 40 characters to earn a click.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. The 4 U's Framework</h3>
                            <p>A great subject line should hit at least two of these:</p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
                                <div className="bg-gray-900 p-3 rounded text-center">
                                    <h4 className="font-bold text-red-400 mb-1">Urgent</h4>
                                    <p className="text-sm">"Sale ends in 3 hours."</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400 mb-1">Ultra-Specific</h4>
                                    <p className="text-sm">"How I made $4,302 yesterday."</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded text-center">
                                    <h4 className="font-bold text-blue-400 mb-1">Unique</h4>
                                    <p className="text-sm">"Why I put butter in my coffee."</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded text-center">
                                    <h4 className="font-bold text-yellow-400 mb-1">Useful</h4>
                                    <p className="text-sm">"The 5-step checklist for SEO."</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Psychological Patterns That Work</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">The Open Loop (Curiosity)</h4>
                                    <p className="text-sm italic">"You're going to hate this..."</p>
                                    <p className="text-xs mt-1">Psychology: Human brain needs to close the loop.</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-yellow-400 mb-1">The "Re:" Fakeout</h4>
                                    <p className="text-sm italic">"Re: Your order" or "Re: Our meeting"</p>
                                    <p className="text-xs mt-1 text-red-400">Warning: Gets high opens but high spam complaints if misleading.</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-blue-400 mb-1">The Personal Question</h4>
                                    <p className="text-sm italic">"Quick question, [Name]?"</p>
                                    <p className="text-xs mt-1">Works incredibly well for B2B sales.</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-red-400 mb-1">The Negative Warning</h4>
                                    <p className="text-sm italic">"Don't buy Bitcoin until you read this."</p>
                                    <p className="text-xs mt-1">Fear of loss is 2x stronger than desire for gain.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">C. The Pre-Header (The Preview Text)</h3>
                            <p className="text-red-400 font-bold mb-2">The Mistake: Leaving it blank. It defaults to "View this email in browser" or "Unsubscribe," wasting space.</p>
                            <div className="bg-gray-800 p-4 rounded-lg mt-3">
                                <p className="font-bold text-green-400">The Strategy: Use it to answer or expand on the subject line.</p>
                                <div className="mt-2">
                                    <p className="text-sm"><strong>Subject:</strong> "I have a surprise for you..."</p>
                                    <p className="text-sm"><strong>Pre-Header:</strong> "...and it's 50% off your favorite shoes."</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* X. BODY COPY */}
            <section id="body-copy" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    X. THE BODY COPY: STORYTELLING & PSYCHOLOGY
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>Once they open, you have 8 seconds to hook them. Do not write like a corporation. Write like a human.</p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">A. The "Bar Stool" Test</h3>
                            <p className="font-bold text-green-400">Read your email out loud. If you wouldn't say it to a friend at a bar, rewrite it.</p>
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-gray-800 p-3 rounded border border-red-800">
                                    <p className="text-red-400 font-bold mb-1">✗ Corporate</p>
                                    <p className="text-sm italic">"We are pleased to announce the launch of our new initiative."</p>
                                    <p className="text-xs mt-1 text-red-400">Boring. Deleted.</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded border border-green-800">
                                    <p className="text-green-400 font-bold mb-1">✓ Human</p>
                                    <p className="text-sm italic">"I'm so excited to finally show you what we've been building."</p>
                                    <p className="text-xs mt-1 text-green-400">Better.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. The PAS Framework (Problem-Agitate-Solution)</h3>
                            <p className="font-bold">The gold standard for sales emails.</p>
                            <div className="grid md:grid-cols-3 gap-4 mt-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-red-400 mb-1">1. Problem</h4>
                                    <p className="text-sm">Identify the pain. "Struggling to get leads?"</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-yellow-400 mb-1">2. Agitate</h4>
                                    <p className="text-sm">Twist the knife. "It's frustrating when you spend all day on LinkedIn..."</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">3. Solution</h4>
                                    <p className="text-sm">Offer the fix. "That's why we built LeadGen 3000."</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Formatting for Scanners</h3>
                            <p>People do not read on screens; they scan.</p>
                            <div className="grid md:grid-cols-3 gap-4 mt-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">No Walls of Text</h4>
                                    <p className="text-sm">Paragraphs should be 1-2 sentences max.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Use Bullets</h4>
                                    <p className="text-sm">Break up visual flow, easy to digest.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Bold Key Phrases</h4>
                                    <p className="text-sm">If they only read <strong>bold text</strong>, they should understand.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">D. The "You" to "I" Ratio</h3>
                            <p>Count the number of times you say "I" or "We" versus "You."</p>
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-gray-800 p-3 rounded border border-red-800">
                                    <p className="text-red-400 font-bold mb-1">✗ Bad</p>
                                    <p className="text-sm italic">"We just launched our new feature because we worked hard."</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded border border-green-800">
                                    <p className="text-green-400 font-bold mb-1">✓ Good</p>
                                    <p className="text-sm italic">"You can now save 5 hours a week with this new feature."</p>
                                </div>
                            </div>
                            <p className="mt-4 font-bold">The hero of the story is the customer, not the brand.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* XI. DESIGN */}
            <section id="design" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XI. DESIGN: HTML VS. PLAIN TEXT
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="text-xl font-bold">There is a raging debate in email marketing: Beautiful Design vs. Ugly Text.</p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-400 mb-3">A. The Case for Plain Text</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Deliverability</h4>
                                    <p className="text-sm">Gmail sees code-heavy emails as "Promotions." Plain text often lands in "Primary."</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Intimacy</h4>
                                    <p className="text-sm">Feels like a personal letter from a friend.</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Best For</h4>
                                    <p className="text-sm">Consultants, B2B Sales, Coaches, Storytellers.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-purple-400 mb-3">B. The Case for HTML (Design)</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Visual Appeal</h4>
                                    <p className="text-sm">Can't sell a luxury handbag with text. Need photos.</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Branding</h4>
                                    <p className="text-sm">Reinforces colors and logo.</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Best For</h4>
                                    <p className="text-sm">E-commerce, Fashion, Travel, SaaS (product screenshots).</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-green-500">
                            <h3 className="text-xl font-semibold text-white mb-3">C. The Hybrid Approach (The Winner)</h3>
                            <p className="font-bold text-green-400">Use a "Stripped Down" HTML template.</p>
                            <ul className="space-y-2 mt-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span>Looks like plain text (white background, black text, left-aligned)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span>Allows for a logo at top and distinct button at bottom</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span>Yields highest conversion rates across industries</span>
                                </li>
                            </ul>
                            <p className="mt-3">Blends authority with intimacy.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* XII. CTA */}
            <section id="cta" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XII. THE CTA (CALL TO ACTION): THE CLICK
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="font-bold">
                        The goal of an email is rarely to sell; it is to get a click. The sale happens on the landing page.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">A. The "Rule of One"</h3>
                            <p className="text-red-400 font-bold mb-2">Every email should have ONE goal.</p>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <p className="font-bold text-red-400">Do NOT ask them to:</p>
                                <p className="text-sm">"Read the blog," "Follow on Instagram," AND "Buy the product."</p>
                                <p className="mt-3 text-green-400 font-bold">This is "The Paradox of Choice." When faced with too many options, users choose none.</p>
                            </div>
                            <p className="mt-4 font-bold">Pick one link.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Button vs. Text Link</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Buttons</h4>
                                    <p className="text-sm">Good for mobile tapping. Use contrasting color.</p>
                                    <p className="text-xs mt-1 text-green-400">Example: Orange button on White background</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Text Links</h4>
                                    <p className="text-sm">Feel more natural within body copy.</p>
                                </div>
                            </div>
                            <p className="mt-4 font-bold">Strategy: Use both. Text link in first paragraph, Button at the end.</p>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">C. The P.S. Strategy</h3>
                            <p className="font-bold text-green-400">The P.S. (Postscript) is the second most-read part of an email (after the headline).</p>
                            <div className="bg-gray-800 p-4 rounded-lg mt-3">
                                <p className="font-bold">Why?</p>
                                <p className="text-sm">Scanners scroll to the bottom to look for unsubscribe link or signature.</p>
                                <div className="mt-3">
                                    <p className="font-bold text-green-400">Strategy:</p>
                                    <p className="text-sm italic">Summarize the offer and repeat the link in the P.S.</p>
                                    <p className="text-sm mt-2">"P.S. The 50% discount expires at midnight. Click here to grab it before it's gone."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* XIII. CORE FLOWS */}
            <section id="core-flows" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XIII. THE "CORE 4" AUTOMATED FLOWS
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="text-xl font-bold">
                        Campaigns are manual emails you send once (e.g., a newsletter).
                        Flows (Sequences) are automated emails triggered by user behavior.
                    </p>
                    <p className="text-green-400 font-bold">Flows generate 2% of the email volume but often 40-50% of the revenue.</p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-400 mb-3">A. The Welcome Series (The First Impression)</h3>
                            <div className="grid md:grid-cols-4 gap-4">
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400 mb-1">Trigger</h4>
                                    <p className="text-xs">User joins list</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400 mb-1">Stats</h4>
                                    <p className="text-xs">Highest open rate (50-80%)</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400 mb-1">Email 1</h4>
                                    <p className="text-xs">Immediate: Deliver Lead Magnet</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400 mb-1">Goal</h4>
                                    <p className="text-xs">Turn stranger into friend</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="font-bold">Sequence:</p>
                                <ol className="list-decimal ml-6 space-y-1">
                                    <li><strong>Immediate:</strong> Deliver Lead Magnet/Discount. Introduce brand ethos.</li>
                                    <li><strong>Day 2:</strong> Value add. "Here is our best content." No hard sell.</li>
                                    <li><strong>Day 4:</strong> Soft Sell. "Did you know we offer X?"</li>
                                </ol>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-400 mb-3">B. The Abandoned Cart Flow (The Cash Cow)</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Trigger</h4>
                                    <p className="text-xs">Adds item to cart, enters email, doesn't checkout</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Timing</h4>
                                    <p className="text-xs">Critical. Sequence matters.</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Strategy</h4>
                                    <p className="text-xs">Don't offer discount in Email 1</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="font-bold">Sequence:</p>
                                <ol className="list-decimal ml-6 space-y-2">
                                    <li><strong>Email 1 (1 Hour):</strong> "Did you forget something?" (High service tone)</li>
                                    <li><strong>Email 2 (12-24 Hours):</strong> "Your cart is expiring." (Scarcity)</li>
                                    <li><strong>Email 3 (48 Hours):</strong> "Here is 10% off to finish." (The bribe)</li>
                                </ol>
                            </div>
                            <p className="mt-4 text-red-400 font-bold">Strategy: Do NOT offer discount in Email 1. You'll train customers to abandon carts on purpose just to get coupon.</p>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-purple-400 mb-3">C. The Post-Purchase Flow (Retention)</h3>
                            <p className="text-red-400 font-bold mb-3">Most brands ignore customers after they pay. This is a mistake.</p>
                            <div className="space-y-3">
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Email 1 (Immediate)</h4>
                                    <p className="text-sm">Transactional Receipt + "Welcome to the family."</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Email 2 (Shipping)</h4>
                                    <p className="text-sm">"It's on the way."</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Email 3 (7-14 Days)</h4>
                                    <p className="text-sm">"How is it?" Ask for Review / UGC.</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Email 4 (30 Days)</h4>
                                    <p className="text-sm">Cross-Sell. "If you liked Shampoo, you'll love Conditioner."</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-red-500">
                            <h3 className="text-xl font-semibold text-white mb-3">D. The Win-Back / Sunset Flow (Hygiene)</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-red-400 mb-1">Trigger</h4>
                                    <p className="text-xs">No opens/clicks in 90 days</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Psychology</h4>
                                    <p className="text-xs">"Breakup Email" has high conversion</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="font-bold">Sequence:</p>
                                <ol className="list-decimal ml-6 space-y-2">
                                    <li><strong>Email 1:</strong> "We miss you." (Emotional hook)</li>
                                    <li><strong>Email 2:</strong> "Is it something we said?" (Survey)</li>
                                    <li><strong>Email 3:</strong> "This is goodbye." (The Breakup)</li>
                                </ol>
                            </div>
                            <p className="mt-4 font-bold text-green-400">
                                Psychology: Surprisingly, the "Breakup Email" has high conversion. People hate losing access. If they don't reply, delete them.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* XIV. SEGMENTATION */}
            <section id="segmentation" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XIV. SEGMENTATION STRATEGY: THE POWER OF RFM
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="text-red-400 font-bold">
                        Sending the same email to everyone is lazy and expensive. You must segment. The gold standard is <strong>RFM Analysis</strong>.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <h3 className="text-xl font-bold text-green-400 mb-2">Recency (R)</h3>
                                <p className="text-sm mb-2">How recently did they buy?</p>
                                <div className="space-y-1">
                                    <p className="text-xs text-green-400">Segment: "Active 30 Days" vs. "Lapsed 180 Days"</p>
                                    <p className="text-xs">Action: Recent buyers are "hot." Send new launches. Lapsed buyers get heavy discounts.</p>
                                </div>
                            </div>
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-400 mb-2">Frequency (F)</h3>
                                <p className="text-sm mb-2">How often do they buy?</p>
                                <div className="space-y-1">
                                    <p className="text-xs text-green-400">Segment: "One-time Buyers" vs. "VIPs (3+ purchases)"</p>
                                    <p className="text-xs">Action: Treat VIPs like royalty. Early access to sales. No generic offers.</p>
                                </div>
                            </div>
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <h3 className="text-xl font-bold text-purple-400 mb-2">Monetary (M)</h3>
                                <p className="text-sm mb-2">How much do they spend?</p>
                                <div className="space-y-1">
                                    <p className="text-xs text-green-400">Segment: "High Rollers (AOV greater than $200)" vs. "Bargain Hunters"</p>
                                    <p className="text-xs">Action: Don't send discount to High Roller. Send exclusive "Concierge" offers.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">D. Behavioral Segmentation</h3>
                            <p>Based on clicks.</p>
                            <div className="bg-gray-800 p-4 rounded-lg mt-3">
                                <p className="font-bold">Scenario:</p>
                                <p className="text-sm">User clicks link about "Men's Shoes" 3 times but never buys.</p>
                                <div className="mt-3">
                                    <p className="font-bold text-green-400">Action:</p>
                                    <p className="text-sm">Tag them "Interest: Men's Shoes." Send dedicated email just about Men's Shoes.</p>
                                </div>
                                <p className="mt-3 font-bold text-green-400">Conversion probability skyrockets because relevance is 100%.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* XV. ANALYTICS & TESTING */}
            <section id="analytics-testing" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XV. ANALYTICS & A/B TESTING: THE FEEDBACK LOOP
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="font-bold">
                        You cannot improve what you do not measure. But beware of "Vanity Metrics."
                    </p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-red-500">
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Apple Privacy Problem (Open Rates are Dead)</h3>
                            <p className="text-red-400 font-bold">Since iOS15, Apple automatically "opens" every email to scan it. This inflates Open Rates artificially.</p>
                            <div className="bg-gray-800 p-4 rounded-lg mt-3">
                                <p className="font-bold">Result:</p>
                                <p className="text-sm">Your 40% Open Rate might actually be 20%.</p>
                                <p className="mt-3 font-bold text-green-400">New North Star: Focus on <strong>Click-Through Rate (CTR)</strong> and <strong>Revenue Per Recipient (RPR)</strong>. Clicks don't lie.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Key Metrics to Watch</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Click Rate</h4>
                                    <p className="text-sm">Target greater than 1-2%</p>
                                    <p className="text-xs text-red-400">If low: copy/offer weak</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Bounce Rate</h4>
                                    <p className="text-sm">Target less than 0.5%</p>
                                    <p className="text-xs text-red-400">If high: list quality trash</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Unsubscribe Rate</h4>
                                    <p className="text-sm">Target less than 0.3%</p>
                                    <p className="text-xs text-red-400">If high: annoying or irrelevant</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Spam Complaint Rate</h4>
                                    <p className="text-sm">Target less than 0.1%</p>
                                    <p className="text-xs text-red-400">If 0.3%: Gmail will block you</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">C. A/B Testing (Split Testing) Rules</h3>
                            <div className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-gray-800 p-3 rounded border border-red-800">
                                        <p className="text-red-400 font-bold mb-1">✗ Bad Test</p>
                                        <p className="text-sm">Different Subject Line AND Different Image</p>
                                        <p className="text-xs mt-1 text-red-400">Won't know which caused win</p>
                                    </div>
                                    <div className="bg-gray-800 p-3 rounded border border-green-800">
                                        <p className="text-green-400 font-bold mb-1">✓ Good Test</p>
                                        <p className="text-sm">Same Email, two different Subject Lines</p>
                                        <p className="text-xs mt-1 text-green-400">Isolates variable</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="font-bold text-green-400">Rule 2: Statistical Significance</p>
                                    <p className="text-sm">Don't test on 100 people. Need at least 1,000 for reliable data.</p>
                                </div>

                                <div>
                                    <p className="font-bold">What to Test:</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        <span className="bg-gray-800 px-3 py-1 rounded text-sm">Subject Lines</span>
                                        <span className="bg-gray-800 px-3 py-1 rounded text-sm">CTA (Button color/text)</span>
                                        <span className="bg-gray-800 px-3 py-1 rounded text-sm">Send Time</span>
                                        <span className="bg-gray-800 px-3 py-1 rounded text-sm">Sender Name</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* XVI. CONCLUSION */}
            <section id="conclusion" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XVI. CONCLUSION: THE INFINITE ASSET
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="text-xl font-bold">
                        We have covered the entire ecosystem of Email Marketing.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                        <div className="bg-gray-900 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-green-400 mb-2">1.</div>
                            <p className="font-bold">Strategy</p>
                            <p className="text-sm">Building "Owned Land" with Lead Magnets</p>
                        </div>
                        <div className="bg-gray-900 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-2">2.</div>
                            <p className="font-bold">Infrastructure</p>
                            <p className="text-sm">Protecting reputation with SPF/DKIM</p>
                        </div>
                        <div className="bg-gray-900 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-purple-400 mb-2">3.</div>
                            <p className="font-bold">Content</p>
                            <p className="text-sm">Writing psychological copy that hooks</p>
                        </div>
                        <div className="bg-gray-900 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-yellow-400 mb-2">4.</div>
                            <p className="font-bold">Automation</p>
                            <p className="text-sm">Building "Core 4" flows to print money</p>
                        </div>
                    </div>

                    <div className="my-8 p-6 bg-gray-900 border-l-4 border-green-500 rounded-r-lg">
                        <p className="text-xl font-bold text-white text-center">
                            Email is not the newest, shiniest tool in the shed. It is not TikTok. It is not the Metaverse.
                        </p>
                        <p className="text-center text-green-400 mt-2">
                            It is the boring, reliable, profitable workhorse of the digital economy.
                        </p>
                    </div>

                    <p>
                        While other brands chase the latest algorithm trends, you will be building a fortress. A list of 10,000 loyal subscribers who trust you is worth more than 1 million passive followers on social media.
                    </p>

                    <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-6 rounded-xl border border-green-800 mt-6">
                        <p className="text-lg font-bold text-white text-center">
                            Treat the inbox with respect. Provide value. Be human.
                        </p>
                        <p className="text-center text-2xl font-bold text-green-400 mt-2">
                            If you do that, you will never go hungry.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
};