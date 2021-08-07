<template>
  <div>
    <h1>You are lost</h1>
    <NuxtLink to="/">Head back to the Center</NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
