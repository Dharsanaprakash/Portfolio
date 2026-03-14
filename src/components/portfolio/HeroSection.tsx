import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const HeroSection = () => {

  const socials = [
    { icon: Github, href: personalInfo.social.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-28 overflow-hidden grid-pattern">

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        <span className="inline-block px-4 py-1.5 text-xs font-mono font-bold tracking-[0.3em] uppercase rounded-full glow-border text-primary bg-primary/5 mb-6">
          Data Analyst
        </span>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tight">
  <span className="gradient-text">Dharsana Prakash</span>
</h1>

        <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
          {personalInfo.about}
        </p>

        

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glow-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <s.icon size={20} />
            </a>
          ))}
        </div>

        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 mt-20 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <ArrowDown size={18} />
        </a>

      </div>
    </section>
  );
};

export default HeroSection;