<script setup>
import {ref} from "vue";

const songs = [
    new Audio('songs/taylorswift_anti-hero.mp3'),
    new Audio('songs/taylorswift_bad-blood.mp3'),
    new Audio('songs/taylorswift_blank-space.mp3'),
    new Audio('songs/taylorswift_lavender_haze.mp3'),
    new Audio('songs/taylorswift_love-story.mp3'),
    new Audio('songs/taylorswift_trouble.mp3')
];

let buffer = '';
document.addEventListener('keydown', (event) => {
    if (buffer === 'taylor' && event.key === 'Enter') {
        console.log('TAYLOR SWIFT GORE');
        buffer = '';
        console.log('Playing them songs');
        songs.forEach((song) => {
            song.play();
        });
    } else if (buffer === 'rick' && event.key === 'Enter' ) {
        console.log('RICK ROLLING');
        buffer = '';
        const randomTime = ref(0);
        let playCount = 0;
        const intervalId = setInterval(() => {
            if (playCount === 200) {
                clearInterval(intervalId);
            } else {
                const new_song = new Audio('songs/rickastley_never_give_up.mp3');
                new_song.play();
                playCount++;
                randomTime.value = Math.floor(Math.random() * 4000) + 1000;
            }
        }, randomTime.value);
    } else {
        buffer += event.key;
    }
});
</script>

<template>
    <RouterView/>
</template>
