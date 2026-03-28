import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tambahno settingan server iki rek ben luwih joss
  server: {
    host: true,    // Iki penting ben kabeh iso ngecek lewat IP Network nek perlu
    port: 5173,    // Kunci port-e ndek kene ben gak ganti-ganti mleset nang 5174, dst.
    strictPort: true // Nek port 5173 dinggo, de'e gak bakal pindah port dewe
  }
})