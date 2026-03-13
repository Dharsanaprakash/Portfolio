import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { GraduationCap, School } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-primary mb-3 block">Background</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Edu<span className="gradient-text">cation</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/30 to-transparent" />

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-16 md:pl-20"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                className="absolute left-[14px] md:left-[22px] top-2 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
              </motion.div>

              <div className="glow-card rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {education.college.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground">{education.college.institution}</p>
                  </div>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative h-2 rounded-full bg-secondary overflow-hidden mb-2"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "78.8%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ background: "linear-gradient(90deg, hsl(165 80% 48%), hsl(280 70% 60%))" }}
                  />
                </motion.div>
                <span className="text-xs font-mono text-primary">CGPA: {education.college.cgpa} / 10</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative pl-16 md:pl-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: 0.35 }}
                className="absolute left-[14px] md:left-[22px] top-2 w-5 h-5 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center"
              >
                <div className="w-2 h-2 rounded-full bg-accent" />
              </motion.div>

              <div className="glow-card rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <School size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Higher Secondary Education
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{education.school.institution}</p>
                    <p className="text-sm text-muted-foreground font-mono">{education.school.grades}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
