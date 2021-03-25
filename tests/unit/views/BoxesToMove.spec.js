// src/components/HelloWorld.spec.js
import { mount } from '@vue/test-utils'
// @ts-ignore
import BoxesToMove from '@/views/BoxesToMove.vue'
import Boxes from '@/data/boxes.json'

describe('Boxes To Move', () => {
  it('should display header text', () => {
    const wrapper = mount(BoxesToMove)

    expect(wrapper.find('h1').text()).toEqual('Boxes to Move')
  })

  it('should display a list of boxes', () => {
    const wrapper = mount(BoxesToMove)
    expect(wrapper.findAll('[data-type="box"]')).toHaveLength(Boxes.length)
  })

  describe('for each box', () => {

    let box, wrapper, tr

    beforeEach(() => {
      box = Boxes[0]
      wrapper = mount(BoxesToMove)
      tr = wrapper.findAll('[data-type="box"]')[0]
    })

    it('should have an id', () => {
      expect(tr.find('[data-type="id"]').text()).toEqual(box.id.toString())
    })

    it('should have a name', () => {
      expect(tr.find('[data-type="name"]').text()).toEqual(box.name)
    })

    it('should have a barcode', () => {
      expect(tr.find('[data-type="barcode"]').text()).toEqual(box.barcode)
    })
  })
})
