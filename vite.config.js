import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  appType: 'mpa', // disable history fallback
  build: {
    target: ['es2024']
  }
});
