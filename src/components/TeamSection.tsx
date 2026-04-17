import { motion } from "framer-motion";
import teamLuana from "@/assets/team-luana.png";
import teamSullca from "@/assets/team-sullca.png";
import teamVillanueva from "@/assets/team-villanueva.png";
import tutorValeria from "@/assets/tutor-valeria.jpg";
import tutorPiero from "@/assets/tutor-piero.png";

const founder = {
  name: "Luana Herrera",
  role: "Fundadora y Directora General",
  quote: "Hazlo, y si tienes miedo hazlo con miedo",
  bio: "Creó Code4Change para ampliar el acceso a la educación STEM en comunidades vulnerables del Perú. Becaria de UNICEF en el programa +ChicasTec, participante de STEM para Todas y de diversos programas de voluntariado internacional.",
  image: teamLuana,
  achievements: ["Becaria UNICEF · +ChicasTec", "STEM para Todas", "Voluntariado internacional"],
};

const coleaders = [
  {
    name: "Alexandra Sullca",
    role: "Co-Fundadora",
    bio: "Joven líder con experiencia en voluntariado y enseñanza virtual a niños. Clasificada a la segunda fase de la Olimpiada de Informática. Estudiante de Ingeniería de Software en la UPC.",
    image: teamSullca,
    accent: "border-teal/30",
    accentBar: "bg-teal",
    badgeColor: "bg-teal/10 text-teal border-teal/20",
    glowColor: "from-teal/25 via-transparent to-transparent",
    tags: ["Olimpiada de Informática", "Ing. de Software · UPC"],
  },
  {
    name: "Alexandra Villanueva",
    role: "Directora de Contenido",
    bio: "Estudiante de quinto año de secundaria apasionada por la comunicación y el impacto social. Lidera la creación y difusión de contenidos que fortalecen la identidad digital de Code4Change.",
    image: teamVillanueva,
    accent: "border-gold/30",
    accentBar: "bg-gold",
    badgeColor: "bg-gold/10 text-gold border-gold/20",
    glowColor: "from-gold/25 via-transparent to-transparent",
    tags: ["Comunicación & contenido", "Impacto social"],
  },
];

const tutors = [
  {
    name: "Valeria Ortiz",
    role: "Tutora de Desarrollo Web",
    image: tutorValeria,
    bio: "Guía a estudiantes en la creación de páginas web desde cero, cubriendo HTML, CSS y JavaScript con un enfoque práctico y orientado a proyectos reales.",
    topics: ["HTML & CSS", "JavaScript", "Diseño responsivo"],
    accentBar: "bg-primary",
    border: "border-primary/25",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
    topicColor: "bg-primary/8 text-primary/80 border-primary/15",
    glowColor: "bg-primary/15",
    ringColor: "border-primary/40",
  },
  {
    name: "Piero",
    role: "Tutor de Programación C/C++",
    image: tutorPiero,
    bio: "Enseña programación competitiva y algorítmica con C/C++, preparando a estudiantes para olimpiadas de informática y el pensamiento computacional avanzado.",
    topics: ["C / C++", "Algoritmos", "Programación competitiva"],
    accentBar: "bg-teal",
    border: "border-teal/25",
    badgeColor: "bg-teal/10 text-teal border-teal/20",
    topicColor: "bg-teal/8 text-teal/80 border-teal/15",
    glowColor: "bg-teal/15",
    ringColor: "border-teal/40",
  },
];

