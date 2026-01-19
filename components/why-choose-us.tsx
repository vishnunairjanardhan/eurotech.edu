'use client';

import { Card } from '@/components/ui/card';
import { Users, Award, TrendingUp, Clock, Shield, BookOpen } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Dedicated counselors with 10+ years of international education experience',
  },
  {
    icon: Award,
    title: '98% Success Rate',
    description: 'Highest acceptance rates among study abroad consultants in India',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: '500+ students successfully placed in top universities worldwide',
  },
  {
    icon: Clock,
    title: 'End-to-End Support',
    description: 'From application to visa, accommodation, we handle everything',
  },
  {
    icon: Shield,
    title: 'Transparent Process',
    description: 'No hidden fees, clear timelines, and complete transparency',
  },
  {
    icon: BookOpen,
    title: 'Personalized Guidance',
    description: 'Customized plans based on your goals, budget, and preferences',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Why Choose <span className="text-primary">Eurotechedu</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re not just consultants; we&apos;re your trusted partners in your educational journey
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              className="bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 p-8"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <reason.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badge Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { number: '500+', label: 'Happy Students' },
            { number: '10+', label: 'Years Experience' },
            { number: '50+', label: 'Partner Universities' },
            { number: '6', label: 'Global Destinations' },
          ].map((badge) => (
            <div key={badge.label} className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">{badge.number}</p>
              <p className="text-muted-foreground font-medium">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
