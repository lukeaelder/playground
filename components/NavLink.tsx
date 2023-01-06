'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavLinkProps {
    path: string;
    label: string;
    url: string;
    curState?: boolean;
}

const NavLink = ({ path, label, url, curState = false }: NavLinkProps) => {
    const [state, setState] = useState(curState);


    return (
        <Link
            href={url}
            className={`flex w-full items-center gap-6 rounded-[.625rem] px-3 py-2 text-[.9375rem] ${
                state
                    ? 'bg-neutral-200/70 font-normal hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700/80'
                    : 'font-light hover:bg-neutral-200/70 active:bg-neutral-200 dark:hover:bg-neutral-800 dark:active:bg-neutral-700/80'
            }`}
        >
            <svg
                viewBox='0 0 24 24'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-6 w-6 stroke-2'
            >
                <path fill='none' stroke='none' d='M0 0h24v24H0z' />
                <path d={path} />
            </svg>
            <p>{label}</p>
        </Link>
    );
};

export default NavLink;
