<template>
    <div class="container flex items-center mb-6">
        <label class="mr-4 md:mr-12 text-left text-sm md:text-base">Play with random numbers:</label>
        
        <div class="flex">
            <input 
            type="checkbox"
            :value="modelValue"
            @change="checkboxToggle"
            class="
                relative 
                appearance-none
                checked:border-black 
                peer 
                checked:bg-white 
                border border-lotto-green 
                focus:border 
                rounded-lg 
                w-6 md:w-8 h-7 md:h-9 
                text-center" 
            />
            <svg
                class="
                    absolute 
                    w-6 md:w-8 h-5 md:h-6 mt-1.5
                    hidden peer-checked:block
                    pointer-events-none
                "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
    </div>
</template>

<script setup>
import {store} from '../store.js';
defineProps(['modelValue'])
const emit = defineEmits(['toggled']);

function checkboxToggle(ev) {
    store.randomizing = ev.target.checked;
    emit('toggled', ev.target.checked);
}
</script>