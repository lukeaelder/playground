import NavLink from './NavLink';
import NavLinksDivider from './NavLinksDivider';
import NavLinksTitle from './NavLinksTitle';
import NavThemeToggle from './NavThemeToggle';

const Navlinks = () => {
    return (
        <div className='fixed top-14 h-full w-60 p-3'>
            <NavLink
                path='M3 15V20H21V12A3 3 0 0 0 18 9H6A3 3 0 0 0 3 12V15A2.5 2.5 0 0 0 6 14 2.5 2.5 0 0 1 8 13 2.5 2.5 0 0 1 10 14 2.5 2.5 0 0 0 12 15 2.5 2.5 0 0 0 14 14 2.5 2.5 0 0 1 16 13 2.5 2.5 0 0 1 18 14 2.5 2.5 0 0 0 21 15M12 4L13.465 5.638A2 2 0 1 1 10.45 5.638Z'
                label='Birthday Cake'
                url='/'
            />
            <NavLink
                path='M12 4L3 19H21M15.415 5.97H15.43M17.715 8.67H17.73M19.515 11.771H19.63M20.615 15.171H20.63'
                label='Angle'
                url='/'
            />
            <NavLink
                path='M6 4V14M6 18V20M12 4V6M12 10V20M18 4V14M18 18V20M6 14A2 2 0 0 1 6 18A2 2 0 0 1 6 14M12 6A2 2 0 0 1 12 10A2 2 0 0 1 12 6M18 14A2 2 0 0 1 18 18A2 2 0 0 1 18 14'
                label='Adjustments'
                url='/'
                curState={true}
            />
            <NavLink
                path='M4 7V6A2 2 0 0 1 6 4H8M16 4H18A2 2 0 0 1 20 6V7M20 17V18A2 2 0 0 1 18 20H16M8 20H6A2 2 0 0 1 4 18V17M5 11V13H6V11H5M10 11V13M14 11V13H15V11H14M19 11V13'
                label='QR Code'
                url='/'
            />
            <NavLink path='M5 21V5H19L14.5 9.5L19 14H5' label='Flag' url='/' />
            <NavLinksDivider />
            <NavLinksTitle title='Section 2' />
            <NavLink
                path='M4 13.5V6A2 2 0 0 1 6 4H18A2 2 0 0 1 20 6V18A2 2 0 0 1 18 20H12M2 19H9M6 16L9 19L6 22M4 10H20M10 4V15.5'
                label='Table Import'
                url='/'
            />
            <NavLink
                path='M3 4A1 1 0 0 1 4 3H20A1 1 0 0 1 21 4V7L14 14V17L10 21V14L3 7V4'
                label='Filter'
                url='/'
            />
            <NavLink
                path='M6 8V16A4 4 0 0 1 10 12H14A4 4 0 0 0 18 8M6 4A2 2 0 0 1 6 8A2 2 0 0 1 6 4M6 16A2 2 0 0 1 6 20A2 2 0 0 1 6 16M18 4A2 2 0 0 1 18 8A2 2 0 0 1 18 4'
                label='Git Branch'
                url='/'
            />
            <NavLinksDivider />
            <NavLinksTitle title='Settings' />
            <NavThemeToggle/>
        </div>
    );
};

export default Navlinks;
