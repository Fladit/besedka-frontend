<template>
  <div class="registration">
    <div>
      <div class="registration_label">
        Регистрация
        <router-link class="registration_back-button" v-bind:to="{name: 'login'}"/>
      </div>
    </div>
    <BaseAuthDebouncedInput v-model="user.username" :validate-input="validateUsername"
                            @update:hasError="errors.hasUsernameError = !errors.hasUsernameError"
                            :rules="rules.username"  :delay="500"
                            placeholder="Введите имя аккаунта"/>
    <BaseAuthDebouncedInput v-model="user.password" :rules="rules.password"
                            @update:hasError="errors.hasPasswordError = !errors.hasPasswordError"
                            placeholder="Введите пароль"/>
    <BaseAuthDebouncedInput v-model="passwordRetry" :validateInput="validatePasswordRetry"
                            placeholder="Введите пароль повторно"/>
    <BaseAuthDebouncedInput v-model="user.email" placeholder="Введите email" type="email" id="email"/>
    <BaseAuthDebouncedInput v-model="user.firstName" placeholder="Введите имя" id="name"/>
    <BaseAuthDebouncedInput v-model="user.lastName" placeholder="Введите фамилию" id="lastname"/>
    <TheDatePicker v-model="user.birthDay"/>
    <button class="registration_button" :disabled="isButtonDisabled">Зарегистрироваться</button>
  </div>
</template>

<script>
import BaseAuthDebouncedInput from "@/components/BaseAuthDebouncedInput";
import TheDatePicker from "@/components/TheDatePicker";
import {AuthPropertyValidation} from "@/utils/Auth/AuthPropertyValidation";
import {customRules} from "@/utils/inputRules";
export default {
  name: "TheRegistrationWindow",
  components: {TheDatePicker, BaseAuthDebouncedInput},
  data() {
    return {
      user: {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        birthDay: '',
      },
      passwordRetry: '',
      errors: {
        hasUsernameError: false,
        hasPasswordError: false,
        hasEmailError: false,
        hasFirstNameError: false,
        hasLastNameError: false,
        hasBirthDayError: false
      },
      rules: {
        username: customRules.usernameRules,
        password: customRules.passwordRules,
      }
    }
  },
  computed: {
    isButtonDisabled() {
      for (const property in this.user) {
        console.log(property, this.user[property])
        if (!this.user[property])
          return true;
      }
      return this.user.password !== this.passwordRetry;
    },
  },
  methods: {
    validateUsername: AuthPropertyValidation.validateUsername,
    validatePasswordRetry: function (passwordRetry) {
      return AuthPropertyValidation.validatePasswordRetry(this.user.password, passwordRetry)
    }

  },
  watch: {
    "user.birthDay": {
      handler: function (val) {
        console.log(val)
      },
      deep: true,
    },
    errors: {
      handler: function (errors) {
        //console.log("change")
        for (const property in errors) {
          if (errors[property]) {
            if (!this.isButtonDisabled) {
              this.isButtonDisabled = true
            }
            return ;
          }
        }
        if (this.isButtonDisabled)
          this.isButtonDisabled = false
      },
      deep: true,
    }
  }
}
</script>

<style lang="less" scoped>

@registrationPaddingTop: 10px;

.registration {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: white;
  padding: @registrationPaddingTop 100px 20px;
  border-radius: 64px;
  box-shadow: 0 0 5px 1px;
}

.registration_label {
  font-size: 24px;
}

.registration_input {
  width: 300px;
  height: 60px;
  border-radius: 15px;
  font-size: 20px;
  margin-top: 20px;
  padding: 20px 10px;
}

.registration_button {
  width: 250px;
  height: 40px;
  border-radius: 12px;
  margin-top: 20px;
  background-color: white;
  font-size: 20px;
}

@backButtonHeight: 15px;
@backButtonWidth: 30px;
@backButtonArrowHeight: @backButtonHeight * 2;
.registration_back-button {
  left: @backButtonWidth * 2;
  top: @backButtonHeight;
  position: absolute;
  width: @backButtonWidth;
  height: @backButtonHeight;
  background-color: #A5E763;
}
.registration_back-button::before {
  content: "";
  position: absolute;
  top: ((@backButtonArrowHeight - @backButtonHeight) / -2);
  left: (@backButtonArrowHeight / -2);
  border-top: (@backButtonArrowHeight / 2) solid transparent;
  border-bottom: (@backButtonArrowHeight / 2) solid transparent;
  border-right: (@backButtonArrowHeight / 2) solid #A5E763;
  z-index: 999;
}

</style>
