import { FileText } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="section-padding">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-10">
          My <span className="gradient-text">Resume</span>
        </h2>

        {/* Resume Image */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="block mx-auto max-w-3xl glow-card rounded-xl overflow-hidden hover:scale-[1.02] transition"
        >
          <img
            src="/resume.png"
            alt="Dharsana Resume"
            className="w-full"
          />
        </a>


      </div>
    </section>
  );
};

export default ResumeSection;