import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Scriptwriting's Master Class: Structure, Psychology, and Selling",
  description:
    "A deep dive into the technical format, psychological character design, and business strategy required to write a professional, salable screenplay.",
  keywords: [
    "Screenwriting",
    "3-Act Structure",
    "Logline",
    "Inciting Incident",
    "Midpoint",
    "All Is Lost",
    "Wants vs. Needs",
    "Subtext",
    "Sluglines",
    "Final Draft",
    "The Black List"
  ],
  alternates: {
    canonical: "/how-to-learn-script-writing",
  },
};

export default function ScreenwritingMasterclassPage() {
  return (
    <main className="bg-black text-gray-200 min-h-screen">
      <article className="max-w-4xl mx-auto px-4 py-30 space-y-12 leading-relaxed">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold text-white">
            The Screenwriter's Master Class
          </h1>
          <p className="text-lg text-gray-400">
            Structure, Psychology, Format, and the Business of Selling the Air
          </p>
        </header>

        {/* TABLE OF CONTENTS */}
        <h2 className="text-2xl font-semibold text-green-400 mb-6">
          Table of Contents
        </h2>

        <ul className="space-y-4 text-green-400">
          {/* PART 1: THE FOUNDATION */}
          <li>
            <a href="#part-1-foundation" className="text-green-400 font-semibold">
              PART 1: THE FOUNDATION (STRUCTURE & CONCEPT)
            </a>

            <ul className="mt-2 ml-6 space-y-1 hover:text-green-400">
              <li>
                <a href="#introduction" className="underline underline-offset-4">
                  I. Introduction: The Blueprint, Not the Building
                </a>
              </li>
              <li>
                <a href="#the-seed" className="underline underline-offset-4">
                  II. The Seed: Concept, Logline, and High Concept
                </a>
              </li>
              <li>
                <a href="#the-skeleton" className="underline underline-offset-4">
                  III. The Skeleton: Mastering the 3-Act Structure
                </a>
              </li>
              <li>
                <a href="#genre" className="underline underline-offset-4">
                  IV. Genre: The Promise You Make to the Audience
                </a>
              </li>
            </ul>
          </li>

          {/* PART 2: THE MECHANICS */}
          <li>
            <a href="#part-2-mechanics" className="text-green-400 font-semibold">
              PART 2: THE MECHANICS (CHARACTER & SCENE)
            </a>

            <ul className="mt-2 ml-6 space-y-1">
              <li>
                <a href="#character-design" className="underline underline-offset-4">
                  V. Character Design: Wants vs. Needs
                </a>
              </li>
              <li>
                <a href="#ghost-lie" className="underline underline-offset-4">
                  VI. The Ghost & The Lie: Psychology of Character
                </a>
              </li>
              <li>
                <a href="#scene-construction" className="underline underline-offset-4">
                  VII. Scene Construction: Polarity and Turns
                </a>
              </li>
              <li>
                <a href="#dialogue" className="underline underline-offset-4">
                  VIII. Dialogue: The Art of Subtext
                </a>
              </li>
            </ul>
          </li>

          {/* PART 3: THE FORMAT */}
          <li>
            <a href="#part-3-format" className="text-green-400 font-semibold">
              PART 3: THE FORMAT (THE INDUSTRY CODE)
            </a>

            <ul className="mt-2 ml-6 space-y-1">
              <li>
                <a href="#the-page" className="underline underline-offset-4">
                  IX. The Page: Why It Looks Like That
                </a>
              </li>
              <li>
                <a href="#core-elements" className="underline underline-offset-4">
                  X. The Core Elements: Sluglines, Action, Dialogue
                </a>
              </li>
              <li>
                <a href="#unfilmables" className="underline underline-offset-4">
                  XI. The "Unfilmables": What NOT to Write
                </a>
              </li>
              <li>
                <a href="#software-tools" className="underline underline-offset-4">
                  XII. Software & Tools: Do Not Use Word
                </a>
              </li>
              <li>
                <a href="#pacing" className="underline underline-offset-4">
                  XIII. Pacing: The "Read"
                </a>
              </li>
            </ul>
          </li>

          {/* PART 4: THE BUSINESS */}
          <li>
            <a href="#part-4-business" className="text-green-400 font-semibold">
              PART 4: THE BUSINESS (REWRITING & SELLING)
            </a>

            <ul className="mt-2 ml-6 space-y-1">
              <li>
                <a href="#the-rewrite" className="underline underline-offset-4">
                  XIV. The Rewrite: From Vomit Draft to Polish
                </a>
              </li>
              <li>
                <a href="#the-pitch" className="underline underline-offset-4">
                  XV. The Pitch: Selling the Air
                </a>
              </li>
              <li>
                <a href="#agents-black-list" className="underline underline-offset-4">
                  XVI. Agents, Managers, and The Black List
                </a>
              </li>
              <li>
                <a href="#conclusion" className="underline underline-offset-4">
                  XVII. Conclusion: The Marathon
                </a>
              </li>
            </ul>
          </li>
        </ul>

        {/* I. INTRODUCTION */}
        <section id="introduction">
          <h2 className="text-3xl font-bold text-white mb-4">
            I. INTRODUCTION: THE BLUEPRINT, NOT THE BUILDING
          </h2>

          <p>
            A novel is a finished product. You buy it, you read it, the experience is complete.
            A script is not a finished product. It is a set of instructions. It is a blueprint.
          </p>
          <p>
            If you write a beautiful sentence in a novel describing the internal melancholy of a protagonist, you are a genius.
            If you write that same sentence in a script, you are an amateur. Why?
            Because the camera cannot film "internal melancholy." It can only film a tear, a frown, or a slammed door.
            Scriptwriting is the art of <strong className="text-green-400">Externalization</strong>. It is showing, not telling.
            It is a rigorous discipline that balances artistic expression with technical limitation.
          </p>

          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-green-400">The Rule of Time:</strong> One page of standard script format equals roughly one minute of screen time.
            </li>
            <li>
              <strong className="text-green-400">The Rule of Cost:</strong> Every time you write "EXT. BATTLEFIELD - DAY," you have just spent $10 million of the producer&apos;s money.
            </li>
          </ul>
          <p>
            This master class will teach you how to think like a filmmaker, structure like an architect, and write like a poet.
          </p>
        </section>

        {/* II. THE SEED */}
        <section id="the-seed">
          <h2 className="text-3xl font-bold text-white mb-4">
            II. THE SEED: CONCEPT, LOGLINE, AND HIGH CONCEPT
          </h2>

          <p>
            Before you write "FADE IN," you must know what your movie is about.
            If you cannot explain it in one sentence, you do not have a movie; you have a situation.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">A. The Logline (The DNA)</h3>
          <p>
            A logline is a one-sentence summary of your story. It is the tool used to sell the script to producers.
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-green-400">The Formula:</strong> [Protagonist] + [Inciting Incident] + [Action/Goal] + [Antagonist/Obstacle] + [Stakes].
            </li>
            <li>
              <strong className="text-green-400">Good Example (The Martian):</strong> "An astronaut becomes stranded on Mars after his team assumes him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive before he runs out of supplies."
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-white mt-6">B. High Concept vs. Low Concept</h3>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-green-400">High Concept:</strong> A premise that is easily communicated and has mass appeal. Usually "Plot-Driven." Example: "Jurassic Park" (Dinosaurs are cloned, things go wrong).
            </li>
            <li>
              <strong className="text-green-400">Low Concept:</strong> A premise focused on character development and subtleties. Harder to sell to Hollywood studios, better for Indie films. Example: "Lady Bird" (A girl grows up in Sacramento).
            </li>
          </ul>
        </section>

        {/* III. THE SKELETON */}
        <section id="the-skeleton">
          <h2 className="text-3xl font-bold text-white mb-4">
            III. THE SKELETON: MASTERING THE 3-ACT STRUCTURE
          </h2>

          <p>
            Structure is not a formula; it is gravity. You can fight it, but you will likely fail. The human brain is wired to process stories in three parts: Beginning, Middle, and End.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">A. ACT I: The Setup (Pages 1-30)</h3>
          <p>
            Goal: Introduce the hero and the status quo, then break it.
          </p>
          <ol className="list-decimal list-inside ml-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-green-400">The Opening Image (Page 1):</strong> Visual summary of the theme. Show the hero&apos;s life *before* the change.
            </li>
            <li>
              <strong className="text-green-400">The Inciting Incident (Page 12):</strong> The catalyst. The event that disrupts the hero&apos;s life. (Example: Luke finds the message from Princess Leia inside R2-D2 in Star Wars).
            </li>
            <li>
              <strong className="text-green-400">Plot Point 1 (Page 25-30):</strong> The hero makes a choice to leave the "Old World" and enter the "New World." There is no turning back. (Example: Neo takes the Red Pill in The Matrix).
            </li>
          </ol>

          <h3 className="text-xl font-semibold text-white mt-6">B. ACT II: The Confrontation (Pages 30-85)</h3>
          <p>
            Goal: The hero faces obstacles, fails, learns, and changes. This is the hardest part to write (The "Sagging Middle").
          </p>
          <ol className="list-decimal list-inside ml-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-green-400">Fun and Games (Pages 30-55):</strong> The "trailer moments." The hero explores the new world.
            </li>
            <li>
              <strong className="text-green-400">The Midpoint (Page 55):</strong> A massive event that raises the stakes. The "False Victory" or "False Defeat." The hero shifts from passive (reacting) to active (attacking).
            </li>
            <li>
              <strong className="text-green-400">All Is Lost (Page 75):</strong> The lowest point. Someone dies. The plan fails. Hope is gone.
            </li>
            <li>
              <strong className="text-green-400">Dark Night of the Soul (Pages 75-85):</strong> The hero wallows in their defeat but discovers the "Theme"—the truth they needed to learn all along.
            </li>
          </ol>
        </section>

        {/* IV. GENRE */}
        <section id="genre">
          <h2 className="text-3xl font-bold text-white mb-4">
            IV. GENRE: THE PROMISE YOU MAKE TO THE AUDIENCE
          </h2>

          <p>
            Genre is not just a category on Netflix; it is a set of rules and expectations. If you write a Horror movie where nobody dies and everyone feels safe, you have broken the contract.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">A. Core Genres and Requirements</h3>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-green-400">Thriller:</strong> Needs a "Ticking Clock" and high stakes.
            </li>
            <li>
              <strong className="text-green-400">Rom-Com:</strong> Needs a "Meet Cute" (how they meet) and a "Breakup" (end of Act II).
            </li>
            <li>
              <strong className="text-green-400">Horror:</strong> Needs a "Monster" (supernatural or human) and a "Sin" (the transgression that invited the monster).
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6">B. Tone Consistency</h3>
          <p>
            You can mix genres (e.g., <em className="italic">Alien</em> is Horror inside Sci-Fi), but you cannot mix tones randomly. If you start with a gritty, realistic tone, you cannot have a character slip on a banana peel and make a cartoon sound effect in Act II. It breaks the "Suspension of Disbelief."
          </p>
        </section>

        {/* V. CHARACTER DESIGN */}
        <section id="character-design">
          <h2 className="text-3xl font-bold text-white mb-4">
            V. CHARACTER DESIGN: WANTS VS. NEEDS
          </h2>

          <p>
            "Plot is character revealed by action." — Aristotle. The plot is just a series of events specifically designed to torture your protagonist until they change.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">A. The Want (External Goal)</h3>
          <p>
            This is the engine of the movie. It is the tangible object or state the protagonist is chasing throughout Act II. (Example: Indiana Jones wants the Ark.) Usually, "The Want" is what the character *thinks* will make them happy.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">B. The Need (Internal Goal)</h3>
          <p>
            This is the spiritual or emotional growth the protagonist must undergo to become whole. They are usually unaware of this need at the beginning. (Example: Indiana Jones needs to believe in something greater than himself.)
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">C. The Arc (The Collision)</h3>
          <p>
            A good story forces the character to choose between their Want and their Need at the climax. To get what they Need, they usually have to sacrifice what they Want.
          </p>
          <blockquote className="border-l-4 border-green-400 pl-4 my-4 italic">
            <strong className="text-green-400">Example (Cars):</strong> Lightning McQueen Wants to win the Piston Cup. He Needs to learn the value of friendship. In the end, he sacrifices winning the cup to help The King finish the race. He loses the Want, gains the Need, and becomes a hero.
          </blockquote>
        </section>

        {/* VI. THE GHOST & THE LIE */}
        <section id="ghost-lie">
          <h2 className="text-3xl font-bold text-white mb-4">
            VI. THE GHOST & THE LIE: PSYCHOLOGY OF CHARACTER
          </h2>

          <p>
            To make a character feel real, they need a past that haunts their present.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">A. The Lie the Character Believes</h3>
          <p>
            At the start of the movie (Act I), your hero is living a lie. This lie is their "armor" against the world. The structure of your film is designed to slowly chip away at this lie until they are forced to face the truth in Act III.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">B. The Ghost (The Wound)</h3>
          <p>
            Why do they believe The Lie? Because of something that happened in their past—The Ghost. This is the backstory trauma.
          </p>
          <blockquote className="border-l-4 border-green-400 pl-4 my-4 italic">
            <strong className="text-green-400">Example (Good Will Hunting):</strong> Will believes The Lie that "Letting people close is dangerous." The Ghost is his abusive childhood. The movie is about Sean Maguire (Robin Williams) exorcising that Ghost so Will can accept love.
          </blockquote>
        </section>

        {/* VII. SCENE CONSTRUCTION */}
        <section id="scene-construction">
          <h2 className="text-3xl font-bold text-white mb-4">
            VII. SCENE CONSTRUCTION: POLARITY AND TURNS
          </h2>

          <p>
            A screenplay is a collection of about 40–60 scenes. A scene is a mini-movie; it needs a beginning, middle, and end.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">A. The Golden Rule of Scenes</h3>
          <p>
            Every scene must do at least one of two things (ideally both):
          </p>
          <ol className="list-decimal list-inside ml-6 space-y-2 text-gray-300">
            <li>
              Advance the Plot (Something happens that makes the goal closer or farther away).
            </li>
            <li>
              Reveal Character (We learn something new about who they are).
            </li>
          </ol>
          <p>
            If a scene does neither, cut it. It is "dead weight."
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">B. Polarity Shift (+ / -)</h3>
          <p>
            A good scene starts on one emotional charge and ends on the opposite. If a scene starts Positive (+) and ends Positive (+), nothing has changed, and the scene feels flat.
          </p>
          <blockquote className="border-l-4 border-green-400 pl-4 my-4 italic">
            <strong className="text-green-400">The Shift:</strong> A couple prepares for a romantic date (+), but one of them gets a text message from an ex-lover (-). The scene has turned.
          </blockquote>
        </section>

        {/* VIII. DIALOGUE */}
        <section id="dialogue">
          <h2 className="text-3xl font-bold text-white mb-4">
            VIII. DIALOGUE: THE ART OF SUBTEXT
          </h2>

          <p>
            Dialogue is what characters say. Subtext is what they mean. Novice writers use dialogue to explain the plot. Expert writers use dialogue as a weapon to hide the truth.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">A. "On-the-Nose" Dialogue (The Enemy)</h3>
          <p>
            This is when characters say exactly what they are thinking or feeling. Real people rarely do this.
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-green-400">Bad:</strong> "I am so angry at you because you cheated on me, and it breaks my heart!"
            </li>
            <li>
              <strong className="text-green-400">Best:</strong> "Did you pick up the dry cleaning?" said with icy contempt.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6">B. Exposition Dumps (As You Know, Bob...)</h3>
          <p>
            Audiences need information to understand the plot, but they hate being lectured.
          </p>
          <blockquote className="border-l-4 border-green-400 pl-4 my-4 italic">
            <strong className="text-green-400">The Rule:</strong> Only deliver information when the audience is dying to know it, or hide it inside conflict. The exposition about dinosaur cloning in <em className="italic">Jurassic Park</em> is delivered during a ride where the characters are debating the ethics of it. The information is weaponized in an argument.
          </blockquote>
        </section>

        {/* IX. THE PAGE */}
        <section id="the-page">
          <h2 className="text-3xl font-bold text-white mb-4">
            IX. THE PAGE: WHY IT LOOKS LIKE THAT
          </h2>

          <p>
            A screenplay looks strange compared to a novel. The font is like a typewriter. This is intentional.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">A. The "Courier 12pt" Rule</h3>
          <p>
            You must use Courier 12-point font. No exceptions.
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-green-400">Why?</strong> Courier is a "monospaced" font. This enables the Golden Rule of Filmmaking: <strong className="text-green-400">One Page = One Minute of Screen Time.</strong>
            </li>
            <li>
              <strong className="text-green-400">The Consequence:</strong> If you use "Times New Roman," you break the budget formula, and your script is rejected.
            </li>
          </ul>
        </section>

        {/* X. CORE ELEMENTS */}
        <section id="core-elements">
          <h2 className="text-3xl font-bold text-white mb-4">
            X. THE CORE ELEMENTS: SLUGLINES, ACTION, DIALOGUE
          </h2>

          <p>
            Every script is built from just three primary blocks. You must master them.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">A. The Slugline (Scene Heading)</h3>
          <p>
            This tells the crew where the scene happens. It is always in ALL CAPS.
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-green-400">Format:</strong> [INT./EXT.] [LOCATION] - [TIME]
            </li>
            <li>
              <strong className="text-green-400">Example:</strong> INT. POLICE STATION - DAY
            </li>
            <li>
              <strong className="text-green-400">Rule:</strong> Time is usually just DAY or NIGHT. Avoid specific times like "3:00 PM."
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6">B. Action Lines (The Big Print)</h3>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-green-400">Tense:</strong> Always Present Tense. (Never "He walked." Always "He walks.")
            </li>
            <li>
              <strong className="text-green-400">Capitalization:</strong> When a character appears for the first time, capitalize their name. (e.g., "A man enters. This is JOHN (30s), rugged and tired.")
            </li>
            <li>
              <strong className="text-green-400">Sound Effects:</strong> Capitalize sounds that need to be added in post-production. (e.g., "The gun goes CLICK.")
            </li>
          </ul>
        </section>

        {/* XI. THE UNFILMABLES */}
        <section id="unfilmables">
          <h2 className="text-3xl font-bold text-white mb-4">
            XI. THE "UNFILMABLES": WHAT NOT TO WRITE
          </h2>

          <p>
            Screenwriting is strict. You can only write what can be seen or heard. Everything else is "Unfilmable."
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">A. "Directing from the Page"</h3>
          <p>
            Do not tell the director where to put the camera.
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-green-400">Avoid:</strong> "CAMERA PANS LEFT," "ZOOM IN ON," "LOW ANGLE SHOT."
            </li>
            <li>
              <strong className="text-green-400">The Fix:</strong> Describe the action so the shot is implied. Instead of "ZOOM IN ON the gun," write "His hand trembles as it reaches for the gun."
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6">B. Internal Thought (Novelistic Writing)</h3>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-green-400">Bad:</strong> "John stands at the window. He thinks about his ex-wife and regrets the day he left her." (The audience cannot see his thoughts. It is boring.)
            </li>
            <li>
              <strong className="text-green-400">The Fix:</strong> Externalize the thought. "John stands at the window. He holds a cracked photo of his ex-wife. He brings a lighter to the edge of the photo, hesitates, then puts the lighter away." (Now we *see* the regret.)
            </li>
          </ul>
        </section>

        {/* XII. SOFTWARE & TOOLS */}
        <section id="software-tools">
          <h2 className="text-3xl font-bold text-white mb-4">
            XII. SOFTWARE & TOOLS: DO NOT USE WORD
          </h2>

          <p>
            You cannot format a screenplay in Microsoft Word or Google Docs. The margins will drift, the pagination will break, and you will look like an amateur.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">A. The Industry Standard: Final Draft</h3>
          <p>
            Used by 95% of Hollywood. Provides auto-formatting, revision tracking, and industry acceptance.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">B. The Competitors (Cheaper/Free)</h3>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-green-400">WriterDuet / WriterSolo:</strong> Excellent, cloud-based, free version available. Great for collaboration.
            </li>
            <li>
              <strong className="text-green-400">Fade In:</strong> Professional grade, cheaper one-time fee. Used by Rian Johnson (<em className="italic">Knives Out</em>).
            </li>
          </ul>
        </section>

        {/* XIII. PACING */}
        <section id="pacing">
          <h2 className="text-3xl font-bold text-white mb-4">
            XIII. PACING: THE "READ"
          </h2>

          <p>
            A script is read before it is filmed. The reading experience (The "Read") matters. The pace of your writing should match the pace of the scene.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">A. Action Scenes</h3>
          <p>
            Use short, punchy sentences. Fragmented grammar is okay here. <em className="italic">Example: "Fists fly. Glass shatters. John ducks. A knife misses his ear by an inch."</em> This makes the reader read fast, mimicking the adrenaline of the scene.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">B. The "White Space" Aesthetic</h3>
          <p>
            A page of script should look inviting. If a reader turns the page and sees solid blocks of black ink ("The Wall of Text"), they groan. Aim for a healthy mix of dialogue and action. Keep the page airy.
          </p>
        </section>

        {/* XIV. THE REWRITE */}
        <section id="the-rewrite">
          <h2 className="text-3xl font-bold text-white mb-4">
            XIV. THE REWRITE: FROM VOMIT DRAFT TO POLISH
          </h2>

          <p>
            "Writing is rewriting." — Ernest Hemingway. The first draft of your script will be bad. In the industry, this is called the "Vomit Draft." Its only purpose is to exist.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">A. The "Drawer" Method</h3>
          <p>
            Once you type "FADE OUT," put the script in a drawer (physical or digital) for 2 weeks. Why? You are currently "Snowblind." You need to forget the script so you can read it like an audience member.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">B. The "Kill Your Darlings" Pass</h3>
          <p>
            In the second draft, look for scenes you love but that do not advance the plot. If a scene doesn&apos;t move the story forward, it is dragging it down. <em className="italic">Example: A hilarious 3-page scene where the characters debate pizza toppings must be cut if it has nothing to do with the plot.</em>
          </p>
        </section>

        {/* XV. THE PITCH */}
        <section id="the-pitch">
          <h2 className="text-3xl font-bold text-white mb-4">
            XV. THE PITCH: SELLING THE AIR
          </h2>

          <p>
            In Hollywood, you rarely hand someone a script first. You pitch it. You have to sell the *idea* of the movie in 60 seconds (The Elevator Pitch) or 20 minutes (The General Meeting).
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">A. The "Why Now?" Question</h3>
          <p>
            Producers want to know why this movie needs to be made *today*.
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-green-400">Good Answer:</strong> "It explores the anxiety of AI, which is exactly what everyone is talking about right now, but framed as a 90s thriller."
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6">B. The Pitch Structure</h3>
          <p>
            You must tell the story in miniature, ending with the climax (Yes, you must spoil the ending in a pitch).
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-green-400">The Hook:</strong> The Logline.
            </li>
            <li>
              <strong className="text-green-400">The Midpoint:</strong> What is the crazy set piece in the middle?
            </li>
            <li>
              <strong className="text-green-400">Comps (Comparisons):</strong> "It&apos;s <em className="italic">Die Hard</em> meets <em className="italic">The Hangover</em>." (This helps producers understand the tone and budget instantly.)
            </li>
          </ul>
        </section>

        {/* XVI. AGENTS, MANAGERS, AND THE BLACK LIST */}
        <section id="agents-black-list">
          <h2 className="text-3xl font-bold text-white mb-4">
            XVI. AGENTS, MANAGERS, AND THE BLACK LIST
          </h2>

          <p>
            The Catch-22: "You can&apos;t get an agent until you sell a script, but you can&apos;t sell a script without an agent." Here is how you actually break in.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">A. Manager vs. Agent</h3>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-green-400">Manager:</strong> Focuses on your long-term career. Helps you develop scripts, gives notes, and is easier to get when you are new. They take 10%.
            </li>
            <li>
              <strong className="text-green-400">Agent:</strong> Focuses on the deal. Negotiates contracts and money. They usually only sign you once you are "money-ready." They take 10%.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6">B. The Black List (blcklst.com)</h3>
          <p>
            This is the most democratic way to break in today. You pay a fee for a professional reader to evaluate your script and give it a score out of 10. If you score an "8" or higher, your script is emailed to thousands of industry professionals.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">C. Contests (The Lottery Tickets)</h3>
          <p>
            Winning these "Big Four" contests actually matters to agents:
          </p>
          <ol className="list-decimal list-inside ml-6 space-y-2 text-gray-300">
            <li>
              The Nicholl Fellowship (Run by the Oscars/Academy).
            </li>
            <li>
              Austin Film Festival.
            </li>
            <li>
              PAGE International.
            </li>
            <li>
              Final Draft Big Break.
            </li>
          </ol>
        </section>

        {/* XVII. CONCLUSION */}
        <section id="conclusion">
          <h2 className="text-3xl font-bold text-white mb-4">
            XVII. CONCLUSION: THE MARATHON
          </h2>

          <p>
            Screenwriting is the most rejection-heavy career in the arts. You will write 10 scripts before one is good. You will write 20 before one is sold.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">The Difference is Discipline:</h3>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300">
            <li>
              An aspiring writer waits for inspiration.
            </li>
            <li>
              A professional writer writes 5 pages every morning before work, whether they feel like it or not.
            </li>
          </ul>
          <p>
            You now have the tools.
          </p>

          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300">
            <li>
              You know the <strong className="text-green-400">Structure</strong> (Act I, II, III).
            </li>
            <li>
              You understand the <strong className="text-green-400">Psychology</strong> (Wants vs. Needs).
            </li>
            <li>
              You have mastered the <strong className="text-green-400">Format</strong> (Sluglines and White Space).
            </li>
            <li>
              You know the <strong className="text-green-400">Business</strong> (Pitching and Managers).
            </li>
          </ul>
          <p>
            The only thing left to do is the hardest part:
          </p>
          <p className="text-2xl font-bold text-center mt-10">
            Sit down.
          </p>
          <p className="text-2xl font-bold text-center">
            Open the software. And watch the blinking cursor until you bleed.
          </p>

          <p className="text-2xl text-right mt-10">
            FADE OUT.
          </p>
        </section>
      </article>
    </main>
  );
}