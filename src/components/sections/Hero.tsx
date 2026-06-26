import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';
import { motion, useScroll, useTransform } from 'framer-motion';
import samiImage from "../../assets/images/ChatGPT Image Jun 18, 2026, 10_49_36 AM.webp"
import coffe from "../../assets/images/coffe.webp"
import ethiopian from "../../assets/images/ethiopia.webp"
import resuma from "../../assets/Resume.docx.pdf"

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-char",
      { y: 100, opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
      { y: 0, opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1, stagger: 0.05, ease: "power4.out" }
    ).fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.5"
    );
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="hero-char inline-block">{char}</span>
    ));
  };

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-white px-4 mt-7 transition-colors duration-300">
      {/* Background Images / Collage Grid */}
      <motion.div style={{ y, opacity, willChange: "transform, opacity" }} className="absolute inset-0 z-0 pointer-events-none flex flex-col md:flex-row justify-between p-4 md:p-12 opacity-30 md:opacity-100">
        <div className="w-full md:w-1/3 h-1/3 md:h-2/3 border-4 border-black mt-4 md:mt-20 opacity-80 transition-colors duration-300" style={{ backgroundImage: `url('${samiImage}')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', filter: 'grayscale(100%)', willChange: 'filter' }}></div>
        <div className="w-1/2 md:w-1/4 h-1/4 md:h-1/2 border-4 border-black mt-auto mb-4 md:mb-20 opacity-80 transition-colors duration-300" style={{ backgroundImage: `url('${ethiopian}')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', filter: 'grayscale(100%)', willChange: 'filter' }}></div>
        <div className="hidden md:block w-1/4 h-3/4 border-4 border-black opacity-80 mix-blend-multiply transition-colors duration-300" style={{ backgroundImage: `url('${coffe}')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', filter: 'grayscale(100%)', willChange: 'filter' }}></div>
      </motion.div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center mix-blend-difference text-[#ffffff] w-full">
        <h1 ref={text1Ref} className="text-[25vw] md:text-[18vw] leading-[0.85] font-headline text-center overflow-hidden w-full whitespace-nowrap">
          {splitText("SAMUEL")}
        </h1>
        <h1 ref={text2Ref} className="text-[25vw] md:text-[18vw] leading-[0.85] font-headline text-center overflow-hidden w-full whitespace-nowrap">
          {splitText("GETACHEW")}
        </h1>
        <p className="hero-subtitle mt-6 md:mt-8 text-xs sm:text-sm md:text-xl tracking-[0.15em] md:tracking-[0.3em] uppercase font-medium text-center w-full max-w-[90vw]">
          Front-end Developer / Figma Designer
        </p>

        <div className="hero-subtitle mt-12 flex flex-col sm:flex-row gap-6 items-start justify-start w-full px-4 md:px-12 relative z-20 pointer-events-auto">
          <a
            href={resuma}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#ffffff] text-[#ffffff] px-8 py-3 text-sm md:text-base font-bold uppercase tracking-widest hover:bg-[#ffffff] hover:text-[#000000] transition-colors duration-300 pointer-events-auto"
          >
            Download Resume
          </a>
          <a
            href="https://t.me/SamiGE7U"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#ffffff] bg-[#ffffff] text-[#000000] px-8 py-3 text-sm md:text-base font-bold uppercase tracking-widest hover:bg-transparent hover:text-[#ffffff] transition-colors duration-300 pointer-events-auto"
          >
            Contact Me (@SamiGE7U)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
