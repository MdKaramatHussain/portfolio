import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code, Laptop, Smartphone, Database, Send, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#001a1a] text-white">
            <header className="px-4 lg:px-6 h-20 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <Image
                        src="/logo.jpg"
                        alt="Visionary Tech Squad Logo"
                        width={100}
                        height={77}
                        className="h-16 w-auto"
                    />
                    <span className="sr-only">Visionary Tech Squad</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:text-[#00ffff] transition-colors" href="#about">
                        About
                    </Link>
                    <Link className="text-sm font-medium hover:text-[#00ffff] transition-colors" href="#services">
                        Services
                    </Link>
                    <Link className="text-sm font-medium hover:text-[#00ffff] transition-colors" href="#portfolio">
                        Portfolio
                    </Link>
                    <Link className="text-sm font-medium hover:text-[#00ffff] transition-colors" href="#contact">
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#00ffff]">
                                    Visionary Tech Squad
                                </h1>
                                <p className="mx-auto max-w-[700px] text-[#00ffff] md:text-xl">
                                    Enlight your ideas into the world of technology
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#00ffff] px-4 py-2 text-sm font-medium text-[#001a1a] shadow transition-colors hover:bg-[#00ffff]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00ffff]"
                                    href="#contact"
                                >
                                    Get Started
                                </Link>
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md border border-[#00ffff] px-4 py-2 text-sm font-medium text-[#00ffff] shadow-sm transition-colors hover:bg-[#00ffff]/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00ffff]"
                                    href="#about"
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#002626]">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#00ffff]">About Us</h2>
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-lg mb-6">
                                Driven by creativity and expertise, we are a team of designers and developers specializing in cutting-edge web technologies. Our commitment to excellence drives us to deliver outstanding results on every project.
                            </p>
                            <p className="text-lg mb-6">
                                We love transforming your imaginative ideas into innovative technology solutions. Your time is precious to us, and we are dedicated to creating exceptional work together.
                            </p>
                            <p className="text-lg font-semibold text-[#00ffff]">
                                Let's embark on this exciting journey and create something amazing!
                            </p>
                        </div>
                    </div>
                </section>
                <section id="services" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#00ffff]">Our Services</h2>
                        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <Laptop className="h-12 w-12 text-[#00ffff]" />
                                <h3 className="text-xl font-bold text-[#00ffff]">Web Development</h3>
                                <p className="text-gray-400">
                                    Custom web solutions using HTML, CSS, React, Next.js, and Tailwind CSS.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <Code className="h-12 w-12 text-[#00ffff]" />
                                <h3 className="text-xl font-bold text-[#00ffff]">Full-Stack Development</h3>
                                <p className="text-gray-400">
                                    Robust and scalable applications with Node.js, MongoDB, and Firebase.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <Smartphone className="h-12 w-12 text-[#00ffff]" />
                                <h3 className="text-xl font-bold text-[#00ffff]">Mobile Application</h3>
                                <p className="text-gray-400">
                                    Cross-platform mobile apps using React Native and Flutter.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <Database className="h-12 w-12 text-[#00ffff]" />
                                <h3 className="text-xl font-bold text-[#00ffff]">CMS Integration</h3>
                                <p className="text-gray-400">
                                    Seamless content management with Strapi CMS and headless architectures.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-[#002626]">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#00ffff]">Our Portfolio</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="relative group overflow-hidden rounded-lg">
                                <Image
                                    alt="Project 1"
                                    className="object-cover w-full h-60"
                                    height="300"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "400/300",
                                        objectFit: "cover",
                                    }}
                                    width="400"
                                />
                                <div className="absolute inset-0 bg-[#001a1a] bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <p className="text-[#00ffff] text-lg font-semibold">React E-commerce Platform</p>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-lg">
                                <Image
                                    alt="Project 2"
                                    className="object-cover w-full h-60"
                                    height="300"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "400/300",
                                        objectFit: "cover",
                                    }}
                                    width="400"
                                />
                                <div className="absolute inset-0 bg-[#001a1a] bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <p className="text-[#00ffff] text-lg font-semibold">Mobile App for Fitness Tracking</p>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-lg">
                                <Image
                                    alt="Project 3"
                                    className="object-cover w-full h-60"
                                    height="300"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "400/300",
                                        objectFit: "cover",
                                    }}
                                    width="400"
                                />
                                <div className="absolute inset-0 bg-[#001a1a] bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <p className="text-[#00ffff] text-lg font-semibold">CMS-Powered News Portal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#00ffff]">Contact Us</h2>
                        <div className="grid gap-10 md:grid-cols-2">
                            <div>
                                <form className="space-y-4">
                                    <Input placeholder="Your Name" className="bg-[#001a1a] text-white border-[#00ffff] focus:ring-[#00ffff]" />
                                    <Input placeholder="Your Email" type="email" className="bg-[#001a1a] text-white border-[#00ffff] focus:ring-[#00ffff]" />
                                    <Textarea placeholder="Your Message" className="bg-[#001a1a] text-white border-[#00ffff] focus:ring-[#00ffff]" />
                                    <Button className="w-full bg-[#00ffff] text-[#001a1a] hover:bg-[#00ffff]/90">
                                        Send Message
                                        <Send className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-[#00ffff]">Get in Touch</h3>
                                <p className="text-gray-400">We'd love to hear from you. Here's how you can reach us...</p>
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
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#00ffff]">
                <p className="text-xs text-gray-400">© 2024 Visionary Tech Squad. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-[#00ffff]" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-[#00ffff]" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}