export function TeamSection() {
  return (
    <section id="equipo" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-16 text-center"
        >
          {/* Label with flanking lines */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
              El Equipo
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Líderes del <span className="gradient-text">Cambio</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Code4Change nació en 2024 tras la experiencia de Luana como becaria de UNICEF,
            con la visión de democratizar el acceso a educación tecnológica en el Perú.
          </p>

          {/* Stats row */}
          <div className="inline-flex flex-wrap justify-center gap-3">
            {[
              { value: "3", label: "Líderes fundadoras", bar: "bg-primary" },
              { value: "2024", label: "Año de fundación", bar: "bg-teal" },
              { value: "2+", label: "Tutores voluntarios", bar: "bg-gold" },
            ].map((s) => (
              <div key={s.label} className="glass-card rounded-xl px-5 py-3 border border-white/8 flex items-center gap-3">
                <div className={`w-1 h-8 rounded-full ${s.bar} opacity-70`} />
                <div className="text-left">
                  <p className="font-display font-black text-lg leading-none text-foreground">{s.value}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Leaders */}
        <div className="max-w-5xl mx-auto flex flex-col gap-5">

          {/* Founder — featured wide card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl overflow-hidden border border-primary/25 hover:border-primary/40 transition-colors duration-300"
          >
            <div className="h-[3px] bg-primary" />
            <div className="flex flex-col md:flex-row">
              {/* Photo */}
              <div className="relative md:w-64 lg:w-72 shrink-0 overflow-hidden bg-gradient-to-br from-primary/10 to-transparent">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-72 md:h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50 hidden md:block pointer-events-none" />
              </div>

              {/* Content */}
              <div className="flex-1 p-7 md:p-8 flex flex-col justify-center gap-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-display font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-3">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>
                    Fundadora y Directora General
                  </span>
                  <h3 className="font-display font-bold text-foreground text-2xl md:text-3xl">{founder.name}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>

                {/* Achievement tags */}
                <div className="flex flex-wrap gap-2">
                  {founder.achievements.map((a) => (
                    <span key={a} className="text-xs font-medium text-primary/80 bg-primary/8 border border-primary/15 px-3 py-1 rounded-full">
                      {a}
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="border-l-2 border-primary/50 pl-4 mt-1">
                  <p className="text-sm italic text-foreground/70">"{founder.quote}"</p>
                </blockquote>
              </div>
            </div>
          </motion.div>

          {/* Co-leaders — 2 portrait cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {coleaders.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`glass-card rounded-2xl overflow-hidden border ${person.accent} hover:scale-[1.01] transition-all duration-300`}
              >
                <div className={`h-[3px] ${person.accentBar}`} />

                {/* Photo — cropped from center top */}
                <div className={`relative h-96 overflow-hidden bg-gradient-to-b ${person.glowColor}`}>
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Name + role */}
                <div className="px-5 pt-4 pb-1">
                  <h3 className="font-display font-bold text-foreground text-xl leading-tight">{person.name}</h3>
                  <span className={`inline-block text-[10px] font-display font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border mt-1.5 ${person.badgeColor}`}>
                    {person.role}
                  </span>
                </div>

                {/* Bio + tags */}
                <div className="px-5 pb-5 pt-3 flex flex-col gap-4 border-t border-border/20 mt-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">{person.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {person.tags.map((t) => (
                      <span key={t} className={`text-xs font-medium px-3 py-1 rounded-full border ${person.badgeColor}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tutors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24"
        >
          {/* Sub-header */}
          <div className="text-center mb-12">
            <p className="text-primary font-display font-semibold text-xs uppercase tracking-widest mb-2">Voluntarios</p>
            <h3 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-3">Tutores Voluntarios</h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Estudiantes y profesionales que dedican su tiempo a guiar y motivar a la próxima
              generación de programadores en el Perú.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {tutors.map((tutor, i) => (
              <motion.div
                key={tutor.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`glass-card rounded-2xl overflow-hidden border ${tutor.border} hover:scale-[1.02] transition-all duration-300`}
              >
                {/* Accent top bar */}
                <div className={`h-[3px] w-full ${tutor.accentBar}`} />

                <div className="p-6 flex flex-col gap-5">
                  {/* Photo + name row */}
                  <div className="flex items-center gap-4">
                    <div className="relative shrink-0">
                      <div className={`absolute inset-0 rounded-full ${tutor.glowColor} blur-lg scale-110`} />
                      <div className={`relative w-16 h-16 rounded-full overflow-hidden border-2 ${tutor.ringColor}`}>
                        <img src={tutor.image} alt={tutor.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground text-lg leading-tight">{tutor.name}</h4>
                      <span className={`inline-block text-[10px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border mt-1 ${tutor.badgeColor}`}>
                        {tutor.role}
                      </span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground leading-relaxed border-t border-border/30 pt-4">
                    {tutor.bio}
                  </p>

                  {/* Topic chips */}
                  <div className="flex flex-wrap gap-2">
                    {tutor.topics.map((t) => (
                      <span key={t} className={`text-xs font-medium px-3 py-1 rounded-full border ${tutor.topicColor}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
