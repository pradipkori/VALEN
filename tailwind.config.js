/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'valentine-pink': '#ff6b9d',
                'valentine-dark': '#c44569',
                'valentine-light': '#ffc2d1',
                'valentine-purple': '#b983ff',
            },
            fontFamily: {
                'handwriting': ['"Dancing Script"', 'cursive'],
                'body': ['Poppins', 'sans-serif'],
            },
            animation: {
                'float': 'float 8s ease-in-out infinite',
                'bounce-slow': 'bounce 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite',
                'typewriter': 'typewriter 3s steps(40) 1s forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 157, 0.6)' },
                    '50%': { boxShadow: '0 0 40px rgba(255, 107, 157, 0.9)' },
                },
                typewriter: {
                    '0%': { width: '0' },
                    '100%': { width: '100%' },
                },
            },
        },
    },
    plugins: [],
}
