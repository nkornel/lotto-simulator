<template>
    <div class="container bg-white rounded-none md:rounded-lg w-full max-w-fit md:max-w-3xl p-4 md:py-12 md:px-16 mx-4 md:mx-auto mt-6 md:mt-12">
        <h2 class="font-bold text-4xl mb-8 leading-10">Result</h2>

        <ResultCard />

        <DetailsCard />

        <NumberRow title="Winning numbers:" :automatic="true" v-model="store.winning_numbers"/>

        <NumberRow title="My numbers:" v-model="store.my_numbers" @numbers-updated="startPlaying" />

        <Randomizer @toggled="toggleMyNumbers" />

        <VelocityRow v-model="store.speed" />
    </div>
</template>

<script setup>
import DetailsCard from './DetailsCard.vue';
import NumberRow from './NumberRow.vue';
import ResultCard from './ResultCard.vue';
import Randomizer from './Randomizer.vue';
import VelocityRow from './VelocityRow.vue';
import {onMounted} from 'vue';
import {store} from '../store.js';

onMounted(() => {
    for(let i = 0; i < 5; i++) {  
        createLottoNumbers(store.winning_numbers); 
        store.my_numbers.push(0);
    }
});

function toggleMyNumbers() {
    store.my_numbers = [];

    if (store.randomizing) {
        for(let i = 0; i < 5; i++) {  
            createLottoNumbers(store.my_numbers);
        }
    } else {
        for(let i = 0; i < 5; i++) {    
            store.my_numbers.push(0);
        }
    }
}

function startPlaying() {

}

function createLottoNumbers(numbersArray) {
    let newNumber = getRandomInt(1,90);

    if (!numbersArray.includes(newNumber) && numbersArray.length !== 5) {
        numbersArray.push(newNumber);
    } else if (numbersArray.length !== 5) {
        createLottoNumbers();
    } else {
        return;
    }
}

function getRandomInt(min, max) {
    var byteArray = new Uint8Array(1);
    window.crypto.getRandomValues(byteArray);

    var range = max - min + 1;
    var max_range = 256;
    if (byteArray[0] >= Math.floor(max_range / range) * range)
        return getRandomInt(min, max);
    return min + (byteArray[0] % range);
}
</script>