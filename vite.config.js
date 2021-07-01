// vite.config.js
const { resolve } = require('path');

export default {
  // config options
  root: 'src',
  build: {
    outDir: '../dist/',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        //   nested: resolve(__dirname, 'src/nested/index.html')
      },
    },
  },
  // server: {
  //   open: '/index.html',
  // },
};
