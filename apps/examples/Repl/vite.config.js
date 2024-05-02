import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"

import Vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"

function resolvePackage(name) {
    const path = `../../packages/${name}/src/index.js`
    return fileURLToPath(new URL(path, import.meta.url))
}

export default defineConfig({
    plugins: [
        Vue(),
        Components({
            dirs: [
                "src/components",
                "src/layouts",
                "src/pages",
            ],
        }),
        AutoImport({
            imports: [
                "vue",
                "vue-router",
                "pinia",
            ],
            dirs: ["./composables"],
        }),
    ],
    resolve: {
        alias: {
            "@bkl/shared": resolvePackage("shared"),
            "@bkl/composables": resolvePackage("composables"),
            "@bkl/components": resolvePackage("components"),
            "@bkl/services": resolvePackage("services"),
            "@bkl/layouts": resolvePackage("layouts"),
        },
    },
    base: "/bkl/",
})
