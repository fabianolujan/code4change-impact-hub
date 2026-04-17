import { motion } from "framer-motion";
import coursePython from "@/assets/course-python.png";
import courseCpp from "@/assets/course-cpp.png";
import courseBloques from "@/assets/course-bloques.png";
import courseWeb from "@/assets/course-web.png";

const courses = [
  {
    title: "Programación con Python",
    description: "Aprende uno de los lenguajes más versátiles y demandados del mundo, desde lo básico hasta proyectos con impacto real.",
    image: coursePython,
    accent: "from-primary/30 to-primary/0",
    ctaColor: "text-primary hover:text-primary/80",
    badge: "12+ años",
    level: "Básico · Intermedio",
    levelColor: "text-primary bg-primary/10 border-primary/20",
  },
  {
    title: "Programación con C++",
    description: "Domina la programación competitiva y el pensamiento algorítmico con uno de los lenguajes más potentes.",
    image: courseCpp,
    accent: "from-teal/30 to-teal/0",
    ctaColor: "text-teal hover:text-teal/80",
    badge: "14+ años",
    level: "Intermedio · Avanzado",
    levelColor: "text-teal bg-teal/10 border-teal/20",
  },
  {
    title: "Programación con Bloques",
    description: "Para niños menores de 12 años. Aprende lógica de programación de forma visual, divertida e interactiva.",
    image: courseBloques,
    accent: "from-gold/30 to-gold/0",
    ctaColor: "text-gold hover:text-gold/80",
    badge: "6 - 12 años",
    level: "Principiante",
    levelColor: "text-gold bg-gold/10 border-gold/20",
  },
  {
    title: "Desarrollo Web",
    description: "Crea páginas web con HTML, CSS y JavaScript. Aprende a construir tu propio espacio en internet.",
    image: courseWeb,
    accent: "from-purple-400/30 to-purple-400/0",
    ctaColor: "text-purple-400 hover:text-purple-300",
    badge: "12+ años",
    level: "Básico",
    levelColor: "text-purple-300 bg-purple-400/10 border-purple-400/20",
  },
];

const extraItems = [
  {
    text: "Charlas de difusión de oportunidades en colegios e instituciones educativas",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5 text-primary">
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
      </svg>
    ),
  },
  {
    text: "Comunidad entre jóvenes con interés en tecnología y cambio social",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5 text-teal">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    text: "Participación en concursos, ferias y hackathones",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5 text-gold">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

export function ProgramsSection() {
  return (
    <section id="programas" className="py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Qué hacemos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Cursos <span className="gradient-text">Gratuitos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Brindamos asesorías virtuales y presenciales en STEM para estudiantes de 6to
            de primaria hasta 5to de secundaria, con enfoque en cerrar la brecha de género.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-[0_0_24px_2px_rgba(6,182,212,0.18)] hover:border-primary/30 border border-transparent transition-all duration-300"
            >
              {/* Image with aspect-video + overlays */}
              <div className="relative aspect-video overflow-hidden shrink-0">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-all duration-300" />
                <div className={`absolute inset-0 bg-gradient-to-t ${course.accent} opacity-50`} />
                {/* Age badge top-left */}
                <span className="absolute top-2.5 left-2.5 text-[10px] font-bold bg-background/70 backdrop-blur-sm text-foreground px-2 py-0.5 rounded-full border border-white/10">
                  {course.badge}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-display font-bold text-foreground text-[0.95rem] leading-tight">{course.title}</h3>
                </div>
                {/* Level chip */}
                <span className={`self-start text-[10px] font-semibold px-2 py-0.5 rounded-full border mb-2 ${course.levelColor}`}>
                  {course.level}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                  {course.description}
                </p>
                <a
                  href="https://linktr.ee/code4changee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 inline-flex items-center gap-1 text-xs font-semibold font-display transition-colors duration-200 ${course.ctaColor}`}
                >
                  Saber más
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* "También organizamos" banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 relative overflow-hidden rounded-2xl border border-primary/20"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-teal/8" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full bg-teal/5 blur-2xl pointer-events-none" />

          <div className="relative p-8 md:p-10">
            {/* Header */}
            <div className="mb-8 text-center md:text-left">
              <p className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-primary mb-1">Más allá de los cursos</p>
              <h3 className="font-display font-bold text-xl text-foreground">También organizamos</h3>
            </div>

            {/* Feature cards + stat */}
            <div className="grid md:grid-cols-4 gap-4 items-stretch">
              {/* 3 feature cards */}
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 11l19-9-9 19-2-8-8-2z" />
                    </svg>
                  ),
                  color: "text-primary bg-primary/15 border-primary/20",
                  title: "Charlas educativas",
                  text: "Difusión de oportunidades en colegios e instituciones educativas",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                  color: "text-teal bg-teal/15 border-teal/20",
                  title: "Comunidad joven",
                  text: "Red de jóvenes con interés en tecnología y cambio social",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                    </svg>
                  ),
                  color: "text-gold bg-gold/15 border-gold/20",
                  title: "Hackathones & ferias",
                  text: "Participación en concursos, ferias y competencias nacionales",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className={`rounded-xl border p-5 flex flex-col gap-3 bg-background/40 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-200 ${card.color.split(" ")[2]}`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${card.color.split(" ").slice(0, 2).join(" ")}`}>
                    {card.icon}
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground text-sm mb-1">{card.title}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{card.text}</p>
                  </div>
                </div>
              ))}

              {/* Stat */}
              <div className="rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-5 flex flex-col items-center justify-center text-center">
                <p className="text-5xl font-display font-black bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 to-teal-400 leading-none">
                  100%
                </p>
                <p className="text-xs font-semibold text-gray-300 mt-2 uppercase tracking-widest">Gratuito</p>
                <div className="mt-3 w-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                <p className="text-[10px] text-gray-500 mt-2">Sin costo para estudiantes</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
