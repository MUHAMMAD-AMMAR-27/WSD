/** @type {import('tailwindcss').Config} */
export default {
    content: [
        // "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                lexend: ["Lexend Deca", "sans-serif"],
                kannada: ["Tiro Kannada", "serif"],
                wix: ["Wix Madefor Display", "sans-serif"],
            },
        },
        screens: {
            'xs': '480px', // Extra small devices (phones under 640px)
            'sm': '640px', // Small devices (phones) e.g., iPhone SE, Galaxy S8
            'md': '768px', // Medium devices (tablets) e.g., iPad Mini, Galaxy Tab
            'lg': '1024px', // Large devices (small laptops) e.g., MacBook Air, Surface Pro
            'xl': '1280px', // Extra large devices (desktops) e.g., 1080p monitors
            '2xl': '1536px', // 2X large devices (large desktops) e.g., 1440p/4K screens
            '3xl': '1920px', // Optional: Ultra-wide or 4K+ devices e.g., ultrawide monitors
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}