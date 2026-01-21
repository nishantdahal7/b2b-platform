import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, Eye, TrendingUp } from "lucide-react"

export default function AdminDashboard() {
    const stats = [
        { title: "Total Posts", value: "24", icon: FileText, trend: "+2 this month" },
        { title: "New Leads", value: "142", icon: Users, trend: "+12.5% vs LW" },
        { title: "Total Views", value: "42.5K", icon: Eye, trend: "+20% vs last month" },
        { title: "Avg. Engagement", value: "4.2%", icon: TrendingUp, trend: "+0.5%" },
    ]

    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Welcome back, Admin</h1>
                <p className="text-muted-foreground">Here's what's happening with your content strategy platform.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 text-muted-foreground">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <stat.icon className="h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-green-500 mt-1">{stat.trend}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Posts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                    <div>
                                        <div className="font-medium text-sm">Strategic B2B SaaS Growth Pillar {i}</div>
                                        <div className="text-xs text-muted-foreground">Published: May 12, 2024</div>
                                    </div>
                                    <div className="text-xs font-medium text-green-500">Live</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Recent Leads</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                    <div>
                                        <div className="font-medium text-sm">Jane Cooper {i}</div>
                                        <div className="text-xs text-muted-foreground">Acme Inc • CEO</div>
                                    </div>
                                    <div className="text-xs font-medium bg-muted p-1 rounded">New</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
