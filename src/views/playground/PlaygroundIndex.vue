<template>
  <div class="w-full h-3/4 flex flex-col justify-center items-center bg-brand-main">
    <h1 class="text-6xl font-black text-brand-gray">Playground</h1>
    <p class="text-2xl mt-3 font-regular text-brand-gray">Este é o Playground, use para testar o Widget.</p>
  </div>
  <div class="w-full h-3/4 flex flex-col justify-center items-center bg-brand-gray">
    <h1 class="text-6xl font-black text-brand-gray-dark">Coloque seu Widget bem aqui</h1>
    <widget-index></widget-index>
  </div>
</template>

<script setup lang="ts">

import WidgetIndex from '@/views/widget/WidgetIndex.vue'
</script>
