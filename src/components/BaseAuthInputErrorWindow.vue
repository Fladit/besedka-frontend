<template>
  <div class="auth-input_error"  v-if="errorMessage">
    <div class="auth-input_error-message">{{errorMessage}}</div>
  </div>
</template>

<script>
export default {
  name: "BaseAuthInputErrorWindow",
  props: {
  errorMessage: String,
  }
}
</script>

<style scoped>
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
