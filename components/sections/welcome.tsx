'use client'

import { useVisibility } from "@/app/hooks/opacity"

export default function Welcome() {
  const isVisible = useVisibility("welcome")
  return (
    <section
      className={`container py-12 md:py-24 lg:py-32 transition-opacity duration-1500 ease-initial ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      id="welcome"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            Bienvenido a MiSitio personal
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Aquí encontrarás información sobre mí, mis tecnologías preferidas y cómo contactarme. Estoy emocionado de compartir mi trabajo y mis intereses contigo.
        </p>
      </div>
      <br /><br /><br /><br /><br />
    </section>
  )
}