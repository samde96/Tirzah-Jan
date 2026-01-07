import Footer from "@/components/footer"
import { HeroHeader } from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Digital Marketing | Tirzah Communications",
  description: "Drive growth with our comprehensive digital marketing services.",
}

export default function DigitalMarketingPage() {
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
          <h1 className="text-4xl font-bold mb-4">Digital Marketing</h1>
          <p className="text-lg text-foreground/70 mb-8">
            Maximize your online presence and reach your target audience with our data-driven digital marketing
            strategies.
          </p>

          <div className="mb-12 rounded-lg overflow-hidden">
            <Image
              src="/images/Image_5.jpeg"
              alt="Digital marketing analytics"
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
                  <span>Search engine optimization (SEO)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Pay-per-click (PPC) advertising</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Email marketing campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Marketing analytics and reporting</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Marketing Strategy Overview</h2>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/_IT9FCH2WIE?si=gZ7kKSWu7tOcog3h"
                  title="Digital Marketing Strategy"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
              <p className="text-foreground/80">
                Our data-driven approach ensures every marketing dollar is spent effectively. We track, measure, and
                optimize campaigns to deliver measurable ROI.
              </p>
            </div>
          </section>
        </div>
      </main>

       <Footer />
    </div>
  )
}
