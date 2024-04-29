/*
    tags:
        - flushPromises
        - find
        - findAll
        - toBe
        - toContain

    gotchas:
        - toBe: |
            can be hard to use
            you may
        - toMatchSnapshot: |
            not use this anyingmore
    notes:
        -
*/

import { flushPromises, mount } from "@vue/test-utils"
import { ref } from "vue"
import { createRouter, createWebHistory } from "vue-router"

const App = {
    template: `
    <router-link to="/posts">Go to posts</router-link>
    <router-view />
  `,
}

const Posts = {
    template: `
    <h1>Posts</h1>
    <ul>
      <li 
        v-for="post in posts" 
        :key="post.id" 
        :data-id="post.id"
        @click="onClick(post)"
      >
        <span>{{ post.name }}</span>
      </li>
    </ul>
  `,
    setup() {
        const onClick = (post) => {
        }
        const posts = ref([
            { id: 1, name: "Testing Vue Router" },
            { id: 2, name: "booga" },
            { id: 3, name: "fooga" },
        ])
        return {
            posts,
            onClick,
        }
    },
}

const routes = [
    {
        path: "/",
        component: {
            template: "Welcome to the blogging apple",
        },
    },
    {
        path: "/posts",
        component: Posts,
    },
]

let router
let wrapper
beforeEach(async () => {
    router = createRouter({
        history: createWebHistory(),
        routes: routes,
    })
    router.push("/")
    await router.isReady()

    wrapper = mount(App, {
        global: {
            plugins: [router],
        },
    })
})

describe("Vue Router & Dashboard", () => {
    test("html shows up", () => {
        expect(wrapper.text()).toContain(
            "Welcome to the blogging apple",
        )
    })
    test("clicks on router-link", async () => {
        await wrapper.find("a").trigger("click")
        await flushPromises()
        expect(wrapper.html()).toContain("Testing Vue Router")
    })

    test("clicks on element with booga text", async () => {
        await wrapper.find("a").trigger("click")
        await flushPromises()
        const elements = await wrapper.findAll("a, button, li")
        const textQuery = "booga"
        const finder = (el) => {
            return el.text().includes(textQuery)
        }
        const element = elements.find(finder)
        await flushPromises()
        expect(element.exists()).toBe(true)
    })
})
