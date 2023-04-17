<script setup>
import HelloHAN from '@/components/HelloHAN.vue';
import RandomQuote from "@/components/RandomQuote.vue";


const songs = [
    new Audio('songs/taylorswift_anti-hero.mp3'),
    new Audio('songs/taylorswift_bad-blood.mp3'),
    new Audio('songs/taylorswift_blank-space.mp3'),
    new Audio('songs/taylorswift_lavender_haze.mp3'),
    new Audio('songs/taylorswift_love-story.mp3'),
    new Audio('songs/taylorswift_trouble.mp3'),
    new Audio('songs/rickastley_never_give_up.mp3')
];

let buffer = '';
document.addEventListener('keydown', (event) => {
    //  if ts is pressed, followed by enter, then log taylor astley gore
    if (buffer === 'ts' && event.key === 'Enter') {
        console.log('TAYLOR ASTLEY GORE');
        buffer = '';
        console.log('Playing them songs');
        songs.forEach((song) => {
            song.play();
        });
    } else {
        buffer += event.key;
    }
});
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
