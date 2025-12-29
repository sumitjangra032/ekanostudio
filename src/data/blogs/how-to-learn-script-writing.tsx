import { TOCItem } from "@/components/layout/BlogLayout";
import { BLOG_IMAGES } from "@/constants/blog-images";

export const SCRIPTWRITING_DATA: {
    title: string;
    subtitle: string;
    tocItems: TOCItem[];
    content: React.ReactNode;
} = {
    title: "The Screenwriting Master Class",
    subtitle: "From Concept to Sale: Structure, Character, and Industry Survival",
    tocItems: [
        {
            id: "part-1-foundation",
            label: "PART 1: THE FOUNDATION (STRUCTURE & CONCEPT)",
            subItems: [
                { id: "introduction", label: "I. Introduction: The Blueprint, Not the Building" },
                { id: "the-seed", label: "II. The Seed: Concept, Logline, and High Concept" },
                { id: "the-skeleton", label: "III. The Skeleton: Mastering the 3-Act Structure" },
                { id: "genre", label: "IV. Genre: The Promise You Make to the Audience" },
            ]
        },
        {
            id: "part-2-mechanics",
            label: "PART 2: THE MECHANICS (CHARACTER & SCENE)",
            subItems: [
                { id: "character-design", label: "V. Character Design: Wants vs. Needs" },
                { id: "ghost-and-lie", label: "VI. The Ghost & The Lie: Psychology of Character" },
                { id: "scene-construction", label: "VII. Scene Construction: Polarity and Turns" },
                { id: "dialogue", label: "VIII. Dialogue: The Art of Subtext" },
            ]
        },
        {
            id: "part-3-format",
            label: "PART 3: THE FORMAT (THE INDUSTRY CODE)",
            subItems: [
                { id: "the-page", label: "IX. The Page: Sluglines, Action, and Dialogue" },
                { id: "unfilmables", label: "X. The \"Unfilmables\": What NOT to Write" },
                { id: "software-tools", label: "XI. Software & Tools (Final Draft vs. The Rest)" },
                { id: "pacing", label: "XII. Pacing: The \"White Space\" Rule" },
            ]
        },
        {
            id: "part-4-business",
            label: "PART 4: THE BUSINESS (REWRITING & SELLING)",
            subItems: [
                { id: "the-rewrite", label: "XIII. The Rewrite: From Vomit Draft to Polish" },
                { id: "the-pitch", label: "XIV. The Pitch: Selling the Air" },
                { id: "agents-managers", label: "XV. Agents, Managers, and The Black List" },
                { id: "conclusion", label: "XVI. Conclusion: The Marathon" },
            ]
        },
    ],
    content: (
        <>
            {/* I. INTRODUCTION */}
            <section id="introduction" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    I. INTRODUCTION: THE BLUEPRINT, NOT THE BUILDING
                </h2>

                <div className="space-y-4 text-gray-300">
                    <p className="text-xl font-semibold">
                        A novel is a finished product. You buy it, you read it, the experience is complete.
                        <br />
                        A script is <span className="text-red-400">not</span> a finished product. It is a set of instructions. It is a blueprint.
                    </p>

                    <p>
                        If you write a beautiful sentence in a novel describing the internal melancholy of a protagonist, you are a genius.
                        If you write that same sentence in a script, you are an amateur. Why? Because the camera cannot film "internal melancholy." It can only film a tear, a frown, or a slammed door.
                    </p>

                    <p>
                        Scriptwriting is the art of <strong className="text-green-400">Externalization</strong>. It is showing, not telling. It is a rigorous discipline that balances artistic expression with technical limitation.
                    </p>

                    <div className="bg-gray-900 p-4 lg:p-6 rounded-lg mt-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">The Rule of Time</h3>
                                <p className="text-green-400 font-bold">One page = One minute</p>
                                <p className="text-sm mt-1">One page of standard script format equals roughly one minute of screen time.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">The Rule of Cost</h3>
                                <p className="text-red-400 font-bold">"EXT. BATTLEFIELD - DAY" = $10M</p>
                                <p className="text-sm mt-1">Every time you write an extravagant location, you've just spent millions of a producer's money.</p>
                            </div>
                        </div>
                        <p className="mt-4 pt-4 border-t border-gray-700 text-center font-bold">
                            This master class will teach you how to think like a filmmaker, structure like an architect, and write like a poet.
                        </p>
                    </div>


                </div>
            </section>

            {/* II. THE SEED */}
            <section id="the-seed" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    II. THE SEED: CONCEPT, LOGLINE, AND HIGH CONCEPT
                </h2>

                <div className="space-y-4 text-gray-300">
                    <p className="font-bold text-lg">
                        Before you write "FADE IN," you must know what your movie is about. If you cannot explain it in one sentence, you do not have a movie; you have a situation.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Logline (The DNA)</h3>
                            <p className="mb-3">A logline is a one-sentence summary of your story. It's the tool used to sell the script.</p>

                            <div className="bg-gray-800 p-4 rounded-md mb-4">
                                <p className="font-bold text-green-400">The Formula:</p>
                                <p className="font-mono">[Protagonist] + [Inciting Incident] + [Action/Goal] + [Antagonist/Obstacle] + [Stakes]</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="border border-red-800 p-3 rounded">
                                    <p className="text-red-400 font-bold mb-1">✗ Bad Logline</p>
                                    <p className="text-sm italic">"A guy floats around in space and thinks about his life."</p>
                                    <p className="text-xs mt-1">Boring, internal, no stakes.</p>
                                </div>
                                <div className="border border-green-800 p-3 rounded">
                                    <p className="text-green-400 font-bold mb-1">✓ Good Logline (The Martian)</p>
                                    <p className="text-sm italic">"An astronaut becomes stranded on Mars after his team assumes him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive before he runs out of supplies."</p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="font-bold">Checklist:</p>
                                <ul className="list-disc ml-6 space-y-1 mt-1">
                                    <li><strong>Irony:</strong> Is there a hook? (e.g., A cop has to work with a criminal)</li>
                                    <li><strong>Stakes:</strong> What happens if they fail? (Death? Divorce? End of the world?)</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. High Concept vs. Low Concept</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-yellow-400 mb-2">High Concept</h4>
                                    <p className="text-sm">Premise easily communicated with mass appeal. Usually "Plot-Driven."</p>
                                    <div className="mt-3 space-y-1">
                                        <p className="text-sm italic">• "Jurassic Park" (Dinosaurs are cloned)</p>
                                        <p className="text-sm italic">• "Liar Liar" (A lawyer cannot tell a lie for 24 hours)</p>
                                    </div>
                                    <p className="text-xs mt-2 text-green-400">Easier to sell to Hollywood</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-blue-400 mb-2">Low Concept</h4>
                                    <p className="text-sm">Premise focused on character development and subtleties.</p>
                                    <div className="mt-3 space-y-1">
                                        <p className="text-sm italic">• "Lady Bird" (A girl grows up in Sacramento)</p>
                                        <p className="text-sm italic">• "Manchester by the Sea" (A man deals with grief)</p>
                                    </div>
                                    <p className="text-xs mt-2 text-yellow-400">Harder to sell, better for Indie films</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">C. The "What If" Engine</h3>
                            <p>Great scripts often start with a "What If" question that breaks reality.</p>
                            <div className="grid md:grid-cols-3 gap-3 mt-3">
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <p className="font-bold text-green-400">"What if..."</p>
                                    <p className="text-sm mt-1">dreams could be invaded?</p>
                                    <p className="text-xs text-gray-400">(Inception)</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <p className="font-bold text-green-400">"What if..."</p>
                                    <p className="text-sm mt-1">we aged backward?</p>
                                    <p className="text-xs text-gray-400">(Benjamin Button)</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <p className="font-bold text-green-400">"What if..."</p>
                                    <p className="text-sm mt-1">toys came to life?</p>
                                    <p className="text-xs text-gray-400">(Toy Story)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* III. THE SKELETON */}
            <section id="the-skeleton" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    III. THE SKELETON: MASTERING THE 3-ACT STRUCTURE
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        Structure is not a formula; it is gravity. You can fight it, but you will likely fail. The human brain is wired to process stories in three parts: Beginning, Middle, and End.
                    </p>
                    <p>
                        In screenwriting, we use the paradigm popularized by Syd Field and Blake Snyder (Save the Cat).
                    </p>



                    <div className="space-y-8 mt-6">
                        <div className="border-l-4 border-green-500 pl-4 py-4 bg-gray-900 rounded-r-lg">
                            <h3 className="text-xl font-bold text-white mb-2">ACT I: The Setup (Pages 1-30)</h3>
                            <p className="mb-3"><strong>Goal:</strong> Introduce the hero and the status quo, then break it.</p>
                            <div className="space-y-2 ml-2">
                                <div className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">1.</span>
                                    <span><strong>The Opening Image (Page 1):</strong> Visual summary of the theme. Show the hero's life <em>before</em> the change.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">2.</span>
                                    <span><strong>The Setup (Pages 1-10):</strong> Who is the hero? What is their "flaw"? What is their "Save the Cat" moment?</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">3.</span>
                                    <span><strong>The Inciting Incident (Page 12):</strong> The catalyst. The event that disrupts the hero's life.<br />
                                        <em className="text-sm">Example (Star Wars): Luke finds the message from Princess Leia inside R2-D2.</em></span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">4.</span>
                                    <span><strong>The Debate (Pages 12-25):</strong> The hero refuses the call. They are scared. They doubt themselves.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">5.</span>
                                    <span><strong>Plot Point 1 (Page 25-30):</strong> The hero makes a choice to leave the "Old World" and enter the "New World."<br />
                                        <em className="text-sm">Example (The Matrix): Neo takes the Red Pill.</em></span>
                                </div>
                            </div>
                        </div>

                        <div className="border-l-4 border-yellow-500 pl-4 py-4 bg-gray-900 rounded-r-lg ml-4 lg:ml-8">
                            <h3 className="text-xl font-bold text-white mb-2">ACT II: The Confrontation (Pages 30-85)</h3>
                            <p className="mb-3"><strong>Goal:</strong> The hero faces obstacles, fails, learns, and changes. This is the hardest part to write (The "Sagging Middle").</p>
                            <div className="space-y-2 ml-2">
                                <div className="flex items-start">
                                    <span className="text-yellow-400 font-bold mr-2">1.</span>
                                    <span><strong>Fun and Games (Pages 30-55):</strong> The "trailer moments." The hero explores the new world.<br />
                                        <em className="text-sm">Example (Spider-Man): Peter Parker testing his web-shooters.</em></span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-yellow-400 font-bold mr-2">2.</span>
                                    <span><strong>The Midpoint (Page 55):</strong> A massive event that raises the stakes. Hero shifts from passive to active.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-yellow-400 font-bold mr-2">3.</span>
                                    <span><strong>Bad Guys Close In (Pages 55-75):</strong> The antagonist regroups and attacks harder.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-yellow-400 font-bold mr-2">4.</span>
                                    <span><strong>All Is Lost (Page 75):</strong> The lowest point. Someone dies. The plan fails. Hope is gone.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-yellow-400 font-bold mr-2">5.</span>
                                    <span><strong>Dark Night of the Soul (Pages 75-85):</strong> The hero wallows but discovers the "Theme"—the truth they needed to learn.</span>
                                </div>
                            </div>
                        </div>

                        <div className="border-l-4 border-red-500 pl-4 py-4 bg-gray-900 rounded-r-lg ml-8 lg:ml-16">
                            <h3 className="text-xl font-bold text-white mb-2">ACT III: The Resolution (Pages 85-110)</h3>
                            <p className="mb-3"><strong>Goal:</strong> The final battle and the new status quo.</p>
                            <div className="space-y-2 ml-2">
                                <div className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">1.</span>
                                    <span><strong>The Finale (Pages 85-110):</strong> The hero confronts the villain with the <em>new philosophical truth</em> they learned.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">2.</span>
                                    <span><strong>The Final Image (Page 110):</strong> A mirror to the Opening Image. Show how much the hero has changed.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IV. GENRE */}
            <section id="genre" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    IV. GENRE: THE PROMISE YOU MAKE TO THE AUDIENCE
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        Genre is not just a category on Netflix; it is a set of rules and expectations. If you write a Horror movie where nobody dies and everyone feels safe, you have broken the contract.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Core Genres and Their Requirements</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-red-400 mb-1">Thriller</h4>
                                    <p className="text-sm">Needs a "Ticking Clock" and high stakes. Protagonist is usually a victim trying to survive.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-orange-400 mb-1">Action</h4>
                                    <p className="text-sm">Needs "Set Pieces" (big visual sequences). Protagonist is a hero trying to save the day.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-pink-400 mb-1">Rom-Com</h4>
                                    <p className="text-sm">Needs a "Meet Cute" and a "Breakup" (end of Act II).</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="font-bold text-purple-400 mb-1">Horror</h4>
                                    <p className="text-sm">Needs a "Monster" and a "Sin" (the transgression that invited the monster).</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Mixing Genres</h3>
                            <p>The best modern scripts mix genres to create something fresh.</p>
                            <div className="grid md:grid-cols-3 gap-4 mt-3">
                                <div className="bg-gray-900 p-3 rounded">
                                    <p className="font-bold text-green-400">Alien</p>
                                    <p className="text-sm">It's a Horror movie inside a Sci-Fi setting.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <p className="font-bold text-green-400">Shaun of the Dead</p>
                                    <p className="text-sm">It's a Rom-Com with Zombies.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <p className="font-bold text-green-400">Get Out</p>
                                    <p className="text-sm">It's a Social Satire wrapped in a Thriller.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">C. Tone Consistency</h3>
                            <p>You can mix genres, but you cannot mix tones randomly.</p>
                            <div className="bg-gray-800 p-4 rounded-md mt-3">
                                <p className="text-red-400 font-bold">Bad Example:</p>
                                <p className="text-sm">If you start with a gritty, realistic tone (like "Saving Private Ryan"), you cannot have a character slip on a banana peel and make a cartoon sound effect in Act II.</p>
                                <p className="text-sm mt-2 text-green-400">It breaks the "Suspension of Disbelief."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* V. CHARACTER DESIGN */}
            <section id="character-design" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    V. CHARACTER DESIGN: WANTS VS. NEEDS
                </h2>
                <div className="space-y-4 text-gray-300">
                    <blockquote className="border-l-4 border-green-500 pl-4 py-2 bg-gray-900 rounded-r-md italic">
                        "Plot is character revealed by action." — Aristotle
                    </blockquote>

                    <p>You cannot separate plot and character. The plot is just a series of events specifically designed to torture your protagonist until they change. If your character is boring, your plot is boring.</p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Difference Between Real People and Characters</h3>
                            <p>Real people are messy, contradictory, and often change very slowly.</p>
                            <p className="mt-2 font-bold text-green-400">Movie characters are "hyper-beings." They are defined by obsession. They must want something intensely.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">The Want (External Goal)</h3>
                                <p className="text-sm mb-2">The engine of the movie. The tangible object or state the protagonist is chasing throughout Act II.</p>
                                <ul className="space-y-1 text-sm">
                                    <li className="flex items-start">
                                        <span className="text-yellow-400 mr-2">•</span>
                                        <span>Indiana Jones wants the Ark.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-400 mr-2">•</span>
                                        <span>Clarice Starling wants to catch Buffalo Bill.</span>
                                    </li>
                                </ul>
                                <p className="mt-2 text-xs italic">Usually, "The Want" is what the character <em>thinks</em> will make them happy.</p>
                            </div>
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <h3 className="text-xl font-bold text-green-400 mb-2">The Need (Internal Goal)</h3>
                                <p className="text-sm mb-2">The spiritual or emotional growth the protagonist must undergo to become whole. Usually unaware of this at the beginning.</p>
                                <ul className="space-y-1 text-sm">
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-2">•</span>
                                        <span>Indiana Jones needs to believe in something greater than himself (faith).</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-2">•</span>
                                        <span>Clarice Starling needs to silence the screaming of the lambs (resolve past trauma).</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-blue-500">
                            <h3 className="text-xl font-semibold text-white mb-3">D. The Arc (The Collision)</h3>
                            <p>A good story forces the character to choose between their Want and their Need at the climax.</p>
                            <ul className="space-y-2 mt-2">
                                <li className="flex items-start">
                                    <span className="text-blue-400 font-bold mr-2">•</span>
                                    <span>To get what they Need, they usually have to sacrifice what they Want.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 font-bold mr-2">•</span>
                                    <span><strong>Example (Cars):</strong> Lightning McQueen Wants to win the Piston Cup. He Needs to learn the value of friendship. In the end, he sacrifices winning to help The King finish the race. He loses the Want, gains the Need, and becomes a hero.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* VI. GHOST & LIE */}
            <section id="ghost-and-lie" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VI. THE GHOST & THE LIE: PSYCHOLOGY OF CHARACTER
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>To make a character feel real, they need a past that haunts their present.</p>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-red-400 mb-3">A. The Lie the Character Believes</h3>
                            <p className="mb-3">At the start of the movie (Act I), your hero is living a lie. This lie is their "armor" against the world.</p>
                            <div className="space-y-2">
                                <p className="font-bold">Examples of Lies:</p>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>"I am better off alone."</li>
                                    <li>"Money is the only thing that matters."</li>
                                    <li>"If I follow the rules, I will be safe."</li>
                                </ul>
                            </div>
                            <p className="mt-4">The structure of your film is designed to slowly chip away at this lie until they are forced to face the truth in Act III.</p>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-purple-400 mb-3">B. The Ghost (The Wound)</h3>
                            <p className="mb-3">Why do they believe The Lie? Because of something that happened in their past—The Ghost.</p>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-purple-400 font-bold mr-2">•</span>
                                    <span>This is the backstory trauma. It doesn't have to be tragic (like Batman's parents dying), but it must be formative.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 font-bold mr-2">•</span>
                                    <span><strong>Example (Good Will Hunting):</strong> Will believes The Lie that "Letting people close is dangerous." The Ghost is his abusive childhood. The movie is about Sean Maguire exorcising that Ghost so Will can accept love.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* VII. SCENE CONSTRUCTION */}
            <section id="scene-construction" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VII. SCENE CONSTRUCTION: POLARITY AND TURNS
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>A screenplay is a collection of about 40–60 scenes. If your scenes are flat, your movie is flat. A scene is a mini-movie; it needs a beginning, middle, and end.</p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">A. The Golden Rule of Scenes</h3>
                            <p className="text-lg font-bold text-green-400 mb-2">Every scene must do at least one of two things (ideally both):</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400 mb-1">1. Advance the Plot</h4>
                                    <p className="text-sm">Something happens that makes the goal closer or farther away.</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400 mb-1">2. Reveal Character</h4>
                                    <p className="text-sm">We learn something new about who they are.</p>
                                </div>
                            </div>
                            <p className="mt-4 text-red-400 font-bold">If a scene does neither, cut it. It is "dead weight."</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Scene Objectives & Obstacles</h3>
                            <p>In every scene, somebody wants something.</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3">
                                <p className="font-bold">Character A wants [X]. Character B wants [Y]. They are mutually exclusive.</p>
                                <p className="mt-2">This creates immediate conflict.</p>
                                <p className="mt-2 text-red-400 italic">"Two people agreeing in a room" is not a scene; it is boring. Even allies should disagree on <em>how</em> to achieve the goal.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Polarity Shift (+ / -)</h3>
                            <p>A good scene starts on one emotional charge and ends on the opposite.</p>
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-gray-900 p-3 rounded border border-red-800">
                                    <p className="text-red-400 font-bold">✗ Flat Scene</p>
                                    <p className="text-sm">Starts Positive (+) (couple preparing for date)<br />Ends Positive (+) (they leave happy)</p>
                                    <p className="text-xs mt-1 text-red-400">Nothing has changed. Scene feels flat.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded border border-green-800">
                                    <p className="text-green-400 font-bold">✓ Good Scene</p>
                                    <p className="text-sm">Starts Positive (+) (preparing for date)<br />Ends Negative (-) (one gets text from ex-lover)</p>
                                    <p className="text-xs mt-1 text-green-400">The scene has turned. It has energy.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">D. The "Button"</h3>
                            <p>End your scenes late. Don't let characters say goodbye and walk out a door.</p>
                            <p className="mt-2 font-bold text-green-400">End on the highest moment of tension, a revelation, or a joke.</p>
                            <p className="mt-2">The final line or image of a scene is called "The Button." It propels the reader into the next scene.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* VIII. DIALOGUE */}
            <section id="dialogue" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    VIII. DIALOGUE: THE ART OF SUBTEXT
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="text-xl font-bold">
                        Dialogue is what characters say. <span className="text-green-400">Subtext</span> is what they mean.
                    </p>
                    <p>Novice writers use dialogue to explain the plot. Expert writers use dialogue as a weapon to hide the truth.</p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. "On-the-Nose" Dialogue (The Enemy)</h3>
                            <p>This is when characters say exactly what they are thinking or feeling. Real people rarely do this.</p>
                            <div className="grid md:grid-cols-3 gap-4 mt-4">
                                <div className="bg-gray-900 p-3 rounded border border-red-800">
                                    <p className="text-red-400 font-bold mb-1">✗ Bad</p>
                                    <p className="text-sm italic">"I am so angry at you because you cheated on me, and it breaks my heart!"</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded">
                                    <p className="text-yellow-400 font-bold mb-1">✓ Better</p>
                                    <p className="text-sm italic">A character silently packing a suitcase while the other watches.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded border border-green-800">
                                    <p className="text-green-400 font-bold mb-1">✓ Best</p>
                                    <p className="text-sm italic">"Did you pick up the dry cleaning?" said with icy contempt.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Subtext in Action</h3>
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <p className="font-bold">Think of a scene where a couple is arguing about doing the dishes:</p>
                                <div className="grid md:grid-cols-2 gap-4 mt-3">
                                    <div className="bg-gray-800 p-3 rounded">
                                        <p className="font-bold text-red-400">The Text:</p>
                                        <p className="text-sm">"You never help around the house."</p>
                                    </div>
                                    <div className="bg-gray-800 p-3 rounded">
                                        <p className="font-bold text-green-400">The Subtext:</p>
                                        <p className="text-sm">"I feel unloved and taken for granted, and I worry our marriage is failing."</p>
                                    </div>
                                </div>
                                <p className="mt-3 font-bold text-center">Great scenes are about the subtext, never the text.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Exposition Dumps (As You Know, Bob...)</h3>
                            <p>Audiences need information to understand the plot, but they hate being lectured.</p>
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-gray-900 p-3 rounded border border-red-800">
                                    <p className="text-red-400 font-bold mb-1">✗ Bad</p>
                                    <p className="text-sm">Two scientists discussing their project in a lab for 5 minutes for the audience's benefit.</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded border border-green-800">
                                    <p className="text-green-400 font-bold mb-1">✓ Good (Jurassic Park)</p>
                                    <p className="text-sm">The exposition about cloning dinosaurs is delivered during a ride where characters debate the ethics of it. The information is weaponized in an argument.</p>
                                </div>
                            </div>
                            <p className="mt-4 font-bold">The Rule: Only deliver information when the audience is dying to know it, or hide it inside conflict.</p>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">D. "Show, Don't Tell" (Visual Writing)</h3>
                            <p className="text-lg font-bold text-green-400 mb-2">Before writing a line of dialogue, ask: "Can I show this instead?"</p>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <p className="text-red-400 font-bold">Don't have a character say:</p>
                                <p className="text-sm italic ml-4">"I'm so nervous."</p>
                                <p className="text-green-400 font-bold mt-3">Show them:</p>
                                <p className="text-sm italic ml-4">Tapping their foot, biting their nails, checking their watch repeatedly.</p>
                            </div>
                            <p className="mt-4">Film is a visual medium. Let the actor act.</p>
                        </div>
                    </div>


                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* IX. THE PAGE */}
            <section id="the-page" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    IX. THE PAGE: WHY IT LOOKS LIKE THAT
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>A screenplay looks strange compared to a novel. There is a lot of empty space. The font is like a typewriter. This is intentional.</p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">A. The "Courier 12pt" Rule</h3>
                            <p className="text-lg font-bold text-red-400 mb-2">You must use Courier 12-point font. No exceptions.</p>
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-gray-800 p-3 rounded">
                                    <p className="font-bold text-green-400">Why Courier?</p>
                                    <p className="text-sm">It's a "monospaced" font (every letter takes up the same horizontal space).</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <p className="font-bold text-green-400">The Golden Rule:</p>
                                    <p className="text-sm"><strong>One Page = One Minute of Screen Time.</strong></p>
                                </div>
                            </div>
                            <p className="mt-4 text-red-400 font-bold">Warning: Producers use page count to budget the film. If you use "Times New Roman," you break the formula, and your script is rejected.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Margins & Spacing</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li><strong>Left Margin:</strong> 1.5 inches (room for hole punch in printed script)</li>
                                <li><strong>Right Margin:</strong> 1 inch</li>
                                <li><strong>Dialogue:</strong> Centered in a narrow column (~3 inches wide)</li>
                                <li><strong>Never justify text:</strong> Always "ragged right"</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* X. UNFILMABLES */}
            <section id="unfilmables" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    X. THE UNFILMABLES: WHAT NOT TO WRITE
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="font-bold">Screenwriting is strict. You can only write what can be seen or heard. Everything else is "Unfilmable."</p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg border border-red-800">
                            <h3 className="text-xl font-semibold text-red-400 mb-3">A. "Directing from the Page"</h3>
                            <p className="font-bold">Do not tell the director where to put the camera.</p>
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-gray-800 p-3 rounded">
                                    <p className="text-red-400 font-bold mb-1">✗ Avoid:</p>
                                    <p className="text-sm font-mono">"CAMERA PANS LEFT"<br />"ZOOM IN ON"<br />"LOW ANGLE SHOT"</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <p className="text-green-400 font-bold mb-1">✓ The Fix:</p>
                                    <p className="text-sm">Describe the action so the shot is implied.</p>
                                    <p className="text-sm italic mt-1">Instead of "ZOOM IN ON the gun," write "His hand trembles as it reaches for the gun."</p>
                                </div>
                            </div>
                            <p className="mt-4 text-yellow-400">It's the director's job to visualize the shot, not yours.</p>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg border border-red-800">
                            <h3 className="text-xl font-semibold text-red-400 mb-3">B. Internal Thought (Novelistic Writing)</h3>
                            <div className="bg-gray-800 p-4 rounded-md mb-4">
                                <p className="text-red-400 font-bold">✗ Bad:</p>
                                <p className="text-sm italic">"John stands at the window. He thinks about his ex-wife and regrets the day he left her. He wonders if she is happy."</p>
                            </div>
                            <p className="text-red-400 font-bold mb-2">Why it fails:</p>
                            <p>The audience cannot see his thoughts. They just see a guy standing at a window. It is boring.</p>
                            <div className="bg-gray-800 p-4 rounded-md mt-4">
                                <p className="text-green-400 font-bold">✓ The Fix:</p>
                                <p className="text-sm italic">"John stands at the window. He holds a cracked photo of his ex-wife. He brings a lighter to the edge of the photo, hesitates, then puts the lighter away."</p>
                                <p className="text-sm mt-1 text-green-400">Now we <em>see</em> the regret.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg border border-red-800">
                            <h3 className="text-xl font-semibold text-red-400 mb-3">C. "We See" and "We Hear"</h3>
                            <p>Avoid writing "We see a car drive by." Just write "A car drives by."</p>
                            <p className="mt-2 italic">"We see" takes the reader out of the story. It reminds them they are watching a movie. Keep it immersive.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* XI. SOFTWARE & TOOLS */}
            <section id="software-tools" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XI. SOFTWARE & TOOLS: DO NOT USE WORD
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="text-red-400 font-bold text-lg">
                        You cannot format a screenplay in Microsoft Word or Google Docs. It is technically possible, but the margins will drift, the pagination will break, and you will look like an amateur.
                    </p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-yellow-500">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">A. The Industry Standard: Final Draft</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800 p-3 rounded">
                                    <p className="font-bold text-green-400">✓ Pros</p>
                                    <ul className="text-sm space-y-1 mt-1">
                                        <li>Used by 95% of Hollywood</li>
                                        <li>Auto-formatting</li>
                                        <li>Revision tracking</li>
                                        <li>Industry acceptance</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <p className="font-bold text-red-400">✗ Cons</p>
                                    <ul className="text-sm space-y-1 mt-1">
                                        <li>Expensive ($200+)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. The Competitors (Cheaper/Free)</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">1. WriterDuet / WriterSolo</h4>
                                    <p className="text-sm">Excellent, cloud-based, free version available. Great for collaboration.</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">2. Fade In</h4>
                                    <p className="text-sm">Professional grade, cheaper one-time fee. Used by Rian Johnson (Knives Out).</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">3. Highland 2</h4>
                                    <p className="text-sm">Minimalist, great for Mac users.</p>
                                </div>
                            </div>
                            <p className="mt-4 font-bold text-green-400">
                                Recommendation: If you are just starting, use the free version of WriterDuet. Do not spend money on Final Draft until you are selling scripts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* XII. PACING */}
            <section id="pacing" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XII. PACING: THE "READ"
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>A script is read before it is filmed. The reading experience (The "Read") matters. The pace of your writing should match the pace of the scene.</p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. Action Scenes</h3>
                            <p>Use short, punchy sentences. Fragmented grammar is okay here.</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3 font-mono text-sm">
                                Fists fly. Glass shatters. John ducks.<br />
                                A knife misses his ear by an inch.
                            </div>
                            <p className="mt-2 text-sm">This makes the reader read fast, mimicking the adrenaline of the scene.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. Emotional/Slow Scenes</h3>
                            <p>Use longer, more flowing sentences. Combine actions.</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3 font-mono text-sm">
                                She walks to the edge of the cliff, looking out over the grey ocean that seems to stretch on forever into the mist.
                            </div>
                            <p className="mt-2 text-sm">This forces the reader to slow down and sit in the emotion.</p>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">C. The "White Space" Aesthetic</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span>A page of script should look inviting.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 font-bold mr-2">•</span>
                                    <span>If a reader turns the page and sees solid blocks of black ink, they groan.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span>Aim for a healthy mix of dialogue and action. Keep the page airy.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-12 border-t border-gray-800"></div>

            {/* XIII. THE REWRITE */}
            <section id="the-rewrite" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XIII. THE REWRITE: FROM VOMIT DRAFT TO POLISH
                </h2>
                <div className="space-y-4 text-gray-300">
                    <blockquote className="border-l-4 border-green-500 pl-4 py-2 bg-gray-900 rounded-r-md italic">
                        "Writing is rewriting." — Ernest Hemingway
                    </blockquote>

                    <p>The first draft of your script will be bad. In the industry, this is called the "Vomit Draft." Its only purpose is to exist. You cannot fix a blank page, but you can fix a bad page.</p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">A. The "Drawer" Method</h3>
                            <p className="font-bold text-green-400">Once you type "FADE OUT" on your first draft, do not read it.</p>
                            <ul className="space-y-2 mt-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span>Put it in a drawer (physical or digital) for 2 weeks.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">•</span>
                                    <span><strong>Why?</strong> You are currently "Snowblind." You know what you <em>meant</em> to write, so your brain fixes errors automatically. You need to forget the script to read it like an audience member.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. The "Kill Your Darlings" Pass</h3>
                            <p>In the second draft, look for scenes you love but that do not advance the plot.</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3">
                                <p className="font-bold">Scenario:</p>
                                <p className="text-sm">You wrote a hilarious 3-page scene where characters debate pizza toppings. It's funny, but has nothing to do with the murder mystery plot.</p>
                                <p className="font-bold text-red-400 mt-2">Action: Cut it.</p>
                                <p className="text-sm">If it doesn't move the story forward, it is dragging it down.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">C. The Dialogue Pass</h3>
                            <p className="font-bold text-green-400">Read your script out loud.</p>
                            <div className="space-y-3 mt-3">
                                <div className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">1.</span>
                                    <span>If you stumble over a line, the actor will stumble too.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">2.</span>
                                    <span>Look for "On-the-Nose" dialogue and rewrite it with subtext.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-400 font-bold mr-2">3.</span>
                                    <span><strong>Differentiate voices:</strong> Cover the character names. Can you tell who is speaking just by the rhythm? If the 8-year-old girl sounds like the 40-year-old cop, you have a problem.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* XIV. THE PITCH */}
            <section id="the-pitch" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XIV. THE PITCH: SELLING THE AIR
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p>In Hollywood, you rarely hand someone a script first. You pitch it. You have to sell the <em>idea</em> of the movie in 60 seconds (The Elevator Pitch) or 20 minutes (The General Meeting).</p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. The "Why Now?" Question</h3>
                            <p>Producers are business people. They want to know why this movie needs to be made <em>today</em>.</p>
                            <div className="grid md:grid-cols-2 gap-4 mt-3">
                                <div className="bg-gray-900 p-3 rounded border border-red-800">
                                    <p className="text-red-400 font-bold">✗ Bad Answer</p>
                                    <p className="text-sm italic">"Because it's a cool story."</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded border border-green-800">
                                    <p className="text-green-400 font-bold">✓ Good Answer</p>
                                    <p className="text-sm italic">"It explores AI anxiety, which everyone is talking about right now, but framed as a 90s thriller."</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">B. The Pitch Structure</h3>
                            <ol className="list-decimal ml-6 space-y-2">
                                <li><strong>The Hook:</strong> The Logline (The irony/concept).</li>
                                <li><strong>The Characters:</strong> Who are we following? Why do we love them?</li>
                                <li><strong>The Act I Turn:</strong> How does the trouble start?</li>
                                <li><strong>The Midpoint:</strong> What is the crazy set piece in the middle?</li>
                                <li><strong>The Climax:</strong> How does it end? (Yes, you must spoil the ending in a pitch).</li>
                            </ol>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">C. The "Look Book" (Pitch Deck)</h3>
                            <p>Modern screenwriters often create a visual slide deck to accompany the script.</p>
                            <div className="grid md:grid-cols-3 gap-4 mt-4">
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Visual Tone</h4>
                                    <p className="text-sm">Images from other movies that look like your movie.</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Casting Ideas</h4>
                                    <p className="text-sm">"Think of a young Harrison Ford type."</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded">
                                    <h4 className="font-bold text-green-400 mb-1">Comps</h4>
                                    <p className="text-sm">"It's Die Hard meets The Hangover." (Helps producers understand tone and budget instantly).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* XV. AGENTS & MANAGERS */}
            <section id="agents-managers" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XV. AGENTS, MANAGERS, AND THE BLACK LIST
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="text-red-400 font-bold">
                        The Catch-22: "You can't get an agent until you sell a script, but you can't sell a script without an agent."
                    </p>
                    <p>Here is how you actually break in.</p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">A. Manager vs. Agent</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-yellow-400 mb-1">Manager</h4>
                                    <p className="text-sm mb-2">Focuses on your long-term career. Develops scripts, gives notes, provides emotional support.</p>
                                    <p className="text-xs text-green-400">Easier to get when new. Takes 10%.</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-400 mb-1">Agent</h4>
                                    <p className="text-sm mb-2">Focuses on the deal. Negotiates contracts and money.</p>
                                    <p className="text-xs text-yellow-400">Usually signs you once "money-ready." Takes 10%.</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <h4 className="font-bold text-blue-400 mb-1">Lawyer</h4>
                                    <p className="text-sm mb-2">Negotiates the fine print.</p>
                                    <p className="text-xs text-blue-400">Takes 5%.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-green-500">
                            <h3 className="text-xl font-semibold text-white mb-3">B. The Black List (blcklst.com)</h3>
                            <p className="font-bold text-green-400">This is the most democratic way to break in today.</p>
                            <ol className="list-decimal ml-6 space-y-2 mt-3">
                                <li><strong>How it works:</strong> Upload your PDF and pay ~$100 for a professional reader evaluation.</li>
                                <li><strong>The Score:</strong> You get a score out of 10.</li>
                                <li><strong>The Result:</strong> If you score an "8" or higher, your script is emailed to thousands of industry professionals.</li>
                            </ol>
                            <p className="mt-3 text-sm italic">Movies like "The Imitation Game" and "Slumdog Millionaire" were discovered via the annual Black List.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">C. Contests (The Lottery Tickets)</h3>
                            <p className="text-red-400 mb-2">Most contests are scams. Only enter the "Big Four."</p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                                <div className="bg-gray-900 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400">1. Nicholl Fellowship</h4>
                                    <p className="text-xs">Run by the Oscars/Academy</p>
                                </div>
                                <div className="bg-gray-900 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400">2. Austin Film Festival</h4>
                                </div>
                                <div className="bg-gray-900 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400">3. PAGE International</h4>
                                </div>
                                <div className="bg-gray-900 p-3 rounded text-center">
                                    <h4 className="font-bold text-green-400">4. Final Draft Big Break</h4>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">D. Query Letters</h3>
                            <p>The old-fashioned way. Find the email of a manager's assistant (IMDbPro is the tool for this).</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-3 font-mono text-sm">
                                <p className="text-green-400">Subject: QUERY: [Title] - [Genre] - [Logline]</p>
                                <p className="mt-2">Body: Keep it under 5 sentences.</p>
                                <p className="italic mt-1">"Hi, I wrote a script called X. It placed in the Nicholl Fellowship. Here is the logline. May I send you the PDF?"</p>
                            </div>
                            <p className="mt-3 text-yellow-400">Success Rate: Low (1%), but it costs nothing but time.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* XVI. CONCLUSION */}
            <section id="conclusion" className="scroll-mt-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    XVI. CONCLUSION: THE MARATHON
                </h2>
                <div className="space-y-4 text-gray-300">
                    <p className="text-xl font-bold text-red-400">
                        Screenwriting is the most rejection-heavy career in the arts. You will write 10 scripts before one is good. You will write 20 before one is sold.
                    </p>

                    <div className="my-8 p-6 bg-gray-900 border-l-4 border-green-500 rounded-r-lg">
                        <p className="text-xl font-bold text-white text-center">
                            The difference between an "Aspiring Screenwriter" and a "Professional Screenwriter" is not talent; it is discipline.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-gray-800 p-3 rounded text-center">
                                <p className="text-red-400 font-bold">Aspiring Writer</p>
                                <p className="text-sm">Waits for inspiration</p>
                            </div>
                            <div className="bg-gray-800 p-3 rounded text-center">
                                <p className="text-green-400 font-bold">Professional Writer</p>
                                <p className="text-sm">Writes 5 pages every morning before work, whether they feel like it or not</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-lg">
                        You now have the tools.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="text-green-400 font-bold mr-2">•</span>
                            <span>You know the <strong>Structure</strong> (Act I, II, III).</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-400 font-bold mr-2">•</span>
                            <span>You understand the <strong>Psychology</strong> (Wants vs. Needs).</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-400 font-bold mr-2">•</span>
                            <span>You have mastered the <strong>Format</strong> (Sluglines and White Space).</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-400 font-bold mr-2">•</span>
                            <span>You know the <strong>Business</strong> (Pitching and Managers).</span>
                        </li>
                    </ul>

                    <p className="mt-6 text-xl font-bold text-green-400">
                        The only thing left to do is the hardest part:
                    </p>
                    <div className="bg-gray-900 p-6 rounded-lg text-center my-8">
                        <p className="text-2xl font-bold text-white">
                            Sit down. Open the software. And watch the blinking cursor until you bleed.
                        </p>
                    </div>
                    <p className="text-3xl font-bold text-center text-green-400">
                        FADE OUT.
                    </p>
                </div>
            </section>
        </>
    )
};