'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const NavThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div
                className={`relative flex w-full items-center gap-6 rounded-[.625rem] px-3 py-2 text-[.9375rem] font-light select-none`}
            >
                <div className='w-6 h-6'></div>
                <p>Theme:</p>
            </div>
        );
    }
    
    return (
        <div
            className={`relative flex w-full items-center gap-6 rounded-[.625rem] px-3 py-2 text-[.9375rem] font-light transition duration-[40ms] hover:bg-neutral-200/70 active:bg-neutral-300/70 dark:hover:bg-neutral-800 dark:active:bg-neutral-700`}
        >
            <svg
                className='z-10 h-6 w-6 stroke-2 pointer-events-none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
            >
                <path fill='none' stroke='none' d='M0 0h24v24H0z' />
                {theme === 'dark' || resolvedTheme === 'dark' ? (
                    <path d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646' />
                ) : (
                    <path d='M3 12H4M12 3V4M21 12H20M12 21V20M5.63 5.63L6.343 6.343M18.364 18.364L17.65 17.65M18.364 5.6L17.65 6.343M5.6 18.364L6.343 17.65M12 8A4 4 0 0 1 12 16A4 4 0 0 1 12 8' />
                )}
            </svg>
            <p className='z-10 pointer-events-none'>Theme: {theme && theme[0].toUpperCase() + theme.slice(1)}</p>
            <svg
                viewBox='0 0 24 24'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='pointer-events-none absolute right-2 z-10 h-4 w-4 stroke-2'
            >
                <path fill='none' stroke='none' d='M0 0h24v24H0z' />
                <path d='M9 18L15 12L9 6' />
            </svg>
            <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className={`absolute top-0 left-0 h-full w-full cursor-pointer opacity-0`}
            >
                <option value='light'>Light</option>
                <option value='dark'>Dark</option>
                <option value='system'>System</option>
            </select>
        </div>
    );
};

export default NavThemeToggle;
