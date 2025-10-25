import Welcome from "@/components/sections/welcome"
import About from "@/components/sections/about"
import Stack from "@/components/sections/stack"
import Certifications from "@/components/sections/certifications"
import Contact from "@/components/sections/contact"
import { ParticlesBackground } from "@/components/particles-background"
// import { Particles2 } from "@/components/particles-2"
// import { AtomsBackground } from "@/components/atoms"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-gradient-to-b from-background to-secondary">
      <ParticlesBackground />
      {/* <Particles2 /> */}
      {/* <AtomsBackground /> */}
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
