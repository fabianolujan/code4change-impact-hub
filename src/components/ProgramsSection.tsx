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
    dot: "bg-primary",
  },
  {
    title: "Programación con C++",
    description: "Domina la programación competitiva y el pensamiento algorítmico con uno de los lenguajes más potentes.",
    image: courseCpp,
    accent: "from-teal/30 to-teal/0",
    dot: "bg-teal",
  },
  {
    title: "Programación con Bloques",
    description: "Para niños menores de 12 años. Aprende lógica de programación de forma visual, divertida e interactiva.",
    image: courseBloques,
    accent: "from-gold/30 to-gold/0",
    dot: "bg-gold",
  },
  {
    title: "Desarrollo Web",
    description: "Crea páginas web con HTML, CSS y JavaScript. Aprende a construir tu propio espacio en internet.",
    image: courseWeb,
    accent: "from-purple-400/30 to-purple-400/0",
    dot: "bg-purple-400",
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
              className="group glass-card rounded-2xl overflow-hidden hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-default"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${course.accent} opacity-60`} />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-foreground mb-2 text-[0.95rem]">{course.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>
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
          className="mt-10 glass-card rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="flex-1">
            <h3 className="font-display font-bold text-lg text-foreground mb-4">
              También organizamos
            </h3>
            <ul className="text-sm text-muted-foreground space-y-3">
              {[
                { text: "Charlas de difusión de oportunidades en colegios e instituciones educativas", dot: "bg-primary" },
                { text: "Comunidad entre jóvenes con interés en tecnología y cambio social", dot: "bg-teal" },
                { text: "Participación en concursos, ferias y hackathones", dot: "bg-gold" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full ${item.dot} mt-1.5 shrink-0`} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center px-8 md:border-l border-border/50">
            <p className="text-5xl font-display font-bold gradient-text">100%</p>
            <p className="text-sm text-muted-foreground mt-1 font-medium">Gratuito</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
