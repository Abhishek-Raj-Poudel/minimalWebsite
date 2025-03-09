import { defineConfig } from 'vite';
import htmlMinifier from 'vite-plugin-html-minifier';

export default defineConfig({
  plugins: [htmlMinifier()],
  build: {
    outDir: 'dist', // Output folder
    minify: true,   // Enable JS & CSS minification
  },
});
