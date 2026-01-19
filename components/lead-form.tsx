'use client';

import React from "react"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    destination: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', program: '', destination: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-balance">
              Get Your Free Consultation Today
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Let our expert advisors create a personalized study plan for your dream destination. Complete the form and
              we&apos;ll contact you within 24 hours.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 pt-6 border-t border-white/20">
              <div className="flex items-start gap-4">
                <Phone className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold mb-1">Call Us</p>
                  <p className="text-white/80">
                    <a href="tel:+919004675133" className="hover:text-accent transition">
                      9004675133
                    </a>
                    {' / '}
                    <a href="tel:+919892898000" className="hover:text-accent transition">
                      9892898000
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold mb-1">Visit Us</p>
                  <p className="text-white/80">102 Janaki RaghuNath Residency, Agarkar Lane, Dombivli 421201, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold mb-1">Email Us</p>
                  <p className="text-white/80">
                    <a href="mailto:info@eurotechedu.com" className="hover:text-accent transition">
                      info@eurotechedu.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
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

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals and aspirations"
                    rows={3}
                    className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-accent transition resize-none"
                  />
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
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
