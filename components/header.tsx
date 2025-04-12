import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "./mode-toggle"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 px-3">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/icon.ico" alt="Icon" width={60} height={60} className="bg-popover rounded-full"/>
            <span className="font-bold text-xl">Jesús Soto</span>
          </Link>
        </div>

        {/* Navegación para escritorio */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="#welcome" className="text-sm font-medium transition-colors hover:text-primary">
            Inicio
          </Link>
          <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            Acerca de mi
          </Link>
          <Link href="#stack" className="text-sm font-medium transition-colors hover:text-primary">
            Stack
          </Link>
          <Link href="#certifications" className="text-sm font-medium transition-colors hover:text-primary">
            Certificaciones
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          

          {/* Menú móvil */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#welcome" className="text-sm font-medium transition-colors hover:text-primary">
                  Inicio
                </Link>
                <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                  Acerca de mi
                </Link>
                <Link href="#stack" className="text-sm font-medium transition-colors hover:text-primary">
                  Stack
                </Link>
                <Link href="#certifications" className="text-sm font-medium transition-colors hover:text-primary">
                  Certificaciones
                </Link>
                <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                  Contacto
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
