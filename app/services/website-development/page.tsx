import Footer from "@/components/footer"
import { HeroHeader } from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Website Development | Tirzah Communications",
  description: "Build powerful, modern websites that drive results for your business.",
}

export default function WebsiteDevelopmentPage() {
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
          <h1 className="text-4xl font-bold mb-4">Website Development</h1>
          <p className="text-lg text-foreground/70 mb-8">
            Create a powerful online presence with custom-built websites designed for performance, user experience, and
            conversion.
          </p>

          <div className="mb-12 rounded-lg overflow-hidden">
            <Image
              src="/images/web.avif"
              alt="Website development showcase"
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
                  <span>Responsive and modern website design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>E-commerce website development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Content management system (CMS) integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d8bca] mt-1">•</span>
                  <span>Website optimization and maintenance</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">See Our Process</h2>
              <div className="rounded-lg overflow-hidden">
               <video
                  width="100%"
                  height="400"
                  controls
                  src="/videos/website.mp4"
                  className="w-full"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
              <p className="text-foreground/80">
                We build websites that are not just beautiful, but also fast, secure, and optimized for search engines.
                Our focus is on creating digital experiences that convert visitors into customers.
              </p>
            </div>
          </section>
        </div>
      </main>
       <Footer />
    </div>
  )
}
