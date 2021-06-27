<template>
  <div class="registration">
    <div>
      <div class="registration_label">
        Регистрация
        <router-link class="registration_back-button" v-bind:to="{name: 'login'}"/>
      </div>
    </div>
    <BaseAuthInput v-model="user.username" placeholder="Введите имя аккаунта"/>
    <BaseAuthInput v-model="user.password" placeholder="Введите пароль"/>
    <BaseAuthInput v-model="passwordRetry" placeholder="Введите пароль повторно"/>
    <BaseAuthInput v-model="user.email" placeholder="Введите email" type="email" id="email"/>
    <BaseAuthInput v-model="user.firstName" placeholder="Введите имя" id="name"/>
    <BaseAuthInput v-model="user.lastName" placeholder="Введите фамилию" id="lastname"/>
    <TheDatePicker v-model="user.birthDay"/>
    <button class="registration_button" :disabled="isButtonDisabled">Зарегистрироваться</button>
  </div>
</template>

<script>
import BaseAuthDebouncedInput from "@/components/BaseAuthDebouncedInput";
import TheDatePicker from "@/components/TheDatePicker";
export default {
  name: "TheRegistrationWindow",
  components: {TheDatePicker, BaseAuthInput: BaseAuthDebouncedInput},
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
  },
  watch: {
    "user.birthDay": {
      handler: function (val) {
        console.log(val)
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
