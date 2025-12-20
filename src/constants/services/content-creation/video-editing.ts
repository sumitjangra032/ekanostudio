import { IServiceType } from "../../services";

const VIDEO_EDITING: IServiceType = {
  slug: "video-editing",
  title: "Video Editing",
  sections: [
    {
      type: "hero",
      data: {
        title: "Video Editing",
        headline: "Video Editing turns raw footage into powerful, high-retention content that captures attention, builds trust, and drives action.",
        subheadline: "We provide video editing services to craft scroll-stopping edits for ads, reels, YouTube, brand films, and corporate videos—optimized for {performance} on every {platform}.",
        serviceCta: { text: "Edit My Videos", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our video editing production workflows",
        items: [
          { value: "640+", label: "Videos Edited & Delivered", icon: "/icons/rocket.svg" },
          { value: "24–72 Hours", label: "Avg. Turnaround Time", icon: "/icons/zap.svg" },
          { value: "99%", label: "Client Approval Rate", icon: "/icons/shield-check.svg" },
          { value: "210M+", label: "Total Views Generated Through Our Edits", icon: "/icons/trending-up.svg" },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "Video Editing",
        content: "Video Editing is where content transforms into performance. Cutting, pacing, sound design, color grading, transitions, subtitles, motion overlays, and storytelling structure all determine whether a viewer watches for 2 seconds or 2 minutes. We offer professional video editing for ad video editing, social media video editing, youtube video editing services, podcasts, brand storytelling, and e-commerce with one core objective—maximize {retention}, engagement, and conversions. Every frame is {optimized} for platform algorithms and viewer psychology.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "Hero section showcasing cinematic and social-first {edits}",
          "Before/after raw vs edited video comparisons",
          "Reels, Shorts & long-form YouTube edit previews",
          "Color grading & visual enhancement {samples}",
          "Captioning, subtitle & hook text overlays",
          "Platform-specific aspect ratio previews (9:16, 1:1, 16:9)",
          "“Projects Completed” & engagement growth metrics",
          "Step-by-step video editing workflow",
          "Deliverables checklist",
          "FAQs on formats, revisions & content usage",
          "Contact form with “Start My Video Editing” CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "Professional video editing & sequencing",
          "Hook editing for first 1–3 {seconds}",
          "Audio cleanup, noise reduction & sound balancing",
          "Cinematic video editing & color grading",
          "Motion transitions, zooms & dynamic cuts",
          "Reel video editing & social media video editing",
          "Branding elements (logo stings, lower thirds, colors)",
          "Platform-optimized resizing (YouTube, Reels, Shorts, Ads)",
          "Music sync, beats & sound effects",
          "Thumbnail recommendations (for YouTube)",
          "Multiple export formats (MP4, MOV, Web)",
          "Source project files (on request)",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [You]",
        items: [
          "Boosts watch time & audience {retention}",
          "Increases ad CTR & viewer engagement",
          "Improves brand credibility & production quality",
          "Enhances storytelling & emotional {impact}",
          "Optimizes content for platform algorithms",
          "Drives higher conversions from video content",
          "Makes your brand look premium & {professional}",
        ],
      },
    },
    {
      type: "process",
      data: {
        heading: "Process (Step-by-[Step])",
        subheading: "",
        steps: [
          {
            title: "Content & Objective [Discovery]",
            description: "We {understand} your video purpose, platform, audience & performance goal.",
            icon: "/icons/search.svg",
          },
          {
            title: "Footage Review & Story [Structure]",
            description: "Selecting best clips, narrative flow & retention strategy.",
            icon: "/icons/video.svg",
          },
          {
            title: "Editing, Effects & Sound [Design]",
            description: "Transitions, pacing, color grading, music & sound {optimization}.",
            icon: "/icons/pen-tool.svg",
          },
          {
            title: "Subtitle, Caption & Branding [Layer]",
            description: "High-retention captions, brand colors & motion {overlays}.",
            icon: "/icons/captions.svg",
          },
          {
            title: "Review & [Revisions]",
            description: "Feedback-based refinements & creative {adjustments}.",
            icon: "/icons/shield-check.svg",
          },
          {
            title: "Final Export & Multi-Platform [Delivery]",
            description: "Platform-ready formats & resolution {exports}.",
            icon: "/icons/rocket.svg",
          },
        ],
      },
    },
    {
      type: "timeline",
      data: {
        heading: "Estimated [Timeline]",
        items: [
          { label: "Short Reels / Ads (15–45 sec)", duration: "24–48 hours" },
          { label: "YouTube Videos (5–20 min)", duration: "2–4 days" },
          { label: "Brand Films & Advanced Edits", duration: "5–10 days" },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "Influencers & content {creators}",
          "E-commerce & D2C brands",
          "Coaches & educators on {YouTube}",
          "Businesses running Meta & YouTube Ads",
          "Agencies needing white-label editing support",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "Adobe Premiere Pro",
          "After Effects",
          "DaVinci Resolve",
          "Final Cut Pro (if required)",
          "Motion graphics & sound design libraries",
          "AI-based noise reduction & stabilization tools",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content: "A personal brand scaled YouTube & Instagram Reels using our Video Editing system. Within 60 days, average watch time increased by {71%}, follower growth rose by {2.9x}, and ad video CTR improved by {54%}.",
      },
    },
    {
      type: "pricing",
      data: {
        heading: "Pricing & [Packages]",
        plans: [
          {
            name: "Starter",
            price: "$39 – $99",
            description: "Short reel, ad or social clip editing.",
          },
          {
            name: "Standard",
            price: "$199 – $499",
            description: "YouTube video, podcast or long-form content editing.",
          },
          {
            name: "Premium",
            price: "$800 – $1,900",
            description: "Brand films, ad campaigns & advanced motion edits.",
          },
          {
            name: "Enterprise",
            price: "$3,000+",
            description: "Monthly bulk editing, agency retainers & large content pipelines.",
          },
        ],
      },
    },
    {
      type: "faq",
      data: {
        heading: "Frequently Asked [Questions]",
        items: [
          {
            q: "Can you edit videos for Instagram, YouTube & Ads together?",
            a: "Yes, we resize and optimize each video for every platform.",
          },
          {
            q: "Do you add subtitles and captions?",
            a: "Yes, high-retention subtitles and captions are included.",
          },
          {
            q: "Can you match my brand style and color theme?",
            a: "Yes, we strictly follow brand guidelines for all edits.",
          },
          {
            q: "How fast can I get my edited videos?",
            a: "Reels and ads are usually delivered within 24–48 hours.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading: "Turn your raw footage into scroll-stopping, high-conversion video content.",
        subheading: "Start your Video Editing project today and dominate attention across every digital {platform}.",
      },
    },
  ],
};

export default VIDEO_EDITING;
