import SectionPage from "@/components/SectionPage";
import Image from "next/image";

export default function ManualiPage() {
  return (
    <SectionPage title="MANUALI" subtitle="Conoscenza tecnica" description="Archivio di manuali storici e guide per restauratori e appassionati che vogliono preservare l'autenticità." heroImage="/images/MANUALI.jpg">
      <p className="text-[var(--color-warm-gray)] leading-relaxed mb-10 text-center max-w-2xl mx-auto">
        Manuali tecnici e documentazione per il restauro e la manutenzione delle
        moto d&apos;epoca. Una raccolta di risorse indispensabili per ogni
        appassionato.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-black tracking-wide mb-4" style={{ fontFamily: "var(--font-body)" }}>Documentazione Tecnica</h2>
          <p className="text-[var(--color-warm-gray)] leading-relaxed mb-4">
            Manuali d&apos;officina, cataloghi ricambi, schemi elettrici e
            documentazione tecnica originale per le principali marche di moto
            d&apos;epoca.
          </p>
          <p className="text-[var(--color-warm-gray)] leading-relaxed">
            Dalle istruzioni di manutenzione ordinaria alle procedure di
            revisione completa, tutto ciò che serve per mantenere in vita la tua
            moto classica.
          </p>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <Image src="/images/image11.jpeg" alt="Vintage motorcycle manuals" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>
    </SectionPage>
  );
}
