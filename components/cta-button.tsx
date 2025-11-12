"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  text: string;
  href: string;
  variant?: "default" | "orange" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export function CTAButton({
  text,
  href,
  variant = "orange",
  size = "lg",
  className,
}: CTAButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Button asChild variant={variant} size={size}>
        <Link href={href} className="group">
          {text}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </motion.div>
  );
}
