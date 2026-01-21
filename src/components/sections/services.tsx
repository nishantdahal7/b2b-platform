import { Lightbulb, FileText, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Services() {
    const services = [
        {
            title: "Thought Leadership",
            icon: Lightbulb,
            description: "Positioning executives as industry experts through data-backed articles that drive brand authority.",
            target: "C-suite visibility",
        },
        {
            title: "Strategic White Papers",
            icon: FileText,
            description: "In-depth technical content for lead generation. Complex topics distilled for decision-makers.",
            target: "Sales Enablement",
        },
        {
            title: "SEO Content Strategy",
            icon: TrendingUp,
            description: "Full-funnel content planning with keyword research and strategic content calendars.",
            target: "Organic Growth",
        },
    ]

    return (
        <section id="services" className="py-24 container">
            <div className="flex flex-col items-center text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Strategic Content Services</h2>
                <p className="text-lg text-muted-foreground max-w-[800px]">
                    Custom tailored engagements. No pricing sheets, just ROI-focused solutions.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {services.map((service, index) => (
                    <Card key={index} className="flex flex-col justify-between">
                        <CardHeader>
                            <service.icon className="h-10 w-10 text-accent mb-4" />
                            <CardTitle>{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4">
                            <p className="text-muted-foreground">{service.description}</p>
                            <p className="text-sm font-semibold text-primary">Target: {service.target}</p>
                            <div className="pt-4">
                                <Button variant="outline" className="w-full" asChild>
                                    <Link href="#contact">Discuss Your Project</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
