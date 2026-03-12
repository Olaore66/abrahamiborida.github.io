import { SectionWrapper } from "./ui/section-wrapper";
import { AnimatedCard } from "./ui/animated-card";
import { Briefcase, Award, Zap } from "lucide-react";

export function Experience() {
    const experiences = [
        {
            role: "Software Developer",
            company: "Techmaestrogroup Global Consult",
            responsibilities: [
                "Integrated legacy core banking APIs to deliver real-time financial services for international clients across Burkina Faso, Ethiopia, and Gambia.",
                "Optimized Java microservices for fintech platforms, scaling transaction processing and improving mobile runtime performance.",
                "Developed mobile banking applications utilizing Temenos Quantum Visualizer and Android SDK.",
            ],
        },
        {
            role: "Mobile App Engineer",
            company: "ITSS Nigeria",
            responsibilities: [
                "Engineered hybrid mobile apps and consumed REST APIs, ensuring smooth data synchronization between Spring Boot backends and frontend clients.",
                "Implemented high-fidelity UIs from Figma designs, tailored for optimal user experience in a fast-paced fintech environment.",
            ],
        },
    ];

    const achievements = [
        {
            title: "Youth Empowerment AI Hackathon Winner (KPMG/ENACTUS)",
            year: "2022",
            description: "Awarded for technical excellence and innovation in developing AI-driven solutions for social impact.",
            gradient: "from-blue-600/20 to-transparent",
            border: "border-blue-500/30"
        },
        {
            title: "PICFI Scholarship Award",
            year: "2019",
            description: "Recognized for academic brilliance and exceptional technical potential in the field of engineering.",
            gradient: "from-purple-600/20 to-transparent",
            border: "border-purple-500/30"
        },
    ];

    return (
        <SectionWrapper id="experience" title="Career & Industry Impact" className="bg-slate-950/30">
            <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16">
                
                {/* Work Experience Timeline */}
                <div className="space-y-10">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                            <Briefcase className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold font-heading text-white">Work Experience</h3>
                    </div>
                    
                    <div className="relative border-l border-slate-800 ml-3 pl-8 space-y-12">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="relative">
                                {/* Glowing Timeline Dot */}
                                <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-slate-900 border-2 border-blue-500 rounded-full z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-white leading-none">{exp.role}</h4>
                                    <p className="text-blue-400 font-semibold tracking-wide text-sm uppercase">{exp.company}</p>
                                    
                                    <ul className="pt-4 space-y-4">
                                        {exp.responsibilities.map((bullet, bIdx) => (
                                            <li key={bIdx} className="flex gap-3 text-slate-400 leading-relaxed text-sm">
                                                <Zap className="w-4 h-4 text-slate-600 shrink-0 mt-1" />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements / Trust Signals */}
                <div className="space-y-10">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                            <Award className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold font-heading text-white">Achievements</h3>
                    </div>
                    
                    <div className="space-y-6">
                        {achievements.map((item, idx) => (
                            <AnimatedCard 
                                key={idx} 
                                index={idx} 
                                className={`bg-gradient-to-r ${item.gradient} border ${item.border} backdrop-blur-sm p-6 rounded-xl relative overflow-hidden group`}
                            >
                                <div className="flex justify-between items-start mb-4 gap-4">
                                    <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{item.title}</h4>
                                    <span className="bg-slate-900/50 border border-white/5 text-slate-400 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                                        {item.year}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {item.description}
                                </p>
                                
                                {/* Decorative elements */}
                                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Award className="w-24 h-24" />
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
}

