"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    index?: number;
}

export function AnimatedCard({
    children,
    className,
    delay = 0,
    index = 0,
}: AnimatedCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: delay || index * 0.1 }}
            whileHover={{ y: -5 }}
            className={cn(
                "bg-card text-card-foreground rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-all hover:ring-1 hover:ring-white/10",
                className
            )}
        >
            {children}
        </motion.div>
    );
}
