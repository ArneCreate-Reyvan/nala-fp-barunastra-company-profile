"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Cpu, Radar, Code2, Waves } from "lucide-react"

export function HeroSystemPanel() {
    return (
        <Card
            className="overflow-hidden backdrop-blur-xl hero-panel pt-0"
            style={{
                background: `rgb(var(--surface-elevated) / 0.75)`,
                border: `1px solid rgb(var(--border))`,
            }}
        >
            <WindowChrome />

            <CardContent className="p-0">
                <div className="grid grid-cols-[240px_1fr] min-h-[640px]">
                    <Sidebar />
                    <MainPanel />
                </div>
            </CardContent>
        </Card>
    )
}

function WindowChrome() {
    return (
        <div
            className={`flex items-center justify-between px-4 py-2`}
            style={{
                borderBottom: `1px solid rgb(var(--border))`,
                background: `rgb(var(--surface))`,
            }}
        >
            <div className="flex items-center gap-2">

                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />

            </div>

            <div className={`text-xs tracking-wide`}
                style={{ color: `rgb(var(--muted))` }}
            >
                Marine Control System
            </div>

            <div className="flex items-center gap-3 text-xs"
                style={{ color: `rgb(var(--muted))` }}
            >
                <span>v0.9.2</span>
                <span>•</span>
                <span>Simulation</span>
            </div>
        </div>
    )
}

function Sidebar() {
    return (
        <div
            className="p-5 flex flex-col gap-6"
            style={{ borderRight: "1px solid rgb(var(--border))" }}
        >
            <div className="text-sm font-semibold tracking-wide"
                style={{ color: `rgb(var(--muted))` }}>
                Marine Control
            </div>

            <div className="space-y-1 text-sm">
                <NavItem icon={<Activity size={16} />} label="Dashboard" active />
                <NavItem icon={<Waves size={16} />} label="Boat Testing" />
                <NavItem icon={<Radar size={16} />} label="Telemetry" />
                <NavItem icon={<Cpu size={16} />} label="Autonomy Lab" />
                <NavItem icon={<Code2 size={16} />} label="Programming" />
            </div>

            <div className="mt-auto text-xs text-[rgb(var(--muted))]">
                System Status

                <div className="flex items-center gap-2 mt-2">
                    <span
                        className="h-2 w-2 rounded-full animate-pulse"
                        style={{ background: "rgb(var(--success))" }}
                    />
                    Operational
                </div>
            </div>
        </div>
    )
}

