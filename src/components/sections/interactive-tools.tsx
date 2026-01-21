import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ROICalculator } from "@/components/tools/roi-calculator"
import { ContentScorecard } from "@/components/tools/content-scorecard"
import { ContentDashboard } from "@/components/tools/content-dashboard"

export function InteractiveTools() {
    return (
        <section id="tools" className="py-24 container">
            <div className="flex flex-col items-center text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Data-Driven Content Strategy Tools</h2>
                <p className="text-lg text-muted-foreground max-w-[800px]">
                    I don't just write. I use advanced tools to track, optimize, and prove ROI.
                </p>
            </div>

            <div className="bg-background rounded-xl border shadow-sm">
                <Tabs defaultValue="calculator" className="w-full">
                    <div className="p-6 border-b bg-muted/30">
                        <TabsList className="grid w-full max-w-[600px] grid-cols-3 mx-auto">
                            <TabsTrigger value="calculator">ROI Calculator</TabsTrigger>
                            <TabsTrigger value="scorecard">SEO Scorecard</TabsTrigger>
                            <TabsTrigger value="dashboard">Analytics Demo</TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="p-6 md:p-12 min-h-[500px]">
                        <TabsContent value="calculator" className="mt-0">
                            <ROICalculator />
                        </TabsContent>
                        <TabsContent value="scorecard" className="mt-0">
                            <ContentScorecard />
                        </TabsContent>
                        <TabsContent value="dashboard" className="mt-0">
                            <ContentDashboard />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </section>
    )
}
