import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { BarChart3, TrendingUp, Clock, ShoppingCart, ArrowUpRight } from "lucide-react";

const icons = [BarChart3, TrendingUp, Clock, ShoppingCart];

const accents = [
  "hsl(165 80% 48%)",
  "hsl(280 70% 60%)",
  "hsl(42 100% 60%)",
  "hsl(200 80% 55%)",
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      
      {/* Decorative grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-primary mb-3 block">
            Portfolio
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project, i) => {
            const Icon = icons[i % icons.length];
            const accent = accents[i % accents.length];

            return (
              <motion.a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group glow-card rounded-2xl p-8 relative overflow-hidden cursor-pointer"
              >

                {/* Project Number */}
                <span
                  className="absolute -right-4 -top-6 text-[120px] font-display font-black leading-none select-none pointer-events-none"
                  style={{ color: `${accent}08` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: `${accent}15` }}
                    >
                      <Icon size={20} style={{ color: accent }} />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 0.5, scale: 1 }}
                      className="text-muted-foreground group-hover:text-primary group-hover:opacity-100 transition-all"
                    >
                      <ArrowUpRight size={20} />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                </div>

              </motion.a>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;