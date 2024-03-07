/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                licorice: "#01030D",
                ghost_white: "#FBFBFF",
                scarlet: "#FF331F",
                red_error: "#CC0000",
            },
        },
        screens: {
            med_phone: "320px",
            large_phone: "370px",
            tablet: "640px",
            laptop: "1024px",
            desktop: "1280px",
            desktop_xl: "1400px",
            desktop_2xl: "1700px",
            desktop_3xl: "2000px",
            tall: { raw: "(min-height: 800px)" },
        },
        fontFamily: {
            "switzer": ["Switzer", "sans-serif"],
            "switzer-bold": ["Switzer-Bold", "sans-serif"],
        },
    },
    plugins: [],
    safelist: [
        "text-licorice"
    ],
};
