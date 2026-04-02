const experiences = [
    {
        period: "Present",
        role: "Future Web Developer",
        company: "Self-Learning & Projects",
        description:
            "Actively learning and building projects in full-stack web development, focusing on front-end and back-end technologies. Working with ReactJS, NextJS, TypeScript, PHP frameworks, and database management to create responsive, interactive web applications while following modern best practices and building a professional portfolio.",
        skills: [
            "HTML",
            "CSS",
            "CSS Modules",
            "Bootstrap",
            "Tailwind CSS",
            "Responsive Web Design",
            "JavaScript",
            "ReactJS",
            "NextJS",
            "jQuery",
            "PHP",
            "MySQL",
            "CodeIgniter",
            "Laravel",
            "Supabase",
        ],
        current: true,
    },
    {
        period: "Jul 2024 — Sep 2025",
        role: "Sales Order Desk Admin",
        company: "SL Temps, Inc. (Assigned to SEPCO)",
        description:
            "Developed an Excel tracking/reporting workbook to consolidate order updates into a single view, improving visibility and reducing manual tracking hours. Managed creation and updates of Sales Orders (SO) in SAP from approved Purchase Orders (PO) and supported fulfillment by creating Delivery Orders (DO), validating data, and coordinating with multiple departments to prevent processing delays.",
        skills: [
            "SAP",
            "Excel",
            "Sales Order Management",
            "Purchase Order Processing",
            "Delivery Order Coordination",
            "Data Validation",
            "Process Improvement",
            "Cross-team Communication",
            "Problem Solving",
            "Attention to Detail",
        ],
        current: false,
    },
    {
        period: "Apr 2023 — Aug 2023",
        role: "Data Encoder",
        company: "Planet Sports, Inc.",
        description:
            "Built a finance reporting Excel workbook consolidating SAP extracts and sales/inventory inputs, improving monitoring and review. Extracted, cleaned, and organized raw SAP data for internal reporting and encoded sales and inventory records with high accuracy, performing quantity variance checks and flagging discrepancies for correction.",
        skills: [
            "Excel",
            "SAP",
            "Data Cleaning",
            "Data Entry",
            "Reporting & Analysis",
            "Quantity Variance Checks",
            "Attention to Detail",
            "Process Improvement",
        ],
        current: false,
    },
    {
        period: "Dec 2022 — Feb 2023",
        role: "Office Assistant",
        company: "Mobrx Trading Corp.",
        description:
            "Built and maintained an Excel tracking workbook consolidating operational trackers such as trip/status updates, expense monitoring, and daily logs. Prepared weekly and monthly operational reports for management and maintained complete documentation while supporting daily administrative tasks like scheduling and document preparation.",
        skills: [
            "Excel",
            "Operational Tracking",
            "Reporting & Analysis",
            "Documentation Management",
            "Administrative Support",
            "Process Improvement",
            "Attention to Detail",
            "Cross-team Coordination",
        ],
        current: false,
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Career Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Experience that{" "}
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            speaks volumes.
                        </span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A timeline of my professional growth, from
                        detail-oriented roles in data management and
                        administrative support to mastering Sales Orders, SAP,
                        and reporting processes, now transitioning into web
                        development to build interactive and impactful digital
                        products.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div
                                key={idx}
                                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{
                                    animationDelay: `${(idx + 1) * 150}ms`,
                                }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && (
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                    )}
                                </div>

                                {/* Content */}
                                <div
                                    className={`pl-8 md:pl-0 ${
                                        idx % 2 === 0
                                            ? "md:pr-16 md:text-right"
                                            : "md:col-start-2 md:pl-16"
                                    }`}
                                >
                                    <div
                                        className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                                    >
                                        <span className="text-sm text-primary font-medium">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl font-semibold mt-2">
                                            {exp.role}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {exp.company}
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-4">
                                            {exp.description}
                                        </p>
                                        <div
                                            className={`flex flex-wrap gap-2 mt-4 ${
                                                idx % 2 === 0
                                                    ? "md:justify-end"
                                                    : ""
                                            }`}
                                        >
                                            {exp.skills.map((tech, techIdx) => (
                                                <span
                                                    key={techIdx}
                                                    className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
