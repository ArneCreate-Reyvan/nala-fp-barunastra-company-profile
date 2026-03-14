"use client"

import { Button } from "@/components/ui/button"
import { HeroSystemPanel } from "./layout/HeroSystemPanel"

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-24 px-4 md:px-6" id="#">
      <div className="studio-lighting absolute inset-0 pointer-events-none" />
      <div className="max-w-6xl mx-auto text-center">

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          Designing Systems That Move Industries Forward
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          We develop advanced technologies and infrastructure that enable
          organizations to operate with precision, intelligence, and scale.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex sm:flex-row justify-center items-center gap-4">

          <div className="ghost-wrap">

            <div className="ghost ghost-outer"></div>
            <div className="ghost ghost-inner"></div>

            <Button
              variant="outline"
              size="lg"
              className="hover-tech relative z-10 hover:!border-[rgb(var(--primary))] hover:!bg-[rgb(var(--primary))] hover:!text-black"
            >
              Explore Projects
            </Button>

          </div>

          <div className="ghost-wrap">

            <div className="ghost ghost-outer"></div>
            <div className="ghost ghost-inner"></div>

            <Button
              variant="outline"
              size="lg"
              className="hover-tech relative z-10 hover:!border-[rgb(var(--primary))] hover:!bg-[rgb(var(--primary))] hover:!text-black"
            >
              Contact
            </Button>

          </div>

        </div>

      </div>

      <div className="hero-lighting pointer-events-none" />

      {/* Floating system UI */}
      <div className="hidden md:block mt-20 max-w-6xl mx-auto hero-perspective px-4">
        <HeroSystemPanel />
      </div>

      <div className="md:hidden mt-12 text-sm text-center text-muted-foreground">
        Autonomous systems interface preview available on larger screens.
      </div>

    </section>
  )
}