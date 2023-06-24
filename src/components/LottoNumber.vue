<template>
    <li>
        <input 
            type="text" 
            @input="$emit('update:modelValue', verifyEntry($event.target))"
            :value="lottoNumber" 
            class="border border-lotto-green rounded-lg w-6 md:w-8 h-7 md:h-9 flex text-center items-center"
            :class="{'mr-3 md:mr-4': numberIndex !== 4, 'disabled:bg-gray-100': disabled}"
            :disabled="disabled"
            :autofocus="numberIndex === 0"
        />
    </li>
</template>

<script setup>
import { store } from '../store.js';

const emits = defineEmits(['update:modelValue']);

const props = defineProps({
  numberIndex: Number,
  lottoNumber: Number,
  disabled: Boolean
})

/**
 * Validates the number input for valid lottery numbers.
 * @param {object} target 
 */
function verifyEntry(target) {
    let val = target.value;

    if (typeof val === 'string' && val.length > 0) {
        let newVal = parseInt(val);

        if (isNaN(newVal)) {
            alert('Csak számot lehet megadni.');
            target.value = 0;
            return 0;
        }

        if (newVal < 1 || newVal > 90) {
            alert('A számnak 1 és 90 között kell lennie.');
            target.value = 0;
            return 0;
        }

        if (!props.disabled && store.my_numbers.includes(newVal)) {
            alert('Egy szám egyszer szerepelhet!');
            target.value = 0;
            return 0;
        }

        return newVal;
    }
    
    target.value = 0;
    return 0;
}
</script>