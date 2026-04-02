import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
    {
        quote: "Neil’s passion for web development is undeniable. He consistently puts in the time to learn, build, and improve, and it shows in the quality of the projects he creates.",
        author: "Charles Gemuel Banigon",
        role: "Software Developer | Software Development",
        avatar: "/testimonial pic/charles.jpg",
    },
    {
        quote: "What I admire about Neil is his dedication. Even with a busy schedule, he makes time to sharpen his skills and push himself to grow in tech.",
        author: "Eric Daragay",
        role: "Regional Operations Executive | Financial Tech",
        avatar: "/testimonial pic/eric.jpg",
    },
    {
        quote: "Neil is someone who genuinely enjoys what he does. He’s always curious, always learning, and never settles for just ‘good enough’.",
        author: "Leslyne Montemayor",
        role: "Tech Support | Education Tech ",
        avatar: "/testimonial pic/leslyne.jpg",
    },
    {
        quote: "I worked with Neil before, and he’s very reliable and detail-oriented. He takes ownership of his work and makes sure things are done right.",
        author: "Christian Jay Valiente",
        role: "Delivery Support Specialist | IT Services & Consulting",
        avatar: "/testimonial pic/cj.jpg",
    },
    {
        quote: "Neil is very driven and focused on his goals. When he sets his mind to something, he follows through and continuously improves himself.",
        author: "Joan Nacario",
        role: "Inventory Custodian | E-commerce",
        avatar: "/testimonial pic/joan.jpg",
    },
];

export const Testimonials = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [paused, setPaused] = useState(false);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState("next");

    const goTo = useCallback((newIdx, dir = "next") => {
        setDirection(dir);
        setAnimating(true);
        setTimeout(() => {
            setActiveIdx(newIdx);
            setAnimating(false);
        }, 300);
    }, []);

    const next = useCallback(() => {
        goTo((activeIdx + 1) % testimonials.length, "next");
    }, [activeIdx, goTo]);

    const previous = () => {
        goTo(
            (activeIdx - 1 + testimonials.length) % testimonials.length,
            "prev",
        );
    };

    useEffect(() => {
        if (paused) return;
        const timer = setInterval(next, 4000);
        return () => clearInterval(timer);
    }, [paused, next]);

    return (
        <section
            id="testimonials"
            className="py-14 lg:py-30 relative overflow-hidden"
        >
            <div
                className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        What People Say
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Kind words from{" "}
                        <span className="font-serif italic font-normal text-foreground">
                            amazing people.
                        </span>
                    </h2>
                </div>

                {/* Testimonial Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Main Testimonial */}
                        <div
                            className="glass p-8 rounded-3xl md:p-12 glow-border relative flex flex-col justify-between h-90 md:h-75"
                            onMouseEnter={() => setPaused(true)}
                            onMouseLeave={() => setPaused(false)}
                            style={{
                                transition:
                                    "opacity 300ms ease, transform 300ms ease",
                                opacity: animating ? 0 : 1,
                                transform: animating
                                    ? `translateX(${direction === "next" ? "-24px" : "24px"})`
                                    : "translateX(0)",
                            }}
                        >
                            <Quote className="absolute -bottom-16 -right-4 w-75 h-75 lg:w-96 lg:h-96 text-primary/10 select-none pointer-events-none z-0 rotate-180" />

                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <Quote className="w-6 h-6 text-primary-foreground" />
                            </div>

                            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                                "{testimonials[activeIdx].quote}"
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonials[activeIdx].avatar}
                                    alt={testimonials[activeIdx].author}
                                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                                />
                                <div>
                                    <div className="font-semibold">
                                        {testimonials[activeIdx].author}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonials[activeIdx].role}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials Navigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all cursor-pointer"
                                onClick={previous}
                            >
                                <ChevronLeft />
                            </button>

                            <div className="flex gap-2">
                                {testimonials.map((_, idx) => (
                                    <button
                                        onClick={() =>
                                            goTo(
                                                idx,
                                                idx > activeIdx
                                                    ? "next"
                                                    : "prev",
                                            )
                                        }
                                        key={idx}
                                        className={`w-2 h-2 rounded-full transition-all cursor-pointer duration-300 ${
                                            idx === activeIdx
                                                ? "w-8 bg-primary"
                                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                        }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={next}
                                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all cursor-pointer"
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
