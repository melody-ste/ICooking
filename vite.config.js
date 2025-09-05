import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base : "/ICooking/",
  plugins: [
    react(),
    VitePWA({ 
      registerType: "autoUpdate",
      manifest: {
        name: "My Vite React PWA",
        short_name: "ICooking",
        start_url: ".",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#ffffff",
      }
    })
  ]
});