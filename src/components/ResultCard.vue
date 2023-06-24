<template>
    <div class="container py-6 px-4 mb-8 bg-lotto-green text-white w-full max-w-full md:max-w-xs rounded-lg">
        <table class="table-auto">
            <tbody>
                <tr>
                    <td class="font-bold text-base pr-4 pb-1.5">Number of tickets:</td>
                    <td class="font-extrabold pb-1.5">{{store.tickets_count}}</td>
                </tr>

                <tr>
                    <td 
                        class="font-bold pb-1.5"
                        :class="{'text-3xl text-violet-800':store.matches_5 > 0, 'text-sm':store.matches_5 === 0}"
                    >Years spent:</td>
                    <td 
                        class="font-bold pb-1.5"
                        :class="{'text-3xl text-center text-violet-800':store.matches_5 > 0, 'text-sm':store.matches_5 === 0}"
                    >{{Math.floor(store.weeks_spent / 52)}}</td>
                </tr>

                <tr>
                    <td class="font-bold text-sm">Cost of tickets:</td>
                    <td class="font-bold text-sm">{{Intl.NumberFormat('hu-HU', {style: 'currency', currency: 'HUF'}).format(store.tickets_cost)}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { store } from '../store.js';
</script>