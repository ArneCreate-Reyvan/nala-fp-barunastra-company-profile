"use client"

import Image from "next/image"

function Member({
    name,
    role,
    img,
    gender
}: {
    name: string
    role: string
    img?: string
    gender: "male" | "female"
}) {
    const defaultMale = "/assets/team/profileDefault-male.jpg"
    const defaultFemale = "/assets/team/profileDefault-female.jpg"

    const profileImage =
        img ?? (gender === "female" ? defaultFemale : defaultMale)
    return (

        <div className="group relative member-card" id="teams">

            <div className="member-image relative rounded-lg border border-[rgb(var(--border))]">

                <Image
                    src={profileImage}
                    alt={name}
                    width={500}
                    height={600}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 300px"
                    className="object-cover w-full h-[200px] sm:h-[200px] md:h-[320px] lg:h-[360px] transition-transform rounded-lg duration-500 group-hover:scale-105"
                />

            </div>

            <div className="mt-3 md:mt-5 text-center md:text-left"> 

                <h3
                    className="
                    mb-0
          text-sm md:text-lg font-medium
          underline
          decoration-transparent
          transition-all duration-800
          group-hover:underline
          group-hover:decoration-[rgb(var(--primary))]
          "
                    style={{ color: `rgb(var(--foreground))` }}
                >
                    {name}
                </h3>

                <p
                    className="text-sm mt-0"
                    style={{ color: `rgb(var(--muted))` }}
                >
                    {role}
                </p>

            </div>

        </div>
    )
}

export default function Team() {
    return (

        <section className="pt-24 md:pt-40 pb-16 md:pb-20">

            <div className="mx-auto max-w-7xl px-4 md:px-6">

                {/* section header */}

                <div className="max-w-2xl mb-14 md:mb-20 text-center md:text-left mx-auto md:mx-0">

                    <p
                        className="text-sm mb-4"
                        style={{ color: `rgb(var(--muted))` }}
                    >
                        Our Team
                    </p>

                    <h2
                        className="text-xl md:text-5xl font-semibold leading-tight"
                        style={{ color: `rgb(var(--foreground))` }}
                    >
                        Engineers and researchers building
                        the next generation of autonomous systems.
                    </h2>

                </div>


                {/* team grid */}

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-14">
                    <Member
                        name="Muhammad Parisya Rafif Bayanaka"
                        role="Hull Designer & Analisys"
                        gender="male"
                    />

                    <Member
                        name="Muhammad Ihsan Syawaludin"
                        role="Hull Designer & Analisys"
                        gender="male"
                    />

                    <Member
                        name="Muhammad Akbar Albaihaqi D."
                        role="Hull Production Engineer"
                        gender="male"
                    />

                    <Member
                        name="Wahyu Ardyansyah"
                        role="Metalworks Engineer"
                        gender="male"
                    />

                    <Member
                        name="Aufar Try Khadafi"
                        role="Propulsion System Engineer"
                        gender="male"
                    />

                    <Member
                        name="Muhammad Alim Hidayat"
                        role="Microcontroller Expert"
                        gender="male"
                    />
                    <Member
                        name="Ilham Malik Ibrahim"
                        role="Electrical Design Engineer"
                        gender="male"
                    />

                    <Member
                        name="Vincent Valentino"
                        role="Program Control Engineer"
                        gender="male"
                    />

                    <Member
                        name="Muhammad Azka Ananta K."
                        role="Program Vision Engineer"
                        gender="male"
                    />

                    <Member
                        name="Reyvan Attarajwa Andhara"
                        role="Web Developer"
                        gender="male"
                    />

                    <Member
                        name="Rayan Rajendra Rasendriya"
                        role="Social Brand Expert"
                        gender="male"
                    />

                    <Member
                        name="Caroly Sebastian Ranto"
                        role="Finance and Administration"
                        gender="female"
                    />
                    <Member
                        name="Gahyaka Gatur"
                        role="Sponsor and External"
                        gender="male"
                    />

                    <Member
                        name="Tasya Aurelia"
                        role="Sponsor and External"
                        gender="female"
                    />

                </div>

            </div>

        </section>

    )
}