<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default{
  name: 'Home',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>