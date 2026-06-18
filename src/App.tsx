import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Github from './components/sections/Github';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="bg-white text-black min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Github />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
