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
    arrowColor: "text-primary",
  },
  {
    title: "Programación con C++",
    description: "Domina la programación competitiva y el pensamiento algorítmico con uno de los lenguajes más potentes.",
    image: courseCpp,
    accent: "from-teal/30 to-teal/0",
    ctaColor: "text-teal hover:text-teal/80",
    arrowColor: "text-teal",
  },
  {
    title: "Programación con Bloques",
    description: "Para niños menores de 12 años. Aprende lógica de programación de forma visual, divertida e interactiva.",
    image: courseBloques,
    accent: "from-gold/30 to-gold/0",
    ctaColor: "text-gold hover:text-gold/80",
    arrowColor: "text-gold",
  },
  {
    title: "Desarrollo Web",
    description: "Crea páginas web con HTML, CSS y JavaScript. Aprende a construir tu propio espacio en internet.",
    image: courseWeb,
    accent: "from-purple-400/30 to-purple-400/0",
    ctaColor: "text-purple-400 hover:text-purple-300",
    arrowColor: "text-purple-400",
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
    <section id="programas" className="py-24">
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
              className="group glass-card rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-[0_0_24px_2px_oklch(0.75_0.15_195_/_18%)] hover:border-primary/30 border border-transparent transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden shrink-0">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${course.accent} opacity-60`} />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-bold text-foreground mb-2 text-[0.95rem]">{course.title}</h3>
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

        {/* Extra info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 glass-card rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center"
        >
          <div className="w-full md:w-[60%]">
            <h3 className="font-display font-bold text-lg text-foreground mb-4">
              También organizamos
            </h3>
            <ul className="space-y-4">
              {extraItems.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  {item.icon}
                  <span className="text-sm text-gray-300 leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[40%] flex items-center justify-center md:border-l border-border/40 md:pl-6">
            <div className="text-center">
              <p className="text-6xl font-display font-bold gradient-text">100%</p>
              <p className="text-sm text-gray-300 mt-2 font-medium">Gratuito</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
