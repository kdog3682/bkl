<!-- <template> -->
  <!-- <div id="app"> -->
    <!-- <router-link to="/">Home</router-link> -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- <router-link to="/dashboard">Dashboard</router-link> -->
    <!-- <router-view/> -->
  <!-- </div> -->
<!-- </template> -->

<!-- Testing Teleport -->
<!-- <script setup> -->
    <!-- import TeleportModal from "./components/examples/TeleportModal.vue" -->
<!-- </script> -->

<!-- <template> -->
  <!-- <div id="app"> -->
    <!-- <TeleportModal/> -->
  <!-- </div> -->
<!-- </template> -->


<script setup>

const base = 'div'
const layout = shallowRef(base)
const afterEach = (to) => {
    layout.value = layouts[to.meta.layout] || base
}

router.afterEach(afterEach)
provide('app:layout', layout)
    
</script>

<template>

<main>
  <component :is="layout">
    <router-view />
  </component>
</main>
</template>
