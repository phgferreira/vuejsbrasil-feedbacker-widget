<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from './IconLoading.vue'
import Copy from '@/components/Icon/IconCopy.vue'
import ChevronDown from '@/components/Icon/IconChevronDown.vue'
import Chat from '@/components/Icon/IconChat.vue'

export default {
  components: { Loading, Copy, ChevronDown, Chat },
  props: {
    name: { type: String, required: true }
  }
}

</script>
