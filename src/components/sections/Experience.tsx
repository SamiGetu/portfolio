import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="border-y-4 border-black py-4 mb-12 flex items-center justify-between">
        <h2 className="text-5xl md:text-7xl font-headline tracking-widest">CAREER ARCHIVE</h2>
        <span className="hidden md:inline-block px-4 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest">
          Vol. 2
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {EXPERIENCE.map((exp, index) => (
          <motion.article 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col border-b border-black pb-8"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-3xl font-headline leading-tight pr-4">{exp.company}</h3>
              {exp.current && (
                <span className="px-2 py-1 border border-accent text-accent text-[10px] font-bold uppercase whitespace-nowrap">
                  Current
                </span>
              )}
            </div>
            <p className="text-lg font-bold mb-4 font-body uppercase tracking-wider">{exp.role}</p>
            <ul className="list-disc pl-5 space-y-2 mt-auto">
              {exp.projects.map((project, i) => (
                <li key={i} className="text-sm leading-relaxed">{project}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
