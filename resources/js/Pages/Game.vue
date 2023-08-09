<script setup>
import { Head } from '@inertiajs/vue3'
import GameLayout from "@/Layouts/GameLayout.vue"
import Level1 from "@/Components/Game/Level1.vue"

const props = defineProps({
    level: {
        type: Number,
        required: true,
        default: 1,
    },
});
</script>

<template>
    <Head title="Dashboard" />

    <GameLayout>
        <template #canvas>
            <Level1 />
        </template>
        <div class="text-white">
            <button @click="startIdleAnimation" class="bg-gray-500 text-white px-4 py-2 rounded-md z-50">Level Completed ({{ level }})</button>
        </div>
    </GameLayout>
</template>
