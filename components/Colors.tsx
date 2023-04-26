const Colors = () => {
    return (
        <div className="flex gap-4">
            <div className='flex w-fit flex-col gap-2 rounded-2xl bg-white p-8'>
                <div className='h-10 w-48 rounded-xl bg-neutral-200/80'></div>
                <div className='h-10 w-48 rounded-xl bg-neutral-300/80'></div>
                <div className='h-10 w-48 rounded-xl bg-neutral-400/60'></div>
            </div>
            <div className='flex w-fit flex-col gap-2 rounded-2xl bg-neutral-1000 p-8'>
                <div className='h-10 w-48 rounded-xl bg-neutral-800'></div>
                <div className='h-10 w-48 rounded-xl bg-neutral-700'></div>
                <div className='h-10 w-48 rounded-xl bg-neutral-600'></div>
            </div>
        </div>
    );
};

export default Colors;
