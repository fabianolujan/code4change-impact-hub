import { motion } from "framer-motion";

const events = [
  {
    emoji: "🚀",
    title: "Hackathon Technovation Girls",
    location: "Hackaton mundial – modalidad virtual",
    description: "Presentamos SafeWay, una plataforma digital orientada a mejorar la seguridad ciudadana, permitiendo reportar riesgos en tiempo real y acceder a ayuda de emergencia.",
    highlight: "",
  },
  {
    emoji: "⭐",
    title: "IV Cumbre de Jóvenes Líderes",
    location: "Tecsup & América Solidaria",
    description: "Espacio que reunió a jóvenes comprometidos con el liderazgo, la innovación y el impacto social, fortaleciendo competencias en trabajo colaborativo y pensamiento innovador.",
    highlight: "",
  },
  {
    emoji: "🎮",
    title: "Global Hackathon – Game Jam",
    location: "OPEN PUCP",
    description: "Evento dirigido a estudiantes de secundaria que fomenta la creatividad y la programación mediante el desarrollo de prototipos digitales y videojuegos.",
    highlight: "🏆 Segundo lugar",
  },
  {
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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/20 to-background" />
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
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-cyan z-10 mt-6" />

              {/* Content card */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <div className="glass-card rounded-2xl p-6">
                  <span className="text-2xl">{event.emoji}</span>
                  <h3 className="font-display font-bold text-foreground mt-2 mb-1">{event.title}</h3>
                  <p className="text-xs text-primary mb-3">📍 {event.location}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  {event.highlight && (
                    <span className="inline-block mt-3 text-xs font-bold bg-gold/15 text-gold px-3 py-1 rounded-full">
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
