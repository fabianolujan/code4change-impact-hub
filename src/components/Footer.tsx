import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Code4Change" className="h-11 w-auto" />
            <div>
              <p className="font-display font-bold text-foreground text-sm">Code4Change</p>
              <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} · Perú</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Tecnología y educación STEM para generar impacto social 🇵🇪
          </p>

          <a
            href="https://sites.google.com/view/code4change/inicio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:text-primary/80 transition-colors font-semibold font-display flex items-center gap-1"
          >
            Sitio oficial
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
