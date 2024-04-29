import { createRouter, createWebHistory } from 'vue-router'

import routes from "./routes.js"
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes
})

export default router

