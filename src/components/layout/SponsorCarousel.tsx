"use client"

import Image from "next/image"

const sponsors = [
    { name: "Semen Indonesia", logo: "/assets/sponsor/semenIndoSponsor.jpg" },
    { name: "Petrokimia", logo: "/assets/sponsor/petrokimiaSponsor.webp" },
    { name: "PAL", logo: "/assets/sponsor/palSponsor.jpg" },
    { name: "Telkomsel", logo: "/assets/sponsor/telkomselSponsor.png" },
    { name: "PLN", logo: "/assets/sponsor/plnSponsor.jpg" },
    { name: "Intel", logo: "/assets/sponsor/intelSponsor.png" },
    { name: "Buaya Aerotech", logo: "/assets/sponsor/buayaSponsor.jpg" },
    { name: "Rekaindo", logo: "/assets/sponsor/rekaindoSponsor.png" },
    { name: "Chemposite", logo: "/assets/sponsor/chempositeSponsor.jpg" },
    { name: "Pelindo", logo: "/assets/sponsor/pelindoSponsor.png" },
]

export function SponsorCarousel() {
    return (
        <div className="relative mt-16 md:mt-24 overflow-hidden">

            {/* label */}

            <p
                className="text-xs sm:text-sm text-center mb-2 md:mb-10 tracking-widest uppercase"
                style={{ color: `rgb(var(--muted))` }}
            >
                Trusted by companies in Indonesia
            </p>

            <div className="relative w-full sponsor-fade py-6 md:py-8">

                <div className="flex sponsor-track gap-4 md:gap-6">

                    {[...sponsors, ...sponsors].map((sponsor, i) => (

                        <div key={i} className="sponsor-ghost">

                            <div className="sponsor-item">

                                <Image
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    width={280}
                                    height={160}
                                    className="sponsor-logo w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-auto"
                                />

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}
