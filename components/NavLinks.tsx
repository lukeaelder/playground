import NavLink from './NavLink';
import NavLinksDivider from './NavLinksDivider';
import NavLinksTitle from './NavLinksTitle';
import NavThemeToggle from './NavThemeToggle';

const Navlinks = () => {
    return (
        <div className='fixed top-14 h-full w-60 p-3'>
            <NavLink
                path='M17 20A2 2 0 1 0 21 20A2 2 0 0 0 17 20zM17 20H15M7 4A2 2 0 1 1 3 4A2 2 0 0 1 7 4zM7 4H9M14 4H12M12 20H10M3 20C11 20 13 4 21 4'
                label='Custom Ease'
                url='/custom-ease'
            />
            <NavLinksDivider />
            <NavLinksTitle title='Section 2' />
            <NavLinksDivider />
            <NavLinksTitle title='Settings' />
            <NavThemeToggle />
        </div>
    );
};

export default Navlinks;
