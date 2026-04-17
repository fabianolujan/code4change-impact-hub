import { motion } from "framer-motion";

const ods = [
  {
    number: 4,
    title: "Educación de Calidad",
    description: "Brindando acceso a educación STEM gratuita para estudiantes con recursos limitados.",
    color: "oklch(0.60 0.20 25)",
    borderColor: "border-orange-400/40",
    glowColor: "bg-orange-400/5",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
    borderColor: "border-red-400/40",
    glowColor: "bg-red-400/5",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
    borderColor: "border-pink-400/40",
    glowColor: "bg-pink-400/5",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
      </svg>
    ),
  },
];

export function ImpactSection() {
  return (
    <section id="impacto" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/20 to-background" />
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
          <p className="text-gray-300 font-medium max-w-xl mx-auto">
            Nuestras acciones están alineadas con los ODS de las Naciones Unidas para
            construir un futuro más justo e inclusivo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ods.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.18 }}
              className={`relative glass-card rounded-2xl p-8 text-center hover:scale-[1.02] transition-all duration-300 overflow-hidden border ${item.borderColor}`}
            >
              {/* Decorative big number */}
              <span
                className="absolute -top-4 -right-2 font-display font-black text-[7rem] leading-none select-none pointer-events-none"
                style={{ color: `color-mix(in oklch, ${item.color} 8%, transparent)` }}
              >
                {item.number}
              </span>

              <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 ${item.glowColor}`}
                style={{ backgroundColor: `color-mix(in oklch, ${item.color} 18%, transparent)`, color: item.color }}
              >
                {item.icon}
              </div>

              <div
                className="relative inline-block text-xs font-bold font-display px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: `color-mix(in oklch, ${item.color} 15%, transparent)`, color: item.color }}
              >
                ODS {item.number}
              </div>

              <h3 className="relative font-display font-bold text-foreground text-lg mb-3">{item.title}</h3>
              <p className="relative text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
