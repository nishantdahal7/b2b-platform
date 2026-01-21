import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface BlogPostCardProps {
    post: {
        title: string
        excerpt: string
        category: string
        date: string
        readTime: string
        slug: string
        image: string
    }
}

export function BlogPostCard({ post }: BlogPostCardProps) {
    return (
        <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="aspect-video w-full overflow-hidden bg-muted">
                {/* Placeholder for real image */}
                <div className="h-full w-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-muted-foreground">
                    Image Placeholder
                </div>
            </div>
            <CardHeader className="p-6 pb-2">
                <div className="flex justify-between items-center mb-2">
                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                    <span className="flex items-center text-xs text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" /> {post.readTime}
                    </span>
                </div>
                <h3 className="text-xl font-bold leading-tight hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
            </CardHeader>
            <CardContent className="p-6 py-2 flex-grow">
                <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                </p>
            </CardContent>
            <CardFooter className="p-6 pt-2">
                <div className="flex w-full items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {post.date}
                    </div>
                    <Link href={`/blog/${post.slug}`} className="flex items-center text-primary font-medium hover:underline">
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                </div>
            </CardFooter>
        </Card>
    )
}
