import Image from "next/image";
import Link from "next/link";

export default function Logo(
  { href, src, alt, className }: { href: string; src: string; alt: string; className?: string }
) {
  return (
    <div className="relative">
      <div className="absolute inset-0 w-full h-full rounded-full blur-sm bg-blue-500">
      </div>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          alt={alt}
          width={100}
          height={100}
          className={`relative flex size-20 md:size-30 shrink-0 overflow-hidden rounded-full ${className ?? "bg-popover"}`}
        />
      </Link>
    </div>
  )
};