import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,      // Clean before each build
    rollupOptions: {
      input: path.resolve(__dirname, 'vite.html'), // Entry point
    },
  },
  css: {
    preprocessorOptions: {
      scss: {}, // Enable SASS/SCSS support
    },
  },
});
