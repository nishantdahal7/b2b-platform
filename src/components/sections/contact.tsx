import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-muted/30">
            <div className="container max-w-2xl text-center flex flex-col items-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Let's Build Your Content Strategy</h2>
                <p className="text-lg text-muted-foreground mb-12">
                    Ready to turn your B2B SaaS expertise into a revenue engine?
                </p>

                <div className="w-full bg-background rounded-xl text-left border p-8 shadow-sm">
                    <form className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="c-name">Full Name</Label>
                            <Input id="c-name" placeholder="John Doe" required />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="c-company">Company</Label>
                            <Input id="c-company" placeholder="Tech Co." />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="c-email">Work Email</Label>
                            <Input id="c-email" type="email" placeholder="john@company.com" required />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="message">Tell me about your content challenge</Label>
                            <Textarea id="message" placeholder="We need to scale our blog..." className="min-h-[120px]" />
                        </div>

                        <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                            Send Message
                        </Button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-muted-foreground mb-2">Prefer to book a time directly?</p>
                        <Button variant="link" className="text-accent underline" asChild>
                            <a href="#">Book a Free Consultation</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
