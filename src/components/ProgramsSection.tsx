import { motion } from "framer-motion";

const courses = [
  {
    icon: "🐍",
    title: "Programación con Python",
    description: "Aprende uno de los lenguajes más versátiles y demandados del mundo, desde lo básico hasta proyectos con impacto real.",
    color: "bg-chart-3/15 text-chart-3",
  },
  {
    icon: "⚡",
    title: "Programación con C++",
    description: "Domina la programación competitiva y el pensamiento algorítmico con uno de los lenguajes más potentes.",
    color: "bg-chart-4/15 text-chart-4",
  },
  {
    icon: "🧩",
    title: "Programación con Bloques",
    description: "Para niños menores de 12 años. Aprende lógica de programación de forma visual, divertida e interactiva.",
    color: "bg-chart-5/15 text-chart-5",
  },
  {
    icon: "🌐",
    title: "Desarrollo Web",
    description: "Crea páginas web con HTML, CSS y JavaScript. Aprende a construir tu propio espacio en internet.",
    color: "bg-primary/15 text-primary",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 hover:scale-[1.03] transition-transform cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl ${course.color} flex items-center justify-center text-2xl mb-4`}>
                {course.icon}
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{course.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Extra info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 glass-card rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="flex-1">
            <h3 className="font-display font-bold text-lg text-foreground mb-2">
              También organizamos
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Charlas de difusión de oportunidades en colegios e instituciones educativas
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                Comunidad entre jóvenes con interés en tecnología y cambio social
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Participación en concursos, ferias y hackathones
              </li>
            </ul>
          </div>
          <div className="text-center">
            <p className="text-4xl font-display font-bold gradient-text">100%</p>
            <p className="text-sm text-muted-foreground">Gratuito</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
