import { reactive, readonly } from 'vue'
import SelectFeedbackType from '@/components/wizard/SelectFeedbackType.vue'

export type StoreState = {
  currentComponent: any,
  message: string,
  feedbackType: string,
  fingerprint: string,
  apiKey: string,
  currentPage: string
}

const initialState: StoreState = {
  currentComponent: SelectFeedbackType,
  message: '',
  feedbackType: '',
  fingerprint: '',
  apiKey: '',
  currentPage: ''
}

const state = reactive<StoreState>({ ...initialState })

export function setCurrentComponent (component: any): void {
  state.currentComponent = component
}

export function setMessage (message: string): void {
  state.message = message
}

export function setFeedbackType (type: string): void {
  state.feedbackType = type
}

export function setCurrentPage (page: string): void {
  state.currentPage = page
}

export function setApiKey (apiKey: string): void {
  state.apiKey = apiKey
}

export function setFingerprint (fingerprint: string): void {
  state.fingerprint = fingerprint
}

export function resetStore (): void {
  setCurrentComponent(initialState.currentComponent)
  setMessage(initialState.message)
  setFeedbackType(initialState.feedbackType)
  setCurrentPage(initialState.currentPage)
  setApiKey(initialState.apiKey)
  setFingerprint(initialState.fingerprint)
}

export default readonly(state)
