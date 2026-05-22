import { Instagram, Youtube, Send, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-cinematic">
      <div className="pattern-overlay" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full glass-gold">
                <span className="font-display text-xl text-gradient-gold">A</span>
              </div>
              <div>
                <div className="font-display text-lg text-ivory">Amu Pictures</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary/80">Ethiopian Stories</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-ivory/60 leading-relaxed">
              A cinematic Ethiopian photography & videography studio honoring Habesha
              traditions and modern moments — based in Addis Ababa.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Studio</div>
            <ul className="mt-5 space-y-2 text-sm text-ivory/70">
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#portfolio" className="hover:text-primary">Portfolio</a></li>
              <li><a href="#booking" className="hover:text-primary">Book a session</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Connect</div>
            <div className="mt-5 flex gap-3">
              {[
                { I: Instagram, href: "#" },
                { I: Youtube, href: "#" },
                { I: Send, href: "https://t.me/amupictures" },
                { I: MessageCircle, href: "https://wa.me/251900000000" },
              ].map(({ I, href }, i) => (
                <a key={i} href={href} className="grid h-11 w-11 place-items-center rounded-full glass text-ivory/80 transition-colors hover:border-primary/50 hover:text-primary">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-ivory/60">Bole · Addis Ababa, Ethiopia</p>
          </div>
        </div>

        <div className="habesha-divider mt-12" />
        <div className="mt-6 flex flex-wrap justify-between gap-3 text-xs text-ivory/40">
          <span>© {new Date().getFullYear()} Amu Pictures. All moments reserved.</span>
          <span>Crafted with love in Addis Ababa.</span>
        </div>
      </div>
    </footer>
  );
}
