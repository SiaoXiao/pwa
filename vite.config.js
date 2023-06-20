import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "FunsGirl App",
        short_name: "FunsGirl",
        start_url: ".",
        display: "standalone",
        description: "拯救宇宙",
        theme_color: "#000000",
        background_color: "#000000",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "favicon.ico",
            sizes: "32x32",
            type: "image/x-icon",
          },
        ],
      },
    }),
  ],
});
