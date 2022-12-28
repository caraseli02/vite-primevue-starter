<script setup lang="ts">
import { ref } from 'vue'
import Calendar from 'primevue/calendar'

const today = new Date()
const month = today.getMonth()
const year = today.getFullYear()
const prevMonth = (month === 0) ? 11 : month - 1
const prevYear = (prevMonth === 11) ? year - 1 : year
const nextMonth = (month === 11) ? 0 : month + 1
const nextYear = (nextMonth === 0) ? year + 1 : year

const minDate = ref(new Date())
const maxDate = ref(new Date())
const invalidDates = ref()
const date1 = ref()
const date2 = ref()
const date3 = ref()
const date4 = ref()
const date5 = ref()
const date6 = ref()
const date7 = ref()
const date8 = ref()
const date9 = ref()
const date10 = ref()
const date11 = ref()
const date12 = ref()
const date13 = ref()
const date14 = ref()
const dates1 = ref()
const dates2 = ref()
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numMonths: 2,
  },
  {
    breakpoint: '1200px',
    numMonths: 1,
  },
])

minDate.value.setMonth(prevMonth)
minDate.value.setFullYear(prevYear)
maxDate.value.setMonth(nextMonth)
maxDate.value.setFullYear(nextYear)

const invalidDate = new Date()
invalidDate.setDate(today.getDate() - 1)
invalidDates.value = [today, invalidDate]

const dateFormat = ref('mm-dd-yy')
const manualInput = ref(false)
</script>

<template>
  <Story title="Molecules Calendar" :layout="{ type: 'grid', width: '400px' }">
    <h5>Popup</h5>
    <div class="p-fluid grid formgrid">
      <Variant title="Basic" class="field col-12 md:col-4">
        <Calendar v-model="date1" input-id="basic" autocomplete="off" />
        <template #controls />
      </Variant>
      <Variant title="DateFormat" class="field col-12 md:col-4">
        <Calendar v-model="date2" input-id="dateformat" :date-format="dateFormat" />
        <template #controls>
          <HstText v-model="dateFormat" title="DateFormat" />
        </template>
      </Variant>
      <Variant title="Icon" class="field col-12 md:col-4">
        <Calendar v-model="date3" input-id="icon" :show-icon="true" />
        <template #controls />
      </Variant>
      <Variant title="MinMax" class="field col-12 md:col-4">
        <Calendar v-model="date4" input-id="minmax" :min-date="minDate" :max-date="maxDate" :manual-input="false" />
        <template #controls />
      </Variant>
      <Variant title="Disabled Days" class="field col-12 md:col-4">
        <Calendar v-model="date5" input-id="disableddays" :disabled-dates="invalidDates" :disabled-days="[0, 6]" :manual-input="false" />
        <template #controls />
      </Variant>
      <Variant title="Multiple" class="field col-12 md:col-4">
        <Calendar v-model="dates1" input-id="multiple" selection-mode="multiple" :manual-input="manualInput" />
        <template #controls />
      </Variant>
      <Variant title="Range" class="field col-12 md:col-4">
        <Calendar v-model="dates2" input-id="range" selection-mode="range" :manual-input="false" />
        <template #controls />
      </Variant>
      <Variant title="Button Bar" class="field col-12 md:col-4">
        <Calendar v-model="date6" input-id="buttonbar" :show-button-bar="true" />
      </Variant>
      <Variant title="Time / 24h" class="field col-12 md:col-4">
        <Calendar v-model="date7" input-id="time24" :show-time="true" :show-seconds="true" />
      </Variant>
      <Variant title="Time / 12h" class="field col-12 md:col-4">
        <Calendar v-model="date8" input-id="time12" :time-only="true" hour-format="12" />
      </Variant>
      <Variant title="Month Picker" class="field col-12 md:col-4">
        <Calendar v-model="date9" input-id="monthpicker" view="month" date-format="mm/yy" />
      </Variant>
      <Variant title="Year Picker" class="field col-12 md:col-4">
        <Calendar v-model="date10" input-id="yearpicker" view="year" date-format="yy" />
      </Variant>
      <Variant title="Multiple Months" class="field col-12 md:col-4">
        <Calendar v-model="date11" input-id="multiplemonths" :number-of-months="3" :responsive-options="responsiveOptions" />
      </Variant>
      <Variant title="Date Template" class="field col-12 md:col-4">
        <Calendar v-model="date12" input-id="datetemplate">
          <template #date="slotProps">
            <strong v-if="slotProps.date.day > 10 && slotProps.date.day < 15" class="special-day">{{ slotProps.date.day }}</strong>
            <template v-else>
              {{ slotProps.date.day }}
            </template>
          </template>
        </Calendar>
      </Variant>
      <Variant title="TouchUI" class="field col-12 md:col-4">
        <Calendar v-model="date13" input-id="touchUI" :touch-u-i="true" />
      </Variant>
    </div>
    <Variant title="Inline" class="field col-12 md:col-4">
      <Calendar v-model="date14" :inline="true" :show-week="true" />
    </Variant>
  </Story>
</template>

<style scoped>
.special-day {
  text-decoration: line-through;
}
</style>
