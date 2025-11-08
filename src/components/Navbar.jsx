import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-lg sm:text-xl flex items-center gap-2">
          <span className="text-neutral-900 dark:text-white">Embedded</span>
          <span className="text-indigo-600">Dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-1">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#contact" aria-label="Email" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
