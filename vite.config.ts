import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('gsap') || id.includes('@gsap')) return 'vendor-gsap';
          if (id.includes('framer-motion')) return 'vendor-framer';
          if (id.includes('tsparticles') || id.includes('react-tsparticles')) return 'vendor-particles';
          if (id.includes('lenis')) return 'vendor-lenis';
          if (id.includes('react-router')) return 'vendor-router';
        },
      },
    },
  },
})
