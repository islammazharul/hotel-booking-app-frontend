/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  //   theme: {
  //     // extend: {
  //     // 	borderRadius: {
  //     // 		lg: 'var(--radius)',
  //     // 		md: 'calc(var(--radius) - 2px)',
  //     // 		sm: 'calc(var(--radius) - 4px)'
  //     // 	},
  //     // 	colors: {}
  //     // }
  //   },
  //   theme: {
  //     colors: {
  //       white: "#fff",
  //       darkGray: "#4d4d4d",
  //       green: "#00C165",
  //       black: "#000",
  //     },
  //     extend: {
  //       backgroundImage: {
  //         bannerImg: "url('/travel-banner.jpg')",
  //         blackOverlay:
  //           "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
  //       },
  //     },
  //   },
  plugins: [require("tailwindcss-animate")],
};
