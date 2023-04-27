'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface INavLinkProps {
    path: string;
    label: string;
    url: string;
}

const NavLink = ({ path, label, url }: INavLinkProps) => {
    const pathname = usePathname();

    return (
        <Link
            href={url}
            className={`flex w-full items-center gap-6 rounded-[.625rem] px-3 py-2 text-[.9375rem] transition duration-[40ms] ${
                pathname === url
                    ? 'bg-neutral-200/80 font-normal hover:bg-neutral-300/80 active:bg-neutral-400/60 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:active:bg-neutral-600'
                    : 'font-light hover:bg-neutral-200/80 active:bg-neutral-300/80 dark:hover:bg-neutral-800 dark:active:bg-neutral-700'
            }`}
        >
            <svg
                viewBox='0 0 24 24'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='pointer-events-none z-10 h-6 w-6 stroke-2'
            >
                <path fill='none' stroke='none' d='M0 0h24v24H0z' />
                <path d={path} />
            </svg>
            <p className='pointer-events-none z-10'>{label}</p>
        </Link>
    );
};

export default NavLink;