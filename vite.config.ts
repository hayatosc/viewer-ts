import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [vue(), dts(), libInjectCss()],
  build: {
    lib: {
      entry: {
        index: 'lib/main.ts',
        'vue/index': 'lib/vue/index.ts',
      },
      name: 'viewer-ts',
      formats: ['es'],
    },
  },
});
