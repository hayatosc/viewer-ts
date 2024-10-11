import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [dts(), libInjectCss()],
  build: {
    lib: {
      entry: './lib/index.ts',
      name: 'viewer-ts',
      fileName: 'index',
      formats: ['es'],
    },
  },
});
