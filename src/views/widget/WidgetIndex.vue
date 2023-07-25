<template>
  <div class="fixed bottom-0 right-0">
    <teleport to="body">
      <component :is="state.component" @open-box="handleOpenBox" @close-box="handleCloseBox" />
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import WidgetStandby from '@/views/widget/WidgetStandby.vue'
import WidgetBox from '@/views/widget/WidgetBox.vue'
import useIFrameControl from '@/hooks/iframe'

onMounted(() => {
  iframe.updateCoreValuesOnStore()
})

defineComponent({
  components: { WidgetStandby, WidgetBox }
})

const iframe = useIFrameControl()

const state = reactive({
  component: WidgetStandby
})

function handleOpenBox (): void {
  iframe.notifyOpen()
  state.component = WidgetBox
}

function handleCloseBox (): void {
  iframe.notifyClose()
  state.component = WidgetStandby
}
</script>
