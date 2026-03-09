import { SectionWrapper } from "./ui/section-wrapper";
import { AnimatedCard } from "./ui/animated-card";
import { Briefcase, Award } from "lucide-react";

export function Experience() {
    const experiences = [
        {
            role: "Software Developer",
            company: "Techmaestrogroup Global Consult",
            responsibilities: [
                "Built mobile banking apps using Temenos Quantum Visualizer.",
                "Integrated core banking APIs to deliver real-time financial services.",
                "Developed Java microservices for fintech platforms to scale transaction processing.",
            ],
        },
        {
            role: "Mobile App Engineer",
            company: "ITSS Nigeria",
            responsibilities: [
                "Developed hybrid mobile apps ensuring cross-platform compatibility.",
                "Consumed REST APIs resulting in smooth data synchronization.",
                "Implemented high-fidelity UIs from Figma designs tailored for optimal UX.",
            ],
        },
    ];

    const achievements = [
        {
            title: "Youth Empowerment AI Hackathon Certificate",
            year: "2022",
        },
        {
            title: "PICFI Scholarship Award",
            year: "2019",
        },
    ];

    return (
        <SectionWrapper id="experience" title="Experience & Achievements" className="bg-muted/30">
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Experience Timeline */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <Briefcase className="w-8 h-8 text-primary" />
                        <h3 className="text-2xl font-bold font-heading">Work Experience</h3>
                    </div>
                    <div className="space-y-8">
                        {experiences.map((exp, idx) => (
                            <AnimatedCard key={idx} index={idx} className="relative pl-8">
                                {/* Timeline decorator */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-border rounded-l-xl"></div>
                                <div className="absolute left-[-4px] top-6 w-3 h-3 bg-primary rounded-full ring-4 ring-background"></div>

                                <h4 className="text-xl font-bold">{exp.role}</h4>
                                <p className="text-primary font-medium mb-4">{exp.company}</p>
                                <ul className="space-y-2 text-muted-foreground">
                                    {exp.responsibilities.map((task, tIdx) => (
                                        <li key={tIdx} className="flex gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>

                {/* Achievements List */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <Award className="w-8 h-8 text-indigo-500" />
                        <h3 className="text-2xl font-bold font-heading">Achievements</h3>
                    </div>
                    <div className="space-y-6">
                        {achievements.map((achievement, idx) => (
                            <AnimatedCard key={idx} index={idx} delay={0.2 + idx * 0.1}>
                                <div className="flex justify-between items-center">
                                    <h4 className="text-lg font-bold">{achievement.title}</h4>
                                    <span className="bg-indigo-500/10 text-indigo-500 px-3 py-1 rounded-full text-sm font-bold">
                                        {achievement.year}
                                    </span>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
