import DomHandler from '@/composables/DomHandler'

let timeout: unknown

function bindEvents(el: HTMLElement) {
  el.addEventListener('mousedown', onMouseDown)
}

function unbindEvents(el: HTMLElement) {
  el.removeEventListener('mousedown', onMouseDown)
}

function create(el: HTMLElement) {
  const ink = document.createElement('span')

  ink.className = 'p-ink'
  ink.setAttribute('role', 'presentation')
  ink.setAttribute('aria-hidden', 'true')
  el.appendChild(ink)

  ink.addEventListener('animationend', onAnimationEnd)
}

function remove(el: HTMLElement) {
  const ink = getInk(el)

  if (ink) {
    unbindEvents(el)
    ink.removeEventListener('animationend', onAnimationEnd)
    ink.remove()
  }
}

function onMouseDown(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement
  const ink = getInk(target)

  if (!ink || getComputedStyle(ink, null).display === 'none')
    return

  DomHandler.removeClass(ink, 'p-ink-active')

  if (!DomHandler.getHeight(ink) && !DomHandler.getWidth(ink)) {
    const d = Math.max(
      DomHandler.getOuterWidth(target),
      DomHandler.getOuterHeight(target),
    )

    ink.style.height = `${d}px`
    ink.style.width = `${d}px`
  }

  const offset = DomHandler.getOffset(target)
  const x
    = event.pageX - Number(offset.left) + document.body.scrollTop - DomHandler.getWidth(ink) / 2
  const y
    = event.pageY - Number(offset.top) + document.body.scrollLeft - DomHandler.getHeight(ink) / 2

  ink.style.top = `${y}px`
  ink.style.left = `${x}px`
  DomHandler.addClass(ink, 'p-ink-active')

  timeout = setTimeout(() => {
    if (ink)
      DomHandler.removeClass(ink, 'p-ink-active')
  }, 401)
}

function onAnimationEnd(event: Event) {
  if (timeout)
    clearTimeout(timeout as number)

  const target = event.currentTarget as HTMLElement
  DomHandler.removeClass(target, 'p-ink-active')
}

function getInk(el: HTMLElement): HTMLElement | null {
  for (let i = 0; i < el.children.length; i++) {
    if (
      typeof el.children[i].className === 'string'
      && el.children[i].className.includes('p-ink')
    )
      return el.children[i] as HTMLElement
  }

  return null
}

const Ripple: {
  mounted: (el: HTMLElement, binding: any) => void
  unmounted: (el: HTMLElement) => void
} = {
  mounted(el, binding) {
    if (binding.instance.$primevue && binding.instance.$primevue.config && binding.instance.$primevue.config.ripple) {
      create(el)
      bindEvents(el)
    }
  },
  unmounted(el) {
    remove(el)
  },
}

export default Ripple
