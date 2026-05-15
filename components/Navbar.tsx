"use client";

import { useState } from "react";

const WA = "https://wa.me/523781122322";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-2xl font-bold text-ceemi-dark tracking-wider">
          CEEMI<span className="text-ceemi-beige"> SPA</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {["#servicios", "#paquetes", "#ubicacion", "#contacto"].map(
            (href, i) => (
              <a
                key={href}
                href={href}
                className="text-sm text-ceemi-dark hover:text-ceemi-beige transition-colors"
              >
                {["Servicios", "Paquetes", "Ubicación", "Contacto"][i]}
              </a>
            )
          )}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ceemi-beige text-white text-sm px-5 py-2 rounded-full hover:bg-ceemi-brown transition-colors"
          >
            Agendar cita
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span
            className={`block h-0.5 bg-ceemi-dark transition-all ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 bg-ceemi-dark transition-all ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 bg-ceemi-dark transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-ceemi-cream px-5 py-5 flex flex-col gap-4">
          {[
            ["#servicios", "Servicios"],
            ["#paquetes", "Paquetes"],
            ["#ubicacion", "Ubicación"],
            ["#contacto", "Contacto"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-ceemi-dark text-base"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ceemi-beige text-white text-sm text-center px-5 py-3 rounded-full"
            onClick={() => setOpen(false)}
          >
            Agendar cita
          </a>
        </div>
      )}
    </nav>
  );
}
