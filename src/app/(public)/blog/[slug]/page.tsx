import { MOCK_POSTS } from "@/lib/data"
import { notFound } from "next/navigation"
import { Calendar, Clock, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface BlogPostPageProps {
    params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = MOCK_POSTS.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="container py-12 md:py-24">
            <div className="max-w-3xl mx-auto">
                <Button variant="ghost" size="sm" asChild className="mb-8 -ml-4">
                    <Link href="/blog">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>
                </Button>

                <div className="flex flex-col gap-4 mb-8">
                    <Badge className="w-fit">{post.category}</Badge>
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4" />
                            {post.date}
                        </div>
                        <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4" />
                            {post.readTime}
                        </div>
                    </div>
                </div>

                {/* Featured Image Placeholder */}
                <div className="aspect-video w-full rounded-xl bg-muted mb-12 flex items-center justify-center text-muted-foreground border">
                    Featured Image
                </div>

                {/* Content Section (Using Typography Plugin) */}
                <article className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="lead">
                        {post.excerpt}
                    </p>
                    <h2>The Architectural Shift in Content</h2>
                    <p>
                        In today's landscape, content isn't just about keywords; it's about building a narrative structure that supports your entire business strategy. Most SaaS companies treat their blog as a bucket for random ideas, but the leaders treat it as an operation.
                    </p>
                    <blockquote>
                        "Content strategy is the design of a sustainable system that creates and maintains content."
                    </blockquote>
                    <h3>Key Pillars of Success</h3>
                    <ul>
                        <li><strong>Data Integrity:</strong> Every claim should be backed by measurable metrics.</li>
                        <li><strong>Technical Clarity:</strong> Complex topics should be simplified without losing their technical weight.</li>
                        <li><strong>Conversion Loops:</strong> Every piece of content should have a clear next step in the journey.</li>
                    </ul>
                    <p>
                        As we move further into a world dominated by AI-generated noise, the human-centric, data-backed approach is the only way to maintain authority and drive revenue.
                    </p>
                </article>

                <div className="border-t mt-16 pt-8">
                    <div className="flex flex-col gap-4 items-center text-center p-8 bg-muted/50 rounded-xl">
                        <h3 className="text-xl font-bold">Want a custom audit for your SaaS content?</h3>
                        <p className="text-muted-foreground">I help tech brands turn complex ideas into revenue engines.</p>
                        <Button asChild className="mt-2">
                            <Link href="/#contact">Book a Consultation</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
