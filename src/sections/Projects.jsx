import { ArrowUpRight, Download, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
    {
        title: "The Hidden Grove",
        description:
            "Built and deployed a full-stack desktop web application for employee and reservation management using React and Supabase, featuring real-time data workflows and scalable state management (currently not responsive).",
        image: "/projects/the-hidden-grove.png",
        tags: [
            "React",
            "React Router",
            "React Query",
            "React Hook Form",
            "React Icons",
            "React Hot Toast",
            "Recharts",
            "date-fns",
            "Styled-Components",
            "Supabase",
        ],
        link: "https://neil-hidden-grove.vercel.app/",
        github: "https://github.com/NeilNyx/The-Hidden-Grove",
    },
    {
        title: "PizzaRush",
        description:
            "A responsive pizza ordering web app using React, Tailwind CSS, Redux Toolkit, React Router, and external API integration. Features include menu data fetching, cart state management, order submission, form handling, routing, and dynamic UI updates for a seamless user experience.",
        image: "/projects/pizzarush.png",
        tags: [
            "React",
            "Tailwind CSS",
            "Redux Toolkit",
            "React Router",
            "API Integration",
        ],
        link: "https://neil-pizzarush.vercel.app/",
        github: "https://github.com/NeilNyx/PizzaRush",
    },
    {
        title: "PinTrail",
        description:
            "A responsive travel tracking web app using HTML, CSS Modules, JavaScript, React, Context API, React Router, and Leaflet. Features include an interactive map, city pinning, city list, location details, and form handling.",
        image: "/projects/pintrail.png",
        tags: [
            "CSS Modules",
            "JavaScript",
            "React",
            "Context API",
            "React Router",
            "Leaflet",
        ],
        link: "https://neil-pintrail.vercel.app/",
        github: "https://github.com/NeilNyx/pintrail-neil",
    },
    {
        title: "MovieLibrary",
        description:
            "A responsive movie search web app using HTML, CSS, JavaScript, React, and API integration. Features include movie search, movie details, watched list, rating feature, loading states, error handling, and dynamic UI updates.",
        image: "/projects/movielibrary.png",
        tags: [
            "React",
            "React Router",
            "useState",
            "useEffect",
            "API Integration",
        ],
        link: "https://neil-movielibrary.vercel.app/",
        github: "https://github.com/NeilNyx/movielibrary-neil",
    },
];
const githubProjects = "https://github.com/NeilNyx?tab=repositories";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="py-14 lg:py-30 relative overflow-hidden"
        >
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-foreground">
                            {" "}
                            make an impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A collection of web applications I’ve developed,
                        showcasing my progress in building practical, real-world
                        solutions using modern technologies.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-card to-transparent opacity-60" />
                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton
                        href={githubProjects}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View All Projects
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};
