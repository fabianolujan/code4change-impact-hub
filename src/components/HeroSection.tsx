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

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8">
            <div className="w-full md:w-[45%] rounded-2xl overflow-hidden shadow-2xl shrink-0">
              <img
                src={missionPhoto}
                alt="Niños aprendiendo tecnología"
                className="w-full h-full object-cover min-h-[260px]"
              />
            </div>
            <div className="w-full md:flex-1 flex flex-col gap-4">
              <div className="glass-card rounded-2xl p-6 text-left border-l-[3px] border-primary flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">Misión</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Empoderar a niños, niñas y adolescentes a través de la educación STEM, reduciendo
                  brechas de género y acceso en comunidades vulnerables, para que se conviertan en
                  agentes de cambio en sus entornos.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 text-left border-l-[3px] border-teal flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-teal/20 flex items-center justify-center text-teal shrink-0">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">Visión</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ser una organización referente en el Perú que transforma la vida de jóvenes
                  mediante la tecnología con propósito social y democratizando el acceso a
                  herramientas digitales.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
