import { shallowMount } from '@vue/test-utils'
import PlaygroundIndex from '../../../../src/views/playground/PlaygroundIndex.vue'

describe('<Playground />', () => {
  it('deve renderizar o playground', () => {
    const wrapper = shallowMount(PlaygroundIndex)
    expect(wrapper).toMatchSnapshot()
  })
})
