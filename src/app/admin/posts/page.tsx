import Link from "next/link"
import { Plus, Search, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { MOCK_POSTS } from "@/lib/data"

export default function AdminPostsPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Posts</h1>
                    <p className="text-muted-foreground">Manage your blog content and drafts.</p>
                </div>
                <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                    <Link href="/admin/posts/new">
                        <Plus className="mr-2 h-4 w-4" /> New Post
                    </Link>
                </Button>
            </div>

            <Card className="p-0 overflow-hidden">
                <div className="p-4 border-b flex items-center justify-between bg-muted/30">
                    <div className="relative w-full max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search posts..." className="pl-10" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Showing {MOCK_POSTS.length} posts</span>
                    </div>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[400px]">Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {MOCK_POSTS.map((post) => (
                            <TableRow key={post.slug}>
                                <TableCell className="font-medium">{post.title}</TableCell>
                                <TableCell><Badge variant="outline">{post.category}</Badge></TableCell>
                                <TableCell><Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/10 border-green-500/20">Published</Badge></TableCell>
                                <TableCell className="text-muted-foreground text-sm">{post.date}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    )
}

import { Card } from "@/components/ui/card"
