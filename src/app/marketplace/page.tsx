import SectionPage from "@/components/SectionPage";
import Image from "next/image";

export default function MarketplacePage() {
  const categories = [
    { title: "Moto Complete", image: "/images/MOTO GUZZI.jpg", description: "Moto d'epoca in vendita" },
    { title: "Ricambi & Accessori", image: "/images/RICAMBI.jpg", description: "Parti originali e aftermarket" },
    { title: "Documenti & Manuali", image: "/images/MANUALI.jpg", description: "Documentazione tecnica originale" },
  ];

  return (
    <SectionPage title="MARKETPLACE" subtitle="Incontri selezionati" description="Venditori scelti e acquirenti qualificati, con transazioni sicure e offerte di valore." heroImage="/images/MOTO GUZZI.jpeg">
      <p className="text-[var(--color-warm-gray)] leading-relaxed mb-10 text-center max-w-2xl mx-auto">
        Il tuo punto di riferimento per comprare e vendere moto d&apos;epoca,
        ricambi originali e documentazione tecnica.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image src={cat.image} alt={cat.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-white text-lg font-bold tracking-wider mb-1">{cat.title}</h3>
              <p className="text-white/75 text-sm">{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-[var(--color-warm-gray)] text-sm italic">Coming soon — Marketplace in fase di sviluppo</p>
      </div>
    </SectionPage>
  );
}
