import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',   // 👈 ensures assets resolve correctly with custom domain
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
