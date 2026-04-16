import { motion } from "framer-motion";

const ods = [
  {
    number: 4,
    title: "Educación de Calidad",
    description: "Brindando acceso a educación STEM gratuita para estudiantes con recursos limitados.",
    color: "oklch(0.60 0.20 25)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    number: 5,
    title: "Igualdad de Género",
    description: "Cerrando brechas de género en tecnología, empoderando a niñas y adolescentes.",
    color: "oklch(0.65 0.22 15)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="5" />
        <path d="M12 13v8M9 18h6" />
      </svg>
    ),
  },
  {
    number: 10,
    title: "Reducción de las Desigualdades",
    description: "Apoyando a estudiantes en situación vulnerable con acceso a herramientas digitales.",
    color: "oklch(0.65 0.18 330)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
      </svg>
    ),
  },
];

export function ImpactSection() {
  return (
    <section id="impacto" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/30 to-background" />
      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Nuestro Impacto
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Objetivos de <span className="gradient-text">Desarrollo Sostenible</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Nuestras acciones están alineadas con los ODS de las Naciones Unidas para
            construir un futuro más justo e inclusivo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ods.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card rounded-2xl p-8 text-center hover:scale-[1.03] transition-transform"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: `color-mix(in oklch, ${item.color} 20%, transparent)`, color: item.color }}
              >
                {item.icon}
              </div>
              <div
                className="inline-block text-xs font-bold font-display px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: `color-mix(in oklch, ${item.color} 15%, transparent)`, color: item.color }}
              >
                ODS {item.number}
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
