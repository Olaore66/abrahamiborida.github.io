import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col items-center md:items-start">
                    <Link href="/" className="font-bold text-xl text-primary font-mono tracking-tighter">
                        {"<AI/>"}
                    </Link>
                    <p className="text-muted-foreground mt-2 text-sm text-center md:text-left">
                        Building scalable fintech solutions and mobile apps.
                    </p>
                </div>

                <div className="flex items-center space-x-6">
                    <a
                        href="mailto:abrahamiborida@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/olaore-iborida-5a72a2129/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://github.com/Olaore66"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                </div>

                <div className="text-muted-foreground text-sm">
                    © {currentYear} Abraham Iborida. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
