import { motion } from "framer-motion";
import hero from "@/assets/hero-wedding.jpg";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image with cinematic ken-burns */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={hero}
          alt="Ethiopian Habesha bride and groom in traditional white and gold attire"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 cinematic-overlay" />
      <div className="pattern-overlay" />

      {/* Soft gold vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.1_0.02_40/0.7)_90%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="inline-flex items-center gap-3 rounded-full glass-gold px-5 py-2 text-xs uppercase tracking-[0.35em] text-primary"
        >
          <span className="h-1 w-1 rounded-full bg-primary" />
          Ethiopian Cinematic Storytellers
          <span className="h-1 w-1 rounded-full bg-primary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5 }}
          className="mx-auto mt-8 max-w-5xl font-display text-5xl font-light leading-[1.05] text-ivory md:text-7xl lg:text-[5.5rem]"
        >
          Capturing Ethiopia's <br />
          <span className="italic text-gradient-gold">most beautiful</span> moments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ivory/75 md:text-lg"
        >
          From sacred Habesha weddings to graduation tears of joy — we preserve the
          heartbeat of Ethiopian life through cinematic photography and film.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#booking" className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.03]">
            Book Now
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-sm font-medium text-ivory transition-colors hover:text-primary">
            View Our Work
          </a>
        </motion.div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-4 border-t border-white/10 pt-8"
        >
          {[
            { n: "500+", l: "Weddings Filmed" },
            { n: "8 yrs", l: "Telling Stories" },
            { n: "1.2M+", l: "Memories Captured" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-2xl text-gradient-gold md:text-4xl">{s.n}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-ivory/60 md:text-xs">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/60"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
