<template>
  <div class="login">
    <div>Авторизация</div>
    <BaseAuthInput v-model="username" :validateInput="validateUsername" :rules="usernameRules"
                   v-on:update:hasError="errors.hasUsernameError = !errors.hasUsernameError"
                   v-bind:delay="800" placeholder="Введите логин или email"/>
    <BaseAuthInput v-model="password" v-bind:rules="this.passwordRules"
                   v-on:update:hasError="errors.hasPasswordError = !errors.hasPasswordError"
                   placeholder="Введите пароль"/>
    <button :disabled="isButtonDisabled" class="login_button" @click="login">Войти</button>
  </div>
</template>

<script>
import BaseAuthInput from "@/components/BaseAuthDebouncedInput";
import {customRules} from "@/utils/inputRules";
import {AuthPropertyValidation} from "@/utils/Auth/AuthPropertyValidation";
import {AuthLogic} from "@/utils/Auth/AuthLogic";

export default {
  name: "TheLoginWindow",
  components: {BaseAuthInput},
  data: function () {
    return {
      errors: {
        hasUsernameError: false,
        hasPasswordError: false
      },
      username: '',
      password: '',
      isButtonDisabled: false,
      usernameRules: customRules.usernameRules,
      passwordRules: customRules.passwordRules,
    }
  },
  methods: {
    login: function () {
      AuthLogic.login({username: this.username, password: this.password})
    },
    validateUsername: AuthPropertyValidation.validateUsername
  },
  watch: {
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
