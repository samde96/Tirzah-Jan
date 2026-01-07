import Footer from "@/components/footer"
import { HeroHeader } from "@/components/header"
import Link from "next/link"

export const metadata = {
  title: "Consulting | Tirzah Communications",
  description: "Strategic consulting services to help your business grow and succeed.",
}

export default function ConsultingPage() {
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
          <h1 className="text-4xl font-bold mb-4">Consulting</h1>
          <p className="text-lg text-foreground/70 mb-8">
            Get expert guidance and strategic advice to drive your business forward and achieve your goals.
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Business strategy and planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Marketing strategy consulting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Communications planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Brand and organizational development</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
              <p className="text-foreground/80">
                Our experienced consultants bring years of industry expertise and a proven track record of helping
                businesses achieve their strategic objectives.
              </p>
            </div>
          </section>
        </div>
      </main>
       <Footer />
    </div>
  )
}
