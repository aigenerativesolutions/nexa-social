"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { href: "/servicos", label: "Serviços" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/diferenciais", label: "Diferenciais" },
  { href: "/clientes-depoimentos", label: "Clientes" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsScrolled(window.scrollY > 20);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            aria-label="Nexa Social - Página Inicial"
          >
            <Image
              src="/logo.png"
              alt="Nexa Social Logo"
              width={40}
              height={40}
              className="group-hover:scale-110 transition-transform"
              priority
            />
            <span className={cn(
              "text-xl font-bold transition-colors",
              isScrolled ? "text-brand-purple" : "text-white"
            )}>
              Nexa Social
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors rounded-xl",
                  isScrolled
                    ? "text-brand-midnight hover:text-brand-purple hover:bg-brand-pink"
                    : "text-white hover:text-brand-orange hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Button asChild variant="orange" size="sm">
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-xl transition-colors",
              isScrolled
                ? "hover:bg-brand-pink"
                : "hover:bg-white/10"
            )}
            aria-label="Menu de navegação"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-brand-purple" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-brand-purple" : "text-white")} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-brand-pink bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-brand-midnight hover:text-brand-purple hover:bg-brand-pink transition-colors rounded-xl"
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button asChild variant="orange" className="w-full">
                  <Link href="/contato" onClick={() => setIsMobileMenuOpen(false)}>
                    Fale Conosco
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
