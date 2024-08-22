/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Strong_cyan: "hsl(172, 67%, 45%)",
                c_Very_dark_cyan: "hsl(183, 100%, 15%)",
                c_Dark_grayish_cyan: "hsl(186, 14%, 43%)",
                c_Grayish_cyan: "hsl(184, 14%, 56%)",
                c_Light_grayish_cyan: "hsl(185, 41%, 84%)",
                c_Very_light_grayish_cyan: "hsl(189, 41%, 97%)",
            },
            fontFamily: {
                space_mono: ["Space Mono", "monospace"]
            }
        },
    },
    plugins: [],
}

