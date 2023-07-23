<template>
  <div class="fixed bottom-0 right-0">
    <teleport to="body">
      <h1>{{ state.component }}</h1>
      <component :is="state.component" @open-box="handleOpenBox" @close-box="handleCloseBox" />
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, reactive } from 'vue'
import WidgetStandby from '@/views/widget/WidgetStandby.vue'
import WidgetBox from '@/views/widget/WidgetBox.vue'

defineComponent({
  components: { WidgetStandby, WidgetBox }
})

const state = reactive({
  component: WidgetStandby
})

function handleOpenBox (): void {
  state.component = WidgetBox
}

function handleCloseBox (): void {
  state.component = WidgetStandby
}
</script>
