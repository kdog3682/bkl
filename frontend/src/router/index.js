import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import { defineComponent } from 'vue'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Profile from '../components/Profile.vue'
import Settings from '../components/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        layout: 'Default',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
        layout: 'Resource',
    }
  },
  {
    path: '/roadmap',
    name: 'RoadMap',
    component: RoadMap,
    meta: {
        layout: 'Resource',
    }
  },
  {
    path: '/changelog',
    name: 'Changelog',
    component: Changelog,
    meta: {
        layout: 'Resource',
    }
  },
]










const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes
})

export default router

