import { motion } from 'framer-motion';
import samiImage from "../../assets/images/ChatGPT Image Jun 18, 2026, 11_06_07 AM.webp"

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t-[6px] border-black mt-12">
      <div className="flex justify-between items-end mb-12 border-b-2 border-black pb-4">
        <h2 className="text-6xl font-headline">THE MANIFESTO</h2>
        <span className="text-sm font-bold uppercase tracking-widest hidden md:block">Issue 01 — About</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative">
        {/* Left Column: Quote & Image */}
        <div className="md:col-span-5 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-5xl font-headline leading-none text-accent">
              "Building interfaces that think."
            </h3>
          </motion.div>
          <div className="w-full aspect-[3/4] border-2 border-black overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
            <img src={samiImage} alt="Samuel Getachew" loading="lazy" className="object-cover w-full h-full" style={{ willChange: "filter" }} />
            <div className="absolute bottom-0 left-0 w-full bg-black text-white p-2 text-xs uppercase font-bold">
              Fig 1. The Developer in his element.
            </div>
          </div>
        </div>

        {/* Right Column: Bio */}
        <div className="md:col-span-7 flex flex-col justify-start">
          <div className="prose prose-lg max-w-none space-y-6 text-lg">
            <p className="first-letter:text-7xl first-letter:font-headline first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:text-accent">
              I am a Front-end Developer and Figma Designer with a passion for crafting digital experiences that feel tangible, dynamic, and editorial. With over 2 years of experience bridging the gap between aesthetics and engineering, I specialize in building responsive, accessible, and performant web applications.
            </p>
            <p>
              My background involves working on complex financial dashboards, educational platforms, and custom UI components. I thrive in environments where design thinking meets technical execution, ensuring every pixel is deliberate and every interaction is seamless.
            </p>

            <div className="border-t border-b border-black py-6 my-8 flex flex-col sm:flex-row justify-between gap-4">
              <div>
                <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Experience</span>
                <span className="text-2xl font-headline block">2+ YEARS</span>
              </div>
              <div className="w-[1px] bg-black hidden sm:block"></div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Current Role</span>
                <span className="text-2xl font-headline block">Full Stack Dev @ Oneness Academy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
