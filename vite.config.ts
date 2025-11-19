import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    watch: {
      // Optimize file watching for faster sync
      ignored: [
        "**/node_modules/**",
        "**/.git/**",
        "**/dist/**",
        "**/build/**",
        "**/.DS_Store",
        "**/package-lock.json",
        "**/bun.lockb",
        "**/yarn.lock",
        "**/.vite/**"
      ],
      // Use polling on macOS for better reliability
      usePolling: false,
    },
    // Faster HMR updates
    hmr: {
      overlay: true,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Optimize build and dev performance
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
}));
