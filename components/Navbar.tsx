import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
        <nav className='fixed top-0 h-14 w-full'>
            <div className='mx-auto flex h-full max-w-8xl justify-between outline outline-1 outline-blue-500'>
                <div>
                    <a href='/'>---</a>
                </div>
                <div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
