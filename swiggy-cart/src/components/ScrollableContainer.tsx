import { useState, useRef, useEffect, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const ScrollableContainer = ({ children }: Props) => {
    const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
    const [showRightArrow, setShowRightArrow] = useState<boolean>(true);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isDesktop, setIsDesktop] = useState<boolean>(false);

    useEffect(() => {
        const checkIsDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        checkIsDesktop();
        window.addEventListener("resize", checkIsDesktop);

        return () => window.removeEventListener("resize", checkIsDesktop);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (containerRef.current) {
            const scrollAmount = direction === "left" ? -150 : 150;
            containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    return (
        <div className="relative">
            {isDesktop && showLeftArrow && (
                <button
                    className="absolute left-[-10px] top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 opacity-80 hover:bg-primary-bg"
                    onClick={() => scroll("left")}
                >
                    <img className="h-3 w-3" src="/arrow-left.png" />
                </button>
            )}
            <div
                ref={containerRef}
                className="flex gap-3 overflow-x-auto no-scrollbar"
                onScroll={handleScroll}
            >
                {children}
            </div>
            {isDesktop && showRightArrow && (
                <button
                    className=" absolute right-[-10px] top-1/2  -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 text-lg opacity-80 hover:bg-primary-bg"
                    onClick={() => scroll("right")}
                >
                    <img className="h-3 w-3" src="/arrow-right.png" />
                </button>
            )}
        </div>
    );
};
