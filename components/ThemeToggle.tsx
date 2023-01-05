'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className='mx-2 w-6'></div>;
    }

    return (
        <button
            className='relative flex cursor-pointer'
            onClick={() => setOpen(!open)}
        >
            <div className='pointer-events-none rounded-md p-4'>
                <svg
                    className='h-6 w-6 stroke-2 dark:stroke-amber-100'
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
            </div>
            <select
				value={theme}
				onChange={(e) => setTheme(e.target.value)}
				className='w-full h-full top-0 left-0 absolute opacity-0 cursor-pointer'
			>
				<option value='light'>Light</option>
				<option value='dark'>Dark</option>
				<option value='system'>System</option>
			</select>
        </button>
    );
};

export default ThemeToggle;
