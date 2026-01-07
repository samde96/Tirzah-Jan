"use client"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import React from "react"
import { cn } from "@/lib/utils"

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
]

const servicesDropdown = [
  { name: "Brand Strategy", href: "/services/brand-strategy" },
  { name: "Content Creation", href: "/services/content-creation" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Social Media Management", href: "/services/social-media" },
  { name: "Consulting", href: "/services/consulting" },
  { name: "Website Development", href: "/services/website-development" },
]

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/tirzah-communications/", icon: "linkedin" },
  {
    name: "Instagram",
    href: "https://www.instagram.com/tirzah_communications?igsh=NGlydmtpcW00NDk0&utm_source=qr",
    icon: "instagram",
  },
]

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [servicesOpen, setServicesOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={cn(
          "transition-all duration-300",
          isScrolled ? "bg-white backdrop-blur-md shadow-sm" : "bg-[#261592]",
        )}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <img
                  src={isScrolled ? "/images/Logo-01.png" : "/images/logo_white.png"}
                  alt="Tirzah Logo"
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Menu - Centered */}
            <div className="hidden lg:flex lg:items-center lg:justify-center flex-1">
              <ul className="flex items-center space-x-8">
                {menuItems.map((item, index) => (
                  <li key={index} className="relative group">
                    {item.hasDropdown ? (
                      <div>
                        <button
                          className={cn(
                            "text-sm font-medium transition-colors duration-200 flex items-center gap-1",
                            isScrolled ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white",
                          )}
                        >
                          {item.name}
                          <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                        </button>
                        <div
                          className={cn(
                            "absolute left-0 top-full mt-0 w-56 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",
                            isScrolled ? "bg-white" : "bg-[#261592]",
                          )}
                        >
                          <div className="py-0">
                            {servicesDropdown.map((service, idx) => (
                              <Link
                                key={idx}
                                href={service.href}
                                className={cn(
                                  "block px-4 py-3 text-sm font-medium transition-colors duration-200",
                                  isScrolled
                                    ? "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                                    : "text-white/90 hover:text-white hover:bg-white/20",
                                )}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "text-sm font-medium transition-colors duration-200",
                          isScrolled ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white",
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "transition-colors duration-200",
                    isScrolled ? "text-foreground/60 hover:text-[#1d8bca]" : "text-white/70 hover:text-white",
                  )}
                  aria-label={social.name}
                >
                  {social.icon === "linkedin" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuState(!menuState)}
                className={cn(
                  "inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200",
                  isScrolled
                    ? "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                    : "text-white/80 hover:text-white hover:bg-white/10",
                )}
                aria-label={menuState ? "Close menu" : "Open menu"}
              >
                {menuState ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
            menuState ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className={cn("px-6 pt-2 pb-6 space-y-1 shadow-lg", isScrolled ? "bg-white" : "bg-[#1d8bca]")}>
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={cn(
                        "w-full text-left px-3 py-3 text-base font-medium rounded-md transition-colors duration-200 flex items-center justify-between",
                        isScrolled
                          ? "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                          : "text-white/90 hover:text-white hover:bg-white/10",
                      )}
                    >
                      {item.name}
                      <ChevronDown
                        className={cn("w-4 h-4 transition-transform duration-200", servicesOpen ? "rotate-180" : "")}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 space-y-1">
                        {servicesDropdown.map((service, idx) => (
                          <Link
                            key={idx}
                            href={service.href}
                            onClick={() => {
                              setMenuState(false)
                              setServicesOpen(false)
                            }}
                            className={cn(
                              "block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                              isScrolled
                                ? "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                                : "text-white/80 hover:text-white hover:bg-white/20",
                            )}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMenuState(false)}
                    className={cn(
                      "block px-3 py-3 text-base font-medium rounded-md transition-colors duration-200",
                      isScrolled
                        ? "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                        : "text-white/90 hover:text-white hover:bg-white/10",
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Social Links */}
            <div className={cn("pt-4 mt-4 border-t", isScrolled ? "border-foreground/10" : "border-white/20")}>
              <div className="flex items-center space-x-6 px-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "transition-colors duration-200",
                      isScrolled ? "text-foreground/60 hover:text-[#1d8bca]" : "text-white/70 hover:text-white",
                    )}
                    aria-label={social.name}
                  >
                    {social.icon === "linkedin" && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )}
                    {social.icon === "instagram" && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
