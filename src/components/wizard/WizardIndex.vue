<template>
  <component :is="store.currentComponent" @select-feedback-type="handleSelectFeedbackType" @next="next" />
</template>

<script setup lang="ts">
import store, { setFeedbackType } from '@/store'
import useNavigation from '@/hooks/navigation'

const { next } = useNavigation()

function handleSelectFeedbackType (type: string): void {
  setFeedbackType(type)
}

</script>
