<template>
  <div class="registration">
    <div class="registration_label">Регистрация</div>
    <BaseAuthInput v-model="user.username" placeholder="Введите имя аккаунта"/>
    <BaseAuthInput v-model="user.password" placeholder="Введите пароль"/>
    <BaseAuthInput v-model="passwordRetry" placeholder="Введите пароль повторно"/>
    <BaseAuthInput v-model="user.email" placeholder="Введите email"/>
    <BaseAuthInput v-model="user.firstName" placeholder="Введите имя"/>
    <BaseAuthInput v-model="user.lastName" placeholder="Введите фамилию"/>
    <BaseAuthInput v-model="user.birthDay"/>
    <button class="registration_button" :disabled="isButtonDisabled">Зарегистрироваться</button>
  </div>
</template>

<script>
import BaseAuthDebouncedInput from "@/components/BaseAuthDebouncedInput";
export default {
  name: "TheRegistrationWindow",
  components: {BaseAuthInput: BaseAuthDebouncedInput},
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
      passwordRetry: ''
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
    }
  }
}
</script>

<style scoped>
.registration {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
</style>
