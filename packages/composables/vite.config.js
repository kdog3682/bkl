import { defineConfig } from "vite"
import { resolve } from "path"
import { fileURLToPath, URL } from 'node:url'
const entry = fileURLToPath(new URL('./src/index.js', import.meta.url))
export default defineConfig({
    build: {
        lib: {
            entry,
            fileName: 'bundle',
            formats: ["es"],
        },
    },
})
