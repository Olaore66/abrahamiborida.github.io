import { SectionWrapper } from "./ui/section-wrapper";
import { AnimatedCard } from "./ui/animated-card";

export function Skills() {
    const categories = [
        {
            title: "Mobile Development",
            skills: ["Flutter", "React Native", "Android SDK", "Temenos Quantum Visualizer"],
        },
        {
            title: "Backend Development",
            skills: ["Java", "Spring Boot", "REST API Design"],
        },
        {
            title: "Databases",
            skills: ["PostgreSQL", "MySQL", "MSSQL"],
        },
        {
            title: "Tools & Ecosystem",
            skills: ["Git", "Postman", "Docker", "Figma"],
        },
    ];

    return (
        <SectionWrapper id="skills" title="Skills & Technologies" className="bg-muted/30">
            <div className="grid md:grid-cols-2 gap-6">
                {categories.map((category, idx) => {
                    // Give each category a distinct subtle tint
                    const badgeStyles = [
                        "bg-blue-500/10 text-blue-400 border-blue-500/20",    // Mobile
                        "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", // Backend
                        "bg-purple-500/10 text-purple-400 border-purple-500/20",  // DB
                        "bg-amber-500/10 text-amber-400 border-amber-500/20"      // Tools
                    ];

                    return (
                        <AnimatedCard key={idx} index={idx} className="flex flex-col h-full group relative overflow-hidden">
                            {/* Subtle background glow effect on hover */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${idx === 0 ? 'from-blue-500/5' : idx === 1 ? 'from-emerald-500/5' : idx === 2 ? 'from-purple-500/5' : 'from-amber-500/5'} to-transparent z-0`} />

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-6 font-heading border-b border-white/5 pb-4 group-hover:border-white/20 transition-colors">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-3 mt-auto">
                                    {category.skills.map((skill, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium border ${badgeStyles[idx % badgeStyles.length]}`}
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
