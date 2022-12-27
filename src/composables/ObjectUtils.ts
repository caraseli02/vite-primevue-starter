export function deepEquals<T, U>(a: T, b: U): boolean {
  if (Object.is(a, b))
    return true

  if (typeof a == 'object' && typeof b == 'object' && a && b) {
    const arrA = Array.isArray(a)
    const arrB = Array.isArray(b)

    if (arrA && arrB) {
      if (a.length !== b.length)
        return false
      for (const [i, x] of a.entries()) {
        if (!deepEquals(x, b[i]))
          return false
      }
      return true
    }

    if (arrA !== arrB)
      return false

    const keysA = Object.getOwnPropertyNames(a).sort()
    const keysB = Object.getOwnPropertyNames(b).sort()

    if (keysA.length !== keysB.length)
      return false
    for (const key of keysA) {
      if (!deepEquals((a as { [key: string]: T })[key], (b as { [key: string]: U })[key]))
        return false
    }
    return true
  }

  return Object.is(a, b)
}

