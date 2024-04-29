<template>
  <div>
    <h1>Clipboard Logger</h1>
    <textarea
      v-model="textAreaValue"
      placeholder="Paste text here..."
      @paste="handlePaste($event, logClipboardContent)"
      class="textarea"
    ></textarea>
    <pre>{{ clipboardContent }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'

function useClipboard(callback) {
  const handlePaste = (event) => {
    const clipboardData = event.clipboardData || window.clipboardData;
    const clipboardText = clipboardData.getData('text/plain');
    callback(clipboardText);
  }
  return handlePaste
}

const textAreaValue = ref('');
const clipboardContent = ref('');

const logClipboardContent = (content) => {
  console.log('Clipboard Content:', content);
  clipboardContent.value = content;
};

const {onPaste, clipboard} = useClipboard(logClipboardContent)
</script>

<style scoped>
.textarea {
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5;
  resize: vertical;
}
</style>
