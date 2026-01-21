"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export function ROICalculator() {
    const [costPerHire, setCostPerHire] = useState(30000)
    const [badHires, setBadHires] = useState(3)
    const [timeToFill, setTimeToFill] = useState(45)

    const [totalCost, setTotalCost] = useState(0)
    const [savings, setSavings] = useState(0)

    useEffect(() => {
        // Audit cost logic: Bad Hire Cost + (Time To Fill * Daily Loss estimate)
        // Simplified logic for demo
        const annualBadHireCost = costPerHire * badHires
        const vacancyLoss = timeToFill * 500 * badHires // Assuming $500/day loss per open role
        const total = annualBadHireCost + vacancyLoss

        setTotalCost(total)
        // Assume 40% reduction with better employer branding
        setSavings(total * 0.4)
    }, [costPerHire, badHires, timeToFill])

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)
    }

    return (
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            <Card>
                <CardHeader>
                    <CardTitle>Input Your Metrics</CardTitle>
                    <CardDescription>Estimate the hidden costs of recruitment inefficiencies.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <Label>Avg. Cost of a Bad Hire</Label>
                            <span className="text-muted-foreground">{formatCurrency(costPerHire)}</span>
                        </div>
                        <Slider
                            min={5000} max={100000} step={1000}
                            value={[costPerHire]}
                            onValueChange={(val) => setCostPerHire(val[0])}
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <Label>Bad Hires Per Year</Label>
                            <span className="text-muted-foreground">{badHires}</span>
                        </div>
                        <Slider
                            min={1} max={20} step={1}
                            value={[badHires]}
                            onValueChange={(val) => setBadHires(val[0])}
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <Label>Avg. Time to Fill (Days)</Label>
                            <span className="text-muted-foreground">{timeToFill} Days</span>
                        </div>
                        <Slider
                            min={15} max={120} step={1}
                            value={[timeToFill]}
                            onValueChange={(val) => setTimeToFill(val[0])}
                        />
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-6">
                <Card className="bg-slate-950 text-white border-slate-800">
                    <CardHeader>
                        <CardTitle className="text-slate-400 font-medium text-sm uppercase tracking-wider">Annual Cost of Bad Hires</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-5xl font-extrabold text-red-500">
                            {formatCurrency(totalCost)}
                        </div>
                        <p className="text-slate-400 mt-2 text-sm">Including vacancy estimates</p>
                    </CardContent>
                </Card>

                <Card className="bg-emerald-950/30 border-emerald-900/50">
                    <CardHeader>
                        <CardTitle className="text-emerald-500 font-medium text-sm uppercase tracking-wider">Potential Savings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-5xl font-extrabold text-emerald-400">
                            {formatCurrency(savings)}
                        </div>
                        <p className="text-emerald-500/80 mt-2 text-sm">With Strategic Employer Branding</p>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                            Claim These Savings
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
