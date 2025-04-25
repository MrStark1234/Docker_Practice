import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // 🔁 force polling mode
    },
    host: true, // 🔗 allows Docker to bind to 0.0.0.0
    port: 5173,
  },
});
