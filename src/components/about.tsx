import { SectionWrapper } from "./ui/section-wrapper";
import { AnimatedCard } from "./ui/animated-card";
import { Code2, Smartphone, Database } from "lucide-react";

export function About() {
    const pillars = [
        {
            icon: <Smartphone className="w-8 h-8 text-blue-500 mb-4" />,
            title: "High-Performance Mobile Systems",
            description:
                "Architecting robust, cross-platform fintech applications using Flutter and the Android SDK, strictly tailored for scale, security, and offline-capability in emerging markets.",
        },
        {
            icon: <Database className="w-8 h-8 text-indigo-500 mb-4" />,
            title: "Enterprise Backend Orchestration",
            description:
                "Designing RESTful microservices and scalable orchestration layers in Java and Spring Boot to handle high-volume financial transactions securely.",
        },
        {
            icon: <Code2 className="w-8 h-8 text-cyan-500 mb-4" />,
            title: "Legacy Core Integration",
            description:
                "Acting as the middleware bridge—transforming complex banking functionalities (like Temenos T24) into seamless, optimized data pipelines for front-end consumption.",
        },
    ];

    return (
        <SectionWrapper id="about" title="Engineering Philosophy & Focus" subtitle="Senior Systems Architect">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        I am a Senior Software Engineer with over 4 years of experience architecting and deploying high-concurrency fintech solutions across African markets, including Burkina Faso, Ethiopia, and Gambia.
                    </p>
                    <p>
                        My core expertise lies at the intersection of rigid legacy infrastructure and fluid user experiences. I specialize in creating resilient &quot;bridge&quot; solutions—transforming complex, monolithic core banking APIs (like Temenos T24) into streamlined, secure services tailored for modern mobile applications.
                    </p>
                    <p>
                        Whether I am optimizing transaction orchestration layers in Spring Boot or iterating on cross-platform architectures using Flutter, my goal is to build secure, impact-driven financial software that scales seamlessly.
                    </p>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative aspect-square rounded-2xl bg-slate-900 border border-white/10 flex flex-col items-center justify-center text-center p-8 overflow-hidden">
                        {/* Premium Radial Gradient */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -ml-16 -mb-16" />
                        
                        <h3 className="text-5xl font-bold font-heading mb-2 text-white">4+</h3>
                        <p className="text-blue-400 uppercase tracking-widest text-xs font-semibold">Years Experience</p>
                        
                        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-8" />
                        
                        <h3 className="text-4xl font-bold font-heading mb-2 text-white">Fintech</h3>
                        <p className="text-indigo-400 uppercase tracking-widest text-xs font-semibold">Specialization</p>
                        
                        {/* Decorative mesh/grid background */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                    </div>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pillars.map((pillar, index) => (
                    <AnimatedCard 
                        key={index} 
                        index={index}
                        className="bg-slate-900/50 border-white/5 backdrop-blur-sm p-8 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
                    >
                        <div className="p-3 w-fit rounded-lg bg-slate-800 border border-white/5 mb-6 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-colors">
                            {pillar.icon}
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{pillar.title}</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm">{pillar.description}</p>
                    </AnimatedCard>
                ))}
            </div>
        </SectionWrapper>
    );
}

