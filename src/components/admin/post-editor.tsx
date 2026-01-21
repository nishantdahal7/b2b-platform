"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Save, Send, Eye, FileEdit } from "lucide-react"

export function PostEditor() {
    const [content, setContent] = useState("# New Post\n\nWrite your content here...")

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between bg-background p-4 rounded-lg border sticky top-16 z-10 shadow-sm">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm">
                        <Save className="mr-2 h-4 w-4" /> Save Draft
                    </Button>
                    <div className="text-sm text-muted-foreground border-l pl-4">Last saved: Just now</div>
                </div>
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-white">
                    <Send className="mr-2 h-4 w-4" /> Publish Post
                </Button>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
                {/* Editor Area */}
                <div className="space-y-4">
                    <Tabs defaultValue="edit" className="w-full">
                        <TabsList>
                            <TabsTrigger value="edit">
                                <FileEdit className="mr-2 h-4 w-4" /> Edit
                            </TabsTrigger>
                            <TabsTrigger value="preview">
                                <Eye className="mr-2 h-4 w-4" /> Preview
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="edit" className="mt-4">
                            <Textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="min-h-[600px] font-mono text-base resize-none p-6 leading-relaxed"
                                placeholder="Content goes here..."
                            />
                        </TabsContent>
                        <TabsContent value="preview" className="mt-4">
                            <Card className="min-h-[600px]">
                                <CardContent className="p-8 prose prose-slate dark:prose-invert max-w-none">
                                    {/* In a real app, use a markdown parser here */}
                                    <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }} />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Sidebar Metadata */}
                <div className="space-y-6">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Post Settings</h3>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Slug</label>
                                <input className="w-full bg-muted/50 border rounded-md px-3 py-1 text-sm" placeholder="scaling-b2b-content" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Category</label>
                                <select className="w-full bg-muted/50 border rounded-md px-3 py-1 text-sm">
                                    <option>Content Ops</option>
                                    <option>Strategy</option>
                                    <option>AI</option>
                                    <option>Security</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Author</label>
                                <input className="w-full bg-muted/50 border rounded-md px-3 py-1 text-sm" value="Admin" readOnly />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">SEO Metadata</h3>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">SEO Title</label>
                                <input className="w-full bg-muted/50 border rounded-md px-3 py-1 text-sm" placeholder="Title max 60 chars" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Meta Description</label>
                                <textarea className="w-full bg-muted/50 border rounded-md px-3 py-1 text-sm min-h-[80px] resize-none" placeholder="Description max 160 chars" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Featured Image</h3>
                            <div className="aspect-video bg-muted rounded-md flex items-center justify-center border-2 border-dashed border-muted-foreground/20 text-xs text-muted-foreground">
                                Upload Image
                            </div>
                            <Button variant="outline" size="sm" className="w-full">Select File</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
