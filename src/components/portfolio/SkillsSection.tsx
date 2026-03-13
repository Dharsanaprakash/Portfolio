import { motion } from "framer-motion";
import { techSkills, tools } from "@/data/portfolio";
import { Code, Wrench } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

const SkillGroup = ({
  title,
  icon: Icon,
  items,
  delay,
  accentColor,
}: {
  title: string;
  icon: React.ElementType;
  items: { name: string; icon: React.ElementType }[];
  delay: number;
  accentColor: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className="glow-card rounded-2xl p-8"
  >
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
      style={{ background: `${accentColor}15` }}
    >
      <Icon size={22} style={{ color: accentColor }} />
    </div>

    <h3 className="font-display text-lg font-bold text-foreground mb-5">
      {title}
    </h3>

    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-wrap gap-3"
    >
      {items.map((skill) => {
        const SkillIcon = skill.icon;

        return (
          <motion.div
            key={skill.name}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-secondary text-secondary-foreground border border-border hover:border-primary/30 transition-colors cursor-default"
          >
            <SkillIcon size={16} />
            {skill.name}
          </motion.div>
        );
      })}
    </motion.div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div
        className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-10 blur-[100px]"
        style={{
          background: "radial-gradient(circle, hsl(280 70% 60%), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-primary mb-3 block">
            Expertise
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <SkillGroup
            title="Technical Skills"
            icon={Code}
            items={techSkills}
            delay={0}
            accentColor="hsl(165 80% 48%)"
          />

          <SkillGroup
            title="Tools"
            icon={Wrench}
            items={tools}
            delay={0.1}
            accentColor="hsl(280 70% 60%)"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;