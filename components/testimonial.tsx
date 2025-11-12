"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  index?: number;
}

export function Testimonial({
  quote,
  author,
  role,
  company,
  index = 0,
}: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 border-2 border-brand-pink"
    >
      <Quote className="w-10 h-10 text-brand-orange mb-4" />
      <p className="text-brand-gray text-base md:text-lg leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="border-t-2 border-brand-pink pt-4">
        <p className="font-bold text-brand-purple">{author}</p>
        <p className="text-sm text-brand-gray">
          {role} - {company}
        </p>
      </div>
    </motion.div>
  );
}
