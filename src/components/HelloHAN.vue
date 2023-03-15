<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1 class="text-white text-5xl font-bold">{{ msg }}</h1>
</template>
