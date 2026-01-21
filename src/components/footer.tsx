import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-16 text-muted-foreground">
            <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-foreground">The Architectural Writer</h3>
                    <p className="text-sm">B2B SaaS Content Strategist</p>
                    <div className="flex gap-4 mt-4">
                        <Link href="#" className="hover:text-foreground">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="#" className="hover:text-foreground">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="hover:text-foreground">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-foreground">Quick Links</h3>
                    <Link href="#case-studies" className="text-sm hover:underline">Case Studies</Link>
                    <Link href="/blog" className="text-sm hover:underline">Blog</Link>
                    <Link href="#services" className="text-sm hover:underline">Services</Link>
                    <Link href="#tools" className="text-sm hover:underline">Tools</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-foreground">Resources</h3>
                    <Link href="#lead-magnet" className="text-sm hover:underline">Content Audit Checklist</Link>
                    <Link href="#" className="text-sm hover:underline">Newsletter</Link>
                    <Link href="#" className="text-sm hover:underline">Privacy Policy</Link>
                    <Link href="#" className="text-sm hover:underline">Terms of Service</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-foreground">Contact</h3>
                    <p className="text-sm">hello@architecturalwriter.com</p>
                    <p className="text-sm">San Francisco, CA</p>
                </div>
            </div>
            <div className="container mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
                <p className="text-sm">© 2026 The Architectural Writer. All rights reserved.</p>
                <p className="text-sm">Built with Next.js, Supabase, and Vercel</p>
            </div>
        </footer>
    )
}
