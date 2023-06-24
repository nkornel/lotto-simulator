<template>
    <div class="container flex flex-col">
        <label class="mb-4">Speed</label>
        <div class="w-full">
            <input type="range" min="1" max="100" value="50" class="slider w-full appearance-none h-2 bg-lotto-gray border-md" id="myRange">
        </div>
    </div>
</template>

<script>
</script>

<style>

input[type="range"] {
  -webkit-appearance: none;
  margin-right: 15px;
  width: 200px;
  height: 7px;
  background: green;
  border-radius: 5px;
  background-image: linear-gradient(#ff4500, #ff4500);
  background-size: 70% 100%;
  background-repeat: no-repeat;
}

/* Input Thumb */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #ff4500;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
}

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #ff4500;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
}

input[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #ff4500;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
}

input[type="range"]::-webkit-slider-thumb:hover {
  background: #ff0200;
}

input[type="range"]::-moz-range-thumb:hover {
  background: #ff0200;
}

input[type="range"]::-ms-thumb:hover {
  background: #ff0200;
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