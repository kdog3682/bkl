<!-- WebsiteLogo.vue -->
<template>
  <div class="logo">
    <img :src="logo" />
    <span>{{ name }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  logo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}
</style>
