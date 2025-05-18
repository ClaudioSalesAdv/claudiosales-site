// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '', // domínio raiz personalizado
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
