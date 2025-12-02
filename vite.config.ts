import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@shared': resolve(__dirname, 'src/shared'),
      '@libs/permissions-service-provider': resolve(
        __dirname,
        'src/libs/service-providers/permissions-service-provider',
      ),
      '@libs/api-service-provider': resolve(
        __dirname,
        'src/libs/service-providers/api-service-provider',
      ),
      '@libs/translation-service-provider': resolve(
        __dirname,
        'src/libs/service-providers/translation-service-provider',
      ),
      '@libs': resolve(__dirname, 'src/libs'),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      input: './index.html',
      // your entry
      external: [],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 2000,
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ['scripts', 'packages-reports', '.husky'],
  },
});
