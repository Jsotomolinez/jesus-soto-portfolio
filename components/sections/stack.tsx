'use client';

import { useVisibility } from "@/app/hooks/opacity";
import Logo from "../ui/logo";

export default function Stack() {
  const isVisible = useVisibility("stack");

  return (
    <section
      className={`py-12 md:py-24 lg:py-32 transition-opacity duration-1500 ease-initial ${isVisible ? "opacity-100" : "opacity-0"}`} id="stack"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
          Mis tecnologías favoritas
        </h1>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-5">
          <Logo href="https://fastapi.tiangolo.com/" src="/images/tech/fastapi.svg" alt="fastapi" />
          <Logo href="https://www.docker.com/" src="/images/tech/docker.svg" alt="docker" />
          <Logo href="https://www.python.org/" src="/images/tech/python.svg" alt="python" />
          <Logo href="https://react.dev/" src="/images/tech/react.svg" alt="react" />
          <Logo href="https://tailwindcss.com/" src="/images/tech/tailwind.svg" alt="tailwind" />
          <Logo href="https://www.typescriptlang.org/" src="/images/tech/typescript.svg" alt="typescript" />
          <Logo href="https://nextjs.org/" src="/images/tech/next.svg" alt="nextjs" />
          <Logo href="https://www.postgresql.org/" src="/images/tech/postgresql.svg" alt="postgresql" />
          <Logo href="https://www.mongodb.com/" src="/images/tech/mongodb.svg" alt="mongodb" />
        </div>
      </div>
    </section>
  );
}