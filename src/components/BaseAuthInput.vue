<template>
  <div class="auth-input">
    <input v-bind:value="value" :error="!!errorMessage" @change="$emit('input', $event.target.value)" v-bind:placeholder="placeholder">
    <div class="auth-input_error"  v-if="errorMessage">
      <div class="auth-input_error-message">{{errorMessage}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseAuthInput",
  props: {
    value: String,
    placeholder: String,
    minLength: Number,
    maxLength: Number,
    errorMessage: String,
  }
}
</script>

<style scoped>
input {
  width: 300px;
  height: 60px;
  border-radius: 15px;
  font-size: 20px;
  padding: 20px 10px;
}
input[error=true] {
  border-color: red;
}

input:focus {
  outline: none;
  border-color: #0066ff ;
}

input[error=true]:focus {
  outline: none;
  border-color: orange;
}

.auth-input {
  display: flex;
  align-items: center;
  position: relative;
}

.auth-input_error {
  display: flex;
  position: absolute;
  right: -170px;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
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
