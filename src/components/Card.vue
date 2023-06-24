<template>
    <div class="container bg-white rounded-none md:rounded-lg max-w-fit md:max-w-3xl p-4 md:py-12 md:px-16 mx-auto mt-6 md:mt-12">
        <h2 class="font-bold text-4xl mb-8 leading-10">Result</h2>

        <ResultCard />

        <DetailsCard />

        <NumberRow title="Winning numbers:" :automatic="true" v-model="store.winning_numbers"/>

        <NumberRow title="My numbers:" v-model="store.my_numbers" @numbers-updated="setMyNumbers" />

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
import {computed, onMounted, ref, watch} from 'vue';
import {store} from '../store.js';

const drawTime = computed(() => {
    return 1001 - store.speed;
});

const intervalId = ref(0);
const increaseSpend = ref(false);

onMounted(() => {
    for(let i = 0; i < 5; i++) {
        store.my_numbers.push(0);
    }

    intervalId.value = setInterval(startDrawing, drawTime.value);
});

/**
 * Controls the velocity of drawing
 */
watch(drawTime, async (newValue, oldValue) => {
    stopDrawing();
    intervalId.value = setInterval(startDrawing, drawTime.value);
});

/**
 * Watches the my numbers array, so we can start updating the spending numbers
 */
watch(store.my_numbers, async (newValue, oldValue) => {
    if (!newValue.includes(0)) {
        increaseSpend.value = true;
    }
});

/**
 * Start drawing the winner numbers, meanwhile refreshes the statistics.
 */
const startDrawing = () => {    
    store.weeks_spent++;
    store.winning_numbers = [];

    for(let i = 0; i < 5; i++) {  
        createLottoNumbers(store.winning_numbers);
    }

    if (increaseSpend.value) {
        verifyTicketNumbers();
        store.tickets_cost += 300;
        store.tickets_count += 1;
    }
}

/**
 * Comparing the two lottery number array so we can populate the statistics for matches.
 * When hits 5 matches calls for timer cancellation.
 */
function verifyTicketNumbers() {
    let matchesCounter = 0;

    store.my_numbers.forEach(myNumber => {
        if (store.winning_numbers.includes(myNumber)) {
            matchesCounter++;
        }
    });

    switch (matchesCounter) {
        case 2:
            store.matches_2++;
            break;
        case 3:
            store.matches_3++;
            break;
        case 4:
            store.matches_4++;
            break;
        case 5:
            store.matches_5++;
            stopDrawing();
            break;    
        default:
            break;
    }
}

/**
 * Cancels the interval timer
 */
function stopDrawing() {
    clearInterval(intervalId.value);
    intervalId.value = 0;
}

/**
 * Toggles and populates the my numbers array, when users decides to randomize.
 */
function toggleMyNumbers() {
    store.my_numbers = [];

    if (store.randomizing) {
        for(let i = 0; i < 5; i++) {  
            createLottoNumbers(store.my_numbers);
        }

        increaseSpend.value = true;
    } else {
        for(let i = 0; i < 5; i++) {    
            store.my_numbers.push(0);
        }
        increaseSpend.value = false;
    }
}

/**
 * Generating the lottery numbers, verifying for duplicates in the meantime
 * @param {Array} numbersArray 
 */
function createLottoNumbers(numbersArray) {
    let newNumber = getRandomInt(1,90);

    if (typeof numbersArray !== 'undefined' && !numbersArray.includes(newNumber) && numbersArray.length < 5) {
        numbersArray.push(newNumber);
    } else if (numbersArray.length < 5) {
        createLottoNumbers(numbersArray);
    } else {
        return numbersArray;
    }
}

/**
 * Getting random integers using Crypto API
 * @param {int} min 
 * @param {int} max 
 */
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