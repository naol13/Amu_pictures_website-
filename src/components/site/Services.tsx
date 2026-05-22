import { motion } from "framer-motion";
import { Camera, Film, GraduationCap, Cake, Plane, Shirt, Music, Sparkles } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Habesha Wedding Photography",
    desc: "Sacred moments of the Mels and traditional ceremony, captured with reverence.",
  },
  {
    icon: Film,
    title: "Cinematic Wedding Films",
    desc: "Feature-length wedding films scored to the rhythm of your love story.",
  },
  {
    icon: GraduationCap,
    title: "Graduation Shoots",
    desc: "Celebrate the achievement — cap, gown, family, and pride in golden light.",
  },
  {
    icon: Cake,
    title: "Birthday & Family Events",
    desc: "Intimate family gatherings, milestones, and the everyday joys worth keeping.",
  },
  {
    icon: Plane,
    title: "Drone Videography",
    desc: "Aerial cinematography that puts your celebration on an epic, sweeping scale.",
  },
  {
    icon: Shirt,
    title: "Traditional Clothing Shoots",
    desc: "Editorial portraits honoring kemis, netela, and the artistry of Ethiopian dress.",
  },
  {
    icon: Music,
    title: "Music Video Production",
    desc: "Full creative direction for Ethiopian artists — concept to color grade.",
  },
  {
    icon: Sparkles,
    title: "Photo & Video Editing",
    desc: "Cinematic color, retouching, and Ethiopian-inspired audio mastering.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-28 bg-cinematic">
      <div className="pattern-overlay" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="text-xs uppercase tracking-[0.35em] text-primary">What we craft</div>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-ivory md:text-5xl">
            Services made for <span className="italic text-gradient-gold">Ethiopian</span> moments
          </h2>
          <p className="mt-4 text-ivory/70">
            Every package is shaped around your tradition, your guests, and the energy of the day.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass p-7 transition-all hover:border-primary/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl glass-gold">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 font-display text-xl text-ivory">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">{s.desc}</p>
                <div className="habesha-divider mt-5" />
                <div className="mt-4 text-xs uppercase tracking-[0.25em] text-primary/70">
                  Inquire →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
