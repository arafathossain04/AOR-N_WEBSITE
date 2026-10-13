import SocialCards from "@/components/ui/card-fan-carousel";

const DEMO_CARDS = [
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
];

export default function Demo() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030407]">
      <SocialCards cards={DEMO_CARDS} autoSwipe autoSwipeInterval={1500} />
    </div>
  );
}
