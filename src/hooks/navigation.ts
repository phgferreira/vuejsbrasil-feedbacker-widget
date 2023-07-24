import useStore from '@/hooks/store'
import { setCurrentComponent, setFeedbackType } from '@/store'
import SelectFeedbackType from '@/components/wizard/SelectFeedbackType.vue'
import WriteAFeedback from '@/components/wizard/WriteAFeedback.vue'

export interface Navigation {
  next(): void;
  back(): void;
}

export default function useNavigation (): Navigation {
  const store = useStore()
  function next (): void {
    if (store.currentComponent.name === SelectFeedbackType.name) setCurrentComponent(WriteAFeedback)
  }
  function back (): void {
    if (store.currentComponent.name === WriteAFeedback.name) {
      setCurrentComponent(SelectFeedbackType)
      setFeedbackType('')
    }
  }
  return { next, back }
}