import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/Hero"
import Platform  from "@/components/Platform"
import Vessel from "@/components/Vessel"
import Team from "@/components/Team"
import ContactPool from "@/components/ContactPool"
import { Contact } from "lucide-react"

export default function Home() {
  return (
    <main>

      <Navbar />
      <Hero />
      <Platform />
      <Vessel />
      <Team />
      <ContactPool />
    </main>
  )
}