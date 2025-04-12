'use client'

import ContactForm from "../contact-form";
import { useVisibility } from "@/app/hooks/opacity";


export default function Contact() {
  const isVisible = useVisibility("contact")

  return (
    <section
      className={`py-12 md:py-24 lg:py-32 transition-opacity duration-1500 ease-initial w-full ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      id="contact"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            Como contactarme
        </h1>
        <h3 className="max-w-[700px] text-2xl text-muted-foreground mb-5">
          Puedes escribir a mi correo electronico aquí
        </h3>
        <div className="relative  w-full lg:w-2/5">
          <div className="absolute inset-0 w-full h-full rounded-md blur-md bg-emerald-700 dark:bg-blue-500">
          </div>
          <div className="relative z-10 grid place-items-center h-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}