function NavItem({
    icon,
    label,
    active,
}: {
    icon: React.ReactNode
    label: string
    active?: boolean
}) {
    return (
        <div
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition`}
            style={{
                background: active
                    ? `rgb(var(--primary) / 0.12)`
                    : `transparent`,
                color: active
                    ? `rgb(var(--foreground))`
                    : `rgb(var(--muted))`,
            }}
        >
            {icon}
            {label}
        </div>
    )
}

function MainPanel() {
    return (
        <div className="p-6 space-y-6 rounded-lg panel-highlight">
            <TopBar />

            <TelemetryRow />

            <div className="grid grid-cols-3 gap-4">
                <BoatFeed />
                <Chart title="Stability Control" />
                <Chart title="Power Output" />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <ProgrammingStudio />
                <SystemLogs />
            </div>
        </div>
    )
}

function TopBar() {
    return (
        <div
            className={`flex items-center justify-between pb-4`}
            style={{
                borderBottom: `1px solid rgb(var(--border))`,
            }}
        >
            <div className={`text-sm font-medium tracking-wide`}
                style={{ color: `rgb(var(--muted))` }}>
                Vessel Testing Environment
            </div>

            <Badge
                style={{
                    background: `rgb(var(--primary) / 0.15)`,
                    color: `rgb(var(--primary))`,
                }}
            >
                Live Telemetry
            </Badge>
        </div>
    )
}

function TelemetryRow() {
    return (
        <div className="grid grid-cols-4 gap-4">
            <Metric label="Speed" value="14.2 knots" trend="+2.1%" />
            <Metric label="Depth" value="32 m" trend="-1.2%" />
            <Metric label="Wave Height" value="1.4 m" trend="+0.3%" />
            <Metric label="Autonomy" value="Enabled" trend="Stable" />
        </div>
    )
}

function Metric({
    label,
    value,
    trend,
}: {
    label: string
    value: string
    trend: string
}) {
    return (
        <div
            className="rounded-lg panel-highlight p-4"
            style={{
                border: "1px solid rgb(var(--border))",
                background: "rgb(var(--surface))",
            }}
        >
            <p className="text-xs text-[rgb(var(--muted))]">{label}</p>

            <p className="text-lg font-semibold mt-1 text-[rgb(var(--muted))]">{value}</p>

            <p className="text-xs mt-1 text-[rgb(var(--primary))]">{trend}</p>
        </div>
    )
}

function BoatFeed() {
    return (
        <div
            className={`rounded-lg panel-highlight`}
            style={{
                border: `1px solid rgb(var(--border))`,
                background: `rgb(var(--surface))`,
            }}
        >
            <div
                className={`flex items-center justify-between px-3 py-2`}
                style={{
                    borderBottom: `1px solid rgb(var(--border))`,
                    color: `rgb(var(--muted))`,
                }}
            >
                <span className={`text-xs`}>Boat Telemetry Feed</span>

                <span
                    className={`text-[10px] px-2 py-0.5 rounded`}
                    style={{
                        background: `rgb(var(--primary) / 0.15)`,
                        color: `rgb(var(--primary))`,
                    }}
                >
                    STREAM
                </span>
            </div>

            <div className="p-3 space-y-2 text-[9px] font-mono">

                <FeedItem
                    time="12:41:02"
                    label="Autopilot engaged"
                    value="route_alpha"
                />

                <FeedItem
                    time="12:41:05"
                    label="Wave sensor"
                    value="1.4m"
                />

                <FeedItem
                    time="12:41:09"
                    label="Stability correction"
                    value="+0.3°"
                />

                <FeedItem
                    time="12:41:12"
                    label="Throttle adjustment"
                    value="62%"
                />

                <FeedItem
                    time="12:41:16"
                    label="Navigation update"
                    value="sector_4"
                />

            </div>
        </div>
    )
}

function FeedItem({
    time,
    label,
    value,
}: {
    time: string
    label: string
    value: string
}) {
    return (
        <div
            className={`flex items-center justify-between rounded px-2 py-1`}
            style={{
                background: `rgb(var(--background))`,
                border: `1px solid rgb(var(--border))`,
            }}
        >
            <span style={{ color: `rgb(var(--muted))` }}>
                {time}
            </span>

            <span className="hidden font-xs lg:block" style={{ color: `rgb(var(--foreground))` }}>
                {label}
            </span>

            <span
                style={{
                    color: `rgb(var(--primary))`,
                }}
            >
                {value}
            </span>
        </div>
    )
}

function Chart({ title }: { title: string }) {
    return (
        <div
            className={`rounded-lg p-4`}
            style={{
                border: `1px solid rgb(var(--border))`,
                background: `rgb(var(--surface))`,
            }}
        >
            <p
                className={`text-xs mb-3`}
                style={{ color: `rgb(var(--muted))` }}
            >
                {title}
            </p>

            <div className="h-32 flex items-end gap-1">
                {[40, 60, 50, 70, 65, 80, 55, 75].map((h, i) => (
                    <div
                        key={i}
                        className="flex-1 rounded-sm transition-all"
                        style={{
                            height: `${h}%`,
                            background: `rgb(var(--primary) / 0.6)`,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

function ProgrammingStudio() {
    return (
        <div
            className="rounded-lg"
            style={{
                border: "1px solid rgb(var(--border))",
                background: "rgb(var(--surface))",
            }}
        >
            <div
                className="text-xs px-3 py-2"
                style={{
                    borderBottom: "1px solid rgb(var(--border))",
                    color: "rgb(var(--muted))",
                }}
            >
                Programming Studio
            </div>

            <div
                className="p-4 text-xs font-mono overflow-auto"
                style={{ background: "rgb(var(--background))" }}
            >
                {`autopilot.initialize()

if wave_height > 1.5:
    adjust_stability()

set_course("test_zone_alpha")

telemetry.monitor()
`}
            </div>
        </div>
    )
}

function SystemLogs() {
    return (
        <div
            className="rounded-lg p-4 text-xs font-mono space-y-2"
            style={{
                border: "1px solid rgb(var(--border))",
                background: "rgb(var(--surface))",
            }}
        >
            <p className="text-[rgb(var(--muted))]">System Logs</p>

            <p>
                <span className="text-[rgb(var(--muted))]">12:41:02 Autopilot initialized</span>
            </p>

            <p>
                <span className="text-[rgb(var(--muted))]">12:41:05 Stability module active</span>
            </p>

            <p>
                <span className="text-[rgb(var(--muted))]">12:41:11 Navigation route loaded</span>
            </p>

            <p>
                <span className="text-[rgb(var(--muted))]">12:41:16 Telemetry streaming</span>
            </p>
        </div>
    )
}