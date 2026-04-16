import { motion } from "framer-motion";

const leaders = [
  {
    name: "Luana Herrera",
    role: "Fundadora y Directora General",
    quote: "\"Hazlo, y si tienes miedo hazlo con miedo\"",
    bio: "Becaria de UNICEF en el programa +ChicasTec. Participante de STEM para Todas y diversos programas de voluntariado. Creó Code4Change para ampliar el acceso a la educación STEM en comunidades vulnerables.",
    initials: "LH",
    gradient: "from-primary to-teal",
  },
  {
    name: "Alexandra Sullca",
    role: "CoFundadora",
    quote: "",
    bio: "Joven líder con experiencia en voluntariado y enseñanza virtual a niños. Clasificada a la segunda fase de la Olimpiada de Informática. Estudiante de Ingeniería de Software en la UPC.",
    initials: "AS",
    gradient: "from-teal to-chart-3",
  },
  {
    name: "Alexandra Villanueva",
    role: "Directora General de Contenido",
    quote: "",
    bio: "Estudiante de quinto año de secundaria apasionada por la comunicación y el impacto social. Lidera la creación y difusión de contenidos que fortalecen la identidad digital de Code4Change.",
    initials: "AV",
    gradient: "from-chart-3 to-gold",
  },
];

const tutors = ["Valeria Ortiz", "Piero"];

export function TeamSection() {
  return (
    <section id="equipo" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">
            El Equipo
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Líderes del <span className="gradient-text">Cambio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Code4Change nació en 2024 tras la experiencia de Luana como becaria de UNICEF, con la
            visión de democratizar el acceso a educación tecnológica en el Perú.
          </p>
        </motion.div>

        {/* Leaders */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {leaders.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${person.gradient} flex items-center justify-center mx-auto mb-4`}>
                <span className="font-display text-xl font-bold text-primary-foreground">{person.initials}</span>
              </div>
              <h3 className="font-display font-bold text-foreground text-lg">{person.name}</h3>
              <p className="text-primary text-sm font-semibold mb-3">{person.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{person.bio}</p>
              {person.quote && (
                <p className="text-xs italic text-gold">{person.quote}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Tutors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <h3 className="font-display font-bold text-foreground text-xl mb-4">Tutores Voluntarios</h3>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6">
            Nuestros tutores acompañan y orientan a estudiantes en su proceso de aprendizaje en STEM,
            brindando apoyo académico, mentoría y motivación.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {tutors.map((name) => (
              <span
                key={name}
                className="glass-card px-5 py-2.5 rounded-xl text-sm text-foreground font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
