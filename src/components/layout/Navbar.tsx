"use client"

import { useState, useEffect } from "react"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto"
    }, [open])

    return (
        <header className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur bg-black/40">
            <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 md:px-6">

                {/* Logo */}
                <Link href="/" className="text-lg font-semibold tracking-tight">
                    NALA
                </Link>

                {/* Navigation */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="gap-8 text-sm text-muted-foreground">

                        <NavigationMenuItem>
                            <Link href="#about" className="underline hover:underline
          hover:decoration-[rgb(var(--primary))] decoration-transparent
          transition-all duration-800">About</Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="#vessel" className="underline hover:underline
          hover:decoration-[rgb(var(--primary))] decoration-transparent
          transition-all duration-800">Our Vessel</Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="#teams" className="underline hover:underline
          hover:decoration-[rgb(var(--primary))] decoration-transparent
          transition-all duration-800">Teams</Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="#contact" className="underline hover:underline
          hover:decoration-[rgb(var(--primary))] decoration-transparent
          transition-all duration-800">Contact Us</Link>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>

                <button
                    className="md:hidden ml-auto"
                    aria-label="Toggle Menu"
                    onClick={() => setOpen(!open)}
                >
                    <Menu size={24} />
                </button>

                {/* CTA */}
                <div className="ghost-wrap">

                    <div className="ghost ghost-outer"></div>
                    <div className="ghost ghost-inner"></div>

                    <Button
                        variant="outline"
                        size="lg"
                        className="hover-tech relative z-10 hover:!border-[rgb(var(--primary))] hover:!bg-[rgb(var(--primary))] hover:!text-black hidden md:flex"
                    >
                        Contact
                    </Button>

                </div>

            </div>
            {open && (
                <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur">
                    <div className="flex flex-col gap-4 px-6 py-6 text-sm">

                        <Link href="#about" onClick={() => setOpen(false)}>About</Link>
                        <Link href="#vessel" onClick={() => setOpen(false)}>Our Vessel</Link>
                        <Link href="#teams" onClick={() => setOpen(false)}>Teams</Link>
                        <Link href="#contact" onClick={() => setOpen(false)}>Contact Us</Link>

                        <Button variant="secondary" className="mt-2">
                            Contact
                        </Button>

                    </div>
                </div>
            )}
        </header>
    )
}