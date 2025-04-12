'use client';

import { useVisibility } from "@/app/hooks/opacity";

export default function About() {
  const isVisible = useVisibility("about");

  return (
    <section
      className={`container py-12 md:py-24 lg:py-32 transition-opacity duration-1500 ease-initial ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      id="about"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            Acerca de mi
        </h1>
        <h3 className="max-w-[700px] text-2xl text-muted-foreground">
          Me gustan los desafíos y aprender cosas diferentes,
        </h3>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Soy un estudiante de ingeniería química en la universidad de Carabobo al cual le apasiona la programación y el desarrollo de software. 
          Me gusta aprender cosas nuevas y enfrentarme a nuevos retos. Me considero una persona creativa, 
          analítica y con una gran capacidad de resolución de problemas. Siempre estoy buscando mejorar mis habilidades y 
          aprender nuevas tecnologías.
          <br /> <br /> 
        </p>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Participé en la sociedad de ingenieros automotrices de mi universidad donde pude liderar equipos de trabajo en ambientes estresantes y coordinar actividades complejas.
          <br /> <br /> 
        </p>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Formé parte del instituto de búsqueda y salvamento (I-SAR) durante 4 años en donde enfrenté todo tipo de situaciones,
           desde rescates en montaña hasta rescates en montañas a siniestros viales o incluso simplemente hacer que una persona se sienta segura en su peor momento.
          <br /> <br /> 
        </p>
        
      </div>
    </section>
  )
}