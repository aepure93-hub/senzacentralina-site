import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-white/80 mt-auto -mx-2 md:mx-0">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-bold tracking-[0.15em] text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            REVINT
          </h3>
          <p className="text-sm leading-relaxed text-white/60">
            A space for those who love to ride, restore and keep alive the memory
            of pre-electronics motorcycles.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
            Sezioni
          </h4>
          <ul className="space-y-2 text-sm">
            {["Musei", "Ricambi", "Registro", "Marketplace", "Club", "Manuali", "Restauro", "Persone"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
            Contatti
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Via dei Mille, Roma</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0" />
              <span>06 / ...</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <span>info@revint.it</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-4 text-xs text-white/40">
        © {new Date().getFullYear()} REVINT. All rights reserved.
      </div>
    </footer>
  );
}
