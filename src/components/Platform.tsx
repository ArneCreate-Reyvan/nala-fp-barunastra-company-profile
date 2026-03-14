"use client"

import { Radar, Cpu, Activity } from "lucide-react"
import { SponsorCarousel } from "./layout/SponsorCarousel"

function Capability({
    icon,
    title,
    desc
}: {
    icon: React.ReactNode
    title: string
    desc: string
}) {
    return (

        <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start">

            <div
                className="w-10 h-10 flex items-center justify-center rounded-lg"
                style={{
                    background: `rgb(var(--primary) / 0.12)`,
                    color: `rgb(var(--primary))`
                }}
            >
                {icon}
            </div>

            <h3
                className="text-lg font-medium"
                style={{ color: `rgb(var(--foreground))` }}
            >
                {title}
            </h3>

            <p
                className="text-sm leading-relaxed"
                style={{ color: `rgb(var(--muted))` }}
            >
                {desc}
            </p>

        </div>
    )
}

export default function Platform() {
    return (
        <section className="relative pb-40 pt-20" id="about">

            <div className="mx-auto max-w-6xl px-4 md:px-6 text-center md:text-left">

                {/* Section label */}

                <p
                    className="text-sm mb-6"
                    style={{ color: `rgb(var(--muted))` }}
                >
                    About Nala
                </p>

                {/* Headline */}

                <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-semibold max-w-3xl mx-auto md:mx-0 leading-tight"
                    style={{ color: `rgb(var(--foreground))` }}
                >
                    A unified environment for building, testing and operating autonomous systems.
                </h2>

                <p
                    className="mt-6 max-w-xl mx-auto md:mx-0 text-base sm:text-lg"
                    style={{ color: `rgb(var(--muted))` }}
                >
                    From simulation to deployment, our platform enables teams to design,
                    monitor and control intelligent systems in one cohesive environment.
                </p>

                {/* Capability grid */}

                <div className="grid md:grid-cols-3 gap-10 mt-20">

                    <Capability
                        icon={<Radar size={22} />}
                        title="Real-time Monitoring"
                        desc="Observe telemetry, diagnostics and system behavior through a live operational interface."
                    />

                    <Capability
                        icon={<Cpu size={22} />}
                        title="Autonomous Intelligence"
                        desc="Design adaptive behaviors and decision models with powerful control environments."
                    />

                    <Capability
                        icon={<Activity size={22} />}
                        title="Operational Insights"
                        desc="Transform complex system data into actionable insights for engineering teams."
                    />

                </div>

            </div>
            <SponsorCarousel />
        </section>
    )
}