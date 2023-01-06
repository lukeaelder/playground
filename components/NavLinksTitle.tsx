interface NavLinksTitleProps {
    title: string;
}

const NavLinksTitle = ({title}:NavLinksTitleProps) => {
    return (
        <div className='pt-2 pb-1 px-3 font-medium'>
            <h3>{title}</h3>
        </div>
    );
};

export default NavLinksTitle;
