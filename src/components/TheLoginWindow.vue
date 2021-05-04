<template>
  <div class="login">
    <input class="login_input" id="usernameInput" v-model="username" placeholder="Введите логин или email">
    <input class="login_input" id="passwordInput" v-model="password" placeholder="Введите пароль">
    <button class="login_button" @click="login">Войти</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async login() {
      console.log("Login")
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
  margin-bottom: 20px;
  font-size: 20px;
  padding: 10px 15px;
}

.login_button {
  width: 100px;
  height: 40px;
}
</style>
