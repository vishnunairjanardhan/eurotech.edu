'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold">
              <span className="text-primary">Eurotechedu</span>
              <span className="text-accent ml-1">Pro</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0">Study Abroad Experts</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#destinations" className="text-sm font-medium text-foreground hover:text-primary transition">
              Destinations
            </a>
            <a href="#programs" className="text-sm font-medium text-foreground hover:text-primary transition">
              Programs
            </a>
            <a href="#why-us" className="text-sm font-medium text-foreground hover:text-primary transition">
              Why Us
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919004675133"
              className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition"
            >
              <Phone size={18} />
              Call Now
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white">Get Free Consultation</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <a href="#destinations" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              Destinations
            </a>
            <a href="#programs" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              Programs
            </a>
            <a href="#why-us" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              Why Us
            </a>
            <a href="#contact" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              Contact
            </a>
            <div className="flex flex-col gap-3 pt-2">
              <a href="tel:+919004675133" className="text-sm font-semibold text-primary">
                📞 9004675133
              </a>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">Get Free Consultation</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
