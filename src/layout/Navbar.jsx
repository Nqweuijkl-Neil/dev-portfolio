import { Button } from "@/components/Button";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { HamburgerButton } from "@/components/HamburgerButton";

const navLinks = [
    {
        href: "#about",
        label: "About",
    },
    {
        href: "#projects",
        label: "Projects",
    },
    {
        href: "#experience",
        label: "Experience",
    },
    {
        href: "#testimonials",
        label: "Testimonials",
    },
];

export const Navbar = () => {
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) setIsMobileMenuActive(false);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
    }, []);

    // Function to handle nav link click
    const handleNavClick = (href) => {
        const section = document.querySelector(href);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuActive(false); // close mobile menu if open
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
                isScrolled || isMobileMenuActive
                    ? "glass-strong"
                    : "bg-transparent"
            } ${isMobileMenuActive ? "py-3" : isScrolled ? "py-3" : "py-5"} z-50`}
        >
            <nav className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    className="font-code text-xl font-semibold tracking-tight hover:text-primary flex items-center"
                >
                    <span className="text-muted-foreground">&lt;</span>
                    <span className="mx-1 text-foreground tracking-widest">
                        Neil
                    </span>
                    <span className="text-muted-foreground">/&gt;</span>
                    <span className="text-primary animate-blink ml-0.5">_</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Desktop right side */}
                <div className="hidden md:flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-pointer"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <Button
                        className="cursor-pointer"
                        size="sm"
                        onClick={() => handleNavClick("#contact")}
                    >
                        Contact Me
                    </Button>
                </div>

                {/* Mobile right side */}
                <div className="md:hidden flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all cursor-pointer"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <HamburgerButton
                        isOpen={isMobileMenuActive}
                        onClick={() => setIsMobileMenuActive((prev) => !prev)}
                    />
                </div>
            </nav>

            {/* Mobile Menu — expands inside the header */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuActive
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                }`}
            >
                <div className="container mx-auto px-6 pt-2 pb-4 flex flex-col gap-1 border-t border-border/20 mt-3">
                    {navLinks.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            onClick={() => setIsMobileMenuActive(false)}
                            className="text-base text-muted-foreground hover:text-foreground hover:bg-surface px-4 py-3 rounded-xl transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="pt-2">
                        <Button
                            className="cursor-pointer w-full"
                            onClick={() => handleNavClick("#contact")}
                        >
                            Contact Me
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
