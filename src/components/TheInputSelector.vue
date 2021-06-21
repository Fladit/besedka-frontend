<template>
  <select v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
    <option disabled value="">{{title}}</option>
    <option v-for="option in options" v-bind:key="option.value" :value="option.value">
      {{option.title}}
    </option>
  </select>
</template>

<script>
export default {
  name: "TheInputSelector",
  props: {
    title: String,
    options: Array,
    value: String,
  }
}
</script>

<style scoped>

</style>
