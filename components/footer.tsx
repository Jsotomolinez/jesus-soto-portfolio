import type React from "react"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("bg-background", className)}>
      <div className="px-4 py-12 md:py-16">
        {/* Info sections */}
        <div className="flex justify-around space-y-4 gap-5 text-center">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <div className="text-sm text-muted-foreground">
              <p>Desarrollo web full stack. <br />
                 Ingeniero químico en formación.
              </p>
            </div>
          </div>
          {/* <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Inicio
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Servicios
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Productos
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Acerca de
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Contacto
              </Link>
            </nav>
          </div> */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Venezuela, edo Carabobo</p>
              <p>jsotomolinez12@gmail.com</p>
              <p>+58 412-0499985</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Mis redes</h3>
            <div className="flex flex-col items-center md:flex-row px-2">
              <Link href="https://www.linkedin.com/in/jesus-alejandro-soto-molinez-0909b5345" target="blank" className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}>
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com/Jsotomolinez" target="blank" className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}>
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground ">
            &copy; {new Date().getFullYear()} Jesús Soto. Todos los derechos reservados.
          </p>
          {/* <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground">
              Términos
            </Link>
            <Link href="#" className="hover:text-foreground">
              Privacidad
            </Link>
            <Link href="#" className="hover:text-foreground">
              Cookies
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
