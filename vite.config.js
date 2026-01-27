import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    proxy: {
      '/api/translate': {
        target: 'https://libretranslate.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/translate/, '/translate'),
      },
    },
  },
});

