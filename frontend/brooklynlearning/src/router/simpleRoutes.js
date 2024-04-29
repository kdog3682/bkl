// const components = import.meta.glob("../components/*")
// console.log(Object.keys(components))

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Profile from '../views/Profile.vue'
import Settings from '../views/Settings.vue'

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
    name: 'Roadmap',
    component: Roadmap,
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



export default routes
