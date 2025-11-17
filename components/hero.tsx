"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  gradient?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  gradient = true,
  imageSrc,
  imageAlt,
}: HeroProps) {
  const hasImage = !!imageSrc;

  return (
    <section
      className={`relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden ${
        gradient ? "gradient-purple" : "bg-white"
      }`}
    >
      {/* Background Decoration */}
      {gradient && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Logo Mosaic Pattern */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: 'url(/logo.png)',
              backgroundSize: '120px 120px',
              backgroundRepeat: 'space',
              backgroundPosition: 'center',
              filter: 'brightness(0) invert(1)'
            }}
          />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl animate-float-slow-reverse" />
        </div>
      )}

      <div className="container-custom relative z-10">
        <div className={hasImage ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" : "max-w-4xl mx-auto text-center"}>
          <div className={hasImage ? "" : "text-center"}>
            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
                    gradient
                      ? "bg-brand-orange text-brand-purple"
                      : "bg-brand-purple text-white"
                  }`}
                >
                  {subtitle}
                </span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`mb-6 ${
                gradient ? "text-white" : "text-brand-purple"
              } text-balance`}
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`mb-8 text-lg md:text-xl ${hasImage ? "" : "max-w-3xl mx-auto"} ${
                  gradient ? "text-brand-pink" : "text-brand-gray"
                }`}
              >
                {description}
              </motion.p>
            )}

            {ctaText && ctaHref && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button asChild variant="orange" size="lg">
                  <Link href={ctaHref} className="group">
                    {ctaText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            )}
          </div>

          {hasImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden"
            >
              <Image
                src={imageSrc}
                alt={imageAlt || "Hero image"}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
