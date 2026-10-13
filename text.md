Build a single-page, production-quality marketing website for "AORÈN", a one-person AI advertising studio that creates AI-generated video ads and image ads.

IMPORTANT: This is the FIRST DRAFT. Build clean, basic section structure with placeholder content. I will customise the design and copy myself later. Do not over-design. Prioritise speed, smoothness, and a premium, aesthetic look.

TECH STACK
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Motion (framer-motion) for subtle scroll-reveal animations
- Lenis for smooth scrolling
- lucide-react for icons
- next/font: Playfair Display for headings, Inter for body
- Use next/image for all images
- Contact form: build the UI with client-side validation and a placeholder submit handler (a /api/contact route stub I can connect to Resend later)

BRAND COLORS (define as CSS variables and Tailwind theme colors)
- midnight:  #030407  (page background)
- navy:      #050B2B  (alternate section background, cards)
- indigo:    #071F78  (borders, deep accents, gradient mid-point)
- electric:  #0868DB  (primary buttons, links, highlights)
- glacier:   #8BC9F7  (secondary accent, hover states, icons)
- ice:       #C8E9FF  (primary text on dark, soft highlights)
Overall look: dark, premium, minimal, with subtle blue gradients and soft glows. Use gradients flowing from #030407 through #050B2B and #071F78 into #0868DB sparingly (hero glow, button hover, card borders). Ensure text contrast is accessible.

SITE STRUCTURE (one page with anchor links, in this exact order)
0. Header / Navbar: "AORÈN" wordmark on the left, anchor links (Services, Work, Pricing, About, Contact), and a "Get a Quote" CTA button. Sticky, with a blurred translucent background that appears after scrolling. Collapsible mobile menu.
1. Hero: large headline, short subheadline, two buttons (primary "Get a Quote", secondary "View Our Work"), and a placeholder area for a background video/visual with a soft blue gradient glow.
2. Services:Services (video ads, image ads, campaign concepts, product-on-model visuals) as cards with icons; Policies (revisions, delivery timelines, usage rights, AI disclosure) as a simple list or accordion; Mission as a short statement.
3. Creative Works: keep it normal i will tell you later.
4. Pricing: four cards - Basic, Pro, Max, Custom. Each has a name, placeholder price (Custom shows "Let's talk"), 4-5 placeholder feature bullets, and a CTA button. i will give you the final design later
5. Testimonials: keep it normal i will tell you later.
6. Why Choose Us: 4-6 short benefit blocks with icons (fast turnaround, lower cost than photoshoots, unlimited variations, etc.).
7. About Us & Founders: short brand story plus 2 founder card (photo placeholder, name, role, one-line bio). Make the founders area an array so I can add more people later. i will give you the final design later.
8. Contact: a form (name, email, brand/company, budget dropdown, message) with validation and success/error states, alongside email and social links.
9. Footer: wordmark, short tagline, nav links, social icons, copyright.

CODE ORGANISATION
- One component per section in /components/sections/ (Header, Hero, Services, Works, Pricing, Testimonials, WhyUs, About, Contact, Footer)
- Put ALL text content (headlines, services, prices, testimonials, founders, links) in a single /lib/content.ts file so I can edit copy without touching components
- Put brand colors in tailwind.config and globals.css variables
- Reusable small components: Button, SectionHeading, Card, Container

PERFORMANCE & QUALITY REQUIREMENTS
- Target Lighthouse 95+ on Performance, Accessibility, Best Practices, and SEO
- Mobile-first and fully responsive
- Subtle fade/slide-in on scroll for sections (Motion), nothing heavy; no WebGL or large animation libraries
- Respect prefers-reduced-motion
- Semantic HTML, proper heading hierarchy, keyboard-accessible navigation, visible focus states
- SEO: metadata, Open Graph tags, favicon placeholder, and make sure the "È" in AORÈN renders correctly (UTF-8)
- No external UI kits; keep dependencies minimal

OUTPUT
Give me the full project file structure and complete code for every file, plus the exact commands to install dependencies, run locally.
