<script setup>
import HelloRick from './components/HelloRick.vue';
import RandomQuote from "@/components/RandomQuote.vue";
</script>

<template>
  <div>
    <div class="grid grid-cols-2 mt-64">
      <div class="col-span-2 md:col-span-1 py-4 text-center">
        <HelloRick msg="Quotes van Rick"/>
      </div>

      <div class="col-span-2 md:col-span-1 py-4 text-center md:text-left">
        <RandomQuote/>
      </div>
    </div>
  </div>
</template>
