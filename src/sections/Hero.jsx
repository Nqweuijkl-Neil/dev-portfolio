import { Button } from "@/components/Button";
import {
    ArrowRight,
    Github,
    Facebook,
    Linkedin,
    ChevronDown,
    Download,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
    "HTML",
    "CSS",
    "CSS Modules",
    "Bootstrap",
    "Tailwind CSS",
    "Responsive Web Designn",
    "JavaScript",
    "ReactJS",
    "NextJS",
    "jQuery",
    "PHP",
    "MySQL",
    "CodeIgniter",
    "Laravel",
    "Supabase",
];

const resume = "/Neil_Patrick_Morano.pdf";
const download = "Neil_Patrick_Morano.pdf";

const socials = [
    { icon: Github, href: "https://github.com/NeilNyx" },
    { icon: Linkedin, href: "https://linkedin.com/in/neil-patrick-morano" },
    { icon: Facebook, href: "https://www.facebook.com/Nexan11" },
];

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Bg */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.jpg"
                    alt="Hero image"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "var(--color-primary)",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${
                                15 + Math.random() * 20
                            }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-25 lg:pt-32 pb-20 relative z-1">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Future Full-stack Web developer • React
                                Specialist
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Design comes{" "}
                                <span className="text-primary glow-text">
                                    naturally
                                </span>
                                .
                                <br />
                                Code comes with
                                <br />
                                <span className="font-serif italic font-normal text-foreground">
                                    {" "}
                                    effort. I do both.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi, I'm Neil Patrick Morano - an aspiring
                                front-end developer. I’m currently learning
                                React and building responsive projects as I
                                transition from Sales Ops and data-focused work.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <a href="#contact">
                                <Button size="lg" className="cursor-pointer">
                                    Contact Me{" "}
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </a>
                            <AnimatedBorderButton
                                href={resume}
                                download={download}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Download className="w-5 h-5" /> Download CV
                            </AnimatedBorderButton>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">
                                Follow:
                            </span>
                            {socials.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    {<social.icon className="w-5 h-5" />}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Right Column - Profile Image */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* Profile Image */}
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img
                                    src="/Neil graduation pic.png"
                                    alt="Neil Patrick Morano"
                                    className="w-full aspect-4/5 object-cover rounded-2xl"
                                />
                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                                        <span className="text-sm font-medium">
                                            Available for work
                                        </span>
                                    </div>
                                </div>
                                {/* Stats Badge */}
                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                    <div className="text-2xl font-bold text-primary">
                                        1+
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Years Exp.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">
                        Technologies I work with
                    </p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, i) => (
                                <div key={i} className="shrink-0 px-8 py-4">
                                    <span className="text-xl italic font-semibold text-muted-foreground/50 hover:text-primary cursor-default transition-colors">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 hidden lg:block">
                    <a
                        href="#about"
                        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                    >
                        <span className="text-xs uppercase tracking-wider">
                            Scroll
                        </span>
                        <ChevronDown className="w-6 h-6 animate-bounce" />
                    </a>
                </div>
            </div>
        </section>
    );
};
