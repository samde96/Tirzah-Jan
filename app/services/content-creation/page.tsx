import Footer from "@/components/footer"
import { HeroHeader } from "@/components/header"
import Link from "next/link"

export const metadata = {
  title: "Content Creation | Tirzah Communications",
  description: "Engage your audience with compelling content creation services.",
}

export default function ContentCreationPage() {
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
          <h1 className="text-4xl font-bold mb-4">Content Creation</h1>
          <p className="text-lg text-foreground/70 mb-8">
            Create engaging and compelling content that captures attention and drives engagement across all platforms.
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Blog writing and article creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Video content production</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Social media content and copywriting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Infographics and visual content</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
              <p className="text-foreground/80">
                Our talented content creators produce high-quality, engaging content that tells your brand story and
                connects with your target audience.
              </p>
            </div>
          </section>
        </div>
      </main>
       <Footer />
    </div>
  )
}
