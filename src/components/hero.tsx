"use client";

import { motion } from "framer-motion";
import { AnimatedButton } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
            {/* Background Effects */}
            <div className="absolute inset-0 w-full h-full bg-background z-[-1]">
                <div className="absolute top-0 left-1/4 w-full max-w-[600px] aspect-square bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob" />
                <div className="absolute top-1/4 right-1/4 w-full max-w-[500px] aspect-square bg-indigo-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000" />
            </div>

            <div className="max-w-7xl mx-auto w-full z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Left Column: Copy & Buttons (60% width on desktop) */}
                    <div className="w-full lg:w-[60%] text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-slate-900/50 text-blue-400 text-sm font-medium backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Fintech & Mobile Systems Architect
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 font-heading leading-tight"
                        >
                            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400">Secure, High-Scale</span> Mobile Banking & Fintech Systems.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
                        >
                            I engineer resilient fintech platforms and robust backend APIs across African markets. Specializing in bridging legacy core-banking systems with modern mobile experiences using Flutter, Spring Boot, and PostgreSQL.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 mb-8"
                        >
                            <AnimatedButton asChild size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg shadow-blue-500/25">
                                <a href="#projects">
                                    View Case Studies
                                    <ArrowRight className="ml-2" size={18} />
                                </a>
                            </AnimatedButton>
                            <AnimatedButton variant="outline" asChild size="lg" className="w-full sm:w-auto bg-transparent border-white/10 hover:bg-white/5 transition-all">
                                <a href="#contact">
                                    Contact Me
                                    <Mail className="ml-2" size={18} />
                                </a>
                            </AnimatedButton>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-center gap-2 text-sm text-gray-400"
                        >
                            <span className="text-lg">🏆</span>
                            <span>KPMG/ENACTUS Global AI Hackathon Winner & Award-Winning Innovator</span>
                        </motion.div>
                    </div>

                    {/* Right Column: Professional Image (40% width on desktop) */}
                    <div className="w-full lg:w-[40%] flex justify-center relative">
                        {/* High-end background effect */}
                        <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full scale-110 animate-pulse" />
                        <div className="absolute inset-0 bg-indigo-500/5 blur-2xl rounded-full translate-x-4 translate-y-4" />
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative z-10 w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-sm"
                        >
                            <Image
                                src="/me.png"
                                alt="Abraham Iborida"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

