"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`navbar-skew ${
          isSticky
            ? "sticky shadow-md bg-secondary text-light"
            : "bg-light text-secondary"
        } transition-all duration-500`}
      >
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-24 relative z-10">
            <Link href="/" className="flex items-center gap-3 group font-yantramanav font-black text-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-light">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 0-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className={isSticky ? "text-light" : "text-secondary"}>HomePro</span>
              <span className="text-primary">Services</span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 font-yantramanav font-medium text-sm transition-all duration-300 group ${
                    isActive(link.href)
                      ? "text-primary"
                      : isSticky
                      ? "text-light hover:text-primary"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full`}
                  />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className={`hidden sm:inline-flex items-center gap-2 font-yantramanav font-medium text-sm px-6 py-3 border-2 border-primary rounded transition-all duration-300 ${
                  isSticky
                    ? "text-light hover:text-primary bg-secondary hover:bg-primary"
                    : "text-primary hover:text-light hover:bg-primary"
                }`}
              >
                Get a Quote
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:rotate-0"
                  style={{ transform: "rotate(-45deg)" }}
                >
                  <path
                    d="M7 17L17 7M17 7L7 7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 transition-colors duration-300 ${
                  isSticky ? "text-light" : "text-secondary"
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-light shadow-lg transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 px-4 font-yantramanav font-medium text-base transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-primary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center mt-4 py-3 px-6 bg-primary text-light font-yantramanav font-medium rounded hover:bg-primary-dark transition-colors duration-300"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
