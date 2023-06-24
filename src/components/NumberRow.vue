<template>
    <div class="container flex items-center mb-6">
        <label class="mr-4 md:mr-7 text-left w-32 md:w-36 text-sm md:text-base">{{ title }}</label>
        <ul class="flex">
            <li v-for="n in 5">
                <input type="text" :value="n" class="border border-lotto-green rounded-lg w-6 md:w-8 h-7 md:h-9 flex text-center items-center"
                    :class="{'mr-4':n!== 5}"
                />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  nums: Array
})

const n = ref(1)
</script>