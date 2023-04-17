<template>
    <Transition name="fade" mode="out-in">
        <i class="text-gray-200 text-2xl">"{{ quote }}"</i>
    </Transition>
    <br/>
    <small class="text-gray-200">Quote {{ currentQuoteIndex + 1 }} van de {{ amountQuotes }} |
        <a href="https://github.com/cedricfortuin/hanquotes/issues" target="_blank" class="hover:text-green-500 cursor-pointer">
            Nieuwe toevoegen
        </a>
        | <a :href="'whatsapp://send?text=Check this quote @ https://hanquotes.nl: ' + quote"
             data-action="share/whatsapp/share" target="_blank"
             class="hover:text-green-500">Deze quote delen</a></small>
</template>

<script setup>
import {ref} from 'vue';
import quotes from '../../quotes.json';

const amountQuotes = ref(quotes.quotes.length);
const currentQuoteIndex = ref(Math.floor(Math.random() * amountQuotes.value));
const quote = ref(quotes.quotes[currentQuoteIndex.value]);
const lastQuoteIndex = ref(currentQuoteIndex.value);

const show = ref(true);

setInterval(() => {
    show.value = false;
    let newQuoteIndex = Math.floor(Math.random() * amountQuotes.value);
    while (newQuoteIndex === lastQuoteIndex.value) {
        newQuoteIndex = Math.floor(Math.random() * amountQuotes.value);
    }
    currentQuoteIndex.value = newQuoteIndex;
    lastQuoteIndex.value = currentQuoteIndex.value;
    quote.value = quotes.quotes[currentQuoteIndex.value];
    show.value = true;
}, 6000);
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
