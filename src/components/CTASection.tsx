import { motion } from "framer-motion";

const profiles = [
  "Ciencias de la computación",
  "Ingeniería de software",
  "Desarrollo web",
  "Educación STEM",
  "Gestión de proyectos sociales",
];

const activities = [
  { num: "01", text: "Asesoría académica en programación" },
  { num: "02", text: "Mentoría y acompañamiento a estudiantes" },
  { num: "03", text: "Coordinación logística de eventos" },
  { num: "04", text: "Difusión y promoción educativa" },
  { num: "05", text: "Desarrollo de material educativo STEM" },
];

const benefits = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    text: "Experiencia en educación no formal",
    color: "text-primary bg-primary/10",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    text: "Desarrollo de habilidades de liderazgo",
    color: "text-gold bg-gold/10",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    text: "Red de contactos en tecnología y educación",
    color: "text-teal bg-teal/10",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="18" height="18" x="3" y="3" rx="2" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
    text: "Certificación de voluntariado",
    color: "text-purple-300 bg-purple-400/10",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "Oportunidad de impacto social medible",
    color: "text-pink-300 bg-pink-400/10",
  },
];

export function CTASection() {
  return (
    <section id="unete" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/10 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-primary/4 blur-[130px] pointer-events-none" />

      <div className="relative section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">Únete</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Sé parte del <span className="gradient-text">cambio</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Buscamos voluntarios apasionados por la tecnología y la educación que quieran
            generar impacto en las nuevas generaciones del Perú.
          </p>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-5">

          {/* Perfiles — spans 3 cols, tag cloud style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="md:col-span-3 glass-card rounded-2xl p-7 border border-primary/20 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-display font-bold uppercase tracking-widest text-primary">Perfiles Buscados</p>
                <h3 className="font-display font-bold text-foreground text-base leading-tight">¿Eres el perfil que buscamos?</h3>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed -mt-2">
              Buscamos estudiantes universitarios o egresados con interés en educación,
              tecnología e impacto social. No importa el nivel de experiencia, lo que
              más valoramos es la actitud y las ganas de generar cambio.
            </p>

            <div className="flex flex-wrap gap-2">
              {profiles.map((p) => (
                <span key={p} className="text-sm font-medium text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
                  {p}
                </span>
              ))}
              <span className="text-sm font-medium text-muted-foreground bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                + más carreras
              </span>
            </div>

            {/* Mini quote */}
            <div className="border-t border-border/30 pt-4 flex items-start gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary/40 shrink-0 mt-0.5" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
              <p className="text-xs text-muted-foreground italic leading-relaxed">
                "La tecnología con propósito puede transformar vidas. Únete y sé parte de ese proceso."
              </p>
            </div>
          </motion.div>

          {/* Right column — 2 rows */}
          <div className="md:col-span-2 flex flex-col gap-5">

            {/* Actividades — numbered steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="glass-card rounded-2xl p-6 border border-teal/20 flex flex-col gap-4 flex-1"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal/15 text-teal flex items-center justify-center shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="18" height="18" x="3" y="3" rx="2" /><path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <p className="font-display font-bold text-foreground text-sm">Actividades</p>
              </div>

              <ul className="space-y-2.5">
                {activities.map((a) => (
                  <li key={a.num} className="flex items-center gap-3">
                    <span className="font-display font-black text-[10px] text-teal/60 w-5 shrink-0">{a.num}</span>
                    <span className="text-xs text-muted-foreground leading-snug">{a.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Beneficios — icon rows */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="glass-card rounded-2xl p-6 border border-gold/20 flex flex-col gap-4 flex-1"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold/15 text-gold flex items-center justify-center shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <p className="font-display font-bold text-foreground text-sm">Beneficios</p>
              </div>

              <ul className="space-y-2">
                {benefits.map((b) => (
                  <li key={b.text} className="flex items-center gap-2.5">
                    <span className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${b.color}`}>
                      {b.icon}
                    </span>
                    <span className="text-xs text-muted-foreground leading-snug">{b.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href="https://linktr.ee/code4changee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display font-semibold px-10 py-4 rounded-xl glow-cyan text-lg transition-all duration-300 hover:scale-105 hover:brightness-110"
          >
            ¡Quiero ser voluntario!
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
