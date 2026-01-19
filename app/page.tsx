'use client';

import Header from '@/components/header';
import Hero from '@/components/hero';
import Destinations from '@/components/destinations';
import Programs from '@/components/programs';
import WhyChooseUs from '@/components/why-choose-us';
import LeadForm from '@/components/lead-form';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Destinations />
      <Programs />
      <WhyChooseUs />
      <LeadForm />
      <Footer />
    </main>
  );
}
