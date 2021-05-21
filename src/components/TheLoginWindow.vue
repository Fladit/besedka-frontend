<template>
  <div class="login">
    <div>Авторизация</div>
    <BaseAuthInput v-model="username" :validateInput="validateUsername" :rules="usernameRules"
                   v-on:update:hasError="errors.hasUsernameError = !errors.hasUsernameError"
                   placeholder="Введите логин или email"/>
    <BaseAuthInput v-model="password" placeholder="Введите пароль"/>
    <button :disabled="isButtonDisabled" class="login_button" @click="login">Войти</button>
  </div>
</template>

<script>
import BaseAuthInput from "@/components/BaseAuthInput";
import {rulesEnum} from "@/utils/errorRules";
import {AuthValidation} from "@/utils/AuthValidation";
import _ from "lodash";
export default {
  name: "Login",
  components: {BaseAuthInput},
  data: function () {
    return {
      errors: {
        hasUsernameError: false,
      },
      username: '',
      password: '',
      isButtonDisabled: false,
      usernameRules: {
        [rulesEnum.MIN_LENGTH]: 3,
        [rulesEnum.MAX_LENGTH]: 15,
      }
    }
  },
  methods: {
    login: async function () {

      console.log("Login", this.error)
    },
    validateUsername: AuthValidation.validateUsername
  },
  watch: {
    errors: {
      handler: function (errors) {
        //console.log("change")
        for (const property in errors) {
          if (errors[property]) {
            if (!this.isButtonDisabled) {
              this.isButtonDisabled = !this.isButtonDisabled
              return ;
            }
          }
        }
        if (this.isButtonDisabled)
          this.isButtonDisabled = !this.isButtonDisabled
      },
      deep: true,
    }
  },
}
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 24px;
}

.login_input {
  width: 300px;
  height: 60px;
  border-radius: 15px;
  margin-top: 20px;
  font-size: 20px;
  padding: 10px 15px;
}

.login_button {
  width: 100px;
  height: 40px;
  margin-top: 20px;
}
</style>
