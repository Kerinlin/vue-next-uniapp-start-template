import { defineConfig } from 'vite';
import Uni from '@dcloudio/vite-plugin-uni';
import eslintPlugin from 'vite-plugin-eslint';
import Unocss from 'unocss/vite';
import { resolve } from 'path';
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    Uni(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
    }),
    Unocss({
      configFile: './uno.config.js',
    }),
  ],
  resolve: {
    alias: { '@': resolve(__dirname, './src') },
  },
});
