<template>
    <div class="container flex flex-col">
        <label class="mb-4">Speed</label>
        <div class="w-full">
            <div class="h-1 w-full bg-lotto-gray relative">
                <input ref="velocityRange" v-on:input="handleChange" type="range" min="1" max="100" v-model="velocity" class="absolute slider w-full appearance-none h-2 bg-lotto-gray -top-0.5">
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
const velocityRange = ref();
const velocity = ref(1);

function handleChange(e) {
    console.log(velocity);
    let target = e.target
    if (e.target.type !== 'range') {
        target = document.getElementById('range')
    } 
    const min = target.min
    const max = target.max
    const val = target.value
    
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

</script>

<style>

input[type="range"] {
  -webkit-appearance: none;
  margin-right: 15px;
  height: 8px;
  background: transparent;
  border-radius: 8px;
  background-image: linear-gradient(#A5D9C8, #A5D9C8);
  background-size: 1% 100%;
  background-repeat: no-repeat;
}

/* Input Thumb */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: #fff;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
}

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: #fff;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
}

input[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: #fff;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
}

input[type="range"]::-webkit-slider-thumb:hover {
  background: #fff;
}

input[type="range"]::-moz-range-thumb:hover {
  background: #fff;
}

input[type="range"]::-ms-thumb:hover {
  background: #fff;
}

/* Input Track */
input[type=range]::-webkit-slider-runnable-track  {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

input[type=range]::-moz-range-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

input[type="range"]::-ms-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}
</style>