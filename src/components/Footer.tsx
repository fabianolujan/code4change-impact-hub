export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-display font-bold">
          <span className="gradient-text">Code</span>
          <span className="text-foreground">4Change</span>
          <span className="font-normal ml-2">© {new Date().getFullYear()}</span>
        </div>
        <p>Tecnología y educación STEM para generar impacto social 🇵🇪</p>
      </div>
    </footer>
  );
}
