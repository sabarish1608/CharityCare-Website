import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/CharityCare-Website/",  // ✅ Add your repo name here
});

