<template>
  <div>
    <h1>Dashboard</h1>
    <router-link
      v-for="route in dashboardRoutes"
      :key="route.name"
      :to="{ name: route.name }"
    >{{ route?.meta?.title || route.name }}</router-link>
    <router-view/>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const dashboardRoutes = computed(() => {
  const dashboardRoute = router.getRoutes().find(r => r.path === '/dashboard')
  return dashboardRoute && dashboardRoute.children ? dashboardRoute.children : []
})
</script>

