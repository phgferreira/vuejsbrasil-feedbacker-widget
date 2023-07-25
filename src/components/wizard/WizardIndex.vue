<template>
  <component :is="store.currentComponent" @select-feedback-type="handleSelectFeedbackType" @next="next" />
</template>

<script setup lang="ts">
import store, { setFeedbackType } from '@/store'
import useNavigation from '@/hooks/navigation'
import SelectFeedbackType from '@/components/wizard/SelectFeedbackType.vue'
import { defineComponent } from 'vue'
import WriteAFeedback from '@/components/wizard/WriteAFeedback.vue'
import WizardSuccess from '@/components/wizard/WizardSuccess.vue'
import WizardError from '@/components/wizard/WizardError.vue'

const { next } = useNavigation()

defineComponent({
  components: { SelectFeedbackType, WriteAFeedback, WizardSuccess, WizardError }
})

function handleSelectFeedbackType (type: string): void {
  setFeedbackType(type)
}

</script>
