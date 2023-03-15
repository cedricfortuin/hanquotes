<template>
  <Transition name="fade" mode="out-in">
    <i class="text-gray-200 text-2xl">"{{ quote }}"</i>
  </Transition>
  <br/>
  <small class="text-gray-200">Quote {{ currentQuoteIndex + 1 }} van de {{ amountQuotes }} | <a
      href="https://github.com/cedricfortuin/hanquotes" target="_blank" class="hover:text-green-500">Nieuwe
    toevoegen</a></small>
</template>

<script setup>
import {ref} from 'vue';
import quotes from "../../quotes.json";

const amountQuotes = ref(quotes.quotes.length);
const currentQuoteIndex = ref(Math.floor(Math.random() * amountQuotes.value));
const quote = ref(quotes.quotes[currentQuoteIndex.value]);

const show = ref(true);

setInterval(() => {
  show.value = false;
  currentQuoteIndex.value = Math.floor(Math.random() * amountQuotes.value);
  quote.value = quotes.quotes[currentQuoteIndex.value];
  show.value = true;
}, 4500);
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
