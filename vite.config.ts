import { defineConfig } from 'vite';
import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [pnpPlugin()],
    },
  },
});
