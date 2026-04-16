import { motion } from "framer-motion";
import teamLuana from "@/assets/team-luana.png";
import teamSullca from "@/assets/team-sullca.png";
import teamVillanueva from "@/assets/team-villanueva.png";

const leaders = [
  {
    name: "Luana Herrera",
    role: "Fundadora y Directora General",
    quote: "\"Hazlo, y si tienes miedo hazlo con miedo\"",
    bio: "Becaria de UNICEF en el programa +ChicasTec. Participante de STEM para Todas y diversos programas de voluntariado. Creó Code4Change para ampliar el acceso a la educación STEM en comunidades vulnerables.",
    image: teamLuana,
    imagePosition: "right" as const,
  },
  {
    name: "Alexandra Sullca",
    role: "CoFundadora",
    quote: "",
    bio: "Joven líder con experiencia en voluntariado y enseñanza virtual a niños. Clasificada a la segunda fase de la Olimpiada de Informática. Estudiante de Ingeniería de Software en la UPC.",
    image: teamSullca,
    imagePosition: "left" as const,
  },
  {
    name: "Alexandra Villanueva",
    role: "Directora General de Contenido",
    quote: "",
    bio: "Estudiante de quinto año de secundaria apasionada por la comunicación y el impacto social. Lidera la creación y difusión de contenidos que fortalecen la identidad digital de Code4Change.",
    image: teamVillanueva,
    imagePosition: "right" as const,
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
          className="text-center mb-16"
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

        {/* Leaders - alternating layout */}
        <div className="flex flex-col gap-16 max-w-5xl mx-auto">
          {leaders.map((person, i) => {
            const isImageLeft = person.imagePosition === "left";

            return (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col ${isImageLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-12`}
              >
                {/* Image */}
                <div className="w-64 h-72 md:w-72 md:h-80 shrink-0 rounded-2xl overflow-hidden border-2 border-border">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className={`flex-1 ${isImageLeft ? "md:text-left" : "md:text-left"} text-center`}>
                  <h3 className="font-display font-bold text-foreground text-2xl mb-1">
                    {person.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-4">{person.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {person.bio}
                  </p>
                  {person.quote && (
                    <p className="text-sm italic text-gold mt-2">{person.quote}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tutors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
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
