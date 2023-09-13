<script setup>
import { Head } from '@inertiajs/vue3';
import GameLayout from "@/Layouts/GameLayout.vue";
import {ref} from "vue";

const props = defineProps({
    level: {
        type: Number,
        required: true,
        default: 1,
    },
});

const level1 = ref(null)

const complete = () => {
    level1.value.startCompleteAnimation()
}

let showHint = ref(false)
const openHint = () => {
    showHint.value = ! showHint.value
}
</script>

<template>
    <Head title="Dashboard" />

    <GameLayout>
        <template #canvas>
            <Level1 ref="level1"/>
        </template>
        <div class="flex gap-8 mx-auto my-10">
            <form>
                <div class="flex flex-row text-white text-lg items-center gap-3">
                    <p class=" text-gray-500">1</p>
                    <div class="flex">
                        <p class="text-gray-500"> &lt; </p><p class="text-pink-500"> div </p>
                        <p class="text-gray-400 ml-2"> class=</p>
                        <p class="text-blue-300 font-light">
                            "flex
                            <input class="p-0 -mt-1 ml-2 w-24 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-60">
                            "
                        </p>
                        <p class="text-gray-500"> &gt; </p>
                        <p class="mx-2">Help cats to eat in their bowl</p>
                        <p class="text-gray-500"> &lt; </p><p class="text-pink-500"> /div </p><p class="text-gray-500"> &gt; </p>
                    </div>
                </div>
                <div class="flex flex-col text-gray-700 w-fit">
                    <button class="bg-blue-300 text-sm px-6 py-1 mt-5 rounded-full">Submit</button>
                    <button class="bg-blue-300 text-sm px-6 py-1 mt-5 rounded-full" @click.prevent="openHint">need a paw  🐾 ?</button>
                </div>
            </form>
            <div class="border-2 border-gray-600 mx-auto p-8 text-gray-400 text-lg bg-gray-800">
                <h1 class="font-bold text-xl">Level 1</h1>
                <p>this the explanation of the game</p>
            </div>

        </div>
        <div v-if="showHint" class="group w-2/3 flex mx-auto gap-8 my-10 p-8 border-2 border-gray-600 text-gray-400 text-lg bg-gray-800">
            <p class="group-hover:hidden transition delay-700 duration-300 ease-in-out">Meow meow meow meow meow meow meow <br> meow meow meow meow !</p>
            <p class="hidden group-hover:block transition delay-700 duration-300 ease-in-out"> Just kidding! </p>
        </div>
    </GameLayout>
</template>
