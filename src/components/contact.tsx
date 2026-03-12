"use client";

import { SectionWrapper } from "./ui/section-wrapper";
import { AnimatedCard } from "./ui/animated-card";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";

export function Contact() {
    return (
        <SectionWrapper 
            id="contact" 
            title="Let's Architect Your Next Platform" 
            subtitle="Currently accepting international remote roles and technical consulting engagements."
        >
            <div className="grid lg:grid-cols-2 gap-16 mt-12">

                {/* Contact Info (The Consultant Pivot) */}
                <div className="space-y-10">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold font-heading text-white">
                            Ready to scale your fintech or mobile systems?
                        </h3>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Whether you need to bridge legacy banking cores to modern frontends, or you need a senior architect to lead your mobile team, let's discuss how I can drive engineering excellence for your organization.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        <AnimatedCard className="flex items-center gap-5 bg-slate-900/40 backdrop-blur-md border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/40 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                <Mail size={22} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Email</p>
                                <a href="mailto:abrahamiborida@gmail.com" className="text-base font-bold text-white hover:text-blue-400 transition-colors">
                                    abrahamiborida@gmail.com
                                </a>
                            </div>
                        </AnimatedCard>

                        <AnimatedCard className="flex items-center gap-5 bg-slate-900/40 backdrop-blur-md border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/40 transition-all duration-300 group" delay={0.1}>
                            <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                <Linkedin size={22} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">LinkedIn</p>
                                <a
                                    href="https://www.linkedin.com/in/olaore-iborida-5a72a2129/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base font-bold text-white hover:text-blue-500 transition-colors"
                                >
                                    Olaore Iborida
                                </a>
                            </div>
                        </AnimatedCard>

                        <AnimatedCard className="flex items-center gap-5 bg-slate-900/40 backdrop-blur-md border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/40 transition-all duration-300 group" delay={0.2}>
                            <div className="w-12 h-12 rounded-xl bg-slate-700/20 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform">
                                <Github size={22} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">GitHub</p>
                                <a
                                    href="https://github.com/Olaore66"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base font-bold text-white hover:text-slate-400 transition-colors"
                                >
                                    @Olaore66
                                </a>
                            </div>
                        </AnimatedCard>

                        <AnimatedCard className="flex items-center gap-5 bg-slate-900/40 backdrop-blur-md border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/40 transition-all duration-300 group" delay={0.3}>
                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Location</p>
                                <p className="text-base font-bold text-white">
                                    Ibadan, Nigeria | <span className="text-orange-400/80">Open to Global Remote</span>
                                </p>
                            </div>
                        </AnimatedCard>
                    </div>
                </div>

                {/* Contact Form Details (The Premium Polish) */}
                <AnimatedCard className="p-8 lg:p-10 bg-slate-900/50 border-slate-800 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl rounded-2xl relative overflow-hidden" delay={0.4}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 opacity-50" />
                    
                    <form
                        className="space-y-6 relative z-10"
                        action="https://formspree.io/f/myknkvoy"
                        method="POST"
                    >
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-semibold text-slate-300">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-black/40 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-slate-300">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-black/40 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-semibold text-slate-300">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                required
                                placeholder="Fintech System Architecture Inquiry"
                                className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-black/40 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold text-slate-300">Message Details</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder="Describe your technical requirements or project scope..."
                                className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-black/40 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all resize-none"
                            ></textarea>
                        </div>
                        
                        <input type="text" name="_gotcha" style={{ display: 'none' }} />

                        <button 
                            type="submit" 
                            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold text-lg shadow-[0_10px_20px_-10px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-3 shrink-0"
                        >
                            <Send size={20} />
                            Architect Your Solution
                        </button>
                    </form>
                </AnimatedCard>

            </div>
        </SectionWrapper>
    );
}

