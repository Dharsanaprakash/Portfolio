import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-10 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground"
        >
          © {new Date().getFullYear()}{" "}
          <span className="gradient-text font-semibold">Dharsana Prakash</span>
          . Built with passion.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-muted-foreground/50"
        >
          
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
