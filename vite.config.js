// vite.config.js

import { defineConfig } from 'vite';
// import { resolve } from 'path';

export default defineConfig({
  // config options
  build: {
    target: ['es2022', 'edge111', 'firefox111', 'chrome111', 'safari16.3', 'ios16.3'],
  },
  // server: {
  //   open: '/index.html',
  // },
});
