/*
    desc: |
        counting how many icons there are. 
        it should be quite a lot.

    notes: 
        - dont forget the async prefix
        - dont forget to mount the component
        - toBeGreaterThan | toBeGreaterThanOrEqual
        - toMatch(regex)
*/

import { flushPromises, mount } from "@vue/test-utils"
import { mount } from '@vue/test-utils'
import SimpleIcons from '../examples/SimpleIcons.vue'

describe("icon component", () => {
    test("more than 5 icons rendered", async () => {
        const wrapper = mount(SimpleIcons)
        const elements = await wrapper.findAll("a, i, svg")
        expect(elements.length).toBeGreaterThan(5)
    })
})
