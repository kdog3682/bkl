<template>
  <nav class="navbar">
    <router-link to="/" class="navbar-brand">
      <img src="@/assets/logo.svg" alt="Site Logo" />
    </router-link>
    <ul class="navbar-nav">
      <li v-for="link in links" :key="link.name">
        <router-link :to="link.path">{{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
// Define the navigation links
const defaultLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Roadmap', path: '/roadmap' },
  { name: 'Changelog', path: '/changelog' }
]
    defineProps({ links: {default: ()=>defaultLinks }})
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
}

.navbar-brand img {
  height: 40px; /* Adjust based on your logo's dimensions */
}

.navbar-nav {
  list-style: none;
  display: flex;
  gap: 10px;
}

.navbar-nav li a {
  color: #fff;
  text-decoration: none;
}

/* Styling for active link */
.router-link-active {
  font-weight: bold;
  color: #f00; /* Change color for the active link */
}
</style>

