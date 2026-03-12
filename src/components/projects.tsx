"use client";

import { SectionWrapper } from "./ui/section-wrapper";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Projects() {
    const projects = [
        {
            title: "Real-Time Fleet Orchestration",
            description: "Engineered a React Native driver application for automated logistics. Features include live order tracking, status management, and automated payout calculation.",
            tech: ["React Native", "Geolocation", "Real-time Sync", "Payment Integration"],
            media: { type: "video", src: "/driver-app-demo.mp4" },
            linkText: "View Real-Time Architecture",
            link: "#"
        },
        {
            title: "Cross-Border Banking Experience Layer",
            description: "Designed secure transaction flows for tier-1 banks in Ethiopia and West Africa. Implemented biometric authentication and specialized payment modules (e.g., Hajj payments) by integrating legacy core banking systems.",
            tech: ["Temenos Quantum Visualizer", "Biometrics", "Core Banking API", "Fintech Security"],
            media: { type: "image", src: "/banking-auth-flow.png" },
            linkText: "Explore Security Implementation",
            link: "#"
        },
        {
            title: "Full-Stack Personal Finance Platform",
            description: "Architected a comprehensive financial dashboard featuring secure wallet funding via third-party gateways, budget synchronization, and real-time balance tracking.",
            tech: ["Flutter", "Full-Stack", "State Management", "Payment Gateways"],
            media: { type: "video", src: "/finance-manager-demo.mp4" },
            linkText: "Watch Technical Demo",
            link: "#"
        },
        {
            title: "High-Concurrency Experience API Middleware",
            description: "Engineered scalable backend microservices that transform rigid core banking data into streamlined, low-latency Experience APIs. Optimized data synchronization to ensure 99.9% uptime for mobile consumers.",
            tech: ["Java", "Spring Boot", "PostgreSQL", "Microservices"],
            media: { type: "image", src: "/project-2.png" },
            linkText: "View Backend Architecture",
            link: "#"
        }
    ];

    return (
        <SectionWrapper 
            id="projects" 
            title="Architecture & Case Studies"
            subtitle="Deep dives into system design, core banking integrations, and mobile architectures."
        >
            <div className="flex flex-col gap-24 lg:gap-32">
                {projects.map((project, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: idx * 0.1 }}
                        className={`flex flex-col lg:items-center gap-12 lg:gap-20 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                    >
                        {/* Media Wrapper (50% width on desktop) */}
                        <div className="w-full lg:w-1/2 group">
                            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-sm group-hover:border-blue-500/30 transition-all duration-500">
                                {project.media.type === "video" ? (
                                    <video 
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline 
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        poster={idx === 0 ? "/driver-app-demo.png" : "/finance-manager-demo.png"}
                                    >
                                        <source src={project.media.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <Image
                                        src={project.media.src}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                            </div>
                        </div>

                        {/* Text Content (50% width on desktop) */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, tIdx) => (
                                    <span key={tIdx} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <h3 className="text-3xl lg:text-4xl font-bold font-heading text-white leading-tight">
                                {project.title}
                            </h3>
                            
                            <p className="text-lg text-slate-400 leading-relaxed">
                                {project.description}
                            </p>
                            
                            <div className="pt-4">
                                <Link 
                                    href={project.link}
                                    className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors group/link"
                                >
                                    <span>{project.linkText}</span>
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}


