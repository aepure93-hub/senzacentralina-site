import { MapPin, Phone, Mail, Globe, ChevronDown } from "lucide-react";
import type { Place } from "./MapView";

interface PlaceCardProps {
  place: Place;
  selected?: boolean;
  expanded?: boolean;
  onClick?: () => void;
}

export default function PlaceCard({ place, selected, expanded = true, onClick }: PlaceCardProps) {
  return (
    <div
      id={`place-${place.id}`}
      onClick={onClick}
      style={{ fontFamily: "var(--font-body)" }}
      className={`border-[3px] px-4 py-2 transition-all cursor-pointer uppercase ${
        selected
          ? "border-black bg-transparent shadow-md"
          : "border-white/60 bg-transparent hover:border-white/80"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className={`font-normal tracking-wide text-xs ${expanded ? "mb-2" : "mb-0"}`}>{place.name}</h3>
        {!expanded && !selected && (
          <ChevronDown size={14} className="text-[var(--color-warm-gray)] shrink-0" />
        )}
      </div>
      {expanded && (
        <ul className="space-y-4 text-xs text-black/70">
          {place.address && (
            <li className="flex items-start gap-2">
              <MapPin size={13} className="mt-0.5 shrink-0" />
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(place.address + (place.city ? `, ${place.city}` : ""))}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="underline hover:text-[var(--color-charcoal)]"
              >
                {place.address}{place.city ? `, ${place.city}` : ""}
              </a>
            </li>
          )}
          {place.phone && (
            <li className="flex items-start gap-2">
              <Phone size={13} className="mt-0.5 shrink-0" />
              <a
                href={`tel:${place.phone.replace(/\s/g, "")}`}
                onClick={(e) => e.stopPropagation()}
                className="underline hover:text-[var(--color-charcoal)]"
              >
                {place.phone}
              </a>
            </li>
          )}
          {place.email && (
            <li className="flex items-start gap-2">
              <Mail size={13} className="mt-0.5 shrink-0" />
              <a
                href={`mailto:${place.email}`}
                onClick={(e) => e.stopPropagation()}
                className="underline hover:text-[var(--color-charcoal)]"
              >
                {place.email}
              </a>
            </li>
          )}
          {place.website && (
            <li className="flex items-start gap-2">
              <Globe size={13} className="mt-0.5 shrink-0" />
              <a
                href={place.website}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="underline hover:text-[var(--color-charcoal)]"
              >
                {place.website.replace(/^https?:\/\//, "")}
              </a>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
