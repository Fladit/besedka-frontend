<template>
  <div>
    <div>Дата рождения ({{resultDate}})</div>
    <TheInputSelector v-model="birthDate.day" v-bind:title="dayPickerOptions.title" v-bind:options="dayPickerOptions.options"/>
    <TheInputSelector v-model="birthDate.month" v-bind:title="monthPickerOptions.title" v-bind:options="monthPickerOptions.options"/>
    <TheInputSelector v-model="birthDate.year" v-bind:title="yearPickerOptions.title" v-bind:options="yearPickerOptions.options"/>
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
      birthDate: {
        day: "",
        month: "",
        year: "",
      },
      dayPickerOptions: dayPickerOptions,
      monthPickerOptions: monthPickerOptions,
      yearPickerOptions: yearPickerOptions,
    }
  },
  computed: {
    resultDate: function () {
      return `${this.birthDate.day}/${this.birthDate.month}/${this.birthDate.year}`
    }
  },
  watch: {
    birthDate: {
      handler: function (val) {
        const {day, month, year} = val
        let returnedBirthDay = undefined
        if (day && month && year)
          returnedBirthDay = new Date(year, month, day).toString()
        this.$emit('input', returnedBirthDay)
      },
      deep: true,
    },
  }
}
</script>

<style scoped>

</style>
