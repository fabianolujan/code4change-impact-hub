import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import missionPhoto from "@/assets/mission-photo.png";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="relative z-10 section-container text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="Code4Change" className="h-36 md:h-52 mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-primary font-display font-semibold mb-6">
            ROMPEMOS BRECHAS TECNOLÓGICAS
          </p>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed mb-10">
            Somos una iniciativa juvenil que utiliza la tecnología y la educación STEM como
            herramientas para generar impacto social y reducir brechas de género en el Perú.
          </p>
          <a
            href="#unete"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-8 py-3.5 rounded-xl glow-cyan transition-transform hover:scale-105"
          >
            Únete al cambio
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          {/* Mission - image + text side by side */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden">
              <img src={missionPhoto} alt="Niños aprendiendo tecnología" className="w-full h-64 md:h-72 object-cover rounded-2xl" />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">Misión</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Empoderar a niños, niñas y adolescentes a través de la educación STEM, reduciendo
                brechas de género y acceso en comunidades vulnerables, para que se conviertan en
                agentes de cambio en sus entornos.
              </p>
            </div>
          </div>

          {/* Vision - centered below */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center text-teal">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">Visión</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ser una organización referente en el Perú que transforma la vida de jóvenes
              mediante la tecnología con propósito social y democratizando el acceso a
              herramientas digitales.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
