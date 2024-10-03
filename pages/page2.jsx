"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code, Laptop, Smartphone, Database, Send, Phone, Mail, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function PortfolioPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#001a1a] via-[#003333] to-[#004d4d] text-white">
      <header className={`sticky top-0 z-50 px-4 lg:px-6 h-24 flex items-center transition-all duration-300 ${isScrolled ? "bg-gradient-to-r from-[#001a1a]/80 to-[#003333]/80 backdrop-blur-md shadow-lg" : ""}`}>
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/logo.jpg"
            alt="Visionary Tech Squad Logo"
            width={120}
            height={92}
            className="h-20 w-auto"
          />
          <span className="sr-only">Visionary Tech Squad</span>
        </Link>
        <nav className="ml-auto flex gap-6 sm:gap-8">
          {["About", "Services", "Portfolio", "Contact"].map((item) => (
            <Link key={item} className="text-lg font-medium text-gray-200 hover:text-[#00ffff] transition-colors relative group" href={`#${item.toLowerCase()}`}>
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ffff] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-48 overflow-hidden relative">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] via-[#00cccc] to-[#009999] animate-gradient-x">
                    Visionary Tech Squad
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-[#00ffff] md:text-xl lg:text-2xl italic">
                  Enlight your ideas into the world of technology
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-[#00ffff] to-[#00cccc] px-8 py-2 text-sm font-medium text-[#001a1a] shadow transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00ffff]"
                  href="#contact"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  className="inline-flex h-12 items-center justify-center rounded-md border border-[#00ffff] px-8 py-2 text-sm font-medium text-[#00ffff] shadow-sm transition-all hover:bg-[#00ffff]/10 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00ffff]"
                  href="#about"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center bg-no-repeat bg-cover opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001a1a]/50 to-[#001a1a]"></div>
        </section>
        <section id="about" className="w-full py-20 md:py-32 bg-gradient-to-b from-[#002626] to-[#001a1a]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-[#00cccc]">About Us</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-6 leading-relaxed text-gray-300">
                Driven by creativity and expertise, we are a team of designers and developers specializing in cutting-edge web technologies. Our commitment to excellence drives us to deliver outstanding results on every project.
              </p>
              <p className="text-lg mb-6 leading-relaxed text-gray-300">
                We love transforming your imaginative ideas into innovative technology solutions. Your time is precious to us, and we are dedicated to creating exceptional work together.
              </p>
              <p className="text-xl font-semibold text-[#00ffff] italic">
                Let's embark on this exciting journey and create something amazing!
              </p>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-20 md:py-32 bg-gradient-to-b from-[#001a1a] to-[#002626]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-[#00cccc]">Our Services</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Laptop, title: "Web Development", description: "Custom web solutions using HTML, CSS, React, Next.js, and Tailwind CSS." },
                { icon: Code, title: "Full-Stack Development", description: "Robust and scalable applications with Node.js, MongoDB, and Firebase." },
                { icon: Smartphone, title: "Mobile Application", description: "Cross-platform mobile apps using React Native and Flutter." },
                { icon: Database, title: "CMS Integration", description: "Seamless content management with Strapi CMS and headless architectures." },
              ].map((service, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 text-center p-6 bg-gradient-to-br from-[#003333]/50 to-[#002626]/50 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00ffff]/10">
                  <service.icon className="h-12 w-12 text-[#00ffff]" />
                  <h3 className="text-xl font-bold text-[#00ffff]">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="portfolio" className="w-full py-20 md:py-32 bg-gradient-to-b from-[#002626] to-[#001a1a]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-[#00cccc]">Our Portfolio</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "React E-commerce Platform", image: "/placeholder.svg" },
                { title: "Mobile App for Fitness Tracking", image: "/placeholder.svg" },
                { title: "CMS-Powered News Portal", image: "/placeholder.svg" },
              ].map((project, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                  <Image
                    alt={project.title}
                    className="object-cover w-full h-60"
                    height="300"
                    src={project.image}
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001a1a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <p className="text-[#00ffff] text-lg font-semibold">{project.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-20 md:py-32 bg-gradient-to-b from-[#001a1a] to-[#002626]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-[#00cccc]">Contact Us</h2>
            <div className="grid gap-10 md:grid-cols-2 items-center justify-center max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#003333]/50 to-[#002626]/50 p-6 rounded-lg backdrop-blur-sm shadow-lg">
                <form className="space-y-4">
                  <Input placeholder="Your Name" className="bg-[#001a1a] text-white border-[#00ffff] focus:ring-[#00ffff]" />
                  <Input placeholder="Your Email" type="email" className="bg-[#001a1a] text-white border-[#00ffff] focus:ring-[#00ffff]" />
                  <Textarea placeholder="Your Message" className="bg-[#001a1a] text-white border-[#00ffff] focus:ring-[#00ffff]" />
                  <Button className="w-full bg-gradient-to-r from-[#00ffff] to-[#00cccc] text-[#001a1a] hover:from-[#00cccc] hover:to-[#009999] transition-all duration-300 transform hover:scale-105">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
              <div className="space-y-4 bg-gradient-to-br from-[#003333]/50 to-[#002626]/50 p-6 rounded-lg backdrop-blur-sm shadow-lg">
                <h3 className="text-xl font-bold text-[#00ffff]">Get in Touch</h3>
                <p className="text-gray-300">We'd love to hear from you. Here's how you can reach us...</p>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-[#00ffff]" />
                  <span>+918210719138</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-[#00ffff]" />
                  <span>visionarytechsquad@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 md:px-6 border-t border-[#00ffff]/20 bg-gradient-to-r from-[#001a1a]/90 to-[#002626]/90 backdrop-blur-md">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2024 Visionary Tech Squad. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-sm hover:underline underline-offset-4 text-gray-400 hover:text-[#00ffff] transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4 text-gray-400 hover:text-[#00ffff] transition-colors" href="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}