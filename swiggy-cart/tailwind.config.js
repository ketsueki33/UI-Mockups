/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary": "#f05a26",
                "primary-bg":"#fef3f0",
                "secondary-bg":"#f0f0f5",
                "primary-text":"#403c3c",
                "gray":"#9e9ea8"
            },
        },
    },
    plugins: [],
};
