import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const contactCards = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, accent: "hsl(165 80% 48%)" },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}`, accent: "hsl(280 70% 60%)" },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: undefined, accent: "hsl(42 100% 60%)" },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-[150px]"
        style={{ background: "radial-gradient(circle, hsl(165 80% 48%), transparent)" }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-primary mb-3 block">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            I'm currently looking for opportunities as a Data Analyst. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-4 mb-12 mt-10"
        >
          {contactCards.map((card, i) => {
            const Wrapper = card.href ? motion.a : motion.div;
            return (
              <Wrapper
                key={card.label}
                {...(card.href ? { href: card.href } : {})}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glow-card rounded-2xl p-6 flex flex-col items-center gap-3 cursor-pointer"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${card.accent}15` }}
                >
                  <card.icon size={20} style={{ color: card.accent }} />
                </div>
                <span className="text-xs font-mono tracking-wider uppercase text-muted-foreground">{card.label}</span>
                <span className="text-sm text-foreground font-medium">{card.value}</span>
              </Wrapper>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: personalInfo.social.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
            { icon: Send, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-xl glow-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-300"
              aria-label={s.label}
            >
              <s.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
