import { motion } from "framer-motion";

const ods = [
  {
    number: 4,
    title: "Educación de Calidad",
    description: "Garantizamos acceso libre a educación STEM de calidad para estudiantes que de otro modo no tendrían esta oportunidad.",
    color: "#fb923c",
    tailwindBorder: "border-orange-400/30",
    tailwindGlow: "shadow-[0_0_40px_rgba(251,146,60,0.12)]",
    tailwindIconBg: "bg-orange-400/15 text-orange-400",
    tailwindBadge: "bg-orange-400/10 text-orange-300 border-orange-400/20",
    tailwindBar: "bg-orange-400",
    tailwindNum: "text-orange-400/10",
    points: [
      "Cursos 100% gratuitos y accesibles",
      "Asesorías virtuales y presenciales",
      "Material educativo adaptado a cada nivel",
    ],
    stat: { value: "4", label: "Cursos activos" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    number: 5,
    title: "Igualdad de Género",
    description: "Rompemos estereotipos cerrando la brecha de género en tecnología e inspirando a niñas a liderar el cambio digital.",
    color: "#f87171",
    tailwindBorder: "border-red-400/30",
    tailwindGlow: "shadow-[0_0_40px_rgba(248,113,113,0.12)]",
    tailwindIconBg: "bg-red-400/15 text-red-400",
    tailwindBadge: "bg-red-400/10 text-red-300 border-red-400/20",
    tailwindBar: "bg-red-400",
    tailwindNum: "text-red-400/10",
    points: [
      "Enfoque especial en niñas y adolescentes",
      "Modelos a seguir en ciencia y tecnología",
      "Espacios seguros de aprendizaje inclusivo",
    ],
    stat: { value: "50%+", label: "Estudiantes mujeres" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="5" />
        <path d="M12 13v8M9 18h6" />
      </svg>
    ),
  },
  {
    number: 10,
    title: "Reducción de Desigualdades",
    description: "Democratizamos el acceso a herramientas digitales en comunidades vulnerables para reducir la brecha tecnológica.",
    color: "#e879f9",
    tailwindBorder: "border-fuchsia-400/30",
    tailwindGlow: "shadow-[0_0_40px_rgba(232,121,249,0.12)]",
    tailwindIconBg: "bg-fuchsia-400/15 text-fuchsia-400",
    tailwindBadge: "bg-fuchsia-400/10 text-fuchsia-300 border-fuchsia-400/20",
    tailwindBar: "bg-fuchsia-400",
    tailwindNum: "text-fuchsia-400/10",
    points: [
      "Comunidades con acceso limitado a tecnología",
      "Sin requisitos económicos previos",
      "Alianzas con instituciones educativas públicas",
    ],
    stat: { value: "Lima", label: "y expansión nacional" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
      </svg>
    ),
  },
];

const globalStats = [
  { value: "2024", label: "Año de fundación" },
  { value: "3", label: "ODS alineados" },
  { value: "Perú", label: "País de impacto" },
  { value: "100%", label: "Gratuito siempre" },
];

export function ImpactSection() {
  return (
    <section id="impacto" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-primary/4 blur-[150px] pointer-events-none" />

      <div className="relative section-container">
        {/* Header */}
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

        {/* ODS Cards */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {ods.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative glass-card rounded-2xl overflow-hidden flex flex-col border ${item.tailwindBorder} ${item.tailwindGlow} hover:scale-[1.02] transition-all duration-300`}
            >
              {/* Top accent bar */}
              <div className={`h-1 w-full ${item.tailwindBar} opacity-70`} />

              {/* Decorative ODS number */}
              <span className={`absolute -bottom-2 -right-1 font-display font-black text-[8rem] leading-none select-none pointer-events-none ${item.tailwindNum}`}>
                {item.number}
              </span>

              <div className="relative p-6 flex flex-col flex-1 gap-5">
                {/* Icon + badge row */}
                <div className="flex items-center justify-between">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.tailwindIconBg}`}>
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${item.tailwindBadge}`}>
                    ODS {item.number}
                  </span>
                </div>

                {/* Title + description */}
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg leading-tight mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2 border-t border-border/30 pt-4">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-xs text-gray-400">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.tailwindBar} mt-1.5 shrink-0 opacity-80`} />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Stat chip */}
                <div className={`mt-auto rounded-xl border ${item.tailwindBadge} px-4 py-3 flex items-center gap-3`}>
                  <p className={`font-display font-black text-2xl leading-none`} style={{ color: item.color }}>{item.stat.value}</p>
                  <p className="text-xs text-gray-400 leading-tight">{item.stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* UN alignment banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 max-w-5xl mx-auto relative overflow-hidden rounded-2xl border border-primary/15 glass-card"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-teal/5" />
          <div className="relative px-8 py-6 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Left: UN logo placeholder + text */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-sm">Agenda 2030 · ONU</p>
                <p className="text-xs text-muted-foreground">Objetivos de Desarrollo Sostenible</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-10 bg-border/40" />

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-3 flex-1">
              {globalStats.map((s) => (
                <div key={s.label} className="text-center md:text-left">
                  <p className="font-display font-bold text-foreground text-lg leading-none">{s.value}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Right tag */}
            <div className="shrink-0 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
              Comprometidos con el cambio
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
