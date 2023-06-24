<template>
    <div class="flex flex-col justify-center align-center border border-lotto-yellow drop-shadow-lotto py-3 px-8 w-full"
        :class="{
            'rounded-tl-xl md:rounded-l-xl': boxIndex === 0,
            'rounded-tr-xl md:rounded-none': boxIndex === 1, 
            'rounded-bl-xl md:rounded-none': boxIndex === 2, 
            'rounded-br-xl md:rounded-r-xl': boxIndex === 3
        }"
    >
        <label class="font-bold text-xs text-center mb-2">{{ boxIndex + 2 }} matches</label>
        <label class="font-extrabold text-center text-base">{{ store[`matches_${boxIndex+2}`] }}</label>
    </div>
</template>

<script setup>
import { store } from '../store.js'

const props = defineProps({
  boxIndex: Number
})
</script>