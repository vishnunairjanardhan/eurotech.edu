'use client';

import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    name: 'USA',
    icon: '🇺🇸',
    description: 'Top-ranked universities with world-class education',
    highlights: ['Harvard, MIT, Stanford', 'OPT Work Opportunity', 'Best in STEM'],
  },
  {
    name: 'United Kingdom',
    icon: '🇬🇧',
    description: 'Historic institutions with global recognition',
    highlights: ['Oxford, Cambridge, LSE', '2-Year Programs', 'EU Access'],
  },
  {
    name: 'Germany',
    icon: '🇩🇪',
    description: 'Affordable education with excellent quality',
    highlights: ['Low/Free Tuition', 'Engineering Focus', 'Post-Study Work'],
  },
  {
    name: 'Australia',
    icon: '🇦🇺',
    description: 'Modern campuses in multicultural environment',
    highlights: ['Beautiful Campus Life', '3-Year Work Visa', 'Best MBBS'],
  },
  {
    name: 'New Zealand',
    icon: '🇳🇿',
    description: 'Quality education in serene environment',
    highlights: ['Supportive Community', '3-Year Work Visa', 'Safe & Friendly'],
  },
  {
    name: 'Dubai',
    icon: '🇦🇪',
    description: 'Gateway to Middle East with premium education',
    highlights: ['Tax-Free Income', 'Global Hub', 'Luxury Lifestyle'],
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Study in 6 Premier <span className="text-primary">Destinations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from world-leading universities across the globe tailored to your dreams
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Card
              key={destination.name}
              className="bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6 space-y-4">
                {/* Icon & Name */}
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="text-5xl">{destination.icon}</div>
                    <h3 className="text-2xl font-bold text-foreground">{destination.name}</h3>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">{destination.description}</p>

                {/* Highlights */}
                <div className="space-y-2 pt-4">
                  {destination.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <span className="text-sm font-medium text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full mt-4 py-2 px-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors text-sm">
                  Learn More
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
