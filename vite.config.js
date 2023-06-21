import { VitePWA } from "vite-plugin-pwa";
import { defineConfig, loadEnv } from "vite";
import Vue from "@vitejs/plugin-vue";
import path from "path";
import { fileURLToPath } from "url";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig(({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, fileURLToPath(new URL("./env", import.meta.url)));

  return {
    envDir: path.resolve(__dirname, "./env"),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      Vue(),
      AutoImport({
        imports: ["vue", "vue-router", "vuex", "@vueuse/core"],
      }),
      Components(),
      VitePWA({
        includeAssets: [
          "favicon.ico",
          "apple-touch-icon.png",
          "masked-icon.svg",
        ],
        manifest: {
          name: "FunsGirl App",
          short_name: "FunsGirl",
          display: "fullscreen",
          description: "拯救宇宙",
          theme_color: "#00ff00",
          background_color: "#ff00ff",
          icons: [
            {
              src: "/icons/pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/icons/pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/icons/favicon.ico",
              sizes: "32x32",
              type: "image/x-icon",
            },
            {
              src: "/icons/maskable_icon.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
          id: "/?source=pwa",
          start_url: "/?source=pwa",
        },
      }),
    ],

    server: {
      open: true,
      host: env.VITE_SERVER_HOST,
      port: Number(env.VITE_SERVER_PORT),
      strictPort: true,
      cors: true,
      proxy: {
        "/api": {
          target: env.VITE_SERVER_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    preloads: ["@vueuse/shared"],
  };
});
