import Image from "next/image";
import SectionCard from "@/components/SectionCard";
import Carousel from "@/components/Carousel";
import AboutCarousel from "@/components/AboutCarousel";
import SplashScreen from "@/components/SplashScreen";
import { sections } from "@/data/places";

export default function HomePage() {
  return (
    <SplashScreen>
      {/* Hero Carousel */}
      <section className="md:max-w-6xl md:mx-auto md:mt-8 -mx-2">
        <Carousel />
        <div className="text-center px-6 py-6">
          <h2 className="text-xl md:text-2xl font-bold tracking-wider text-[var(--color-charcoal)] mb-2" style={{ fontFamily: "var(--font-body)" }}>
            PER CHI COLLEZIONA LA STORIA
          </h2>
          <p className="max-w-xl mx-auto text-[var(--color-warm-gray)] text-sm md:text-base leading-relaxed font-sans">
            Il mondo delle motociclette d&apos;epoca raccontato e custodito con cura
          </p>
        </div>
      </section>

      {/* Section Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-6">
          {sections.map((section, i) => {
            const isWide = i === 4 || i === 7;
            return (
              <div key={section.id} className={isWide ? "col-span-2 sm:col-span-1" : ""}>
                <SectionCard {...section} wide={isWide} />
              </div>
            );
          })}
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 md:py-24 -mx-2 md:mx-0" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
        <div className="-mx-0 md:mx-auto md:max-w-6xl md:px-4 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div className="-mx-0">
            <AboutCarousel />
          </div>
          <div className="px-4 mt-8 md:mt-0 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[0.1em] mb-6 text-white" style={{ fontFamily: "var(--font-body)" }}>
              ABOUT US
            </h2>
            <p className="text-white/80 leading-relaxed mb-4 font-sans">
              At REVINT we bring together museums, historical registers,
              spare parts, retailers and stories from people who live every day
              with classic motorcycles.
            </p>
            <p className="text-white/80 leading-relaxed mb-6 font-sans">
              A space for those who love to ride, restore and keep alive the
              memory of pre-electronics motorcycles.
            </p>
            <a
              href="/about"
              className="inline-block px-8 py-3 bg-white text-black text-sm uppercase tracking-wider rounded-full hover:bg-white/80 transition-colors font-sans"
            >
              Scopri di più
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              "/images/image6.jpeg",
              "/images/image7.jpg",
              "/images/image10.jpeg",
              "/images/image13.jpg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SplashScreen>
  );
}
