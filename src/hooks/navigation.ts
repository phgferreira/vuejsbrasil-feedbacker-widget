import useStore from '@/hooks/store'
import { setCurrentComponent, setFeedbackType } from '@/store'
import SelectFeedbackType from '@/components/wizard/SelectFeedbackType.vue'
import WriteAFeedback from '@/components/wizard/WriteAFeedback.vue'
import WizardSuccess from '@/components/wizard/WizardSuccess.vue'
import WizardError from '@/components/wizard/WizardError.vue'

export interface Navigation {
  next(): void;
  back(): void;
  setErrorState(): void;
  setSuccessState(): void;
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

  function setErrorState (): void {
    setCurrentComponent(WizardError)
  }

  function setSuccessState (): void {
    setCurrentComponent(WizardSuccess)
  }

  return { next, back, setErrorState, setSuccessState }
}
