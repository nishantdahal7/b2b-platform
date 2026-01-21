import { MOCK_POSTS } from "@/lib/data"
import { BlogPostCard } from "@/components/blog/blog-card"
import { BlogSidebar } from "@/components/blog/blog-sidebar"

export default function BlogPage() {
    return (
        <div className="container py-12 md:py-24">
            <div className="flex flex-col gap-4 mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl"> Insights on B2B SaaS Content Strategy </h1>
                <p className="text-xl text-muted-foreground max-w-[800px]">
                    Strategic thinking, technical deep-dives, and data-backed reports for B2B Tech & SaaS leaders.
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
                {/* Blog Post Grid */}
                <div className="grid gap-8 md:grid-cols-2">
                    {MOCK_POSTS.map((post) => (
                        <BlogPostCard key={post.slug} post={post} />
                    ))}
                </div>

                {/* Sidebar */}
                <BlogSidebar />
            </div>
        </div>
    )
}
