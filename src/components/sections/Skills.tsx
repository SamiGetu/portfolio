import { SKILLS } from '../../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-black text-white mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
        {/* Separator line for desktop */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-accent -translate-x-1/2"></div>
        
        {SKILLS.map((category, index) => (
          <div key={index} className="flex flex-col">
            <h2 className="text-4xl font-headline tracking-widest mb-10 pb-4 border-b border-accent/30 inline-block w-full">
              {category.title}
            </h2>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span key={i} className="px-4 py-2 border border-white/20 text-sm font-bold uppercase hover:bg-white hover:text-black transition-colors duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
