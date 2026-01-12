import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: ["./src/**/*.{html,js,svelte,ts}"],
    safelist: ["dark"],
    theme: {
        extend: {
            fontFamily: {
                sf: ['SF Pro Display', 'SF Pro Text', 'sans-serif']
            }
        }
    }
}
