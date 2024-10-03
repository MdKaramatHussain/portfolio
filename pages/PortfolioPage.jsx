"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code, Laptop, Smartphone, Database, Send, Phone, Mail, ChevronRight, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function PortfolioPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#e6ffff] via-[#ccffff] to-[#b3ffff] text-gray-800">
      <header className={`sticky top-0 z-50 px-4 lg:px-6 h-24 flex items-center transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : ""}`}>
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/logo.jpg"
            alt="Visionary Tech Squad Logo"
            width={120}
            height={92}
            className="h-16 w-auto"
          />
          <span className="sr-only">Visionary Tech Squad</span>
        </Link>
        <nav className={`ml-auto flex gap-6 sm:gap-8 ${isMenuOpen ? 'flex-col absolute top-24 left-0 right-0 bg-white p-4 shadow-lg' : 'hidden md:flex'}`}>
          {["About", "Services", "Portfolio", "Contact"].map((item) => (
            <Link key={item} className="text-lg font-medium text-gray-600 hover:text-[#00cccc] transition-colors relative group" href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00cccc] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <button className="ml-auto md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-48 overflow-hidden relative">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00cccc] via-[#009999] to-[#006666] animate-gradient-x">
                    Visionary Tech Squad
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-[#006666] md:text-xl lg:text-2xl italic">
                  Enlight your ideas into the world of technology
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-[#00cccc] to-[#009999] px-8 py-2 text-sm font-medium text-white shadow transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00cccc]"
                  href="#contact"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  className="inline-flex h-12 items-center justify-center rounded-md border border-[#00cccc] px-8 py-2 text-sm font-medium text-[#006666] shadow-sm transition-all hover:bg-[#00cccc]/10 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00cccc]"
                  href="#about"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center bg-no-repeat bg-cover opacity-5"></div>
        </section>
        <section id="about" className="w-full py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00cccc] to-[#009999]">About Us</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-6 leading-relaxed text-gray-600">
                Driven by creativity and expertise, we are a team of designers and developers specializing in cutting-edge web technologies. Our commitment to excellence drives us to deliver outstanding results on every project.
              </p>
              <p className="text-lg mb-6 leading-relaxed text-gray-600">
                We love transforming your imaginative ideas into innovative technology solutions. Your time is precious to us, and we are dedicated to creating exceptional work together.
              </p>
              <p className="text-xl font-semibold text-[#006666] italic">
                Let's embark on this exciting journey and create something amazing!
              </p>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-20 md:py-32 bg-[#f0ffff]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00cccc] to-[#009999]">Our Services</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Laptop, title: "Web Development", description: "Custom web solutions using HTML, CSS, React, Next.js, and Tailwind CSS." },
                { icon: Code, title: "Full-Stack Development", description: "Robust and scalable applications with Node.js, MongoDB, and Firebase." },
                { icon: Smartphone, title: "Mobile Application", description: "Cross-platform mobile apps using React Native and Flutter." },
                { icon: Database, title: "CMS Integration", description: "Seamless content management with Strapi CMS and headless architectures." },
              ].map((service, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 text-center p-6 bg-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <service.icon className="h-12 w-12 text-[#00cccc]" />
                  <h3 className="text-xl font-bold text-[#006666]">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="portfolio" className="w-full py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00cccc] to-[#009999]">Our Portfolio</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "React E-commerce Platform", image: "/placeholder.svg" },
                { title: "Mobile App for Fitness Tracking", image: "/gym-app.png" },
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00cccc] to-transparent opacity-0 group-hover:opacity-90 transition-opacity flex items-end justify-center p-4">
                    <p className="text-white text-lg font-semibold">{project.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-20 md:py-32 bg-[#f0ffff]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00cccc] to-[#009999]">Contact Us</h2>
            <div className="grid gap-10 md:grid-cols-2 items-center justify-center max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <form className="space-y-4">
                  <Input placeholder="Your Name" className="border-[#00cccc] focus:ring-[#00cccc]" />
                  <Input placeholder="Your Email" type="email" className="border-[#00cccc] focus:ring-[#00cccc]" />
                  <Textarea placeholder="Your Message" className="border-[#00cccc] focus:ring-[#00cccc]" />
                  <Button className="w-full bg-gradient-to-r from-[#00cccc] to-[#009999] text-white hover:from-[#009999] hover:to-[#006666] transition-all duration-300 transform hover:scale-105">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
              <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#006666]">Get in Touch</h3>
                <p className="text-gray-600">We'd love to hear from you. Here's how you can reach us...</p>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-[#00cccc]" />
                  <span className="text-gray-600">+918210719138</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-[#00cccc]" />
                  <span className="text-gray-600">visionarytechsquad@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 md:px-6 border-t border-[#00cccc]/20 bg-white">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© 2024 Visionary Tech Squad. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-sm hover:underline underline-offset-4 text-gray-600 hover:text-[#00cccc] transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4 text-gray-600 hover:text-[#00cccc] transition-colors" href="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}