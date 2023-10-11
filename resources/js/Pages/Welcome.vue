<script setup>
import { Head, Link } from '@inertiajs/vue3';
import LeftToRight from "../Components/LeftToRight.vue";
import RightToLeft from "../Components/RightToLeft.vue";

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <Head title="Welcome" />
    <div class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-700 dark:bg-dots-lighter  selection:bg-red-500 selection:text-white">
        <div v-if="canLogin" class="absolute z-50 sm:fixed sm:top-0 sm:right-0 p-6 text-right">
            <Link
                v-if="$page.props.auth.user"
                :href="route('dashboard')"
                class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                Dashboard
            </Link>
            <template v-else>
                <Link
                    :href="route('login')"
                    class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >Log in</Link
                >

                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >Register</Link
                >
            </template>
        </div>
        <div class="absolute w-screen h-screen overflow-hidden">
            <LeftToRight />
            <RightToLeft/>
        </div>
        <div class="absolute z-50 mx-auto p-6 lg:p-8">
            <a :href="route('play.level', 1)">
                <button class="bg-blue-300 p-5 rounded-2xl">Click me</button>
            </a>
        </div>
    </div>
</template>
