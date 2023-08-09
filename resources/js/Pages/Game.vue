<script setup>
import { Head } from '@inertiajs/vue3';
import GameLayout from "@/Layouts/GameLayout.vue";
</script>

<template>
    <Head title="Dashboard" />

    <GameLayout>
        <template #canvas>
            Animation goes here
        </template>
        <div class="text-white">
         hello?
        </div>
    </GameLayout>
</template>
