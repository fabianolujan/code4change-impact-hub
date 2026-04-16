import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Code4Change" className="h-8 w-auto" />
          <span className="font-normal">© {new Date().getFullYear()}</span>
        </div>
        <p>Tecnología y educación STEM para generar impacto social 🇵🇪</p>
      </div>
    </footer>
  );
}
