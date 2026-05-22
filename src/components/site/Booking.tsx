import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const eventTypes = [
  "Habesha Wedding",
  "Cinematic Wedding Film",
  "Graduation",
  "Birthday / Family",
  "Engagement",
  "Church Ceremony",
  "Cultural Event",
  "Music Video",
  "Business Event",
  "Other",
];

export function Booking() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Selam! We received your request — we'll reach out within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="booking" className="relative overflow-hidden py-28">
      <div className="pattern-overlay" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2"
        >
          <div className="text-xs uppercase tracking-[0.35em] text-primary">Let's Begin</div>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-ivory md:text-5xl">
            Book your <span className="italic text-gradient-gold">unforgettable</span> day
          </h2>
          <p className="mt-5 text-ivory/70 leading-relaxed">
            Tell us a little about your event. We'll respond personally within 24 hours with
            availability, pricing, and a custom plan crafted for your story.
          </p>

          <div className="mt-10 space-y-3">
            <a
              href="https://t.me/amupictures"
              target="_blank"
              rel="noopener"
              className="group flex items-center gap-4 rounded-2xl glass p-4 transition-all hover:border-primary/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl glass-gold">
                <Send className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-[0.2em] text-primary/70">Telegram</div>
                <div className="font-medium text-ivory">@amupictures</div>
              </div>
              <span className="text-ivory/40 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="https://wa.me/251900000000"
              target="_blank"
              rel="noopener"
              className="group flex items-center gap-4 rounded-2xl glass p-4 transition-all hover:border-primary/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl glass-gold">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-[0.2em] text-primary/70">WhatsApp</div>
                <div className="font-medium text-ivory">+251 900 000 000</div>
              </div>
              <span className="text-ivory/40 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="tel:+251900000000"
              className="group flex items-center gap-4 rounded-2xl glass p-4 transition-all hover:border-primary/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl glass-gold">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-[0.2em] text-primary/70">Phone Call</div>
                <div className="font-medium text-ivory">+251 900 000 000</div>
              </div>
              <span className="text-ivory/40 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          onSubmit={onSubmit}
          className="rounded-3xl glass p-8 md:p-10 lg:col-span-3"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" name="name" placeholder="Abenezer Tadesse" required />
            <Field label="Phone Number" name="phone" placeholder="+251 ..." required />
            <Field label="Telegram / WhatsApp" name="contact" placeholder="@username" />
            <Field label="Event Date" name="date" type="date" required />

            <div className="sm:col-span-2">
              <Label>Event Type</Label>
              <select
                required
                name="eventType"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-ivory outline-none transition-colors focus:border-primary"
              >
                <option value="" className="bg-background">
                  Select an event…
                </option>
                {eventTypes.map((t) => (
                  <option key={t} value={t} className="bg-background">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <Label>Tell us about your day</Label>
              <textarea
                name="message"
                rows={4}
                placeholder="Venue, number of guests, the feeling you want preserved…"
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-ivory outline-none transition-colors placeholder:text-ivory/30 focus:border-primary"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
          >
            {submitting ? "Sending…" : "Send Booking Request"}
            <span>→</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs uppercase tracking-[0.2em] text-primary/80">{children}</label>;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-ivory outline-none transition-colors placeholder:text-ivory/30 focus:border-primary"
      />
    </div>
  );
}
