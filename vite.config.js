// vite.config.js

import { defineConfig } from 'vite';
// import { resolve } from 'path';

export default defineConfig({
  // config options
  build: {
    target: ['es2022', 'edge112', 'firefox112', 'chrome112', 'safari16.4', 'ios16.4'],
  },
  // server: {
  //   open: '/index.html',
  // },
});
