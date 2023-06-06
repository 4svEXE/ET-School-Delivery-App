import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [jsconfigPaths(), react()],
  resolve: {
    alias: {
      public: path.resolve(__dirname, "./public/"),
    },
  },
  boild: {
    sourcemap: true,
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5100",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
