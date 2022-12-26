import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Button from './Button.vue'

describe('Button.vue', () => {
  test('has default prop values', () => {
    const wrapper = mount(Button)
    expect(wrapper.props().iconPos).toBe('left')
    expect(wrapper.props().loading).toBe(false)
    expect(wrapper.props().loadingIcon).toBe('pi pi-spinner pi-spin')
  })

  test('applies p-button-icon-only class when icon prop is present and label prop is not', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'pi pi-check',
      },
    })
    expect(wrapper.classes()).toContain('p-button-icon-only')
  })

  test('applies p-button-vertical class when iconPos prop is top or bottom and label prop is present', () => {
    const wrapper = mount(Button, {
      props: {
        iconPos: 'top',
        label: 'Button',
      },
    })
    expect(wrapper.classes()).toContain('p-button-vertical')
  })

  test('applies p-disabled class when disabled attribute is present or loading prop is true', () => {
    let wrapper = mount(Button, {
      attrs: {
        disabled: true,
      },
    })
    expect(wrapper.classes()).toContain('p-disabled')

    wrapper = mount(Button, {
      props: {
        loading: true,
      },
    })
    expect(wrapper.classes()).toContain('p-disabled')
  })

  test('applies p-button-loading class when loading prop is true', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
    })
    expect(wrapper.classes()).toContain('p-button-loading')
  })

  test('applies p-button-loading-label-only class when loading prop is true and icon prop is not present, but label prop is', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
        label: 'Button',
      },
    })
    expect(wrapper.classes()).toContain('p-button-loading-label-only')
  })
})
