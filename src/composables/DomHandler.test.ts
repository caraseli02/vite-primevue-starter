import { describe, expect, test } from 'vitest'
import DomHandler from './DomHandler'
describe('DomHandler Height and Width', () => {
  test('should return 0 if el is null', () => {
    expect(DomHandler.getHeight(null)).toEqual(0)
    expect(DomHandler.getWidth(null)).toEqual(0)
  })

  test('should return the correct height for an element with no padding or border', () => {
    const el = document.createElement('div')
    el.style.height = '100px'
    el.style.width = '100px'
    // expect(DomHandler.getHeight(el)).toEqual(100)
    // expect(DomHandler.getWidth(el)).toEqual(100)
    expect(DomHandler.getOuterWidth(el, false)).toEqual(100)
    expect(DomHandler.getOuterWidth(el, true)).toEqual(100)
  })

  test('should return the correct height for an element with padding and marging', () => {
    const el = document.createElement('div')
    el.style.height = '100px'
    el.style.width = '100px'
    el.style.paddingTop = '10px'
    el.style.paddingBottom = '10px'
    el.style.marginLeft = '10px'
    el.style.marginRight = '10px'
    expect(DomHandler.getOuterWidth(el, false)).toEqual(100)
    expect(DomHandler.getOuterHeight(el, false)).toEqual(100)
    expect(DomHandler.getOuterWidth(el, true)).toEqual(120)
    expect(DomHandler.getOuterHeight(el, true)).toEqual(120)
    expect(DomHandler.getHeight(el)).toEqual(80)
    expect(DomHandler.getWidth(el)).toEqual(80)
  })

  test('should return the correct height for an element with a border', () => {
    const el = document.createElement('div')
    el.style.height = '100px'
    el.style.borderTopWidth = '5px'
    el.style.borderBottomWidth = '5px'
    expect(DomHandler.getHeight(el)).toEqual(90)
    expect(DomHandler.getWidth(el)).toEqual(90)
  })

  test('should return the correct height for an element with padding and a border', () => {
    const el = document.createElement('div')
    el.style.height = '100px'
    el.style.paddingTop = '10px'
    el.style.paddingBottom = '10px'
    el.style.borderTopWidth = '5px'
    el.style.borderBottomWidth = '5px'
    expect(DomHandler.getHeight(el)).toEqual(80)
    expect(DomHandler.getWidth(el)).toEqual(80)
  })
})

describe('DomHandler.addClass', () => {
  test('should not modify the element or throw an error if element is null', () => {
    expect(() => DomHandler.addClass(null, 'class')).not.toThrow()
  })

  test('should not modify the element or throw an error if className is null', () => {
    const el = document.createElement('div')
    expect(() => DomHandler.addClass(el, null)).not.toThrow()
  })

  test('should add the class to the element if test has no classes', () => {
    const el = document.createElement('div')
    DomHandler.addClass(el, 'class')
    expect(el.classList.contains('class')).toBe(true)
  })

  test('should add the class to the element without removing existing classes', () => {
    const el = document.createElement('div')
    el.classList.add('existing-class')
    DomHandler.addClass(el, 'class')
    expect(el.classList.contains('existing-class')).toBe(true)
    expect(el.classList.contains('class')).toBe(true)
  })

  test('should not modify the element or throw an error if className is an invalid class name', () => {
    const el = document.createElement('div')
    expect(() => DomHandler.addClass(el, 'invalid class')).not.toThrow()
  })
})
