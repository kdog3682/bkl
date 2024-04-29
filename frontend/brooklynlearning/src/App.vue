<template>
  <div id="app">
    <BrooklynLearning>
      <router-view />
    </BrooklynLearning>
  </div>
</template>

<script>
import BrooklynLearning from '@/layouts/BrooklynLearning'

export default {
  name: 'App',
  components: { BrooklynLearning }
}
</script>
