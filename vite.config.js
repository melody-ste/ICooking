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
        start_url: "/ICooking/",
        scope: "/ICooking/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#ffffff",
        "icons": [
          {
            "src": "icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      }
    })
  ]
});