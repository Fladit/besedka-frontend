<template>
  <div class="date-picker">
    <div class="date-picker__birthday-label">Дата рождения ({{resultDate}})</div>
    <div class="date-picker-selectors">
      <TheInputSelector v-model="birthDate.day" v-bind:title="dayPickerOptions.title" v-bind:options="dayPickerComputedOptions"/>
      <TheInputSelector v-model="birthDate.month" v-bind:title="monthPickerOptions.title" v-bind:options="monthPickerOptions.options"/>
      <TheInputSelector v-model="birthDate.year" v-bind:title="yearPickerOptions.title" v-bind:options="yearPickerOptions.options"/>
    </div>
  </div>
</template>

<script>
import TheInputSelector from "@/components/TheInputSelector";
import {dayPickerOptions, monthPickerOptions, yearPickerOptions} from "@/utils/DatePickerLogic";
import {months, monthsEnum} from "@/utils/monthsEnums";

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
      days: []
    }
  },
  computed: {
    resultDate: function () {
      return `${this.birthDate.day}/${this.birthDate.month}/${this.birthDate.year}`
    },
    dayPickerComputedOptions: function () {
      if (this.birthDate.month) {
        if (this.birthDate.year) {
          if (this.birthDate.year % 4 === 0 && this.birthDate.month === months.FEBRUARY) {
            return dayPickerOptions.options.slice(0, monthsEnum[months.FEBRUARY].maxDays + 1)
          }
        }
        const daysInMonth = monthsEnum[this.birthDate.month].maxDays
        if (daysInMonth !== 31)
          return dayPickerOptions.options.slice(0, daysInMonth)
      }
      return dayPickerOptions.options
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
    dayPickerComputedOptions: function (val) {
      if (parseInt(this.birthDate.day) > val.length) {
        this.birthDate.day = ""
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "public/variables";

.date-picker {
  width: @baseAuthInputWidth;
}

.date-picker__birthday-label {
  width: fit-content;
  color: gray;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 5px;
}
.date-picker-selectors {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
