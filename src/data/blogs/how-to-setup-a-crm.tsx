import { TOCItem } from "@/components/layout/BlogLayout";
import { BLOG_IMAGES } from "@/constants/blog-images";

export const CRM_SETUP_DATA: {
    title: string;
    subtitle: string;
    tocItems: TOCItem[];
    content: React.ReactNode;
} = {
    title: "The CRM Master Class",
    subtitle: "Building a Revenue Engine: From Selection to Scale",
    tocItems: [
        {
            id: "part-1-strategy",
            label: "PART 1: THE STRATEGY (SELECTION & PLANNING)",
            subItems: [
                { id: "introduction", label: "I. Introduction: The Database of Truth" },
                { id: "three-types-crm", label: "II. The Three Types of CRM: Operational, Analytical, Collaborative" },
                { id: "selection-matrix", label: "III. The Selection Matrix: Choosing the Right Beast" },
                { id: "process-mapping", label: "IV. Process Mapping: Don't Automate a Bad Process" },
            ]
        },
        {
            id: "part-2-architecture",
            label: "PART 2: THE ARCHITECTURE (DATA & FIELDS)",
            subItems: [
                { id: "data-structure", label: "V. Data Structure: Leads, Contacts, Accounts, Deals" },
                { id: "blueprint", label: "VI. The Blueprint: Custom Fields and Validation Rules" },
                { id: "data-migration", label: "VII. Data Migration: The Great Cleanse" },
            ]
        },
        {
            id: "part-3-automation",
            label: "PART 3: THE AUTOMATION (WORKFLOWS & INTEGRATION)",
            subItems: [
                { id: "sales-pipelines", label: "VIII. Sales Pipelines & Stages" },
                { id: "automation-logic", label: "IX. Automation Logic: If This, Then That" },
                { id: "permissions-security", label: "X. Permissions & Security Roles" },
            ]
        },
        {
            id: "part-4-adoption",
            label: "PART 4: THE ADOPTION (CULTURE & GROWTH)",
            subItems: [
                { id: "go-live-strategy", label: "XI. The \"Go-Live\" Strategy" },
                { id: "user-adoption", label: "XII. User Adoption: Solving the Human Problem" },
                { id: "reporting-analytics", label: "XIII. Reporting & Analytics: Measuring Success" },
                { id: "conclusion", label: "XIV. Conclusion: The Infinite Garden" },
            ]
        },
    ],
    content: (
        <>
            {/* I. INTRODUCTION */}
            <section id="introduction" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    I. INTRODUCTION: THE DATABASE OF TRUTH
                </h2>

                <div className="space-y-4 text-gray-300">
                    <div className="bg-red-900/30 border border-red-800 p-4 rounded-lg mb-6">
                        <p className="text-xl font-bold text-white text-center">
                            "If it isn't in Salesforce, it didn't happen."
                        </p>
                        <p className="text-center text-gray-300 mt-1">
                            This phrase strikes fear into the hearts of sales reps worldwide, but it is the foundational law of modern business.
                        </p>
                    </div>

                    <p>
                        A Customer Relationship Management (CRM) system is often mistaken for an address book. It is not. It is a <strong className="text-green-400">Revenue Engine</strong>. It is the repository of every interaction, every dollar, and every promise made to your market.
                    </p>

                    <div className="bg-gray-900 p-4 lg:p-6 rounded-lg mt-6">
                        <h3 className="text-xl font-semibold text-red-400 mb-3">Why CRM Implementations Fail:</h3>
                        <p className="mb-3">According to Gartner, <strong>50% to 70% of CRM implementations fail</strong>. They do not fail because of the software (HubSpot and Salesforce work fine). They fail because of:</p>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-red-400 font-bold mr-2">1.</span>
                                <span><strong className="text-red-400">Lack of Strategy:</strong> Buying a tool before defining the problem.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-400 font-bold mr-2">2.</span>
                                <span><strong className="text-red-400">Dirty Data:</strong> Importing 10,000 garbage contacts and expecting gold.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-400 font-bold mr-2">3.</span>
                                <span><strong className="text-red-400">Poor Adoption:</strong> Forcing a complex system on a team that prefers Excel.</span>
                            </li>
                        </ul>
                        <p className="mt-4 pt-4 border-t border-gray-700">
                            The cost of failure is high. A failed implementation isn't just wasted license fees; it is lost revenue, confused customers, and sales team attrition.
                        </p>
                    </div>

                    <p className="mt-4 font-bold">
                        This master class is designed to guide you through a "fail-proof" setup. We will move beyond the "install button" and focus on the architecture of a high-performance sales organization.
                    </p>


                </div>
            </section>

            {/* II. THREE TYPES OF CRM */}
            <section id="three-types-crm" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    II. THE THREE TYPES OF CRM: OPERATIONAL, ANALYTICAL, COLLABORATIVE
                </h2>

                <div className="space-y-4 text-gray-300">
                    <p>
                        Before you sign a contract, you must understand what "flavor" of CRM you are building. Most platforms today are hybrids, but they lean in specific directions.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-400 mb-3">1. Operational CRM (The Doer)</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>Focus:</strong> Automation and Process.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>Goal:</strong> Eliminate manual work.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>Features:</strong> Marketing automation, Sales pipeline management, Help desk ticketing.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>Examples:</strong> HubSpot, Salesforce Sales Cloud, Zoho.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>Best For:</strong> Teams that need to manage day-to-day sales and support.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-400 mb-3">2. Analytical CRM (The Thinker)</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="text-blue-400 font-bold mr-2">•</span>
                                    <span><strong>Focus:</strong> Data and Insights.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 font-bold mr-2">•</span>
                                    <span><strong>Goal:</strong> Analyze customer behavior to predict future trends.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 font-bold mr-2">•</span>
                                    <span><strong>Features:</strong> Data mining, pattern recognition, customer segmentation.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 font-bold mr-2">•</span>
                                    <span><strong>Examples:</strong> Tableau (integrated), Microsoft Dynamics 365 AI.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 font-bold mr-2">•</span>
                                    <span><strong>Best For:</strong> Large enterprises with millions of data points needing deep BI.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">3. Collaborative CRM (The Connector)</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="text-yellow-400 font-bold mr-2">•</span>
                                    <span><strong>Focus:</strong> Communication.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-400 font-bold mr-2">•</span>
                                    <span><strong>Goal:</strong> Share customer data across departments so the customer doesn't have to repeat themselves.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-400 font-bold mr-2">•</span>
                                    <span><strong>Features:</strong> Unified inbox, document sharing, interaction history.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-400 font-bold mr-2">•</span>
                                    <span><strong>Best For:</strong> Service-heavy industries where the relationship is managed by a team, not a single rep.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-md mt-6">
                        <p className="font-semibold text-green-400">Action Step:</p>
                        <p>Decide your primary driver. Are you trying to sell faster (Operational)? Understand your data (Analytical)? Or improve service (Collaborative)?</p>
                    </div>
                </div>
            </section>

            {/* III. SELECTION MATRIX */}
            <section id="selection-matrix" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    III. THE SELECTION MATRIX: CHOOSING THE RIGHT BEAST
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        Choosing a CRM is like a marriage. Divorcing a CRM two years later involves a painful data migration that costs thousands of dollars. You must choose correctly the first time.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. The "Big Three" Comparison</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-blue-400 mb-2">Salesforce (The Enterprise Standard)</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li className="flex items-start">
                                            <span className="text-green-400 mr-2">✓</span>
                                            <span><strong>Pros:</strong> Infinite customization. Massive ecosystem.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-red-400 mr-2">✗</span>
                                            <span><strong>Cons:</strong> Expensive. High learning curve. Needs dedicated admin.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            <span><strong>Verdict:</strong> Best for large teams (&gt;50 reps) with complex cycles.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-orange-400 mb-2">HubSpot (The User-Friendly Giant)</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li className="flex items-start">
                                            <span className="text-green-400 mr-2">✓</span>
                                            <span><strong>Pros:</strong> Incredible UI/UX. Seamless marketing integration. "Freemium" model.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-red-400 mr-2">✗</span>
                                            <span><strong>Cons:</strong> Gets expensive quickly. Reporting less flexible.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            <span><strong>Verdict:</strong> Best for SMBs and Scale-ups focused on Inbound Marketing.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-2">Pipedrive / Monday CRM (The Pipeline Focus)</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li className="flex items-start">
                                            <span className="text-green-400 mr-2">✓</span>
                                            <span><strong>Pros:</strong> Visual, simple, cheap. Focuses on "moving the deal."</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-red-400 mr-2">✗</span>
                                            <span><strong>Cons:</strong> Lacks deep marketing/service features. Purely sales tool.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            <span><strong>Verdict:</strong> Best for small, aggressive sales teams who just want to close deals.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">B. The Evaluation Checklist</h3>
                            <p className="mb-3 text-red-400 font-bold">Do not look at features. Look at <em>constraints</em>.</p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Mobile App</h4>
                                    <p className="text-sm">Does your field team need to log data on the road? Test the mobile app first.</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Integration</h4>
                                    <p className="text-sm">Does it natively talk to your Email (Outlook/Gmail) and Accounting (QuickBooks/Xero)?</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Pricing Model</h4>
                                    <p className="text-sm">Per user vs. per contact. "Per Contact" pricing punishes you for database growth.</p>
                                </div>
                            </div>
                            <p className="mt-4 text-red-400 font-bold">
                                Warning: If you need a third-party connector (Zapier) for basics, that's a red flag.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* IV. PROCESS MAPPING */}
            <section id="process-mapping" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    IV. PROCESS MAPPING: DON'T AUTOMATE A BAD PROCESS
                </h2>
                <div className="space-y-4 text-gray-300">
                    <blockquote className="border-l-4 border-green-500 pl-4 py-2 bg-gray-900 rounded-r-md italic">
                        "Automating an inefficient process simply amplifies the inefficiency." — Bill Gates
                    </blockquote>

                    <p>Before you create a login, you must map your offline process. You need a whiteboard.</p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Customer Journey Map</h3>
                            <p className="mb-3">You must define the stages a stranger goes through to become a customer.</p>
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                                        <span className="text-gray-400">1. Suspect</span>
                                        <span className="text-sm text-gray-500">Someone who matches demographic but doesn't know you</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                                        <span className="text-blue-400">2. Prospect</span>
                                        <span className="text-sm text-gray-500">Engaged (visited website, downloaded PDF)</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                                        <span className="text-green-400">3. Lead (MQL)</span>
                                        <span className="text-sm text-gray-500">Marketing Qualified. Shows intent</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                                        <span className="text-yellow-400">4. Opportunity (SQL)</span>
                                        <span className="text-sm text-gray-500">Sales Qualified. Has budget and timeline</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                                        <span className="text-purple-400">5. Customer</span>
                                        <span className="text-sm text-gray-500">Paid money</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-pink-400">6. Evangelist</span>
                                        <span className="text-sm text-gray-500">Refers others</span>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 text-red-400 font-bold">
                                CRM Setup Failure: Most companies treat "Suspects" and "Opportunities" the same. Your CRM must clearly distinguish these stages.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Defining the "Hand-Off"</h3>
                            <p>The most dangerous moment in business is the hand-off between Marketing and Sales.</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3">
                                <p className="font-bold">Scenario: Marketing generates a lead. Who calls them? When?</p>
                                <div className="mt-3">
                                    <p className="text-green-400 font-bold">The SLA (Service Level Agreement):</p>
                                    <p className="text-sm mt-1">Rule: "If a Demo Request comes in, Sales must change status to 'Contacted' within 2 hours. If not, the CRM auto-notifies the Sales Manager."</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">C. The "Required Fields" Audit</h3>
                            <p className="mb-3">What information is <em>mandatory</em> to move a deal forward?</p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <p className="text-red-400 font-bold">Too many fields</p>
                                    <p className="text-sm">Sales reps will enter garbage data just to bypass the screen.</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <p className="text-red-400 font-bold">Too few fields</p>
                                    <p className="text-sm">Marketing has no data to segment.</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <p className="text-green-400 font-bold">The Balance</p>
                                    <p className="text-sm">Ask "What decision will we make with this data?" If you can't answer, delete the field.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* V. DATA STRUCTURE */}
            <section id="data-structure" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    V. DATA STRUCTURE: LEADS, CONTACTS, ACCOUNTS, DEALS
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        The biggest confusion for new CRM users is understanding the "Object Hierarchy." Most CRMs (Salesforce, HubSpot, Zoho) follow a specific logic. If you fight this logic, the system will break.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">A. The "Lead" (The Holding Pen)</h3>
                            <p className="mb-3">A Lead is an unqualified person. You don't know if they have money, authority, or need. They are just a name and an email.</p>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-yellow-400 font-bold mr-2">•</span>
                                    <span><strong>Purpose:</strong> To keep your main database clean. You don't want 5,000 tire-kickers mixed with actual clients.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-400 font-bold mr-2">•</span>
                                    <span><strong>Lifecycle:</strong> A Lead exists to be "Converted" or "Disqualified." It is a temporary state.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. The "Conversion" Moment</h3>
                            <p>When a Sales Rep determines a Lead is real (qualified), they hit the "Convert" button. This splits the Lead into three distinct objects:</p>
                            <div className="grid md:grid-cols-3 gap-4 mt-4">
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-blue-400 mb-1">1. Account (Company)</h4>
                                    <p className="text-sm">The legal entity (e.g., "Acme Corp").</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">2. Contact (Person)</h4>
                                    <p className="text-sm">The human you're talking to (e.g., "John Doe").</p>
                                    <p className="text-xs mt-1 text-gray-400">Contacts belong to Accounts.</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-purple-400 mb-1">3. Opportunity/Deal (The Money)</h4>
                                    <p className="text-sm">The potential sale (e.g., "1,000 Widget Deal - Q3").</p>
                                </div>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg mt-4 border-l-4 border-red-500">
                                <p className="font-bold text-white">Crucial Rule: Never sell to a "Contact." Sell to an "Opportunity."</p>
                                <p className="text-sm mt-1">Why? Because you might sell to John Doe five times in three years. If you track the status on John's record, you overwrite history. Create five Opportunities attached to John for clear revenue history.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Parent-Child Relationships</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li><strong>One-to-Many:</strong> One Account can have fifty Contacts. One Account can have twenty Opportunities.</li>
                                <li><strong>Implementation Tip:</strong> Always force the "Association." Do not allow a Contact to exist without an Account. Orphaned contacts are lost data.</li>
                            </ul>
                        </div>
                    </div>


                </div>
            </section>

            {/* VI. BLUEPRINT */}
            <section id="blueprint" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VI. THE BLUEPRINT: CUSTOM FIELDS AND VALIDATION RULES
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>Out of the box, a CRM gives you basic fields (Name, Email, Phone). These are not enough. You need to build a schema that matches your business reality.</p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. Field Data Types (Choose Wisely)</h3>
                            <p className="mb-3 text-red-400 font-bold">The most common mistake is creating "Text" fields for everything.</p>
                            <div className="grid md:grid-cols-4 gap-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Picklist (Dropdown)</h4>
                                    <p className="text-sm">The MVP of data.</p>
                                    <p className="text-xs mt-1 text-red-400">Bad: Text field with "Tech," "Technology," "Software"</p>
                                    <p className="text-xs text-green-400">Good: Pre-set dropdown options</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Boolean (Checkbox)</h4>
                                    <p className="text-sm">Yes/No.</p>
                                    <p className="text-xs mt-1">Example: "Current Customer?"</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Date fields</h4>
                                    <p className="text-sm">Calendar pickers.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Lookup fields</h4>
                                    <p className="text-sm">Connects objects (e.g., "Referral Partner" linking to Account).</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">B. The "Discovery" Fields</h3>
                            <p className="mb-3">You need to mandate that reps capture the "Why." Create these custom fields on the Opportunity object:</p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                                <div className="bg-gray-800 p-2 rounded text-center">
                                    <p className="font-bold text-green-400">Pain Point</p>
                                    <p className="text-xs">Picklist: Cost, Efficiency, Compliance</p>
                                </div>
                                <div className="bg-gray-800 p-2 rounded text-center">
                                    <p className="font-bold text-green-400">Competitor</p>
                                    <p className="text-xs">Picklist of your rivals</p>
                                </div>
                                <div className="bg-gray-800 p-2 rounded text-center">
                                    <p className="font-bold text-green-400">Decision Timeline</p>
                                    <p className="text-xs">Date field</p>
                                </div>
                                <div className="bg-gray-800 p-2 rounded text-center">
                                    <p className="font-bold text-green-400">Loss Reason</p>
                                    <p className="text-xs">Picklist: Price, Feature Gap, Ghosted</p>
                                </div>
                            </div>
                            <p className="mt-4 font-bold text-green-400">Why this matters:</p>
                            <p>At year-end, run a report: "Show me all deals lost due to 'Price' vs. 'Feature Gap'." This informs your entire company strategy.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Validation Rules (The Guardrails)</h3>
                            <p>You cannot rely on willpower to get good data. You must use code. Validation rules prevent a user from saving a record if it violates logic.</p>
                            <div className="space-y-3 mt-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-red-400 mb-1">Rule 1: "The Closed Won Rule"</h4>
                                    <p className="text-sm">Logic: If Stage is changed to "Closed Won," the "Contract Date" and "Amount" fields cannot be empty.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-red-400 mb-1">Rule 2: "The Discount Rule"</h4>
                                    <p className="text-sm">Logic: If Discount &gt; 20%, the record is locked and requires Manager Approval.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-red-400 mb-1">Rule 3: "The Email Format"</h4>
                                    <p className="text-sm">Logic: The email field must contain an "@" symbol.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VII. DATA MIGRATION */}
            <section id="data-migration" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VII. DATA MIGRATION: THE GREAT CLEANSE
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="text-red-400 font-bold">
                        Migrating data from Excel or an old CRM is the most painful part of the process. It is also the most critical. If you import bad data, your reps will lose trust in the system on Day 1.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Audit (The "Garbage" Check)</h3>
                            <p>Export your current data to CSV. Look at it brutally.</p>
                            <ul className="list-disc ml-6 space-y-2 mt-2">
                                <li><strong>Duplicates:</strong> Do you have "John Smith" and "Jon Smith"?</li>
                                <li><strong>Incomplete Records:</strong> Do you have contacts with no email and no phone?</li>
                                <li><strong>The Decision:</strong> If a contact hasn't been touched in 3 years and has no valid contact info, DO NOT migrate them. Archive them.</li>
                            </ul>
                            <p className="mt-3 font-bold text-green-400">A smaller, cleaner database is better than a massive, dirty one.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. The Cleaning Strategy</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">1. Standardization</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>Format Phone Numbers: (555) 123-4567 vs 555.123.4567</li>
                                        <li>Normalize States: "NY" vs "New York"</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">2. De-duplication</h4>
                                    <p className="text-sm">Use unique identifier (usually Email). Use tools like DemandTools or Excel's "Remove Duplicates."</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">3. "Legacy ID" Secret</h4>
                                    <p className="text-sm">Create "Legacy_ID" field in new system. Import old system's unique ID for future matching.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">D. The Order of Operations (The Import Hierarchy)</h3>
                            <p className="font-bold text-red-400 mb-3">You cannot import everything at once. Follow this order:</p>
                            <div className="space-y-3">
                                <div className="flex items-center bg-gray-800 p-3 rounded">
                                    <div className="text-green-400 font-bold mr-4">Step 1</div>
                                    <div>Import Accounts (Companies)</div>
                                </div>
                                <div className="flex items-center bg-gray-800 p-3 rounded ml-4">
                                    <div className="text-green-400 font-bold mr-4">Step 2</div>
                                    <div>Import Contacts (Map to Accounts)</div>
                                </div>
                                <div className="flex items-center bg-gray-800 p-3 rounded ml-8">
                                    <div className="text-green-400 font-bold mr-4">Step 3</div>
                                    <div>Import Opportunities (Map to Accounts)</div>
                                </div>
                                <div className="flex items-center bg-gray-800 p-3 rounded ml-12">
                                    <div className="text-green-400 font-bold mr-4">Step 4</div>
                                    <div>Import Tasks/Notes (Map to Contacts/Opportunities)</div>
                                </div>
                            </div>
                            <p className="mt-4 text-red-400 font-bold">Warning: If you import Contacts before Accounts, many CRMs create duplicate "shell" accounts. Always import Parent (Account) first.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">E. The Pilot Test</h3>
                            <p className="text-red-400 font-bold">Never import 10,000 records on the first try.</p>
                            <ol className="list-decimal ml-6 space-y-2 mt-2">
                                <li>Select 5 complex records (with notes, deals, and history).</li>
                                <li>Import them.</li>
                                <li>Manually inspect in new CRM. Did notes transfer? Date format correct?</li>
                                <li>Only when the Pilot is perfect do you run the full migration.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* VIII. SALES PIPELINES */}
            <section id="sales-pipelines" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VIII. SALES PIPELINES & STAGES: MAPPING THE REALITY
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>A pipeline is a visual representation of your sales process. The most common error in CRM setup is creating stages based on "activity" rather than "outcome."</p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. Designing the Stages</h3>
                            <p>Stages must represent a tangible milestone in the buyer's journey.</p>
                            <div className="grid md:grid-cols-2 gap-6 mt-4">
                                <div className="bg-gray-900 p-4 rounded-lg border border-red-800">
                                    <p className="text-red-400 font-bold mb-2">✗ Bad Stage Names</p>
                                    <ul className="space-y-1 text-sm">
                                        <li>"Reviewing"</li>
                                        <li>"Thinking"</li>
                                        <li>"In Progress"</li>
                                    </ul>
                                    <p className="text-xs mt-2 text-red-400">Vague, activity-based</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg border border-green-800">
                                    <p className="text-green-400 font-bold mb-2">✓ Good Stage Names</p>
                                    <ol className="space-y-1 text-sm">
                                        <li>Discovery Call Completed (10%)</li>
                                        <li>Solution Validated / Qualified (25%)</li>
                                        <li>Proposal Sent (50%)</li>
                                        <li>Negotiation / Legal Review (80%)</li>
                                        <li>Closed Won / Closed Lost (100% / 0%)</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Exit Criteria (The Gatekeepers)</h3>
                            <p>To prevent "Pipeline Bloat" (deals sitting forever), define strict Exit Criteria.</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3">
                                <p className="font-bold text-green-400">Example Exit Criteria for Stage 2 (Qualification):</p>
                                <ul className="list-disc ml-6 space-y-1 mt-2">
                                    <li>Budget confirmed</li>
                                    <li>Decision Maker identified</li>
                                    <li>Timeline established</li>
                                </ul>
                                <p className="mt-3 text-red-400">If these fields are empty, the CRM should physically block the stage change.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Weighted Revenue Forecasting</h3>
                            <p>Every stage needs a "Probability Percentage."</p>
                            <div className="bg-gray-800 p-4 rounded-md mt-3">
                                <p className="font-bold">Formula: <span className="text-green-400">Deal Amount x Probability = Weighted Forecast</span></p>
                                <p className="mt-2">Example: A $100,000 deal in "Proposal" stage (50%) = $50,000 in Weighted Pipeline.</p>
                            </div>
                            <p className="mt-3 font-bold">Why this matters: The CFO needs to know cash flow. Weighted averages make your forecast mathematically accurate over time.</p>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">D. The "Stalled" Deal Strategy</h3>
                            <p>What happens to deals that don't say "No" but stop replying?</p>
                            <ul className="space-y-2 mt-2">
                                <li className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">•</span>
                                    <span><strong>The Rotting Period:</strong> Set rule (usually 30 days). If a deal hasn't moved stages in 30 days, it turns red.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">•</span>
                                    <span><strong>The Close-Lost Policy:</strong> Force reps to close-lost these deals as "Ghosted."</span>
                                </li>
                            </ul>
                            <p className="mt-3 font-bold text-green-400">Psychology: A clean pipeline with 10 real deals is better than a hopeful pipeline with 50 dead ones.</p>
                        </div>
                    </div>


                </div>
            </section>

            {/* IX. AUTOMATION LOGIC */}
            <section id="automation-logic" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    IX. AUTOMATION LOGIC: IF THIS, THEN THAT
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>The promise of CRM is to remove administrative drudgery. This requires "Workflow Rules" or "Flows."</p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Trigger-Action Framework</h3>
                            <p className="mb-4">Every automation consists of a Trigger (What happens?) and an Action (What does the system do?).</p>

                            <div className="space-y-4">
                                <div className="bg-gray-800 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-2">1. Lead Assignment (Round Robin)</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li><strong>Trigger:</strong> New lead from "Contact Us" form</li>
                                        <li><strong>Logic:</strong> Check region → assign accordingly</li>
                                        <li><strong>Action:</strong> Change Record Owner & Send Email Alert</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-2">2. "Speed to Lead" Workflow</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li><strong>Trigger:</strong> New Lead Status = "Open"</li>
                                        <li><strong>Action:</strong> Send automated email from rep's address</li>
                                        <li><strong>Benefit:</strong> Reduces response time from hours to seconds</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-2">3. Task Creation (Process Enforcement)</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li><strong>Trigger:</strong> Deal Stage changes to "Proposal Sent"</li>
                                        <li><strong>Action:</strong> Create Task due in 3 days: "Follow up on Proposal"</li>
                                        <li><strong>Result:</strong> No deal falls through the cracks</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-2">4. "Big Deal" Alert</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li><strong>Trigger:</strong> Opportunity created with Amount greater than $50,000</li>
                                        <li><strong>Action:</strong> Send Slack notification to VP of Sales and CEO</li>
                                        <li><strong>Result:</strong> Leadership visibility immediately</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Lead Scoring (The Mathematical Filter)</h3>
                            <p>Not all leads are equal. You need an algorithm to sort them.</p>
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Demographic Score</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>Title is "CEO" (+20 points)</li>
                                        <li>Title is "Intern" (-10 points)</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Behavioral Score</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>Visited Pricing Page (+10 points)</li>
                                        <li>Opened Email (+5 points)</li>
                                        <li>Clicked Link (+5 points)</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-4 font-bold">The Threshold: Once a lead hits 50 points, change status to "MQL" and notify sales. Before 50 points, keep in Marketing Nurture.</p>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-yellow-500">
                            <h3 className="text-xl font-semibold text-white mb-3">C. The Danger of Over-Automation</h3>
                            <p className="text-red-400 font-bold mb-2">The "Robot" Effect: If you automate every email, customers will feel it.</p>
                            <p><strong>Rule of Thumb:</strong> Automate the <em>process</em> (tasks, status changes, data entry), but personalize the <em>interaction</em> (the actual email text or phone call).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* X. PERMISSIONS & SECURITY */}
            <section id="permissions-security" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    X. PERMISSIONS & SECURITY ROLES: WHO SEES WHAT?
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="font-bold text-red-400">
                        Data is power. You don't want a junior sales rep exporting your entire client list to Excel and taking it to a competitor. You need a robust security model.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. The "Role Hierarchy" (Vertical Access)</h3>
                            <p>Controls who sees whose data based on the org chart.</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3">
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                                        <span className="text-green-400 font-bold">Level 1 (CEO/Admin)</span>
                                        <span className="text-sm">Sees Everything</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                                        <span className="text-yellow-400 font-bold">Level 2 (Sales Manager)</span>
                                        <span className="text-sm">Sees own data + data of people below them</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-blue-400 font-bold">Level 3 (Sales Rep)</span>
                                        <span className="text-sm">Sees ONLY own data</span>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 text-sm italic">Making deals "Private" prevents rep-on-rep conflict and keeps focus laser-sharp.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Profiles (Horizontal Access)</h3>
                            <p>Controls <em>what</em> a user can do with the data they see.</p>
                            <div className="grid md:grid-cols-3 gap-4 mt-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-red-400 mb-1">Admin Profile</h4>
                                    <p className="text-sm">Create, Read, Edit, Delete (CRED) + change settings</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-yellow-400 mb-1">Standard User Profile</h4>
                                    <p className="text-sm">Create, Read, Edit. CANNOT Delete.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-blue-400 mb-1">Read-Only Profile</h4>
                                    <p className="text-sm">Can look but cannot touch. Great for Finance/Legal.</p>
                                </div>
                            </div>
                            <p className="mt-4 text-red-400 font-bold">Critical Setting: DISABLE "Export Reports" permission for standard users.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Field-Level Security</h3>
                            <p>Sometimes, a rep needs to see the Account, but shouldn't see sensitive info.</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3">
                                <p className="font-bold">Scenario: The "Credit Score" or "Contract Value" field.</p>
                                <p className="mt-2">Setting: Set these fields to "Hidden" for Standard User profile, but "Visible" for Finance profile.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">D. Audit Trails</h3>
                            <p>A good CRM tracks every click.</p>
                            <div className="bg-gray-800 p-4 rounded-lg mt-3">
                                <p className="font-bold text-green-400">Feature: "Field History Tracking"</p>
                                <p className="mt-2">Setup: Turn on for critical fields (Amount, Stage, Close Date).</p>
                                <div className="mt-3">
                                    <p className="font-bold">Scenario:</p>
                                    <p className="text-sm">Deal drops from $100k to $10k. The Audit Trail says: "User John Doe changed Amount from $100k to $10k on Tuesday at 4:02 PM."</p>
                                </div>
                            </div>
                            <p className="mt-4 font-bold">Accountability: The system acts as the ultimate witness.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* XI. GO-LIVE STRATEGY */}
            <section id="go-live-strategy" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XI. THE "GO-LIVE" STRATEGY: AVOIDING DISASTER
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="text-red-400 font-bold">
                        The day you switch on the new CRM is dangerous. If users encounter errors on Day 1, they will label the system "broken" and mentally check out.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. "Big Bang" vs. Phased Rollout</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-red-400 mb-2">Big Bang</h4>
                                    <p className="text-sm mb-2">Everyone moves on Monday. Old system turned off.</p>
                                    <p className="text-green-400 text-sm">✓ Pros: No dual entry. Immediate.</p>
                                    <p className="text-red-400 text-sm mt-1">✗ Cons: High risk. Whole company stops if it breaks.</p>
                                    <p className="text-xs mt-2 text-yellow-400">Best For: Small teams (&lt;20 users)</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-2">Phased Rollout</h4>
                                    <p className="text-sm mb-2">Phase 1: Pilot Group (5 tech-savvy reps) for 2 weeks.</p>
                                    <p className="text-green-400 text-sm">✓ Pros: Find bugs early. Lower risk.</p>
                                    <p className="text-red-400 text-sm mt-1">✗ Cons: Dual entry during transition.</p>
                                    <p className="text-xs mt-2 text-yellow-400">Best For: Enterprise teams</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. The "War Room" Concept</h3>
                            <p>On Go-Live day, set up a physical (or virtual) War Room.</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3">
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-green-400 font-bold mr-2">•</span>
                                        <span><strong>Staffing:</strong> Admin and Executive Sponsor available all day.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-400 font-bold mr-2">•</span>
                                        <span><strong>Ticket System:</strong> Dedicated Slack channel (#crm-help) for immediate bug reporting.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-400 font-bold mr-2">•</span>
                                        <span><strong>Response Time:</strong> Fix critical bugs within minutes, not days. Builds confidence.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-red-500">
                            <h3 className="text-xl font-semibold text-white mb-3">C. The Cut-Off Date</h3>
                            <p className="text-xl font-bold text-red-400">You must burn the ships.</p>
                            <p className="mt-2">Set a date where the old system (Excel, Legacy CRM) becomes "Read-Only."</p>
                            <p className="mt-3 font-bold">If you allow reps to keep working in Excel "just in case," they will never leave Excel.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* XII. USER ADOPTION */}
            <section id="user-adoption" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XII. USER ADOPTION: SOLVING THE HUMAN PROBLEM
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="text-xl font-bold text-red-400">
                        "The software works fine. The people are the problem."
                    </p>
                    <p>Adoption is 20% technical and 80% psychological. You cannot force adoption; you must engineer it.</p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. Executive Sponsorship (The Stick)</h3>
                            <p>The VP of Sales or CEO must mandate usage. The Admin cannot enforce this.</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3">
                                <p className="font-bold text-green-400">The Mantra: "If it isn't in the CRM, it didn't happen."</p>
                                <p className="mt-2 italic">"I closed a $50k deal!" → "It's not in the CRM, so I can't pay you commission on it."</p>
                                <p className="mt-3"><strong>Management Review:</strong> Managers must run weekly pipeline meetings using the CRM dashboard on screen. If a deal isn't on screen, it isn't discussed.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. The WIIFM Factor (The Carrot)</h3>
                            <p className="font-bold">"What's In It For Me?"</p>
                            <p>If the CRM is just for the boss to spy, reps will hate it. It must help <em>them</em> sell.</p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
                                <div className="bg-gray-900 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400 mb-1">Mobile App</h4>
                                    <p className="text-xs">Dictate notes via voice-to-text after meetings</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400 mb-1">One-Click Email</h4>
                                    <p className="text-xs">Send templates instantly</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400 mb-1">Data Enrichment</h4>
                                    <p className="text-xs">Auto-fill contact info (Clearbit/ZoomInfo)</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400 mb-1">Sell Time-Savings</h4>
                                    <p className="text-xs">Not data entry</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">C. The "Champions" Network</h3>
                            <p>Identify the "Alpha" rep in the office—the one everyone listens to.</p>
                            <ul className="space-y-2 mt-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span>Involve them in the design phase.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span>If the Alpha rep says, "This system helps me track my commission," the herd follows.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">•</span>
                                    <span>If the Alpha rep hates it, the implementation will die.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">D. Training: Role-Based, Not Feature-Based</h3>
                            <p className="text-red-400 font-bold mb-2">Do NOT do a 4-hour training showing every button.</p>
                            <p className="font-bold text-green-400">Do "Day in the Life" training:</p>
                            <div className="grid md:grid-cols-3 gap-3 mt-3">
                                <div className="bg-gray-900 p-3 rounded">
                                    <p className="text-center">"How to log a call"</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <p className="text-center">"How to create a deal"</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <p className="text-center">"How to check your commission"</p>
                                </div>
                            </div>
                            <p className="mt-4">Record these as 3-minute Loom videos. Users forget live training; they need on-demand resources.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* XIII. REPORTING & ANALYTICS */}
            <section id="reporting-analytics" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XIII. REPORTING & ANALYTICS: MEASURING SUCCESS
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>You put data in so you can get insights out. However, "Dashboard Clutter" is real. A dashboard with 50 charts is useless. You need three specific dashboards.</p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-400 mb-3">A. The Rep Dashboard (The "Cockpit")</h3>
                            <p className="mb-3">What the individual salesperson sees every morning. Tells them what to do <em>today</em>.</p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400">Metric 1</h4>
                                    <p className="text-sm">"My Open Tasks" (Who to call)</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400">Metric 2</h4>
                                    <p className="text-sm">"My Pipeline" (Active deals)</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400">Metric 3</h4>
                                    <p className="text-sm">"My Progress to Goal" (Revenue vs. Quota)</p>
                                </div>
                            </div>
                            <p className="mt-4 text-center font-bold">Goal: Focus and Action</p>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">B. The Manager Dashboard (The "Accountability")</h3>
                            <p className="mb-3">Helps the manager spot problems before they kill the quarter.</p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400">Metric 1</h4>
                                    <p className="text-sm">Activity Volume (Calls/Emails per rep)</p>
                                    <p className="text-xs text-yellow-400 mt-1">Leading Indicator</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400">Metric 2</h4>
                                    <p className="text-sm">Pipeline Coverage (Pipeline Value / Quota)</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400">Metric 3</h4>
                                    <p className="text-sm">Stale Opportunities (Deals not updated in &gt;30 days)</p>
                                </div>
                            </div>
                            <p className="mt-4 text-center font-bold">Goal: Coaching and Intervention</p>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-purple-400 mb-3">C. The Executive Dashboard (The "Health")</h3>
                            <p className="mb-3">For the CEO/Board. High-level trends.</p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400">Metric 1</h4>
                                    <p className="text-sm">Forecast for Q3 (Best Case vs. Commit)</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400">Metric 2</h4>
                                    <p className="text-sm">Win Rate % (Trend over 12 months)</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400">Metric 3</h4>
                                    <p className="text-sm">CAC vs. LTV (Customer Acquisition Cost vs. Lifetime Value)</p>
                                </div>
                            </div>
                            <p className="mt-4 text-center font-bold">Goal: Strategy and Forecasting</p>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-green-500">
                            <h3 className="text-xl font-semibold text-white mb-3">D. Leading vs. Lagging Indicators</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-red-400 mb-1">Lagging Indicator</h4>
                                    <p className="text-sm">Revenue. (It already happened. You can't change it).</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Leading Indicator</h4>
                                    <p className="text-sm">New Meetings Booked. (Predicts future revenue).</p>
                                </div>
                            </div>
                            <p className="mt-4 font-bold">Strategy: Your CRM reports should focus heavily on Leading Indicators. If "Meetings Booked" drops in January, you know Revenue will drop in March. You can fix it now.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* XIV. CONCLUSION */}
            <section id="conclusion" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XIV. CONCLUSION: THE INFINITE GARDEN
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="text-xl font-bold">
                        A CRM is not a project; it is a garden.
                    </p>

                    <p>
                        You do not "finish" a CRM implementation. You plant it, you water it, and you weed it.
                    </p>

                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="text-green-400 font-bold mr-2">•</span>
                            <span>New products will launch.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-400 font-bold mr-2">•</span>
                            <span>Sales processes will change.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-400 font-bold mr-2">•</span>
                            <span>New competitors will emerge.</span>
                        </li>
                    </ul>

                    <p className="mt-4">
                        Your CRM must evolve with the business. You should have a "CRM Roadmap" review every quarter to ask: "Is the system still serving the strategy?"
                    </p>

                    <div className="my-8 p-6 bg-gray-900 border-l-4 border-green-500 rounded-r-lg">
                        <p className="text-xl font-bold text-white text-center">
                            The companies that win are not the ones with the most expensive software. They are the ones with the most disciplined process.
                        </p>
                    </div>

                    <p>
                        They treat their customer data as a sacred asset. They understand that the CRM is the heartbeat of the organization.
                    </p>

                    <p className="mt-6 text-lg font-bold">
                        If you have followed this guide—from selecting the right tool to architecting the data, automating the drudgery, and enforcing the culture—you have not just installed software.
                    </p>

                    <div className="my-8 p-8 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl border border-green-800 text-center">
                        <p className="text-2xl font-bold text-white">
                            You have built a Revenue Engine.
                        </p>
                    </div>

                    <p className="text-3xl font-bold text-green-400 text-center">
                        Now, turn the key.
                    </p>
                </div>
            </section>
        </>
    )
};