<script setup>

import HelloHAN from "@/components/HelloHAN.vue";
import quotes from '../../quotes.json';
</script>

<template>
  <div>
    <div class="grid grid-cols-2 mt-64 px-4 md:px-0">
      <div class="col-span-2 md:col-span-1 py-4">
        <HelloHAN msg="Alle quotes op een rijtje_" class="text-center"/>
        <div class="text-center mt-2">
          <a href="/" class="text-white hover:text-green-500 cursor-pointer">Terug naar home</a>
        </div>
      </div>

      <div class="col-span-2 md:col-span-1 py-4 text-center md:text-left">
        <ul>
          <li v-for="quote in quotes.quotes" class="text-white">
            {{ quote.quote }} | <span class="italic">{{ quote.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>