import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function BlogSidebar() {
    return (
        <div className="flex flex-col gap-8 sticky top-24">
            {/* Newsletter Widget */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Join the Newsletter</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                        Get the latest B2B SaaS content strategies delivered to your inbox weekly.
                    </p>
                    <div className="grid gap-2">
                        <Input placeholder="work@email.com" />
                        <Button className="w-full">Subscribe</Button>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">No spam, unsubscribe anytime.</p>
                </CardContent>
            </Card>

            {/* Categories */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    {["B2B Strategy", "SEO", "Content Ops", "AI & Automation", "Case Studies"].map(cat => (
                        <div key={cat} className="flex justify-between items-center text-sm group cursor-pointer hover:text-primary">
                            <span>{cat}</span>
                            <span className="text-muted-foreground bg-muted px-2 py-0.5 rounded-full text-xs">12</span>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Trending Topics</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    {["SaaS", "Growth", "Lead Gen", "Copywriting", "Analytics", "Retention"].map(tag => (
                        <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-muted">
                            #{tag}
                        </Badge>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}
