/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mobileBackground: "url('./assets/bg-intro-mobile.png')",
        desktopBackground: "url('./assets/bg-intro-desktop.png')",
        errorIcon: "url('./assets/icon-error.svg')",
      },
      colors: {
        primaryRed: "var(--primary-red)",
        primaryGreen: "var(--primary-green)",
        accentBlue: "var(--accent-blue)",
        darkBlue: "var(--dark-blue)",
        grayish: "var(--grayish)",
      },
    },
    fontFamily: {
      heading: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
// colors: {
//       red: "hsl(0, 100%, 74%)",
//       green: "hsl(154, 59%, 51%)",
//       blue: "hsl(248, 32%, 49%)",
//     }

// colors: {
//         dark_blue: "hsl(249, 10%, 26%)",
//         grayish_blue: "hsl(246, 25%, 77%)",
//       },
