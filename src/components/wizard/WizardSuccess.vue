<template>
  <div class="container">
    <icon name="check" :color="brand.success" size="70" />
    <p>Obrigado! Recebemos o seu feedback.</p>
    <div class="button-container">
      <button @click="goBack">Envie mais feedbacks</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon/IconIndex.vue'
import { brand } from '../../../palette.js'
import { resetStore } from '@/store'

function goBack (): void {
  resetStore()
}
</script>

<style scoped>
.container {
    @apply flex flex-col items-center justify-between w-full my-5
}
p {
  @apply text-xl font-black text-center w-full mt-2
}
.button-container {
  @apply flex justify-center items-center w-full mt-2
}
button {
  @apply rounded-full font-regular text-sm flex flex-col justify-center bg-brand-gray items-center py-2 px-5 cursor-pointer focus:outline-none
}
</style>
