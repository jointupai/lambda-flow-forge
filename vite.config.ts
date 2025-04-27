
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
      "@": path.resolve(__dirname, "./src"),
      // Explicitly alias Stripe packages to node_modules
      "@stripe/stripe-js": path.resolve(__dirname, "node_modules/@stripe/stripe-js"),
      "@stripe/react-stripe-js": path.resolve(__dirname, "node_modules/@stripe/react-stripe-js")
    },
    dedupe: ['three', 'react', 'react-dom', '@react-three/fiber', '@react-three/drei']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      },
      // Remove Stripe packages from external config to bundle them properly
      external: []
    },
    commonjsOptions: {
      include: [/node_modules/]
    },
    sourcemap: false
  },
  optimizeDeps: {
    include: [
      'three', 
      '@react-three/fiber', 
      '@react-three/drei',
      '@stripe/stripe-js', 
      '@stripe/react-stripe-js'
    ],
    force: true,
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      }
    }
  }
}));
