import { SectionWrapper } from "./ui/section-wrapper";
import { AnimatedCard } from "./ui/animated-card";
import { Code2, Smartphone, Database } from "lucide-react";

export function About() {
    const highlights = [
        {
            icon: <Smartphone className="w-8 h-8 text-indigo-500 mb-4" />,
            title: "Mobile Architecture",
            description:
                "Building robust fintech mobile applications with Flutter and Android SDK tailored for scale and performance across emerging markets.",
        },
        {
            icon: <Database className="w-8 h-8 text-emerald-500 mb-4" />,
            title: "Backend Systems",
            description:
                "Designing RESTful API architectures and scalable microservices in Java and Spring Boot that securely interact with core banking platforms.",
        },
        {
            icon: <Code2 className="w-8 h-8 text-blue-500 mb-4" />,
            title: "Full-Stack Integration",
            description:
                "Transforming complex banking functionalities into seamless mobile banking experiences through an optimized, end-to-end integrated stack.",
        },
    ];

    return (
        <SectionWrapper id="about" title="About Me" subtitle="My Engineering Focus">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-6 text-lg text-muted-foreground">
                    <p>
                        I am a Software Engineer with over 4 years of experience specializing in the
                        design, development, and deployment of fintech mobile applications and
                        backend APIs across African markets.
                    </p>
                    <p>
                        My core expertise lies in architecting mobile banking systems that are
                        both scalable and highly secure. I have a proven track record of creating
                        bridge solutions, transforming legacy core banking APIs into streamlined
                        services tailored for modern mobile applications.
                    </p>
                    <p>
                        Whether iterating on consumer-facing hybrid apps using Flutter or writing
                        complex transaction orchestration layers in Spring Boot, I am passionate
                        about creating impact-driven financial software.
                    </p>
                </div>
                <div className="relative">
                    <div className="aspect-square rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-emerald-500/20 flex flex-col items-center justify-center border border-border/50 text-center p-8">
                        <h3 className="text-4xl font-bold font-heading mb-2">4+</h3>
                        <p className="text-muted-foreground uppercase tracking-widest text-sm">Years Experience</p>
                        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full my-6" />
                        <h3 className="text-4xl font-bold font-heading mb-2">Fintech</h3>
                        <p className="text-muted-foreground uppercase tracking-widest text-sm">Specialization</p>
                    </div>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {highlights.map((highlight, index) => (
                    <AnimatedCard key={index} index={index}>
                        {highlight.icon}
                        <h4 className="text-xl font-bold mb-2">{highlight.title}</h4>
                        <p className="text-muted-foreground">{highlight.description}</p>
                    </AnimatedCard>
                ))}
            </div>
        </SectionWrapper>
    );
}
