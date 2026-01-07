import Footer from "@/components/footer"
import { HeroHeader } from "@/components/header"
import Link from "next/link"

export const metadata = {
  title: "Social Media Management | Tirzah Communications",
  description: "Build and grow your social media presence with our expert management services.",
}

export default function SocialMediaPage() {
  return (
    <div>
      <HeroHeader />
      <main className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services" className="text-[#1d8bca] hover:text-[#1d8bca]/80 text-sm font-medium">
              ← Back to Services
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-4">Social Media Management</h1>
          <p className="text-lg text-foreground/70 mb-8">
            Engage your audience and build a loyal community across all major social media platforms.
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Social media strategy development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Content calendar planning and posting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Community management and engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Social media advertising campaigns</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
              <p className="text-foreground/80">
                We understand social media trends and audience behavior. Our team creates authentic, engaging content
                that builds real connections with your followers.
              </p>
            </div>
          </section>
        </div>
      </main>
       <Footer />
    </div>
  )
}
