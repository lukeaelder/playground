import Navlinks from '../components/NavLinks';

export default function Page() {
    return (
        <main>
            <div className='mx-auto max-w-8xl'>
                <Navlinks />
                <div className='h-[300vh] pl-64 pt-14 outline outline-2 outline-green-500'>
                    <div className='outline outline-4 outline-red-500 h-full'></div>
                </div>
            </div>
        </main>
    );
}
