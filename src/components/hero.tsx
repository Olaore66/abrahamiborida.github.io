"use client";

import { motion } from "framer-motion";
import { AnimatedButton } from "./ui/button";
import { Download, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
            {/* Background decoration */}
            <div className="absolute inset-0 w-full h-full bg-background z-[-1]">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob" />
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000" />
                <div className="absolute bottom-1/4 left-1/3 w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000" />
            </div>

            <div className="max-w-4xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-medium backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Senior Full-Stack Engineer
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 font-heading"
                >
                    Hi, I&apos;m{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400">
                        Abraham Iborida
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
                >
                    I build fintech mobile apps and scalable backend APIs using Flutter and Spring Boot.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <AnimatedButton asChild size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg shadow-blue-500/25">
                        <a href="#projects">
                            View Projects
                            <ArrowRight className="ml-2" size={18} />
                        </a>
                    </AnimatedButton>
                    <AnimatedButton variant="outline" asChild size="lg" className="w-full sm:w-auto bg-background/50 backdrop-blur-sm border-white/10 hover:bg-white/5">
                        <a href="https://drive.google.com/file/d/19OQY6NRMvGXOOfnOEEIlkbhwVJgQKJ0Q/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2" size={18} />
                            Download CV
                        </a>
                    </AnimatedButton>
                    <AnimatedButton variant="ghost" asChild size="lg" className="w-full sm:w-auto hover:bg-blue-500/10 hover:text-blue-400 transition-colors">
                        <a href="#contact">
                            <Mail className="mr-2" size={18} />
                            Contact
                        </a>
                    </AnimatedButton>
                </motion.div>
            </div>
        </section>
    );
}
