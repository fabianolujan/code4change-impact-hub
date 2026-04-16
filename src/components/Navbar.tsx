import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Programas", href: "#programas" },
  { label: "Impacto", href: "#impacto" },
  { label: "Equipo", href: "#equipo" },
  { label: "Eventos", href: "#eventos" },
  { label: "Únete", href: "#unete" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card border-b border-border/50 shadow-xl shadow-background/20"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Code4Change" className="h-12 w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.slice(0, -1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-accent/50 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#unete"
            className="ml-2 text-sm font-semibold bg-primary/15 text-primary border border-primary/30 px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            Únete
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-accent/50 transition-colors"
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-border/50"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground px-3 py-2.5 rounded-lg hover:bg-accent/50 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
