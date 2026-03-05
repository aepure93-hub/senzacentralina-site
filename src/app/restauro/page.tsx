import SectionPage from "@/components/SectionPage";
import Image from "next/image";

export default function RestauroPage() {
  return (
    <SectionPage title="RESTAURO" subtitle="Dare nuova vita alla storia" description="Officine e professionisti selezionati, per riportare le motociclette classiche al loro splendore." heroImage="/images/RESTAURO.jpg">
      <p className="text-[var(--color-warm-gray)] leading-relaxed mb-10 text-center max-w-2xl mx-auto">
        Professionisti e risorse per il restauro delle moto d&apos;epoca. Dalla
        meccanica alla carrozzeria, tutto per riportare in vita la tua moto
        classica.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <Image src="/images/image13.jpg" alt="Restauro moto" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-black tracking-wide mb-4" style={{ fontFamily: "var(--font-body)" }}>L&apos;Arte del Restauro</h2>
          <p className="text-[var(--color-warm-gray)] leading-relaxed mb-4">
            Il restauro di una moto d&apos;epoca è un&apos;arte che richiede
            passione, competenza e pazienza. Ogni dettaglio conta per riportare
            un veicolo storico al suo splendore originale.
          </p>
          <p className="text-[var(--color-warm-gray)] leading-relaxed">
            Trova i migliori restauratori, scopri tecniche e materiali, e
            condividi i tuoi progetti di restauro con la community.
          </p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
        {["/images/image3.jpeg", "/images/image5.jpeg", "/images/image9.jpeg"].map((src, i) => (
          <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
            <Image src={src} alt={`Restauro detail ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
        ))}
      </div>
    </SectionPage>
  );
}
