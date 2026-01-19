'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Your Gateway to Global Education
              </h1>
              <p className="text-xl text-white/90 leading-relaxed text-balance">
                Study medicine, engineering, MBA, or PhD in USA, UK, Germany, Australia, New Zealand & Dubai with
                Eurotechedu's expert guidance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold shadow-lg">
                Start Your Journey
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold"
              >
                Learn More
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="space-y-1">
                <p className="text-3xl font-bold">500+</p>
                <p className="text-sm text-white/80">Students Placed</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm text-white/80">Years Experience</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm text-white/80">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Ready to Study Abroad?</h2>
                <p className="text-white/80">Get expert guidance and free consultation</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">6 Premier Destinations</p>
                    <p className="text-sm text-white/80">USA, UK, Germany, Australia, New Zealand & Dubai</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Expert Counselors</p>
                    <p className="text-sm text-white/80">Personalized guidance from day one</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20">
                <p className="text-sm text-white/80 mb-4">📞 Call now for free consultation</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+919004675133"
                    className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-6 rounded-lg transition"
                  >
                    9004675133
                  </a>
                  <a
                    href="tel:+919892898000"
                    className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition"
                  >
                    9892898000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
