"use client"

import { ArrowRight } from "lucide-react"

type Props = {
    title: string
    imageA: string
    imageB: string
}

export default function TechCard({ title, imageA, imageB }: Props) {
    return (
        <div className="group relative aspect-[16/9]">

            {/* SCI-FI TRAIL FRAME */}
            <div
                className="
        absolute inset-0 rounded-xl
        border border-[#FFE600]/0
        scale-100
        group-hover:border-[#FFE600]/70
        group-hover:scale-[1.05]
        transition-all duration-300
        pointer-events-none
        "
            >
                <div className="absolute -left-2 top-6 h-10 w-[2px] bg-[#FFE600]" />
                <div className="absolute -left-2 top-6 h-[2px] w-6 bg-[#FFE600]" />

                <div className="absolute -right-2 bottom-6 h-10 w-[2px] bg-[#FFE600]" />
                <div className="absolute -right-2 bottom-6 h-[2px] w-6 bg-[#FFE600]" />
            </div>

            {/* CARD */}
            <div
                className="
        relative h-full w-full
        rounded-xl overflow-hidden
        border border-white/40
        group-hover:border-[#FFE600]
        transition-all duration-300
        group-hover:translate-x-3
        group-hover:scale-[1.04]
        "
            >

                {/* MEDIA */}
                <div className="absolute inset-0">

                    <img
                        src={imageA}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />

                    <img
                        src={imageB}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />

                </div>

                {/* gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* title */}
                <div className="absolute bottom-4 left-4 text-white text-lg font-medium">
                    {title}
                </div>

                {/* arrow */}
                <div
                    className="
          absolute bottom-4 right-4
          opacity-0 translate-x-3
          group-hover:opacity-100
          group-hover:translate-x-0
          transition duration-300
          "
                >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#FFE600] bg-black/40 text-[#FFE600]">
                        <ArrowRight size={18} />
                    </div>
                </div>

            </div>
        </div>
    )
}