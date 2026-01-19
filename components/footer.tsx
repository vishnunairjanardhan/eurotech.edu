'use client';

import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold">
                Eurotechedu
                <span className="text-accent ml-1">Pro</span>
              </h3>
              <p className="text-sm text-white/80 mt-1">Study Abroad Experts</p>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Your trusted partner in achieving international education dreams. 10+ years of excellence in student
              placement.
            </p>
          </div>

          {/* Destinations */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Destinations</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-accent transition">
                  🇺🇸 USA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  🇬🇧 United Kingdom
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  🇩🇪 Germany
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  🇦🇺 Australia
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  🇳🇿 New Zealand
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  🇦🇪 Dubai
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Programs</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-accent transition">
                  MBBS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Engineering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  MBA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  PhD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Other Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Call us</p>
                  <a href="tel:+919004675133" className="font-semibold hover:text-accent transition">
                    9004675133
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Email us</p>
                  <a href="mailto:info@eurotechedu.com" className="font-semibold hover:text-accent transition">
                    info@eurotechedu.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-xs leading-relaxed">
                    102 Janaki RaghuNath Residency, Agarkar Lane, Dombivli 421201, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-xs text-white/80">Students Placed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-xs text-white/80">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">98%</p>
                <p className="text-xs text-white/80">Success Rate</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-end gap-4">
              <a href="#" className="text-white/80 hover:text-accent transition" aria-label="Facebook">
                f
              </a>
              <a href="#" className="text-white/80 hover:text-accent transition" aria-label="Twitter">
                𝕏
              </a>
              <a href="#" className="text-white/80 hover:text-accent transition" aria-label="LinkedIn">
                in
              </a>
              <a href="#" className="text-white/80 hover:text-accent transition" aria-label="Instagram">
                📷
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-white/60 space-y-2">
            <p>© 2024 Eurotechedu. All rights reserved. | STUDY ABROAD CONSULTANTS</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href="#" className="hover:text-accent transition">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-accent transition">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:text-accent transition">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA - Sticky at Bottom Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-accent text-primary py-3 px-4 shadow-lg">
        <a
          href="tel:+919004675133"
          className="flex items-center justify-center gap-2 font-bold"
        >
          📞 Call Now: 9004675133
        </a>
      </div>
    </footer>
  );
}
