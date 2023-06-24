<script setup>
import DetailBox from './DetailBox.vue';
</script>

<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-0 mb-8 w-full md:max-w-lg">
        <DetailBox :box-index="0" />
        <DetailBox :box-index="1" />
        <DetailBox :box-index="2" />
        <DetailBox :box-index="3" />
    </div>
</template>