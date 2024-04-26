<script setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <button @click="showModal = true">Open Modal</button>
  
  <Teleport to="body">
    <div v-if="showModal" class="modal">
      <p>This is a modal!</p>
      <button @click="showModal = false">Close</button>
    </div>
  </Teleport>
</template>

<style>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid black;
}
</style>

