'use client';

import { useState, useRef, useEffect } from 'react';
import { generatePath, generatePathData, generateAnimation } from './utils';

const Page = () => {
    const [pathInput, setPathInput] = useState(
        'M0,0C0,0,0.014,-0.099,0.015,-0.103,0.016,-0.091,0.049,0.134,0.065,0.24,0.106,0.274,0.184,0.339,0.2,0.353,0.201,0.314,0.214,0.045,0.215,0.025,0.218,0.033,0.256,0.113,0.275,0.152,0.282,0.155,0.293,0.16,0.3,0.162,0.302,0.211,0.306,0.292,0.31,0.354,0.361,0.423,0.425,0.507,0.47,0.566,0.493,0.566,0.537,0.566,0.555,0.566,0.556,0.579,0.558,0.612,0.56,0.628,0.576,0.634,0.605,0.645,0.625,0.652,0.651,0.718,0.684,0.801,0.715,0.877,0.741,0.9,0.77,0.924,0.795,0.944,0.804,0.943,0.818,0.942,0.825,0.942,0.826,0.891,0.829,0.704,0.83,0.701,0.83,0.701,0.834,0.759,0.835,0.76,0.835,0.759,0.839,0.7,0.84,0.696,0.846,0.711,0.925,0.88,0.945,0.921,0.954,0.915,0.988,0.893,0.995,0.889,0.995,0.904,1,1,1,1'
    );
    //'m0 0c0.14 0 0.242 0.438 0.272 0.561c0.041 0.167 0.082 0.402 0.09 0.439c0.008 -0.015 0.052 -0.127 0.093 -0.189c0.055 -0.085 0.118 -0.058 0.131 -0.049c0.076 0.05 0.133 0.219 0.14 0.236c0.062 -0.084 0.114 -0.062 0.133 -0.048c0.019 0.014 0.038 0.035 0.052 0.048c0.011 -0.004 0.028 -0.014 0.043 -0.014c0.015 0 0.046 0.016 0.046 0.016';

    //m0 0c0 0 0.014 0.136 0.021 0.226c0.019 0.254 0.025 0.386 0.044 0.641c0.007 0.099 0.01 0.15 0.02 0.248c0.006 0.071 0.011 0.109 0.021 0.178c0.003 0.021 0.006 0.034 0.012 0.053c0.003 0.01 0.007 0.018 0.012 0.025c0.001 0.001 0.005 0.002 0.006 0.001c0.003 -0.001 0.007 -0.006 0.009 -0.01c0.007 -0.016 0.012 -0.028 0.016 -0.046c0.024 -0.109 0.033 -0.173 0.057 -0.286c0.007 -0.035 0.012 -0.055 0.022 -0.089c0.005 -0.019 0.01 -0.031 0.018 -0.049c0.003 -0.006 0.006 -0.01 0.01 -0.015c0.003 -0.003 0.005 -0.007 0.009 -0.008c0.004 -0.001 0.011 -0.001 0.015 0c0.006 0.003 0.011 0.007 0.015 0.013c0.029 0.046 0.046 0.083 0.076 0.13c0.006 0.01 0.013 0.016 0.022 0.023c0.007 0.005 0.014 0.008 0.023 0.011c0.005 0.001 0.009 0 0.015 -0.001c0.005 -0.001 0.01 -0.002 0.015 -0.004c0.028 -0.016 0.045 -0.029 0.073 -0.045c0.008 -0.004 0.014 -0.006 0.023 -0.009c0.008 -0.002 0.014 -0.003 0.022 -0.004c0.011 0 0.019 0 0.03 0.002c0.03 0.005 0.047 0.011 0.077 0.016c0.015 0.003 0.025 0.004 0.04 0.004c0.056 -0.001 0.089 -0.006 0.147 -0.007c0.05 -0.001 0.13 0.002 0.13 0.002

    //M0 0 C0.14 0 0.242 0.438 0.272 0.561 0.313 0.728 0.354 0.963 0.362 1 0.37 0.985 0.414 0.873 0.455 0.811 0.51 0.726 0.573 0.753 0.586 0.762 0.662 0.812 0.719 0.981 0.726 0.998 0.788 0.914 0.84 0.936 0.859 0.95 0.878 0.964 0.897 0.985 0.911 0.998 0.922 0.994 0.939 0.984 0.954 0.984 0.969 0.984 1 1 1 1
    const [pathRes, setPathRes] = useState('');
    const [pathData, setPathData] = useState([]);
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        updateData();
    }, []);

    const updateData = () => {
        const newData = generatePathData(pathInput);
        const newPathFromData = generatePath(newData, 0.5);
        console.log(newData);
        // console.log(newPathFromData);
        // console.log(generatePath(newData));
        setPathData(newData);
        setPathRes(newPathFromData);
        console.log(generateAnimation(newData));
    };

    const playAnimation = () => {
        console.log('play animation');
        setAnimate(!animate);
    };

    return (
        <div className='mt-[100px] w-fit'>
            <div className='flex gap-[20px]'>
                <div className='relative h-[400px] w-[400px] border-[1px] border-neutral-700'>
                    <span
                        className='absolute bottom-[10px] right-[10px] text-sm text-neutral-600'
                        onClick={() => playAnimation()}
                    >
                        SVG
                    </span>
                    <svg
                        className='pointer-events-none fill-none stroke-white stroke-[0.01] [transform:scale(2,2)_rotateX(180deg)]'
                        viewBox='0 0 2 2'
                    >
                        <path d={pathRes} />
                    </svg>
                    <svg
                        className='stroke-0.01 pointer-events-none absolute top-0 left-0 h-full w-full fill-red-500 [transform:scale(2,2)_rotateX(180deg)]'
                        viewBox='0 0 2 2'
                    >
                        {pathData.map((d: any, i) => (
                            <circle key={i} cx={d.x + 0.5} cy={d.y + 0.5} r='0.015' />
                        ))}
                    </svg>
                    <div
                        className={`vert absolute top-0 h-full w-[1px] border-r-[1px] border-dashed border-neutral-700 ${
                            animate ? 'line-vert' : ''
                        }`}
                    ></div>
                    <div
                        className={`horz absolute left-0 h-[1px] w-full border-t-[1px] border-dashed border-neutral-700 ${
                            animate ? 'play-generated' : ''
                        }`}
                    ></div>
                </div>
                <div className='relative flex h-[400px] w-[40px] items-end justify-center'>
                    <div
                        className={`absolute bottom-[-20px] h-[40px] w-[40px] rounded-lg bg-rose-500 ${
                            animate ? 'play-generated' : ''
                        }`}
                        onClick={() => updateData()}
                    ></div>
                </div>
                <div className='relative h-[400px] w-[400px] border-[1px] border-neutral-700'>
                    <span
                        className='absolute bottom-[10px] right-[10px] text-sm text-neutral-600'
                        onClick={() => playAnimation()}
                    >
                        CSS
                    </span>
                </div>
            </div>
            <textarea
                className='mt-[40px] h-[200px] w-[880px] border-[1px] border-neutral-700 bg-transparent p-[20px] text-xs outline-rose-500 transition'
                onChange={(e) => setPathInput(e.target.value)}
                value={pathInput}
            ></textarea>
        </div>
    );
};

export default Page;
