/**
 * @format
 * @type {import('tailwindcss').Config}
 */

import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-slab": ['"Roboto Slab"', "serif"],
        rubic: ['"Rubik", "serif"'],
      },
      dropShadow: {
        solid: "5px 5px rgba(0, 0, 0)",
        "sm-solid": "0 5px rgba(0, 0, 0)",
      },
      backgroundColor: {
        "primery-color": "#fff5e0",
      },
    },
  },
  plugins: [daisyui],
};
