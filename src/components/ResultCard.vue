<template>
    <div class="container py-6 px-4 mb-8 bg-lotto-green text-white w-full max-w-full md:max-w-xs rounded-lg">
        <table class="table-auto">
            <tbody>
                <tr>
                    <td class="font-bold text-base pr-4 pb-1.5">Number of tickets:</td>
                    <td class="font-extrabold pb-1.5">{{store.tickets_count}}</td>
                </tr>

                <tr>
                    <td class="font-bold text-sm pb-1.5">Years spent:</td>
                    <td class="font-bold text-sm pb-1.5">{{store.years_spent}}</td>
                </tr>

                <tr>
                    <td class="font-bold text-sm">Cost of tickets:</td>
                    <td class="font-bold text-sm">{{store.tickets_cost}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { store } from '../store.js'
</script>