"use client";

import { SectionWrapper } from "./ui/section-wrapper";
import { AnimatedCard } from "./ui/animated-card";
import { AnimatedButton } from "./ui/button";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
    return (
        <SectionWrapper id="contact" title="Get In Touch" subtitle="I'm currently available for new opportunities.">
            <div className="grid lg:grid-cols-2 gap-12 mt-8">

                {/* Contact Info */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold font-heading mb-6">Let&apos;s talk about your next project.</h3>
                    <p className="text-muted-foreground mb-8">
                        Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>

                    <AnimatedCard className="flex items-center gap-4 hover:border-primary/50 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground font-medium">Email</p>
                            <a href="mailto:abrahamiborida@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">
                                abrahamiborida@gmail.com
                            </a>
                        </div>
                    </AnimatedCard>

                    <AnimatedCard className="flex items-center gap-4 hover:border-primary/50 transition-colors" delay={0.1}>
                        <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                            <Linkedin size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground font-medium">LinkedIn</p>
                            <a
                                href="https://www.linkedin.com/in/olaore-iborida-5a72a2129/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-bold hover:text-indigo-500 transition-colors"
                            >
                                Olaore Iborida
                            </a>
                        </div>
                    </AnimatedCard>

                    <AnimatedCard className="flex items-center gap-4 hover:border-primary/50 transition-colors" delay={0.2}>
                        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                            <Github size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground font-medium">GitHub</p>
                            <a
                                href="https://github.com/Olaore66"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-bold hover:text-emerald-500 transition-colors"
                            >
                                @Olaore66
                            </a>
                        </div>
                    </AnimatedCard>
                </div>

                {/* Contact Form Details */}
                <AnimatedCard className="p-8" delay={0.3}>
                    <form
                        className="space-y-6"
                        action="https://formspree.io/f/myknkvoy"
                        method="POST"
                    >
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                required
                                placeholder="Project Inquiry"
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none"
                            ></textarea>
                        </div>
                        {/* Honeypot field for spam prevention */}
                        <input type="text" name="_gotcha" style={{ display: 'none' }} />

                        <AnimatedButton type="submit" size="lg" className="w-full">
                            <Send className="mr-2" size={18} />
                            Send Message
                        </AnimatedButton>
                    </form>
                </AnimatedCard>

            </div>
        </SectionWrapper>
    );
}
