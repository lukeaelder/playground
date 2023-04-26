'use Client';

import { useState } from 'react';

interface IHoverState {
    left: number;
    top: number;
}

const ShinyButton = ({
    children,
    active = false,
}: {
    children: React.ReactNode;
    active?: boolean;
}) => {
    const [hoverState, setHoverState] = useState<IHoverState>({ left: 0, top: 0 });

    const handleMouseMove = (e: MouseEvent) => {
        if (!e) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const left = e.clientX - rect.left;
        const top = e.clientY - rect.top;
        setHoverState({ left: left, top: top });
    };

    return (
        <button
            onMouseMove={(e) => handleMouseMove(e)}
            className={`shiny-btn group relative flex w-full items-center gap-6  overflow-hidden rounded-[.625rem] px-3 py-2 text-[.9375rem] transition duration-[40ms] ${
                active
                    ? 'bg-neutral-200/60 font-normal hover:bg-neutral-200 active:bg-neutral-300/60 dark:bg-neutral-800 dark:hover:bg-neutral-700/80 dark:active:bg-neutral-700'
                    : 'font-light hover:bg-neutral-200/60 active:bg-neutral-200 dark:hover:bg-neutral-800 dark:active:bg-neutral-700/80'
            }`}
        >
            <div
                className={`duration-100 pointer-events-none absolute h-80 w-80 translate-x-[-50%] translate-y-[-50%] scale-75 rounded-full bg-gradient-radial via-transparent to-transparent opacity-0 transition-[opacity,colors] group-hover:scale-100 group-hover:opacity-70 dark:via-transparent dark:to-transparent ${
                    active ? 'from-neutral-300/60 active:bg-neutral-300 dark:from-neutral-700/80 dark:active:bg-neutral-700' : 'from-neutral-200 active:from-neutral-300/60 dark:from-neutral-700/80 dark:active:bg-neutral-700'
                }`}
                style={{ top: hoverState.top, left: hoverState.left }}
            ></div>
            {children}
        </button>
    );
};

export default ShinyButton;