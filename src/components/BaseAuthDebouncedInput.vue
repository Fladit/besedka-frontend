<template>
  <div class="auth-input">
    <input v-bind:value="value" @input="$emit('input', $event.target.value)" :error="!!errorMessage"
           v-bind:placeholder="placeholder" v-bind:type="type" v-bind:id="id">
    <div class="auth-input_error"  v-if="errorMessage">
      <div class="auth-input_error-message">{{errorMessage}}</div>
    </div>
  </div>
</template>

<script>
import {rulesEnum, rulesError} from "@/utils/inputRules";

export default {
  name: "BaseAuthDebouncedInput",
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    hasError: Boolean,
    validateInput: Function,
    rules: Object,
    delay: {
      type: Number,
      default: 300,
    },
    type: String,
    id: String,
    trackedValue: String,
  },
  data: function () {
    return {
      errorMessage: "",
      myDebouncedValidation: this.myDebounce(async (value) => {
        //console.log("deb", value)
        if (this.checkErrors(value)) {
          if (this.validateInput) {
            this.errorMessage = await this.validateInput(value)
          }
          else {
            if (this.errorMessage)
              this.errorMessage = ""
          }
          console.log("access")
        }
      }, this.delay)
    }
  },
  watch: {
    value: function (newValue) {
      console.log(newValue)
      this.myDebouncedValidation(newValue)
    },
    errorMessage: function (newValue, oldValue) {
      if (!newValue && oldValue || newValue && !oldValue) {
        this.$emit("update:hasError")
      }
    },
    trackedValue: async function (val) {
      if (this.validateInput) {
        this.errorMessage = await this.validateInput(this.value)
      }
    }
  },
  methods: {
    checkErrors: function (value) {
      for (const property in this.rules) {
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
              return false
            }
            break;
          }

          case rulesEnum.CAN_BE_EMPTY: {
            break;
          }

          default: {
            break;
          }
        }
      }
      return true;
    },
    myDebounce: function (cb, delay) {
      let timeout = null;
      return function (...args) {
        clearInterval(timeout)
        timeout = setTimeout(() => {
          console.log("args:", ...args)
          cb.apply(this, args)
        }, delay)
      }
    },
  }
}
</script>

<style lang="less" scoped>
@import "public/variables";
input {
  width: @baseAuthInputWidth;
  height: 55px;
  font-size: 20px;
  padding: 20px 10px;
  margin-top: 20px;
  border: 2px solid black;
}
input[error=true] {
  border-color: red;
}

input:focus {
  outline: none;
  border-color: #0066ff ;
}

input[error=true]:focus {
  outline: none;
  border-color: orange;
}

.auth-input {
  display: flex;
  align-items: center;
  position: relative;
}

.auth-input_error {
  display: flex;
  position: absolute;
  left: 350px;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 0 15px 0 gray;
  background-color: white;
}

.auth-input_error::before {
  position: absolute;
  left: -5px;
  content: '';
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  background-color: white;
}


.auth-input_error-message {
  color: red;
  font-size: 16px;
  text-align: center;
}


</style>
