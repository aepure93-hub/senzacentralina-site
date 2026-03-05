import Image from "next/image";
import Link from "next/link";

interface SectionCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  wide?: boolean;
}

export default function SectionCard({ title, description, image, href, wide }: SectionCardProps) {
  return (
    <Link href={href} className="group block">
      {/* Mobile: photo + title below */}
      <div className="sm:hidden">
        <div className={`relative rounded-xl overflow-hidden ${wide ? "aspect-[2/1]" : "aspect-square"}`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes={wide ? "100vw" : "50vw"}
          />
        </div>
        <h3 className="text-center text-xs font-normal tracking-wider mt-2 text-[var(--color-charcoal)]" style={{ fontFamily: "var(--font-body)" }}>
          {title}
        </h3>
      </div>

      {/* Desktop: overlay style */}
      <div className="hidden sm:block relative aspect-[3/4] rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-lg font-bold tracking-wider mb-1">
            {title}
          </h3>
          <p className="text-white/75 text-xs leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
