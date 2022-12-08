<script setup lang="ts">
import { computed, useAttrs } from 'vue'

export interface Props {
  classes?: string
  label?: string
  icon?: string
  iconPos?: 'left' | 'right' | 'top' | 'bottom' | undefined
  iconClass?: string
  badge?: string
  badgeClass?: string
  loading?: boolean
  loadingIcon?: string
}

const props = withDefaults(defineProps<Props>(), {
  iconPos: 'left',
  loading: false,
  loadingIcon: 'pi pi-spinner pi-spin',
})

const attrs = useAttrs()

const disabled = computed(() => (attrs.disabled) as boolean || props.loading)

const buttonClass = computed(() => {
  return {
    'p-button p-component': true,
    'p-button-icon-only': props.icon && !props.label,
    'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
    'p-disabled': attrs.disabled || props.loading,
    'p-button-loading': props.loading,
    'p-button-loading-label-only': props.loading && !props.icon && props.label,
  }
})

const iconStyleClass = computed(() => {
  return [
    props.loading ? `p-button-loading-icon ${props.loadingIcon}` : props.icon,
    'p-button-icon',
    props.iconClass,
    {
      'p-button-icon-left': props.iconPos === 'left' && props.label,
      'p-button-icon-right': props.iconPos === 'right' && props.label,
      'p-button-icon-top': props.iconPos === 'top' && props.label,
      'p-button-icon-bottom': props.iconPos === 'bottom' && props.label,
    },
  ]
})
const badgeStyleClass = computed(() => {
  return [
    'p-badge p-component',
    props.badgeClass,
    {
      'p-badge-no-gutter': props.badge && String(props.badge).length === 1,
    },
  ]
})
</script>

<template>
  <button :class="buttonClass" type="button"  :disabled="disabled">
    <slot>
      <span v-if="loading && !icon" :class="iconStyleClass" />
      <span v-if="icon" :class="iconStyleClass" />
      <span class="p-button-label">{{ label || '&nbsp;' }}</span>
      <span v-if="badge" :class="badgeStyleClass">{{ badge }}</span>
    </slot>
  </button>
</template>
