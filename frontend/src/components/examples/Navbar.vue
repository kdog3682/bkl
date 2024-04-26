<template>
  <Teleport to="#modal">
    <Signup />
  </Teleport>
</template>

<script>
import { defineComponent } from 'vue'
import Signup from './Signup.vue'

export default defineComponent({
  components: {
    Signup
  }
})
</script>
