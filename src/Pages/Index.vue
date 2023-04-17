<script setup>
import HelloHAN from "@/components/HelloHAN.vue";
import RandomQuote from "@/components/RandomQuote.vue";
</script>

<template>
    <div>
        <div class="grid grid-cols-2 mt-64 px-4 md:px-0">
            <div class="col-span-2 md:col-span-1 py-4 text-center">
                <HelloHAN msg="Quotes op de HAN_"/>
            </div>

            <div class="col-span-2 md:col-span-1 py-4 text-center md:text-left">
                <RandomQuote/>
            </div>
        </div>
    </div>
</template>