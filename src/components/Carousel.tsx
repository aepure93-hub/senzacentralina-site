"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/MOTO DIETRO.jpg", alt: "Classic motorcycle rear view" },
  { src: "/images/GILERA.jpg", alt: "Gilera" },
  { src: "/images/MOTO GUZZI 1.jpeg", alt: "Moto Guzzi" },
  { src: "/images/NORTON.jpg", alt: "Norton" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="flex flex-col">
      {/* Images container */}
      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Dots - below the images */}
      <div className="flex justify-center gap-3 py-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              i === current
                ? "bg-gray-500"
                : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
