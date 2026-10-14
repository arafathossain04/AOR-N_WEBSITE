export interface VideoAd {
  title: string;
  category?: string;
  duration?: string;
  views?: string;
  thumbnail?: string;
  videoUrl: string; // Note: In Next.js, use "/videos/my-video.mp4" (do NOT include "public/")
  description?: string;
}

export interface ImageAd {
  imgUrl: string;
  alt?: string;
  title?: string;
  category?: string;
}

export const site = {
  name: "AORÈN",
  tagline: "AI advertising, made distinctly yours.",
  nav: [
    { label: "Services", href: "#services" }, { label: "Work", href: "#work" }, { label: "Pricing", href: "#pricing" }, { label: "About", href: "#about" }, { label: "Contact", href: "#contact" },
  ],
  hero: { eyebrow: "Independent AI advertising studio", title: "Ideas that move at the speed of culture.", description: "AORÈN crafts video and image advertising for brands with something worth seeing.", primaryCta: "Get a Quote", secondaryCta: "View Our Work" },
  services: [
    { title: "Video Ads", description: "Cinematic short-form spots designed to stop the scroll.", icon: "Video" },
    { title: "Image Ads", description: "Premium campaign imagery built for every format.", icon: "Images" },
    { title: "Campaign Concepts", description: "Fresh creative directions with a clear point of view.", icon: "Sparkles" },
  ],
  policies: ["Two focused revision rounds included", "Clear delivery timelines before we begin", "Usage rights tailored to your campaign", "Transparent AI-assisted creative process"],
  mission: "To give ambitious brands a more imaginative, agile way to show up.",
  works: ["Editorial motion study", "Skincare product story", "Future fashion campaign"],
  imageAds: [
    {
      imgUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
      alt: "High fashion avant-garde editorial",
      title: "Vogue Futurism",
      category: "Fashion Ad",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
      alt: "Skincare luxury serum story",
      title: "Luminescence Flora",
      category: "Skincare",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      alt: "Minimalist timepiece campaign",
      title: "Chronos Minimal",
      category: "Luxury Goods",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      alt: "Niche fragrance campaign visual",
      title: "Obsidian Essence",
      category: "Fragrance",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      alt: "High-performance sports car",
      title: "Apex Aerodynamics",
      category: "Automotive",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      alt: "Digital liquid sculptural art",
      title: "Synthetic Dreams",
      category: "Digital 3D",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
      alt: "Cinematic portrait lighting",
      title: "Prism Identity",
      category: "Editorial",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
      alt: "Minimalist fine jewelry",
      title: "Aura Gold Studio",
      category: "Jewelry",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
      alt: "High-octane footwear launch",
      title: "Kinetics Velocity",
      category: "Footwear",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
      alt: "Surreal neo-classical composition",
      title: "Neo Antiquity",
      category: "Brand Campaign",
    },
  ],
  /**
   * ============================================================================
   * VIDEO ADS (REELS)
   * ----------------------------------------------------------------------------
   * HOW TO UPLOAD YOUR OWN VIDEOS:
   * 1. Local Files: Place your .mp4 or .webm video in `public/videos/`
   *    (e.g., `public/videos/reel1.mp4`) and set `videoUrl: "/videos/reel1.mp4"`.
   * 2. Hosted Files: Provide any direct HTTPS video link (Cloudflare, S3, Supabase, etc.)
   * 3. Carousel Behavior:
   *    - If you have 1, 2, or 3 videos: Displays in a clean, balanced grid.
   *    - If you have more than 3 videos: Automatically turns into an auto-swiping
   *      carousel with pause-on-hover and pause-while-playing!
   * ============================================================================
   */
  videoAds: [
    {
      title: "Brown pebbled-leather sneaker",
      duration: "0:10",
      thumbnail: "/thumbnails/shoes1.png",
      videoUrl: "/videos/shoes1.mp4",
      description: "Built to Last",
    },
    {
      title: "Tan leather handbag, brown handle",
      duration: "0:09",
      thumbnail: "/thumbnails/bag2.png",
      videoUrl: "/videos/bag2.mp4",
      description: "Made to Carry On",
    },
    {
      title: "Rose-gold watch, black dial",
      duration: "0:13",
      thumbnail: "/thumbnails/watch2.png",
      videoUrl: "/videos/watch2.mp4",
      description: "Time, Perfected",
    },
    {
      title: "Modern Essentials",
      duration: "0:19",
      thumbnail: "/thumbnails/headset.png",
      videoUrl: "/videos/headset.mp4",
      description: "Sound, Elevated",
    },
    {
      title: "Royal spreading",
      duration: "0:13",
      thumbnail: "/thumbnails/perfume1.png",
      videoUrl: "/videos/perfume1.mp4",
      description: "Smell with Brand",
    },
    {
      title: "Black and gold watch on wrist",
      duration: "0:11",
      thumbnail: "/thumbnails/watch1.png",
      videoUrl: "/videos/watch1.mp4",
      description: "Statement Pieces",
    },
    {
      title: "Everyday Elegance",
      duration: "0:11",
      thumbnail: "/thumbnails/bag1.png",
      videoUrl: "/videos/bag1.mp4",
      description: "Gold-Finish Detail",
    },
    {
      title: "Beige knit sneakers",
      duration: "0:16",
      thumbnail: "/thumbnails/shoes2.png",
      videoUrl: "/videos/shoes2.mp4",
      description: "Walk in Style",
    },
  ],
  pricing: [
    { name: "Basic", price: "$—", features: ["Single creative direction", "1 finished asset", "Platform-ready delivery", "2 revision rounds"], featured: false },
    { name: "Pro", price: "$—", features: ["Expanded creative direction", "3 finished assets", "Multiple aspect ratios", "2 revision rounds", "Priority timeline"], featured: true },
    { name: "Max", price: "$—", features: ["Campaign concept", "6 finished assets", "Video + image formats", "Variation set", "Priority timeline"], featured: false },
    { name: "Custom", price: "Let’s talk", features: ["Tailored scope", "Ongoing content", "Campaign systems", "Dedicated creative partner"], featured: false },
  ],
  testimonials: [
    { quote: "A placeholder for a thoughtful client note about the work and the experience.", name: "Client Name", role: "Brand, Role" },
    { quote: "A placeholder for a concise testimonial that can be replaced when you are ready.", name: "Client Name", role: "Brand, Role" },
  ],
  benefits: [
    { title: "Fast turnaround", text: "Built for the pace of launch calendars and culture.", icon: "Zap" },
    { title: "Lower production cost", text: "More creative range without traditional shoot overhead.", icon: "WalletCards" },
    { title: "More variations", text: "Explore directions, formats and details with ease.", icon: "Layers3" },
    { title: "Made for every channel", text: "Assets sized and styled for where your audience is.", icon: "PanelsTopLeft" },
  ],
  about: { title: "A modern creative studio with a wide lens.", text: "AORÈN is an independent AI-powered advertising studio combining cinematic art direction, emerging tools, and a deep respect for brand feeling." },
  founders: [
    { name: "Arafat Hossain Araf", role: "Founder & CEO", bio: "Leading creative direction, visual language, and AI-native brand storytelling.", image: "/team/arafat.jpg" },
    { name: "Faisal Islam Shaker", role: "COO & Co-Founder", bio: "Spearheading studio operations, scalable client delivery, and agile production.", image: "/team/faisal.jpg" },
  ],
  contact: { email: "hello@aoren.studio", instagram: "Instagram", linkedin: "LinkedIn" },
};
