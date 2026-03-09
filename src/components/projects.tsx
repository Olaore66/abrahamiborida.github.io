import { SectionWrapper } from "./ui/section-wrapper";
import { AnimatedCard } from "./ui/animated-card";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export function Projects() {
    const projects = [
        {
            title: "Mobile Banking Application",
            description:
                "Built a mobile banking platform integrating mobile apps with core banking APIs enabling authentication, account dashboards, and transactions.",
            tech: ["Flutter", "Spring Boot", "REST APIs"],
            github: "https://github.com/Olaore66/banking-app",
        },
        {
            title: "Banking API Experience Layer",
            description:
                "Designed backend services that transform core banking APIs into scalable experience APIs optimized for mobile applications.",
            tech: ["Java", "Spring Boot", "PostgreSQL"],
            github: "https://github.com/TechMaestroGroup",
        },
        {
            title: "Digital Wallet App",
            description:
                "Developed a full-featured digital wallet app including user authentication, wallet balance, transaction history, and payment integration.",
            tech: ["Flutter", "REST APIs", "Payment Gateway"],
            github: "https://github.com/Olaore66/wallet-app",
            live: "https://www.wisemonie.app/"
        },
    ];

    return (
        <SectionWrapper id="projects" title="Featured Projects">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <AnimatedCard key={idx} index={idx} className="flex flex-col h-full group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                                </svg>
                            </div>
                            <div className="flex gap-3">
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                    aria-label="GitHub Repository"
                                >
                                    <Github size={20} />
                                </Link>
                                {project.live && (
                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                        aria-label="Live Demo"
                                    >
                                        <ExternalLink size={20} />
                                    </Link>
                                )}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-muted-foreground mb-6 flex-grow">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech, tIdx) => (
                                <span key={tIdx} className="text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </AnimatedCard>
                ))}
            </div>
        </SectionWrapper>
    );
}
