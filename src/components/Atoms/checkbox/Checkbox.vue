<script lang="ts" setup>
import { ObjectUtils } from 'primevue/utils';
import type { InputHTMLAttributes, StyleValue } from 'vue';

export interface Props {
  value?: unknown;
  modelValue?: boolean | unknown[];
  name?: string;
  binary?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  tabindex?: number;
  trueValue?: any;
  falseValue?: any;
  inputId?: string;
  inputClass?: unknown;
  inputStyle?: StyleValue;
  inputProps?: InputHTMLAttributes;
  ariaLabelledby?: string;
  ariaLabel?: string;
}
const props = withDefaults(defineProps<Props>(), {
  trueValue: true,
  falseValue: false,
  disabled: false,
  readonly: false,
  required: false,
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
  (e: 'update:modelValue', value: unknown): void;
  (e: 'change', value: unknown): void;
  (e: 'input', value: unknown): void;
  (e: 'focus', value: unknown): void;
  (e: 'blur', value: unknown): void;
}>();

const focused = ref(false);
const inputRef = ref<HTMLInputElement | null>(null);

const checked = computed(() => {
  if (props.binary) return props.modelValue === props.trueValue;
  else return Array.isArray(props.modelValue) && (props.modelValue as unknown[]).includes(props.value as unknown);
});

const containerClass = computed(() => {
  return [
    'p-checkbox p-component',
    {
      'p-checkbox-checked': checked.value,
      'p-checkbox-disabled': props.disabled,
      'p-checkbox-focused': focused.value,
    },
  ];
});

function onClick(event: MouseEvent) {
  if (!props.disabled) {
    let newModelValue: unknown;

    if (props.binary) {
      newModelValue = checked.value ? props.falseValue : props.trueValue;
    } else {
      if (checked.value) {
        newModelValue = (props.modelValue as unknown[]).filter(
          (val: unknown) => !ObjectUtils.deepEquals(val, props.value)
        );
      } else {
        newModelValue = props.modelValue ? [...(props.modelValue as unknown[]), props.value] : [props.value];
      }
    }

    emit('click', event);
    emit('update:modelValue', newModelValue);
    emit('change', event);
    emit('input', newModelValue);
    if (inputRef.value) inputRef.value.focus();
  }
}
function onFocus(event: boolean) {
  focused.value = true;
  emit('focus', event);
}
function onBlur(event: boolean) {
  focused.value = false;
  emit('blur', event);
}
</script>

<template>
  <div :class="containerClass" @click="onClick($event)">
    <div class="p-hidden-accessible">
      <input
        :id="inputId"
        ref="inputRef"
        type="checkbox"
        :value="value"
        :class="inputClass"
        :style="inputStyle"
        :name="name"
        :checked="checked"
        :tabindex="tabindex"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :aria-labelledby="ariaLabelledby"
        :aria-label="ariaLabel"
        v-bind="inputProps"
        @focus="onFocus($event)"
        @blur="onBlur($event)"
      />
    </div>
    <div
      ref="box"
      class="p-checkbox-box"
      :class="[{ 'p-highlight': checked, 'p-disabled': disabled, 'p-focus': focused }]"
    >
      <span class="p-checkbox-icon" :class="[{ 'pi pi-check': checked }]" />
    </div>
  </div>
</template>

<style scoped>
.p-checkbox {
  display: inline-flex;
  cursor: pointer;
  user-select: none;
  vertical-align: bottom;
  position: relative;
}

.p-checkbox.p-checkbox-disabled {
  cursor: default;
}

.p-checkbox-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
