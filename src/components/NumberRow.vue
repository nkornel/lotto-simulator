<template>
    <div class="container flex items-center mb-6">
        <label class="mr-4 md:mr-7 text-left w-32 md:w-36 text-sm md:text-base">{{ title }}</label>
        <ul class="flex">
            <LottoNumber 
                v-for="(item, index) in modelValue" 
                :number-index="index" 
                :lotto-number="item" 
                :disabled="automatic" 
                v-model="modelValue[index]" 
            />
        </ul>
    </div>
</template>

<script setup>
import { watch } from 'vue';
import LottoNumber from './LottoNumber.vue';
import {store} from '../store.js';

watch(store.my_numbers, async (newNumbers, oldNumbers) => {
    if (!props.automatic) {
        if (!newNumbers.includes(0)) {
            emits('numbersUpdated');
        }
    }
});

const props = defineProps({
  title: String,
  automatic: Boolean,
  modelValue: Array
})

const emits = defineEmits(['numbersUpdated']);
</script>