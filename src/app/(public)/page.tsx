import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { IndustryExpertise } from "@/components/sections/industry-expertise"
import { CaseStudies } from "@/components/sections/case-studies"
import { Portfolio } from "@/components/sections/portfolio"
import { LeadMagnet } from "@/components/sections/lead-magnet"
import { Services } from "@/components/sections/services"
import { InteractiveTools } from "@/components/sections/interactive-tools"
import { DataDifference } from "@/components/sections/data-difference"
import { Contact } from "@/components/sections/contact"

export default function Home() {
    return (
        <div className="flex flex-col pb-16">
            {/* Hero Section */}
            <section className="relative flex min-h-[80vh] flex-col items-center justify-center bg-background px-4 text-center overflow-hidden">
                {/* Background elements (abstract patterns) */}
                <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

                <div className="z-10 container mx-auto flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                        <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
                        Available for Q2 Retainers
                    </div>

                    <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Turn Complex B2B SaaS <br className="hidden sm:inline" />
                        <span className="text-primary dark:text-white">Into Revenue-Driving Content</span>
                    </h1>

                    <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                        The Architectural Writer for B2B Tech & SaaS brands. I bridge the gap between complex technology and human-centric business value.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row mt-4">
                        <Button asChild size="lg" className="h-12 px-8 text-base bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20">
                            <Link href="#contact">
                                Book a Content Strategy Call
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
                            <Link href="#lead-magnet">
                                Get the Content Audit Checklist
                            </Link>
                        </Button>
                    </div>

                    {/* Social Proof */}
                    <div className="mt-12 flex flex-col items-center gap-4 text-muted-foreground">
                        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/70">Trusted by Innovative Tech Brands</p>
                        <div className="flex flex-wrap items-center justify-center gap-8 grayscale opacity-70 hover:opacity-100 transition-opacity">
                            {/* Placeholders for logos (Text for now) */}
                            <span className="font-bold text-xl">My Career Nepal</span>
                            <span className="font-bold text-xl">Softwarica</span>
                            <span className="font-bold text-xl">UpSkills</span>
                            <span className="font-bold text-xl">TechCorp</span>
                        </div>
                    </div>
                </div>
            </section>

            <IndustryExpertise />
            <CaseStudies />
            <Portfolio />
            <LeadMagnet />
            <Services />
            <InteractiveTools />
            <DataDifference />
            <Contact />
        </div>
    )
}
