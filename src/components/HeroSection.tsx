import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import missionPhoto from "@/assets/mission-photo.png";

const stats = [
  { value: "4", label: "Cursos STEM" },
  { value: "100%", label: "Gratuito" },
  { value: "4+", label: "Eventos" },
  { value: "2024", label: "Fundación" },
];

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/5 w-96 h-96 rounded-full bg-teal/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 section-container text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="Code4Change" className="h-36 md:h-52 mx-auto mb-6 drop-shadow-2xl" />
          <p className="text-xl md:text-2xl text-primary font-display font-semibold mb-6 tracking-widest">
            ROMPEMOS BRECHAS TECNOLÓGICAS
          </p>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed mb-10">
            Somos una iniciativa juvenil que utiliza la tecnología y la educación STEM como
            herramientas para generar impacto social y reducir brechas de género en el Perú.
          </p>
          <a
            href="#unete"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-9 py-4 rounded-xl glow-cyan transition-all duration-300 hover:scale-105 hover:brightness-110 text-base"
          >
            Únete al cambio
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl py-4 px-3 text-center">
              <p className="font-display font-bold text-2xl md:text-3xl gradient-text">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Who we are */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          {/* Section label */}
          <p className="text-xs font-display font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-10 text-center">
            — Quiénes Somos —
          </p>

          {/* Photo + Mission + Vision grid */}
          <div className="grid md:grid-cols-2 gap-5">

            {/* Misión */}
            <div className="glass-card rounded-2xl p-7 text-left flex flex-col gap-5 border border-primary/20 hover:border-primary/40 transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-display font-bold uppercase tracking-widest text-primary mb-0.5">Misión</p>
                  <h3 className="font-display text-lg font-bold text-foreground leading-tight">Educación STEM para todos</h3>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                Empoderar a niños, niñas y adolescentes a través de la educación STEM, reduciendo
                brechas de género y acceso en comunidades vulnerables, para que se conviertan en
                agentes de cambio en sus entornos.
              </p>

              <ul className="space-y-2.5 pt-1 border-t border-border/40">
                {[
                  "Educación STEM gratuita y accesible",
                  "Reducción de brechas de género en tecnología",
                  "Empoderamiento de comunidades vulnerables",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs text-gray-400">
                    <span className="w-4 h-4 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visión */}
            <div className="glass-card rounded-2xl p-7 text-left flex flex-col gap-5 border border-teal/20 hover:border-teal/40 transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal/20 flex items-center justify-center text-teal shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                    <path d="M3.05 11a9 9 0 0 1 17.9 0" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-display font-bold uppercase tracking-widest text-teal mb-0.5">Visión</p>
                  <h3 className="font-display text-lg font-bold text-foreground leading-tight">Referente nacional en tech social</h3>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                Ser una organización referente en el Perú que transforma la vida de jóvenes
                mediante la tecnología con propósito social, democratizando el acceso a
                herramientas digitales en todo el país.
              </p>

              <ul className="space-y-2.5 pt-1 border-t border-border/40">
                {[
                  "Referente nacional en educación tecnológica",
                  "Acceso democratizado a herramientas digitales",
                  "Transformación social a través del conocimiento",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs text-gray-400">
                    <span className="w-4 h-4 rounded-full bg-teal/20 text-teal flex items-center justify-center shrink-0">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Values row */}
          <div className="mt-5 glass-card rounded-2xl px-8 py-5 flex flex-wrap items-center justify-center gap-3 border border-border/30">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-muted-foreground mr-2">Nuestros valores</span>
            {[
              { label: "Inclusión", color: "bg-primary/15 text-primary border-primary/25" },
              { label: "Innovación", color: "bg-teal/15 text-teal border-teal/25" },
              { label: "Impacto Social", color: "bg-gold/15 text-gold border-gold/25" },
              { label: "Colaboración", color: "bg-purple-400/15 text-purple-300 border-purple-400/25" },
              { label: "Equidad", color: "bg-pink-400/15 text-pink-300 border-pink-400/25" },
            ].map((v) => (
              <span key={v.label} className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${v.color}`}>
                {v.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
