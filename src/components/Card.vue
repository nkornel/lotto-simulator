<script setup>
import DetailsCard from './DetailsCard.vue';
import NumberRow from './NumberRow.vue';
import ResultCard from './ResultCard.vue';
import Randomizer from './Randomizer.vue';
import VelocityRow from './VelocityRow.vue';
</script>

<template>
    <div class="container bg-white rounded-none md:rounded-lg w-full max-w-fit md:max-w-3xl p-4 md:py-12 md:px-16 mx-4 md:mx-auto mt-6 md:mt-12">
        <h2 class="font-bold text-4xl mb-8 leading-10">Result</h2>

        <ResultCard />

        <DetailsCard />

        <NumberRow title="Winning numbers:"/>

        <NumberRow title="My numbers:"/>

        <Randomizer />

        <VelocityRow />
    </div>
</template>