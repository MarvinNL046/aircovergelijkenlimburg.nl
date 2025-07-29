"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Diensten", 
    href: "/diensten",
    submenu: [
      { name: "Airco Installatie", href: "/diensten/installatie" },
      { name: "Onderhoud", href: "/diensten/onderhoud" },
      { name: "Reparatie", href: "/diensten/reparatie" }
    ]
  },
  { 
    name: "Steden", 
    href: "/steden",
    submenu: [
      { name: "Maastricht", href: "/steden/maastricht" },
      { name: "Sittard", href: "/steden/sittard" },
      { name: "Heerlen", href: "/steden/heerlen" },
      { name: "Roermond", href: "/steden/roermond" },
      { name: "Venlo", href: "/steden/venlo" }
    ]
  },
  { name: "Merken", href: "/merken" },
  { name: "Kennisbank", href: "/kennisbank" },
  { name: "Contact", href: "/contact" }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
    }`}>
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">
              AircoverGelijkenlimburg.nl
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href} 
                  className={`flex items-center gap-1 text-gray-700 hover:text-orange-500 font-medium transition-colors ${
                    pathname === item.href ? "text-orange-500" : ""
                  }`}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:0462021430" className="text-gray-700 hover:text-orange-500 font-semibold">
              <Phone className="w-5 h-5 inline mr-2" />
              046 202 1430
            </a>
            <Link href="/offerte">
              <Button className="btn-primary">
                Gratis Offerte
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <a href="tel:0462021430" className="btn-primary text-sm px-4 py-2">
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className={`text-gray-700 hover:text-orange-500 px-2 py-2 text-lg font-medium ${
                        pathname === item.href ? "text-orange-500" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                        className="p-2"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          openSubmenu === item.name ? "rotate-180" : ""
                        }`} />
                      </button>
                    )}
                  </div>
                  
                  {item.submenu && openSubmenu === item.name && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block text-gray-600 hover:text-orange-500 py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <Link href="/offerte" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full btn-primary">
                    Gratis Offerte Aanvragen
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}