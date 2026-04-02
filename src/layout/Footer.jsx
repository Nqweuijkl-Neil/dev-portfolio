import { Github, Linkedin, Facebook } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "https://github.com/NeilNyx", label: "GitHub" },
    {
        icon: Linkedin,
        href: "https://linkedin.com/in/neil-patrick-morano",
        label: "LinkedIn",
    },
    {
        icon: Facebook,
        href: "https://www.facebook.com/Nexan11",
        label: "Facebook",
    },
];

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <a
                            href="#"
                            className="font-code text-xl font-semibold tracking-tight hover:text-primary flex items-center justify-center md:justify-start"
                        >
                            <span className="text-muted-foreground">&lt;</span>
                            <span className="mx-1 text-foreground tracking-widest">
                                Neil
                            </span>
                            <span className="text-muted-foreground">/&gt;</span>
                            <span className="text-primary animate-blink ml-0.5">
                                _
                            </span>
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                            © {currentYear} Neil Patrick Morano. All rights
                            reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
