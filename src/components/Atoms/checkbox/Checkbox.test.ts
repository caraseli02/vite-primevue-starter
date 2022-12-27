import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Checkbox from './Checkbox.vue'

describe('Checkbox.vue', () => {
  test('should render the checkbox element', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.find('.p-checkbox.p-component').exists()).toBe(true)
  })

  test('should not apply the p-checkbox-checked class when modelValue prop is false', () => {
    const wrapper = mount(Checkbox, {
      props: {
        binary: true,
        modelValue: false,
      },
    })
    expect(wrapper.classes()).not.toContain('p-checkbox-checked')
  })

  test('should apply the p-checkbox-checked class when modelValue prop is true', () => {
    const wrapper = mount(Checkbox, {
      props: {
        binary: true,
        modelValue: true,
      },
    })
    expect(wrapper.classes()).toContain('p-checkbox-checked')
  })

  test('should apply the p-checkbox-disabled class when disabled prop is true', () => {
    const wrapper = mount(Checkbox, {
      props: {
        disabled: true,
      },
    })
    expect(wrapper.classes()).toContain('p-checkbox-disabled')
  })

  test('should apply the p-checkbox-focused class when input element is focused', async () => {
    const wrapper = mount(Checkbox)
    await wrapper.find('input').trigger('focus')
    expect(wrapper.classes()).toContain('p-checkbox-focused')
  })

  test('should not apply the p-checkbox-focused class when input element is blurred', async () => {
    const wrapper = mount(Checkbox)
    await wrapper.find('input').trigger('focus')
    await wrapper.find('input').trigger('blur')
    expect(wrapper.classes()).not.toContain('p-checkbox-focused')
  })

  test('should emit a "click" & "update:modelValue" events when the checkbox is clicked', async () => {
    const wrapper = mount(Checkbox)
    await wrapper.find('.p-checkbox.p-component').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })
})
