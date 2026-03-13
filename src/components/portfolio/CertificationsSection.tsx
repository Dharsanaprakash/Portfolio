import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import { Award, ExternalLink } from "lucide-react";

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(42 100% 60%), transparent)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-primary mb-3 block">Achievements</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Certifi<span className="gradient-text-warm">cations</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ x: 8 }}
              className="group glow-card rounded-2xl p-6 md:p-8 flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center bg-highlight/10">
                <Award size={22} className="text-highlight" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-1 group-hover:text-highlight transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>
              <ExternalLink size={18} className="text-muted-foreground/30 group-hover:text-highlight/60 transition-colors mt-1 flex-shrink-0 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
