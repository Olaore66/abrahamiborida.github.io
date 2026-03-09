"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
    title?: string;
    subtitle?: string;
}

export function SectionWrapper({
    children,
    id,
    className,
    title,
    subtitle,
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                className
            )}
        >
            {(title || subtitle) && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 md:mb-16 text-center"
                >
                    {title && (
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            )}
            {children}
        </section>
    );
}
