export const HamburgerButton = ({ isOpen, onClick }) => {
    return (
        <button
            className="p-2 text-foreground cursor-pointer focus:outline-none flex flex-col justify-center items-center gap-1.5"
            onClick={onClick}
            aria-label="Toggle menu"
        >
            <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 origin-center ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0 scale-x-0" : ""
                }`}
            />
            <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 origin-center ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
        </button>
    );
};
