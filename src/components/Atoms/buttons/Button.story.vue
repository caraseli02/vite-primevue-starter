<script setup lang="ts">
import { computed, ref } from 'vue'
import Button from './Button.vue'

const loading = ref([true, false, false])
const load = (index: number) => {
  loading.value[index] = true
  setTimeout(() => (loading.value[index] = false), 1000)
}
const icon = ref('check')
const iconList = ref(['check', 'bookmark', 'search', 'bell', 'heart', 'times', 'filter'])
const iconPosition = ref<'left' | 'right' | 'top' | 'bottom'>('right')
const isDissabled = ref(true)
const severities = ref('primary')
const severitiesLabel = computed(() => severities.value)
const severitiesOptions = ref(['secondary', 'success', 'info', 'warning', 'help', 'danger'])
const badge = ref('8')
const size = ref('')
const templateSelected = ref('google')
const templateOptions = ref(['google', 'youtube', 'vimeo', 'facebook', 'twitter', 'slack', 'amazon', 'discord'])
</script>

<template>
  <Story title="Buttons" :layout="{ type: 'grid', width: '400px' }">
    <Variant title="Basic">
      <Button class="m-2" label="Submit" />
      <Button class="m-2" label="Disabled" :disabled="isDissabled" />
      <Button label="Link" class="p-button-link m-2" />
      <template #controls>
        <HstCheckbox v-model="isDissabled" title="Is Disabled" />
      </template>
    </Variant>
    <Variant title="Icons">
      <Button class="m-2" :icon="`pi pi-${icon}`" aria-label="Submit" />
      <Button class="m-2" label="Submit" :icon="`pi pi-${icon}`" />
      <Button class="m-2" label="Icon Pos" :icon="`pi pi-${icon}`" :icon-pos="iconPosition" />
      <template #controls>
        <HstSelect v-model="icon" title="Icon" :options="iconList" />
        <HstSelect v-model="iconPosition" title="Icon" :options="['left', 'right', 'top', 'bottom']" />
      </template>
    </Variant>
    <Variant title="Severities">
      <Button :class="`m-2 p-button-${severities} capitalize`" :label="severitiesLabel" />
      <template #controls>
        <HstSelect v-model="severities" title="Severities" :options="severitiesOptions" />
      </template>
    </Variant>
    <Variant title="Raised Buttons">
      <Button :class="`m-2 p-button-raised p-button-${severities} capitalize`" :label="severitiesLabel" />
      <template #controls>
        <HstSelect v-model="severities" title="Severities" :options="severitiesOptions" />
      </template>
    </Variant>
    <Variant title="Rounded Buttons">
      <Button :class="`m-2 p-button-rounded p-button-${severities} capitalize`" :label="severitiesLabel" />
      <template #controls>
        <HstSelect v-model="severities" title="Severities" :options="severitiesOptions" />
      </template>
    </Variant>
    <Variant title="Text Buttons">
      <Button :class="`m-2 p-button-text p-button-${severities} capitalize`" :label="severitiesLabel" />
      <template #controls>
        <HstSelect v-model="severities" title="Severities" :options="severitiesOptions" />
      </template>
    </Variant>
    <Variant title="Raised Text Buttons">
      <Button :class="`m-2 p-button-raised p-button-text p-button-${severities} capitalize`" :label="severitiesLabel" />
      <template #controls>
        <HstSelect v-model="severities" title="Severities" :options="severitiesOptions" />
      </template>
    </Variant>
    <Variant title="Outlined Buttons">
      <Button :class="`m-2 p-button-outlined p-button-${severities} capitalize`" :label="severitiesLabel" />
      <template #controls>
        <HstSelect v-model="severities" title="Severities" :options="severitiesOptions" />
      </template>
    </Variant>
    <Variant title="Rounded Icon Buttons">
      <Button :icon="`pi pi-${icon}`" :class="`m-2 p-button-rounded p-button-${severities}`" :aria-label="icon" />
      <template #controls>
        <HstSelect v-model="icon" title="Icon" :options="iconList" />
        <HstSelect v-model="severities" title="Severities" :options="severitiesOptions" />
      </template>
    </Variant>
    <Variant title="Rounded Text Icon Buttons">
      <Button :icon="`pi pi-${icon}`" :class="`m-2 p-button-rounded p-button-text p-button-${severities}`" :aria-label="icon" />
      <template #controls>
        <HstSelect v-model="icon" title="Icon" :options="iconList" />
        <HstSelect v-model="severities" title="Severities" :options="severitiesOptions" />
      </template>
    </Variant>
    <Variant title="Rounded and Outlined Icon Buttons">
      <Button :icon="`pi pi-${icon}`" :class="`m-2 p-button-rounded p-button-outlined p-button-${severities}`" :aria-label="icon" />
      <template #controls>
        <HstSelect v-model="icon" title="Icon" :options="iconList" />
        <HstSelect v-model="severities" title="Severities" :options="severitiesOptions" />
      </template>
    </Variant>
    <Variant title="Badges">
      <Button class="m-2" type="button" label="Emails" :badge="badge" />
      <Button
        type="button"
        label="Messages"
        icon="pi pi-users"
        class="p-button-warning m-2"
        :badge="badge"
        badge-class="p-badge-danger"
      />
      <template #controls>
        <HstNumber
          v-model="badge"
          :step="1"
          title="Count"
        />
      </template>
    </Variant>
    <Variant title="Loading">
      <Button class="m-2" type="button" label="Search" icon="pi pi-search" :loading="loading[0]" @click="load(0)" />
      <Button
        class="m-2"
        type="button"
        label="Search"
        icon="pi pi-search"
        icon-pos="right"
        :loading="loading[1]"
        @click="load(1)"
      />
      <Button class="m-2" type="button" icon="pi pi-search" :loading="loading[2]" @click="load(2)" />
      <Button class="m-2" type="button" label="Search" :loading="loading[3]" @click="load(3)" />
      <template #controls />
    </Variant>
    <Variant title="Button Set">
      <span class="p-buttonset">
        <Button class="m-2" label="Save" icon="pi pi-check" />
        <Button class="m-2" label="Delete" icon="pi pi-trash" />
        <Button class="m-2" label="Cancel" icon="pi pi-times" />
      </span>
      <template #controls />
    </Variant>
    <Variant title="Sizes">
      <div class="sizes">
        <Button
          label="Normal"
          :icon="`pi pi-${icon}`"
          class="m-2"
          :class="size === 'default' ? 'p-button' : `p-button-${size}`"
        />
      </div>
      <template #controls>
        <HstSelect v-model="icon" title="Icon Type" :options="iconList" />
        <HstSelect v-model="size" title="Icon Size" :options="['default', 'sm', 'lg']" />
      </template>
    </Variant>
    <Variant title="Template">
      <div class="template">
        <Button :class="`m-2 ${templateSelected} p-0`" :aria-label="templateSelected">
          <i :class="`pi pi-${templateSelected} px-2`" />
          <span class="px-3 capitalize">{{ templateSelected }}</span>
        </Button>
      </div>
      <template #controls>
        <HstSelect v-model="icon" title="Icon Type" :options="iconList" />
        <HstSelect v-model="templateSelected" title="Icon Size" :options="templateOptions" />
      </template>
    </Variant>
    <Variant title="Play Ground">
      <Button class="m-2" label="Submit" />
    </Variant>
  </Story>
