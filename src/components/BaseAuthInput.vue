<template>
  <div class="auth-input">
    <input v-bind:value="value" @input="$emit('input', $event.target.value)" :error="!!errorMessage" v-bind:placeholder="placeholder">
    <div class="auth-input_error"  v-if="errorMessage">
      <div class="auth-input_error-message">{{errorMessage}}</div>
    </div>
  </div>
</template>

<script>
import {rulesEnum, rulesError} from "@/utils/errorRules";

export default {
  name: "BaseAuthInput",
  props: {
    value: String,
    placeholder: String,
    minLength: Number,
    maxLength: Number,
    hasError: Boolean,
    validateInput: Function,
    rules: Object,
  },
  data: function () {
    return {
      errorMessage: "",
      myDebouncedValidation: this.myDebounce(async (value) => {
        //console.log("deb", value)
        if (this.checkErrors(value)) {
          console.log("access")
          this.errorMessage = await this.validateInput(value)
        }
      }, 800)
    }
  },
  watch: {
    value: function (newValue) {
      console.log(newValue)
      //this.debouncedValidation(newValue)
      this.myDebouncedValidation(newValue)
    },
    errorMessage: function (newValue, oldValue) {
      if (!newValue && oldValue || newValue && !oldValue) {
        this.$emit("update:hasError")
      }
    }
  },
  methods: {
    checkErrors: function (value) {
      for (const property in this.rules) {
        console.log(property, this.rules[property])
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

<style scoped>
input {
  width: 300px;
  height: 60px;
  border-radius: 15px;
  font-size: 20px;
  padding: 20px 10px;
  margin-top: 20px;
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
