import Welcome from "@/components/sections/welcome"
import About from "@/components/sections/about"
import Stack from "@/components/sections/stack"
import Certifications from "@/components/sections/certifications"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-background to-secondary">
      <Welcome />
      <div className="w-10/12 ">
        <hr />
      </div>
      <About />
      <div className="w-10/12 ">
        <hr />
      </div>
      <Stack />
      <div className="w-10/12 ">
        <hr />
      </div>
      <Certifications />
      <div className="w-10/12 ">
        <hr />
      </div>
      <Contact />
    </main>
  )
}
