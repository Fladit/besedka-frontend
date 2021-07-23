<template>
  <div class="login">
    <div class="login__title">Авторизация</div>
    <BaseAuthDebouncedInput v-model="username" :rules="rules.username"
                            v-on:update:hasError="errors.hasUsernameError = !errors.hasUsernameError"
                            placeholder="Введите логин или email..."/>
    <BaseAuthDebouncedInput v-model="password" v-bind:rules="rules.password"
                            v-on:update:hasError="errors.hasPasswordError = !errors.hasPasswordError"
                            placeholder="Введите пароль..."/>
    <button :disabled="isButtonDisabled" class="login_button" @click="login">Войти</button>
    <router-link class="login__text-button" v-bind:to="{name: 'forgot'}">Забыли пароль?</router-link>
    <div class="login-registration">
      <div>Ещё не зарегистрированы?</div>
      <router-link class="login__text-button" v-bind:to="{name: 'registration'}">Регистрация</router-link>
    </div>

  </div>
</template>

<script>
import BaseAuthDebouncedInput from "@/components/BaseAuthDebouncedInput";
import {customRules} from "@/utils/inputRules";
import {AuthLogic} from "@/utils/Auth/AuthLogic";

export default {
  name: "TheLoginWindow",
  components: {BaseAuthDebouncedInput},
  data: function () {
    return {
      errors: {
        hasUsernameError: false,
        hasPasswordError: false
      },
      username: '',
      password: '',
      isButtonDisabled: false,
      rules: {
        username: customRules.usernameRules,
        password: customRules.passwordRules,
      }
    }
  },
  methods: {
    login: async function () {
      try {
        const user = await AuthLogic.login({username: this.username, password: this.password})
        // Добавить логику сохранения данных пользователя в state manager

        await this.$router.push({path: ''})
      }
      catch (e) {
        alert(e.response.data.message)
      }
    },
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
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  padding: 20px 100px;
  border: 1px solid black;
  border-radius: 32px;
  background-color: white;
  box-shadow: 0 0 5px 1px;
}

.login_input {
  width: 300px;
  height: 60px;
  border-radius: 15px;
  margin-top: 20px;
  font-size: 20px;
  padding: 10px 15px;
}

.login__title {
  font-size: 24px;
}

.login_button {
  width: 100px;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 15px;
  background: white;
  border-radius: 14px;
  font-size: 20px;
  cursor: pointer;
}

.login__text-button {
  color: #0E26A3;
  cursor: pointer;
  text-decoration: underline;
}

.login-registration {
  margin-top: 15px;
}
</style>
