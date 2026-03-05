"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import PlaceCard from "@/components/PlaceCard";
import { museiItalia, museiEstero } from "@/data/places";
import type { Place } from "@/components/MapView";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

export default function MuseiPage() {
  const [tab, setTab] = useState<"italia" | "estero">("italia");
  const [selected, setSelected] = useState<Place | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleSelect = useCallback((place: Place) => {
    setSelected(place);
    setTimeout(() => {
      const card = document.getElementById(`place-${place.id}`);
      const container = listRef.current;
      if (card && container) {
        container.scrollTo({ top: card.offsetTop - container.offsetTop, behavior: "smooth" });
      }
    }, 100);
  }, []);
  const places = tab === "italia" ? museiItalia : museiEstero;
  const center: [number, number] = tab === "italia" ? [42.5, 12.5] : [48, 10];
  const zoom = tab === "italia" ? 5 : 3;

  return (
    <>
      <div className="text-center pt-0 pb-3 md:hidden">
        <h1 className="text-lg md:text-2xl font-bold text-black tracking-[0.35em]" style={{ fontFamily: "var(--font-body)" }}>MUSEI</h1>
      </div>
      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden -mx-2 md:max-w-6xl md:mx-auto md:rounded-xl">
        <Image src="/images/MUSEI.jpg" alt="Musei" fill className="object-cover" priority />
      </section>
      <div className="text-center pt-8 pb-4 md:pt-10 md:pb-6">
        <p className="text-sm md:text-lg italic text-black/70" style={{ fontFamily: "var(--font-body)" }}>Storia da scoprire</p>
        <p className="mt-1 text-xs md:text-sm text-black/60 max-w-xl mx-auto text-center px-4" style={{ fontFamily: "var(--font-body)" }}>Selezione di musei italiani e internazionali, con contatti e approfondimenti per esperienze autentiche.</p>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* Tabs */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <button
            onClick={() => { setTab("italia"); setSelected(null); }}
            className={`text-sm uppercase tracking-[0.2em] transition-colors ${
              tab === "italia" ? "text-black font-bold" : "text-[var(--color-warm-gray)] hover:text-black"
            }`}
          >
            Italia
          </button>
          <span className="text-black/20">|</span>
          <button
            onClick={() => { setTab("estero"); setSelected(null); }}
            className={`text-sm uppercase tracking-[0.2em] transition-colors ${
              tab === "estero" ? "text-black font-bold" : "text-[var(--color-warm-gray)] hover:text-black"
            }`}
          >
            Estero
          </button>
        </div>

        {/* Map - full width on mobile, 2/3 on desktop */}
        <div className="-mx-4 lg:mx-0 mb-6 lg:mb-0 lg:float-left lg:w-2/3 lg:pr-3">
          <div className="h-[400px] lg:h-[500px] lg:rounded-xl overflow-hidden">
            <MapView places={places} center={center} zoom={zoom} onSelect={handleSelect} selectedPlace={selected} />
          </div>
        </div>

        {/* Places list - full width on mobile, 1/3 sidebar on desktop */}
        <div ref={listRef} className="space-y-3 max-h-[300px] overflow-y-scroll overscroll-contain scroll-fade scrollbar-none lg:ml-[calc(66.666%+0.75rem)] lg:max-h-[500px] py-8" style={{ WebkitOverflowScrolling: "touch" }}>
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} selected={selected?.id === place.id} expanded={isMobile ? selected?.id === place.id : true} onClick={() => handleSelect(place)} />
          ))}
        </div>
        <div className="clear-both" />
      </section>
    </>
  );
}
