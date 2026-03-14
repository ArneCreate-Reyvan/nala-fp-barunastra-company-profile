"use client"

import Image from "next/image"
import { Cpu, Radar, Navigation } from "lucide-react"

function Feature({
    icon,
    title,
    desc
}: {
    icon: React.ReactNode
    title: string
    desc: string
}) {
    return (
        <div className="flex gap-3 items-start lg:justify-end">
            <div className="text-center lg:text-right">
                <h3
                    className="text-sm font-medium"
                    style={{ color: `rgb(var(--foreground))` }}
                >
                    {title}
                </h3>

                <p
                    className="text-sm mt-1 leading-relaxed"
                    style={{ color: `rgb(var(--muted))` }}
                >
                    {desc}
                </p>
            </div>

            <div
                className="hidden md:block w-10 h-10 flex items-center justify-center rounded-lg shrink-0 ml-auto"
                style={{
                    background: `rgb(var(--primary) / 0.12)`,
                    color: `rgb(var(--primary))`
                }}
            >
                {icon}
            </div>
        </div>
    )
}

function Spec({ value }: { value: string }) {
    return (

        <div
            className="text-xs px-3 py-1 rounded-full border"
            style={{
                borderColor: `rgb(var(--border))`,
                color: `rgb(var(--muted))`
            }}
        >
            {value}
        </div>

    )
}

export default function Vessel() {
    return (
        <section className="relative pb-0 md:pb-20" id="vessel">

            <div className="mx-auto max-w-7xl px-4 md:px-6">

                {/* small section intro */}

                <div className="mb-12 md:mb-16 max-w-xl text-center md:text-left mx-auto md:mx-0">

                    <p
                        className="text-xs mb-3 tracking-wide uppercase"
                        style={{ color: `rgb(var(--muted))` }}
                    >
                        Engineering
                    </p>

                    <h2
                        className="text-2xl md:text-3xl font-semibold"
                        style={{ color: `rgb(var(--foreground))` }}
                    >
                        The Vessel
                    </h2>
                    <p
                        className="mt-6 text-md max-w-xl"
                        style={{ color: `rgb(var(--muted))` }}
                    >
                        Designed as a research and testing platform, our vessels integrate
                        advanced sensing, autonomy modules and real-time telemetry systems
                        within a unified control architecture.
                    </p>

                </div>

                {/* main layout */}

                <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 items-center">

                    {/* boat visual */}

                    <div className="relative">

                        <div
                            className="absolute inset-0 blur-3xl opacity-30"
                            style={{
                                background: `radial-gradient(circle at center, rgb(var(--primary) / 0.4), transparent 70%)`
                            }}
                        />

                        <Image
                            src="/assets/thesus.webp"
                            alt="Autonomous vessel"
                            width={1400}
                            height={700}
                            className="relative object-contain mx-auto"
                            priority
                        />
                        <div className="vessel-floor-glow" />

                    </div>

                    <div className="hidden lg:block absolute left-1/2 top-40 w-px h-[600px] bg-white/30" />

                    {/* description */}

                    <div className="space-y-10 text-center lg:text-right">

                        {/* vessel name */}

                        <div className="mb-5">

                            <p
                                className="text-sm tracking-widest uppercase mb-2"
                                style={{ color: `rgb(var(--muted))` }}
                            >
                                Autonomous Vessel
                            </p>

                            <h3
                                className="text-4xl font-semibold leading-none"
                                style={{ color: `rgb(var(--foreground))` }}
                            >
                                LEVIHATAN
                                <span
                                    className="block text-sm mt-0 mb-2"
                                    style={{ color: `rgb(var(--muted))` }}
                                >
                                    NALA 
                                </span>
                            </h3>

                            <p
                                className="text-sm mt-0"
                                style={{ color: `rgb(var(--primary))` }}
                            >
                                Experimental platform for autonomous marine research.
                            </p>

                        </div>

                        {/* specs */}

                        <div className="flex flex-wrap gap-2 justify-center lg:justify-end">

                            <Spec value="AI Navigation" />
                            <Spec value="Real-time Telemetry" />
                            <Spec value="Modular Systems" />
                            <Spec value="Research Platform" />

                        </div>

                        {/* description */}

                        <p
                            className="text-base leading-relaxed max-w-lg mx-auto lg:ml-auto"
                            style={{ color: `rgb(var(--muted))` }}
                        >
                            Designed as a modular research and testing platform, the vessel integrates
                            sensing systems, autonomous navigation modules and real-time telemetry
                            infrastructure within a unified control architecture.
                        </p>

                        {/* features */}

                        <div className="space-y-6 pt-0">

                            <Feature
                                icon={<Navigation size={18} />}
                                title="Adaptive Navigation"
                                desc="Real-time navigation systems designed for dynamic marine environments."
                            />

                            <Feature
                                icon={<Cpu size={18} />}
                                title="Autonomous Control"
                                desc="Onboard computation enabling intelligent navigation and decision systems."
                            />

                            <Feature
                                icon={<Radar size={18} />}
                                title="Sensor Telemetry"
                                desc="Continuous environmental and system telemetry streamed to the platform."
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}