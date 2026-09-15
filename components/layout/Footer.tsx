"use client";

import Link from "next/link";
import { Phone, Mail, Clock, Send, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

const socialIcons = {
    facebook: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
    twitter: (
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    ),
    linkedin: (
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    ),
    instagram: (
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.24 2.22.41.56.21.96.47 1.38.89.42.42.78.82 1.19 1.24.4.4.77.83.9 1.4.17.57.36 1.2.42 2.36.06 1.27.07 1.65.07 4.86s-.01 3.58-.07 4.86c-.06 1.17-.25 1.8-.42 2.23-.21.56-.5.96-.92 1.38-.42.41-.83.78-1.24 1.2-.41.4-.83.77-1.41.9-.56.17-1.2.36-2.37.42-1.27.06-1.65.07-4.87.07s-3.58-.01-4.86-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.21-.96-.47-1.38-.89-.41-.42-.78-.82-1.19-1.24-.4-.4-.77-.83-.9-1.4-.17-.57-.36-1.2-.42-2.36-.06-1.27-.07-1.65-.07-4.86s.01-3.58.07-4.86c.06-1.17.25-1.8.42-2.23.21-.56.5-.96.92-1.38.42-.41.83-.78 1.24-1.2.41-.4.83-.77 1.41-.9.56-.17 1.2-.36 2.37-.42 1.27-.06 1.65-.07 4.87-.07zm0-2.16c-3.25 0-3.66.01-4.9.07-1.2.05-1.82.25-2.24.42-.55.21-.95.47-1.37.89-.41.42-.78.82-1.2 1.23-.4.41-.77.83-.9 1.4-.16.56-.35 1.19-.42 2.36-.05 1.26-.07 1.64-.07 4.86s.01 3.58.07 4.86c.06 1.17.25 1.8.42 2.23.21.56.5.96.92 1.38.42.41.83.78 1.24 1.2.41.4.82.77 1.4.9.56.17 1.2.35 2.36.42 1.27.05 1.64.07 4.86.07s3.58-.01 4.86-.07c1.17-.05 1.8-.24 2.23-.41.55-.21.95-.47 1.37-.89.41-.42.78-.82 1.2-1.23.4-.41.77-.83.9-1.4.16-.56.35-1.19.42-2.36.05-1.26.07-1.64.07-4.86s-.01-3.58-.07-4.86c-.06-1.17-.25-1.8-.42-2.23-.21-.56-.5-.96-.92-1.38-.42-.41-.83-.78-1.24-1.2-.41-.4-.82-.77-1.4-.9-.56-.17-1.2-.35-2.36-.42-1.27-.05-1.64-.07-4.86-.07z" />
    ),
  };

  return (
    <footer className="relative bg-darkest text-light overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/footer-bg.png")',
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-secondary/90" />
      {/* Subtle Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-transparent to-transparent" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Grid - 5 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Column 1: Brand + Tagline + Social */}
          <div className="space-y-6 lg:pr-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-light">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="font-yantramanav font-black text-2xl text-light">
                HomePro
              </span>
            </Link>
            <p className="text-sm text-light/80 leading-relaxed max-w-xs">
              Reliable home services from professionals you can trust.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { name: "facebook", icon: socialIcons.facebook, href: "#" },
                { name: "twitter", icon: socialIcons.twitter, href: "#" },
                { name: "instagram", icon: socialIcons.instagram, href: "#" },
                { name: "linkedin", icon: socialIcons.linkedin, href: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group relative w-10 h-10 rounded-full border border-light/20 bg-transparent flex items-center justify-center hover:border-primary hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="text-white">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="font-yantramanav font-bold text-lg text-light relative pb-3">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary" />
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-light/80 hover:text-primary relative inline-flex items-center gap-2 group transition-colors duration-300"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-6">
            <h4 className="font-yantramanav font-bold text-lg text-light relative pb-3">
              Our Services
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary" />
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/services/plumbing", label: "Plumbing" },
                { href: "/services/electrical", label: "Electrical" },
                { href: "/services/hvac", label: "HVAC" },
                { href: "/services/maintenance", label: "Maintenance" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-light/80 hover:text-primary relative inline-flex items-center gap-2 group transition-colors duration-300"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6">
            <h4 className="font-yantramanav font-bold text-lg text-light relative pb-3">
              Contact Info
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary" />
            </h4>
            <div className="space-y-5">
              {[
                { icon: Phone, title: "Phone", value: "(555) 123-4567", href: "tel:+15551234567" },
                { icon: Mail, title: "Email", value: "hello@homeproservices.com", href: "mailto:hello@homeproservices.com" },
                { icon: Clock, title: "Working Hours", value: "Mon - Sat: 8:00 AM - 8:00 PM", href: null },
              ].map((contact, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                    <contact.icon size={20} className="text-primary group-hover:text-light transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-yantramanav font-medium text-sm text-light">{contact.title}</p>
                    {contact.href ? (
                      <a href={contact.href} className="text-sm text-light/80 hover:text-primary transition-colors duration-300">
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-sm text-light/80">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div className="space-y-6">
            <h4 className="font-yantramanav font-bold text-lg text-light relative pb-3">
              Newsletter
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary" />
            </h4>
            <p className="text-sm text-light/80 leading-relaxed">
              Subscribe to our newsletter for the latest news and offers.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-secondary-light/50 border border-light/10 rounded-lg text-sm text-light placeholder-muted/50 focus:outline-none focus:border-primary focus:bg-secondary-light transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-primary text-light font-yantramanav font-medium text-sm rounded-lg hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-light/10" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-secondary/95 px-4 text-light/40 backdrop-blur-sm">HomePro Services</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
          <p className="text-sm text-light/70">
            &copy; 2026 HomePro Services. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-light/60">Created by
            </span>
            <span className="text-sm text-primary font-medium">HomePro Team</span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-light shadow-xl shadow-primary/30 hover:bg-primary-dark hover:scale-105 hover:shadow-primary/50 transition-all duration-300 animate-slide-up"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <style jsx global>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;