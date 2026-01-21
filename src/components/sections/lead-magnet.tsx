import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Download } from "lucide-react"
import Link from "next/link"

export function LeadMagnet() {
    return (
        <section id="lead-magnet" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl"></div>

            <div className="container relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
                {/* Copy */}
                <div className="flex flex-col gap-6">
                    <div className="inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-sm font-medium">
                        <Download className="mr-2 h-4 w-4" />
                        Free Resource
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        The B2B Content Audit: 15 Points to Ensure Your Blog Converts
                    </h2>
                    <p className="text-lg text-primary-foreground/80">
                        Is your content actually driving pipeline? Most B2B brands publish content that gets traffic but doesn't convert. This checklist shows you exactly how to audit your content for gaps.
                    </p>
                    <ul className="grid gap-3">
                        {[
                            "Identify SEO gaps in your topic clusters",
                            "Evaluate conversion pathways for high-intent traffic",
                            "Assess brand voice consistency across channels"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-accent" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Form */}
                <div className="rounded-xl bg-background p-8 text-foreground shadow-2xl">
                    <form className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold mb-2">Get the Checklist</h3>

                        <div className="grid gap-2">
                            <Label htmlFor="name">First Name</Label>
                            <Input id="name" placeholder="Jane" required />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Work Email</Label>
                            <Input id="email" type="email" placeholder="jane@company.com" required />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="company">Company</Label>
                            <Input id="company" placeholder="Acme Inc." required />
                        </div>

                        <div className="flex items-start gap-2 mt-2">
                            <input type="checkbox" id="consent" className="mt-1" />
                            <label htmlFor="consent" className="text-xs text-muted-foreground">
                                I agree to receive the checklist and occasional insights. Unsubscribe at any time.
                            </label>
                        </div>

                        <Button size="lg" className="mt-4 w-full bg-accent hover:bg-accent/90 text-white">
                            Download Checklist
                        </Button>
                    </form>
                    <p className="text-center text-xs text-muted-foreground mt-4">
                        Trusted by marketers at SaaS unicorns.
                    </p>
                </div>
            </div>
        </section>
    )
}
