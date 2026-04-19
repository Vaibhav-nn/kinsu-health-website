import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AISection from "@/components/AISection";
import Security from "@/components/Security";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <AISection />
      <Features />
      <Security />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
