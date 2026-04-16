import { motion } from "framer-motion";

const events = [
  {
    number: "01",
    emoji: "🚀",
    title: "Hackathon Technovation Girls",
    location: "Hackaton mundial – modalidad virtual",
    description: "Presentamos SafeWay, una plataforma digital orientada a mejorar la seguridad ciudadana, permitiendo reportar riesgos en tiempo real y acceder a ayuda de emergencia.",
    highlight: "",
  },
  {
    number: "02",
    emoji: "⭐",
    title: "IV Cumbre de Jóvenes Líderes",
    location: "Tecsup & América Solidaria",
    description: "Espacio que reunió a jóvenes comprometidos con el liderazgo, la innovación y el impacto social, fortaleciendo competencias en trabajo colaborativo y pensamiento innovador.",
    highlight: "",
  },
  {
    number: "03",
    emoji: "🎮",
    title: "Global Hackathon – Game Jam",
    location: "OPEN PUCP",
    description: "Evento dirigido a estudiantes de secundaria que fomenta la creatividad y la programación mediante el desarrollo de prototipos digitales y videojuegos.",
    highlight: "🏆 Segundo lugar",
  },
  {
    number: "04",
    emoji: "🎤",
    title: "XXII Jornada Antropológica – UNFV",
    location: "Facultad de Humanidades, 24-28 noviembre",
    description: "Ponencia sobre el desarrollo de habilidades STEM y el impacto de la tecnología en la sociedad desde una perspectiva antropológica, reflexionando sobre los desafíos de la IA en Latinoamérica.",
    highlight: "",
  },
];

export function EventsSection() {
  return (
    <section id="eventos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/15 to-background" />
      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Eventos y Reconocimientos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Nuestras <span className="gradient-text">Participaciones</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-start gap-6 mb-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Numbered dot */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10 mt-4">
                <div className="w-10 h-10 rounded-full bg-background border-2 border-primary glow-cyan flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-xs">{event.number}</span>
                </div>
              </div>

              {/* Content card */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                <div className="glass-card rounded-2xl p-6 hover:scale-[1.01] transition-transform duration-300">
                  <span className="text-xl mb-3 block">{event.emoji}</span>
                  <h3 className="font-display font-bold text-foreground mb-1">{event.title}</h3>
                  <p className="text-xs text-primary font-medium mb-3 flex items-center gap-1">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                    {event.location}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  {event.highlight && (
                    <span className="inline-block mt-4 text-xs font-bold bg-gold/15 text-gold px-3 py-1.5 rounded-full border border-gold/20">
                      {event.highlight}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
