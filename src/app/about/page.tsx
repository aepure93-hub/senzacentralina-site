import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className="text-center pt-0 pb-3 md:hidden">
        <h1 className="text-lg md:text-2xl font-bold text-black tracking-[0.35em]" style={{ fontFamily: "var(--font-body)" }}>ABOUT US</h1>
      </div>
      <section className="relative aspect-square overflow-hidden -mx-2 md:-mx-0">
        <Image src="/images/Immagine_RAD_2.jpg" alt="About Us" fill className="object-cover" priority />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold tracking-wide mb-6">Chi Siamo</h2>
            <p className="text-[var(--color-warm-gray)] leading-relaxed mb-4">
              At REVINT we bring together museums, historical registers,
              spare parts, retailers and stories from people who live every day
              with classic motorcycles.
            </p>
            <p className="text-[var(--color-warm-gray)] leading-relaxed">
              A space for those who love to ride, restore and keep alive the
              memory of pre-electronics motorcycles.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src="/images/image6.jpeg" alt="Moto Guzzi classic" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden md:order-1">
            <Image src="/images/image7.jpg" alt="Norton motorcycles" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="md:order-2">
            <h2 className="text-3xl font-bold tracking-wide mb-6">La Nostra Missione</h2>
            <p className="text-[var(--color-warm-gray)] leading-relaxed mb-4">
              Crediamo che le moto d&apos;epoca siano un patrimonio culturale da
              preservare. Ogni moto racconta una storia, ogni motore ha
              un&apos;anima.
            </p>
            <p className="text-[var(--color-warm-gray)] leading-relaxed">
              Il nostro obiettivo è creare una piattaforma dove appassionati,
              collezionisti e professionisti possano incontrarsi, condividere e
              mantenere viva la tradizione delle moto meccaniche.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
