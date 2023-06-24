<template>
    <li>
        <input 
            type="text" 
            @input="debounce($event.target.value)"
            :value="lottoNumber == 0 ? '': lottoNumber" 
            class="border border-lotto-green rounded-lg w-6 md:w-8 h-7 md:h-9 flex text-center items-center"
            :class="{'mr-3 md:mr-4': numberIndex !== 4, 'disabled:bg-gray-100': disabled}"
            :disabled="disabled"
            :autofocus="numberIndex === 0"
        />
    </li>
</template>

<script setup>
import { ref } from 'vue';
import { store } from '../store.js';

const emits = defineEmits(['update:modelValue']);

const props = defineProps({
  numberIndex: Number,
  lottoNumber: Number,
  disabled: Boolean
})

const timer = ref(0);

function debounce(val) {
    clearTimeout(timer.value);
    
    timer.value = setTimeout(() => {
        if (typeof val === 'string' && val.length > 0) {
            let newVal = parseInt(val);
            let error = '';

            if (isNaN(newVal)) {
            error = 'Csak számot lehet megadni.';
            }

            if (newVal < 1 || newVal > 90) {
                error = 'A számnak 1 és 90 között kell lennie.';
            }

            if (!props.disabled) {
                store.my_numbers.forEach(myNumber => {
                    if (myNumber === newVal) {
                        error = 'Egy szám egyszer szerepelhet!';
                    }
                });
            }

            if (error.length > 0) {
                alert(error);
                return '';
            }

            emits('update:modelValue', newVal);

            return newVal;
        }
    
    }, 1000);
}
</script>