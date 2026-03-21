import { TopBar } from "@/components/layout/top-bar";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { WhyUs } from "@/components/home/why-us";
import { TrekPackages } from "@/components/home/trek-packages";
import { Adventures } from "@/components/home/adventures";
import { Testimonials } from "@/components/home/testimonials";
import { BlogPreview } from "@/components/home/blog-preview";
import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <Hero />
      <WhyUs />
      <TrekPackages />
      <Adventures />
      <Testimonials />
      <BlogPreview />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}