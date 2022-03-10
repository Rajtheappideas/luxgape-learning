const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6E1F",
        secondary: "#5C616C",
        from: "#33BAC6",
        to: "#162765",
        title: "#000000",
        footer: "#FFF8F0",
      },
      bg: {
        bgblank: "./src/assets/LXG_BG.png",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("autoprefixer"),
    Myclass,
  ],
};
