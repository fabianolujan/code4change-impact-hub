import { motion } from "framer-motion";

const events = [
  {
    number: "01",
    category: "Hackathon Internacional",
    categoryColor: "bg-primary/15 text-primary border-primary/25",
    accentBar: "bg-primary",
    dotBorder: "border-primary",
    dotText: "text-primary",
    title: "Hackathon Technovation Girls",
    location: "Hackathon mundial – modalidad virtual",
    description:
      "Presentamos SafeWay, una plataforma digital orientada a mejorar la seguridad ciudadana, permitiendo reportar riesgos en tiempo real y acceder a ayuda de emergencia.",
    award: null,
    year: "2024",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44L7 19H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2V9a4 4 0 0 1 .5-1.93" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44L17 19h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2V9a4 4 0 0 0-.5-1.93" />
      </svg>
    ),
  },
  {
    number: "02",
    category: "Cumbre de Liderazgo",
    categoryColor: "bg-gold/15 text-gold border-gold/25",
    accentBar: "bg-gold",
    dotBorder: "border-gold",
    dotText: "text-gold",
    title: "IV Cumbre de Jóvenes Líderes",
    location: "Tecsup & América Solidaria",
    description:
      "Espacio que reunió a jóvenes comprometidos con el liderazgo, la innovación y el impacto social, fortaleciendo competencias en trabajo colaborativo y pensamiento innovador.",
    award: null,
    year: "2024",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "03",
    category: "Competencia Nacional",
    categoryColor: "bg-purple-400/15 text-purple-300 border-purple-400/25",
    accentBar: "bg-purple-400",
    dotBorder: "border-purple-400",
    dotText: "text-purple-300",
    title: "Global Hackathon – Game Jam",
    location: "OPEN PUCP",
    description:
      "Evento dirigido a estudiantes de secundaria que fomenta la creatividad y la programación mediante el desarrollo de prototipos digitales y videojuegos.",
    award: "🏆 Segundo lugar",
    year: "2024",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 11h4M8 9v4M15 12h.01M18 10h.01" />
        <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
      </svg>
    ),
  },
  {
    number: "04",
    category: "Ponencia Académica",
    categoryColor: "bg-teal/15 text-teal border-teal/25",
    accentBar: "bg-teal",
    dotBorder: "border-teal",
    dotText: "text-teal",
    title: "XXII Jornada Antropológica – UNFV",
    location: "Facultad de Humanidades · 24-28 noviembre",
    description:
      "Ponencia sobre el desarrollo de habilidades STEM y el impacto de la tecnología en la sociedad desde una perspectiva antropológica, reflexionando sobre los desafíos de la IA en Latinoamérica.",
    award: null,
    year: "2024",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
];

const achievements = [
  { value: "4+", label: "Eventos", color: "gradient-text" },
  { value: "1", label: "Premio ganado", color: "text-gold" },
  { value: "2", label: "Hackathones", color: "text-primary" },
  { value: "Int'l", label: "Alcance global", color: "text-teal" },
];

export function EventsSection() {
  return (
    <section id="eventos" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/15 to-background" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/4 blur-[120px] pointer-events-none" />

      <div className="relative section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Eventos y Reconocimientos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nuestras <span className="gradient-text">Participaciones</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Representamos a Code4Change en eventos nacionales e internacionales, llevando
            soluciones tecnológicas con propósito social.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.13 }}
              className="relative flex gap-5 md:gap-7 mb-5 last:mb-0"
            >
              {/* Left: dot + line */}
              <div className="flex flex-col items-center shrink-0">
                <div className={`w-11 h-11 rounded-xl border-2 ${event.dotBorder} bg-background flex items-center justify-center ${event.dotText} z-10`}>
                  <span className="font-display font-black text-xs">{event.number}</span>
                </div>
                {i < events.length - 1 && (
                  <div className="w-px flex-1 mt-2 bg-gradient-to-b from-border/60 to-transparent" />
                )}
              </div>

              {/* Right: card */}
              <div className="flex-1 pb-5 last:pb-0">
                <div className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] transition-all duration-300 hover:-translate-y-0.5">
                  {/* Top accent bar */}
                  <div className={`h-[3px] w-full ${event.accentBar} opacity-80`} />

                  <div className="p-5 md:p-6">
                    {/* Top row: category + award */}
                    <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`inline-flex items-center gap-1.5 text-[10px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${event.categoryColor}`}>
                          <span className={event.dotText}>{event.icon}</span>
                          {event.category}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-medium bg-white/5 px-2 py-1 rounded-full">{event.year}</span>
                      </div>
                      {event.award && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold bg-gold/15 text-gold px-3 py-1.5 rounded-full border border-gold/30 shrink-0">
                          {event.award}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-foreground text-lg leading-tight mb-1.5">
                      {event.title}
                    </h3>

                    {/* Location */}
                    <p className={`text-xs font-semibold mb-3 flex items-center gap-1.5 ${event.dotText}`}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                      {event.location}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 max-w-3xl mx-auto glass-card rounded-2xl border border-primary/15 px-8 py-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {achievements.map((a, i) => (
              <div key={a.label} className="text-center">
                <p className={`font-display font-black text-3xl leading-none ${a.color}`}>{a.value}</p>
                <p className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider">{a.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
