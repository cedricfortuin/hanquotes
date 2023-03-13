<script setup>
import { ref } from 'vue';
import quotes from "../../quotes.json";

const amountQuotes = quotes['quotes'].length;
const randomIndex = ref(Math.floor(Math.random() * amountQuotes));
const quote = ref(quotes['quotes'][randomIndex.value]);

setInterval(() => {
  randomIndex.value = Math.floor(Math.random() * amountQuotes);
  quote.value = quotes['quotes'][randomIndex.value];
}, 5000);
</script>

<template>
  <h2>{{ quote }}</h2>
  <small>Quote {{ randomIndex + 1 }} out of {{ amountQuotes }} quotes.</small>
</template>

<style scoped>
h2 {
  text-align: center
}


@media (min-width: 1024px) {
  h2 {
    text-align: left;
  }
}

@media (max-width: 1023px) {
  small {
    display: none;
  }
}
</style>