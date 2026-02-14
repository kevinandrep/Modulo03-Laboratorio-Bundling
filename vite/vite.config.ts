import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { bundleStats } from "rollup-plugin-bundle-stats";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    checker({ typescript: true }),

    viteCompression({
      algorithm: "gzip",
      threshold: 0,
      filter: (file) => !file.includes("bundle-stats.html"),
    }),
    viteCompression({
      algorithm: "brotliCompress",
      threshold: 0,
      filter: (file) => !file.includes("bundle-stats.html"),
    }),
    bundleStats(),
  ],
});