</template>

<style lang="scss" scoped>
.p-button {
  margin-right: 0.5rem;
}
.p-buttonset {
  .p-button {
    margin-right: 0;
  }
}
.sizes {
  .button {
    margin-bottom: 0.5rem;
    display: block;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.template .p-button i {
  line-height: 2.25rem;
}
.template .p-button.google {
  background: linear-gradient(to left, var(--purple-600) 50%, var(--purple-700) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-color: var(--purple-700);
}
.template .p-button.google:hover {
  background-position: left bottom;
}
.template .p-button.google i {
  background-color: var(--purple-700);
}
.template .p-button.google:focus {
  box-shadow: 0 0 0 1px var(--purple-400);
}
.template .p-button.youtube {
  background: linear-gradient(to left, var(--pink-600) 50%, var(--pink-700) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-color: var(--pink-700);
}
.template .p-button.youtube:hover {
  background-position: left bottom;
}
.template .p-button.youtube i {
  background-color: var(--pink-700);
}
.template .p-button.youtube:focus {
  box-shadow: 0 0 0 1px var(--pink-400);
}
.template .p-button.vimeo {
  background: linear-gradient(to left, var(--green-200) 50%, var(--green-300) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #000;
  border-color: var(--green-300);
}
.template .p-button.vimeo:hover {
  background-position: left bottom;
}
.template .p-button.vimeo i {
  background-color: var(--green-300);
}
.template .p-button.vimeo:focus {
  box-shadow: 0 0 0 1px var(--green-400);
}
.template .p-button.facebook {
  background: linear-gradient(to left, var(--indigo-600) 50%, var(--indigo-700) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-color: var(--indigo-700);
}
.template .p-button.facebook:hover {
  background-position: left bottom;
}
.template .p-button.facebook i {
  background-color: var(--indigo-700);
}
.template .p-button.facebook:focus {
  box-shadow: 0 0 0 1px var(--indigo-400);
}
.template .p-button.twitter {
  background: linear-gradient(to left, var(--blue-400) 50%, var(--blue-500) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-color: var(--blue-500);
}
.template .p-button.twitter:hover {
  background-position: left bottom;
}
.template .p-button.twitter i {
  background-color: var(--blue-500);
}
.template .p-button.twitter:focus {
  box-shadow: 0 0 0 1px var(--blue-200);
}
.template .p-button.slack {
  background: linear-gradient(to left, var(--orange-400) 50%, var(--orange-500) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-color: var(--orange-500);
}
.template .p-button.slack:hover {
  background-position: left bottom;
}
.template .p-button.slack i {
  background-color: var(--orange-500);
}
.template .p-button.slack:focus {
  box-shadow: 0 0 0 1px var(--orange-200);
}
.template .p-button.amazon {
  background: linear-gradient(to left, var(--yellow-400) 50%, var(--yellow-500) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #000;
  border-color: var(--yellow-500);
}
.template .p-button.amazon:hover {
  background-position: left bottom;
}
.template .p-button.amazon i {
  background-color: var(--yellow-500);
}
.template .p-button.amazon:focus {
  box-shadow: 0 0 0 1px var(--yellow-200);
}
.template .p-button.discord {
  background: linear-gradient(to left, var(--bluegray-700) 50%, var(--bluegray-800) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-color: var(--bluegray-800);
}
.template .p-button.discord:hover {
  background-position: left bottom;
}
.template .p-button.discord i {
  background-color: var(--bluegray-800);
}
.template .p-button.discord:focus {
  box-shadow: 0 0 0 1px var(--bluegray-500);
}
@media screen and (max-width: 960px) {
  .p-button {
    margin-bottom: 0.5rem;
    &:not(.p-button-icon-only) {
      display: flex;
      width: 100%;
    }
  }
  .p-buttonset {
    .p-button {
      margin-bottom: 0;
    }
  }
}
</style>
