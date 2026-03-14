"use client"

import { useRef, useState } from "react"

export default function ContactPool() {

    const ref = useRef<HTMLDivElement>(null)

    const [ripples, setRipples] = useState<
        { x: number; y: number; id: number }[]
    >([])

    function createRipple(e: React.MouseEvent) {

        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()

        const ripple = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            id: Date.now()
        }

        setRipples(r => [...r, ripple])

        setTimeout(() => {
            setRipples(r => r.filter(x => x.id !== ripple.id))
        }, 1400)

    }

    return (

        <section className="pb-10 pt-20" id="contact">
            <div className="water-surface pointer-events-none" />
            <div className="px-4 md:px-6">

                <div
                    ref={ref}
                    onMouseDown={createRipple}
                    onTouchStart={(e) =>
                        createRipple(e as unknown as React.MouseEvent)
                    }
                    className="
                relative
                h-[520px] sm:h-[620px] md:h-[720px]
                rounded-3xl
                overflow-hidden

                border border-[rgb(var(--border))]
                bg-[rgb(var(--card))]

                shadow-[inset_0_1px_0_rgba(255,255,255,0.05),
                        inset_0_-20px_50px_rgba(0,0,0,0.6)]
            "
                >

                    {/* water depth */}

                    <div className="
                absolute inset-0
                bg-gradient-to-b
                from-transparent
                via-black/20
                to-black/60
                pointer-events-none
            " />

                    {/* ripples */}

                    {ripples.map(r => (

                        <span
                            key={r.id}
                            className="absolute ripple"
                            style={{
                                left: r.x,
                                top: r.y
                            }}
                        />

                    ))}

                    {/* contact card */}

                    <div className="
                absolute inset-0
                flex items-center justify-center
            ">

                        <div
                            className="
                    w-full max-w-[520px] p-6 sm:p-8 md:p-10
                    rounded-2xl
                    border border-[rgb(var(--border))]
                    bg-[rgb(var(--background))]
                    backdrop-blur
                    justify-center
                "
                        >

                            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                                Contact Us
                            </h2>

                            <p className="text-sm text-muted-foreground mb-6 md:mb-8 text-center">
                                Interested in collaborating or learning more about
                                our autonomous systems? Send us a message.
                            </p>

                            {/* form */}

                            <div className="space-y-4">

                                <input
                                    placeholder="Your name"
                                    className="contact-input"
                                />

                                <input
                                    placeholder="Email"
                                    className="contact-input"
                                />

                                <textarea
                                    placeholder="Message"
                                    className="contact-input h-24 sm:h-32"
                                />

                                <button className="contact-button">
                                    Send Message
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>

    )

}