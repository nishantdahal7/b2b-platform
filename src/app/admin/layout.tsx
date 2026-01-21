"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, Settings, LogOut, ExternalLink, Users, BarChart } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    const sidebarLinks = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Posts", href: "/admin/posts", icon: FileText },
        { name: "Leads", href: "/admin/leads", icon: Users },
        { name: "Analytics", href: "/admin/analytics", icon: BarChart },
        { name: "Settings", href: "/admin/settings", icon: Settings },
    ]

    return (
        <div className="flex min-h-screen bg-muted/30">
            {/* Sidebar */}
            <aside className="w-64 border-r bg-background hidden md:flex flex-col sticky top-0 h-screen">
                <div className="p-6 border-b">
                    <Link href="/admin" className="font-bold text-xl tracking-tight">Admin CMS</Link>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                    {sidebarLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                pathname === link.href
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                        >
                            <link.icon className="h-4 w-4" />
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div className="p-4 border-t space-y-2">
                    <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
                        <Link href="/" target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Site
                        </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0">
                <header className="h-16 border-b bg-background flex items-center justify-between px-8 sticky top-0 z-10">
                    <h2 className="font-semibold text-lg">
                        {sidebarLinks.find(l => l.href === pathname)?.name || "Admin"}
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="text-sm text-muted-foreground">Admin User</div>
                        <div className="h-8 w-8 rounded-full bg-primary/10 border flex items-center justify-center font-bold">A</div>
                    </div>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
