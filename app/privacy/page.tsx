import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AORÈN collects, uses and protects information submitted through theaoren.com.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-white/80 leading-relaxed">
      <Link href="/" className="text-sm text-white/50 hover:text-white">← Back to AORÈN</Link>
      <h1 className="mt-6 mb-2 text-4xl text-white">Privacy Policy</h1>
      <p className="mb-10 text-sm text-white/50">Last updated: 15 October 2026</p>

      <h2 className="mt-8 mb-2 text-xl text-white">Who we are</h2>
      <p>AORÈN is an independent AI advertising studio. This site is theaoren.com. You can reach us at collab@theaoren.com.</p>

      <h2 className="mt-8 mb-2 text-xl text-white">What we collect</h2>
      <p>When you send us a message through the contact form, we receive the details you enter: your name, email address, brand or company (optional) and your message. If you contact us on WhatsApp, Instagram or LinkedIn, we receive whatever you send us on those platforms.</p>

      <h2 className="mt-8 mb-2 text-xl text-white">How we use it</h2>
      <p>We use your details only to reply to your enquiry, discuss a possible project and, if you become a client, deliver and invoice our work. We do not sell your information and we do not send marketing emails unless you ask for them.</p>

      <h2 className="mt-8 mb-2 text-xl text-white">Who processes it</h2>
      <p>Contact form messages are delivered to us through the email service EmailJS. Our website is hosted and delivered through Cloudflare, which may process technical data such as IP addresses and request logs to serve and protect the site. These providers handle data under their own privacy policies.</p>

      <h2 className="mt-8 mb-2 text-xl text-white">Cookies and analytics</h2>
      <p>At the time of writing, this site does not use advertising cookies. If we add analytics in the future, we will update this page.</p>

      <h2 className="mt-8 mb-2 text-xl text-white">How long we keep it</h2>
      <p>We keep enquiry emails for as long as needed to respond and to keep business records, then delete them when they are no longer needed.</p>

      <h2 className="mt-8 mb-2 text-xl text-white">Your choices</h2>
      <p>You can ask us at any time to see, correct or delete the information we hold about you by emailing collab@theaoren.com.</p>

      <h2 className="mt-8 mb-2 text-xl text-white">Usage of this site</h2>
      <p>The sample ads, images and videos shown on this site are AORÈN studio work or demonstration content. Testimonials marked as demo content are not real client reviews. Please do not copy or reuse our work without permission.</p>

      <h2 className="mt-8 mb-2 text-xl text-white">Changes</h2>
      <p>We may update this policy from time to time. The date at the top shows when it was last changed.</p>
    </main>
  );
}
