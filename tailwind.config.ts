/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#14352C",
        "forest-deep": "#0B211A",
        pine: "#1E4C3E",
        moss: "#517064",
        clay: "#C4623C",
        "clay-deep": "#8E3F25",
        linen: "#F4EEE1",
        paper: "#FBF7EE",
        ink: "#1C221D",
        stone: "#D8CFBD",
        sand: "#E8DFCE",
        mist: "#EDE7DA",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)"],
        manrope: ["var(--font-manrope)"],
      },
      maxWidth: {
        shell: "1320px",
      },
      letterSpacing: {
        eyebrow: "0.2em",
      },
      boxShadow: {
        editorial: "0 30px 60px -30px rgba(20, 53, 44, 0.35)",
        card: "0 18px 40px -28px rgba(20, 53, 44, 0.45)",
      },
    },
  },
  plugins: [],
};
