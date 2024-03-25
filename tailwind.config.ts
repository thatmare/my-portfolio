import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "moody-blue": {
          "50": "#edefff",
          "100": "#dee2ff",
          "200": "#c4caff",
          "300": "#a0a7ff",
          "400": "#7371ff",
          "500": "#695bf9",
          "600": "#5a3dee",
          "700": "#4d2fd3",
          "800": "#3f29aa",
          "900": "#362986",
          "950": "#22184e",
        },
      },
    },
  },
  plugins: [],
};
export default config;
