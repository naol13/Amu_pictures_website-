import { motion } from "framer-motion";
import img from "@/assets/gallery-1.jpg";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="pattern-overlay" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl glass-gold p-2">
            <img
              src={img}
              alt="Ethiopian traditional wedding ceremony with candlelight"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-[560px] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl glass-gold p-6 md:block">
            <div className="font-display text-3xl text-gradient-gold">Since 2017</div>
            <div className="text-xs uppercase tracking-[0.2em] text-ivory/70">Addis Ababa · Ethiopia</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <div className="text-xs uppercase tracking-[0.35em] text-primary">Our Story</div>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-ivory md:text-5xl">
            A love letter to <span className="italic text-gradient-gold">Habesha</span> life,
            written in light.
          </h2>
          <div className="habesha-divider my-8 max-w-xs" />
          <p className="text-ivory/75 leading-relaxed">
            Amu Pictures was born from a single belief: every Ethiopian moment — from the
            quiet blessing at a kebero-lit wedding to the joyful tears of a graduation —
            deserves to be remembered the way it truly felt.
          </p>
          <p className="mt-4 text-ivory/75 leading-relaxed">
            We blend modern cinematic storytelling with deep respect for Habesha
            tradition. Whether it's an Orthodox church ceremony, a family birthday in
            Bole, or the spin of a colorful tilet at the reception — our lens is there,
            patient and unhurried, honoring the story as it unfolds.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {[
              "Habesha Weddings",
              "Graduation Films",
              "Church Ceremonies",
              "Cultural Events",
            ].map((t) => (
              <div key={t} className="glass rounded-xl px-4 py-3 text-sm text-ivory/85">
                <span className="mr-2 text-primary">◆</span>
                {t}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
