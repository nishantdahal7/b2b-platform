import { Brain, Lock, Rocket } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function IndustryExpertise() {
    const areas = [
        {
            title: "B2B SaaS Growth",
            icon: Rocket,
            description: "Driving acquisition and retention for subscription-based business models through value-focused content.",
        },
        {
            title: "Artificial Intelligence",
            icon: Brain,
            description: "Demystifying AI for business decision-makers with data-backed insights and accessible explanations.",
        },
        {
            title: "Cybersecurity & Tech",
            icon: Lock,
            description: "Translating complex security concepts and emerging tech trends into actionable business recommendations.",
        },
    ]

    return (
        <section id="expertise" className="py-24 container">
            <div className="flex flex-col items-center text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Specialized Expertise</h2>
                <p className="text-lg text-muted-foreground max-w-[800px]">
                    Deep technical understanding combined with strategic business acumen.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {areas.map((area) => (
                    <Card key={area.title} className="bg-card border-muted/50 transition-all hover:border-accent/50 hover:shadow-lg hover:-translate-y-1">
                        <CardHeader>
                            <area.icon className="h-12 w-12 text-accent mb-4" />
                            <CardTitle>{area.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{area.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
