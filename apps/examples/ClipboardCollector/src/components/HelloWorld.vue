<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(10)
</script>

<template lang="pug">
    ul(style = 'background: red; color: blue')
        li(
            data-id = 123
        ) howdy guys
</template>


<style lang = 'stylus'>

    .asdf
        color: blue
        background: red

    li#abc
        color: green
        width: 100px
        background: yellow

    [data-id = '123']
        background: yellow
        background: green 
        
</style>
