import SectionPage from "@/components/SectionPage";
import Image from "next/image";

export default function PersonePage() {
  return (
    <SectionPage title="PERSONE" subtitle="Intenditori e collezionisti" description="Custodi di memoria e cultura meccanica, per chi trasforma la passione in patrimonio." heroImage="/images/PERSONE.jpeg">
      <p className="text-[var(--color-warm-gray)] leading-relaxed mb-10 text-center max-w-2xl mx-auto">
        Storie e volti della community delle moto ReVint. Persone che
        vivono ogni giorno la passione per le moto d&apos;epoca.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-black tracking-wide mb-4" style={{ fontFamily: "var(--font-body)" }}>Le Nostre Storie</h2>
          <p className="text-[var(--color-warm-gray)] leading-relaxed mb-4">
            Dietro ogni moto d&apos;epoca c&apos;è una storia. Collezionisti,
            restauratori, piloti e semplici appassionati che condividono la
            stessa passione per le due ruote meccaniche.
          </p>
          <p className="text-[var(--color-warm-gray)] leading-relaxed">
            Scopri le storie di chi vive ogni giorno con moto classiche e
            condividi la tua esperienza con la community.
          </p>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <Image src="/images/Immagine_RAD_1.jpg" alt="People and motorcycles" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {["/images/image12.jpeg", "/images/image6.jpeg", "/images/image10.jpeg"].map((src, i) => (
          <div key={i} className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image src={src} alt={`Person ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
        ))}
      </div>
    </SectionPage>
  );
}
