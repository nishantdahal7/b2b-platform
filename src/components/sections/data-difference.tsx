import { BarChart3, TrendingUp } from "lucide-react"

export function DataDifference() {
    return (
        <section className="py-24 container">
            <div className="rounded-3xl bg-slate-900 text-white p-12 lg:p-20 overflow-hidden relative">
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Why Data-Backed Storytelling Matters
                        </h2>
                        <p className="text-lg text-slate-300">
                            Post-AI, generic content is invisible. I build narratives on original research, internal data, and industry benchmarks.
                        </p>
                        <ul className="grid gap-4 mt-4">
                            <li className="flex items-start gap-4">
                                <div className="rounded-lg bg-white/10 p-3">
                                    <TrendingUp className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">58% Increase</h3>
                                    <p className="text-slate-400">In talent attraction when employer branding is prioritized (Case Study: My Career Nepal)</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="rounded-lg bg-white/10 p-3">
                                    <BarChart3 className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">3x Engagement</h3>
                                    <p className="text-slate-400">On content that uses concrete data vs. generic claims.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Visual Element - Abstract Data Viz */}
                    <div className="relative h-[300px] bg-white/5 rounded-xl border border-white/10 p-6 flex items-end justify-between gap-4">
                        <div className="w-full bg-accent/20 h-[30%] rounded-t-lg relative group">
                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">Generic</div>
                        </div>
                        <div className="w-full bg-accent/40 h-[50%] rounded-t-lg relative group">
                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">Opinion</div>
                        </div>
                        <div className="w-full bg-accent h-[90%] rounded-t-lg relative shadow-[0_0_30px_rgba(139,92,246,0.5)] group">
                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 font-bold text-accent">Data-Backed</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
