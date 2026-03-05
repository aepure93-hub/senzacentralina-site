import SectionPage from "@/components/SectionPage";
import Image from "next/image";

export default function ClubPage() {
  return (
    <SectionPage title="CLUB" subtitle="Comunità d'élite" description="Club e associazioni selezionate, per condividere esperienze, eventi esclusivi e passioni autentiche." heroImage="/images/CLUB.jpg">
      <p className="text-[var(--color-warm-gray)] leading-relaxed mb-10 text-center max-w-2xl mx-auto">
        Unisciti ai motoclub dedicati alle moto classiche. Condividi la
        passione, partecipa a raduni e scopri eventi dedicati al mondo delle
        moto d&apos;epoca.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <Image src="/images/Immagine_RAD_2.jpg" alt="Raduno moto d'epoca" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-black tracking-wide mb-4" style={{ fontFamily: "var(--font-body)" }}>La Community</h2>
          <p className="text-[var(--color-warm-gray)] leading-relaxed mb-4">
            I motoclub sono il cuore pulsante del mondo delle moto d&apos;epoca.
            Luoghi dove appassionati si incontrano per condividere esperienze,
            conoscenze e la gioia di guidare moto ReVint.
          </p>
          <p className="text-[var(--color-warm-gray)] leading-relaxed">
            Raduni, gite, eventi e tanto altro. Trova il club più vicino a te o
            crea il tuo gruppo di appassionati.
          </p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          <Image src="/images/Immagine_RAD_1.jpg" alt="Motorcycle event" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          <Image src="/images/image12.jpeg" alt="Vintage riders" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>
    </SectionPage>
  );
}
