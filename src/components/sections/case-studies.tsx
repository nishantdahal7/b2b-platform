import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"

export function CaseStudies() {
    const cases = [
        {
            client: "My Career Nepal",
            tag: "HR Tech",
            title: "Increasing Talent Authority: A Recruitment Content Strategy",
            challenge: "Help a recruitment platform establish thought leadership in a crowded market.",
            result: "58% increase in talent attraction via employer branding content.",
            metric: "58%",
            metricLabel: "Attraction Increase",
            link: "#",
        },
        {
            client: "Softwarica",
            tag: "EdTech",
            title: "Educating the Next Gen: Positioning as an AI Leader",
            challenge: "Make complex AI and cybersecurity topics accessible to students.",
            result: "Established authority in emerging tech education with high-engagement blog series.",
            metric: "3x",
            metricLabel: "Engagement Rate",
            link: "#",
        },
        {
            client: "UpSkills",
            tag: "SaaS",
            title: "Strategic Content for Professional Development",
            challenge: "Drive sign-ups for professional training courses.",
            result: "Doubled organic traffic within 3 months through SEO-optimized guides.",
            metric: "100%",
            metricLabel: "Traffic Growth",
            link: "#",
        },
    ]

    return (
        <section id="case-studies" className="py-24 bg-muted/30">
            <div className="container">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Results-Driven Content Strategy</h2>
                    <p className="text-lg text-muted-foreground max-w-[800px]">
                        Proving business impact with hard metrics. Not just words, but revenue drivers.
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    {cases.map((study, index) => (
                        <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                            <div className="grid md:grid-cols-[1fr_200px] lg:grid-cols-[300px_1fr_200px] gap-6 p-6">

                                {/* Client Info */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="h-10 w-10 rounded bg-secondary flex items-center justify-center font-bold text-secondary-foreground">
                                            {study.client[0]}
                                        </div>
                                        <span className="font-semibold">{study.client}</span>
                                    </div>
                                    <Badge variant="outline" className="w-fit">{study.tag}</Badge>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-center gap-4">
                                    <h3 className="text-xl font-bold">{study.title}</h3>
                                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="font-semibold text-muted-foreground block mb-1">Challenge</span>
                                            <p>{study.challenge}</p>
                                        </div>
                                        <div>
                                            <span className="font-semibold text-muted-foreground block mb-1">Result</span>
                                            <p>{study.result}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Metric & Action */}
                                <div className="flex flex-col items-center justify-center gap-4 border-l pl-6 max-md:border-l-0 max-md:pl-0 max-md:border-t max-md:pt-6">
                                    <div className="text-center">
                                        <span className="block text-4xl font-extrabold text-primary">{study.metric}</span>
                                        <span className="text-xs text-muted-foreground uppercase tracking-wide">{study.metricLabel}</span>
                                    </div>
                                    <Button variant="ghost" size="sm" asChild className="group">
                                        <Link href={study.link}>
                                            View Work <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>

                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
