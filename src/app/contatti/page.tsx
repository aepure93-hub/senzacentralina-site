import { MapPin, Phone, Mail, Instagram } from "lucide-react";

export default function ContattiPage() {
  return (
    <>
      <section className="bg-[var(--color-beige-light)] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-lg font-bold text-black tracking-[0.35em] mb-4 md:hidden" style={{ fontFamily: "var(--font-body)" }}>CONTATTI</h1>
          <p className="text-[var(--color-warm-gray)] leading-relaxed max-w-xl mx-auto">
            Contattaci per informazioni, collaborazioni o semplicemente per
            condividere la tua passione per le moto d&apos;epoca.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white/60 border border-[var(--color-beige)]/40 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-beige-light)] flex items-center justify-center shrink-0">
              <MapPin size={18} className="text-[var(--color-charcoal)]" />
            </div>
            <div>
              <h3 className="font-bold tracking-wide mb-1">Indirizzo</h3>
              <p className="text-sm text-[var(--color-warm-gray)]">Via dei Mille<br />Roma - 00125</p>
            </div>
          </div>

          <div className="bg-white/60 border border-[var(--color-beige)]/40 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-beige-light)] flex items-center justify-center shrink-0">
              <Phone size={18} className="text-[var(--color-charcoal)]" />
            </div>
            <div>
              <h3 className="font-bold tracking-wide mb-1">Telefono</h3>
              <p className="text-sm text-[var(--color-warm-gray)]">06 / ...</p>
            </div>
          </div>

          <div className="bg-white/60 border border-[var(--color-beige)]/40 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-beige-light)] flex items-center justify-center shrink-0">
              <Mail size={18} className="text-[var(--color-charcoal)]" />
            </div>
            <div>
              <h3 className="font-bold tracking-wide mb-1">E-mail</h3>
              <p className="text-sm text-[var(--color-warm-gray)]">info@revint.it</p>
            </div>
          </div>

          <div className="bg-white/60 border border-[var(--color-beige)]/40 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-beige-light)] flex items-center justify-center shrink-0">
              <Instagram size={18} className="text-[var(--color-charcoal)]" />
            </div>
            <div>
              <h3 className="font-bold tracking-wide mb-1">Instagram</h3>
              <p className="text-sm text-[var(--color-warm-gray)]">@revint</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
