import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-black/10 dark:border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-600 dark:text-neutral-400 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p>© {new Date().getFullYear()} EmbeddedDev — All rights reserved.</p>
          <p className="opacity-80">Firmware • IoT • Prototyping • Testing</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
