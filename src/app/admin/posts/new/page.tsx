import { PostEditor } from "@/components/admin/post-editor"

export default function NewPostPage() {
    return (
        <div className="max-w-6xl mx-auto py-8">
            <div className="flex flex-col gap-2 mb-8 border-b pb-8">
                <h1 className="text-3xl font-bold">Create New Post</h1>
                <p className="text-muted-foreground">Draft your next strategic insight. Remember: data-backed is better.</p>
            </div>
            <PostEditor />
        </div>
    )
}
