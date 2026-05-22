import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Stories" },
  { href: "#booking", label: "Book" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 ${scrolled ? "glass rounded-full mx-4 md:mx-auto md:max-w-6xl px-6 py-3" : ""}`}>
        <a href="#top" className="group flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full glass-gold">
            <span className="font-display text-xl text-gradient-gold">A</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wide text-ivory">Amu Pictures</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary/80">Ethiopian Stories</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-ivory/80 transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#booking" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-gold)] md:inline-flex">
          Book a Session
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-ivory" aria-label="menu">
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-4 mt-3 rounded-2xl p-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ivory/90">
                {l.label}
              </a>
            ))}
            <a href="#booking" onClick={() => setOpen(false)} className="rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground">
              Book a Session
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
