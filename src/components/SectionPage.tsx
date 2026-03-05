import Image from "next/image";

interface SectionPageProps {
  title: string;
  subtitle?: string;
  description?: string;
  heroImage: string;
  children: React.ReactNode;
}

export default function SectionPage({ title, subtitle, description, heroImage, children }: SectionPageProps) {
  return (
    <>
      <div className="text-center pt-0 pb-3 md:hidden">
        <h1 className="text-lg md:text-2xl font-bold text-black tracking-[0.35em]" style={{ fontFamily: "var(--font-body)" }}>
          {title}
        </h1>
      </div>
      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden -mx-2 md:max-w-6xl md:mx-auto md:rounded-xl">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </section>
      {(subtitle || description) && (
        <div className="text-center pt-8 pb-4 md:pt-10 md:pb-6">
          {subtitle && (
            <p className="text-sm md:text-lg italic text-black/70" style={{ fontFamily: "var(--font-body)" }}>
              {subtitle}
            </p>
          )}
          {description && (
            <p className="mt-1 text-xs md:text-sm text-black/60 max-w-xl mx-auto text-center px-4" style={{ fontFamily: "var(--font-body)" }}>
              {description}
            </p>
          )}
        </div>
      )}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        {children}
      </section>
    </>
  );
}
