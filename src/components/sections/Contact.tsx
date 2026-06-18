import { motion } from 'framer-motion';
import { SOCIALS } from '../../data/portfolio';

const Contact = () => {
  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-12 px-6 md:px-12 mt-24">
      <div className="max-w-7xl mx-auto border-t-4 border-white pt-12 flex flex-col md:flex-row justify-between items-end gap-12">
        
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[15vw] md:text-[10vw] leading-[0.8] font-headline mb-8">
              GET IN<br />TOUCH
            </h2>
          </motion.div>
          <p className="text-xl font-medium max-w-md">
            Available for freelance opportunities and full-time roles. 
            Let's build something exceptional.
          </p>
        </div>

        <div className="w-full md:w-1/3 flex flex-col gap-4 text-lg">
          <div className="border-b border-white/30 pb-2 mb-4">
            <span className="text-xs uppercase tracking-widest font-bold block mb-2 text-gray-400">Classifieds / Direct Line</span>
          </div>
          
          {SOCIALS.map((social, index) => (
            <motion.a 
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center group border-b border-white/10 pb-2 hover:border-accent transition-colors"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="uppercase font-bold tracking-wider">{social.name}</span>
              <span className="text-sm font-body text-gray-400 group-hover:text-accent transition-colors">
                {social.label || social.link}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 flex justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
        <span>&copy; {new Date().getFullYear()} Samuel Getachew</span>
        <span>Built with React & GSAP</span>
      </div>
    </footer>
  );
};

export default Contact;
