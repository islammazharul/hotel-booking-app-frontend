import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
// import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  // },

  server: {
    proxy: {
      "/api": {
        target: "https://hotel-booking-app-backend-delta.vercel.app",
        changeOrigin: true,
        secure: false, // If your backend uses HTTPS with a self-signed certificate
      },
    },
  },
});
