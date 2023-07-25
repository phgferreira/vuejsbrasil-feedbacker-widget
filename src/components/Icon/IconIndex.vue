<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from './IconLoading.vue'
import Copy from '@/components/Icon/IconCopy.vue'
import ChevronDown from '@/components/Icon/IconChevronDown.vue'
import Chat from '@/components/Icon/IconChat.vue'
import Close from '@/components/Icon/IconTime.vue'
import Left from '@/components/Icon/IconLeft.vue'
import Check from '@/components/Icon/IconCheck.vue'
import Atention from '@/components/Icon/IconAtention.vue'

export default {
  components: { Loading, Copy, ChevronDown, Chat, Close, Left, Check, Atention },
  props: {
    name: { type: String, required: true }
  }
}

</script>
