import { describe, expect, test } from 'vitest'

import { deepEquals } from './ObjectUtils'

describe('deepEquals', () => {
  test('returns true for equal values', () => {
    expect(deepEquals(1, 1)).toBe(true)
    expect(deepEquals('foo', 'foo')).toBe(true)
    expect(deepEquals([1, 2, 3], [1, 2, 3])).toBe(true)
    expect(deepEquals({ x: 'foo', y: 'bar' }, { x: 'foo', y: 'bar' })).toBe(true)
  })

  test('returns false for unequal values', () => {
    expect(deepEquals(1, 2)).toBe(false)
    expect(deepEquals('foo', 'bar')).toBe(false)
    expect(deepEquals([1, 2, 3], [3, 2, 1])).toBe(false)
    // expect(deepEquals({ x: 'foo', y: 'bar' }, { y: 'bar', x: 'foo' })).toBe(false)
  })
})
