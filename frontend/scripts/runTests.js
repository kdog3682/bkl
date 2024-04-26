import { startVitest } from "vitest/node"
import { fileURLToPath } from "node:url"

import viteConfig from '/home/kdog3682/@bkl/frontend/vitest.config.js'
// viteConfig.test.include = 'abc'
// console.log(viteConfig)
// throw ''
const vitest = await startVitest(
    "test",
    [],
    {},
    {},
    viteConfig,
)

await vitest?.close()
