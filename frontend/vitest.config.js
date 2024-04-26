import { fileURLToPath } from "node:url"
import {
    configDefaults,
    defineConfig,
    mergeConfig,
} from "vitest/config"
import viteConfig from "./vite.config.js"

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: "jsdom",
            globals: true,
            exclude: [
                ...configDefaults.exclude,
                "e2e/**",
            ],
            include: [
                // "src/components/__tests__/*.example.js"
                "src/components/__tests__/*.spec.js"
            ],
            root: fileURLToPath(new URL("./", import.meta.url)),
        },
    }),
)
