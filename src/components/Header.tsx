"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/musei", label: "Musei" },
  { href: "/ricambi", label: "Ricambi" },
  { href: "/registro", label: "Registro Storico" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/club", label: "Club" },
  { href: "/manuali", label: "Manuali" },
  { href: "/restauro", label: "Restauro" },
  { href: "/persone", label: "Persone" },
  { href: "/about", label: "Chi Siamo" },
  { href: "/contatti", label: "Contatti" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setScrolled(currentY > 50);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    } else {
      setVisible(false);
      document.body.style.overflow = "";
      const timer = setTimeout(() => setMounted(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <header
      className="sticky top-0 transition-all duration-300 ease-in-out -mx-2 px-2 md:mx-0 md:px-0"
      style={{
        zIndex: 9998,
        backgroundColor: scrolled && !hidden ? "rgba(130,130,130,0.5)" : "transparent",
        backdropFilter: scrolled && !hidden ? "blur(5px)" : "none",
        WebkitBackdropFilter: scrolled && !hidden ? "blur(5px)" : "none",
        transform: hidden && !isOpen ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between">
        {/* Desktop: nav links LEFT, logo RIGHT */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm uppercase tracking-wider hover:text-black transition-colors ${pathname === item.href ? "font-extrabold text-black underline underline-offset-4" : "text-[var(--color-charcoal)]"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile: burger LEFT - hidden when menu is open */}
        <button
          onClick={() => setIsOpen(true)}
          className={`lg:hidden p-2 -ml-2 text-[var(--color-charcoal)] transition-opacity duration-200 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Logo - RIGHT on both mobile and desktop */}
        <Link href="/" className="shrink-0">
          <Image
            id="header-logo"
            src="/images/logo.png"
            alt="ReVint"
            width={40}
            height={40}
            className="w-6 h-6 md:w-10 md:h-10"
          />
        </Link>
      </div>

      {/* Mobile nav - fullscreen overlay via portal */}
      {mounted &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              className="lg:hidden fixed inset-0 transition-opacity duration-500 ease-out"
              style={{
                backgroundColor: "rgba(255,255,255,0.9)",
                zIndex: 9997,
                opacity: visible ? 1 : 0,
              }}
              onClick={() => setIsOpen(false)}
            />
            {/* Side panel - slides from left */}
            <nav
              className="lg:hidden fixed top-0 left-0 bottom-0 w-[70%] flex flex-col rounded-r-[4rem] overflow-hidden transition-transform duration-500 ease-out"
              style={{
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: 9999,
                transform: visible ? "translateX(0)" : "translateX(-100%)",
              }}
            >
              <div className="flex items-center px-4 py-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 -ml-2 text-white"
                  aria-label="Close menu"
                >
                  <Menu size={24} />
                </button>
              </div>
              <div className="flex-1 px-6 py-4 flex flex-col justify-between overflow-y-auto">
                <div className="flex flex-col gap-1">
                  {navItems.filter(item => item.href !== "/about" && item.href !== "/contatti").map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-xs uppercase tracking-wider py-1.5 transition-colors ${pathname === item.href ? "font-bold text-white" : "text-white/70 hover:text-white"}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-1 pt-4">
                  {navItems.filter(item => item.href === "/about" || item.href === "/contatti").map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-xs uppercase tracking-wider py-1.5 transition-colors ${pathname === item.href ? "font-bold text-white" : "text-white/70 hover:text-white"}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </>,
          document.body
        )}
    </header>
  );
}
