import { motion } from "framer-motion";

const profiles = [
  "Ciencias de la computación",
  "Ingeniería de software",
  "Desarrollo web",
  "Educación STEM",
  "Gestión de proyectos sociales",
];

const benefits = [
  "Experiencia en educación no formal",
  "Desarrollo de habilidades de liderazgo",
  "Red de contactos en tecnología y educación",
  "Certificación de voluntariado",
  "Oportunidad de impacto social medible",
];

const activities = [
  "Asesoría académica en programación",
  "Mentoría y acompañamiento a estudiantes",
  "Coordinación logística de eventos",
  "Difusión y promoción educativa",
  "Desarrollo de material educativo STEM",
];

export function CTASection() {
  return (
    <section id="unete" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Únete
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Sé parte del <span className="gradient-text">cambio</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Buscamos voluntarios apasionados por la tecnología y la educación que quieran
            generar impacto en las nuevas generaciones del Perú.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Profiles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-foreground mb-3">Perfiles Buscados</h3>
            <ul className="space-y-2">
              {profiles.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Activities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center text-teal mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-foreground mb-3">Actividades</h3>
            <ul className="space-y-2">
              {activities.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center text-gold mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-foreground mb-3">Beneficios</h3>
            <ul className="space-y-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://sites.google.com/view/code4change/inicio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-10 py-4 rounded-xl glow-cyan text-lg transition-transform hover:scale-105"
          >
            ¡Quiero ser voluntario!
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
