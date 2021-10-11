<!-- Please remove this file from your project -->
<template>
  <div class="text-4xl">
    Hello, {{ authStore.name }}! {{ test }} {{ number }}
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()
const test = ref('5')
defineProps({
  number: {
    type: Number,
    default: 0,
  },
})
</script>

<style scoped></style>
