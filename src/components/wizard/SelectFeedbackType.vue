<template>
  <div class="flex justify-between w-full my-5">
    <button @click="handleSelect('ISSUE')" class="botao">
      <div class="w-12">
        <img src="@/assets/img/issue.png" alt="ícone de exclamação para relatar problema" class="w-full">
      </div>
      <p class="font-medium mt-1 text-gray-800">Problema</p>

    </button>
    <button @click="handleSelect('IDEA')" class="botao">
      <div class="w-12">
        <img src="@/assets/img/lamp.png" alt="ícone de lâmpada para relatar ideia" class="w-full">
      </div>
      <p class="font-medium mt-1 text-gray-800">Ideia</p>
    </button>

    <button @click="handleSelect('OTHER')" class="botao">
      <div class="w-12">
        <img src="@/assets/img/fire.png" alt="ícone de fogo para relatar outros" class="w-full">
      </div>
      <p class="font-medium mt-1 text-gray-800">Outros</p>
    </button>
  </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['select-feedback-type', 'next'])
function handleSelect (type: string): void {
  emit('select-feedback-type', type)
  emit('next')
}
</script>

<style scoped>
.botao {
  @apply rounded-xl hover:bg-gray-100 bg-brand-gray flex flex-col justify-center items-center p-5 w-28 cursor-pointer focus:outline-none
}
</style>
