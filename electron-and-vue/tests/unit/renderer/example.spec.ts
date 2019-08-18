import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/renderer/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('tests mount', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  it('matches snapshot', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.element).toMatchSnapshot()
  })
})
