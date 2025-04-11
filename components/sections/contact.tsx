'use client'

import ContactForm from "../contact-form";
import { useVisibility } from "@/app/hooks/opacity";


export default function Contact() {
  const isVisible = useVisibility("contact")

  return (
    <section
      className={`container py-12 md:py-24 lg:py-32 transition-opacity duration-3000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      id="contact"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            Como contactarme
        </h1>
        <h3 className="max-w-[700px] text-2xl text-muted-foreground">
          Puedes escribir a mi correo electronico aquí
        </h3>
        <ContactForm />
      </div>
    </section>
  )
}