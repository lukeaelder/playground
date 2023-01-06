import Link from 'next/link';

const NavbarLinks = () => {
    return (
        <div className='flex'>
            <div className='pr-6 pl-3 flex items-center'>
                <Link
                    target={'_blank'}
                    href='https://github.com/lukeaelder/playground'
                    className='group relative'
                >
                    <svg
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='absolute top-2 left-2 h-6 w-6 stroke-2'
                    >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                        <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
                    </svg>
                    <div className='h-10 w-10 rounded-2xl group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800'></div>
                </Link>
            </div>
        </div>
    );
};

export default NavbarLinks;
