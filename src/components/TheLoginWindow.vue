<template>
  <div class="login">
    <div>Авторизация</div>
    <BaseAuthInput v-model="username" placeholder="Введите логин или email" :error-message="error"/>
    <input class="login_input" id="usernameInput" v-model="username" placeholder="Введите логин или email">
    <input class="login_input" id="passwordInput" v-model="password" placeholder="Введите пароль">
    <button class="login_button" @click="login">Войти</button>
  </div>
</template>

<script>
import BaseAuthInput from "@/components/BaseAuthInput";
export default {
  name: "Login",
  components: {BaseAuthInput},
  data: function () {
    return {
      error: '',
      username: '',
      password: '',
    }
  },
  methods: {
    async login() {
      if (this.error)
        this.error = ""
      else this.error = "test"
      console.log("Login", this.error)
    }
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
