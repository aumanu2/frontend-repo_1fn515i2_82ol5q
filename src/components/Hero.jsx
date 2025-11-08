import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-3 py-1 text-xs font-medium backdrop-blur">
            Embedded Systems • IoT • Firmware
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Building reliable firmware and intelligent IoT devices
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg max-w-xl">
            I design, prototype, and ship embedded solutions — from bare‑metal drivers to cloud‑connected products.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 text-white px-5 py-3 font-semibold shadow hover:bg-indigo-500 transition">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 px-5 py-3 font-semibold hover:bg-white transition">
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90 dark:from-neutral-950/70 dark:via-neutral-950/30 dark:to-neutral-950/90" />
    </section>
  );
}
