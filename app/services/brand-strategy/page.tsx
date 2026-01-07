import Footer from "@/components/footer"
import { HeroHeader } from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Brand Strategy | Tirzah Communications",
  description: "Develop a strong brand identity with our expert brand strategy services.",
}

export default function brandStrategy() {
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
          <h1 className="text-4xl font-bold mb-4">Brand Strategy</h1>
          <p className="text-lg text-foreground/70 mb-8">
            Build a compelling brand identity that resonates with your audience and sets you apart from the competition.
          </p>

          <div className="mb-12 rounded-lg overflow-hidden">
            <Image
              src="/images/Image_6.jpeg"
              alt="Brand strategy and identity design"
              width={800}
              height={400}
              className="w-full"
            />
          </div>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Brand positioning and market analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Logo and visual identity design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Brand voice and messaging strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Brand guidelines development</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
              <p className="text-foreground/80">
                Our strategic approach ensures your brand stands out in the marketplace. We combine creative excellence
                with market research to create a brand strategy that drives results.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
