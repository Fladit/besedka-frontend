<template>
  <div class="date-picker">
    <div class="date-picker__birthday-label">Дата рождения ({{resultDate}})</div>
    <div class="date-picker-selectors">
      <TheInputSelector v-model="birthDate.day" v-bind:title="dayPickerOptions.title" v-bind:options="dayPickerComputedOptions"/>
      <TheInputSelector v-model="birthDate.month" v-bind:title="monthPickerOptions.title" v-bind:options="monthPickerOptions.options"/>
      <TheInputSelector v-model="birthDate.year" v-bind:title="yearPickerOptions.title" v-bind:options="yearPickerOptions.options"/>
    </div>
    <div style="position: relative; bottom: -15px">
      <BaseAuthInputErrorWindow :error-message="errorMessage"/>
    </div>
  </div>
</template>

<script>
import TheInputSelector from "@/components/TheInputSelector";
import {dayPickerOptions, monthPickerOptions, yearPickerOptions} from "@/utils/DatePickerLogic";
import {months, monthsEnum} from "@/utils/monthsEnums";
import BaseAuthInputErrorWindow from "@/components/BaseAuthInputErrorWindow";
import {rulesEnum, rulesError} from "@/utils/inputRules";

export default {
  name: "TheDatePicker",
  components: {BaseAuthInputErrorWindow, TheInputSelector},
  props: {
    value: String,
    rules: Object,
    errorSearcher: Number,
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
      days: [],
      errorMessage: "",
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
          returnedBirthDay = new Date(parseInt(year), monthsEnum[month].index, parseInt(day)).toString()
        this.$emit('input', returnedBirthDay)
      },
      deep: true,
    },
    dayPickerComputedOptions: function (val) {
      if (parseInt(this.birthDate.day) > val.length) {
        this.birthDate.day = ""
      }
    },
    errorSearcher: function (val) {
      if (!this.errorMessage) {
        this.checkErrors(this.value)
      }
    },
    value: function (newValue) {
      if (this.checkErrors(newValue) && this.errorMessage) {
        this.errorMessage = ""
      }
    }
  },
  methods: {
    checkErrors: function (value) {
      for (const property in this.rules) {
        console.log(property)
        switch (property) {
          case rulesEnum.MIN_LENGTH: {
            if (value.length < this.rules[property]) {
              this.errorMessage = rulesError[property](this.rules[property])
              return false;
            }
            break;
          }
          case rulesEnum.MAX_LENGTH: {
            if (!(value.length < this.rules[property])) {
              this.errorMessage = rulesError[property](this.rules[property])
              return false;
            }
            break;
          }

          case rulesEnum.CAN_BE_EMPTY: {
            if (((value === "" || value === undefined) && !this.rules[property])) {
              this.errorMessage = rulesError[property](this.rules[property])
              return false;
            }
            break;
          }

          default: {
            break;
          }
        }
      }
      return true;
    },
  }
}
</script>

<style lang="less" scoped>
@import "public/variables";

.date-picker {
  position: relative;
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
