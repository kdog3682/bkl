import { sayhi } from "@bkl/shared"
import { useSayhi } from "@bkl/composables"
import { SayHowdy } from "@bkl/components"
import { describe, expect, it } from "vitest"

import { mount } from "@vue/test-utils"
import HelloWorld from "../HelloWorld.vue"

describe("HelloWorld Default Test", () => {
    sayhi('bob')
    it("renders properly", () => {
        const wrapper = mount(HelloWorld, {
            props: { msg: "Hello Vitest" },
        })
        expect(wrapper.text()).toContain("Hello Vitest")
        expect(wrapper.text()).toContain("success")
    })
})
