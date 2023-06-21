import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [Vue()],
  env: "node",
  include: ["test/**/*", "**/*.spec.js"],
  exclude: ["**/*.d.ts", "**/node_modules/**", "**/dist/**"],
  timeout: 5000,
  concurrency: 10,
  test: {
    globals: true,
    environment: "jsdom",
  },
});
