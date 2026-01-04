import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import AppShowcase from "@/components/sections/AppShowcase";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AppShowcase />
      </main>
      <Footer />
    </div>
  );
}
