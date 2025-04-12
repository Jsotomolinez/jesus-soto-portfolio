'use client';

import { useVisibility } from "@/app/hooks/opacity";
import Image from "next/image";
import Link from "next/link";

export default function Stack() {
  const isVisible = useVisibility("stack");

  return (
    <section
      className={`container py-12 md:py-24 lg:py-32 transition-opacity duration-3000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      id="stack"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
          Mis tecnologías favoritas
        </h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="relative">
            <div className="absolute inset-0 w-full h-full rounded-full blur-sm bg-emerald-700 dark:bg-blue-500">
            </div>
            <Link href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/tech/fastapi.svg"
                alt="fastapi"
                width={100}
                height={100}
                className="relative flex size-20 md:size-30 shrink-0 overflow-hidden rounded-full bg-popover"
              />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 w-full h-full rounded-full blur-sm bg-emerald-700 dark:bg-blue-500">
            </div>
            <Link href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/tech/docker.svg"
                alt="docker"
                width={100}
                height={100}
                className="relative flex size-20 md:size-30 shrink-0 overflow-hidden rounded-full bg-popover"
              />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 w-full h-full rounded-full blur-sm bg-emerald-700 dark:bg-blue-500">
            </div>
            <Link href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/tech/python.svg"
                alt="python"
                width={100}
                height={100}
                className="relative flex size-20 md:size-30 shrink-0 overflow-hidden rounded-full bg-popover"
              />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 w-full h-full rounded-full blur-sm bg-emerald-700 dark:bg-blue-500">
            </div>
            <Link href="https://es.react.dev/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/tech/react.svg"
                alt="react"
                width={100}
                height={100}
                className="relative flex size-20 md:size-30 shrink-0 overflow-hidden rounded-full bg-popover"
              />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 w-full h-full rounded-full blur-sm bg-emerald-700 dark:bg-blue-500">
            </div>
            <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/tech/tailwind.svg"
                alt="tailwind"
                width={100}
                height={100}
                className="relative flex size-20 md:size-30 shrink-0 overflow-hidden rounded-full bg-popover"
              />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 w-full h-full rounded-full blur-sm bg-emerald-700 dark:bg-blue-500">
            </div>
            <Link href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/tech/typescript.svg"
                alt="typescript"
                width={100}
                height={100}
                className="relative flex size-20 md:size-30 shrink-0 overflow-hidden rounded-full bg-popover"
              />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 w-full h-full rounded-full blur-sm bg-emerald-700 dark:bg-blue-500">
            </div>
            <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/tech/next.svg"
                alt="nesxtjs"
                width={100}
                height={100}
                className="relative flex size-20 md:size-30 shrink-0 overflow-hidden rounded-full bg-popover"
              />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 w-full h-full rounded-full blur-sm bg-emerald-700 dark:bg-blue-500">
            </div>
            <Link href="https://zod.dev/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/tech/zod.svg"
                alt="zod"
                width={100}
                height={100}
                className="relative flex size-20 md:size-30 shrink-0 overflow-hidden rounded-full bg-popover"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}