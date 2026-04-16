import { motion } from "framer-motion";
import teamLuana from "@/assets/team-luana.png";
import teamSullca from "@/assets/team-sullca.png";
import teamVillanueva from "@/assets/team-villanueva.png";
import tutorValeria from "@/assets/tutor-valeria.jpg";
import tutorPiero from "@/assets/tutor-piero.png";

const leaders = [
  {
    name: "Luana Herrera",
    role: "Fundadora y Directora General",
    quote: "\"Hazlo, y si tienes miedo hazlo con miedo\"",
    bio: "Becaria de UNICEF en el programa +ChicasTec. Participante de STEM para Todas y diversos programas de voluntariado. Creó Code4Change para ampliar el acceso a la educación STEM en comunidades vulnerables.",
    image: teamLuana,
    imagePosition: "right" as const,
    accent: "border-primary/40",
    glow: "from-primary/20 via-transparent to-transparent",
  },
  {
    name: "Alexandra Sullca",
    role: "CoFundadora",
    quote: "",
    bio: "Joven líder con experiencia en voluntariado y enseñanza virtual a niños. Clasificada a la segunda fase de la Olimpiada de Informática. Estudiante de Ingeniería de Software en la UPC.",
    image: teamSullca,
    imagePosition: "left" as const,
    accent: "border-teal/40",
    glow: "from-teal/20 via-transparent to-transparent",
  },
  {
    name: "Alexandra Villanueva",
    role: "Directora General de Contenido",
    quote: "",
    bio: "Estudiante de quinto año de secundaria apasionada por la comunicación y el impacto social. Lidera la creación y difusión de contenidos que fortalecen la identidad digital de Code4Change.",
    image: teamVillanueva,
    imagePosition: "right" as const,
    accent: "border-gold/40",
    glow: "from-gold/20 via-transparent to-transparent",
  },
];

const tutors = [
  {
    name: "Valeria Ortiz",
    role: "TUTORA DE DESARROLLO WEB",
    image: tutorValeria,
    accent: "border-primary/30",
  },
  {
    name: "Piero",
    role: "TUTOR DE C",
    image: tutorPiero,
    accent: "border-teal/30",
  },
];

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

        {/* Leaders */}
        <div className="flex flex-col gap-14 max-w-5xl mx-auto">
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
                {/* Photo with glow effect */}
                <div className="relative shrink-0">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${person.glow} blur-xl scale-110`} />
                  <div className={`relative w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden border-2 ${person.accent}`}>
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-display font-bold text-foreground text-2xl mb-1">{person.name}</h3>
                  <span className="inline-block text-xs font-bold font-display px-3 py-1 rounded-full bg-primary/15 text-primary mb-4">
                    {person.role}
                  </span>
                  <p className="text-muted-foreground leading-relaxed mb-3">{person.bio}</p>
                  {person.quote && (
                    <p className="text-sm italic text-gold border-l-2 border-gold/40 pl-3 mt-4">{person.quote}</p>
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
          transition={{ delay: 0.2 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="font-display font-bold text-foreground text-2xl mb-2">Tutores Voluntarios</h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Nuestros tutores acompañan y orientan a estudiantes en su proceso de aprendizaje en STEM,
              brindando apoyo académico, mentoría y motivación.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {tutors.map((tutor) => (
              <div key={tutor.name} className={`glass-card rounded-2xl p-6 flex items-center gap-5 border ${tutor.accent}`}>
                <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 rounded-xl overflow-hidden">
                  <img src={tutor.image} alt={tutor.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-xl md:text-2xl">{tutor.name}</h4>
                  <p className="text-primary font-bold text-xs uppercase tracking-wider mt-1">{tutor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
