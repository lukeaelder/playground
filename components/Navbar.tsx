import NavbarLinks from './NavbarLinks';

const Navbar = () => {
    return (
        <nav className='fixed top-0 h-14 w-full'>
            <div className='flex h-full justify-between'>
                <div className='flex items-center ml-6 text-lg font-semibold tracking-wide text-indigo-100'>
                    <a href='/'>Code Playground</a>
                </div>
                <div className='flex'>
                    <NavbarLinks />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
