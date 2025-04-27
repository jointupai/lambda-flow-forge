
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Configure server for client-side routing
    strictPort: true,
    middlewareMode: false
  },
  base: "/",
  preview: {
    host: "::",
    port: 8080,
    strictPort: true
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ['three', 'react', 'react-dom']
  },
  // Add historyApiFallback for SPA routing
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    commonjsOptions: {
      include: [/node_modules/]
    },
    sourcemap: false
  },
  optimizeDeps: {
    include: ['three'],
    force: true
  }
}));
