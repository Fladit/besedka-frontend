<template>
  <div>
    <div>Дата рождения ({{resultDate}})</div>
    <TheInputSelector v-model="day" v-bind:title="dayPickerOptions.title" v-bind:options="dayPickerOptions.options"/>
    <TheInputSelector v-model="month" v-bind:title="monthPickerOptions.title" v-bind:options="monthPickerOptions.options"/>
    <TheInputSelector v-model="year" v-bind:title="yearPickerOptions.title" v-bind:options="yearPickerOptions.options"/>
  </div>
</template>

<script>
import TheInputSelector from "@/components/TheInputSelector";
import {dayPickerOptions, monthPickerOptions, yearPickerOptions} from "@/utils/DatePickerLogic";

export default {
  name: "TheDatePicker",
  components: {TheInputSelector},
  props: {
    value: String,
  },
  data: function () {
    return {
      day: "",
      month: "",
      year: "",
      dayPickerOptions: dayPickerOptions,
      monthPickerOptions: monthPickerOptions,
      yearPickerOptions: yearPickerOptions,
    }
  },
  computed: {
    resultDate: function () {
      // ПЕРЕДЕЛАТЬ ФУНКЦИЮ !!!!!
      return `${this.day}/${this.month}/${this.year}`
    }
  }
}
</script>

<style scoped>

</style>
