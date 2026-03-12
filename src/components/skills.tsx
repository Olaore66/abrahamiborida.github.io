import { SectionWrapper } from "./ui/section-wrapper";
import { AnimatedCard } from "./ui/animated-card";

export function Skills() {
    const categories = [
        {
            title: "Mobile & Client Systems",
            description: "Architecting cross-platform mobile experiences with native performance and secure state management.",
            skills: ["Flutter", "React Native", "Android SDK", "Temenos Quantum Visualizer", "Push Notifications"],
        },
        {
            title: "Backend Architecture",
            description: "Designing scalable microservices, ORMs, and experience APIs that bridge legacy cores to modern frontends.",
            skills: ["Java", "Spring Boot", "REST APIs", "Prisma", "Supabase"],
        },
        {
            title: "Database Engineering",
            description: "Ensuring ACID compliance, high-availability, and relational data integrity for high-volume financial transactions.",
            skills: ["PostgreSQL", "MySQL", "MSSQL"],
        },
        {
            title: "Cloud, DevOps & Product",
            description: "Managing production environments, API testing, and ensuring pixel-perfect design-to-code translations.",
            skills: ["Render Hosting", "Docker", "Git", "Postman", "Figma"],
        },
    ];

    return (
        <SectionWrapper 
            id="skills" 
            title="Skills & Technologies" 
            subtitle="Comprehensive tech stack utilized to architect scalable fintech solutions and resilient mobile systems."
            className="bg-slate-950/50"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((category, idx) => {
                    return (
                        <AnimatedCard 
                            key={idx} 
                            index={idx} 
                            className="bg-slate-900/40 backdrop-blur-md border-white/5 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Subtle Background Radial Gradient */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors duration-500" />

                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="text-xl font-bold mb-3 text-white">
                                    {category.title}
                                </h3>
                                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                    {category.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {category.skills.map((skill, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="px-3 py-1.5 bg-slate-800/80 text-slate-300 text-xs rounded-full border border-slate-700/50 whitespace-nowrap group-hover:border-blue-500/30 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedCard>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}

