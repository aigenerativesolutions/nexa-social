"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Building2,
  Users,
  Heart,
  Network,
  TrendingUp,
  Lightbulb,
  Target,
  Settings,
  CheckCircle2,
} from "lucide-react";

const iconMap = {
  Building2,
  Users,
  Heart,
  Network,
  TrendingUp,
  Lightbulb,
  Target,
  Settings,
  CheckCircle2,
};

type IconName = keyof typeof iconMap;

interface CardProps {
  title: string;
  description: string;
  iconName?: IconName;
  gradient?: boolean;
  className?: string;
  index?: number;
}

export function Card({
  title,
  description,
  iconName,
  gradient = false,
  className,
  index = 0,
}: CardProps) {
  const Icon = iconName ? iconMap[iconName] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "p-6 md:p-8 rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 group",
        gradient
          ? "gradient-purple text-white"
          : "bg-white border-2 border-brand-pink",
        className
      )}
    >
      {Icon && (
        <div
          className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
            gradient
              ? "bg-brand-orange text-brand-purple"
              : "bg-brand-purple/10 text-brand-purple"
          )}
        >
          <Icon className="w-7 h-7" />
        </div>
      )}
      <h3
        className={cn(
          "text-xl md:text-2xl font-bold mb-3",
          gradient ? "text-white" : "text-brand-purple"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-sm md:text-base leading-relaxed",
          gradient ? "text-brand-pink" : "text-brand-gray"
        )}
      >
        {description}
      </p>
    </motion.div>
  );
}
