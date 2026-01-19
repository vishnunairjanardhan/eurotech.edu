'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Zap, Mail, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    destination: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', program: '', destination: '' });
    }, 3000);
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Content */}
          <div className="space-y-6 flex flex-col justify-between">
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
                Learn More
                <ArrowRight className="ml-2" size={20} />
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

          {/* Right Content - Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Get Your Free Consultation</h2>

            {submitted ? (
              <div className="space-y-4 text-center py-12">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold">Thank You!</h3>
                <p className="text-white/90">
                  Your inquiry has been received. Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-accent transition"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-accent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Your mobile number"
                      className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-accent transition"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="program" className="block text-sm font-semibold mb-2">
                      Program Interest*
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent transition"
                    >
                      <option value="" className="bg-primary">
                        Select Program
                      </option>
                      <option value="mbbs" className="bg-primary">
                        MBBS
                      </option>
                      <option value="engineering" className="bg-primary">
                        Engineering
                      </option>
                      <option value="mba" className="bg-primary">
                        MBA
                      </option>
                      <option value="phd" className="bg-primary">
                        PhD
                      </option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="destination" className="block text-sm font-semibold mb-2">
                      Preferred Destination*
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent transition"
                    >
                      <option value="" className="bg-primary">
                        Select Destination
                      </option>
                      <option value="usa" className="bg-primary">
                        USA
                      </option>
                      <option value="uk" className="bg-primary">
                        United Kingdom
                      </option>
                      <option value="germany" className="bg-primary">
                        Germany
                      </option>
                      <option value="australia" className="bg-primary">
                        Australia
                      </option>
                      <option value="nz" className="bg-primary">
                        New Zealand
                      </option>
                      <option value="dubai" className="bg-primary">
                        Dubai
                      </option>
                    </select>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-primary font-bold py-3 rounded-lg transition-colors text-base"
                >
                  Get Free Consultation
                </Button>

                <p className="text-xs text-white/60 text-center">
                  We respect your privacy. Your information will only be used to contact you about your consultation.
                </p>

                <div className="pt-4 border-t border-white/20 space-y-3">
                  <p className="text-sm font-semibold">Or reach us directly:</p>
                  <a
                    href="tel:+919004675133"
                    className="flex items-center gap-2 text-white/90 hover:text-accent transition"
                  >
                    <Phone size={18} />
                    <span>9004675133</span>
                  </a>
                  <a
                    href="tel:+919892898000"
                    className="flex items-center gap-2 text-white/90 hover:text-accent transition"
                  >
                    <Phone size={18} />
                    <span>9892898000</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}