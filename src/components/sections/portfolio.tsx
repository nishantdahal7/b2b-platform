import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Portfolio() {
    const works = [
        {
            category: "B2B SaaS",
            title: "Challenges in Modern Recruitment Tech",
            takeaway: "Positioned employer branding as a strategic imperative using data-driven insights (58% attraction lift).",
            link: "#",
        },
        {
            category: "AI & Automation",
            title: "Generative AI in the Enterprise: Beyond the Hype",
            takeaway: "Simplified complex LLM concepts for non-technical stakeholders, driving educational engagement.",
            link: "#",
        },
        {
            category: "Cybersecurity",
            title: "Zero Trust Architecture for Small Business",
            takeaway: "Translated emerging security threats into actionable business recommendations for SMB owners.",
            link: "#",
        },
    ]

    return (
        <section id="portfolio" className="py-24 container">
            <div className="flex flex-col items-center text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Thought Leadership & Strategic Insights</h2>
                <p className="text-lg text-muted-foreground max-w-[800px]">
                    Sample work demonstrating clarity, authority, and strategic alignment.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {works.map((work, index) => (
                    <div key={index} className="group flex flex-col justify-between rounded-lg border p-6 transition-all hover:bg-muted/50 hover:shadow-sm">
                        <div>
                            <Badge variant="secondary" className="mb-4">{work.category}</Badge>
                            <h3 className="mb-2 text-xl font-bold group-hover:text-primary transition-colors">{work.title}</h3>
                            <p className="mb-6 text-muted-foreground">{work.takeaway}</p>
                        </div>
                        <Button variant="link" className="w-fit px-0" asChild>
                            <Link href={work.link}>
                                Read Article <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    )
}
