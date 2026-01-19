'use client';

import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const programs = [
  {
    name: 'MBBS',
    icon: '🏥',
    duration: '5-6 Years',
    eligibility: '12th Biology + Physics + Chemistry',
    cost: 'Varies by destination',
    highlights: [
      'WHO recognized universities',
      'Hospital internships included',
      'Return to India options',
      'Scholarship opportunities',
    ],
    color: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    name: 'Engineering',
    icon: '⚙️',
    duration: '4 Years',
    eligibility: '12th Physics + Mathematics + Chemistry',
    cost: 'Competitive pricing',
    highlights: [
      'Top-tier tech institutes',
      'Internship opportunities',
      'Post-study work visa',
      'Industry partnerships',
    ],
    color: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    name: 'MBA',
    icon: '💼',
    duration: '1-2 Years',
    eligibility: 'Bachelor\'s degree + Work experience',
    cost: 'Higher ROI programs',
    highlights: [
      'Global business network',
      'Career advancement',
      'Executive placements',
      'Scholarship programs',
    ],
    color: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    name: 'PhD',
    icon: '🎓',
    duration: '3-4 Years',
    eligibility: 'Master\'s degree in relevant field',
    cost: 'Often fully funded',
    highlights: [
      'Full scholarship options',
      'Research opportunities',
      'Faculty mentoring',
      'Academic career path',
    ],
    color: 'bg-amber-50',
    borderColor: 'border-amber-200',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Study <span className="text-primary">Programs We Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From medicine to PhDs, we guide you through every step of your academic journey
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <Card
              key={program.name}
              className={`${program.color} ${program.borderColor} border-2 overflow-hidden hover:shadow-xl transition-all duration-300`}
            >
              <div className="p-6 space-y-4 h-full flex flex-col">
                {/* Icon & Title */}
                <div className="space-y-2">
                  <div className="text-4xl">{program.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground">{program.name}</h3>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Duration</p>
                    <p className="font-semibold text-foreground">{program.duration}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Eligibility</p>
                    <p className="font-semibold text-foreground text-xs">{program.eligibility}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Investment</p>
                    <p className="font-semibold text-primary">{program.cost}</p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-4 flex-grow">
                  {program.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2">
                      <Check className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-sm font-medium text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full mt-4 py-2 px-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors text-sm">
                  Explore Program
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-foreground mb-4">
            Not sure which program is right for you?{' '}
            <span className="font-semibold text-primary">Let us guide you!</span>
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors">
            Schedule Free Counseling Session
          </button>
        </div>
      </div>
    </section>
  );
}
