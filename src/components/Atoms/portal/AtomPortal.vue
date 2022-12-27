<script setup lang="ts">
import { DomHandler } from 'primevue/utils'

interface Props {
  appendTo: string
  disabled: boolean
}

const props = withDefaults(defineProps<Props>(), {
  appendTo: 'body',
  disabled: false,
})

const mounted = ref(false)
const inline = computed(() => props.disabled || props.appendTo === 'self')

onMounted(() => {
  mounted.value = DomHandler.isClient()
})
</script>

<template>
  <template v-if="inline">
    <slot />
  </template>
  <template v-else-if="mounted">
    <Teleport :to="appendTo">
      <slot />
    </Teleport>
  </template>
</template>
