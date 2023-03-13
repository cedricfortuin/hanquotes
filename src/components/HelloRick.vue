<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1 class="text-green-500 text-5xl font-bold">{{ msg }}</h1>
</template>
