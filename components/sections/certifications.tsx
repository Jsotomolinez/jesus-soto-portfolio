'use client'

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useVisibility } from "@/app/hooks/opacity";

export default function Certifications() {
  const isVisible = useVisibility("certifications");

  return (
    <section
      className={`container py-12 md:py-24 lg:py-32 transition-opacity duration-1500 ease-initial ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      id="certifications"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            Certificaciones
        </h1>
        <div className="flex flex-col items-center gap-5 md:grid md:grid-cols-2">
          <div className="flex items-center md:justify-end px-20">
            <div className="relative">
              <div className="absolute inset-0 w-full h-full rounded-full blur-md bg-emerald-700 dark:bg-blue-500">
              </div>
              <Avatar>
                <AvatarImage
                  src="images/certifications/harvard-university.svg"
                  alt="harvard-university"
                />
                <AvatarFallback>H</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start justify-center gap-2">
            <h3 className="max-w-[700px] text-2xl text-muted-foreground">
              Harvard University - CS50
            </h3>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Cs50p: Introudcción a la programación con python.
              <br /> <br />
            </p>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Cs50SQL: Introducción a las bases de datos con SQL.
              <br /> <br />
            </p>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Cs50x: Introducción a las ciencias de la computación
              <br /> <br />
            </p>
          </div>
        </div>
        <h3 className="max-w-[700px] text-2xl text-muted-foreground">
          Y muchas horas de escribir código y aprender por mi cuenta.
        </h3>
      </div>
    </section>
  )
}