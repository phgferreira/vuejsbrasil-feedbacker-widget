<template>
  <div class="box animate__animated animate__fadeInUp animate__faster">
    <div class="relative w-full flex" :class="{'justify-between': canShowAdditionalControlAndInfo, 'justify-end': !canShowAdditionalControlAndInfo}">
      <button v-if="canShowAdditionalControlAndInfo" class="text-xl text-gray-800 focus:outline-none" :disabled="canGoBack" :class="{ 'invisible': canGoBack }" @click="() => ({})">
        <icon name="left" :color="colors.gray['800']" />
      </button>

      <p v-if="canShowAdditionalControlAndInfo" class="text-xl font-black text-center text-brand-main">
        {{ label }}
      </p>

      <button @click="() => $emit('close-box')" class="text-xl text-gray-800 focus:outline-none">
        <icon name="close" size="14" :color="colors.gray['800']" />
      </button>
    </div>

    Wizard

    <div v-if="canShowAdditionalControlAndInfo" class="text-gray-800 text-sm flex">
      <icon name="chat" class="mr-1" :color="brand.graydark" />
      widget by <span class="ml-1 font-bold">feedbacker</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import useStore from '@/hooks/store'
import { computed, defineComponent } from 'vue'
import { brand } from '../../../palette.js'
import colors from 'tailwindcss/colors'
import Icon from '@/components/Icon/IconIndex.vue'
import Widget from '@/views/playground/PlaygroundIndex.vue'

defineEmits(['close-box'])
defineComponent({
  components: { Icon }
})

const store = useStore()

const label = computed<string>(() => {
  if (store.feedbackType === 'ISSUE') return 'Reporte um problema'
  if (store.feedbackType === 'IDEA') return 'Nos fale a sua ideia'
  if (store.feedbackType === 'OTHER') return 'Abre sua mente'
  return 'O que você tem em mente?'
})

const canGoBack = computed<boolean>(() => {
  return store.currentComponent === 'SelectFeedbackType'
})

const canShowAdditionalControlAndInfo = computed(() => {
  return store.currentComponent !== 'Success' && store.currentComponent !== 'Error'
})

</script>

<style scoped lang="postcss">
.box {
  @apply fixed z-50 bottom-0 right-0 mb-5 mr-5 bg-white rounded-xl py-5 px-5 flex flex-col items-center shadow-xl select-none;
  width: 400px;
}
</style>
