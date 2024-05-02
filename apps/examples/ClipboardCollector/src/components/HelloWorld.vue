<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(10)
</script>

<template lang= "pug">
    ul
        li id = abc foobar = asdf
            foobar: 
div
    ul( id='navigation' )
        li(
            id = 'abc', 
            foobar = 'asdf'
        )
            button.asdf.asdf(@click = 'count++') {{count}}
            button.foobar.asdf(v-if = 'count < 13') {{count}}
</template>

<style lang = 'stylus'>

    .asdf
        color: blue
        background: red

    li#abc
        color: green
        width: 100px
        background: yellow
</style>
