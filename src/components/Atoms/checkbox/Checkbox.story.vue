<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from './Checkbox.vue'

const checked = ref(false)
const cities = ref([])
const categories = ref([
  { name: 'Accounting', key: 'A' },
  { name: 'Marketing', key: 'M' },
  { name: 'Production', key: 'P' },
  { name: 'Research', key: 'R' },
])
const selectedCategories = ref(categories.value.slice(1, 3))

return { checked, cities, categories, selectedCategories }
</script>

<template>
  <Story title="Buttons" :layout="{ type: 'grid', width: '400px' }">
    <Variant title="Basic">
      <div class="field-checkbox">
        <Checkbox v-model="checked" input-id="binary" :binary="true" />
        <label for="binary">{{ checked }}</label>
      </div>

      <h5>Multiple</h5>
      <div class="field-checkbox">
        <Checkbox v-model="cities" input-id="city1" name="city" value="Chicago" />
        <label for="city1">Chicago</label>
      </div>
      <div class="field-checkbox">
        <Checkbox v-model="cities" input-id="city2" name="city" value="Los Angeles" />
        <label for="city2">Los Angeles</label>
      </div>
      <div class="field-checkbox">
        <Checkbox v-model="cities" input-id="city3" name="city" value="New York" />
        <label for="city3">New York</label>
      </div>
      <div class="field-checkbox">
        <Checkbox v-model="cities" input-id="city4" name="city" value="San Francisco" />
        <label for="city4">San Francisco</label>
      </div>

      <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
      <div v-for="category of categories" :key="category.key" class="field-checkbox">
        <Checkbox v-model="selectedCategories" :input-id="category.key" name="category" :value="category.name" :disabled="category.key === 'R'" />
        <label :for="category.key">{{ category.name }}</label>
      </div>
    </Variant>
  </Story>
</template>
