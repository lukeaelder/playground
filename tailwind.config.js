/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            maxWidth: {
                '8xl': '1376px',
            },
            colors: {
                neutral: {
                    1000: '#0F0F0F',
                },
            },
        },
    },
    plugins: [],
};
