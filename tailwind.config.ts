import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "380px",
        "3xl": "3420px",
      },
    },
  },
  plugins: [],
};
export default config;
