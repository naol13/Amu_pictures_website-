import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Selamawit & Yonas",
    role: "Wedding · Addis Ababa",
    text: "Amu Pictures didn't just film our wedding — they captured the soul of it. Watching the cinematic film, my mother cried like it was happening all over again.",
  },
  {
    name: "Bethlehem Tadesse",
    role: "Graduation · AAU",
    text: "Every frame feels like a painting. The way they shot my graduation with my family — it's something I'll show my children one day.",
  },
  {
    name: "Dawit Mekonnen",
    role: "Engagement · Bahir Dar",
    text: "Professional, warm, and so respectful of our Habesha traditions. They felt like family by the end of the shoot. Worth every birr.",
  },
  {
    name: "Hiwot G/Medhin",
    role: "Family Portrait",
    text: "I've never seen photos that made me feel this much. Amu Pictures gave us memories that look like cinema. Forever grateful.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-28 bg-cinematic">
      <div className="pattern-overlay" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="text-xs uppercase tracking-[0.35em] text-primary">Kind Words</div>
          <h2 className="mt-4 font-display text-4xl font-light text-ivory md:text-5xl">
            From the <span className="italic text-gradient-gold">families</span> we've filmed
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-3xl glass p-8"
            >
              <Quote className="absolute right-6 top-6 h-12 w-12 text-primary/15" />
              <p className="font-display text-xl font-light leading-relaxed text-ivory/90 md:text-2xl">
                "{r.text}"
              </p>
              <div className="habesha-divider my-6 max-w-[80px]" />
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full glass-gold font-display text-lg text-gradient-gold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-medium text-ivory">{r.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-primary/70">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
