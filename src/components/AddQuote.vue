<script setup>
import {ref} from 'vue';

// form with validation for the quote
// check if the quote is unique and if it is, add it to the json file
// if not, show an error message

const quote = ref('');
const quotes = ref([]);

</script>

<template>
    <div class="absolute left-4 top-2">
        <RouterLink :to="{name : 'home'}" class="text-white">&larr;&nbsp;Terug naar quotes</RouterLink>
    </div>
    <div>
        <div class="flex justify-center p-4 mt-20">
            <form class="w-1/2" method="post">
                <label for="quote" class="block text-sm font-medium leading-6 text-white">Nieuwe quote</label>
                <div class="mt-2">
                    <input type="text" name="quote" id="quote"
                           class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                           placeholder="Er zijn geen vissen" aria-describedby="quote-description"/>
                </div>
                <p class="mt-2 text-sm text-white" id="quote-description">Geen persoonlijke gegevens delen :)</p>
                <div class="mt-4">
                    <button type="submit" class="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-[#e5005b] shadow-sm hover:bg-indigo-100">Uploaden!</button>
                </div>
            </form>
        </div>
    </div>
</template>