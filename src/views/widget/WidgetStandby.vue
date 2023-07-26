<template>
  <div
    class="fixed z-50 bottom-0 right-0 mb-5 mr-5 bg-brand-main rounded-full py-3 px-5 flex items-center -shadow-xl cursor-pointer select-none animate__animated animate__fadeInUp animate__faster"
    @click="$emit('open-box')"
    data-test="widget-open-button"
  >
    <icon name="Chat" color="white" size="27" class="mr-3"/>
    <span class="font-black text-white text-xl">Deixe um feedback</span>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon/IconIndex.vue'

defineEmits(['open-box'])
</script>
