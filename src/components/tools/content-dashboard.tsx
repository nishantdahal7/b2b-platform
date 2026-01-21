"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"

export function ContentDashboard() {
    const [demoMode, setDemoMode] = useState(true)

    const data = demoMode ? [
        { name: "Jan", views: 4000, leads: 240 },
        { name: "Feb", views: 3000, leads: 139 },
        { name: "Mar", views: 9800, leads: 680 },
        { name: "Apr", views: 12500, leads: 990 },
        { name: "May", views: 18900, leads: 1200 },
        { name: "Jun", views: 23000, leads: 1500 },
    ] : [
        { name: "Jan", views: 0, leads: 0 },
        { name: "Feb", views: 0, leads: 0 },
        { name: "Mar", views: 0, leads: 0 },
        { name: "Apr", views: 0, leads: 0 },
        { name: "May", views: 0, leads: 0 },
        { name: "Jun", views: 0, leads: 0 },
    ]

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold">Content Performance</h3>
                    <p className="text-sm text-muted-foreground">Real-time analytics integration.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Switch id="demo-mode" checked={demoMode} onCheckedChange={setDemoMode} />
                    <Label htmlFor="demo-mode">Demo Mode</Label>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Views</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{demoMode ? "71,200" : "0"}</div>
                        <p className="text-xs text-green-500">{demoMode ? "+20.1% from last month" : "No data"}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Time on Page</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{demoMode ? "4m 12s" : "0s"}</div>
                        <p className="text-xs text-green-500">{demoMode ? "+10% from last month" : "No data"}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{demoMode ? "4.3%" : "0%"}</div>
                        <p className="text-xs text-green-500">{demoMode ? "+1.2% from last month" : "No data"}</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="p-6">
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Area type="monotone" dataKey="views" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorViews)" />
                            <Line type="monotone" dataKey="leads" stroke="#10b981" strokeWidth={2} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </Card>
        </div>
    )
}
