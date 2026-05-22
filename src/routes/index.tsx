import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { Booking } from "@/components/site/Booking";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Amu Pictures — Ethiopian Cinematic Photography & Videography" },
      {
        name: "description",
        content:
          "Amu Pictures captures Ethiopia's most beautiful moments — Habesha weddings, graduations, cultural events, engagements, and family stories told cinematically.",
      },
      { property: "og:title", content: "Amu Pictures — Ethiopian Cinematic Photography" },
      {
        property: "og:description",
        content:
          "Habesha weddings, graduations, and cultural stories filmed cinematically in Addis Ababa.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Amu Pictures",
          description: "Ethiopian cinematic photography & videography studio.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Addis Ababa",
            addressCountry: "ET",
          },
          image: "/src/assets/hero-wedding.jpg",
          priceRange: "$$",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  );
}
