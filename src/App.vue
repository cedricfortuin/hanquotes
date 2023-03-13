<script setup>
import HelloWorld from './components/HelloWorld.vue';
import RandomQuote from "@/components/RandomQuote.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Quotes van Rick"/>
    </div>
  </header>

  <main>
    <RandomQuote/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
