interface Offset {
  top: number | 'auto'
  left: number | 'auto'
}

export default {
  getHeight(el: HTMLElement | null): number {
    if (el) {
      let height = el.offsetHeight
      const style = getComputedStyle(el)

      height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth)

      return height
    }

    return 0
  },

  getWidth(el: HTMLElement | null): number {
    if (el) {
      let width = el.offsetWidth
      const style = getComputedStyle(el)

      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth)

      return width
    }

    return 0
  },

  getOuterWidth(el: HTMLElement | null, margin?: boolean): number {
    if (el) {
      let width = el.offsetWidth

      if (margin) {
        const style = getComputedStyle(el)

        width += parseFloat(style.marginLeft) + parseFloat(style.marginRight)
      }

      return width
    }

    return 0
  },

  getOuterHeight(el: HTMLElement | null, margin?: boolean): number {
    if (el) {
      let height = el.offsetHeight

      if (margin) {
        const style = getComputedStyle(el)

        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom)
      }

      return height
    }

    return 0
  },

  addClass(el: HTMLElement | null, className: string | null) {
    if (el && className) {
      if (el.classList)
        el.classList.add(className)
      else el.className += ` ${className}`
    }
  },

  removeClass(el: HTMLElement | null, className: string) {
    if (el && className) {
      if (el.classList)
        el.classList.remove(className)
      else el.className = el.className.replace(new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'), ' ')
    }
  },

  hasClass(el: HTMLElement | null, className: string): boolean {
    if (el) {
      if (el.classList)
        return el.classList.contains(className)
      else return new RegExp(`(^| )${className}( |$)`, 'gi').test(el.className)
    }

    return false
  },

  getOffset(el: HTMLElement | null | null): Offset {
    if (el) {
      const rect = el.getBoundingClientRect()

      return {
        top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
        left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0),
      }
    }

    return {
      top: 'auto',
      left: 'auto',
    }
  },
}
