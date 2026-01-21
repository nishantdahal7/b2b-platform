"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Check, X, AlertTriangle } from "lucide-react"

export function ContentScorecard() {
    const [content, setContent] = useState("")
    const [analyzing, setAnalyzing] = useState(false)
    const [results, setResults] = useState<null | {
        readability: number
        seo: number
        structure: number
        engagement: number
    }>(null)

    const handleAnalyze = () => {
        setAnalyzing(true)
        // Simulate API delay
        setTimeout(() => {
            setResults({
                readability: 85,
                seo: 72,
                structure: 90,
                engagement: 65,
            })
            setAnalyzing(false)
        }, 1500)
    }

    return (
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-4">
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Paste your content draft</h3>
                    <p className="text-sm text-muted-foreground">See how your current content measures up against industry benchmarks.</p>
                </div>
                <Textarea
                    placeholder="# Introduction\n\nWrite your content here..."
                    className="min-h-[300px] font-mono text-sm"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button onClick={handleAnalyze} disabled={analyzing || !content} className="self-start">
                    {analyzing ? "Analyzing..." : "Analyze Content"}
                </Button>
            </div>

            <div className="flex flex-col gap-8 justify-center">
                {!results ? (
                    <div className="flex items-center justify-center h-full border-2 border-dashed rounded-xl p-12 text-muted-foreground text-center">
                        <p>Results will appear here after analysis.</p>
                    </div>
                ) : (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm font-medium">
                                    <span>Readability (Flesch-Kincaid)</span>
                                    <span className="text-green-500">{results.readability}/100</span>
                                </div>
                                <Progress value={results.readability} className="h-2" />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm font-medium">
                                    <span>SEO Optimization</span>
                                    <span className="text-yellow-500">{results.seo}/100</span>
                                </div>
                                <Progress value={results.seo} className="h-2" />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm font-medium">
                                    <span>Structural Integrity</span>
                                    <span className="text-green-500">{results.structure}/100</span>
                                </div>
                                <Progress value={results.structure} className="h-2" />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm font-medium">
                                    <span>Engagement Potential</span>
                                    <span className="text-orange-500">{results.engagement}/100</span>
                                </div>
                                <Progress value={results.engagement} className="h-2" />
                            </div>
                        </div>

                        <div className="rounded-lg bg-muted p-4 space-y-2">
                            <h4 className="font-semibold mb-2">Recommendations</h4>
                            <div className="flex gap-2 text-sm">
                                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                                <span>Readability score is excellent.</span>
                            </div>
                            <div className="flex gap-2 text-sm">
                                <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />
                                <span>Meta description length is suboptimal (too short).</span>
                            </div>
                            <div className="flex gap-2 text-sm">
                                <X className="h-4 w-4 text-red-500 mt-0.5" />
                                <span>Heading hierarchy skips H2 to H4.</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
