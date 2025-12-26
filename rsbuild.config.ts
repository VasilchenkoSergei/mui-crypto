import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    assetPrefix: '/mui-crypto/',
  },
  server: {
    proxy: {
      '/b2api': {
        target: 'https://awx.pro',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
