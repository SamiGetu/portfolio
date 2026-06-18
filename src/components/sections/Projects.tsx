import { useEffect, useRef } from 'react';
import { PROJECTS } from '../../data/portfolio';
import { gsap } from '../../lib/gsap';

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const cards = containerRef.current.querySelectorAll('.project-card');
    
    gsap.fromTo(cards, 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  const getGridClasses = (index: number, totalInChunk: number) => {
    if (totalInChunk === 4) {
      switch(index) {
        case 0: return 'md:col-start-1 md:row-span-2';
        case 1: return 'md:col-start-2 md:row-start-1';
        case 2: return 'md:col-start-2 md:row-start-2';
        case 3: return 'md:col-start-3 md:row-start-1 md:row-span-2';
        default: return '';
      }
    } else if (totalInChunk === 3) {
      switch(index) {
        case 0: return 'md:col-span-1 md:row-span-2';
        case 1: return 'md:col-span-2 md:row-span-1';
        case 2: return 'md:col-span-2 md:row-span-1';
        default: return '';
      }
    } else if (totalInChunk === 2) {
      switch(index) {
        case 0: return 'md:col-span-2 md:row-span-2';
        case 1: return 'md:col-span-1 md:row-span-2';
        default: return '';
      }
    } else {
      return 'md:col-span-3 md:row-span-2';
    }
  };

  const workProjects = PROJECTS.filter(p => !p.isPersonal);
  const personalProjects = PROJECTS.filter(p => p.isPersonal);

  const renderCategory = (title: string, projects: typeof PROJECTS) => {
    if (projects.length === 0) return null;

    const chunks = [];
    for (let i = 0; i < projects.length; i += 4) {
      chunks.push(projects.slice(i, i + 4));
    }

    return (
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-3xl md:text-5xl font-headline tracking-tighter uppercase leading-none">
            {title}
          </h3>
          <div className="h-[2px] bg-white flex-grow"></div>
          <span className="text-xs font-bold uppercase tracking-widest border border-white px-3 py-1">
            {projects.length} PROJECTS
          </span>
        </div>

        <div className="flex flex-col gap-4 md:gap-8">
          {chunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-8 md:h-[600px]">
              {chunk.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`project-card group border-2 border-white p-6 flex flex-col justify-between cursor-pointer overflow-hidden bg-black hover:bg-white hover:text-black transition-colors duration-300 min-h-[300px] md:min-h-0 ${getGridClasses(index, chunk.length)}`}
                >
                  <div className="flex justify-between items-start mb-8 border-b-2 border-white group-hover:border-black pb-2 transition-colors duration-300">
                    <span className="text-4xl md:text-6xl font-headline tracking-tighter leading-none">{project.id}</span>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-3xl md:text-5xl font-headline mb-4 uppercase leading-none tracking-tight break-words">{project.name}</h3>
                    <div className="flex items-end w-full">
                      <p className="text-xs md:text-sm font-bold uppercase tracking-wider leading-tight w-full flex justify-between gap-4">
                        <span className="line-clamp-3 md:line-clamp-none">{project.description}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="px-6 md:px-12 max-w-7xl mx-auto" ref={containerRef}>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b-2 border-white pb-4 gap-4">
          <h2 className="text-5xl md:text-8xl font-headline tracking-tighter uppercase leading-none">
            Selected Works
          </h2>
          <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-right max-w-xs leading-tight">
            A curated collection of professional and personal development projects spanning various domains and technologies.
          </div>
        </div>

        {renderCategory("Work Based", workProjects)}
        {renderCategory("Personal Projects", personalProjects)}
        
        <div className="mt-8 border-t-2 border-white pt-4 text-[10px] uppercase font-bold tracking-widest flex justify-between">
          <span>{PROJECTS.length} TOTAL PROJECTS LOGGED</span>
          <span>SYSTEM // ONLINE</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
