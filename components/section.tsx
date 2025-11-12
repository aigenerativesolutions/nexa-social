"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export function Section({
  children,
  className,
  title,
  subtitle,
  description,
  centered = false,
}: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container-custom">
        {(title || subtitle || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn("mb-12 md:mb-16", centered && "text-center")}
          >
            {subtitle && (
              <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-brand-orange/10 text-brand-orange">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-brand-purple mb-4 text-balance">{title}</h2>
            )}
            {description && (
              <p className={cn(
                "text-brand-gray max-w-3xl text-lg",
                centered && "mx-auto"
              )}>
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
