const daisyui = require("daisyui");
const themes = require("daisyui/theme/object");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", //adjust based on your project
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  //use `require` for actual plugin import
  daisyui: {
    themes: [
      "light", // A clean, bright theme with neutral tones.
      "dark", // A classic dark mode with high contrast.
      "cupcake", // A light and playful theme with pastel colors.
      "bumblebee", // A yellow and black theme, inspired by a bee.
      "emerald", // A theme with green shades.
      "corporate", // A professional, corporate-style theme.
      "synthwave", // A retro-futuristic theme with vibrant neon colors.
      "retro", // A nostalgic theme with a retro color palette.
      "cyberpunk", // A futuristic theme with neon hues.
      "valentine", // A theme with pink and red tones for Valentine's day.
      "halloween", // A spooky theme with orange and black colors.
      "garden", // A fresh, floral theme with soft greens and pinks.
      "forest", // A forest-inspired green-themed palette.
      "aqua", // A water-inspired theme with blue and teal tones.
      "lofi", // A soft and relaxing theme with muted tones.
      "pastel", // A gentle theme with soft, desaturated colors.
      "fantasy", // A whimsical theme with dreamy pastels.
      "wireframe", // A minimal, grayscale theme resembling wireframes.
      "black", // A pure black theme for maximum contrast.
      "luxury", // A rich and luxurious theme with gold tones.
      "dracula", // A dark theme with vibrant purple, red, and pink accents.
      "cmyk", // A print-inspired theme with cyan, magenta, yellow, and black.
      "autumn", // A warm theme with autumn-inspired colors.
      "business", // A formal theme with muted professional tones.
      "acid", // A high-contrast theme with bold, saturated colors.
      "lemonade", // A zesty theme with bright yellows and citrus tones.
      "night", // A dark theme with subtle bright accents.
      "coffee", // A theme resembling coffee colors.
      "winter", // A cool blue-based winter theme.
      "dim", // A subdued dark theme with softer contrasts.
      "nord", // A frosty, arctic-inspired color palette.
      "sunset", // A warm theme with sunset oranges and purples.
    ],
  },
};
