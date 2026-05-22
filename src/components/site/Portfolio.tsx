import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";

const items = [
  { src: g1, label: "Traditional Wedding", tag: "Wedding", span: "row-span-2" },
  { src: g3, label: "Eskista Cultural Dance", tag: "Cultural", span: "" },
  { src: g2, label: "Graduation Joy", tag: "Graduation", span: "" },
  { src: g4, label: "Church Ceremony", tag: "Ceremony", span: "row-span-2" },
  { src: g7, label: "Engagement Story", tag: "Engagement", span: "" },
  { src: g6, label: "Aerial Celebration", tag: "Drone", span: "" },
  { src: g5, label: "Family Portrait", tag: "Family", span: "" },
  { src: g8, label: "Birthday Memory", tag: "Birthday", span: "" },
];

export function Portfolio() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-primary">The Gallery</div>
            <h2 className="mt-3 font-display text-4xl font-light text-ivory md:text-5xl">
              Moments we've been <span className="italic text-gradient-gold">honored</span> to keep
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ivory/65">
            A glimpse of the weddings, graduations, and traditions we've filmed across Ethiopia.
          </p>
        </motion.div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4">
          {items.map((it, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                <div className="text-[10px] uppercase tracking-[0.25em] text-primary">{it.tag}</div>
                <div className="mt-1 font-display text-lg text-ivory">{it.label}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-background/95 backdrop-blur-xl p-6"
          >
            <button onClick={() => setActive(null)} className="absolute top-6 right-6 rounded-full glass p-3 text-ivory">
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={active}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              src={items[active].src}
              alt={items[active].label}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-[var(--shadow-elegant)]"
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <div className="text-xs uppercase tracking-[0.3em] text-primary">{items[active].tag}</div>
              <div className="mt-1 font-display text-2xl text-ivory">{items[active].label}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
