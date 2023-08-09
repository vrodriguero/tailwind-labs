<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="min-h-screen flex flex-col pt-4 bg-gray-900">
        <div class="w-full px-6 py-4">
            <div>
                <Link href="/" class="text-white font-bold text-2xl">
                    Tailwind-Labs
                </Link>
            </div>
        </div>
        <div class="w-full mt-6 px-6 py-4 flex flex-col flex-grow">
            <div class="flex flex-grow">
                <slot name="canvas" />
            </div>
            <slot />
        </div>
    </div>
</template>
