import HomeLayout from '../layouts/HomeLayout.vue'
import About from '../views/About.vue'
import Roadmap from '../views/Roadmap.vue'
import Changelog from '../views/Changelog.vue'

const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
        { path: 'roadmap', name: 'Roadmap', component: Roadmap },
        { path: 'changelog', name: 'Changelog', component: Changelog },
        { path: 'about', name: 'About', component: About },
    ]
  },
]



export default routes
