export const Button = ({
    className = "",
    size = "default",
    children,
    ...props
}) => {
    const baseClasses =
        "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-200";

    const sizeClasses = {
        sm: "px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm",
        default: "px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base",
        lg: "px-5 py-2.5 text-sm sm:px-8 sm:py-4 sm:text-lg",
    };

    return (
        <button
            className={`${baseClasses} ${sizeClasses[size]} ${className}`}
            {...props}
        >
            <span className="relative flex items-center justify-center gap-1.5 sm:gap-2">
                {children}
            </span>
        </button>
    );
};
