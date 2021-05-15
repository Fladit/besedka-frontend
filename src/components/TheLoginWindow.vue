<template>
  <div class="login">
    <div>Авторизация</div>
    <BaseAuthInput v-model="username" @validate="validateUsername" placeholder="Введите логин или email"/>
    <BaseAuthInput v-model="password" placeholder="Введите пароль"/>
    <button class="login_button" @click="login">Войти</button>
  </div>
</template>

<script>
import BaseAuthInput from "@/components/BaseAuthInput";
import {rulesEnum} from "@/utils/errorRules";
export default {
  name: "Login",
  components: {BaseAuthInput},
  data: function () {
    return {
      error: '',
      username: '',
      password: '',
      usernameRules: {
        [rulesEnum.MIN_LENGTH]: 3,
        [rulesEnum.MAX_LENGTH]: 15,
      }
    }
  },
  methods: {
    login: async function () {
      if (this.error)
        this.error = ""
      else this.error = "test"
      console.log("Login", this.error)
    },
    validateUsername: function (val) {

    },
  }
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
