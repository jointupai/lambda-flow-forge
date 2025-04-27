
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
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
      "@": path.resolve(__dirname, "./src")
    },
    dedupe: ['react', 'react-dom']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    },
    sourcemap: false
  },
  optimizeDeps: {
    include: ['@stripe/react-stripe-js', '@stripe/stripe-js'],
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  }
}));
