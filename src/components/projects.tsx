"use client";

import { SectionWrapper } from "./ui/section-wrapper";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ProjectMedia {
    type: "image" | "video";
    src: string | string[];
    video?: string;
    poster?: string;
}

interface Project {
    title: string;
    description: string;
    tech: string[];
    media: ProjectMedia;
    linkText: string;
    link: string;
}

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const projects: Project[] = [
        {
            title: "Real-Time Driver Delivery App",
            description: "Engineered a React Native driver application for automated logistics. Features include live order tracking, status management, and automated payout calculation.",
            tech: ["React Native", "Geolocation", "Real-time Sync", "Payment Integration"],
            media: { 
                type: "image", 
                src: ["https://drive.google.com/file/d/1pdGuWXCD2ZiD8K56Loe1HqAYwmxDw4vE/preview", "/driver-app-demo.png", "/driver-app-demo2.png", "/driver-app-demo3.png", "/driver-app-demo4.png"]
            },
            linkText: "Watch Live App Demo",
            link: "https://drive.google.com/file/d/1pdGuWXCD2ZiD8K56Loe1HqAYwmxDw4vE/view?usp=drive_link"
        },
        {
            title: "Cross-Border Banking Experience Layer",
            description: "Designed secure transaction flows for tier-1 banks in Ethiopia and West Africa. Implemented biometric authentication and specialized payment modules (e.g., Hajj payments) by integrating legacy core banking systems.",
            tech: ["Temenos Quantum Visualizer", "Biometrics", "Core Banking API", "Fintech Security"],
            media: { 
                type: "image", 
                src: ["/boa0.png", "/boa1.png", "/boa2.png", "/boa3.png", "/boa4.png"] 
            },
            linkText: "Explore Security Implementation",
            link: "/banking-auth-flow.png"
        },
        {
            title: "Full-Stack Personal Finance Platform",
            description: "Architected a comprehensive financial dashboard featuring secure wallet funding via third-party gateways, budget synchronization, and real-time balance tracking.",
            tech: ["Flutter", "Full-Stack", "State Management", "Payment Gateways"],
            media: { 
                type: "image", 
                src: ["https://drive.google.com/file/d/1u8QIvdDvScvlWN4aMNW9iQf4kYlWkNPm/preview", "/wm0.png", "/wm1.png", "/wm2.png", "/wm3.png", "/wm4.png", "/wm5.png", "/wm6.png"] 
            },
            linkText: "Watch Technical Demo",
            link: "https://drive.google.com/file/d/1u8QIvdDvScvlWN4aMNW9iQf4kYlWkNPm/view?usp=drive_link"
        },
        {
            title: "High-Concurrency Experience API Middleware",
            description: "Engineered scalable backend microservices that transform rigid core banking data into streamlined, low-latency Experience APIs. Optimized data synchronization to ensure 99.9% uptime for mobile consumers.",
            tech: ["Java", "Spring Boot", "PostgreSQL", "Microservices"],
            media: { type: "image", src: "/project-2.png" },
            linkText: "View Backend Architecture",
            link: "/project-2.png"
        }
    ];

    return (
        <SectionWrapper 
            id="projects" 
            title="Projects & Demo"
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
                        {/* Media Wrapper (Glass Canvas) */}
                        <motion.button
                            onClick={() => setSelectedProject(idx)}
                            className="w-full lg:w-1/2 group text-left outline-none"
                        >
                            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950 flex items-center justify-center p-4 lg:p-8 group-hover:border-blue-500/30 transition-all duration-500 cursor-zoom-in">
                                {/* Subtle Background Pattern */}
                                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]" />
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
                                
                                <div className="relative w-full h-full flex items-center justify-center gap-4 lg:gap-8">
                                    {project.media.type === "video" ? (
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <video 
                                                autoPlay 
                                                loop 
                                                muted 
                                                playsInline 
                                                className="max-w-full max-h-full rounded-xl shadow-2xl object-contain opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                                                poster={project.media.poster}
                                            >
                                                <source src={project.media.src as string} type="video/mp4" />
                                            </video>
                                        </div>
                                    ) : (
                                        <>
                                            {Array.isArray(project.media.src) ? (
                                                <div className="relative w-full h-full flex items-center justify-center">
                                                    {(project.media.src as string[]).map((imgSrc, imgIdx) => {
                                                        const isVideoLink = imgSrc.endsWith('.mp4') || imgSrc.includes('drive.google.com') || imgSrc.includes('youtube.com') || imgSrc.includes('vimeo.com');
                                                        // Filter out videos for the preview stack to keep it clean
                                                        if (isVideoLink) return null;
                                                        
                                                        const isMultiple = (project.media.src as string[]).filter(s => !(s.endsWith('.mp4') || s.includes('drive.google.com') || s.includes('youtube.com') || s.includes('vimeo.com'))).length > 2;
                                                        const rotation = isMultiple ? (imgIdx - 2) * 8 : (imgIdx - 0.5) * 15;
                                                        const xOffset = isMultiple ? (imgIdx - 2) * 40 : (imgIdx - 0.5) * 60;
                                                        
                                                        return (
                                                            <motion.div 
                                                                key={imgIdx} 
                                                                className="absolute w-[200px] h-[400px] md:w-[240px] md:h-[480px]"
                                                                initial={{ 
                                                                    rotate: rotation,
                                                                    x: xOffset,
                                                                    z: imgIdx * 10,
                                                                    opacity: 0.8
                                                                }}
                                                                whileHover={{ 
                                                                    rotate: rotation * 0.5,
                                                                    x: xOffset * 1.5,
                                                                    scale: 1.05,
                                                                    opacity: 1,
                                                                    zIndex: 50
                                                                }}
                                                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                                style={{ zIndex: imgIdx }}
                                                            >
                                                                <Image
                                                                    src={imgSrc}
                                                                    alt={`${project.title} screenshot ${imgIdx + 1}`}
                                                                    fill
                                                                    className="object-contain rounded-2xl shadow-2xl border border-white/10"
                                                                />
                                                            </motion.div>
                                                        );
                                                    })}
                                                </div>
                                            ) : (
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={project.media.src as string}
                                                        alt={project.title}
                                                        fill
                                                        className="object-contain rounded-xl opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                                                    />
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>

                                {/* Glass Overlay Decorations */}
                                <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 rounded-3xl" />
                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            </div>
                        </motion.button>

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
                                <button 
                                    onClick={() => setSelectedProject(idx)}
                                    className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors group/link"
                                >
                                    <span>{project.linkText}</span>
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Media Gallery Modal */}
            <AnimatePresence>
                {selectedProject !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-12"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center gap-8"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-0 right-0 p-2 text-white/50 hover:text-white transition-colors"
                            >
                                <X size={32} />
                            </button>

                            <div className="text-center space-y-2 mb-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-white">
                                    {projects[selectedProject].title}
                                </h3>
                                <p className="text-slate-400">Project Media Gallery</p>
                            </div>

                            <div className="flex-1 w-full overflow-y-auto overflow-x-hidden custom-scrollbar pb-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                                    {Array.isArray(projects[selectedProject].media.src) ? (
                                        (projects[selectedProject].media.src as string[]).map((src, i) => {
                                            const isVideo = src.endsWith('.mp4') || src.includes('drive.google.com') || src.includes('youtube.com') || src.includes('vimeo.com');
                                            const isExternalVideo = src.includes('drive.google.com') || src.includes('youtube.com') || src.includes('vimeo.com');
                                            
                                            return (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className={`relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 ${isVideo ? 'col-span-full aspect-video md:max-w-4xl mx-auto w-full' : 'aspect-[9/16] w-full max-w-[320px] mx-auto'}`}
                                                >
                                                    {isVideo ? (
                                                        isExternalVideo ? (
                                                            <iframe 
                                                                src={src} 
                                                                className="w-full h-full border-0" 
                                                                allow="autoplay; fullscreen" 
                                                                allowFullScreen
                                                            />
                                                        ) : (
                                                            <video 
                                                                controls 
                                                                autoPlay 
                                                                className="w-full h-full object-contain"
                                                            >
                                                                <source src={src} type="video/mp4" />
                                                            </video>
                                                        )
                                                    ) : (
                                                        <Image
                                                            src={src}
                                                            alt={`Mockup ${i + 1}`}
                                                            fill
                                                            className="object-contain p-4"
                                                        />
                                                    )}
                                                </motion.div>
                                            );
                                        })
                                    ) : (
                                        <div className="col-span-full flex justify-center">
                                            <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50">
                                                {projects[selectedProject].media.type === "video" ? (
                                                    <video 
                                                        controls 
                                                        autoPlay 
                                                        className="w-full h-full object-contain"
                                                    >
                                                        <source src={projects[selectedProject].media.src as string} type="video/mp4" />
                                                    </video>
                                                ) : (
                                                    <Image
                                                        src={projects[selectedProject].media.src as string}
                                                        alt="Mockup"
                                                        fill
                                                        className="object-contain p-4"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </SectionWrapper>
    );
}
