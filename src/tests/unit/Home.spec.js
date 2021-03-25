// src/components/Home.spec.js
import { mount } from '@vue/test-utils'
// @ts-ignore
import Home from '@/components/Home.vue'

describe('Home Page', () => {
  it('should display header text', () => {
    const msg = 'Hello Vue 3'
    const wrapper = mount(Home, { props: { msg } })

    expect(wrapper.find('h1').text()).toEqual(msg)
  })
})